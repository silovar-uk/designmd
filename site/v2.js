(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const heroTitle = $('.hero h1');
  if (heroTitle) heroTitle.innerHTML = '完成を、<br><span>一度にさせない。</span>';
  const heroLead = $('.hero__lead');
  if (heroLead) {
    heroLead.textContent = '完成品を一発で出させると、最初に選ばれた無難な方向へ、文章・構成・レイアウト・画像がまとめて収束する。';
    const answer = document.createElement('div');
    answer.className = 'v2-answer';
    answer.innerHTML = '<p>目的、原材料、参照、構成、グリッド、代表ページ、全体制作を分ける。</p><p><strong>完成度を段階的に上げるのではなく、判断を段階ごとに確定する。</strong></p>';
    heroLead.after(answer);
  }

  const problemTitle = $('#problems h2');
  if (problemTitle) problemTitle.textContent = 'AIくささを生む7つの問題';
  const factorList = $('#problems .factor-list');
  if (factorList && !$('.factor--convergence', factorList)) {
    const factor = document.createElement('article');
    factor.className = 'factor factor--convergence';
    factor.innerHTML = '<p class="factor__number">07</p><div><h3>早すぎる収束</h3><p>構成、文章、画像、レイアウトを同時に完成させ、最初の無難な案から抜けられなくなる。</p><p class="factor__action">完成を遅らせるのではない。判断の順番を分ける。</p></div>';
    factorList.append(factor);
  }

  const sectionHead = (n, k, t) => `<header class="v2-head"><em>${n}</em><div><small>${k}</small><h2>${t}</h2></div></header>`;
  const stageSection = document.createElement('section');
  stageSection.id = 'stages';
  stageSection.className = 'v2-stage';
  stageSection.innerHTML = `${sectionHead('03','STAGE GATES','9段階でつくる')}
    <p class="v2-lead">番号を押すと、その段階で決めることと、次へ進む条件が切り替わります。</p>
    <div data-stage-explorer>
      <div class="v2-stage-tabs" role="tablist">
        ${['逆質問','原材料','参照','構成案','物語','システム','代表頁','全体','レビュー'].map((x,i)=>`<button data-stage="${i}" class="${i===0?'is-active':''}"><span>${i}</span>${x}</button>`).join('')}
      </div>
      <article class="v2-stage-panel" aria-live="polite">
        <small data-stage-label>GATE 0</small><h3 data-stage-title>逆質問と前提</h3><p class="v2-stage-purpose" data-stage-purpose>不足情報を埋め、何を固定し、どこで冒険できるかを決める。</p>
        <div class="v2-stage-cols"><div><h4>この段階の成果物</h4><ul data-stage-output><li>読み手と使用場面</li><li>求める判断・理解・行動</li><li>固定するもの／変えてよいもの</li><li>避ける表現</li></ul></div><div><h4>次へ進む条件</h4><p data-stage-gate>方向性を変える不足情報が解消され、置いた前提を人が確認している。</p></div></div>
        <p class="v2-stage-stop" data-stage-stop><strong>ここで止まる：</strong>対話できる場合は、ユーザーの回答を待つ。</p>
      </article>
    </div>
    <div class="v2-stage-note"><b>完成度を<br>20%→40%→80%にする話ではない。</b><span>各段階で、別の種類の判断を確定する。未確定の内容を、見た目の完成度で覆わない。</span></div>`;

  const refSection = document.createElement('section');
  refSection.id = 'references';
  refSection.className = 'v2-reference';
  refSection.innerHTML = `${sectionHead('04','REFERENCE STRATEGY','参照を4つの役に分ける')}
    <p class="v2-lead">「この雰囲気で」と丸ごと真似しない。参照先から借りる操作を分離する。</p>
    <div class="v2-reference-map">
      <article><b>A</b><h3>骨格</h3><p>出版物、グリッド、研究誌。</p><dl><dt>借りる</dt><dd>階層、余白、列、注釈、ページ間の関係</dd><dt>借りない</dt><dd>紙色や明朝体など表面的な出版物らしさ</dd></dl></article>
      <article class="deviation"><b>B</b><h3>逸脱</h3><p>実験的タイポグラフィ、ポスター、コラージュ。</p><dl><dt>借りる</dt><dd>拡大、切断、反復、重なり、対角線</dd><dt>借りない</dt><dd>作家固有の配色や外見</dd></dl></article>
      <article class="time"><b>C</b><h3>時間</h3><p>漫画、映画タイトル、舞台、編集映像。</p><dl><dt>借りる</dt><dd>間、加速、停止、情報開示、再登場</dd><dt>借りない</dt><dd>動きをつけること自体を目的にした演出</dd></dl></article>
      <article class="source"><b>D</b><h3>固有素材</h3><p>元記事、発言、写真、数字、失敗、手書き。</p><dl><dt>借りる</dt><dd>その題材でしか使えない現実</dd><dt>借りない</dt><dd>一般化しすぎた要約や汎用画像</dd></dl></article>
    </div>
    <div class="v2-reference-rule"><b>参照ごとに記録する</b><ol><li>借りる操作</li><li>借りない外見</li><li>内容との接続</li><li>過剰に使うリスク</li></ol></div>`;

  const gridSection = document.createElement('section');
  gridSection.id = 'grid';
  gridSection.className = 'v2-grid';
  gridSection.innerHTML = `${sectionHead('05','GRID & RHYTHM','秩序をつくり、必要な場所だけ外す')}
    <div class="v2-grid-demo"><div class="v2-grid-lines">${'<i></i>'.repeat(12)}</div><h3>グリッドは、<br>同じ箱を作る道具ではない。</h3><p>見出し、本文、図版、注釈、出典、ページ間の関係をつくる文法である。</p><small>例外には、内容上の理由が必要。</small><strong>外す</strong></div>
    <div class="v2-density"><article><b>LOW</b><h3>静</h3><span>問い・引用・章扉</span></article><article><b>NORMAL</b><h3>標準</h3><span>主張と根拠・比較</span></article><article class="high"><b>HIGH</b><h3>密</h3><span>研究・反証・注釈</span></article><article class="motion"><b>MOTION</b><h3>動</h3><span>転換点・予想の外れ</span></article></div>
    <div class="v2-one-rule"><b>ONE RULE</b><p>資料全体で、逸脱ルールは一つに絞る。</p><ul><li>予想が外れるページだけ、要素もグリッドから外れる</li><li>反証ページだけ、左右が反転する</li><li>本音だけ、欄外へ出る</li></ul></div>`;

  const principles = $('#principles');
  if (principles) {
    principles.before(stageSection, refSection, gridSection);
    const n = principles.querySelector('.section-number');
    if (n) n.textContent = '06';
  }

  const nav = $('.side-nav ol');
  if (nav) {
    const oldMedia = [...nav.children].find(li => li.textContent.includes('媒体別'));
    if (oldMedia) {
      oldMedia.insertAdjacentHTML('beforebegin','<li><a href="#stages">段階制作</a></li><li><a href="#references">参照戦略</a></li><li><a href="#grid">グリッドと速度</a></li>');
    }
  }
  const topNav = $('.header-nav');
  if (topNav) topNav.insertAdjacentHTML('afterbegin','<a href="#stages">段階制作</a><a href="#references">参照戦略</a><a href="#grid">グリッド</a>');

  const stages = [
    ['逆質問と前提','不足情報を埋め、何を固定し、どこで冒険できるかを決める。',['読み手と使用場面','求める判断・理解・行動','固定するもの／変えてよいもの','避ける表現'],'方向性を変える不足情報が解消され、置いた前提を人が確認している。','対話できる場合は、ユーザーの回答を待つ。'],
    ['原材料と証拠','抽象化の前に、その題材でしか使えない現実を確保する。',['実際の発言・場面','固有名詞・数字・日時','失敗・迷い・反対意見','根拠と断定できない点'],'主張の根拠と、残すべき具体素材が選ばれている。','素材不足なら、構成へ進まず追加収集する。'],
    ['参照戦略','参照先を骨格・逸脱・時間・固有素材へ分解する。',['借りる操作','借りない外見','内容との接続','過剰に使うリスク'],'各参照の役割を一文で説明できる。','「この感じで」しか説明できない参照は採用しない。'],
    ['構成案の比較','最初の無難な案へ収束せず、異なる入口と論理を比較する。',['最低3つの構成案','各案の強み・弱み','向く使用場面','採用／不採用理由'],'採用案を選び、他案を捨てる理由を人が確認している。','対話モードでは、構成案の選択を待つ。'],
    ['ストーリーと速度','ページの役割と、静・標準・密・動のリズムを決める。',['各ページの役割','情報開示の順序','密度と速度の波','再登場する素材'],'ページ順を入れ替えると意味が変わる構成になっている。','タイトル一覧ではなく、役割まで確定する。'],
    ['デザインシステム','グリッド、文字体系、注釈、出典、一つの逸脱ルールを設計する。',['グリッドと基準線','文字・色・余白の役割','固定要素','一つの逸脱ルール'],'同じ資料に属する秩序と、内容上の例外が説明できる。','スタイルを先に決めず、構成と素材から導く。'],
    ['代表ページ','異なる密度と役割の3〜5枚で方向を検証する。',['低密度ページ','標準ページ','高密度ページ','動きのあるページ'],'読みやすさ、独自性、速度、逸脱の強さを人が確認している。','対話モードでは、代表ページの承認を待つ。'],
    ['全体制作','承認された構造とシステムを、機械的に複製せず展開する。',['全ページ','ページ間の変化','出典と注釈','採用・棄却ログ'],'各ページの役割とレイアウト理由が説明できる。','代表ページと異なる問題が出たら、前段階へ戻る。'],
    ['最終レビュー','完成品を褒めるのではなく、戻る工程を診断する。',['AIくささの点検','根拠・限界の確認','画像削除テスト','戻る工程の特定'],'重大な問題を修正し、未確認事項を明示している。','テイスト変更だけで解決しようとしない。']
  ];
  const explorer = $('[data-stage-explorer]');
  if (explorer) $$('[data-stage]',explorer).forEach(btn => btn.addEventListener('click',() => {
    const i = Number(btn.dataset.stage), s = stages[i];
    $$('[data-stage]',explorer).forEach(x=>x.classList.toggle('is-active',x===btn));
    $('[data-stage-label]',explorer).textContent=`GATE ${i}`;
    $('[data-stage-title]',explorer).textContent=s[0]; $('[data-stage-purpose]',explorer).textContent=s[1];
    $('[data-stage-output]',explorer).innerHTML=s[2].map(x=>`<li>${x}</li>`).join(''); $('[data-stage-gate]',explorer).textContent=s[3];
    $('[data-stage-stop]',explorer).innerHTML=`<strong>ここで止まる：</strong>${s[4]}`;
  }));

  const reviewPanel = $('[data-review-checklist]');
  if (reviewPanel && !$('.v2-convergence-review',reviewPanel)) {
    reviewPanel.insertAdjacentHTML('afterbegin','<details open class="v2-convergence-review"><summary>早すぎる収束</summary><label><input type="checkbox" data-return="GATE 0〜3"> 逆質問をせずに制作へ入った</label><label><input type="checkbox" data-return="GATE 3"> 構成案を一案しか検討していない</label><label><input type="checkbox" data-return="GATE 6"> 代表ページを試さず全ページを作った</label><label><input type="checkbox" data-return="GATE 2"> 参照先を雰囲気として丸ごと真似した</label><label><input type="checkbox" data-return="GATE 5"> グリッドと逸脱ルールが説明できない</label></details>');
    const box = $('.score-box');
    if (box) box.insertAdjacentHTML('beforeend','<strong class="v2-review-return" data-v2-review-return></strong>');
    const inputs = $$('input[type="checkbox"]',reviewPanel); const ret = $('[data-v2-review-return]');
    inputs.forEach(input=>input.addEventListener('change',()=>{const checked=inputs.filter(x=>x.checked&&x.dataset.return);if(!checked.length){ret.textContent='';return}const c={};checked.forEach(x=>c[x.dataset.return]=(c[x.dataset.return]||0)+1);ret.textContent='戻る候補：'+Object.entries(c).sort((a,b)=>b[1]-a[1])[0][0]}));
  }

  const promptList = $('#prompts .prompt-list');
  if (promptList && !$('.v2-prompt',promptList)) {
    promptList.insertAdjacentHTML('afterbegin','<details open class="v2-prompt"><summary>段階制作でスライドをつくる</summary><div class="v2-prompt-tabs"><button class="is-active" data-v2-mode="dialogue">対話モード</button><button data-v2-mode="batch">一括モード</button></div><div class="code-block" data-copy-group><pre><code data-v2-code></code></pre><button class="copy-button" type="button">コピー</button></div></details>');
    const dialogue=`以下のガイドを必須要件として参照してください。\n\n共通原則：\nhttps://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md\n\nスライド設計：\nhttps://raw.githubusercontent.com/silovar-uk/designmd/main/docs/slides.md\n\n段階制作：\nhttps://raw.githubusercontent.com/silovar-uk/designmd/main/docs/staged-production.md\n\n参照戦略：\nhttps://raw.githubusercontent.com/silovar-uk/designmd/main/docs/reference-strategy.md\n\n依頼内容：\n（ここに記載）\n\n完成版を一度に作らないでください。\n最初に不足情報を最大8問で逆質問し、回答を待ってください。\nその後、原材料、参照戦略、最低3つの構成案を示し、採用案の確認を待ってください。\n次に、グリッド、文字体系、密度・速度、一つの逸脱ルールを設計し、代表ページ3〜5枚だけを作って確認を待ってください。\n承認後に全体制作へ進み、最後にレビュー基準で自己点検してください。`;
    const batch=dialogue.replace('最初に不足情報を最大8問で逆質問し、回答を待ってください。','不足情報があれば仮定を置き、冒頭に明示してください。').replace('その後、原材料、参照戦略、最低3つの構成案を示し、採用案の確認を待ってください。','内部で原材料、参照戦略、最低3つの構成案を比較し、採用理由と不採用理由を示してください。').replace('代表ページ3〜5枚だけを作って確認を待ってください。','代表ページ相当の検証を内部で行ってください。').replace('承認後に','その後に');
    const code=$('[data-v2-code]',promptList); code.textContent=dialogue;
    $$('[data-v2-mode]',promptList).forEach(btn=>btn.addEventListener('click',()=>{$$('[data-v2-mode]',promptList).forEach(x=>x.classList.toggle('is-active',x===btn));code.textContent=btn.dataset.v2Mode==='dialogue'?dialogue:batch}));
  }

  const docs = $('#documents .document-links');
  if (docs) docs.insertAdjacentHTML('afterbegin','<a class="v2-doc" href="https://github.com/silovar-uk/designmd/blob/main/docs/staged-production.md"><span>段階制作</span><strong>staged-production.md</strong></a><a class="v2-doc" href="https://github.com/silovar-uk/designmd/blob/main/docs/reference-strategy.md"><span>参照戦略</span><strong>reference-strategy.md</strong></a>');
})();