# designmd Context Pack｜文章制作

> 意味段落、論証、本人の言葉を保ち、改行では意味のまとまりを壊さない。

- site_version: 2026.08.16-beta
- pack_id: writing
- rule: stable原則とガイドを優先し、experimentalは適用条件とフォールバックを確認して使う

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

### `content-production`

- home: workshop
- topics: writing, slides, information-grouping

使う場面:
- 原材料を文章や資料へ構成する
- 意味段落と媒体の役割を整理する

避ける場面:
- 事実確認だけを行う

### `japanese-line-breaking`

- home: workshop
- status: experimental
- topics: japanese-typography, line-breaking, responsive-web, headings

使う場面:
- 日本語の見出し、カード、Web記事で不自然な折り返しを減らす
- 固有名詞や意味のまとまりを保ちながらレスポンシブ対応する
- `<br>`、`word-break`、`text-wrap`、文字サイズ調整の優先順位を決める

避ける場面:
- 法令や既存組版規程で改行位置が固定されている
- experimentalなCSS機能をフォールバックなしで必須化する

## 正典・追加参照
- https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md
- https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/writing.md
- https://raw.githubusercontent.com/silovar-uk/designmd/main/content/guides/build/japanese-line-breaking.md

## 機械可読索引
- https://silovar-uk.github.io/designmd/ai-manifest.json
- https://silovar-uk.github.io/designmd/knowledge-map.json
