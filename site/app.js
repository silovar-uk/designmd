(() => {
  const loadStylesheet = (href, marker) => new Promise((resolve) => {
    const existing = document.querySelector(`link[${marker}]`);
    if (existing?.sheet) {
      resolve();
      return;
    }
    if (existing) {
      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener('error', resolve, { once: true });
      window.setTimeout(resolve, 1200);
      return;
    }

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = href;
    style.setAttribute(marker, '');
    style.addEventListener('load', resolve, { once: true });
    style.addEventListener('error', resolve, { once: true });
    document.head.appendChild(style);
    window.setTimeout(resolve, 1200);
  });

  const loadScript = (src, marker, readySelector) => new Promise((resolve) => {
    if (readySelector && document.querySelector(readySelector)) {
      resolve();
      return;
    }

    const existing = document.querySelector(`script[${marker}]`);
    if (existing) {
      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener('error', resolve, { once: true });
      window.setTimeout(resolve, 1200);
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.setAttribute(marker, '');
    script.addEventListener('load', resolve, { once: true });
    script.addEventListener('error', resolve, { once: true });
    document.body.appendChild(script);
    window.setTimeout(resolve, 1200);
  });

  const loadAddedPrinciples = async () => {
    await Promise.all([
      loadStylesheet('./one-question.css?v=20260719-1', 'data-one-question-style'),
      loadStylesheet('./wao.css?v=20260719-2', 'data-wao-style'),
      loadStylesheet('./operational-documents.css?v=20260723-1', 'data-operational-documents-style')
    ]);

    await Promise.all([
      loadScript('./one-question.js?v=20260719-1', 'data-one-question-script', '#one-question'),
      loadScript('./wao.js?v=20260719-2', 'data-wao-script', '#wao'),
      loadScript('./operational-documents.js?v=20260723-1', 'data-operational-documents-script', '#operational-docs')
    ]);
  };

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

  const finishBoot = () => {
    const root = document.documentElement;
    root.classList.add('is-ready');
    root.classList.remove('is-booting');
  };

  loadAddedPrinciples().finally(() => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(finishBoot);
    });
  });
})();
