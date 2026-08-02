---
id: review-tool
title: 対象別レビュー
summary: 合計点ではなく、公開を止める問題と戻る工程を示す。
type: tool
area: verify
status: experimental
updated_at: 2026-08-02
slug: /tools/review/
principles: ["define-done", "design-recovery", "show-uncertainty"]
related: ["staged-production", "evidence-data-ai", "decision-log-tool"]
script: review.js
order: 200
---

## 使い方

確認する対象を選び、該当する問題へチェックを入れる。

結果は点数ではなく、次を返す。

- 公開・実行を止めるCriticalな問題
- 最も上流にある戻り先
- 修正の方向
- コピー可能なレビュー記録

対象外の項目を母数へ混ぜない。
