(() => {
  const iconLinks = [
    { rel: 'icon', href: './favicon.ico', type: 'image/x-icon' },
    { rel: 'icon', href: './favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    { rel: 'icon', href: './favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    { rel: 'apple-touch-icon', href: './apple-touch-icon.png', sizes: '180x180' },
  ];

  iconLinks.forEach((attributes) => {
    const selector = `link[rel="${attributes.rel}"][href="${attributes.href}"]`;
    if (document.head.querySelector(selector)) return;
    const link = document.createElement('link');
    Object.entries(attributes).forEach(([name, value]) => link.setAttribute(name, value));
    document.head.append(link);
  });

  const layerStyle = document.createElement('link');
  layerStyle.rel = 'stylesheet';
  layerStyle.href = './v2.css';
  document.head.append(layerStyle);

  const copyButtons = document.querySelectorAll('[data-copy-group] .copy-button');
  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const wrapper = button.closest('[data-copy-group]');
      const code = wrapper?.querySelector('code')?.textContent ?? '';
      try {
        await navigator.clipboard.writeText(code.trim());
        const original = button.textContent;
        button.textContent = 'コピー済み';
        button.classList.add('is-copied');
        window.setTimeout(() => {
          button.textContent = original;
          button.classList.remove('is-copied');
        }, 1600);
      } catch (error) {
        button.textContent = '選択してコピー';
        const range = document.createRange();
        const codeElement = wrapper?.querySelector('code');
        if (codeElement) {
          range.selectNodeContents(codeElement);
          const selection = window.getSelection();
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
      }
    });
  });

  const checklist = document.querySelector('[data-review-checklist]');
  const score = document.querySelector('[data-review-score]');
  const message = document.querySelector('[data-review-message]');
  const reset = document.querySelector('[data-review-reset]');

  if (checklist && score && message) {
    const inputs = [...checklist.querySelectorAll('input[type="checkbox"]')];
    const updateScore = () => {
      const checked = inputs.filter((input) => input.checked).length;
      score.textContent = String(checked);
      if (checked === 0) message.textContent = 'まずは該当箇所を選んでください。';
      else if (checked <= 5) message.textContent = '局所的な修正で改善できそうです。根拠と具体性を確認してください。';
      else if (checked <= 10) message.textContent = '構造の反復が出ています。ページや段落の役割から見直してください。';
      else if (checked <= 15) message.textContent = '見た目より前の工程へ戻る段階です。原材料と判断主体を確認してください。';
      else message.textContent = 'テイスト変更では解決しません。目的・原材料・構成から再設計してください。';
    };
    inputs.forEach((input) => input.addEventListener('change', updateScore));
    reset?.addEventListener('click', () => {
      inputs.forEach((input) => { input.checked = false; });
      updateScore();
    });
  }

  const layerScript = document.createElement('script');
  layerScript.src = './v2.js';
  document.body.append(layerScript);
})();