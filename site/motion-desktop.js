(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const root = document.documentElement;
  const section = $('#page-motion');
  if (!section || section.dataset.desktopMotionEnhanced === 'true') return;
  section.dataset.desktopMotionEnhanced = 'true';

  const desktopQuery = window.matchMedia('(min-width: 901px)');
  const systemReduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const storageKey = 'designmd-reduce-motion';

  const readStoredPreference = () => {
    try {
      return window.localStorage.getItem(storageKey) === 'true';
    } catch {
      return false;
    }
  };

  const writeStoredPreference = (value) => {
    try {
      window.localStorage.setItem(storageKey, String(value));
    } catch {
      // Storage may be unavailable in privacy modes. The current session still works.
    }
  };

  if (readStoredPreference()) root.classList.add('motion-user-reduced');

  const thesis = $('.motion-thesis p', section);
  if (thesis) {
    thesis.textContent = 'スマートフォンでは登場順と間を使う。PCでは距離、同時性、左右の受け渡しを使う。端末ごとに、読む時間と使える空間を設計し直す。';
  }

  const liveIntro = $('.motion-live__intro', section);
  if (liveIntro && !$('[data-motion-preference]', liveIntro)) {
    const preference = document.createElement('button');
    preference.type = 'button';
    preference.className = 'motion-preference';
    preference.dataset.motionPreference = '';
    liveIntro.append(preference);
  }

  const preferenceButton = $('[data-motion-preference]', section);
  const updatePreferenceButton = () => {
    if (!preferenceButton) return;
    const reduced = systemReduceQuery.matches || root.classList.contains('motion-user-reduced');
    preferenceButton.setAttribute('aria-pressed', String(reduced));
    preferenceButton.textContent = systemReduceQuery.matches
      ? '端末設定で動きを減らしています'
      : reduced
        ? '標準の動きに戻す'
        : '動きを減らす';
    preferenceButton.disabled = systemReduceQuery.matches;
  };

  preferenceButton?.addEventListener('click', () => {
    const nextReduced = !root.classList.contains('motion-user-reduced');
    root.classList.toggle('motion-user-reduced', nextReduced);
    writeStoredPreference(nextReduced);
    updatePreferenceButton();
  });

  systemReduceQuery.addEventListener?.('change', updatePreferenceButton);
  updatePreferenceButton();

  if (!$('.desktop-motion-lab', section)) {
    const lab = document.createElement('section');
    lab.className = 'desktop-motion-lab';
    lab.setAttribute('aria-labelledby', 'desktop-motion-lab-title');
    lab.innerHTML = `
      <header class="desktop-motion-lab__head">
        <div>
          <small>DESKTOP CHOREOGRAPHY</small>
          <h3 id="desktop-motion-lab-title">広さを、意味として使う。</h3>
        </div>
        <p>PCでは、横移動そのものを見せ場にしない。どこから来て、何へ渡り、どこへ視線を固定し、どう本文へ戻るかを、同じ空間の中で示す。</p>
      </header>
      <div class="desktop-motion-lab__body">
        <div class="desktop-motion-steps" aria-label="PCモーションの四つの拍">
          <button class="desktop-motion-step" type="button" data-desktop-beat="orient" aria-pressed="true"><b>1</b><span>位置づける<small>新しい対象の場所を示す</small></span></button>
          <button class="desktop-motion-step" type="button" data-desktop-beat="handoff" aria-pressed="false"><b>2</b><span>渡す<small>前の情報から次へつなぐ</small></span></button>
          <button class="desktop-motion-step" type="button" data-desktop-beat="focus" aria-pressed="false"><b>3</b><span>絞る<small>同時に見せ、片方へ焦点を置く</small></span></button>
          <button class="desktop-motion-step" type="button" data-desktop-beat="return" aria-pressed="false"><b>4</b><span>戻す<small>演出を終え、本文へ帰る</small></span></button>
        </div>
        <div class="desktop-motion-stage" data-desktop-stage data-state="orient" aria-live="polite">
          <div class="desktop-motion-axis" aria-hidden="true"></div>
          <article class="desktop-motion-node desktop-motion-node--source">
            <strong>原材料</strong>
            <p>発言、数字、失敗、違和感。まだ整えず、位置を与える。</p>
          </article>
          <article class="desktop-motion-node desktop-motion-node--next">
            <strong>判断</strong>
            <p>何を残し、何を捨てたか。次の対象へ視線を渡す。</p>
          </article>
          <div class="desktop-motion-focus" aria-hidden="true"></div>
          <p class="desktop-motion-return">動きは終了。内容は残る。</p>
        </div>
      </div>
    `;
    $('.motion-live', section)?.after(lab);
  }

  if (!$('.motion-references', section)) {
    const references = document.createElement('section');
    references.className = 'motion-references';
    references.setAttribute('aria-labelledby', 'motion-references-title');
    references.innerHTML = `
      <header class="motion-references__head">
        <div>
          <small>REFERENCE STACK</small>
          <h3 id="motion-references-title">外見ではなく、役割を借りる。</h3>
        </div>
        <p>一つのサイトを完成見本にしない。モーションの意味、編集の拍、技術上の限界を別々の参照元から借り、designmdの文脈で組み直す。</p>
      </header>
      <div class="motion-references__grid">
        <article class="motion-reference">
          <small>01 / GRAMMAR</small>
          <h4>動きの意味</h4>
          <p>意図、空間関係、連続性、productive / expressive の使い分けを決める。</p>
          <a href="https://developer.apple.com/jp/design/human-interface-guidelines/motion">Apple HIG / Motion</a>
          <a href="https://m1.material.io/motion/material-motion.html">Material motion</a>
          <a href="https://carbondesignsystem.com/elements/motion/overview/">Carbon / Motion</a>
        </article>
        <article class="motion-reference">
          <small>02 / EDITORIAL</small>
          <h4>読む時間の編集</h4>
          <p>スクロールを物語の拍として使い、記事固有の仕掛けを一度だけ許す。</p>
          <a href="https://pudding.cool/process/how-to-make-dope-shit-part-3/">The Pudding / Storytelling</a>
          <a href="https://tympanus.net/codrops/2026/03/27/pell-mell-crafting-a-visual-exploration-platform-with-editorial-rhythm/">Codrops / Editorial rhythm</a>
          <a href="https://omocoro.jp/kiji/">オモコロ特集</a>
        </article>
        <article class="motion-reference">
          <small>03 / CONSTRAINTS</small>
          <h4>止められる・重くしない</h4>
          <p>動きがなくても内容へ到達でき、合成処理を中心に実装できることを最低条件にする。</p>
          <a href="https://www.w3.org/WAI/WCAG22/Techniques/css/C39">W3C / prefers-reduced-motion</a>
          <a href="https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions">WCAG / Animation</a>
          <a href="https://web.dev/articles/animations-guide">web.dev / Animation performance</a>
        </article>
      </div>
    `;
    $('.motion-rule', section)?.before(references);
  }

  const stage = $('[data-desktop-stage]', section);
  const beatButtons = $$('[data-desktop-beat]', section);
  let committedState = 'orient';

  const setStage = (state, commit = false) => {
    if (!stage) return;
    stage.dataset.state = state;
    if (commit) committedState = state;
    beatButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.desktopBeat === committedState));
    });
  };

  beatButtons.forEach((button) => {
    const state = button.dataset.desktopBeat;
    button.addEventListener('mouseenter', () => setStage(state));
    button.addEventListener('mouseleave', () => setStage(committedState));
    button.addEventListener('focus', () => setStage(state));
    button.addEventListener('blur', () => setStage(committedState));
    button.addEventListener('click', () => setStage(state, true));
  });

  const header = $('.site-header');
  if (header && !$('.desktop-progress', header)) {
    const progress = document.createElement('div');
    progress.className = 'desktop-progress';
    progress.setAttribute('aria-hidden', 'true');
    progress.innerHTML = '<span></span>';
    header.append(progress);
  }

  const sectionSpecs = [
    ['#question-audit', 'orient', 'ORIENT / 問いを置く'],
    ['#japanese-writing', 'handoff', 'HANDOFF / 材料から文章へ'],
    ['#diagram-grammar', 'focus', 'FOCUS / 関係を見る'],
    ['#review', 'return', 'RETURN / 判断へ戻る'],
  ];

  const targets = sectionSpecs.flatMap(([selector, role, label]) => {
    const target = $(selector);
    if (!target) return [];
    target.classList.add('desktop-motion-section');
    target.dataset.desktopMotion = role;
    if (!$('.desktop-motion-label', target)) {
      const marker = document.createElement('span');
      marker.className = 'desktop-motion-label';
      marker.textContent = label;
      target.prepend(marker);
    }
    return [target];
  });

  const revealTarget = (target) => target.classList.add('is-desktop-visible');

  const setupDesktopMotion = () => {
    const reduce = systemReduceQuery.matches || root.classList.contains('motion-user-reduced');

    if (!desktopQuery.matches || reduce || !('IntersectionObserver' in window)) {
      targets.forEach(revealTarget);
      root.classList.add('desktop-motion-ready');
      return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealTarget(entry.target);
        currentObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -15%', threshold: .08 });

    targets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight * .88) revealTarget(target);
      else observer.observe(target);
    });

    root.classList.add('desktop-motion-ready');
  };

  let progressScheduled = false;
  const updateProgress = () => {
    progressScheduled = false;
    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const value = Math.min(1, Math.max(0, window.scrollY / scrollable));
    root.style.setProperty('--desktop-page-progress', String(value));
  };

  const scheduleProgress = () => {
    if (progressScheduled) return;
    progressScheduled = true;
    window.requestAnimationFrame(updateProgress);
  };

  window.addEventListener('scroll', scheduleProgress, { passive: true });
  window.addEventListener('resize', scheduleProgress);
  desktopQuery.addEventListener?.('change', setupDesktopMotion);
  setupDesktopMotion();
  updateProgress();
})();
