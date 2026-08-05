# designmd Context Pack｜スライド制作

> 資料全体の問いから一枚の設計、納品まで。

- site_version: 2026.08.06-beta
- pack_id: slides
- rule: stable原則とガイドを優先し、caseは適用例として扱う

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

### `staged-production`

- home: workshop
- topics: human-judgment, ai-collaboration

使う場面:
- 完成版を一度に作らず工程を分けたい
- 途中の判断と検証条件を残したい

避ける場面:
- 表記修正だけで目的と構造が変わらない

### `content-production`

- home: workshop
- topics: writing, slides, information-grouping

使う場面:
- 原材料を文章や資料へ構成する
- 意味段落と媒体の役割を整理する

避ける場面:
- 事実確認だけを行う

## 事例

### `case-rhw-slide-blueprint`

caseは規範ではなく、判断と適用の例として読む。
- 長文をスライドへ変換する設計例を見る
- AI出力のレビュー往復を考える

## 正典・追加参照
- https://raw.githubusercontent.com/silovar-uk/designmd/main/SLIDE_BLUEPRINT.md
- https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/slides.md

## 機械可読索引
- https://silovar-uk.github.io/designmd/ai-manifest.json
- https://silovar-uk.github.io/designmd/knowledge-map.json
