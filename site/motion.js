(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ($('#page-motion')) return;
  if (!reduceMotion) document.documentElement.classList.add('motion-enabled');

  const anchor = $('#tone') || $('#information-shape') || $('#audience-first');
  if (!anchor) return;

  const section = document.createElement('section');
  section.id = 'page-motion';
  section.className = 'motion-section';
  section.innerHTML = `
    <header class="motion-section__head">
      <em>動</em>
      <div>
        <small>PAGE MOTION</small>
        <h2>ページにも、<br>間がある。</h2>
      </div>
    </header>

    <div class="motion-thesis">
      <p>スマートフォンでは、横の広がりが減る。その代わり、登場順、時間差、スクロールによる回収を使える。</p>
      <strong>動きは装飾ではなく、<br>読む時間の編集。</strong>
    </div>

    <div class="motion-score" aria-label="ページモーションの五つの役割">
      <article class="motion-beat"><b>1</b><h3>登場</h3><p>新しい対象や章が現れたことを知らせる。</p></article>
      <article class="motion-beat"><b>2</b><h3>引き継ぎ</h3><p>前の情報から次の判断へ、視線を渡す。</p></article>
      <article class="motion-beat"><b>3</b><h3>ため</h3><p>発見や反論の前へ、一呼吸だけ置く。</p></article>
      <article class="motion-beat motion-beat--punch"><b>4</b><h3>オチ</h3><p>全部動かしたくなる。だいたい、ここで止める。</p></article>
      <article class="motion-beat motion-beat--return"><b>5</b><h3>帰還</h3><p>笑いの後は、何事もなかったように本文へ戻る。</p></article>
    </div>

    <section class="motion-live" aria-labelledby="motion-live-title">
      <div class="motion-live__intro">
        <small>LIVE DEMO</small>
        <h3 id="motion-live-title">一度だけ、動かす。</h3>
        <p>登場、引き継ぎ、オチ、帰還を短い一連の動きで確認する。情報は最初からDOMにあり、動かなくても読める。</p>
        <button class="motion-replay" type="button" data-motion-replay>もう一度見る</button>
        <p role="status" aria-live="polite" data-motion-status></p>
      </div>
      <div class="motion-live__stage" data-motion-stage>
        <div class="motion-live__line" aria-hidden="true"></div>
        <article class="motion-live__card motion-live__card--one">
          <strong>きれいに整える。</strong>
          <p>これは必要。だが、これだけでは誰が選んだのか見えない。</p>
        </article>
        <article class="motion-live__card motion-live__card--two">
          <strong>判断の跡を残す。</strong>
          <p>採用、不採用、迷い、具体例。少し不揃いでも、こちらが本体。</p>
        </article>
        <p class="motion-live__return">では、静かに次へ。</p>
      </div>
    </section>

    <aside class="motion-rule">
      <p><strong>全部を動かすと、全部が背景になる。</strong><br>一つの領域で強い動きは1〜2回まで。</p>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/page-motion.md">ページモーション設計を読む</a>
    </aside>
  `;
  anchor.after(section);

  const stage = $('[data-motion-stage]', section);
  const status = $('[data-motion-status]', section);
  let statusTimer = 0;

  const playStage = (announce = false) => {
    if (!stage) return;
    stage.classList.remove('is-playing');
    void stage.offsetWidth;
    stage.classList.add('is-playing');
    if (!announce || !status) return;
    status.textContent = reduceMotion ? '動きを減らした表示で、全内容を表示しています。' : '再生しました。動きは一度で止まります。';
    window.clearTimeout(statusTimer);
    statusTimer = window.setTimeout(() => {
      status.textContent = '';
    }, 3500);
  };

  $('[data-motion-replay]', section)?.addEventListener('click', () => playStage(true));

  const motionObserver = !reduceMotion && 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          playStage(false);
          observer.unobserve(entry.target);
        });
      }, { threshold: .35 })
    : null;

  if (motionObserver && stage) motionObserver.observe(stage);
  else playStage(false);

  const insertNote = (target, text, calm = false) => {
    if (!target || $('.motion-note', target.parentElement || target)) return null;
    const note = document.createElement('p');
    note.className = `motion-note${calm ? ' motion-note--calm' : ''}`;
    note.textContent = text;
    target.insertAdjacentElement('afterend', note);
    return note;
  };

  const notes = [
    insertNote($('#tone .v3-opening'), 'ここから少しふざけます。ちゃんと戻ります。'),
    insertNote($('#diagram-grammar .v5-thesis'), '矢印は接着剤ではありません。何でもつなぐと、だいたい何も分かりません。'),
    insertNote($('#review .section-intro'), 'これは人格診断ではありません。資料の診断です。', true),
  ].filter(Boolean);

  const revealTargets = [
    $('#reconstruction-map'),
    $('#question-audit'),
    $('#tone'),
    $('#japanese-writing'),
    $('#diagram-grammar'),
    section,
    $('#review'),
    $('#documents'),
  ].filter(Boolean);

  revealTargets.forEach((target, index) => {
    target.classList.add('motion-reveal');
    if (index % 3 === 1) target.classList.add('motion-reveal--side');
  });

  const revealObserver = !reduceMotion && 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -12%', threshold: .08 })
    : null;

  [...revealTargets, ...notes].forEach((target) => {
    if (revealObserver) revealObserver.observe(target);
    else target.classList.add('is-visible');
  });

  const sideList = $('.side-nav ol');
  if (sideList) {
    const group = $$('details', sideList).find((details) => $('summary', details)?.textContent.includes('外す'));
    if (group && !$('a[href="#page-motion"]', group)) {
      group.insertAdjacentHTML('beforeend', '<a href="#page-motion">ページの動き</a>');
    }
  }

  const documents = $('#documents .document-links');
  if (documents && !$('a[href*="page-motion.md"]', documents)) {
    documents.insertAdjacentHTML('beforeend', '<a href="https://github.com/silovar-uk/designmd/blob/main/docs/page-motion.md"><span>ページの時間</span><strong>page-motion.md</strong></a>');
  }

  if (!reduceMotion) {
    const pageStatus = document.createElement('p');
    pageStatus.className = 'motion-page-status';
    pageStatus.setAttribute('aria-hidden', 'true');
    document.body.append(pageStatus);

    const messages = [
      [0, 'まだ冒頭です'],
      [.18, 'ちゃんと細かい'],
      [.45, 'ここまで来た人、えらい'],
      [.72, 'まだあります'],
      [.94, '本当に全部読みました？'],
    ];

    let scheduled = false;
    const updateProgress = () => {
      scheduled = false;
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollable));
      const current = [...messages].reverse().find(([point]) => progress >= point)?.[1] || messages[0][1];
      pageStatus.textContent = current;
      pageStatus.classList.toggle('is-visible', window.innerWidth <= 680 && progress > .03 && progress < .985);
    };

    window.addEventListener('scroll', () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(updateProgress);
    }, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  }
})();
