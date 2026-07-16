(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  if ($('#system-use')) return;

  const anchor = $('#audience-first') || $('#diagram-grammar') || $('#principles');
  if (!anchor) return;

  const section = document.createElement('section');
  section.id = 'system-use';
  section.className = 'v7-system';
  section.innerHTML = `
    <header class="v7-head">
      <div><small>DESIGN SYSTEM, NOT A TEMPLATE</small><h2>共通基盤は残す。<br>案件の顔は、案件で決める。</h2></div>
      <span class="v7-version">2026.07.16-beta</span>
    </header>

    <div class="v7-foundation">
      <article><small>COMMON FOUNDATION</small><h3>designmd</h3><p>事実、工程、責任、アクセシビリティ。案件をまたいで守る判断の下限。</p></article>
      <i aria-hidden="true">→</i>
      <article class="project"><small>PROJECT STYLE GUIDE</small><h3>今回の選択</h3><p>読み手、語り口、書体、色、余白、グリッド、一つの逸脱ルール。</p></article>
    </div>

    <section class="v7-role" data-role-lab>
      <div><small>ROLE-BASED ENTRY</small><h3>自分の仕事から入る。</h3></div>
      <div>
        <div class="v7-role-tabs" role="tablist" aria-label="役割を選択">
          <button class="is-active" data-role="request" role="tab" aria-selected="true">依頼する</button>
          <button data-role="make" role="tab" aria-selected="false">つくる</button>
          <button data-role="review" role="tab" aria-selected="false">レビュー</button>
          <button data-role="ai" role="tab" aria-selected="false">AI</button>
        </div>
        <div class="v7-role-panel" data-role-panel aria-live="polite"></div>
      </div>
    </section>

    <section class="v7-access">
      <div><small>ACCESSIBILITY THROUGHOUT</small><h3>最後に足すのではなく、最初から通す。</h3></div>
      <ol>
        <li><b>1</b><span>読み手・環境</span></li>
        <li><b>2</b><span>意味の順序</span></li>
        <li><b>3</b><span>色以外の手掛かり</span></li>
        <li><b>4</b><span>代替説明</span></li>
        <li><b>5</b><span>実寸・操作テスト</span></li>
      </ol>
      <p>designmdは検討を支援する。規格適合や成果物の品質を自動保証するものではない。</p>
    </section>

    <section class="v7-access v7-delivery">
      <div><small>SLIDE DELIVERY</small><h3>PPTXとPDFを、同じ完成版からセットで出力する。</h3></div>
      <ol>
        <li><b>1</b><span>編集用PPTXを完成</span></li>
        <li><b>2</b><span>最終PPTXからPDF化</span></li>
        <li><b>3</b><span>全ページを再確認</span></li>
        <li><b>4</b><span>2形式をセットで納品</span></li>
      </ol>
      <p>ページ数、文字切れ、重なり、フォント置換、画像欠落、余白崩れをPDF化後にも確認する。ユーザーが片方のみを明示した場合は、その指定を優先する。</p>
    </section>

    <section class="v7-format" data-format-lab>
      <header><div><small>EXPERIMENTAL</small><h3>形式を、見栄えではなく仕事で選ぶ。</h3></div><span>試行中</span></header>
      <div class="v7-questions">
        <label>関係
          <select data-format-answer="relation">
            <option value="parallel">並列</option>
            <option value="compare">正確な比較</option>
            <option value="sequence">順序・因果</option>
            <option value="independent">独立した入口</option>
            <option value="evidence">実物・証拠</option>
          </select>
        </label>
        <label>読み方
          <select data-format-answer="reading">
            <option value="scan">短く拾う</option>
            <option value="lookup">値を参照する</option>
            <option value="follow">流れを追う</option>
          </select>
        </label>
      </div>
      <div class="v7-format-result" data-format-result aria-live="polite"></div>
    </section>

    <section class="v7-status">
      <div><small>STATUS</small><h3>強さの違うルールを、同じ顔で置かない。</h3></div>
      <ul>
        <li><b>stable</b><span>通常案件で使う</span></li>
        <li><b>beta</b><span>方向は確定、改善中</span></li>
        <li><b>experimental</b><span>限定試行・撤回可能</span></li>
        <li><b>deprecated</b><span>代替先へ移行</span></li>
      </ul>
    </section>

    <div class="v7-links">
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/project-style-guide.md">案件別スタイルガイド</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/accessibility.md">アクセシビリティ</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/roles-and-responsibility.md">役割と責任</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/slide-delivery.md">PPTX・PDF納品</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/format-selection.md">形式選択（experimental）</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/governance.md">版と状態</a>
    </div>
    <p class="v7-source">デジタル庁デザインシステムウェブサイトの考え方を参考に、designmd向けに編集・加工している。デジタル庁による推奨・監修を意味しない。</p>
  `;
  anchor.after(section);

  const roles = {
    request: { title: '依頼する人', body: '読み手、使用場面、読後の変化、固定条件を決める。AIへ制作ブリーフをゼロから作らせない。', link: 'docs/question-blocks.md' },
    make: { title: 'つくる人', body: '原材料、構成、案件別スタイルガイド、アクセシビリティを段階ごとに確定する。', link: 'docs/staged-production.md' },
    review: { title: 'レビューする人', body: '好みではなく、理解・判断・行動、機能保存、アクセシビリティから戻るSTEPを決める。', link: 'docs/review-checklist.md' },
    ai: { title: 'AI', body: '候補、比較、反論、検査を担う。目的、権利、公開、最終承認は担わない。', link: 'docs/roles-and-responsibility.md' }
  };
  const rolePanel = $('[data-role-panel]', section);
  const renderRole = (key) => {
    const item = roles[key];
    rolePanel.innerHTML = `<h4>${item.title}</h4><p>${item.body}</p><a href="https://github.com/silovar-uk/designmd/blob/main/${item.link}">読む</a>`;
  };
  renderRole('request');
  $$('[data-role]', section).forEach((button) => button.addEventListener('click', () => {
    $$('[data-role]', section).forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    renderRole(button.dataset.role);
  }));

  const formatResult = $('[data-format-result]', section);
  const formatMap = {
    parallel: ['箇条書き', '並列項目を最短距離で読む。図形化で関係が増えないなら、そのままにする。'],
    compare: ['表', '同じ軸で正確な値や条件を比較する。傾向だけならチャートも検討する。'],
    sequence: ['図・手順', '順序、因果、分岐を新たに見せる。矢印を動詞で説明できることが条件。'],
    independent: ['カード', '各項目が独立した入口で、画像・説明・操作が一つの主題にまとまる場合に使う。'],
    evidence: ['画像・実物', '対象や場面そのものが証拠になる。削除で失われる情報を説明する。']
  };
  const renderFormat = () => {
    const relation = $('[data-format-answer="relation"]', section).value;
    const reading = $('[data-format-answer="reading"]', section).value;
    let [title, body] = formatMap[relation];
    if (reading === 'lookup' && relation !== 'evidence') [title, body] = formatMap.compare;
    if (reading === 'follow' && !['evidence', 'independent'].includes(relation)) [title, body] = formatMap.sequence;
    formatResult.innerHTML = `<small>候補</small><h4>${title}</h4><p>${body}</p><span>自動決定ではない。内容と実寸で再確認する。</span>`;
  };
  $$('[data-format-answer]', section).forEach((select) => select.addEventListener('change', renderFormat));
  renderFormat();

  const sideNav = $('.side-nav ol');
  if (sideNav && !$('.v7-nav', sideNav)) sideNav.insertAdjacentHTML('beforeend', '<li class="v7-nav"><a href="#system-use">運用・役割・形式</a></li>');
  const headerNav = $('.header-nav');
  if (headerNav && !$('.v7-header-link', headerNav)) {
    const link = document.createElement('a');
    link.href = '#system-use';
    link.className = 'v7-header-link';
    link.textContent = '運用';
    const github = $('.header-nav__github', headerNav);
    headerNav.insertBefore(link, github || null);
  }
})();
