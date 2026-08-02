import fs from 'node:fs/promises';
import path from 'node:path';
import {
  ensureParent,
  escapeHtml,
  markdownToHtml,
  outputPath,
  parseFrontMatter,
  readJson,
  sitePath,
  walkFiles
} from './lib.mjs';

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, 'site/next');
const contentRoot = path.join(ROOT, 'content');

const [site, navigation, principles, reviewData] = await Promise.all([
  readJson(path.join(ROOT, 'data/site.json')),
  readJson(path.join(ROOT, 'data/navigation.json')),
  readJson(path.join(ROOT, 'data/principles.json')),
  readJson(path.join(ROOT, 'data/review-rules.json'))
]);

const files = await walkFiles(contentRoot);
const items = [];
for (const filePath of files) {
  const source = await fs.readFile(filePath, 'utf8');
  const { data, body } = parseFrontMatter(source, filePath);
  items.push({ ...data, filePath: path.relative(ROOT, filePath), body, html: markdownToHtml(body) });
}

const REQUIRED = ['id', 'title', 'summary', 'type', 'area', 'status', 'updated_at', 'slug'];
const errors = [];
const byId = new Map();
const bySlug = new Map();
for (const item of items) {
  for (const field of REQUIRED) {
    if (item[field] === undefined || item[field] === '') errors.push(`${item.filePath}: missing ${field}`);
  }
  if (byId.has(item.id)) errors.push(`duplicate id: ${item.id}`);
  if (bySlug.has(item.slug)) errors.push(`duplicate slug: ${item.slug}`);
  byId.set(item.id, item);
  bySlug.set(item.slug, item);
  for (const principleId of item.principles ?? []) {
    if (!principles.some((principle) => principle.id === principleId)) errors.push(`${item.filePath}: unknown principle ${principleId}`);
  }
}
for (const item of items) {
  for (const relatedId of item.related ?? []) {
    if (!byId.has(relatedId)) errors.push(`${item.filePath}: unknown related content ${relatedId}`);
  }
}
for (const group of [...navigation.primary, ...navigation.secondary]) {
  for (const id of group.items) {
    if (!byId.has(id)) errors.push(`navigation: unknown content id ${id}`);
  }
}
if (errors.length) {
  errors.forEach((error) => console.error(`[build:error] ${error}`));
  process.exit(1);
}

await fs.rm(OUTPUT, { recursive: true, force: true });
await fs.mkdir(path.join(OUTPUT, 'assets', 'css'), { recursive: true });
await fs.mkdir(path.join(OUTPUT, 'assets', 'js'), { recursive: true });
await fs.mkdir(path.join(OUTPUT, 'data'), { recursive: true });

const asset = (pathname) => sitePath(site.basePath, pathname);
const hrefFor = (id) => sitePath(site.basePath, byId.get(id).slug);

function header() {
  const primaryLinks = navigation.primary.map((group) => `<a href="${hrefFor(group.items[0])}">${escapeHtml(group.label)}</a>`).join('');
  return `
<header class="site-header">
  <a class="brand" href="${sitePath(site.basePath, '/')}"><span aria-hidden="true">d/</span> designmd</a>
  <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" data-nav-toggle>メニュー</button>
  <nav id="site-navigation" class="site-nav" aria-label="主要ナビゲーション" data-site-nav>${primaryLinks}<a href="${hrefFor('review-tool')}">レビュー</a><a href="${site.repository}">GitHub</a></nav>
</header>`;
}

function footer() {
  return `
<footer class="site-footer">
  <p>designmd ${escapeHtml(site.version)}／最終更新 ${escapeHtml(site.updatedAt)}</p>
  <p><a href="${site.repository}">GitHubリポジトリ</a></p>
</footer>`;
}

function layout({ title, description, content, type = 'article', pageScript = '' }) {
  const pageTitle = title === site.name ? site.title : `${title}｜designmd`;
  return `<!doctype html>
<html lang="${site.language}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#f4f0e8">
  <title>${escapeHtml(pageTitle)}</title>
  <link rel="stylesheet" href="${asset('/assets/css/site.css')}">
  <script>document.documentElement.classList.add('js');</script>
  <script type="module" src="${asset('/assets/js/main.js')}"></script>
  ${pageScript ? `<script type="module" src="${asset(`/assets/js/${pageScript}`)}"></script>` : ''}
</head>
<body data-page-type="${escapeHtml(type)}">
  <a class="skip-link" href="#main">本文へ移動</a>
  ${header()}
  <main id="main">${content}</main>
  ${footer()}
</body>
</html>`;
}

