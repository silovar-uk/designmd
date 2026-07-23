(() => {
  if (document.querySelector('#operational-docs')) return;

  const writingGuide = document.querySelector('#writing-guide');
  if (!writingGuide) return;

  const article = document.createElement('article');
  article.id = 'operational-docs';
  article.className = 'media-section operational-docs';
  article.innerHTML = `
    <div class="media-section__header">
      <p class="media-section__marker">実務文書</p>
      <h3>説明を足すより、運用に不要な層を外す</h3>
    </div>
    <div class="media-section__body operational-docs__body">
      <p class="operational-docs__lead">人が直した運営マニュアルの差分では、内容の追加より、重複する説明、装飾的な英語、制作過程の情報が削られた。文章編集後の改ページ確認も、内容と同じくらい重要だった。</p>

      <div class="operational-docs__diff" aria-label="修正前後の例">
        <div>
          <p class="before-after__label">修正前</p>
          <p><strong>09 / STAGE</strong><br>ステージ運用<br>「誰を、どこへ、何人ずつ動かすか」を固定する。</p>
        </div>
        <div>
          <p class="before-after__label">修正後</p>
          <p><strong>09 / STAGE</strong><br>ステージ運用</p>
        </div>
      </div>

      <ol class="operational-docs__lessons">
        <li><strong>副題は行動を変えるときだけ。</strong><span>見出しの言い換えや、ページの進行実況を自動で足さない。</span></li>
        <li><strong>英語は識別子として使う。</strong><span>日本語と同じ意味なら、装飾の一層として削る。</span></li>
        <li><strong>制作ログを本編へ漏らさない。</strong><span>参照ガイド、再編集の方針、構成理由は、現場の行動を変えなければ別管理。</span></li>
        <li><strong>確定したら、古い留保を消す。</strong><span>未確認事項は慎重さの飾りではなく、事実状態の表示。</span></li>
        <li><strong>文章修正後に全ページを見る。</strong><span>段落分けでページ数が増え、一行だけのページや大きな空白が生まれることがある。</span></li>
      </ol>

      <div class="operational-docs__check">
        <p class="operational-docs__check-title">最終確認</p>
        <p>副題を消すと何が失われる？　英語は実際の識別子？　制作意図が本編へ漏れていない？　確定後も「要確認」が残っていない？　全ページをレンダリングした？</p>
      </div>

      <p class="operational-docs__links"><a href="https://github.com/silovar-uk/designmd/blob/main/docs/operational-documents.md">実務文書の詳しいガイド →</a><a href="https://github.com/silovar-uk/designmd/blob/main/prompts/operational-document-review.md">差分レビュー用プロンプト →</a></p>
    </div>
  `;

  writingGuide.insertAdjacentElement('afterend', article);
})();
