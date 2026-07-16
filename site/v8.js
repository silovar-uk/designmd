(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  if ($('#information-shape')) return;

  const anchor = $('#audience-first') || $('#japanese-writing') || $('#principles');
  if (anchor) {
    const section = document.createElement('section');
    section.id = 'information-shape';
    section.className = 'v8-shape';
    section.innerHTML = `
      <header>
        <h2>まず、5つに束ねる。</h2>
        <p>情報を削るのではなく、最初に見せる入口を減らす。詳細は必要な場所で開く。</p>
      </header>
      <ol>
        <li><b>1</b><span><strong>5つ以下</strong>分類・段階・カード・タブは、同じ階層で原則5つ以下。</span></li>
        <li><b>2</b><span><strong>副題を減らす</strong>見出しを言い換えるだけの副題と英語ラベルは削る。</span></li>
        <li><b>3</b><span><strong>上位へ束ねる</strong>6つ以上の詳細は、3〜5群へまとめてから見せる。</span></li>
        <li><b>4</b><span><strong>詳細は残す</strong>手順、例外、責任、失敗条件は下位の確認項目へ送る。</span></li>
        <li><b>5</b><span><strong>理由を持つ</strong>6つ以上を見せる場合は、その必然性を説明する。</span></li>
      </ol>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/information-grouping.md">認知単位と副題の設計を読む</a>
    `;
    anchor.after(section);
  }

  const decorativeLabels = [
    '.v4-head small',
    '.v4-pass-lab__intro > small',
    '.v4-depth__lead > small',
    '.v4-false-human > div > small',
    '.v4-questions > div > small',
    '.v6-head small',
    '.v6-leak-lab__intro > small',
    '.v6-regression__intro > small',
    '.v6-learning__intro > small',
    '.v6-plain-lab__intro > small',
    '.v6-rule > small',
    '.v7-head > div > small',
    '.v7-role > div:first-child > small',
    '.v7-access > div:first-child > small',
    '.v7-status > div:first-child > small'
  ];
  decorativeLabels.forEach((selector) => $$(selector).forEach((node) => node.remove()));

  const questions = $('.v4-questions ol');
  if (questions) {
    questions.innerHTML = `
      <li>その場で最初に目に入ったものは？</li>
      <li>誰が、どんな言葉を使った？</li>
      <li>予想と違ったことは？</li>
      <li>一番言い切れない部分は？</li>
      <li>音読して、自分なら使わない・息が詰まる箇所は？</li>
    `;
  }

  const ladder = $('.v6-learning ol');
  if (ladder) {
    ladder.innerHTML = `
      <li><b>1</b><span>知る</span><small>定義・識別</small></li>
      <li><b>2</b><span>分かる</span><small>理由・仕組み</small></li>
      <li><b>3</b><span>やる</span><small>手順</small></li>
      <li><b>4</b><span>変える</span><small>状況変化・失敗条件</small></li>
      <li><b>5</b><span>使いこなす</span><small>転用・自力判断</small></li>
    `;
    ladder.setAttribute('aria-label', '学習資料の5段階');
  }

  const sideNav = $('.side-nav ol');
  if (sideNav && !$('.v8-nav', sideNav)) {
    sideNav.insertAdjacentHTML('beforeend', '<li class="v8-nav"><a href="#information-shape">5つに束ねる</a></li>');
  }
})();
