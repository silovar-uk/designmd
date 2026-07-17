(() => {
  const $ = (selector, root = document) => root.querySelector(selector);

  if ($('#question-audit')) return;

  const anchor = $('#information-shape') || $('#system-use') || $('#principles');
  if (!anchor) return;

  const section = document.createElement('section');
  section.id = 'question-audit';
  section.className = 'v9-audit';
  section.innerHTML = `
    <header>
      <h2>問いを、そのまま解かない。</h2>
      <p>AIも前提を疑い、別の問いを提示できる。人間は、どの問いに責任を持つかを決める。</p>
    </header>

    <ol class="v9-audit__steps">
      <li><b>1</b><span><strong>前提</strong>何を事実として扱っているか。</span></li>
      <li><b>2</b><span><strong>根拠</strong>事実、仮説、慣習、未確認のどれか。</span></li>
      <li><b>3</b><span><strong>欲望</strong>解決後に本当は何を変えたいか。</span></li>
      <li><b>4</b><span><strong>文脈</strong>生活者、競合、組織、社会、時代を加える。</span></li>
      <li><b>5</b><span><strong>代替問い</strong>元の問いを採用しない場合を考える。</span></li>
    </ol>

    <div class="v9-audit__questions">
      <article>
        <h3>ブリーフ忠実案</h3>
        <p>依頼された問いを、そのまま解く。</p>
      </article>
      <article>
        <h3>再定義案</h3>
        <p>本当に変えたい状態へ、問いを持ち上げる。</p>
      </article>
      <article>
        <h3>反転・別軸案</h3>
        <p>前提を採用しない場合の問いを置く。</p>
      </article>
    </div>

    <div class="v9-audit__boundary">
      <p><strong>AI</strong> 前提を抽出し、矛盾を見つけ、代替問いを比較する。</p>
      <p><strong>人間</strong> 採用する問いを選び、時間・予算・信用を賭ける責任を持つ。</p>
    </div>

    <a href="https://github.com/silovar-uk/designmd/blob/main/docs/question-audit.md">問いの監査を読む</a>
  `;

  anchor.after(section);

  const sideNav = $('.side-nav ol');
  if (sideNav && !$('.v9-nav', sideNav)) {
    sideNav.insertAdjacentHTML('beforeend', '<li class="v9-nav"><a href="#question-audit">問いの監査</a></li>');
  }

  const version = $('.v7-version');
  if (version) version.textContent = '2026.07.17-beta';
})();
