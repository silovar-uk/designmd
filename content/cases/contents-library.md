---
id: case-contents-library
title: 作品体験ログ｜AI補完を本番データへ安全に反映する
summary: 1,000件規模の作品データで、事実補完、分類、評価、段階反映を分離した。
type: case
area: verify
status: case-study
updated_at: 2026-08-02
slug: /cases/contents-library/
principles: ["show-uncertainty", "keep-provenance", "design-recovery"]
related: ["evidence-data-ai", "review-tool"]
anonymized: true
order: 120
---

## 状況

作品体験ログに、著者・作者、分類、所持状態、評価などを追加し、既存の大量データも整理する必要があった。

## 制約

AIが推測で事実を埋めたり、既存評価やメモを変更したりすると、元データの意味が変わる。大量反映では誤りの影響も広がる。

## 判断

- 事実、分類、評価を分ける
- 変更禁止フィールドを宣言する
- 不明は null のまま残す
- 出典を項目単位で記録する
- 重複検査を先に行う
- 少量バッチで反映する
- 取消可能な取り込み単位を持つ

## 学び

AI補完は「空欄を埋める作業」ではない。由来、確信度、差分、取消を含む変更管理として設計する。
