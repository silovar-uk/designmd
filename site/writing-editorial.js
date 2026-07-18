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
})();