function contentMeta(item) {
  return `<dl class="content-meta"><div><dt>状態</dt><dd>${escapeHtml(item.status)}</dd></div><div><dt>更新</dt><dd>${escapeHtml(item.updated_at)}</dd></div>${item.verified_at ? `<div><dt>実務確認</dt><dd>${escapeHtml(item.verified_at)}</dd></div>` : ''}</dl>`;
}

function relatedBlock(item) {
  const ids = item.related ?? [];
  if (!ids.length) return '';
  const links = ids.filter((id) => byId.has(id)).map((id) => {
    const target = byId.get(id);
    return `<li><a href="${hrefFor(id)}">${escapeHtml(target.title)}</a><span>${escapeHtml(target.summary)}</span></li>`;
  }).join('');
  return `<aside class="related"><h2>関連する内容</h2><ul>${links}</ul></aside>`;
}

function principlesBlock(item) {
  const selected = (item.principles ?? []).map((id) => principles.find((principle) => principle.id === id)).filter(Boolean);
  if (!selected.length) return '';
  return `<aside class="related-principles"><h2>関連する原則</h2><ul>${selected.map((principle) => `<li><strong>${escapeHtml(principle.title)}</strong><span>${escapeHtml(principle.summary)}</span></li>`).join('')}</ul></aside>`;
}

function renderReviewForm() {
  const targetOptions = Object.entries(reviewData.targets).map(([id, target], index) => `<label><input type="radio" name="review-target" value="${id}" ${index === 0 ? 'checked' : ''}> ${escapeHtml(target.label)}</label>`).join('');
  const allRules = Object.entries(reviewData.rules).map(([id, rule]) => `<label class="review-rule" data-rule-id="${id}" data-return-to="${rule.returnTo}" data-severity="${rule.severity}" hidden><input type="checkbox" value="${id}"><span><strong>${escapeHtml(rule.label)}</strong><small>${escapeHtml(rule.severity.toUpperCase())}</small></span></label>`).join('');
  return `<section class="tool-panel" data-review-tool>
  <form>
    <fieldset><legend>確認する対象</legend><div class="option-grid">${targetOptions}</div></fieldset>
    <fieldset><legend>該当する問題</legend><div class="review-rules">${allRules}</div></fieldset>
    <div class="tool-actions"><button type="reset">リセット</button><button type="button" data-review-copy>結果をコピー</button></div>
  </form>
  <section class="review-result" aria-live="polite" data-review-result>
    <p class="status-chip" data-review-status>項目を選ぶと、戻る工程が表示されます。</p>
    <h2 data-review-title>レビュー結果</h2>
    <div data-review-critical></div><div data-review-remediations></div>
    <pre><code data-review-output></code></pre>
  </section>
</section>`;
}

function renderDecisionLog() {
  return `<section class="tool-panel" data-decision-log>
  <form>
    <div class="form-grid"><label>判断日<input type="date" name="decidedAt"></label><label>判断者<input type="text" name="owner" autocomplete="name"></label></div>
    <label>決めたこと<textarea name="decision" rows="4"></textarea></label>
    <label>根拠<textarea name="evidence" rows="4" placeholder="1行に1項目"></textarea></label>
    <label>採用しなかった案<textarea name="rejected" rows="4" placeholder="1行に1項目"></textarea></label>
    <label>未確認事項<textarea name="uncertainties" rows="4" placeholder="1行に1項目"></textarea></label>
    <label>見直す条件<textarea name="reviewTriggers" rows="4" placeholder="1行に1項目"></textarea></label>
    <p role="status" data-draft-status>この端末内に一時保存します。</p>
    <div class="tool-actions"><button type="reset">リセット</button><button type="button" data-decision-copy>Markdownをコピー</button></div>
  </form><pre><code data-decision-output></code></pre>
</section>`;
}

function renderTool(item) {
  if (item.id === 'review-tool') return renderReviewForm();
  if (item.id === 'decision-log-tool') return renderDecisionLog();
  return '';
}

function articlePage(item) {
  const tool = item.type === 'tool' ? renderTool(item) : '';
  const content = `
<div class="page-shell">
  <nav class="breadcrumb" aria-label="パンくず"><a href="${sitePath(site.basePath, '/')}">トップ</a><span aria-hidden="true">/</span><span>${escapeHtml(item.title)}</span></nav>
  <article class="article">
    <header class="article-header"><p class="eyebrow">${escapeHtml(item.type.toUpperCase())} / ${escapeHtml(item.area.toUpperCase())}</p><h1>${escapeHtml(item.title)}</h1><p class="lead">${escapeHtml(item.summary)}</p>${contentMeta(item)}</header>
    <div class="prose">${item.html}</div>${tool}${principlesBlock(item)}${relatedBlock(item)}
  </article>
</div>`;
  return layout({ title: item.title, description: item.summary, content, type: item.type, pageScript: item.script ?? '' });
}

