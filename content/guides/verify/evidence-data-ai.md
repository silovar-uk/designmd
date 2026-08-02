---
id: evidence-data-ai
title: 確かめる｜事実、データ、AI補完
summary: 事実、分類、評価を分け、変更の由来と取消経路を持つ。
type: guide
area: verify
status: experimental
updated_at: 2026-08-02
slug: /guides/verify/evidence-data-ai/
principles: ["show-uncertainty", "keep-provenance", "design-recovery", "define-done"]
related: ["case-contents-library", "review-tool", "operational-resilience"]
order: 50
---

## データの種類を分ける

少なくとも次の三層を分離する。

1. 事実：書名、著者、日時、出版社、URL
2. 分類：管理上のカテゴリー、状態、種別
3. 評価・解釈：感想、お気に入り度、テーマ、対応案

事実補完の工程で、評価や感想を変更しない。

## AIが変更してよい範囲を宣言する

- 変更禁止フィールド
- 補完可能フィールド
- 候補だけ提示するフィールド
- 人の承認後に反映するフィールド

を分ける。

## 不明を埋めない

不明値は null または未確認として保持する。推測値を事実と同じ場所へ保存しない。

## 反映前に差分を見る

変更前、変更後、出典、変更理由を比較できるようにする。大量データは重複検査後に少量バッチで反映し、各回の結果を確認する。

## 代表性の限界を先に書く

反応分析では、母集団、取得条件、除外条件、期間、集中度、観測できない層を明示する。件数が多いことと、全体を代表することは別である。
