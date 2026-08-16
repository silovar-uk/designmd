---
id: optical-balance-iconography
title: 揃えて見せる｜光学バランスとUIアイコン
summary: 数値上の中央だけでなく知覚上の重心を揃え、文字記号・SVG・CSS geometryを役割で使い分ける。
type: guide
area: interaction
status: experimental
updated_at: 2026-08-13
verified_at: 2026-08-13
slug: /guides/interaction/optical-balance-iconography/
principles: ["keep-decision-owner"]
related: ["system-interaction"]
order: 35
---

## 数値中央と見た目の中央を分ける

flexやgridで中央配置しても、フォント字形、baseline、線の量、形の方向性によって中心からずれて見えることがある。

最初に幾何学中央へ置き、その後に知覚上の重心を確認する。

## 機能アイコンを文字記号へ依存させない

追加、閉じる、検索、設定、ナビゲーションなどの主要操作では、`＋`、`×`、絵文字を最終描画へ使わない。

- 意味を持つ機能アイコン：SVG
- 単純な開閉状態：CSS geometryを許可
- 文字・絵文字：内容として必要な場合

## 同じ階層は同じ座標系で比較する

SVGは共通viewBoxを使い、stroke width、line cap、余白、黒量を揃える。

同じ20pxでも歯車と鉛筆では強度が違う。数値の一致ではなく視覚強度の一致を確認する。

## アイコンとヒット領域を分ける

押しやすくするためにアイコン自体を拡大し続けない。

18〜26px程度の表示サイズと、40〜48px以上の操作領域を別に設計する。

## 補正値を散らさない

`translateY(-1px)`や個別marginが増えたら、座標系、SVG内部余白、文字依存、container責任を見直す。

光学補正が必要ならアイコン定義側へ閉じ込める。

## 検証

- 同じ階層のアイコンを横に並べる
- iOSとdesktopで確認する
- 200%拡大を確認する
- focus-visibleを確認する
- `aria-label`と`aria-hidden`を確認する

詳細：`docs/optical-balance-iconography.md`
