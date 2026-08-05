(() => {
  const host = document.querySelector('#slide-guide .media-section__body');
  if (!host || document.querySelector('#slide-blueprint')) return;

  const purposes = {
    fact: {
      label: '事実共有',
      question: '何が起きているか。状況、結果、条件はどうなっているか。',
      title: '内容説明型を基本にする。根拠以上の解釈をタイトルへ足さない。',
      formats: ['表', 'グラフ', '実画面・実物', '短い説明']
    },
    insight: {
      label: '示唆・解釈',
      question: 'この事実から何が言えるか。どの因果や意味を読み取るか。',
      title: '解釈併記型を基本にする。事実と解釈の境界を残す。',
      formats: ['比較', 'グラフ', '因果図', '引用・事例']
    },
    action: {
      label: '行動明示',
      question: '次に何をするか。誰が、いつまでに、どの順番で進めるか。',
      title: '内容説明型または提案・判断型。行動、担当、期限を曖昧にしない。',
      formats: ['手順', '担当表', 'タイムライン', 'チェック項目']
    },
    decision: {
      label: '判断・承認',
      question: '何を選び、何を決めるか。判断に必要な共通軸は何か。',
      title: '解釈併記型または提案・判断型。推奨と根拠を分ける。',
      formats: ['比較表', '選択肢', '判断基準', 'リスクと効果']
    }
  };

  const roles = {
    see: {
      label: '見る',
      summary: '対象、事実、証拠をまず確認する',
      prompts: ['何を確認すればよいか', 'どの事実が中心か'],
      formats: ['写真・実物', '表', 'グラフ', '原文']
    },
    compare: {
      label: '比べる',
      summary: '差、選択肢、別の説明を共通軸で並べる',
      prompts: ['何と何を比べるか', '比較軸はそろっているか'],
      formats: ['比較表', '並列グラフ', 'Before／After', '選択肢一覧']
    },
    think: {
      label: '考える',
      summary: '意味、因果、仮説を組み立てる',
      prompts: ['この事実は何を意味するか', '別の説明はないか'],
      formats: ['因果図', '仮説と証拠', '引用と解釈', '論点整理']
    },
    decide: {
      label: '決める',
      summary: '推奨、選択、承認事項を明確にする',
      prompts: ['何を決める必要があるか', '判断材料は十分か'],
      formats: ['推奨案', '比較表', '判断基準', '効果とリスク']
    },
    advance: {
      label: '進める',
      summary: '次の行動、転換、回収へつなぐ',
      prompts: ['この後に何をするか', '次ページへ何を渡すか'],
      formats: ['次アクション', '手順', '担当と期限', '問いの受け渡し']
    }
  };

  const lab = document.createElement('section');
  lab.id = 'slide-blueprint';
  lab.className = 'slide-blueprint-lab';
  lab.setAttribute('aria-labelledby', 'slide-blueprint-title');
  lab.innerHTML = `
    <div class="slide-blueprint-lab__header">
      <p class="slide-blueprint-lab__eyebrow">Slide blueprint</p>
      <h4 id="slide-blueprint-title">一枚を組む前に、二つだけ決める</h4>
      <p>ページの役割から、いきなりレイアウトへ飛ばない。伝達目的とページの役割を選ぶと、読み手の問い、タイトルの強度、最初に検討する形式を整理できます。</p>
    </div>

    <div class="slide-blueprint-lab__step">
      <div class="slide-blueprint-lab__step-heading">
        <p class="slide-blueprint-lab__step-number">STEP 1</p>
        <h5>伝達目的</h5>
      </div>
      <div class="slide-blueprint-lab__choices" role="group" aria-label="伝達目的を選ぶ">
        ${Object.entries(purposes).map(([key, item]) => `<button class="slide-blueprint-lab__choice" type="button" data-blueprint-purpose="${key}" aria-pressed="false">${item.label}</button>`).join('')}
      </div>
    </div>

    <div class="slide-blueprint-lab__step">
      <div class="slide-blueprint-lab__step-heading">
        <p class="slide-blueprint-lab__step-number">STEP 2</p>
        <h5>ページの役割</h5>
      </div>
      <div class="slide-blueprint-lab__choices" role="group" aria-label="ページの役割を選ぶ">
        ${Object.entries(roles).map(([key, item]) => `<button class="slide-blueprint-lab__choice" type="button" data-blueprint-role="${key}" aria-pressed="false">${item.label}</button>`).join('')}
      </div>
    </div>

    <div class="slide-blueprint-lab__result" data-blueprint-result hidden aria-live="polite">
      <p class="slide-blueprint-lab__result-label">Blueprint</p>
      <p class="slide-blueprint-lab__summary" data-blueprint-summary></p>
      <dl class="slide-blueprint-lab__result-grid">
        <div><dt>読み手が持つ問い</dt><dd data-blueprint-question></dd></div>
        <div><dt>タイトルの強度</dt><dd data-blueprint-title-strength></dd></div>
        <div><dt>最初に検討する形式</dt><dd data-blueprint-formats></dd></div>
      </dl>

      <details class="slide-blueprint-lab__details">
        <summary>一枚の設計図をコピーする</summary>
        <div class="code-block" data-copy-group>
          <pre><code data-blueprint-template></code></pre>
          <button class="copy-button" type="button">コピー</button>
        </div>
      </details>
    </div>

    <div class="slide-blueprint-lab__footer">
      <p>これは部品を全部置くためのテンプレートではありません。タイトル、キーメッセージ、図、注釈など、不要な部品を外すための確認表です。</p>
      <a class="slide-blueprint-lab__link" href="https://github.com/silovar-uk/designmd/blob/main/docs/slide-blueprint.md">詳しい設計原則を読む →</a>
    </div>
  `;

  host.appendChild(lab);

  const state = {
    purpose: null,
    role: null
  };

  try {
    const saved = JSON.parse(window.localStorage.getItem('designmd-slide-blueprint-v1') || '{}');
    if (purposes[saved.purpose]) state.purpose = saved.purpose;
    if (roles[saved.role]) state.role = saved.role;
  } catch (error) {
    // 保存状態が壊れていても、設計図自体は利用できるようにする。
  }

  const result = lab.querySelector('[data-blueprint-result]');
  const summary = lab.querySelector('[data-blueprint-summary]');
  const question = lab.querySelector('[data-blueprint-question]');
  const titleStrength = lab.querySelector('[data-blueprint-title-strength]');
  const formats = lab.querySelector('[data-blueprint-formats]');
  const template = lab.querySelector('[data-blueprint-template]');

  const unique = (items) => [...new Set(items)];

  const buildQuestion = (purpose, role) => {
    return `${purpose.question} あわせて、「${role.prompts[0]}」「${role.prompts[1]}」を確認する。`;
  };

  const buildTemplate = (purpose, role, selectedFormats) => `【一枚の設計図】

伝達目的：${purpose.label}
ページの役割：${role.label}

読み手がこの時点で持つ問い：
${buildQuestion(purpose, role)}

一行で答えるなら：

その回答を支える根拠：

反証・条件・例外：

最初に検討する形式：
${selectedFormats.join('／')}

タイトル：
キーメッセージ（必要な場合だけ）：
本文・図表：
注釈：
出所：
ノート：

前ページから受け取るもの：
次ページへ渡すもの：
このページで終わらせるもの：

情報密度：低／標準／高
視線の入口：
置かない部品：`;

  const updatePressedState = () => {
    lab.querySelectorAll('[data-blueprint-purpose]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.blueprintPurpose === state.purpose));
    });
    lab.querySelectorAll('[data-blueprint-role]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.blueprintRole === state.role));
    });
  };

  const render = () => {
    updatePressedState();

    if (!state.purpose || !state.role) {
      result.hidden = true;
      return;
    }

    const purpose = purposes[state.purpose];
    const role = roles[state.role];
    const selectedFormats = unique([...role.formats, ...purpose.formats]).slice(0, 5);

    summary.textContent = `${purpose.label}を目的に、${role.summary}ページとして設計する。`;
    question.textContent = buildQuestion(purpose, role);
    titleStrength.textContent = purpose.title;
    formats.textContent = selectedFormats.join('／');
    template.textContent = buildTemplate(purpose, role, selectedFormats);
    result.hidden = false;

    try {
      window.localStorage.setItem('designmd-slide-blueprint-v1', JSON.stringify(state));
    } catch (error) {
      // 保存できない環境でも操作は継続する。
    }
  };

  lab.addEventListener('click', (event) => {
    const purposeButton = event.target.closest('[data-blueprint-purpose]');
    if (purposeButton) {
      state.purpose = purposeButton.dataset.blueprintPurpose;
      render();
      return;
    }

    const roleButton = event.target.closest('[data-blueprint-role]');
    if (roleButton) {
      state.role = roleButton.dataset.blueprintRole;
      render();
    }
  });

  render();
})();
