---
id: case-keygrid
title: KeyGrid｜意味的に操作対象でない一覧を安全に扱う
summary: LINE WORKSの一覧調査から、検証の副作用と操作対象推定の限界を整理した。
type: case
area: interaction
status: case-study
updated_at: 2026-08-02
slug: /cases/keygrid/
principles: ["visible-state", "return-control", "design-recovery"]
related: ["system-interaction", "review-tool"]
anonymized: true
order: 100
---

## 状況

Web画面内の操作対象へキーボードヒントを付ける拡張を、LINE WORKSのトークルーム一覧へ対応させようとした。

## 起きた違和感

一覧行が button、a、role、tabindex など一般的な操作対象条件に該当せず、既存ロジックでは取得できなかった。

## 制約

未選択のルームをクリックすると、未読が既読になる可能性があった。調査操作そのものが利用者の状態を変える。

## 判断

- 未選択ルームをクリックする検証は行わない
- 選択中のルームだけでイベントを確認する
- 操作対象候補と、安全に実行可能な対象を分ける
- SPA再描画後に対象を再特定できる手掛かりを探す

## 学び

DOM上でクリック可能に見えることと、安全に自動操作できることは別である。検証前に、読み取りと状態変更を分ける必要がある。
