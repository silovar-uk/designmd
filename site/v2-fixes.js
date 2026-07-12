(() => {
  document.title = 'designmd｜完成を一度にさせない制作ガイド';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = '完成を急がず、判断を段階ごとに確定するための文章・スライド・画像制作ガイド。';

  const problemNav = [...document.querySelectorAll('.side-nav a')].find((node) => node.textContent.includes('6要因'));
  if (problemNav) problemNav.textContent = 'AIくささの7要因';

  const quickCode = document.querySelector('#quick-start [data-copy-group] code');
  if (quickCode) {
    quickCode.textContent = `以下の制作ガイドを必須要件として参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

今回の依頼：
（依頼内容）

完成版を一度に作らないでください。
目的、原材料、参照戦略、構成、デザインシステム、代表ページ、全体制作を別々の段階として扱ってください。
対話可能な場合は、逆質問、構成案、代表ページの各段階で一度止まり、確認を得てから次へ進んでください。`;
  }

  const setNumber = (id, value) => {
    const node = document.querySelector(`${id} .section-number`);
    if (node) node.textContent = value;
  };
  setNumber('#principles', '06');
  setNumber('#media', '07');
  setNumber('#workflow', '08');
  setNumber('#review', '09');
  setNumber('#prompts', '10');
  setNumber('#documents', '11');

  const newCopy = document.querySelector('.v2-prompt .copy-button');
  if (newCopy) {
    newCopy.addEventListener('click', async () => {
      const code = newCopy.closest('[data-copy-group]')?.querySelector('code')?.textContent?.trim() ?? '';
      try {
        await navigator.clipboard.writeText(code);
        newCopy.textContent = 'コピー済み';
        newCopy.classList.add('is-copied');
        setTimeout(() => { newCopy.textContent = 'コピー'; newCopy.classList.remove('is-copied'); }, 1500);
      } catch {
        newCopy.textContent = '選択してコピー';
      }
    });
  }

  const checklist = document.querySelector('[data-review-checklist]');
  const score = document.querySelector('[data-review-score]');
  const message = document.querySelector('[data-review-message]');
  const returnTo = document.querySelector('[data-v2-review-return]');
  const reset = document.querySelector('[data-review-reset]');

  if (checklist && score && message) {
    const inputs = [...checklist.querySelectorAll('input[type="checkbox"]')];
    const update = () => {
      const checked = inputs.filter((input) => input.checked);
      score.textContent = String(checked.length);
      if (!checked.length) {
        message.textContent = '該当箇所を選ぶと、戻るべき工程が表示されます。';
        if (returnTo) returnTo.textContent = '';
        return;
      }
      if (checked.length <= 5) message.textContent = '局所的な修正で改善できそうです。';
      else if (checked.length <= 10) message.textContent = '代表ページか構成段階へ戻ってください。';
      else if (checked.length <= 15) message.textContent = '原材料・参照・構成の再確認が必要です。';
      else message.textContent = 'テイスト変更では解決しません。GATE 0から再設計してください。';

      const counts = {};
      checked.filter((input) => input.dataset.return).forEach((input) => {
        counts[input.dataset.return] = (counts[input.dataset.return] ?? 0) + 1;
      });
      if (returnTo && Object.keys(counts).length) {
        const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
        returnTo.textContent = `戻る候補：${top}`;
      }
    };
    inputs.forEach((input) => input.addEventListener('change', update));
    reset?.addEventListener('click', () => {
      inputs.forEach((input) => { input.checked = false; });
      update();
    });
    update();
  }
})();