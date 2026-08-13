(() => {
  const mount = () => {
    const lab = document.querySelector('#slide-visual-lab');
    if (!lab || lab.querySelector('#slide-thai-case')) return Boolean(lab);

    const section = document.createElement('section');
    section.id = 'slide-thai-case';
    section.className = 'thai-slide-case';
    section.setAttribute('aria-labelledby', 'thai-slide-case-title');

    const beforeSlides = [
      { index: '1', title: 'タイ文字は「左から順に」読まない', label: '導入', density: '標準' },
      { index: '2', title: '前にある母音を、先に読まない', label: '具体例', density: '標準' },
      { index: '3', title: '「音節」で区切ると読みやすい', label: '構造', density: '標準' },
      { index: '4', title: '難しさの正体は、3つある', label: '分類', density: '標準' },
      { index: '5', title: '初心者の7手読み', label: '結論', density: '標準' }
    ];

    const afterSlides = [
      { index: '1', title: 'タイ文字は「左から順に」読まない', label: '入口', density: '静', pattern: 'V6', variant: 'intro' },
      { index: '2', title: '前にある母音を、先に読まない', label: '比較', density: '標準', pattern: 'V3', variant: 'compare' },
      { index: '3', title: '文字 → 音節 → 単語 → 文', label: '構造', density: '密', pattern: 'V5', variant: 'flow' },
      { index: '4', title: '難しさの正体は、3つある', label: '回収', density: '動', pattern: 'V1', variant: 'hero' },
      { index: '5', title: '読むときは、子音を芯にする', label: '結論', density: '静', pattern: 'V6', variant: 'close' }
    ];

    const renderBeforeSlide = (slide) => `
      <article class="thai-slide-case__slide thai-slide-case__slide--before" aria-label="${slide.index}枚目 ${slide.title}">
        <span class="thai-slide-case__big-number" aria-hidden="true">${slide.index}</span>
        <div class="thai-slide-case__mini-title">${slide.title}</div>
        <div class="thai-slide-case__mini-copy"><i></i><i></i><i></i></div>
        <div class="thai-slide-case__right-panel"><b></b><span></span><span></span></div>
        <footer><span>${slide.label}</span><em>${slide.density}</em></footer>
      </article>`;

    const renderAfterBody = (slide) => {
      if (slide.variant === 'intro') {
        return `<div class="thai-slide-case__intro-phrase">พี่สาวเราใส่แว่นตั้งแต่ประถม</div><div class="thai-slide-case__intro-key">文字ではなく、音節で見る。</div>`;
      }
      if (slide.variant === 'compare') {
        return `<div class="thai-slide-case__compare"><div><strong>ใส่</strong><span>ส + ใ- + ่</span><b>sài</b></div><div><strong>แว่น</strong><span>ว + แ- + ่ + น</span><b>wɛ̂ɛn</b></div></div>`;
      }
      if (slide.variant === 'flow') {
        return `<div class="thai-slide-case__flow"><span>文字</span><i>→</i><span>音節</span><i>→</i><span>単語</span><i>→</i><span>文</span></div><div class="thai-slide-case__thai-strip">พี่ / สาว / เรา / ใส่ / แว่น</div>`;
      }
      if (slide.variant === 'hero') {
        return `<div class="thai-slide-case__hero-three">3</div><div class="thai-slide-case__hero-list"><span>前置母音</span><span>暗黙母音</span><span>声調</span></div>`;
      }
      return `<div class="thai-slide-case__close-key">子音を探す<br>周囲の記号を集める<br>音節として読む</div><div class="thai-slide-case__steps">1 前置母音　2 子音　3 母音　4 末子音　5 暗黙母音　6 声調　7 チャンク</div>`;
    };

    const renderAfterSlide = (slide) => `
      <article class="thai-slide-case__slide thai-slide-case__slide--after thai-slide-case__slide--${slide.variant}" aria-label="${slide.index}枚目 ${slide.title}">
        <div class="thai-slide-case__mini-title">${slide.title}</div>
        ${renderAfterBody(slide)}
        <footer><span>${slide.label} · ${slide.pattern}</span><em>${slide.density}</em></footer>
      </article>`;

    section.innerHTML = `
      <div class="slide-visual-lab__section-head">
        <p class="slide-visual-lab__label">04 / Case</p>
        <div>
          <h5 id="slide-thai-case-title">良い一枚を5回繰り返したら、悪いデッキになった。</h5>
          <p>タイ文字の学習資料で実際に起きた失敗を、そのままBefore / Afterにしました。色や書体は大きく変えず、構図・密度・主役だけを変えています。</p>
        </div>
      </div>

      <div class="thai-slide-case__toolbar" role="group" aria-label="BeforeとAfterを切り替える">
        <button type="button" data-case-mode="before" aria-pressed="true">Before</button>
        <button type="button" data-case-mode="after" aria-pressed="false">After</button>
        <p data-case-summary>5枚とも「巨大数字＋左説明＋右パネル」。一枚ずつは成立しているが、資料として読む速度が変わらない。</p>
      </div>

      <div class="thai-slide-case__deck" data-case-deck aria-live="polite"></div>

      <div class="thai-slide-case__metrics" aria-label="変更量">
        <div><span>巨大数字</span><strong data-metric-number>5 / 5</strong></div>
        <div><span>同じ右パネル</span><strong data-metric-panel>5 / 5</strong></div>
        <div><span>構図の種類</span><strong data-metric-pattern>1</strong></div>
        <div><span>密度の種類</span><strong data-metric-density>1</strong></div>
      </div>

      <div class="thai-slide-case__lesson" data-case-lesson>
        <strong>Beforeで起きていたこと</strong>
        <p>元資料の成功要因を抽出したはずが、「成功した構図」まで共通部品として扱ってしまった。統一感と均質性を取り違えている。</p>
      </div>

      <p class="thai-slide-case__case-link"><a href="./next/cases/thai-slide-redesign/">ケース全文を読む →</a></p>
    `;

    const footer = lab.querySelector('.slide-visual-lab__footer');
    if (footer) footer.insertAdjacentElement('beforebegin', section);
    else lab.appendChild(section);

    const deck = section.querySelector('[data-case-deck]');
    const summary = section.querySelector('[data-case-summary]');
    const lesson = section.querySelector('[data-case-lesson]');
    const metricNumber = section.querySelector('[data-metric-number]');
    const metricPanel = section.querySelector('[data-metric-panel]');
    const metricPattern = section.querySelector('[data-metric-pattern]');
    const metricDensity = section.querySelector('[data-metric-density]');
    let mode = 'before';

    const render = () => {
      const slides = mode === 'before' ? beforeSlides : afterSlides;
      deck.innerHTML = slides.map(mode === 'before' ? renderBeforeSlide : renderAfterSlide).join('');

      section.querySelectorAll('[data-case-mode]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.caseMode === mode));
      });

      if (mode === 'before') {
        summary.textContent = '5枚とも「巨大数字＋左説明＋右パネル」。一枚ずつは成立しているが、資料として読む速度が変わらない。';
        metricNumber.textContent = '5 / 5';
        metricPanel.textContent = '5 / 5';
        metricPattern.textContent = '1';
        metricDensity.textContent = '1';
        lesson.innerHTML = '<strong>Beforeで起きていたこと</strong><p>元資料の成功要因を抽出したはずが、「成功した構図」まで共通部品として扱ってしまった。統一感と均質性を取り違えている。</p>';
      } else {
        summary.textContent = '色と余白感は維持しながら、入口・比較・構造・回収・結論へ仕事を分ける。読む速度は「静 → 標準 → 密 → 動 → 静」。';
        metricNumber.textContent = '1 / 5';
        metricPanel.textContent = '0 / 5';
        metricPattern.textContent = '4';
        metricDensity.textContent = '4';
        lesson.innerHTML = '<strong>Afterで変えたこと</strong><p>巨大数字は「3」という数自体に意味があるページへ温存。比較は比較、プロセスはプロセスとして構図を変え、最後は静かな結論へ戻した。</p>';
      }
    };

    section.addEventListener('click', (event) => {
      const button = event.target.closest('[data-case-mode]');
      if (!button) return;
      mode = button.dataset.caseMode;
      render();
    });

    render();
    return true;
  };

  if (mount()) return;

  const host = document.querySelector('#slide-guide .media-section__body');
  if (!host) return;

  const observer = new MutationObserver(() => {
    if (mount()) observer.disconnect();
  });
  observer.observe(host, { childList: true, subtree: true });
  window.setTimeout(() => observer.disconnect(), 3000);
})();