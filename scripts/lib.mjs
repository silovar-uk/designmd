import fs from 'node:fs/promises';
import path from 'node:path';

export async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

export function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function parseScalar(raw) {
  const value = raw.trim();
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'null') return null;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  if ((value.startsWith('[') && value.endsWith(']')) || (value.startsWith('{') && value.endsWith('}'))) {
    return JSON.parse(value);
  }
  return value.replace(/^['"]|['"]$/g, '');
}

export function parseFrontMatter(source, filePath) {
  if (!source.startsWith('---\n')) {
    throw new Error(`${filePath}: front matter is required`);
  }
  const end = source.indexOf('\n---\n', 4);
  if (end === -1) throw new Error(`${filePath}: front matter is not closed`);
  const header = source.slice(4, end);
  const body = source.slice(end + 5).trim();
  const data = {};
  for (const line of header.split('\n')) {
    if (!line.trim()) continue;
    const colon = line.indexOf(':');
    if (colon === -1) throw new Error(`${filePath}: invalid front matter line: ${line}`);
    const key = line.slice(0, colon).trim();
    const raw = line.slice(colon + 1);
    data[key] = parseScalar(raw);
  }
  return { data, body };
}

export function inlineMarkdown(text) {
  let value = escapeHtml(text);
  value = value.replace(/`([^`]+)`/g, '<code>$1</code>');
  value = value.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  value = value.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)/g, '<a href="$2">$1</a>');
  return value;
}

export function slugifyHeading(text) {
  return text
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[\s　]+/g, '-')
    .replace(/[^\p{Letter}\p{Number}-]/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'section';
}

export function markdownToHtml(markdown) {
  const lines = markdown.split('\n');
  const html = [];
  let paragraph = [];
  let list = [];
  let quote = [];
  let code = [];
  let inCode = false;
  const headingIds = new Map();

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (!list.length) return;
    html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
    list = [];
  };
  const flushQuote = () => {
    if (!quote.length) return;
    html.push(`<blockquote><p>${inlineMarkdown(quote.join(' '))}</p></blockquote>`);
    quote = [];
  };
  const flushCode = () => {
    html.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`);
    code = [];
  };
  const flushAll = () => {
    flushParagraph();
    flushList();
    flushQuote();
  };

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        flushAll();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      code.push(line);
      continue;
    }
    if (!line.trim()) {
      flushAll();
      continue;
    }
    const heading = line.match(/^(#{2,6})\s+(.+)$/);
    if (heading) {
      flushAll();
      const level = heading[1].length;
      const text = heading[2].trim();
      const base = slugifyHeading(text);
      const count = headingIds.get(base) ?? 0;
      headingIds.set(base, count + 1);
      const id = count ? `${base}-${count + 1}` : base;
      html.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
      continue;
    }
    if (/^-\s+/.test(line)) {
      flushParagraph();
      flushQuote();
      list.push(line.replace(/^-\s+/, ''));
      continue;
    }
    if (/^>\s?/.test(line)) {
      flushParagraph();
      flushList();
      quote.push(line.replace(/^>\s?/, ''));
      continue;
    }
    paragraph.push(line.trim());
  }

  if (inCode) flushCode();
  flushAll();
  return html.join('\n');
}

export async function walkFiles(root, extension = '.md') {
  const output = [];
  async function visit(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) await visit(fullPath);
      else if (entry.name.endsWith(extension)) output.push(fullPath);
    }
  }
  await visit(root);
  return output.sort();
}

export function sitePath(basePath, pathname) {
  const base = `/${String(basePath || '').replace(/^\/+|\/+$/g, '')}`;
  const target = `/${String(pathname || '').replace(/^\/+/, '')}`;
  return `${base}${target}`.replace(/\/{2,}/g, '/');
}

export function outputPath(outputRoot, slug) {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  return path.join(outputRoot, clean, 'index.html');
}

export async function ensureParent(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}
