import { safeGet, safeRemove, safeSet } from './storage.js';

const root = document.querySelector('[data-decision-log]');
if (root) {
  const form = root.querySelector('form');
  const output = root.querySelector('[data-decision-output]');
  const status = root.querySelector('[data-draft-status]');
  const copyButton = root.querySelector('[data-decision-copy]');
  const storageKey = 'designmd-decision-log-draft-v1';
  const fields = [...form.elements].filter((field) => field.name);

  const lines = (value) => value.split('\n').map((item) => item.trim()).filter(Boolean);
  const list = (items) => items.length ? items.map((item) => `- ${item}`).join('\n') : '- なし';
  const read = () => Object.fromEntries(fields.map((field) => [field.name, field.value]));
  const toMarkdown = (data) => [
    '# Decision Log', '',
    `- 判断日：${data.decidedAt || '未入力'}`,
    `- 判断者：${data.owner || '未入力'}`, '',
    '## 決めたこと', '', data.decision || '未入力', '',
    '## 根拠', '', list(lines(data.evidence || '')), '',
    '## 採用しなかった案', '', list(lines(data.rejected || '')), '',
    '## 未確認事項', '', list(lines(data.uncertainties || '')), '',
    '## 見直す条件', '', list(lines(data.reviewTriggers || ''))
  ].join('\n');

  const render = () => {
    const data = read();
    output.textContent = toMarkdown(data);
    const saved = safeSet(storageKey, JSON.stringify(data));
    status.textContent = saved
      ? 'この端末内に一時保存しました。'
      : '一時保存できませんが、入力と出力は続けられます。';
  };

  const stored = safeGet(storageKey);
  if (stored) {
    try {
      const values = JSON.parse(stored);
      for (const field of fields) {
        if (field.name in values) field.value = values[field.name];
      }
    } catch {
      safeRemove(storageKey);
    }
  }

  form.addEventListener('input', render);
  form.addEventListener('reset', () => {
    safeRemove(storageKey);
    window.setTimeout(render);
  });
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(output.textContent);
      copyButton.textContent = 'コピー済み';
      window.setTimeout(() => { copyButton.textContent = 'Markdownをコピー'; }, 1400);
    } catch {
      copyButton.textContent = '選択してコピー';
    }
  });
  render();
}
