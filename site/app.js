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
      loadStylesheet('./operational-documents.css?v=20260723-1', 'data-operational-documents-style'),
      loadStylesheet('./mobile-ux.css?v=20260727-1', 'data-mobile-ux-style'),
      loadStylesheet('./line-composition.css?v=20260727-1', 'data-line-composition-style')
    ]);

    await Promise.all([
      loadScript('./one-question.js?v=20260719-1', 'data-one-question-script', '#one-question'),
      loadScript('./wao.js?v=20260719-2', 'data-wao-script', '#wao'),
      loadScript('./operational-documents.js?v=20260723-1', 'data-operational-documents-script', '#operational-docs'),
      loadScript('./mobile-ux.js?v=20260727-1', 'data-mobile-ux-script', '#mobile-ux'),
      loadScript('./line-composition.js?v=20260727-1', 'data-line-composition-script', '#line-composition')
    ]);
  };

  const bindCopyButtons = () => {
    const copyButtons = document.querySelectorAll('[data-copy-group] .copy-button:not([data-copy-bound])');
    copyButtons.forEach((button) => {
      button.setAttribute('data-copy-bound', '');
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
  };

  const bindReviewChecklist = () => {
    const checklist = document.querySelector('[data-review-checklist]');
    const score = document.querySelector('[data-review-score]');
    const message = document.querySelector('[data-review-message]');
    const reset = document.querySelector('[data-review-reset]');
    if (!checklist || !score || !message) return;

    const inputs = [...checklist.querySelectorAll('input[type="checkbox"]')];
    const denominator = score.parentElement?.querySelector('small');
    if (denominator) denominator.textContent = `/ ${inputs.length}`;

    const updateScore = () => {
      const checked = inputs.filter((input) => input.checked).length;
      const ratio = inputs.length ? checked / inputs.length : 0;
      score.textContent = String(checked);
      if (checked === 0) message.textContent = 'まずは該当箇所を選んでください。';
      else if (ratio <= 0.33) message.textContent = '局所的な修正で改善できそうです。根拠と具体性を確認してください。';
      else if (ratio <= 0.66) message.textContent = '構造の反復や操作の断絶が出ています。役割と状態から見直してください。';
      else if (ratio <= 0.85) message.textContent = '見た目より前の工程へ戻る段階です。原材料、判断主体、回復経路を確認してください。';
      else message.textContent = 'テイスト変更では解決しません。目的・原材料・構成・人とシステムの関係から再設計してください。';
    };

    inputs.forEach((input) => input.addEventListener('change', updateScore));
    reset?.addEventListener('click', () => {
      inputs.forEach((input) => { input.checked = false; });
      updateScore();
    });
    updateScore();
  };

  const finishBoot = () => {
    const root = document.documentElement;
    root.classList.add('is-ready');
    root.classList.remove('is-booting');
  };

  loadAddedPrinciples().finally(() => {
    bindCopyButtons();
    bindReviewChecklist();
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(finishBoot);
    });
  });
})();
