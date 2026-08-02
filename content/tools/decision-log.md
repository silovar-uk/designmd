---
id: decision-log-tool
title: Decision Log
summary: 決めたこと、根拠、捨てた案、見直す条件を残す。
type: tool
area: define
status: experimental
updated_at: 2026-08-02
slug: /tools/decision-log/
principles: ["keep-decision-owner", "show-uncertainty", "define-done"]
related: ["staged-production", "review-tool"]
script: decision-log.js
order: 210
---

## 使い方

判断結果だけでなく、比較した案と見直す条件を残す。

出力項目：

- 判断日
- 判断者
- 決めたこと
- 根拠
- 採用しなかった案
- 未確認事項
- 見直す条件

入力内容は、この端末内へ一時保存できる。保存できない環境でも入力と出力は続けられる。
