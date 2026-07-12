(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const writing = $('#japanese-writing');
  if (!writing || $('#diagram-grammar')) return;

  const section = document.createElement('section');
  section.id = 'diagram-grammar';
  section.className = 'v5-diagram';
  section.innerHTML = `
    <header class="v5-head">
      <em>08</em>
      <div>
        <small>DIAGRAM GRAMMAR</small>
        <h2>矢印を引く前に、<br>動詞を決める。</h2>
      </div>
    </header>

    <div class="v5-thesis">
      <p>矢印は「つながっている感じ」を出す棒ではありません。</p>
      <strong>図形＝名詞<br>矢印＝動詞<br>囲み＝文脈</strong>
    </div>

    <section class="v5-grammar" aria-label="図の文法">
      <article>
        <span>NOUN</span>
        <div class="v5-shape"></div>
        <h3>図形</h3>
        <p>人、組織、工程、状態、成果物。</p>
      </article>
      <article>
        <span>VERB</span>
        <div class="v5-arrow"><i></i></div>
        <h3>矢印</h3>
        <p>渡す、生む、変える、必要とする。</p>
      </article>
      <article>
        <span>CONTEXT</span>
        <div class="v5-container"><i></i><i></i></div>
        <h3>囲み・レーン</h3>
        <p>担当、フェーズ、範囲、現状と将来。</p>
      </article>
    </section>

    <section class="v5-relation-lab" data-relation-lab>
      <div class="v5-relation-lab__intro">
        <small>RELATION LAB</small>
        <h3>関係が変われば、<br>図も変わる。</h3>
        <p>同じ三要素でも、意味に応じて矢印の有無と配置を変えます。</p>
      </div>
      <div class="v5-relation-tabs" role="tablist" aria-label="関係の種類">
        <button class="is-active" type="button" data-relation="sequence">工程</button>
        <button type="button" data-relation="cause">因果</button>
        <button type="button" data-relation="parallel">並列</button>
        <button type="button" data-relation="handoff">引き継ぎ</button>
        <button type="button" data-relation="hierarchy">分解</button>
      </div>
      <div class="v5-relation-panel" aria-live="polite">
        <small data-relation-label>SEQUENCE / 時系列</small>
        <div class="v5-demo" data-relation-demo>
          <div class="node">受付</div><div class="edge"><span>次へ</span></div><div class="node">分類</div><div class="edge"><span>次へ</span></div><div class="node">回答</div>
        </div>
        <p data-relation-rule>一方向に統一し、各箱を同じ粒度の行動にします。</p>
      </div>
    </section>

    <section class="v5-before-after">
      <div>
        <small>AWKWARD</small>
        <h3>箱を並べて、<br>あとから矢印。</h3>
        <div class="v5-bad-diagram">
          <span>課題</span><i></i><span>施策</span><i></i><span>効果</span>
        </div>
        <p>時間なのか、因果なのか、対応関係なのか不明。</p>
      </div>
      <div class="good">
        <small>DEFINED</small>
        <h3>関係を一文にして、<br>必要な線だけ。</h3>
        <p class="v5-diagram-sentence">案内文の統一が、現場判断のばらつきを減らす。</p>
        <div class="v5-good-diagram">
          <span>案内文の統一</span><i><b>減らす</b></i><span>現場判断のばらつき</span>
        </div>
      </div>
    </section>

    <section class="v5-script">
      <div class="v5-script__intro">
        <small>SPEAKER NOTES</small>
        <h3>図より先に、<br>話す文章。</h3>
        <p>説明順を文章にすると、必要な図形と矢印が見えてきます。</p>
      </div>
      <div class="v5-slide-card">
        <span class="v5-slide-card__title">問い合わせ対応の引き継ぎ</span>
        <div class="v5-lanes">
          <div><b>営業</b><span>受付</span></div>
          <i><small>問い合わせ内容</small></i>
          <div><b>運営</b><span>分類・回答</span></div>
        </div>
      </div>
      <div class="v5-notes">
        <span>NOTES / 読み上げ台本</span>
        <p>前のページでは、回答の遅れが発生している場所を確認しました。ここでは、営業から運営へ問い合わせを引き継ぐ部分を見ます。左側が営業、右側が運営です。中央の矢印は単なる順番ではなく、問い合わせ内容そのものを渡す関係を表しています。現在は引き継ぐ情報の形式が統一されていないため、運営側で再確認が発生しています。次のページでは、引き綕ぎ項目をどこまで標準化するかを示します。</p>
      </div>
    </section>

    <aside class="v5-rule">
      <small>COMPLETION RULE</small>
      <p>台本のないスライドは、<strong>まだ完成ではありません。</strong></p>
      <span>PowerPointでは各ページのノート欄へ、文章形式の台本を収録。</span>
    </aside>

    <div class="v5-actions">
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/diagram-shapes.md">図形・矢印・台本ガイド</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/diagram-review-checklist.md">専用チェックリスト</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/prompts/slide-create.md">更新版スライドプロンプト</a>
    </div>
  `;

  writing.after(section);

  const relations = {
    sequence: {
      label: 'SEQUENCE / 時系列',
      nodes: ['受付', '分類', '回答'],
      edge: '次へ',
      rule: '一方向に統一し、各箱を同じ粒度の行動にします.',
      type: 'chain'
    },
    cause: {
      label: 'CAUSE / 因果',
      nodes: ['案内の不統一', '現場で再確認', '待ち時間の増加'],
      edge: '生む',
      rule: '原因から結果へ飛ばず、中間過程を置きます。',
      type: 'chain'
    },
    parallel: {
      label: 'PARALLEL / 並列',
      nodes: ['価格', '使いやすさ', 'サポート'],
      edge: '',
      rule: '同じ階層の比較項目。矢印は使いません。',
      type: 'parallel'
    },
    handoff: {
      label: 'HANDOFF / 引き継ぎ',
      nodes: ['営業', '問い合わせ内容', '運営'],
      edge: '引き継ぐ',
      rule: '担当をレーンで分け、何を渡すかを矢印へ書きます。',
      type: 'handoff'
    },
    hierarchy: {
      label: 'DECOMPOSITION / 分解',
      nodes: ['売上', '客数', '客単価'],
      edge: '',
      rule: '上位概念の分解。因果ではないため矢印頭を付けません。',
      type: 'tree'
    }
  };

  const renderRelation = (relation) => {
    const panel = $('[data-relation-lab]');
    const demo = $('[data-relation-demo]', panel);
    $('[data-relation-label]', panel).textContent = relation.label;
    $('[data-relation-rule]', panel).textContent = relation.rule;
    demo.className = `v5-demo is-${relation.type}`;
    if (relation.type === 'parallel') {
      demo.innerHTML = relation.nodes.map((item) => `<div class="node">${item}</div>`).join('');
    } else if (relation.type === 'tree') {
      demo.innerHTML = `<div class="node root">${relation.nodes[0]}</div><div class="branches"><i></i><i></i></div><div class="children"><div class="node">${relation.nodes[1]}</div><div class="node">${relation.nodes[2]}</div></div>`;
    } else if (relation.type === 'handoff') {
      demo.innerHTML = `<div class="node lane">${relation.nodes[0]}</div><div class="edge"><span>${relation.nodes[1]}を<br>${relation.edge}</span></div><div class="node lane">${relation.nodes[2]}</div>`;
    } else {
      demo.innerHTML = relation.nodes.map((item, index) => `${index ? `<div class="edge"><span>${relation.edge}</span></div>` : ''}<div class="node">${item}</div>`).join('');
    }
  };

  const lab = $('[data-relation-lab]');
  $$('[data-relation]', lab).forEach((button) => {
    button.addEventListener('click', () => {
      $$('[data-relation]', lab).forEach((item) => item.classList.toggle('is-active', item === button));
      renderRelation(relations[button.dataset.relation]);
    });
  });

  const sideNav = $('.side-nav ol');
  if (sideNav) {
    const writingItem = [...sideNav.children].find((item) => item.textContent.includes('日本語のAIくささ'));
    if (writingItem) writingItem.insertAdjacentHTML('afterend', '<li><a href="#diagram-grammar">図形・矢印・台本</a></li>');
  }

  const headerNav = $('.header-nav');
  if (headerNav && !$('.v5-diagram-link', headerNav)) {
    const github = $('.header-nav__github', headerNav);
    const link = document.createElement('a');
    link.href = '#diagram-grammar';
    link.className = 'v5-diagram-link';
    link.textContent = '図の文法';
    headerNav.insertBefore(link, github);
  }

  const setNumber = (id, value) => {
    const node = $(`${id} .section-number`);
    if (node) node.textContent = value;
  };
  setNumber('#principles', '09');
  setNumber('#media', '10');
  setNumber('#workflow', '11');
  setNumber('#review', '12');
  setNumber('#prompts', '13');
  setNumber('#documents', '14');

  const documents = $('#documents .document-links');
  if (documents && !$('.v5-diagram-doc', documents)) {
    const guides = [
      ['図形・矢印・台本', 'diagram-shapes.md', 'https://github.com/silovar-uk/designmd/blob/main/docs/diagram-shapes.md'],
      ['図形レビュー', 'diagram-review-checklist.md', 'https://github.com/silovar-uk/designmd/blob/main/docs/diagram-review-checklist.md']
    ];
    guides.forEach(([label, title, href]) => {
      const link = document.createElement('a');
      link.className = 'v5-diagram-doc';
      link.href = href;
      link.innerHTML = `<span>${label}</span><strong>${title}</strong>`;
      documents.append(link);
    });
  }
})();
