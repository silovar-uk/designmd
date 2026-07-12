(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const grid = $('#grid');
  if (!grid || $('#tone')) return;

  const tone = document.createElement('section');
  tone.id = 'tone';
  tone.className = 'v3-tone';
  tone.innerHTML = `
    <header class="v3-head">
      <em>06</em>
      <div>
        <small>PLAYFUL EDITORIALITY</small>
        <h2>正しさに、<br>人の気配を混ぜる。</h2>
      </div>
    </header>

    <div class="v3-opening">
      <div class="v3-dialogue" aria-label="編集上の会話例">
        <p><b>読者</b><span>つまり、面白い見出しを増やせばいい？</span></p>
        <p class="reply"><b>編集</b><span>それをやると、全部の見出しが面白い顔をし始めます。</span></p>
      </div>
      <p class="v3-opening__answer">面白さは表面へ均等に塗らず、<strong>関係性・具体性・一度だけのズレ</strong>として置きます。</p>
    </div>

    <div class="v3-lines" aria-label="本線・副線・脱線の三層">
      <article>
        <span>MAIN</span>
        <h3>本線</h3>
        <p>正確な情報、根拠、論理、判断事項。</p>
        <small>ここは常に通っている。</small>
      </article>
      <article class="warmth">
        <span>SIDE</span>
        <h3>副線</h3>
        <p>観察、反応、戸惑い、言い直し、生活の具体性。</p>
        <small>誰が考えているかが見える。</small>
      </article>
      <article class="detour">
        <span>DETOUR</span>
        <h3>脱線</h3>
        <p>ズレ、余計な検証、キャプション、コールバック。</p>
        <small>なくても成立する。でも、あると覚えている。</small>
      </article>
    </div>

    <section class="v3-prototype" aria-labelledby="tone-prototype-title">
      <div class="v3-prototype__intro">
        <small>TONE PROTOTYPE</small>
        <h3 id="tone-prototype-title">4ページだけで、温度を試す。</h3>
        <p>全体を面白くする前に、正確さ・あたたかみ・小さな笑い・静かな帰還を順番に確認します。</p>
      </div>
      <ol class="v3-prototype__sequence">
        <li>
          <b>1</b><span>知識</span>
          <h4>カードは、並列情報の整理に向いている。</h4>
          <p>まずは、何もふざけず正確に伝える。</p>
        </li>
        <li class="warm">
          <b>2</b><span>あたたかみ</span>
          <h4>ただ、AIは並列でなくても割と置きます。</h4>
          <p>読者と同じ違和感を、小さく共有する。</p>
        </li>
        <li class="funny">
          <b>3</b><span>ユーモア</span>
          <h4>地震・プリン・経営戦略。全部、3枚に収まりました。</h4>
          <p>一度だけ、妙に具体的な例で予想を外す。</p>
        </li>
        <li class="calm">
          <b>4</b><span>静かに戻る</span>
          <h4>では、本当にカードが適する条件を確認する。</h4>
          <p>笑いを引きずらず、内容へ戻る。</p>
        </li>
      </ol>
    </section>

    <section class="v3-tone-lab" data-tone-lab>
      <div>
        <small>ONE FACT, THREE TONES</small>
        <h3>笑いの強さを、先に選ぶ。</h3>
        <p>事実は変えず、距離とズレだけを調整します。</p>
      </div>
      <div class="v3-tone-lab__controls" role="tablist" aria-label="ユーモアの強さ">
        <button class="is-active" data-tone="smile" type="button">微笑み</button>
        <button data-tone="nudge" type="button">軽いツッコミ</button>
        <button data-tone="punch" type="button">明確なオチ</button>
      </div>
      <blockquote data-tone-copy>
        <p>同じレイアウトが3ページ続いたら、少し立ち止まってください。</p>
        <small>まだ資料は話しています。テンプレートは、まだです。</small>
      </blockquote>
    </section>

    <aside class="v3-quiet-return">
      <small>RETURN TO CONTENT</small>
      <p>ここで笑いは終わりです。<br><strong>次は、また真面目に原則を読みます。</strong></p>
    </aside>
  `;

  grid.after(tone);

  const stageNote = $('#stages .v2-stage-note');
  if (stageNote && !$('.v3-stage-caption', stageNote.parentElement)) {
    stageNote.insertAdjacentHTML('afterend', '<p class="v3-margin-note v3-stage-caption">ここまで完成スライドは0枚です。正常です。</p>');
  }

  const gridDemo = $('#grid .v2-grid-demo');
  if (gridDemo && !$('.v3-grid-caption', gridDemo)) {
    gridDemo.insertAdjacentHTML('beforeend', '<p class="v3-grid-caption">※ 12列ありますが、全部埋める競技ではありません。</p>');
  }

  const reviewIntro = $('#review .section-intro');
  if (reviewIntro && !$('.v3-review-note', reviewIntro.parentElement)) {
    reviewIntro.insertAdjacentHTML('afterend', '<p class="v3-review-note">全部にチェックがついても、落ち込む必要はありません。<br>かなり前の工程へ戻る必要はあります。</p>');
  }

  const sideNav = $('.side-nav ol');
  if (sideNav) {
    const gridItem = [...sideNav.children].find((item) => item.textContent.includes('グリッド'));
    if (gridItem) gridItem.insertAdjacentHTML('afterend', '<li><a href="#tone">あたたかみとユーモア</a></li>');
  }

  const headerNav = $('.header-nav');
  if (headerNav && !$('.v3-tone-link', headerNav)) {
    const github = $('.header-nav__github', headerNav);
    const link = document.createElement('a');
    link.href = '#tone';
    link.className = 'v3-tone-link';
    link.textContent = '人の気配';
    headerNav.insertBefore(link, github);
  }

  const setNumber = (id, value) => {
    const node = $(`${id} .section-number`);
    if (node) node.textContent = value;
  };
  setNumber('#principles', '07');
  setNumber('#media', '08');
  setNumber('#workflow', '09');
  setNumber('#review', '10');
  setNumber('#prompts', '11');
  setNumber('#documents', '12');

  const promptList = $('#prompts .prompt-list');
  if (promptList && !$('.v3-playful-prompt', promptList)) {
    const details = document.createElement('details');
    details.className = 'v3-playful-prompt';
    details.innerHTML = `
      <summary>あたたかみ・面白味・ユーモアも設計する</summary>
      <p class="v3-prompt-note">「ポップにする」ではなく、本線・副線・脱線を分けて指定します。</p>
      <div class="code-block" data-v3-copy-group>
        <pre><code>以下のガイドを追加で参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/playful-editoriality.md

成果物を、単にきれいで正しいものにしないでください。
本線、作り手の人柄が見える副線、必要な場所だけの脱線を分けて設計してください。

全体制作前に、次の4種類を代表ページとして提示してください。
1. 正確さを担うページ
2. あたたかみを担うページ
3. 小さなユーモアを担うページ
4. ユーモアの後に静けさへ戻るページ

すべてのページを面白くしないでください。
ふざけてもよい対象、笑いの対象にしてはいけないもの、笑いの強さを確認してください。</code></pre>
        <button class="copy-button" type="button">コピー</button>
      </div>`;
    promptList.prepend(details);
  }

  const documents = $('#documents .document-links');
  if (documents && !$('.v3-playful-doc', documents)) {
    const link = document.createElement('a');
    link.className = 'v3-playful-doc';
    link.href = 'https://github.com/silovar-uk/designmd/blob/main/docs/playful-editoriality.md';
    link.innerHTML = '<span>あたたかみ・ユーモア</span><strong>playful-editoriality.md</strong>';
    documents.append(link);
  }

  const toneCopies = {
    smile: {
      body: '同じレイアウトが3ページ続いたら、少し立ち止まってください。',
      note: 'まだ資料は話しています。テンプレートは、まだです。'
    },
    nudge: {
      body: '同じレイアウトが3ページ続いたら、内容よりカードの近況が気になり始めます。',
      note: 'カードは元気です。話は一度、戻しましょう。'
    },
    punch: {
      body: '12ページ後、資料は完成しました。',
      note: '中身だけが、まだでした。'
    }
  };

  const lab = $('[data-tone-lab]');
  if (lab) {
    $$('[data-tone]', lab).forEach((button) => {
      button.addEventListener('click', () => {
        $$('[data-tone]', lab).forEach((item) => item.classList.toggle('is-active', item === button));
        const copy = toneCopies[button.dataset.tone];
        const quote = $('[data-tone-copy]', lab);
        $('p', quote).textContent = copy.body;
        $('small', quote).textContent = copy.note;
      });
    });
  }

  const copyButton = $('.v3-playful-prompt .copy-button');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const code = copyButton.closest('[data-v3-copy-group]')?.querySelector('code')?.textContent?.trim() ?? '';
      try {
        await navigator.clipboard.writeText(code);
        copyButton.textContent = 'コピー済み';
        copyButton.classList.add('is-copied');
        setTimeout(() => {
          copyButton.textContent = 'コピー';
          copyButton.classList.remove('is-copied');
        }, 1500);
      } catch {
        copyButton.textContent = '選択してコピー';
      }
    });
  }
})();
