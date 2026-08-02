const toggle = document.querySelector('[data-nav-toggle]');
const navigation = document.querySelector('[data-site-nav]');

if (toggle && navigation) {
  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      close();
      toggle.focus();
    }
  });
}

for (const button of document.querySelectorAll('[data-copy-text]')) {
  button.addEventListener('click', async () => {
    const selector = button.dataset.copyText;
    const target = document.querySelector(selector);
    const text = target?.textContent?.trim() ?? '';
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      const original = button.textContent;
      button.textContent = 'コピー済み';
      window.setTimeout(() => { button.textContent = original; }, 1400);
    } catch {
      button.textContent = '選択してコピー';
      target?.focus?.();
    }
  });
}
