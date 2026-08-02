---
id: system-interaction
title: 使わせる｜操作、状態、入力
summary: 利用者が見える、選べる、戻れる、続けられる状態を設計する。
type: guide
area: interaction
status: experimental
updated_at: 2026-08-02
verified_at: 2026-07-27
slug: /guides/interaction/system-interaction/
principles: ["visible-state", "preserve-input", "return-control", "design-recovery"]
related: ["case-keygrid", "case-mydailylog", "operational-resilience"]
order: 30
---

## 状態を推測させない

処理中、保存済み、未保存、失敗、選択中、部分完了を明示する。

「反映されていないように見える」は、内部処理が正しくても利用者にとっては失敗である。操作結果を、利用者が確認できる形で返す。

## 入力と作業位置を守る

画面移動、通信失敗、モーダル、再読み込み、自動処理によって入力や現在位置を黙って失わせない。

入力する瞬間と分類する瞬間を分ける。未分類をエラー扱いせず、記録を先に成立させる。

## 一つの操作方法に依存しない

ドラッグだけ、ホバーだけ、マウスだけで成立させない。キーボード、タッチ、明示的なボタンなど同等の経路を用意する。

## 一括操作は範囲を先に見せる

実行前に、対象、対象外、件数、現在の作業対象、実行後の変化、取り消し方法を確認できるようにする。

## 検証の副作用を確認する

操作対象を調べる行為そのものが、既読化、送信、保存、本番データ変更を起こさないか確認する。読み取りと書き込みを区別し、安全に検証できる経路を優先する。
