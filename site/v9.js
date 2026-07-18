(() => {
  const $ = (selector, root = document) => root.querySelector(selector);

  const baseAnchor = $('#information-shape') || $('#system-use') || $('#principles');
  let questionAudit = $('#question-audit');

  if (!questionAudit && baseAnchor) {
    questionAudit = document.createElement('section');
    questionAudit.id = 'question-audit';
    questionAudit.className = 'v9-audit';
    questionAudit.innerHTML = `
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

    baseAnchor.after(questionAudit);
  }

  const titleAnchor = questionAudit || baseAnchor;
  if (!$('#title-strategy') && titleAnchor) {
    const titleStrategy = document.createElement('section');
    titleStrategy.id = 'title-strategy';
    titleStrategy.className = 'v9-titles';
    titleStrategy.innerHTML = `
      <header>
        <p class="v9-titles__eyebrow">SLIDE TITLES</p>
        <h2>タイトルは、資料の仕事で変える。</h2>
        <p>提案資料には結論が必要。ただし、事実ページまで強い断言へ変換しない。</p>
      </header>

      <div class="v9-titles__modes" aria-label="資料モード別のタイトル設計">
        <article>
          <b>説明・報告</b>
          <h3>何を示すか</h3>
          <p>対象、実績、比較、条件、スケジュールを正確に示す。</p>
          <small>例：2026特別シーズンの入場者数実績</small>
        </article>
        <article>
          <b>説得・提案</b>
          <h3>何を選ぶか</h3>
          <p>事実を踏まえ、推奨方針や判断事項を具体的に示す。</p>
          <small>例：招待施策は、JID獲得と再来場までを評価する</small>
        </article>
        <article>
          <b>読み物・体験</b>
          <h3>どう見方を変えるか</h3>
          <p>問い、比喩、キャッチコピーを、内容上の理由がある場所で使う。</p>
          <small>例：点は、色ではなく光を混ぜる</small>
        </article>
      </div>

      <div class="v9-titles__rule">
        <div>
          <span>1</span>
          <p><strong>内容説明型</strong>事実・実績ページ</p>
        </div>
        <div>
          <span>2</span>
          <p><strong>解釈併記型</strong>比較・分析ページ</p>
        </div>
        <div>
          <span>3</span>
          <p><strong>提案・判断型</strong>方針・意思決定ページ</p>
        </div>
      </div>

      <p class="v9-titles__test"><strong>一覧テスト</strong> タイトルだけを並べて、各ページの対象と、事実から提案までの論理を追えるか確認する。</p>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/slide-title-strategy.md">スライドタイトル設計を読む</a>
    `;

    titleAnchor.after(titleStrategy);
  }

  const sideNav = $('.side-nav ol');
  if (sideNav && !$('.v9-nav', sideNav)) {
    sideNav.insertAdjacentHTML('beforeend', '<li class="v9-nav"><a href="#question-audit">問いの監査</a></li>');
  }
  if (sideNav && !$('.v9-title-nav', sideNav)) {
    sideNav.insertAdjacentHTML('beforeend', '<li class="v9-title-nav"><a href="#title-strategy">タイトル設計</a></li>');
  }

  const version = $('.v7-version');
  if (version) version.textContent = '2026.07.18-beta';
})();
