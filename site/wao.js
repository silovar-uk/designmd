(() => {
  'use strict';

  if (document.querySelector('#wao')) return;

  const media = document.querySelector('#media');
  if (!media) return;

  const section = document.createElement('section');
  section.id = 'wao';
  section.className = 'section wao-section';
  section.innerHTML = `
    <div class="section-heading"><p class="section-number">WAO</p><div><p class="section-kicker">Expectation uplift</p><h2>期待を、意味のある形で上振れさせる</h2></div></div>
    <p class="section-intro">WAOは、派手さや奇抜さではありません。読み手が予想した体験を、題材と結びついた一手によって、分かりやすさを失わずに越えるための判断基準です。</p>

    <div class="wao-stage">
      <div class="wao-stage__top">
        <div class="wao-stage__statement">
          <p class="wao-stage__label">DESIGNMD PHILOSOPHY</p>
          <h3>正しい。分かる。<br>その先に、<em>WAO</em>がある。</h3>
          <p class="wao-stage__lead">見た瞬間の驚きだけで終わらせない。その後の理解、感情、行動、記憶のどれかを更新する。</p>
          <p class="wao-stage__word" aria-hidden="true">WAO</p>
        </div>
        <div class="wao-stage__formula">
          <div class="wao-formula" aria-label="WAOの構造">
            <div class="wao-formula__part"><strong>通常の期待</strong>読み手が予想する、正しく整った体験</div>
            <div class="wao-formula__operator">＋</div>
            <div class="wao-formula__part"><strong>意味のある一手</strong>題材固有の手段・表現・構造</div>
            <div class="wao-formula__operator">＝</div>
            <div class="wao-formula__part"><strong>WAO</strong>理解・感情・行動・記憶の上振れ</div>
          </div>
          <p class="wao-stage__note">大声である必要はありません。静かな違和感が、後から意味につながるWAOもあります。</p>
        </div>
      </div>
      <div class="wao-lenses" role="group" aria-label="WAOの三つの方向">
        <button class="wao-lens" type="button" data-wao-lens="手段" aria-pressed="true"><span class="wao-lens__number">01 / METHOD</span><strong>手段のWAO</strong><span>そんな場所、媒体、導線、参加方法でやるのか。接点そのものを企画へ変える。</span></button>
        <button class="wao-lens" type="button" data-wao-lens="表現" aria-pressed="false"><span class="wao-lens__number">02 / EXPRESSION</span><strong>表現のWAO</strong><span>その見せ方、聞かせ方、尺度は初めて見た。静かな違和感から意味を立ち上げる。</span></button>
        <button class="wao-lens" type="button" data-wao-lens="構造" aria-pressed="false"><span class="wao-lens__number">03 / STRUCTURE</span><strong>構造のWAO</strong><span>別々だと思っていたものがつながる。後半によって、冒頭の見え方が変わる。</span></button>
      </div>
    </div>

    <div class="wao-panel" data-wao-panel>
      <div class="wao-panel__controls">
        <h3>WAO設計メモをつくる</h3>
        <p>通常体験と上振れさせたい期待を入れると、案件別スタイルガイドへ貼れる形に整えます。</p>
        <div class="wao-fields">
          <div class="wao-field"><label for="wao-normal">読み手が予想する通常体験</label><textarea id="wao-normal" data-wao-normal placeholder="例：5つのデザイン型が、同じ形式のカードで並ぶ"></textarea></div>
          <div class="wao-field"><label for="wao-uplift">上振れさせたい期待</label><textarea id="wao-uplift" data-wao-uplift placeholder="例：型を読むだけでなく、違いを身体的に感じて選べる"></textarea></div>
          <div class="wao-field"><label for="wao-action">具体的な一手</label><textarea id="wao-action" data-wao-action placeholder="例：各型を異なる雑誌の見開きとして横へめくらせる"></textarea></div>
          <fieldset class="wao-strength"><legend>WAOの強度</legend><div class="wao-strength__options"><label><input type="radio" name="wao-strength" value="小" checked>小・気づき</label><label><input type="radio" name="wao-strength" value="中">中・発見</label><label><input type="radio" name="wao-strength" value="大">大・体験転換</label></div></fieldset>
        </div>
      </div>
      <div class="wao-panel__result">
        <p class="wao-result__label">WAO DESIGN NOTE</p>
        <h3 data-wao-title>手段のWAO</h3>
        <pre class="wao-result__body" data-wao-result></pre>
        <div class="wao-result__actions"><button class="button button--primary button--small" type="button" data-wao-copy>WAO設計をコピー</button><a class="button button--secondary button--small" href="https://github.com/silovar-uk/designmd/blob/main/docs/wao.md">正典を読む</a></div>
      </div>
    </div>

    <div class="wao-tests" data-wao-tests>
      <h3>WAOになるか、五つで確かめる</h3>
      <div class="wao-test-grid">
        <label><input type="checkbox"><span><strong>通常の期待がある</strong>何を越えたのか説明できる</span></label>
        <label><input type="checkbox"><span><strong>題材固有である</strong>別テーマへそのまま移植できない</span></label>
        <label><input type="checkbox"><span><strong>分かりやすさを守る</strong>重要情報や操作を隠していない</span></label>
        <label><input type="checkbox"><span><strong>一つへ集中する</strong>すべてを強くしていない</span></label>
        <label><input type="checkbox"><span><strong>その後が変わる</strong>理解・感情・行動・記憶が更新される</span></label>
      </div>
      <p class="wao-test-result" data-wao-test-result aria-live="polite">まず、通常なら何が起きるかを決めます。</p>
    </div>

    <div class="wao-boundary">
      <div><h3>WAOとして扱う</h3><ul><li>静かな違和感が、後から意味につながる</li><li>場所・媒体・操作が内容の一部になる</li><li>二度目に見たとき、意味が増える</li><li>別々の情報が一つの構造としてつながる</li></ul></div>
      <div><h3>WAOとして扱わない</h3><ul><li>巨大文字、発光、アニメーションだけ</li><li>読者を困らせる操作や情報の隠蔽</li><li>題材と無関係な汚し、3D、紙、音</li><li>すべてのページへ異なる仕掛けを入れる</li></ul></div>
    </div>
  `;

  media.parentNode.insertBefore(section, media);

  const headerNav = document.querySelector('.header-nav');
  const mediaHeaderLink = headerNav?.querySelector('a[href="#media"]');
  if (headerNav && mediaHeaderLink && !headerNav.querySelector('a[href="#wao"]')) {
    const link = document.createElement('a');
    link.href = '#wao';
    link.textContent = 'WAO';
    headerNav.insertBefore(link, mediaHeaderLink);
  }

  const sideList = document.querySelector('.side-nav ol');
  const mediaSideLink = sideList?.querySelector('a[href="#media"]')?.closest('li');
  if (sideList && mediaSideLink && !sideList.querySelector('a[href="#wao"]')) {
    const item = document.createElement('li');
    item.innerHTML = '<a href="#wao">WAO</a>';
    sideList.insertBefore(item, mediaSideLink);
  }

  const lenses = Array.from(section.querySelectorAll('[data-wao-lens]'));
  const title = section.querySelector('[data-wao-title]');
  const result = section.querySelector('[data-wao-result]');
  const normal = section.querySelector('[data-wao-normal]');
  const uplift = section.querySelector('[data-wao-uplift]');
  const action = section.querySelector('[data-wao-action]');
  const strengthInputs = Array.from(section.querySelectorAll('input[name="wao-strength"]'));
  const copy = section.querySelector('[data-wao-copy]');
  const testInputs = Array.from(section.querySelectorAll('[data-wao-tests] input[type="checkbox"]'));
  const testResult = section.querySelector('[data-wao-test-result]');
  let selectedLens = '手段';

  const resultText = () => {
    const strength = strengthInputs.find((input) => input.checked)?.value || '小';
    const normalText = normal.value.trim() || '未入力';
    const upliftText = uplift.value.trim() || '未入力';
    const actionText = action.value.trim() || '未入力';
    return [
      '【WAO設計】',
      `読み手が予想する通常体験：${normalText}`,
      `上振れさせたい期待：${upliftText}`,
      `中心となるWAO：${selectedLens}`,
      `具体的な一手：${actionText}`,
      `強度：${strength}`,
      'WAOの目的：理解／感情／行動／記憶から選ぶ',
      '題材固有の根拠：場所、発言、写真、数字、操作、文化から記載する',
      'WAOを置く場所：中心となる一か所へ集中する',
      '前後の静かな区間：WAOの基準となる通常状態を残す',
      'WAOを使わない領域：重要情報、安全、操作方法、出典、注意事項',
      '一度目の意味：その場で理解できる内容を記載する',
      '二度目に増える意味：後の情報や操作で更新される内容を記載する',
      '確認方法：通常案と比較し、理解・感情・行動・記憶の変化を確認する'
    ].join('\n');
  };

  const updateResult = () => {
    title.textContent = `${selectedLens}のWAO`;
    result.textContent = resultText();
  };

  lenses.forEach((button) => {
    button.addEventListener('click', () => {
      selectedLens = button.dataset.waoLens;
      lenses.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      updateResult();
    });
  });
  [normal, uplift, action, ...strengthInputs].forEach((input) => input.addEventListener('input', updateResult));

  copy.addEventListener('click', async () => {
    const text = resultText();
    try {
      await navigator.clipboard.writeText(text);
      const before = copy.textContent;
      copy.textContent = 'コピーしました';
      window.setTimeout(() => { copy.textContent = before; }, 1400);
    } catch (error) {
      window.prompt('以下をコピーしてください', text);
    }
  });

  const updateTests = () => {
    const count = testInputs.filter((input) => input.checked).length;
    const messages = [
      'まず、通常なら何が起きるかを決めます。',
      '驚きの基準は見えました。題材固有の根拠を足します。',
      '方向はあります。分かりやすさと機能を壊していないか確認します。',
      'WAO候補です。仕掛けを一つへ集中させます。',
      'かなり成立しています。体験後に何が変わるかを言葉にします。',
      'WAOとして説明できる状態です。通常案と並べて最終確認します。'
    ];
    testResult.textContent = messages[count];
  };
  testInputs.forEach((input) => input.addEventListener('change', updateTests));

  updateResult();
})();
