(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  if ($('#reconstruction-map')) return;

  document.title = 'designmd｜問いも、途中も、捨てない制作ガイド';
  const description = $('meta[name="description"]');
  if (description) {
    description.content = 'AIと人間が問いを監査し、原材料、構成、表現、失敗、ユーモア、検証を段階的に扱う制作ガイド。';
  }

  const hero = $('.hero__inner');
  if (hero) {
    const heroTitle = $('h1', hero);
    if (heroTitle) heroTitle.innerHTML = '完成を、<br><span>一度にさせない。</span>';

    const answer = $('.v2-answer', hero);
    if (answer && !$('.v10-hero-note', hero)) {
      answer.insertAdjacentHTML('afterend', `
        <div class="v10-hero-note">
          <strong>入口は束ねる。奥行きは捨てない。</strong>
          <span>問い、例、失敗、反証、操作、小さな笑いまで、必要な場所に残す。</span>
        </div>
      `);
    }
  }

  const quickStart = $('#quick-start');
  if (quickStart) {
    const map = document.createElement('section');
    map.id = 'reconstruction-map';
    map.className = 'v10-map';
    map.innerHTML = `
      <header class="v10-map__head">
        <small>READING MAP</small>
        <h2>5つの入口。<br>中には、ちゃんと細部がある。</h2>
        <p>分類を5つへ減らすのではなく、最初に迷う分岐を5つへ束ねる。詳しいSTEP、例外、失敗条件は下の階層へ残す。</p>
      </header>
      <nav class="v10-map__grid" aria-label="designmdの5つの入口">
        <a href="#question-audit"><b>1</b><strong>はじめる</strong><span>問い・目的・AIくささ</span></a>
        <a href="#stages"><b>2</b><strong>組み立てる</strong><span>段階・原材料・参照・構成</span></a>
        <a href="#japanese-writing"><b>3</b><strong>表現する</strong><span>文章・図・スライド・台本</span></a>
        <a href="#tone"><b>4</b><strong>外す</strong><span>密度・逸脱・ユーモア・回収</span></a>
        <a href="#review"><b>5</b><strong>確かめる</strong><span>機能保存・責任・レビュー</span></a>
      </nav>
      <p class="v10-map__aside">全部を5つにしたわけではありません。冷蔵庫の中身を、扉の数に合わせて捨てないのと同じです。</p>
    `;
    quickStart.after(map);
  }

  const audit = $('#question-audit');
  const map = $('#reconstruction-map');
  if (audit && map) {
    map.after(audit);
    if (!$('.v10-audit-tool', audit)) {
      const tool = document.createElement('section');
      tool.className = 'v10-audit-tool';
      tool.innerHTML = `
        <div>
          <small>TRY YOUR BRIEF</small>
          <h3>自分の問いで、試す。</h3>
          <p>依頼文を入れると、前提・根拠・欲望・文脈・代替問いを確認するプロンプトとしてコピーできる。入力はブラウザ内だけで扱う。</p>
        </div>
        <label for="v10-brief">ブリーフ</label>
        <textarea id="v10-brief" rows="6" placeholder="例：若い人にブランドを知ってほしい。" data-v10-brief></textarea>
        <button type="button" data-v10-copy-audit>監査プロンプトをコピー</button>
        <p class="v10-copy-status" role="status" aria-live="polite" data-v10-audit-status></p>
      `;
      $('.v9-audit__boundary', audit)?.after(tool);
    }
  }

  const auditPrompt = `以下のブリーフへすぐ答えず、問いを監査してください。

1. 前提：何を事実として扱っているか
2. 根拠：確認済み事実／仮説／慣習／未確認に分ける
3. 欲望：解決後に本当は何を変えたいか、複数仮説を示す
4. 文脈：生活者、競合、組織、社会、時代から不足材料を示す
5. 代替問い：ブリーフ忠実案／再定義案／反転・別軸案を作る

三案を、根拠、得られるもの、失うもの、実装可能性、誤解・倫理・組織上のリスクで比較してください。
刺激的であることを採用理由にせず、採用する問いと説明責任は人間へ返してください。`;

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.append(textarea);
      textarea.select();
      const result = document.execCommand('copy');
      textarea.remove();
      return result;
    }
  };

  $('[data-v10-copy-audit]')?.addEventListener('click', async () => {
    const brief = $('[data-v10-brief]')?.value.trim() || '（ここにブリーフを記載）';
    const copied = await copyText(`${auditPrompt}\n\nブリーフ：\n${brief}`);
    const status = $('[data-v10-audit-status]');
    if (status) status.textContent = copied ? 'コピーしました。問いは増えましたが、会議はまだ増えていません。' : 'コピーできませんでした。テキストを選択してください。';
  });

  const functionalLabels = [
    ['.v4-pass-lab__intro', 'PASS LAB'],
    ['.v4-depth__lead', 'BEFORE / AFTER'],
    ['.v6-regression__intro', 'FUNCTION PRESERVATION'],
    ['.v6-plain-lab__intro', 'PLAIN SLIDE LAB']
  ];
  functionalLabels.forEach(([selector, label]) => {
    const target = $(selector);
    if (target && !$('.v10-functional-label', target)) {
      target.insertAdjacentHTML('afterbegin', `<small class="v10-functional-label">${label}</small>`);
    }
  });

  const learning = $('.v6-learning');
  if (learning && !$('.v10-learning-detail', learning)) {
    learning.insertAdjacentHTML('beforeend', `
      <details class="v10-learning-detail">
        <summary>5つの入口の中にある、7つの学習機能</summary>
        <ol>
          <li><b>定義</b><span>何なのかを言葉にする</span></li>
          <li><b>識別</b><span>どの場面で使うかを見分ける</span></li>
          <li><b>理由</b><span>なぜ成立するかを理解する</span></li>
          <li><b>手順</b><span>何を、どの順に進めるか</span></li>
          <li><b>変化</b><span>状況が変わったときに調整する</span></li>
          <li><b>失敗</b><span>使わない条件と典型的な崩れ</span></li>
          <li><b>転用</b><span>別の題材で自力判断する</span></li>
        </ol>
        <p>入口は5つ。学ぶ仕事は7つ。数が違っても、けんかはしません。</p>
      </details>
    `);
  }

  const preservation = $('.v6-function-table');
  if (preservation && !$('.v10-preservation-row', preservation)) {
    preservation.insertAdjacentHTML('beforeend', `
      <div role="row" class="v10-preservation-row"><span>具体例・操作・ユーモア</span><span>理解・記憶・試行</span><span>各実験セクション</span><strong class="ok">保存</strong></div>
      <div role="row" class="v10-preservation-row"><span>5つ以下の入口</span><span>最初の迷いを減らす</span><span>上位ナビと読書地図</span><strong class="ok">保存</strong></div>
    `);
  }

  const documents = $('#documents');
  if (documents && !$('.v10-references', documents)) {
    const references = document.createElement('section');
    references.className = 'v10-references';
    references.innerHTML = `
      <header>
        <small>REFERENCES & ADAPTATION</small>
        <h3>借りた考え方と、借りなかった外見。</h3>
        <p>参考資料は完成イメージではなく、判断方法の辞書として使う。</p>
      </header>
      <div class="v10-reference-groups">
        <details open>
          <summary>designmdの履歴</summary>
          <a href="https://github.com/silovar-uk/designmd/tree/2f9128105189951b0fe6d70a41ca0224379b6cb1/site">全面置換前の基準版</a>
          <a href="https://github.com/silovar-uk/designmd/pull/2">段階制作と参照戦略</a>
          <a href="https://github.com/silovar-uk/designmd/pull/3">HTML版の段階的な増築</a>
          <a href="https://github.com/silovar-uk/designmd/blob/main/docs/site-reconstruction-2026-07-18.md">今回の再興記録</a>
        </details>
        <details>
          <summary>文章と認知リズム</summary>
          <a href="https://note.com/pepe2blog2/n/nca5c946844f2">AI臭い文章50選</a>
          <a href="https://gist.github.com/k16shikano/fd287c3133457c4fd8f5601d34aa817d">japanese-tech-writing</a>
          <a href="https://gist.github.com/k16shikano/eb2929f13ed19c97188393d297be8432">cognitive-rhythm-writing</a>
          <a href="https://note.com/moriyoshizan/n/ncb52779509c1">AIの文章には香りがない</a>
        </details>
        <details>
          <summary>デザインシステムとアクセシビリティ</summary>
          <a href="https://design.digital.go.jp/dads/">デジタル庁デザインシステム</a>
          <a href="https://design.digital.go.jp/dads/guidance/design-system/">デザインシステムとは</a>
          <a href="https://design.digital.go.jp/dads/guidance/style-guides/">スタイルガイド</a>
          <a href="https://design.digital.go.jp/dads/guidance/accessibility/">アクセシビリティ</a>
          <a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2</a>
          <a href="https://www.w3.org/WAI/ARIA/apg/">ARIA Authoring Practices Guide</a>
        </details>
      </div>
      <p class="v10-reference-note">外部資料の文言や見た目を丸ごと移植せず、designmd向けに編集・加工している。各提供元による推奨・監修を意味しない。</p>
    `;
    $('.document-links', documents)?.after(references);
  }

  const headerNav = $('.header-nav');
  if (headerNav) {
    headerNav.innerHTML = `
      <a href="#question-audit">はじめる</a>
      <a href="#stages">組み立てる</a>
      <a href="#japanese-writing">表現する</a>
      <a href="#tone">外す</a>
      <a href="#review">確かめる</a>
      <a class="header-nav__github" href="https://github.com/silovar-uk/designmd">GitHub</a>
    `;

    const headerInner = $('.site-header__inner');
    if (headerInner && !$('.v10-nav-toggle', headerInner)) {
      const toggle = document.createElement('button');
      toggle.className = 'v10-nav-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'メニューを開く');
      toggle.textContent = '目次';
      headerInner.insertBefore(toggle, headerNav);
      toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        toggle.setAttribute('aria-label', open ? 'メニューを開く' : 'メニューを閉じる');
        headerNav.classList.toggle('is-open', !open);
      });
      $$('a', headerNav).forEach((link) => link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'メニューを開く');
        headerNav.classList.remove('is-open');
      }));
    }
  }

  const sideList = $('.side-nav ol');
  if (sideList) {
    sideList.innerHTML = `
      <li><details open><summary>はじめる</summary><a href="#quick-start">最短で使う</a><a href="#question-audit">問いの監査</a><a href="#problems">AIくささ</a></details></li>
      <li><details><summary>組み立てる</summary><a href="#stages">段階制作</a><a href="#references">参照戦略</a><a href="#grid">グリッドと速度</a></details></li>
      <li><details><summary>表現する</summary><a href="#japanese-writing">日本語文章</a><a href="#diagram-grammar">図形・矢印</a><a href="#media">媒体別ガイド</a></details></li>
      <li><details><summary>外す・残す</summary><a href="#tone">あたたかみとユーモア</a><a href="#audience-first">読者・学習・箇条書き</a><a href="#information-shape">情報を束ねる</a></details></li>
      <li><details><summary>確かめる</summary><a href="#system-use">運用・役割</a><a href="#principles">共通原則</a><a href="#workflow">制作工程</a><a href="#review">レビュー</a><a href="#prompts">プロンプト</a><a href="#documents">正典・参考資料</a></details></li>
    `;
  }

  const addKeyboardTabs = (tablist) => {
    const tabs = $$('button', tablist);
    if (tabs.length < 2) return;
    tabs.forEach((tab, index) => {
      tab.setAttribute('role', 'tab');
      tab.tabIndex = tab.classList.contains('is-active') || tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        let next = index;
        if (['ArrowRight', 'ArrowDown'].includes(event.key)) next = (index + 1) % tabs.length;
        if (['ArrowLeft', 'ArrowUp'].includes(event.key)) next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        tabs[next].focus();
        tabs[next].click();
        tabs.forEach((item, itemIndex) => { item.tabIndex = itemIndex === next ? 0 : -1; });
      });
    });
  };
  $$('[role="tablist"]').forEach(addKeyboardTabs);

  const version = $('.v7-version');
  if (version) version.textContent = '2026.07.18-beta';
})();
