# designmd Context Pack｜レビュー

> 問題を見つけ、戻る工程と判断理由を残す。

- site_version: 2026.08.06-beta
- pack_id: review
- rule: stable原則とガイドを優先し、caseは適用例として扱う

## 使い方

各項目のstatus、use_when、avoid_whenを確認する。今回の条件に合わない規則を機械的に適用しない。

## 必須ID

### `evidence-data-ai`

- home: workshop
- topics: human-judgment, ai-collaboration

使う場面:
- 事実、解釈、仮説、提案を分ける
- AI出力や外部情報を検証する

避ける場面:
- 創作で事実性を要求しない箇所

### `review-tool`

- home: workshop
- topics: human-judgment, recovery

使う場面:
- 問題の深さと戻る工程を判定する

避ける場面:
- 目的や原材料がまだ存在しない

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

## 正典・追加参照
- https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/review-checklist.md

## 機械可読索引
- https://silovar-uk.github.io/designmd/ai-manifest.json
- https://silovar-uk.github.io/designmd/knowledge-map.json
