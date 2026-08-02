(() => {
  const guide = document.querySelector('#writing-guide .media-section__body');
  if (!guide || guide.querySelector('.editorial-writing-lab')) return;

  const lab = document.createElement('section');
  lab.className = 'editorial-writing-lab';
  lab.setAttribute('aria-labelledby', 'editorial-writing-title');
  lab.innerHTML = `
    <header class="editorial-writing-lab__head">
      <p class="editorial-writing-lab__eyebrow">EDITORIAL ESSAY RHYTHM</p>
      <h4 id="editorial-writing-title">脱線は、帰ってきて初めて技法になる。</h4>
      <p>長い読み物では、外にある材料と、書き手の実際の反応を往復する。笑いや余談を入れてもよい。ただし、戻ったときに対象の見え方が変わること。</p>
    </header>

    <div class="editorial-writing-flow" aria-label="長い読み物の五つの動き">
      <article><b>1</b><strong>事象</strong><span>発言、数字、出来事を見る</span></article>
      <article><b>2</b><strong>心象</strong><span>実際の違和感や反応を書く</span></article>
      <article><b>3</b><strong>脱線</strong><span>比較、記憶、周辺知識へ移る</span></article>
      <article><b>4</b><strong>更新</strong><span>最初の見立てを修正する</span></article>
      <article><b>5</b><strong>帰還</strong><span>別の見方を持って対象へ戻る</span></article>
    </div>

    <div class="editorial-writing-example">
      <div class="editorial-writing-example__controls" role="group" aria-label="文章例の切り替え">
        <button type="button" data-writing-example="flat" aria-pressed="true">平坦な文</button>
        <button type="button" data-writing-example="woven" aria-pressed="false">往復する文</button>
      </div>
      <div class="editorial-writing-example__paper" data-writing-paper>
        <p data-writing-label>要約だけ</p>
        <blockquote data-writing-text>案内の連携不足が課題だった。今後は情報共有を徹底し、再発防止に努める必要がある。</blockquote>
        <small data-writing-note>間違いではない。ただし、誰が何を見て判断したのかが残らない。</small>
      </div>
    </div>

    <section class="editorial-writing-example" aria-labelledby="meaning-paragraph-title">
      <div class="editorial-writing-example__paper">
        <p>MEANING PARAGRAPH</p>
        <h4 id="meaning-paragraph-title">意味が変わるところで、段落を変える。</h4>
        <blockquote>これらは、決断を複雑にする事情ではある。<br><br>しかし、困った材料ではない。むしろ、自分が何を比べるべきかを考える材料である。</blockquote>
        <small>説明から転換へ移る場所を、文字数ではなく意味の働きで分ける。手動改行ではなく、原稿上も別の段落として扱う。</small>
      </div>
      <div class="editorial-writing-example__paper">
        <p>EMOTIONAL GRAMMAR</p>
        <blockquote>人は数字を見た瞬間に意味を感じ、意味を感じた瞬間に結論へ走ってしまう。</blockquote>
        <small>「〜てしまう」は、人間らしさの飾りではない。意図せず起きる反応や不本意さが実際にある場所だけに残す。</small>
      </div>
    </section>

    <aside class="editorial-writing-return">
      <strong>比喩と「」は、意味を狭めるために使う。</strong>
      <p>比喩なしで明確なら直接書く。必要な比喩は「〜のような」「いわば」など、比較であることが分かる形を優先する。「」は引用、定義語、対比の中心へ限定する。</p>
      <p>「静かに」を「そっと」へ機械的に置き換えない。音なのか、扱い方なのか、雰囲気だけなのかを先に確かめる。</p>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/writing.md#意味段落と文章の温度">意味段落と文章の温度を読む</a>
    </aside>

    <aside class="editorial-writing-return">
      <strong>笑いの直後に、戻る場所を決める。</strong>
      <p>対象、事実、問いのどこへ帰るかを指せないボケは、だいたい居候です。</p>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/writing.md">文章ガイドを読む</a>
      <a href="https://github.com/silovar-uk/designmd/blob/main/docs/references/tanaka-hironobu-writing.md">参照記録を読む</a>
    </aside>
  `;

  guide.append(lab);

  const examples = {
    flat: {
      label: '要約だけ',
      text: '案内の連携不足が課題だった。今後は情報共有を徹底し、再発防止に努める必要がある。',
      note: '間違いではない。ただし、誰が何を見て判断したのかが残らない。',
    },
    woven: {
      label: '事象と心象の往復',
      text: '北門だけに更新版が届き、南門では旧案内が続いた。私は説明文が曖昧だったのだと思った。だが、配信記録を追うと、文面ではなく共有経路が北門で止まっていた。問題は「伝え方」より前にあった。',
      note: '事実、最初の見立て、追加調査、判断変更が一つの流れになっている。',
    },
  };

  const paper = lab.querySelector('[data-writing-paper]');
  const label = lab.querySelector('[data-writing-label]');
  const text = lab.querySelector('[data-writing-text]');
  const note = lab.querySelector('[data-writing-note]');
  const buttons = [...lab.querySelectorAll('[data-writing-example]')];

  const showExample = (key) => {
    const example = examples[key];
    if (!example) return;

    paper?.classList.remove('is-changing');
    void paper?.offsetWidth;
    paper?.classList.add('is-changing');

    if (label) label.textContent = example.label;
    if (text) text.textContent = example.text;
    if (note) note.textContent = example.note;

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.writingExample === key));
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => showExample(button.dataset.writingExample));
  });

  const writingReview = [...document.querySelectorAll('#review details')]
    .find((details) => details.querySelector('summary')?.textContent.trim() === '文章');

  if (writingReview && !writingReview.querySelector('[data-meaning-paragraph-review]')) {
    const items = [
      '意味の転換を、一つの段落へ詰め込んでいる',
      '感情語や雰囲気副詞が、実際の反応を示していない',
      '比喩や「」による強調が続き、焦点が曖昧',
    ];

    items.forEach((item, index) => {
      const reviewLabel = document.createElement('label');
      reviewLabel.dataset.meaningParagraphReview = String(index + 1);
      reviewLabel.innerHTML = `<input type="checkbox"> ${item}`;
      writingReview.append(reviewLabel);
    });

    const scoreMax = document.querySelector('#review .score-box__value small');
    if (scoreMax) scoreMax.textContent = '/ 18';
  }

  const writingPrompt = [...document.querySelectorAll('#prompts details')]
    .find((details) => details.querySelector('summary')?.textContent.trim() === '文章を4回編集する');
  const promptCode = writingPrompt?.querySelector('code');

  if (promptCode && !promptCode.textContent.includes('意味段落')) {
    promptCode.textContent = `以下の文章を、表面、論証、認知リズム、身体の4段階で点検してください。
問題箇所、理由、修正方針、残すべき具体表現を示してください。

追加で、次も確認してください。
- 意味の転換が段落として見えるか
- 「〜てしまう」「〜てほしい」などが実際の感情や願いを示しているか
- 「静かに」「そっと」などの副詞が具体的な状態を示しているか
- 比喩が必要か。暗喩を明示的な比較または直接表現へ変えられるか
- 「」が引用、定義語、対比の中心に限定されているか
- 読み味のために条件、例外、出典、未確認事項を削っていないか

文章：
（ここに貼る）`;
  }
})();
