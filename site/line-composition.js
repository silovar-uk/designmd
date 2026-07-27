(() => {
  'use strict';

  if (document.querySelector('#line-composition')) return;

  const anchor = document.querySelector('#writing-guide')
    || document.querySelector('#japanese-writing')
    || document.querySelector('#editorial');
  if (!anchor) return;

  const section = document.createElement('section');
  section.id = 'line-composition';
  section.className = 'line-composition';
  section.setAttribute('aria-labelledby', 'line-composition-title');
  section.innerHTML = `
    <header class="line-composition__head">
      <p class="line-composition__eyebrow">LINE COMPOSITION FOR THE WEB</p>
      <h2 id="line-composition-title">改行を置くのではなく、<br>改行できる条件を設計する。</h2>
      <p>紙の固定された版面を再現しない。意味のまとまり、行幅、禁則、読ませる速度を決め、画面幅に応じて行末は流動させる。</p>
    </header>

    <div class="line-composition__principles">
      <article><b>意味は固定</b><p>固有名詞、数字と単位、強調句など、壊してはいけない単位を先に決める。</p></article>
      <article><b>行末は流動</b><p>PCで美しい一行を全端末へ強制せず、幅と文字倍率の変化を受け入れる。</p></article>
      <article><b>変化を検査</b><p>代表幅だけでなく、幅を連続的に動かし、不自然になる瞬間を探す。</p></article>
    </div>

    <div class="line-composition__lab">
      <div class="line-composition__controls">
        <label>試す見出し
          <textarea data-line-title>紙雑誌のような編集密度を、変化するWebページへ持ち込む</textarea>
        </label>
        <label>折り返し方法
          <select data-line-mode>
            <option value="default">ブラウザの通常折り返し</option>
            <option value="balanced" selected>見出しを均衡させる</option>
            <option value="nowrap">折り返さない</option>
          </select>
        </label>
        <label>見出し領域の幅
          <span class="line-composition__range-row">
            <input type="range" min="12" max="34" value="23" step="1" data-line-width>
            <output data-line-width-output>23em</output>
          </span>
        </label>
        <p class="line-composition__preview-note" data-line-note>短い見出しでは行ごとの文字量を均衡させる。未対応ブラウザでは通常折り返しへ戻る。</p>
      </div>

      <div class="line-composition__preview-shell">
        <article class="line-composition__preview" data-line-preview data-wrap-mode="balanced">
          <small>LIVE WRAP PREVIEW</small>
          <h3 data-line-preview-title>紙雑誌のような編集密度を、変化するWebページへ持ち込む</h3>
        </article>
      </div>
    </div>

    <div class="line-composition__implementation">
      <article>
        <h3>AIが先に決めるもの</h3>
        <ul>
          <li>見出しの役割と最大行数</li>
          <li>同じ行に置きたい意味のまとまり</li>
          <li>分割禁止語、数字＋単位、固有名詞</li>
          <li>スマホで短縮可能な表現</li>
        </ul>
      </article>
      <article>
        <h3>ブラウザへ委ねるもの</h3>
        <ul>
          <li>その画面幅での最終行末</li>
          <li>文字拡大時の再折り返し</li>
          <li>禁則と行幅の局所的な調整</li>
          <li>未対応機能の通常折り返しへの退避</li>
        </ul>
      </article>
    </div>

    <div class="line-composition__prompt">
      <header><h3>AIへ渡す実装指示</h3><button type="button" data-line-copy>コピー</button></header>
      <pre data-line-prompt>以下を必須要件として参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/web-line-composition.md

主要見出しごとに、役割、最大行数、意味のまとまり、分割禁止語、折り返し候補、スマホで短縮可能な表現を整理してから実装してください。
固定の&lt;br&gt;は原則使わず、見出しはtext-wrap: balance、本文はtext-wrap: prettyとline-break: strictを漸進適用してください。
nowrapは人名、日付、数字＋単位、短いタグだけに限定し、長いURLだけoverflow-wrap: anywhereで救済してください。
320、375、768、1024、1440pxと200％文字拡大で確認し、固定した意味単位、流動させた行末、例外的な固定改行の理由を報告してください。</pre>
    </div>

    <div class="line-composition__links">
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/web-line-composition.md">詳細ガイド</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/prompts/web-line-composition.md">プロンプト全文</a>
      <a href="https://www.w3.org/International/jlreq/">W3C 日本語組版</a>
      <a href="https://alistapart.com/article/dao/">A Dao of Web Design</a>
      <a href="https://frankchimero.com/blog/2013/what-screens-want/">What Screens Want</a>
    </div>
  `;

  anchor.after(section);

  const titleInput = section.querySelector('[data-line-title]');
  const modeInput = section.querySelector('[data-line-mode]');
  const widthInput = section.querySelector('[data-line-width]');
  const widthOutput = section.querySelector('[data-line-width-output]');
  const preview = section.querySelector('[data-line-preview]');
  const previewTitle = section.querySelector('[data-line-preview-title]');
  const note = section.querySelector('[data-line-note]');

  const notes = {
    default: '通常の折り返し。意味上の分割禁止や最大幅を別途設計しないと、偶然の行末になりやすい。',
    balanced: '短い見出しでは行ごとの文字量を均衡させる。未対応ブラウザでは通常折り返しへ戻る。',
    nowrap: '短いラベルでは有効。長い見出しに使うと、縮小か横はみ出しを招くため原則採用しない。'
  };

  const sync = () => {
    const value = titleInput?.value.trim() || '見出しを入力してください';
    const mode = modeInput?.value || 'balanced';
    const width = Number(widthInput?.value || 23);

    if (previewTitle) previewTitle.textContent = value;
    if (preview) {
      preview.dataset.wrapMode = mode;
      preview.style.setProperty('--preview-width', `${width}em`);
    }
    if (widthOutput) widthOutput.textContent = `${width}em`;
    if (note) note.textContent = notes[mode] || '';
  };

  titleInput?.addEventListener('input', sync);
  modeInput?.addEventListener('change', sync);
  widthInput?.addEventListener('input', sync);
  sync();

  section.querySelector('[data-line-copy]')?.addEventListener('click', async (event) => {
    const button = event.currentTarget;
    const text = section.querySelector('[data-line-prompt]')?.textContent?.trim() || '';
    try {
      await navigator.clipboard.writeText(text);
      const original = button.textContent;
      button.textContent = 'コピーしました';
      window.setTimeout(() => { button.textContent = original; }, 1500);
    } catch {
      window.prompt('以下をコピーしてください', text);
    }
  });

  const sideNavList = document.querySelector('.side-nav ol');
  if (sideNavList && !sideNavList.querySelector('a[href="#line-composition"]')) {
    const item = document.createElement('li');
    item.innerHTML = '<a href="#line-composition">行と折り返し</a>';
    const editorialLink = sideNavList.querySelector('a[href="#editorial"]')?.closest('li');
    editorialLink?.before(item);
    if (!editorialLink) sideNavList.append(item);
  }

  const checklist = document.querySelector('[data-review-checklist]');
  if (checklist && !checklist.querySelector('[data-line-review]')) {
    const reviewItems = [
      '主要見出しに、意味上の理由がない固定改行が残っている',
      '本文の行幅が広すぎ、次の行頭へ視線を戻しにくい',
      '助詞、固有名詞、数字と単位が不自然に分割されている',
      '長いURL対策のため、通常の日本語まで文字単位で割っている',
      '320〜1440pxと200％文字拡大で折り返しを確認していない'
    ];

    reviewItems.forEach((labelText) => {
      const label = document.createElement('label');
      label.setAttribute('data-line-review', '');
      label.innerHTML = `<input type="checkbox"><span>${labelText}</span>`;
      checklist.append(label);
    });
  }

  const references = document.querySelector('.v10-reference-groups');
  if (references && !references.querySelector('[data-line-references]')) {
    const details = document.createElement('details');
    details.setAttribute('data-line-references', '');
    details.innerHTML = `
      <summary>Webの文章・行・折り返し</summary>
      <a href="https://www.w3.org/International/jlreq/">W3C 日本語組版処理の要件</a>
      <a href="https://www.w3.org/TR/css-text-3/">W3C CSS Text Module</a>
      <a href="https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/text-wrap">MDN text-wrap</a>
      <a href="https://design.digital.go.jp/dads/foundations/typography/">デジタル庁 タイポグラフィ</a>
      <a href="https://alistapart.com/article/dao/">A Dao of Web Design</a>
      <a href="https://frankchimero.com/blog/2013/what-screens-want/">What Screens Want</a>
      <a href="https://www.gov.uk/government/publications/govuk-content-principles-conventions-and-research-background/govuk-content-principles-conventions-and-research-background">GOV.UK content principles</a>
    `;
    references.append(details);
  }
})();
