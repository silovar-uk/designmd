(() => {
  if (document.querySelector('#mobile-ux')) return;

  const media = document.querySelector('#media');
  if (!media) return;

  const section = document.createElement('section');
  section.id = 'mobile-ux';
  section.className = 'section mobile-ux-section';
  section.innerHTML = `
    <div class="section-heading">
      <p class="section-number">04B</p>
      <div><p class="section-kicker">Mobile interaction</p><h2>スマホ・インタラクション</h2></div>
    </div>

    <div class="mobile-ux-hero">
      <p class="mobile-ux-hero__eyebrow">Cognitive sovereignty</p>
      <p class="mobile-ux-hero__statement">画面ではなく、<br><strong>人とシステムの関係</strong>を設計する。</p>
      <p class="mobile-ux-hero__body">スマホは小さいPCではありません。片手、移動、通知、通信変動、ソフトウェアキーボードの中でも、利用者が状況を理解し、自分で判断し、戻り、続けられる状態を守ります。</p>
    </div>

    <div class="mobile-ux-pillars" aria-label="スマホ設計で守る四つの状態">
      <article><span>01</span><h3>見える</h3><p>いま何が起き、何が作業へ影響するか分かる。</p></article>
      <article><span>02</span><h3>選べる</h3><p>自動処理へ介入し、別の操作経路を選べる。</p></article>
      <article><span>03</span><h3>戻れる</h3><p>失敗や中断の後も、入力と作業文脈を回復できる。</p></article>
      <article><span>04</span><h3>続けられる</h3><p>一部が使えなくても、主要な目的を完了できる。</p></article>
    </div>

    <div class="mobile-ux-principles">
      <article>
        <p class="mobile-ux-principles__index">A</p>
        <div><h3>システムが覚えられることを、利用者に覚えさせない</h3><p>スクロール位置、下書き、選択状態、直前の目的を保持する。利用者の記憶を状態管理の代わりに使わない。</p></div>
      </article>
      <article>
        <p class="mobile-ux-principles__index">B</p>
        <div><h3>状態だけでなく、意味と影響を見せる</h3><p>処理中、完了、失敗を区別し、それが現在の作業へ何をもたらすかまで伝える。</p></div>
      </article>
      <article>
        <p class="mobile-ux-principles__index">C</p>
        <div><h3>思考の復帰までを、一つの操作として扱う</h3><p>モーダルを消すだけで終えない。位置、フォーカス、入力、選択、目的まで元へ戻す。</p></div>
      </article>
      <article>
        <p class="mobile-ux-principles__index">D</p>
        <div><h3>失敗を防ぐだけでなく、失敗後の回復を設計する</h3><p>何が残り、何が失われ、どう再試行・修正できるかを示す。主要作業の代替経路を残す。</p></div>
      </article>
      <article>
        <p class="mobile-ux-principles__index">E</p>
        <div><h3>摩擦には、理由を持たせる</h3><p>安全、理解、熟考に役立つ停止は残す。理由のない待機、再入力、画面移動、確認は取り除く。</p></div>
      </article>
    </div>

    <div class="mobile-ux-axes">
      <div class="mobile-ux-axes__intro">
        <p class="section-kicker">Five review axes</p>
        <h3>五つの軸で、違和感を診断する</h3>
        <p>「使いにくい」を、利用者が失ったものへ言い換えます。</p>
      </div>
      <ol>
        <li><strong>可観測性</strong><span>状態と変化を理解できるか</span></li>
        <li><strong>可制御性</strong><span>止める、戻る、修正することができるか</span></li>
        <li><strong>回復可能性</strong><span>失敗や中断の後、作業へ戻れるか</span></li>
        <li><strong>適応可能性</strong><span>端末、環境、能力が変わっても目的を達成できるか</span></li>
        <li><strong>認知の外部化</strong><span>記憶や比較をシステムが適切に支えているか</span></li>
      </ol>
    </div>

    <details class="mobile-ux-sources">
      <summary>専門的背景と設計への翻訳</summary>
      <div class="mobile-ux-sources__grid">
        <article><h3>分散認知</h3><p>思考を頭の中だけでなく、人、表示、道具、環境の系として見る。画面状態の消失は、外部記憶の消失でもある。</p></article>
        <article><h3>Calm Technology</h3><p>注意を常に要求せず、必要な情報だけを周辺から中心へ移す。通知の強さを重要度で変える。</p></article>
        <article><h3>直接操作</h3><p>対象を見せ、操作を段階的・可逆的にし、結果を即座に見せる。利用者を指揮権から外さない。</p></article>
        <article><h3>人間工学</h3><p>誤操作を不注意で終わらせず、利用者、タスク、環境、UIの関係から原因を探す。</p></article>
      </div>
      <p class="mobile-ux-sources__links"><a href="https://github.com/silovar-uk/designmd/blob/main/docs/mobile-ux.md">詳細ガイドを読む →</a><a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2 →</a><a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/applying-human-factors-and-usability-engineering-medical-devices">FDA Human Factors →</a></p>
    </details>

    <blockquote class="mobile-ux-closing"><p>スマホでは、表示崩れより操作の断絶を重く見る。<br>使いやすさの先に、利用者が自分で考え、選び、立て直せる状態を置く。</p></blockquote>
  `;

  media.insertAdjacentElement('afterend', section);

  const headerGithub = document.querySelector('.header-nav__github');
  if (headerGithub && !document.querySelector('.header-nav a[href="#mobile-ux"]')) {
    const link = document.createElement('a');
    link.href = '#mobile-ux';
    link.textContent = 'スマホ';
    headerGithub.insertAdjacentElement('beforebegin', link);
  }

  const sideMediaLink = document.querySelector('.side-nav a[href="#media"]');
  if (sideMediaLink && !document.querySelector('.side-nav a[href="#mobile-ux"]')) {
    const item = document.createElement('li');
    item.innerHTML = '<a href="#mobile-ux">スマホ設計</a>';
    sideMediaLink.closest('li')?.insertAdjacentElement('afterend', item);
  }

  const documentLinks = document.querySelector('.document-links');
  if (documentLinks && !documentLinks.querySelector('a[href*="mobile-ux.md"]')) {
    const link = document.createElement('a');
    link.href = 'https://github.com/silovar-uk/designmd/blob/main/docs/mobile-ux.md';
    link.innerHTML = '<span>スマホ</span><strong>mobile-ux.md</strong>';
    documentLinks.prepend(link);
  }

  const checklist = document.querySelector('[data-review-checklist]');
  if (checklist && !checklist.querySelector('[data-mobile-ux-review]')) {
    const details = document.createElement('details');
    details.setAttribute('data-mobile-ux-review', '');
    details.innerHTML = `
      <summary>スマホ・インタラクション</summary>
      <label><input type="checkbox"> 状態、保存、処理結果を利用者に推測させている</label>
      <label><input type="checkbox"> 戻る、中止、修正、代替操作の経路がない</label>
      <label><input type="checkbox"> モーダル後に位置、フォーカス、入力が復元されない</label>
      <label><input type="checkbox"> ドラッグ、スワイプ、長押しだけに依存している</label>
      <label><input type="checkbox"> エラーや中断の後、主要作業を継続できない</label>
    `;
    checklist.append(details);
  }
})();
