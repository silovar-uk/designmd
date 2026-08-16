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
      <p class="line-composition__eyebrow">JAPANESE LINE COMPOSITION</p>
      <h2 id="line-composition-title">「改行できる」と、<br>「そこで改行したい」は別。</h2>
      <p>ブラウザが合法な位置で折り返していても、語や意味のまとまりが壊れれば読みにくい。行末を固定するのではなく、守る単位と調整の順序を設計する。</p>
    </header>

    <div class="line-composition__principles">
      <article><b>規則 → 語 → 意味</b><p>禁則を守った上で、短い見出しでは固有名詞、外来語、文節など認識のまとまりまで見る。</p></article>
      <article><b>一行ではなくリズム</b><p>最終行だけ短い、一語だけ孤立する、短い行が連続する状態を、複数行全体で確認する。</p></article>
      <article><b>行末は可変</b><p>PCで美しい位置を全端末へ強制せず、幅、文字拡大、文言の変化に耐える条件をつくる。</p></article>
    </div>

    <div class="line-composition__lab">
      <div class="line-composition__controls">
        <label>試す見出し
          <textarea data-line-title>AIがつくったページで感じる日本語改行の違和感</textarea>
        </label>
        <label>折り返し方法
          <select data-line-mode>
            <option value="default">通常の折り返し</option>
            <option value="balanced" selected>複数行を均衡させる</option>
            <option value="phrase">自然なフレーズを優先する</option>
            <option value="nowrap">折り返さない</option>
          </select>
        </label>
        <label>見出し領域の幅
          <span class="line-composition__range-row">
            <input type="range" min="12" max="34" value="23" step="1" data-line-width>
            <output data-line-width-output>23em</output>
          </span>
        </label>
        <p class="line-composition__preview-note" data-line-note>短い見出しでは複数行全体の形を見る。未対応ブラウザでは通常の折り返しへ戻る。</p>
      </div>

      <div class="line-composition__preview-shell">
        <article class="line-composition__preview" data-line-preview data-wrap-mode="balanced">
          <small>LIVE WRAP PREVIEW</small>
          <h3 data-line-preview-title>AIがつくったページで感じる日本語改行の違和感</h3>
        </article>
      </div>
    </div>

    <div class="line-composition__implementation">
      <article>
        <h3>AIが先に決めるもの</h3>
        <ul>
          <li>見出しの役割と最大行数</li>
          <li>壊したくない意味のまとまり</li>
          <li>分割を避けたい固有名詞・外来語・数字＋単位</li>
          <li>短い表示文字で許容する最小文字サイズ</li>
          <li>スマホで短縮可能な表現</li>
        </ul>
      </article>
      <article>
        <h3>収まらない時の順番</h3>
        <ol>
          <li>意味を確認</li>
          <li>文言を編集</li>
          <li>幅・余白・配置を調整</li>
          <li>折り返し候補を調整</li>
          <li>必要なら字間を微調整</li>
          <li>短い表示文字だけ下限まで縮小</li>
          <li>最後は一行増やす</li>
        </ol>
      </article>
    </div>

    <div class="line-composition__prompt">
      <header><h3>AIへ渡す実装指示</h3><button type="button" data-line-copy>コピー</button></header>
      <pre data-line-prompt>以下を必須要件として参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/web-line-composition.md

日本語の改行は「改行可能な場所」と「読み手にとって望ましい場所」を分けて判断してください。
規則 → 語 → 意味 → リズム → 可変幅の順で確認し、短い見出しでは固有名詞、外来語、複合語、文節を不自然に分割しないでください。
固定の&lt;br&gt;は原則使わず、見出しはtext-wrap: balance、対応環境ではword-break: auto-phraseを漸進適用してください。
本文へword-break: break-allやoverflow-wrap: anywhereを一括適用せず、長いURL・識別子だけ局所的に救済してください。

収まらない場合は、意味 → 文言 → 幅・余白・配置 → 折り返し → 字間 → 短い表示文字のサイズ → 行数追加、の順で検討してください。
本文は収めるために縮小しないでください。見出しやKVで文字サイズを調整する場合も、最小サイズを先に決め、下限を超えたら一行増やしてください。

320、375、768、1024、1440pxと200％文字拡大で確認し、固定した意味単位、流動させた行末、例外的な固定改行、文字サイズ調整の下限と理由を報告してください。</pre>
    </div>

    <div class="line-composition__links">
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/web-line-composition.md">詳細ガイド</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/prompts/web-line-composition.md">プロンプト全文</a>
      <a href="https://www.w3.org/International/jlreq/">W3C 日本語組版</a>
      <a href="https://www.unicode.org/reports/tr14/">Unicode UAX #14</a>
      <a href="https://www.w3.org/TR/css-text-4/">CSS Text Level 4</a>
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
    default: '通常の折り返し。合法な位置で切れても、語や意味のまとまりが自然とは限らない。',
    balanced: '短い見出しでは複数行全体の形を見る。未対応ブラウザでは通常の折り返しへ戻る。',
    phrase: '対応環境では言語解析で自然なフレーズ内の折り返しを抑える。未対応環境では通常折り返しへ戻す。',
    nowrap: '短いラベルや分割不能語には使える。長い見出し全体へ使うと縮小・はみ出しを招く。'
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
    item.innerHTML = '<a href="#line-composition">日本語の改行</a>';
    const editorialLink = sideNavList.querySelector('a[href="#editorial"]')?.closest('li');
    editorialLink?.before(item);
    if (!editorialLink) sideNavList.append(item);
  }

  const checklist = document.querySelector('[data-review-checklist]');
  if (checklist && !checklist.querySelector('[data-line-review]')) {
    const reviewItems = [
      '主要見出しに、意味上の理由がない固定改行が残っている',
      '固有名詞、外来語、文節が不自然な位置で分割されている',
      '短い行や一語だけの最終行が連続している',
      '長いURL対策のため、通常の日本語まで文字単位で割っている',
      '収めるために本文を縮小している',
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
      <summary>日本語の行・折り返し</summary>
      <a href="https://www.w3.org/International/jlreq/">W3C 日本語組版処理の要件</a>
      <a href="https://www.unicode.org/reports/tr14/">Unicode Line Breaking Algorithm</a>
      <a href="https://www.w3.org/TR/css-text-4/">W3C CSS Text Module Level 4</a>
      <a href="https://design.digital.go.jp/dads/foundations/typography/">デジタル庁 タイポグラフィ</a>
    `;
    references.append(details);
  }
})();
