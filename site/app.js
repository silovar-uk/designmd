(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.append(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      textarea.remove();
      return copied;
    }
  };

  const navToggle = $('[data-nav-toggle]');
  const nav = $('[data-nav]');

  const closeNav = () => {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open', !open);
  });

  $$('.global-nav a').forEach((link) => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });

  const sections = $$('main section[id]').filter((section) => section.id !== 'top');
  const navLinks = $$('.global-nav a[href^="#"]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${visible.target.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-18% 0px -65%', threshold: [0.05, 0.3, 0.6] });
    sections.forEach((section) => observer.observe(section));
  }

  const auditPrompt = `以下のブリーフへすぐ答えず、問いを監査してください。

1. 前提：何を事実として扱っているか
2. 根拠：確認済み事実／仮説／慣習／未確認に分ける
3. 欲望：解決後に本当は何を変えたいか、複数仮説を出す
4. 文脈：生活者、競合、組織、社会、時代から不足材料を示す
5. 代替問い：次の三案を作る
   - ブリーフ忠実案
   - 再定義案
   - 反転・別軸案

三案を、根拠、得られるもの、失うもの、実装可能性、誤解・倫理・組織上のリスクで比較してください。
刺激的であることを採用理由にせず、最終判断を人間へ返してください。`;

  const briefInput = $('[data-brief]');
  const briefCopy = $('[data-copy-brief]');
  const briefStatus = $('[data-brief-status]');

  briefCopy?.addEventListener('click', async () => {
    const brief = briefInput?.value.trim() || '（ここにブリーフを記載）';
    const copied = await copyText(`${auditPrompt}\n\nブリーフ：\n${brief}`);
    if (briefStatus) briefStatus.textContent = copied ? 'コピーした。' : 'コピーできなかった。テキストを選択してください。';
  });

  const mediumTabs = $$('.tab-list [role="tab"]');
  const selectMediumTab = (selected) => {
    mediumTabs.forEach((tab) => {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.hidden = !active;
    });
  };

  mediumTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectMediumTab(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % mediumTabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + mediumTabs.length) % mediumTabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = mediumTabs.length - 1;
      selectMediumTab(mediumTabs[nextIndex]);
      mediumTabs[nextIndex].focus();
    });
  });

  const reviewInputs = $$('[data-review-list] input[type="checkbox"]');
  const reviewCount = $('[data-review-count]');
  const reviewMessage = $('[data-review-message]');
  const reviewReset = $('[data-review-reset]');

  const updateReview = () => {
    const checked = reviewInputs.filter((input) => input.checked).length;
    if (reviewCount) reviewCount.textContent = String(checked);
    if (!reviewMessage) return;
    if (checked === 0) reviewMessage.textContent = '該当箇所を選ぶと、戻る段階を示す。';
    else if (checked <= 3) reviewMessage.textContent = '局所修正で足りそうだ。該当箇所の根拠と表現を直す。';
    else if (checked <= 6) reviewMessage.textContent = '「集める」へ戻り、固有の材料と反証を補う。';
    else if (checked <= 10) reviewMessage.textContent = '「組み立てる」へ戻り、問い・構成・役割を再設計する。';
    else reviewMessage.textContent = '「定める」へ戻る。問い、読み手、読後の変化からやり直す。';
  };

  reviewInputs.forEach((input) => input.addEventListener('change', updateReview));
  reviewReset?.addEventListener('click', () => {
    reviewInputs.forEach((input) => { input.checked = false; });
    updateReview();
  });

  const promptTemplates = {
    audit: `${auditPrompt}\n\nブリーフ：\n（ここに貼る）`,
    all: `以下の制作ガイドを必須要件として参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

今回の依頼：
（依頼内容）

与えられた問いを固定せず、前提、根拠、欲望、文脈、代替問いを監査してください。
ブリーフ忠実案、再定義案、反転・別軸案を比較し、推奨案と理由を示してください。
最終的に採用する問いと説明責任は人間へ返してください。
問い、原材料、構成、代表画面、全体制作を分けて進めてください。`,
    slides: `以下のガイドを参照してください。

共通原則：
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

スライド設計：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/slides.md

依頼内容：
（ここに記載）

最初に問いを監査し、最低3つの構成案を比較してください。
ページの上位役割を「見る・比べる・考える・決める・進める」から選び、同じレイアウトを機械的に反復しないでください。
全体制作前に、静・標準・密・動の代表画面を確認してください。`,
    writing: `以下の文章を、表面、論証、認知リズム、身体の4段階で点検してください。

共通原則：
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

確認すること：
- 文書進行だけを実況する文
- 主張と根拠、因果、条件、限界
- 問い、仮の見立て、反論の回収
- 固有名詞、数字、日時、発言
- 本人が使わない語彙や、提供されていない感情

問題箇所、理由、修正方針、残すべき表現、修正文を示してください。

文章：
（ここに貼る）`,
  };

  const promptTabs = $$('[data-prompt]');
  const promptPanel = $('#prompt-panel');
  const promptOutput = $('[data-prompt-output]');
  const promptCopy = $('[data-copy-prompt]');
  const promptStatus = $('[data-prompt-status]');

  promptTabs.forEach((tab, index) => {
    if (!tab.id) tab.id = `prompt-tab-${tab.dataset.prompt}`;
    tab.tabIndex = index === 0 ? 0 : -1;
  });

  const showPrompt = (selected) => {
    const key = selected.dataset.prompt;
    promptTabs.forEach((tab) => {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    if (promptPanel) promptPanel.setAttribute('aria-labelledby', selected.id);
    if (promptOutput) promptOutput.textContent = promptTemplates[key] || '';
    if (promptStatus) promptStatus.textContent = '';
  };

  promptTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => showPrompt(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % promptTabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + promptTabs.length) % promptTabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = promptTabs.length - 1;
      showPrompt(promptTabs[nextIndex]);
      promptTabs[nextIndex].focus();
    });
  });

  promptCopy?.addEventListener('click', async () => {
    const copied = await copyText(promptOutput?.textContent || '');
    if (promptStatus) promptStatus.textContent = copied ? 'コピーした。' : 'コピーできなかった。';
  });

  if (promptTabs[0]) showPrompt(promptTabs[0]);
  updateReview();
})();
