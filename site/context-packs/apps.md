# designmd Context Pack｜Web・アプリ

> 操作、状態、入力保持、回復を設計する。

- site_version: 2026.08.13-beta
- pack_id: apps
- rule: stable原則とガイドを優先し、experimentalとcaseは条件を確認して扱う

## 使い方

各項目のstatus、use_when、avoid_whenを確認する。今回の条件に合わない規則を機械的に適用しない。

## 必須ID

### `identity`

- home: start
- topics: human-judgment, ai-collaboration

使う場面:
- designmdの中心思想と適用範囲を確認する

避ける場面:
- 個別媒体の具体的な制作手順だけが必要

### `system-interaction`

- home: workshop
- topics: apps, recovery, human-judgment

使う場面:
- 画面の操作、状態、入力保持を設計する
- キーボードや端末差を扱う

避ける場面:
- 静的な読み物だけを作る

### `operational-resilience`

- home: workshop
- topics: recovery, apps

使う場面:
- 失敗、中断、取消、復旧を設計する
- 通常手順以外の経路が必要

避ける場面:
- 一度きりで復旧経路を持たない試作品

## 試行ガイド

### `optical-balance-iconography`

- status: experimental
- topics: apps, iconography, accessibility, visual-balance

使う場面:
- 丸ボタンやナビゲーションのアイコンが、数値上は中央でもずれて見える
- `＋`、`×`、絵文字などを主要操作へ使っている
- 複数アイコンの線幅、黒量、見かけのサイズを揃えたい

避ける場面:
- 本文中の記号や絵文字そのものが表現内容
- OS標準部品の見た目を変更しない方が一貫するネイティブUI

原則:
- 機能アイコンは文字記号へ依存させない
- 意味を持つアイコンはSVG、単純な状態記号はCSS geometryを選択肢にする
- 共通座標系、線の文法、アイコンとヒット領域の分離を先に決める
- 幾何学中央のあとに光学中央を確認する
- 個別translateやmargin補正を増やさず、補正はアイコン定義側へ閉じ込める

詳細:
- https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/optical-balance-iconography.md

## 事例

### `case-keygrid`

caseは規範ではなく、判断と適用の例として読む。
- 自動操作の安全性と副作用を考える

### `case-mydailylog`

caseは規範ではなく、判断と適用の例として読む。
- 入力保持と再開経路の実例を見る

## 正典・追加参照
- https://raw.githubusercontent.com/silovar-uk/designmd/main/APP_MANUAL.md
- https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/optical-balance-iconography.md

## 機械可読索引
- https://silovar-uk.github.io/designmd/ai-manifest.json
- https://silovar-uk.github.io/designmd/knowledge-map.json
