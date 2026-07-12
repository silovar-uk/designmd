(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const diagram = $('#diagram-grammar');
  if (!diagram || $('#audience-first')) return;

  const section = document.createElement('section');
  section.id = 'audience-first';
  section.className = 'v6-audience';
  section.innerHTML = `
    <header class="v6-head">
      <em>09</em>
      <div>
        <small>AUDIENCE FIRST</small>
        <h2>作った過程より、<br>分かる結果。</h2>
      </div>
    </header>

    <div class="v6-thesis">
      <p>制作ブリーフ、ページ役割、採用理由。作るときには必要です。</p>
      <strong>でも、読者へ全部見せる必要はありません。</strong>
    </div>

    <section class="v6-layers" aria-label="成果物の4層">
      <article class="main">
        <span>A</span>
        <h3>読者向け本編</h3>
        <p>理解、判断、行動に必要な内容。</p>
        <ul><li>定義</li><li>証拠</li><li>手順</li><li>判断基準</li></ul>
      </article>
      <article>
        <span>B</span>
        <h3>発表者用台本</h3>
        <p>ノート欄に置く、話す文章。</p>
        <ul><li>背景</li><li>因果</li><li>留保</li><li>ページ間の接続</li></ul>
      </article>
      <article>
        <span>C</span>
        <h3>付録・根拠</h3>
        <p>必要な人が追加で確認する情報。</p>
        <ul><li>出典</li><li>詳細データ</li><li>長い比較</li><li>未確認事項</li></ul>
      </article>
      <article class="log">
        <span>D</span>
        <h3>制作ログ</h3>
        <p>制作者とレビュー担当のための記録。</p>
        <ul><li>制作ブリーフ</li><li>構成案</li><li>ページ役割</li><li>採用・不採用理由</li></ul>
      </article>
    </section>

    <section class="v6-leak-lab" data-leak-lab>
      <div class="v6-leak-lab__intro">
        <small>PROCESS LEAK TEST</small>
        <h3>内部情報を隠すと、<br>題材が前へ出る。</h3>
        <p>同じページから、制作工程だけを出し入れします。</p>
        <div class="v6-toggle" role="tablist" aria-label="制作工程の表示">
          <button type="button" data-leak="on">工程が漏れている</button>
          <button type="button" data-leak="off" class="is-active">読者向けに分離</button>
        </div>
      </div>
      <div class="v6-leak-slide" data-leak-slide>
        <div class="v6-meta" data-meta hidden>
          <span>OBSERVE</span>
          <small>役割：観察</small>
          <small>使用場面：初心者向け解説</small>
        </div>
        <h4>見る場所は2つ</h4>
        <ul>
          <li>攻撃位置まで進んだ銀</li>
          <li>中央の歩を突くタイミング</li>
        </ul>
        <p class="v6-log-note" data-meta hidden>制作判断：情報量を減らし、観察点を限定した。</p>
      </div>
    </section>

    <section class="v6-regression">
      <div class="v6-regression__intro">
        <small>FUNCTION PRESERVATION</small>
        <h3>消したページの仕事は、<br>誰が引き継ぐ？</h3>
        <p>新版に担当がなければ、整理ではなく機能喪失です。</p>
      </div>
      <div class="v6-function-table" role="table" aria-label="旧版の機能保存表">
        <div class="head" role="row"><b>旧版の要素</b><b>読者への機能</b><b>新版の担当</b><b>判定</b></div>
        <div role="row"><span>4段階の手順</span><span>順序を再現</span><span>基本手順ページ</span><strong class="ok">保存</strong></div>
        <div role="row"><span>具体的な応手</span><span>変化へ対応</span><span>担当なし</span><strong class="lost">消失</strong></div>
        <div role="row"><span>失敗例</span><span>使わない条件</span><span>注意点ページ</span><strong class="weak">弱化</strong></div>
      </div>
    </section>

    <section class="v6-learning">
      <div class="v6-learning__intro">
        <small>LEARNING LADDER</small>
        <h3>「分かった」から、<br>「使える」まで。</h3>
      </div>
      <ol>
        <li><b>1</b><span>定義</span><small>何なのか</small></li>
        <li><b>2</b><span>識別</span><small>どの場面か</small></li>
        <li><b>3</b><span>理由</span><small>なぜ成立するか</small></li>
        <li><b>4</b><span>手順</span><small>何をどう進めるか</small></li>
        <li><b>5</b><span>変化</span><small>状況が変わったら</small></li>
        <li><b>6</b><span>失敗</span><small>いつ使わないか</small></li>
        <li><b>7</b><span>転用</span><small>自分で判断する</small></li>
      </ol>
    </section>

    <section class="v6-plain-lab" data-plain-lab>
      <div class="v6-plain-lab__intro">
        <small>PLAIN SLIDE LAB</small>
        <h3>立派じゃなくていい。</h3>
        <p>同じ3項目を、カードと箇条書きで比較します。</p>
        <div class="v6-toggle" role="tablist" aria-label="ページ形式">
          <button type="button" data-format="cards">カード化</button>
          <button type="button" data-format="bullets" class="is-active">箇条書き</button>
        </div>
      </div>
      <div class="v6-plain-slide is-bullets" data-plain-slide>
        <h4>使う前に見る3点</h4>
        <div class="v6-plain-content" data-plain-content>
          <ul>
            <li>相手が守りへ使った手数</li>
            <li>攻撃位置まで進んだ銀</li>
            <li>中央の歩を突くタイミング</li>
          </ul>
        </div>
        <small data-format-note>並列の観察点。図形へ変えても関係は増えません。</small>
      </div>
    </section>

    <aside class="v6-rule">
      <small>MINIMUM RIGHT FORM</small>
      <p>図解が上位、箇条書きが下位ではありません。</p>
      <strong>内容に対して、最小で正しい形式。</strong>
    </aside>

    <div class="v6-actions">
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/audience-first-redesign.md">読者向け成果物の分離</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/learning-materials.md">学習資料ガイド</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/plain-slides.md">箇条書き・プレーンスライド</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/prompts/slide-redesign.md">再設計プロンプト</a>
    </div>
  `;

  diagram.after(section);

  const leakLab = $('[data-leak-lab]');
  if (leakLab) {
    $$('[data-leak]', leakLab).forEach((button) => {
      button.addEventListener('click', () => {
        $$('[data-leak]', leakLab).forEach((item) => item.classList.toggle('is-active', item === button));
        const show = button.dataset.leak === 'on';
        $$('[data-meta]', leakLab).forEach((item) => { item.hidden = !show; });
        $('[data-leak-slide]', leakLab).classList.toggle('is-leaking', show);
      });
    });
  }

  const plainLab = $('[data-plain-lab]');
  const items = [
    '相手が守りへ使った手数',
    '攻撃位置まで進んだ銀',
    '中央の歩を突くタイミング'
  ];
  if (plainLab) {
    $$('[data-format]', plainLab).forEach((button) => {
      button.addEventListener('click', () => {
        $$('[data-format]', plainLab).forEach((item) => item.classList.toggle('is-active', item === button));
        const format = button.dataset.format;
        const slide = $('[data-plain-slide]', plainLab);
        const content = $('[data-plain-content]', plainLab);
        const note = $('[data-format-note]', plainLab);
        slide.className = `v6-plain-slide is-${format}`;
        if (format === 'cards') {
          content.innerHTML = `<div class="v6-cards">${items.map((item, index) => `<article><i>${index + 1}</i><span>${item}</span></article>`).join('')}</div>`;
          note.textContent = '見た目は増えました。情報上の関係は増えていません。';
        } else {
          content.innerHTML = `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
          note.textContent = '並列の観察点。図形へ変えても関係は増えません。';
        }
      });
    });
  }

  const sideNav = $('.side-nav ol');
  if (sideNav) {
    const diagramItem = [...sideNav.children].find((item) => item.textContent.includes('図形・矢印・台本'));
    if (diagramItem) diagramItem.insertAdjacentHTML('afterend', '<li><a href="#audience-first">読者・学習・箇条書き</a></li>');
  }

  const headerNav = $('.header-nav');
  if (headerNav && !$('.v6-audience-link', headerNav)) {
    const github = $('.header-nav__github', headerNav);
    const link = document.createElement('a');
    link.href = '#audience-first';
    link.className = 'v6-audience-link';
    link.textContent = '読者優先';
    headerNav.insertBefore(link, github);
  }

  const setNumber = (id, value) => {
    const node = $(`${id} .section-number`);
    if (node) node.textContent = value;
  };
  setNumber('#principles', '10');
  setNumber('#media', '11');
  setNumber('#workflow', '12');
  setNumber('#review', '13');
  setNumber('#prompts', '14');
  setNumber('#documents', '15');

  const documents = $('#documents .document-links');
  if (documents && !$('.v6-audience-doc', documents)) {
    const guides = [
      ['読者向け再設計', 'audience-first-redesign.md', 'https://github.com/silovar-uk/designmd/blob/main/docs/audience-first-redesign.md'],
      ['学習資料', 'learning-materials.md', 'https://github.com/silovar-uk/designmd/blob/main/docs/learning-materials.md'],
      ['プレーンスライド', 'plain-slides.md', 'https://github.com/silovar-uk/designmd/blob/main/docs/plain-slides.md'],
      ['再設計チェック', 'audience-learning-review-checklist.md', 'https://github.com/silovar-uk/designmd/blob/main/docs/audience-learning-review-checklist.md']
    ];
    guides.forEach(([label, title, href]) => {
      const link = document.createElement('a');
      link.className = 'v6-audience-doc';
      link.href = href;
      link.innerHTML = `<span>${label}</span><strong>${title}</strong>`;
      documents.append(link);
    });
  }
})();
