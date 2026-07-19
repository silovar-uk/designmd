(() => {
  'use strict';

  if (document.querySelector('#one-question')) return;

  const audit = document.querySelector('#question-audit');
  if (!audit) return;

  const section = document.createElement('section');
  section.id = 'one-question';
  section.className = 'section one-question-section';
  section.innerHTML = `
    <div class="section-heading"><p class="section-number">00</p><div><p class="section-kicker">One opening question</p><h2>まず、一問だけ。</h2></div></div>
    <p class="section-intro">計画や分析を始める前に、成果物を最も大きく変える判断を一つだけ聞きます。答えを受けた後は質問を増やさず、残る不足を仮説と未確認事項へ回します。</p>

    <div class="one-question-hero">
      <div class="one-question-hero__main">
        <p class="one-question-hero__index">DESIGNMD ENTRY RULE</p>
        <h3>質問を増やす前に、<br><em>焦点を一つ</em>にする。</h3>
        <p class="one-question-hero__lead">最初の一問はアンケートではない。依頼を理解した仮説と推奨を先に示し、制作の分岐を一つだけ選んでもらう。</p>
        <p class="one-question-hero__mark" aria-hidden="true">?</p>
      </div>
      <div class="one-question-hero__rule">
        <p>THE RULE</p>
        <ol>
          <li>最初の実質的な応答を質問にする</li>
          <li>疑問文と質問符は一つだけ</li>
          <li>既知情報を聞き直さない</li>
          <li>具体案、推奨、理由を添える</li>
          <li>回答後は追加質問をしない</li>
        </ol>
      </div>
    </div>

    <div class="one-question-compare">
      <article><small>TOO EARLY</small><h3>質問より先に計画する</h3><p>方向が決まる前に、制作者側の仮定が長い計画へ固定される。</p></article>
      <article><small>JUST ONE</small><h3>結果を変える一問を聞く</h3><p>読み手、使用場面、読後の変化、WAOなどから、影響が最大の分岐だけを選ぶ。</p></article>
      <article><small>AFTER THE ANSWER</small><h3>仮説で前へ進む</h3><p>不足を追加質問へ変えず、置いた前提、未確認事項、制作範囲として管理する。</p></article>
    </div>

    <div class="one-question-builder" data-one-question-builder>
      <div class="one-question-builder__form">
        <h3>一問へ絞る</h3>
        <p>題材固有の選択肢に変えるほど、回答がそのまま制作条件になります。</p>
        <div class="one-question-fields">
          <div class="one-question-field one-question-field--focus"><label for="one-question-focus">質問の焦点</label><input id="one-question-focus" type="text" value="最優先にするもの" data-one-question-focus></div>
          <div class="one-question-options">
            <div class="one-question-field"><label for="one-question-a">A</label><input id="one-question-a" type="text" value="理解" data-one-question-option="A"></div>
            <div class="one-question-field"><label for="one-question-b">B</label><input id="one-question-b" type="text" value="判断" data-one-question-option="B"></div>
            <div class="one-question-field"><label for="one-question-c">C</label><input id="one-question-c" type="text" value="行動" data-one-question-option="C"></div>
          </div>
          <fieldset class="one-question-recommendation"><legend>推奨案</legend><div class="one-question-recommendation__choices"><label><input type="radio" name="one-question-rec" value="A">A</label><label><input type="radio" name="one-question-rec" value="B">B</label><label><input type="radio" name="one-question-rec" value="C" checked>C</label></div></fieldset>
          <div class="one-question-field"><label for="one-question-reason">短い理由</label><input id="one-question-reason" type="text" value="実装へつなげる依頼だから" data-one-question-reason></div>
        </div>
      </div>
      <div class="one-question-builder__result">
        <p class="one-question-result__label">OPENING QUESTION</p>
        <h3>この一問だけを、最初に送る</h3>
        <p class="one-question-result__text" data-one-question-result aria-live="polite"></p>
        <div class="one-question-result__validation" aria-label="一問の確認結果">
          <span data-one-question-check="count">質問は一問</span>
          <span data-one-question-check="known">具体案と推奨あり</span>
          <span data-one-question-check="answer">短く回答できる</span>
        </div>
        <div class="one-question-result__actions"><button class="button button--primary button--small" type="button" data-one-question-copy>一問をコピー</button><a class="button button--secondary button--small" href="https://github.com/silovar-uk/designmd/blob/main/docs/question-blocks.md">正典を読む</a></div>
      </div>
    </div>

    <div class="one-question-after">
      <h3>答えを受けたら、もう聞かない。</h3>
      <ol>
        <li>回答を<strong>制作条件</strong>へ変換する</li>
        <li>残る不足は<strong>置いた前提</strong>として明示する</li>
        <li>危険な不足は<strong>制作範囲から外す</strong></li>
        <li>推奨案で計画、構成、代表ページ、全体制作へ進む</li>
      </ol>
    </div>
  `;

  audit.parentNode.insertBefore(section, audit);

  const mapStart = document.querySelector('.v10-map__grid a[href="#question-audit"] span');
  if (mapStart && !mapStart.textContent.includes('最初の一問')) {
    mapStart.textContent = `最初の一問・${mapStart.textContent}`;
  }

  const sideList = document.querySelector('.side-nav ol');
  const auditLink = sideList?.querySelector('a[href="#question-audit"]');
  if (auditLink && !sideList.querySelector('a[href="#one-question"]')) {
    const link = document.createElement('a');
    link.href = '#one-question';
    link.textContent = '最初の一問';
    auditLink.parentElement?.insertBefore(link, auditLink);
  }

  const focus = section.querySelector('[data-one-question-focus]');
  const options = Array.from(section.querySelectorAll('[data-one-question-option]'));
  const recommendations = Array.from(section.querySelectorAll('input[name="one-question-rec"]'));
  const reason = section.querySelector('[data-one-question-reason]');
  const output = section.querySelector('[data-one-question-result]');
  const copy = section.querySelector('[data-one-question-copy]');
  const checks = Array.from(section.querySelectorAll('[data-one-question-check]'));

  const buildText = () => {
    const focusText = focus.value.trim() || '最優先にするもの';
    const optionMap = Object.fromEntries(options.map((input) => [input.dataset.oneQuestionOption, input.value.trim() || '未入力']));
    const rec = recommendations.find((input) => input.checked)?.value || 'A';
    const reasonText = reason.value.trim() || '成果物への影響が最も大きいから';
    return `最初に一つだけ確認します。\n今回、${focusText}は A｜${optionMap.A}、B｜${optionMap.B}、C｜${optionMap.C} のどれにしますか？ 推奨は${rec}です。理由は${reasonText}です。`;
  };

  const update = () => {
    const text = buildText();
    output.textContent = text;
    const questionCount = (text.match(/？/g) || []).length;
    const hasOptions = options.every((input) => input.value.trim().length > 0);
    const shortAnswer = Boolean(recommendations.find((input) => input.checked));
    const states = [questionCount === 1, hasOptions, shortAnswer];
    checks.forEach((check, index) => check.classList.toggle('is-ok', states[index]));
  };

  [focus, reason, ...options, ...recommendations].forEach((input) => input.addEventListener('input', update));

  copy.addEventListener('click', async () => {
    const text = buildText();
    try {
      await navigator.clipboard.writeText(text);
      const before = copy.textContent;
      copy.textContent = 'コピーしました';
      window.setTimeout(() => { copy.textContent = before; }, 1400);
    } catch (error) {
      window.prompt('以下をコピーしてください', text);
    }
  });

  update();
})();
