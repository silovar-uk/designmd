export function evaluateReview(selectedRuleIds, reviewData) {
  const selectedRules = selectedRuleIds
    .map((id) => ({ id, ...reviewData.rules[id] }))
    .filter((rule) => rule.label);

  const critical = selectedRules.filter((rule) => rule.severity === 'critical');
  const order = reviewData.phaseOrder;
  const returnTo = selectedRules
    .map((rule) => rule.returnTo)
    .sort((a, b) => order.indexOf(a) - order.indexOf(b))[0] ?? null;

  const grouped = Object.fromEntries(order.map((phase) => [phase, []]));
  for (const rule of selectedRules) grouped[rule.returnTo]?.push(rule);

  return {
    blocked: critical.length > 0,
    critical,
    returnTo,
    grouped,
    remediations: [...new Set(selectedRules.map((rule) => rule.remediation))]
  };
}

export function resultToMarkdown(result, reviewData, targetLabel) {
  const lines = ['# DesignMDレビュー', '', `- 対象：${targetLabel}`];
  lines.push(`- 判定：${result.blocked ? '公開・実行を止める' : result.returnTo ? '修正して再確認' : '該当なし'}`);
  if (result.returnTo) lines.push(`- 戻る工程：${reviewData.phaseLabels[result.returnTo]}`);
  if (result.critical.length) {
    lines.push('', '## Critical');
    for (const rule of result.critical) lines.push(`- ${rule.label}`);
  }
  const selected = Object.values(result.grouped).flat();
  if (selected.length) {
    lines.push('', '## 該当項目');
    for (const rule of selected) lines.push(`- [${rule.severity}] ${rule.label}`);
  }
  if (result.remediations.length) {
    lines.push('', '## 修正の方向');
    for (const item of result.remediations) lines.push(`- ${item}`);
  }
  return lines.join('\n');
}
