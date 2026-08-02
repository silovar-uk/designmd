import { evaluateReview, resultToMarkdown } from './review-engine.js';

const root = document.querySelector('[data-review-tool]');
if (root) {
  const response = await fetch('../../data/review-rules.json').catch(() => null);
  const reviewData = response?.ok ? await response.json() : null;
  const form = root.querySelector('form');
  const ruleNodes = [...root.querySelectorAll('[data-rule-id]')];
  const statusNode = root.querySelector('[data-review-status]');
  const titleNode = root.querySelector('[data-review-title]');
  const criticalNode = root.querySelector('[data-review-critical]');
  const remediationNode = root.querySelector('[data-review-remediations]');
  const outputNode = root.querySelector('[data-review-output]');
  const copyButton = root.querySelector('[data-review-copy]');

  if (!reviewData) {
    statusNode.textContent = 'レビュー定義を読み込めませんでした。項目一覧はそのまま確認できます。';
  } else {
    const currentTarget = () => form.elements['review-target'].value;

    const render = () => {
      const targetId = currentTarget();
      const targetLabel = reviewData.targets[targetId].label;
      const selected = ruleNodes
        .filter((node) => !node.hidden && node.querySelector('input').checked)
        .map((node) => node.dataset.ruleId);
      const result = evaluateReview(selected, reviewData);
      outputNode.textContent = resultToMarkdown(result, reviewData, targetLabel);
      criticalNode.replaceChildren();
      remediationNode.replaceChildren();

      if (!selected.length) {
        statusNode.textContent = '項目を選ぶと、戻る工程が表示されます。';
        titleNode.textContent = 'レビュー結果';
        return;
      }

      statusNode.textContent = result.blocked
        ? 'Criticalな問題があります。公開・実行を止めてください。'
        : '該当する工程へ戻り、修正後に再確認してください。';
      titleNode.textContent = result.returnTo
        ? reviewData.phaseLabels[result.returnTo]
        : '局所修正で対応できます';

      if (result.critical.length) {
        const heading = document.createElement('h3');
        heading.textContent = 'Critical';
        const list = document.createElement('ul');
        for (const rule of result.critical) {
          const item = document.createElement('li');
          item.textContent = rule.label;
          list.append(item);
        }
        criticalNode.append(heading, list);
      }

      if (result.remediations.length) {
        const heading = document.createElement('h3');
        heading.textContent = '修正の方向';
        const list = document.createElement('ul');
        for (const text of result.remediations) {
          const item = document.createElement('li');
          item.textContent = text;
          list.append(item);
        }
        remediationNode.append(heading, list);
      }
    };

    const showRules = () => {
      const allowed = new Set(reviewData.targets[currentTarget()].rules);
      for (const node of ruleNodes) {
        const visible = allowed.has(node.dataset.ruleId);
        node.hidden = !visible;
        if (!visible) node.querySelector('input').checked = false;
      }
      render();
    };

    form.addEventListener('change', (event) => {
      if (event.target.name === 'review-target') showRules();
      else render();
    });
    form.addEventListener('reset', () => window.setTimeout(showRules));
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(outputNode.textContent);
        copyButton.textContent = 'コピー済み';
        window.setTimeout(() => { copyButton.textContent = '結果をコピー'; }, 1400);
      } catch {
        copyButton.textContent = '選択してコピー';
      }
    });
    showRules();
  }
}
