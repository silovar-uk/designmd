# designmd Context Pack｜運用・回復

> 失敗、中断、取消、復旧、再開条件を扱う。

- site_version: 2026.08.06-beta
- pack_id: recovery
- rule: stable原則とガイドを優先し、caseは適用例として扱う

## 使い方

各項目のstatus、use_when、avoid_whenを確認する。今回の条件に合わない規則を機械的に適用しない。

## 必須ID

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

### `decision-log-tool`

- home: workshop
- topics: human-judgment, recovery

使う場面:
- 採用理由、不採用案、未確認事項を残す

避ける場面:
- 判断が発生しない単純作業

## 事例

### `case-keygrid`

caseは規範ではなく、判断と適用の例として読む。
- 自動操作の安全性と副作用を考える

### `case-mydailylog`

caseは規範ではなく、判断と適用の例として読む。
- 入力保持と再開経路の実例を見る

### `case-contents-library`

caseは規範ではなく、判断と適用の例として読む。
- 大量データ反映、取消、検証単位の事例を見る

## 正典・追加参照
- https://raw.githubusercontent.com/silovar-uk/designmd/main/APP_MANUAL.md

## 機械可読索引
- https://silovar-uk.github.io/designmd/ai-manifest.json
- https://silovar-uk.github.io/designmd/knowledge-map.json