function homePage() {
  const identity = byId.get('identity');
  const entryCards = navigation.primary.map((group, index) => {
    const first = byId.get(group.items[0]);
    return `<article class="entry-card"><span>${String(index + 1).padStart(2, '0')}</span><h2>${escapeHtml(group.label)}</h2><p>${escapeHtml(group.description)}</p><a href="${hrefFor(first.id)}">${escapeHtml(first.title)}を読む</a></article>`;
  }).join('');
  const principleCards = [...principles].sort((a, b) => a.order - b.order).map((principle, index) => `<article class="principle-card"><span>${String(index + 1).padStart(2, '0')}</span><h3>${escapeHtml(principle.title)}</h3><p>${escapeHtml(principle.summary)}</p></article>`).join('');
  const cases = items.filter((item) => item.type === 'case').sort((a, b) => a.order - b.order).map((item) => `<li><a href="${hrefFor(item.id)}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.summary)}</span></a></li>`).join('');
  const tools = items.filter((item) => item.type === 'tool').sort((a, b) => a.order - b.order).map((item) => `<li><a href="${hrefFor(item.id)}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.summary)}</span></a></li>`).join('');
  const content = `
<section class="hero"><div><p class="eyebrow">DESIGN / OPERATION / HUMAN AGENCY</p><h1>人の判断を、<br>途中で消さない。</h1><p class="hero-lead">文章、資料、Web、アプリ、データ、運用をつくるとき、AIやシステムに判断の主導権を預け過ぎない。何を見て、何を選び、何を保留し、失敗後にどう戻るかを、成果物と仕組みの中へ残すためのガイド。</p><div class="hero-actions"><a class="button" href="${hrefFor('staged-production')}">3分で使う</a><a class="button button-secondary" href="${hrefFor('review-tool')}">レビューする</a></div></div><aside><strong>${escapeHtml(site.version)}</strong><span>JavaScriptなしでも主要内容を読める並走版</span></aside></section>
<section class="home-section"><header><p class="eyebrow">MAP</p><h2>五つの入口</h2></header><div class="entry-grid">${entryCards}</div></section>
<section class="home-section contrast"><header><p class="eyebrow">PRINCIPLES</p><h2>八つの共通原則</h2></header><div class="principle-grid">${principleCards}</div></section>
<section class="home-section split"><div><p class="eyebrow">CASES</p><h2>実案件から得た学び</h2><ul class="link-list">${cases}</ul></div><div><p class="eyebrow">TOOLS</p><h2>判断を残す道具</h2><ul class="link-list">${tools}</ul></div></section>
<section class="home-section origin"><p class="eyebrow">ORIGIN</p><h2>${escapeHtml(identity.title)}</h2><p>${escapeHtml(identity.summary)}</p><a href="${hrefFor('identity')}">DesignMDの定義を読む</a></section>`;
  return layout({ title: site.name, description: site.description, content, type: 'home' });
}

await ensureParent(path.join(OUTPUT, 'index.html'));
await fs.writeFile(path.join(OUTPUT, 'index.html'), homePage());
for (const item of items) {
  const target = outputPath(OUTPUT, item.slug);
  await ensureParent(target);
  await fs.writeFile(target, articlePage(item));
}

await fs.copyFile(path.join(ROOT, 'src/styles/site.css'), path.join(OUTPUT, 'assets/css/site.css'));
for (const scriptName of ['main.js', 'storage.js', 'review-engine.js', 'review.js', 'decision-log.js']) {
  await fs.copyFile(path.join(ROOT, 'src/scripts', scriptName), path.join(OUTPUT, 'assets/js', scriptName));
}
await fs.writeFile(path.join(OUTPUT, 'data/review-rules.json'), JSON.stringify(reviewData, null, 2));
await fs.writeFile(path.join(OUTPUT, 'search-index.json'), JSON.stringify(items.map((item) => ({ id: item.id, title: item.title, summary: item.summary, type: item.type, area: item.area, url: hrefFor(item.id) })), null, 2));
await fs.writeFile(path.join(OUTPUT, '.nojekyll'), '');
console.log(`Built ${items.length + 1} pages in site/next/`);
