(() => {
  const section = document.querySelector('#page-motion');
  if (!section || section.dataset.mobileMotionEnhanced === 'true') return;
  section.dataset.mobileMotionEnhanced = 'true';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const replay = section.querySelector('[data-motion-replay]');
  const stage = section.querySelector('[data-motion-stage]');
  const status = section.querySelector('[data-motion-status]');

  if (replay && !section.querySelector('[data-motion-overdo]')) {
    const actions = document.createElement('div');
    actions.className = 'motion-actions';
    replay.before(actions);
    actions.append(replay);

    const overdo = document.createElement('button');
    overdo.type = 'button';
    overdo.className = 'motion-overdo';
    overdo.dataset.motionOverdo = '';
    overdo.textContent = '全部動かす（悪い例）';
    actions.append(overdo);

    let resetTimer = 0;
    overdo.addEventListener('click', () => {
      if (!stage) return;
      window.clearTimeout(resetTimer);

      if (reduceMotion) {
        if (status) status.textContent = '動きを減らす設定のため、悪い例は再生しません。判断は正しいです。';
        return;
      }

      stage.classList.remove('is-playing', 'is-overdoing');
      void stage.offsetWidth;
      stage.classList.add('is-overdoing');
      if (status) status.textContent = '全部動かしました。うるさいので、すぐ戻します。';

      resetTimer = window.setTimeout(() => {
        stage.classList.remove('is-overdoing');
        stage.classList.add('is-playing');
        if (status) status.textContent = '戻しました。強い動きは、一か所で十分です。';
      }, 950);
    });
  }

  const interludes = [
    {
      after: '#reconstruction-map',
      label: 'EDITOR\'S INTERRUPTION 01',
      text: '入口を5つにした。中身まで5つにしたら、それは整理ではなく、かなり捨てすぎ。',
    },
    {
      after: '#diagram-grammar',
      label: 'EDITOR\'S INTERRUPTION 02',
      text: '矢印を3本足しても、動詞が0個なら、図はまだ寝ています。',
    },
    {
      after: '#review',
      label: 'EDITOR\'S INTERRUPTION 03',
      text: 'チェックが多いほど偉い、ではない。戻る場所が分かれば勝ち。',
    },
  ];

  const created = interludes.flatMap(({ after, label, text }) => {
    const target = document.querySelector(after);
    if (!target || target.nextElementSibling?.classList.contains('motion-interlude')) return [];
    const aside = document.createElement('aside');
    aside.className = 'motion-interlude';
    aside.setAttribute('aria-label', '編集上の小休止');
    aside.innerHTML = `<small>${label}</small><p>${text}</p>`;
    target.after(aside);
    return [aside];
  });

  if (!created.length) return;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    created.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -14%', threshold: .15 });

  created.forEach((item) => observer.observe(item));
})();
