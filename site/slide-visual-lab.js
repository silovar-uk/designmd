(() => {
  const host = document.querySelector('#slide-guide .media-section__body');
  if (!host || document.querySelector('#slide-visual-lab')) return;

  const semanticPatterns = {
    s1: { code: 'S1', title: '段階診断', note: 'どこで止まっているか', recommended: ['v1', 'v4'] },
    s2: { code: 'S2', title: '比較・反転', note: 'A/B・現状/理想を比べる', recommended: ['v3'] },
    s3: { code: 'S3', title: '障害・具体例', note: '抽象的な問題を現場へ落とす', recommended: ['v1', 'v3'] },
    s4: { code: 'S4', title: '打ち手→到達状態', note: '施策と目標状態をつなぐ', recommended: ['v2'] },
    s5: { code: 'S5', title: '現在地ナビ', note: 'シリーズ内の位置を示す', recommended: ['v4'] },
    s6: { code: 'S6', title: '因果・プロセス', note: '流れ・条件・分岐を見せる', recommended: ['v5'] },
    s7: { code: 'S7', title: '全体回収', note: '既出内容を一枚で構造化する', recommended: ['v5', 'v6'] }
  };

  const compositionPatterns = {
    v1: { code: 'V1', title: 'Hero + Evidence', note: '巨大な番号・短語＋具体例', risk: '巨大要素が意味を持たないと、ただの装飾になる。' },
    v2: { code: 'V2', title: 'Action → Outcome', note: '打ち手→変化→到達状態', risk: '右側が実績・目標・仮説のどれかを明示する。' },
    v3: { code: 'V3', title: 'Split Contrast', note: '左右・上下の比較', risk: '左右で比較軸を必ずそろえる。' },
    v4: { code: 'V4', title: 'Sequence Navigator', note: '3〜5段階の現在地', risk: '段階を覚える価値がない資料では使わない。' },
    v5: { code: 'V5', title: 'Decision Flow', note: '条件分岐を含むフロー', risk: '線が交差するなら分割か表を検討する。' },
    v6: { code: 'V6', title: 'Single Claim + Proof', note: '結論＋根拠', risk: '根拠以上にタイトルを強くしない。' }
  };

  const densityNames = {
    quiet: { label: '静', help: '短い主張・余白' },
    standard: { label: '標準', help: '説明と根拠の均衡' },
    dense: { label: '密', help: '比較・フロー・データ' },
    dynamic: { label: '動', help: '転換・大きな図版' }
  };
  const densityCycle = ['quiet', 'standard', 'dense', 'dynamic'];

  const lab = document.createElement('section');
  lab.id = 'slide-visual-lab';
  lab.className = 'slide-visual-lab';
  lab.setAttribute('aria-labelledby', 'slide-visual-lab-title');
  lab.innerHTML = `
    <header class="slide-visual-lab__header">
      <div>
        <p class="slide-visual-lab__eyebrow">Slide design lab</p>
        <h4 id="slide-visual-lab-title">一枚のうまさを、資料全体のテンプレートにしない。</h4>
        <p>色や完成見本を先に選ばず、まず「何を共通化するか」「何を伝えるか」「どう見せるか」「複数枚でどう変化させるか」を分けます。</p>
      </div>
      <aside class="slide-visual-lab__thesis">
        <strong>統一 ≠ 同じレイアウト</strong>
        <span>統一は、同じ判断ルールが見えることでつくる。</span>
      </aside>
    </header>

    <section class="slide-visual-lab__section" aria-labelledby="slide-lab-rules-title">
      <div class="slide-visual-lab__section-head">
        <p class="slide-visual-lab__label">01 / System</p>
        <div><h5 id="slide-lab-rules-title">固定・反復・変化を分ける</h5><p>元スライドの色や巨大数字をそのままブランド化せず、再利用すべき判断だけを残します。</p></div>
      </div>
      <div class="slide-visual-lab__rule-grid">
        <article class="slide-visual-lab__rule">
          <p class="slide-visual-lab__label">FIX</p><h6>資料全体で固定</h6>
          <ul><li>文字ファミリー</li><li>色の意味</li><li>本文サイズの下限</li><li>余白の基本単位</li><li>注釈・出所ルール</li></ul>
        </article>
        <article class="slide-visual-lab__rule slide-visual-lab__rule--conditional">
          <p class="slide-visual-lab__label">REPEAT IF MEANINGFUL</p><h6>意味がある時だけ反復</h6>
          <ul><li>現在地ナビ</li><li>章・ステップ番号</li><li>比較軸</li><li>分類記号</li><li>状態を示す図形</li></ul>
        </article>
        <article class="slide-visual-lab__rule slide-visual-lab__rule--variable">
          <p class="slide-visual-lab__label">VARY</p><h6>積極的に変える</h6>
          <ul><li>一枚の構図</li><li>情報密度</li><li>主役の位置</li><li>画像の大きさ</li><li>背景の基調</li><li>読む速度</li></ul>
        </article>
      </div>
    </section>

    <section class="slide-visual-lab__section" aria-labelledby="slide-lab-matrix-title">
      <div class="slide-visual-lab__section-head">
        <p class="slide-visual-lab__label">02 / Matrix</p>
        <div><h5 id="slide-lab-matrix-title">「何を伝えるか」×「どう見せるか」</h5><p>意味パターンを選ぶと、相性の良い構図を下線で示します。推奨はテンプレート指定ではなく、最初に検討する候補です。</p></div>
      </div>

      <div class="slide-visual-lab__matrix">
        <div>
          <section class="slide-visual-lab__picker" aria-labelledby="semantic-picker-title">
            <div class="slide-visual-lab__picker-head"><strong id="semantic-picker-title">何を伝える？</strong><span>意味上の仕事を一つ選ぶ</span></div>
            <div class="slide-visual-lab__choices" data-semantic-choices>
              ${Object.entries(semanticPatterns).map(([key, item]) => `<button type="button" class="slide-visual-lab__choice" data-semantic="${key}" aria-pressed="false"><span class="slide-visual-lab__choice-code">${item.code}</span><span class="slide-visual-lab__choice-title">${item.title}</span><span class="slide-visual-lab__choice-note">${item.note}</span></button>`).join('')}
            </div>
          </section>

          <section class="slide-visual-lab__picker" aria-labelledby="composition-picker-title" style="margin-top:1rem">
            <div class="slide-visual-lab__picker-head"><strong id="composition-picker-title">どう見せる？</strong><span>構図は意味とは別に選ぶ</span></div>
            <div class="slide-visual-lab__choices" data-composition-choices>
              ${Object.entries(compositionPatterns).map(([key, item]) => `<button type="button" class="slide-visual-lab__choice" data-composition="${key}" data-recommended="false" aria-pressed="false"><span class="slide-visual-lab__choice-code">${item.code}</span><span class="slide-visual-lab__choice-title">${item.title}</span><span class="slide-visual-lab__choice-note">${item.note}</span></button>`).join('')}
            </div>
          </section>
        </div>

        <section class="slide-visual-lab__preview" aria-live="polite">
          <div class="slide-visual-lab__preview-head">
            <div><p class="slide-visual-lab__mode">Wireframe</p><h6 data-preview-title>意味と構図を選ぶ</h6></div>
            <span class="slide-visual-lab__fit" data-preview-fit>未選択</span>
          </div>
          <div class="slide-visual-lab__wireframe"><div class="slide-visual-lab__canvas" data-wireframe></div></div>
          <div class="slide-visual-lab__preview-copy">
            <p><strong>この構図の仕事</strong><span data-preview-purpose>完成見本ではなく、情報関係だけを白黒で確認します。</span></p>
            <p><strong>注意</strong><span data-preview-risk>色、形、写真はこの後で決めます。</span></p>
          </div>
        </section>
      </div>
    </section>

    <section class="slide-visual-lab__section" aria-labelledby="slide-lab-rhythm-title">
      <div class="slide-visual-lab__section-head">
        <p class="slide-visual-lab__label">03 / Deck rhythm</p>
        <div><h5 id="slide-lab-rhythm-title">5枚を横に置き、読む速度を変える</h5><p>各カードを押すと「静 → 標準 → 密 → 動」を切り替えられます。同じ密度を並べすぎると警告します。</p></div>
      </div>
      <div class="slide-visual-lab__rhythm" data-rhythm></div>
      <div class="slide-visual-lab__rhythm-result" data-rhythm-result>
        <strong data-rhythm-title>リズムあり</strong>
        <p data-rhythm-message>一枚の構図ではなく、5枚の速度差を確認します。</p>
      </div>
    </section>

    <footer class="slide-visual-lab__footer">
      <p>このラボは元スライドの水色・巨大数字・カード形状を再現するものではありません。模倣するのは、明度差、サイズ差、余白、意味を持つ反復、ページ間の変化という判断です。</p>
      <div class="slide-visual-lab__links"><a href="https://github.com/silovar-uk/designmd/blob/main/docs/slide-visual-grammar.md">視覚文法 →</a><a href="https://github.com/silovar-uk/designmd/blob/main/docs/deck-grammar.md">Deck Grammar →</a></div>
    </footer>
  `;

  const existingBlueprint = host.querySelector('#slide-blueprint');
  if (existingBlueprint) existingBlueprint.insertAdjacentElement('afterend', lab);
  else host.appendChild(lab);

  const state = {
    semantic: 's1',
    composition: 'v1',
    rhythm: ['quiet', 'standard', 'standard', 'dense', 'quiet']
  };

  const wireframe = lab.querySelector('[data-wireframe]');
  const previewTitle = lab.querySelector('[data-preview-title]');
  const previewFit = lab.querySelector('[data-preview-fit]');
  const previewPurpose = lab.querySelector('[data-preview-purpose]');
  const previewRisk = lab.querySelector('[data-preview-risk]');
  const rhythmHost = lab.querySelector('[data-rhythm]');
  const rhythmResult = lab.querySelector('[data-rhythm-result]');
  const rhythmTitle = lab.querySelector('[data-rhythm-title]');
  const rhythmMessage = lab.querySelector('[data-rhythm-message]');

  const wf = (className, style = '') => `<span class="${className}"${style ? ` style="${style}"` : ''}></span>`;

  const renderWireframe = (pattern) => {
    const title = wf('slide-visual-lab__wf-title');
    if (pattern === 'v1') {
      return `${title}${wf('slide-visual-lab__wf-hero', 'left:9%;top:29%;width:22%;height:48%;')}${wf('slide-visual-lab__wf-box', 'left:38%;top:34%;width:24%;height:31%;')}${wf('slide-visual-lab__wf-box', 'left:66%;top:34%;width:24%;height:31%;')}${wf('slide-visual-lab__wf-line', 'left:38%;top:72%;width:43%;')}`;
    }
    if (pattern === 'v2') {
      return `${title}${wf('slide-visual-lab__wf-box', 'left:9%;top:53%;width:17%;height:22%;')}${wf('slide-visual-lab__wf-box', 'left:29%;top:53%;width:17%;height:22%;')}${wf('slide-visual-lab__wf-arrow', 'left:49%;top:63%;width:14%;')}${wf('slide-visual-lab__wf-box', 'left:66%;top:28%;width:25%;height:49%;')}`;
    }
    if (pattern === 'v3') {
      return `${title}${wf('slide-visual-lab__wf-box', 'left:9%;top:29%;width:38%;height:51%;')}${wf('slide-visual-lab__wf-box', 'left:53%;top:29%;width:38%;height:51%;')}${wf('slide-visual-lab__wf-line', 'left:15%;top:42%;width:24%;')}${wf('slide-visual-lab__wf-line', 'left:59%;top:42%;width:24%;')}`;
    }
    if (pattern === 'v4') {
      return `${title}${[16, 35, 54, 73].map((left, index) => wf(index === 1 ? 'slide-visual-lab__wf-hero' : 'slide-visual-lab__wf-box', `left:${left}%;top:48%;width:12%;height:18%;`)).join('')}${wf('slide-visual-lab__wf-line', 'left:22%;top:56%;width:58%;height:1%;')}`;
    }
    if (pattern === 'v5') {
      return `${title}${wf('slide-visual-lab__wf-box', 'left:11%;top:36%;width:18%;height:17%;')}${wf('slide-visual-lab__wf-box', 'left:40%;top:36%;width:18%;height:17%;')}${wf('slide-visual-lab__wf-box', 'left:70%;top:27%;width:20%;height:17%;')}${wf('slide-visual-lab__wf-box', 'left:70%;top:61%;width:20%;height:17%;')}${wf('slide-visual-lab__wf-arrow', 'left:29%;top:44%;width:11%;')}${wf('slide-visual-lab__wf-arrow', 'left:58%;top:44%;width:13%;transform:rotate(-18deg);')}${wf('slide-visual-lab__wf-arrow', 'left:58%;top:49%;width:13%;transform:rotate(18deg);')}`;
    }
    return `${wf('slide-visual-lab__wf-title', 'left:23%;top:18%;width:54%;height:9%;')}${wf('slide-visual-lab__wf-line', 'left:28%;top:34%;width:44%;height:3%;')}${wf('slide-visual-lab__wf-box', 'left:10%;top:54%;width:23%;height:23%;')}${wf('slide-visual-lab__wf-box', 'left:38.5%;top:54%;width:23%;height:23%;')}${wf('slide-visual-lab__wf-box', 'left:67%;top:54%;width:23%;height:23%;')}`;
  };

  const renderMatrix = () => {
    const semantic = semanticPatterns[state.semantic];
    const composition = compositionPatterns[state.composition];
    const compatible = semantic.recommended.includes(state.composition);

    lab.querySelectorAll('[data-semantic]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.semantic === state.semantic));
    });
    lab.querySelectorAll('[data-composition]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.composition === state.composition));
      button.dataset.recommended = String(semantic.recommended.includes(button.dataset.composition));
    });

    previewTitle.textContent = `${semantic.code} ${semantic.title} × ${composition.code} ${composition.title}`;
    previewFit.textContent = compatible ? '相性の良い候補' : '要理由づけ';
    previewFit.dataset.fit = compatible ? 'good' : 'caution';
    previewPurpose.textContent = `${semantic.note}ために、${composition.note}を使う。`;
    previewRisk.textContent = compatible ? composition.risk : `この組合せは初期候補ではない。内容上の理由を説明できる場合だけ使う。 ${composition.risk}`;
    wireframe.innerHTML = renderWireframe(state.composition);
  };

  const longestRun = (items) => {
    let best = 1;
    let current = 1;
    for (let index = 1; index < items.length; index += 1) {
      if (items[index] === items[index - 1]) current += 1;
      else current = 1;
      best = Math.max(best, current);
    }
    return best;
  };

  const renderRhythm = () => {
    rhythmHost.innerHTML = state.rhythm.map((density, index) => {
      const item = densityNames[density];
      return `<button type="button" class="slide-visual-lab__rhythm-slide" data-rhythm-index="${index}" data-density="${density}" aria-label="${index + 1}枚目。現在は${item.label}。押すと密度を変更"><span class="slide-visual-lab__rhythm-index">0${index + 1}</span><span class="slide-visual-lab__rhythm-name">${item.label}</span><span class="slide-visual-lab__rhythm-help">${item.help}</span></button>`;
    }).join('');

    const run = longestRun(state.rhythm);
    const strong = state.rhythm.filter((value) => value === 'dense' || value === 'dynamic').length;
    const dynamic = state.rhythm.filter((value) => value === 'dynamic').length;

    if (run >= 3) {
      rhythmResult.dataset.state = 'warn';
      rhythmTitle.textContent = '同じ速度が続きすぎ';
      rhythmMessage.textContent = '同じ密度が3枚以上連続しています。構図・情報量・主役の種類のどれかを変える余地を確認してください。';
    } else if (dynamic >= 3 || strong >= 4) {
      rhythmResult.dataset.state = 'warn';
      rhythmTitle.textContent = '強いページが多すぎ';
      rhythmMessage.textContent = '密・動のページが多く、資料全体が叫び続けています。静かな回収ページを入れてください。';
    } else {
      rhythmResult.dataset.state = 'good';
      rhythmTitle.textContent = 'リズムあり';
      rhythmMessage.textContent = '読む速度に差があります。強い手法はフェーズ転換や重要ページへ温存できています。';
    }
  };

  lab.addEventListener('click', (event) => {
    const semanticButton = event.target.closest('[data-semantic]');
    if (semanticButton) {
      state.semantic = semanticButton.dataset.semantic;
      const recommended = semanticPatterns[state.semantic].recommended;
      if (!recommended.includes(state.composition)) state.composition = recommended[0];
      renderMatrix();
      return;
    }

    const compositionButton = event.target.closest('[data-composition]');
    if (compositionButton) {
      state.composition = compositionButton.dataset.composition;
      renderMatrix();
      return;
    }

    const rhythmButton = event.target.closest('[data-rhythm-index]');
    if (rhythmButton) {
      const index = Number(rhythmButton.dataset.rhythmIndex);
      const current = state.rhythm[index];
      state.rhythm[index] = densityCycle[(densityCycle.indexOf(current) + 1) % densityCycle.length];
      renderRhythm();
    }
  });

  renderMatrix();
  renderRhythm();
})();
