(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const tone = $('#tone');
  if (!tone || $('#japanese-writing')) return;

  const section = document.createElement('section');
  section.id = 'japanese-writing';
  section.className = 'v4-writing';
  section.innerHTML = `
    <header class="v4-head">
      <em>07</em>
      <div>
        <small>JAPANESE AI WRITING</small>
        <h2>語尾より前に、<br>戻る場所がある。</h2>
      </div>
    </header>

    <div class="v4-thesis">
      <p>AIくささを「使ってはいけない言葉」の一覧だけで直すと、別の定型文へ移動します。</p>
      <strong>表面、論証、認知、身体。<br>深さの違う4回の編集。</strong>
    </div>

    <div class="v4-sources" aria-label="参照した四つの実践">
      <article>
        <span>01 / LINT</span>
        <h3>納品物の表面</h3>
        <p>記号、定型句、冗長、薄い一般論を見つける。</p>
        <a href="https://note.com/pepe2blog2/n/nca5c946844f2">AI臭い文章50選</a>
      </article>
      <article>
        <span>02 / ARGUMENT</span>
        <h3>論証と読者負荷</h3>
        <p>段落の役割、因果、条件、不要な演出を点検する。</p>
        <a href="https://gist.github.com/k16shikano/fd287c3133457c4fd8f5601d34aa817d">japanese-tech-writing</a>
      </article>
      <article class="rhythm">
        <span>03 / COGNITIVE RHYTHM</span>
        <h3>認識の更新</h3>
        <p>対象更新、問いの回収、認知モード、密度を設計する。</p>
        <a href="https://gist.github.com/k16shikano/eb2929f13ed19c97188393d297be8432">cognitive-rhythm-writing</a>
      </article>
      <article>
        <span>04 / EMBODIMENT</span>
        <h3>身体と記憶</h3>
        <p>音読し、自分の呼吸、経験、言い切れなさへ戻す。</p>
        <a href="https://note.com/moriyoshizan/n/ncb52779509c1">AIの文章には香りがない</a>
      </article>
    </div>

    <section class="v4-pass-lab" data-writing-pass>
      <div class="v4-pass-lab__intro">
        <small>FOUR-PASS EDIT</small>
        <h3>いま、どこを直しているか。</h3>
        <p>ボタンを押すと、同じ文章に対する編集の深さが切り替わります。</p>
      </div>
      <div class="v4-pass-tabs" role="tablist" aria-label="文章編集の段階">
        <button type="button" class="is-active" data-pass="lint">1　表面</button>
        <button type="button" data-pass="argument">2　論証</button>
        <button type="button" data-pass="rhythm">3　認知</button>
        <button type="button" data-pass="body">4　身体</button>
      </div>
      <article class="v4-pass-panel" aria-live="polite">
        <small data-pass-label>PASS 1 / LINT</small>
        <h4 data-pass-title>残留物と反復を取る</h4>
        <p data-pass-purpose>記号、定型句、同じ文末、冗長な言い換えを除きます。</p>
        <div class="v4-pass-grid">
          <div>
            <h5>見るもの</h5>
            <ul data-pass-checks>
              <li>半角スペース、Markdown</li>
              <li>空虚な予告と総括</li>
              <li>同じ接続詞と文末</li>
              <li>過剰な完全文章</li>
            </ul>
          </div>
          <div>
            <h5>まだ、しないこと</h5>
            <p data-pass-limit>内容や経験を勝手に追加しない。</p>
          </div>
        </div>
        <p class="v4-pass-return" data-pass-return><strong>戻る場所：</strong>表面校正</p>
      </article>
    </section>

    <section class="v4-depth">
      <div class="v4-depth__lead">
        <small>EDITING DEPTH</small>
        <h3>言い換えただけでは、<br>まだ薄い。</h3>
      </div>
      <div class="v4-depth__steps">
        <article>
          <b>AI初稿</b>
          <p>重要なのは、ユーザーに寄り添った体験を提供することです。</p>
        </article>
        <article class="surface">
          <b>表面修正</b>
          <p>ユーザーに寄り添う体験が大切です。</p>
          <small>「重要なのは」を削除。中身は、まだ同じ。</small>
        </article>
        <article class="structure">
          <b>論証へ戻す</b>
          <p><span>観察</span>どの場面で、誰が止まったか</p>
          <p><span>原因</span>何が判断を難しくしたか</p>
          <p><span>対応</span>誰が、いつ、何を変えるか</p>
        </article>
        <article class="cognitive">
          <b>認知を動かす</b>
          <p><span>対象更新</span>文章の予定ではなく、数字・発言・因果を置く</p>
          <p><span>回収</span>冒頭の問いが、後の判断を変える</p>
          <p><span>密度</span>短文ではなく、読む負荷と視点距離を変える</p>
        </article>
        <article class="source">
          <b>本人へ戻す</b>
          <p>実際のメモ、発言、数字、迷いを追加確認。</p>
          <small>ない経験は、AIに作らせない。</small>
        </article>
      </div>
    </section>

    <aside class="v4-false-human">
      <div>
        <small>FALSE HUMANIZATION</small>
        <h3>人間味の、コスプレ。</h3>
      </div>
      <ul>
        <li>架空の「私も悩んでいました」</li>
        <li>本人が感じていない感情</li>
        <li>見ていない景色や五感</li>
        <li>意図的な誤字や言い淀み</li>
        <li>意味のない問いと短い断定</li>
      </ul>
      <p>足りない場合は、書き足さずに<strong>本人へ質問</strong>します。</p>
    </aside>

    <section class="v4-questions">
      <div>
        <small>QUESTIONS BEFORE REWRITE</small>
        <h3>文章より先に、<br>記憶を聞く。</h3>
      </div>
      <ol>
        <li>その場で最初に目に入ったものは？</li>
        <li>誰が、どんな言葉を使った？</li>
        <li>予想と違ったことは？</li>
        <li>一番言い切れない部分は？</li>
        <li>自分なら使わない言い回しは？</li>
        <li>音読すると、どこで息が詰まる？</li>
      </ol>
    </section>

    <div class="v4-actions">
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/japanese-ai-writing-practices.md">四回編集を読む</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/cognitive-rhythm-writing.md">認知リズムを読む</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/japanese-writing-review-checklist.md">専用チェックリスト</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/prompts/writing-review.md">文章レビュー用プロンプト</a>
    </div>
  `;

  tone.after(section);

  const sideNav = $('.side-nav ol');
  if (sideNav) {
    const toneItem = [...sideNav.children].find((item) => item.textContent.includes('あたたかみ'));
    if (toneItem) toneItem.insertAdjacentHTML('afterend', '<li><a href="#japanese-writing">日本語のAIくささ</a></li>');
  }

  const headerNav = $('.header-nav');
  if (headerNav && !$('.v4-writing-link', headerNav)) {
    const github = $('.header-nav__github', headerNav);
    const link = document.createElement('a');
    link.href = '#japanese-writing';
    link.className = 'v4-writing-link';
    link.textContent = '日本語';
    headerNav.insertBefore(link, github);
  }

  const setNumber = (id, value) => {
    const node = $(`${id} .section-number`);
    if (node) node.textContent = value;
  };
  setNumber('#principles', '08');
  setNumber('#media', '09');
  setNumber('#workflow', '10');
  setNumber('#review', '11');
  setNumber('#prompts', '12');
  setNumber('#documents', '13');

  const passes = {
    lint: {
      label: 'PASS 1 / LINT',
      title: '残留物と反復を取る',
      purpose: '記号、定型句、同じ文末、冗長な言い換えを除きます。',
      checks: ['半角スペース、Markdown', '空虚な予告と総括', '同じ接続詞と文末', '過剰な完全文章'],
      limit: '内容や経験を勝手に追加しない。',
      returnTo: '表面校正'
    },
    argument: {
      label: 'PASS 2 / ARGUMENT',
      title: '段落と論証を組み直す',
      purpose: '語尾ではなく、主張、根拠、因果、条件の対応を直します。',
      checks: ['段落が前から受けるもの', 'その段落の役割', '次段落へ渡すもの', '証拠と主張の型'],
      limit: '同じ順序のまま文章だけ整えない。',
      returnTo: '構成・段落設計'
    },
    rhythm: {
      label: 'PASS 3 / COGNITIVE RHYTHM',
      title: '読み手の認識を動かす',
      purpose: '対象更新、問いの回収、認知モード、密度、節境界を確認します。',
      checks: ['対象更新／文書更新', '問い・回収台帳', '観察・推論・反証', '密度と視点距離'],
      limit: '問い、短文、迷いを新しい定型にしない。',
      returnTo: '原材料・問い・段落の役割'
    },
    body: {
      label: 'PASS 4 / EMBODIMENT',
      title: '本人の身体と記憶へ戻す',
      purpose: '音読し、実際の場面、言葉、迷い、責任を文章へ戻します。',
      checks: ['本人が見た場面', '実際に使われた言葉', '言い切れない理由', '本人の語彙と呼吸'],
      limit: '感情、経験、五感をAIが創作しない。',
      returnTo: '本人への逆質問と音読'
    }
  };

  const lab = $('[data-writing-pass]');
  if (lab) {
    $$('[data-pass]', lab).forEach((button) => {
      button.addEventListener('click', () => {
        $$('[data-pass]', lab).forEach((item) => item.classList.toggle('is-active', item === button));
        const pass = passes[button.dataset.pass];
        $('[data-pass-label]', lab).textContent = pass.label;
        $('[data-pass-title]', lab).textContent = pass.title;
        $('[data-pass-purpose]', lab).textContent = pass.purpose;
        $('[data-pass-checks]', lab).innerHTML = pass.checks.map((item) => `<li>${item}</li>`).join('');
        $('[data-pass-limit]', lab).textContent = pass.limit;
        $('[data-pass-return]', lab).innerHTML = `<strong>戻る場所：</strong>${pass.returnTo}`;
      });
    });
  }

  const documents = $('#documents .document-links');
  if (documents && !$('.v4-writing-doc', documents)) {
    const guides = [
      ['日本語AI文章', 'japanese-ai-writing-practices.md', 'https://github.com/silovar-uk/designmd/blob/main/docs/japanese-ai-writing-practices.md'],
      ['認知リズム', 'cognitive-rhythm-writing.md', 'https://github.com/silovar-uk/designmd/blob/main/docs/cognitive-rhythm-writing.md'],
      ['文章チェック', 'japanese-writing-review-checklist.md', 'https://github.com/silovar-uk/designmd/blob/main/docs/japanese-writing-review-checklist.md']
    ];
    guides.forEach(([label, title, href]) => {
      const link = document.createElement('a');
      link.className = 'v4-writing-doc';
      link.href = href;
      link.innerHTML = `<span>${label}</span><strong>${title}</strong>`;
      documents.append(link);
    });
  }
})();
