# designmd

> Version: `2026.07.15-beta`  
> Status: beta

生成AIを使った文章・スライド・画像制作で、**「整っているが、誰も本気で選んでいないように見える」状態を避ける**ための実務ガイド。

AIの使用を隠すことが目的ではありません。人間が目的、原材料、優先順位、採用・棄却を判断し、その痕跡が成果物に残る状態を目指します。

> AIくさい成果物は、AIが作った成果物ではない。  
> 誰も本気で選んでいないように見える成果物である。

## HTML版

https://silovar-uk.github.io/designmd/

HTML版では、段階制作、参照戦略、グリッド、文章、図の文法、読者向け成果物の分離、案件別スタイルガイド、役割、アクセシビリティ、形式選択を操作しながら確認できます。

## AIに一つだけ参照させる

- GitHub表示版：[`DESIGN.md`](DESIGN.md)
- Raw版：https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

```text
以下の制作ガイドを必須要件として参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

今回の依頼：
（依頼内容）

完成版を一度に作らず、目的、原材料、構成、台本、案件別スタイルガイド、代表ページ、全体制作を分けてください。
対話可能な場合は、逆質問、構成案の選択、代表ページの確認で一度止まり、承認後に次へ進んでください。
逆質問は空欄だけを並べず、会話から読み取った前提、具体案2〜4案、推奨案、推奨理由を先に示してください。
アクセシビリティを最終検査ではなく、目的、構成、視覚、実装、検証の全工程で確認してください。
```

## 今回の更新

デジタル庁デザインシステムを参考に、次を実装しました。

### Stable

- 共通基盤と案件別スタイルガイドの分離
- アクセシビリティを全工程へ通すガイド
- 依頼者、編集者、実装者、レビュアー、AIの役割別入口
- 制作判断、アクセシビリティ、公開可否の責任境界
- 版、更新日、状態、Markdownリリースの運用

### Experimental

- 箇条書き、カード、見出し、表、画像、図の形式選択ガイド
- タイポグラフィと余白を、数値ではなく目的から選ぶ判断補助

experimentalは3案件で試行し、形式先行、同型化、制作時間増、理解改善なしのいずれかが生じた場合は撤回または縮小します。

## 役割から入る

| やりたいこと | 最初に読む |
|---|---|
| AIへ依頼する | [`docs/question-blocks.md`](docs/question-blocks.md) → [`docs/project-style-guide.md`](docs/project-style-guide.md) |
| 構成・編集する | [`docs/staged-production.md`](docs/staged-production.md) → [`docs/story-design.md`](docs/story-design.md) |
| 視覚設計・実装する | [`docs/visuals.md`](docs/visuals.md) → [`docs/accessibility.md`](docs/accessibility.md) |
| レビューする | [`docs/quality-rubric.md`](docs/quality-rubric.md) → [`docs/review-checklist.md`](docs/review-checklist.md) |
| 責任境界を確認する | [`docs/roles-and-responsibility.md`](docs/roles-and-responsibility.md) |

## 共通基盤と案件別スタイルガイド

`designmd` は制作判断の共通基盤です。個別案件のブランドや外見を固定するテンプレートではありません。

案件ごとに、次を [`docs/project-style-guide.md`](docs/project-style-guide.md) へまとめます。

- 読み手、使用場面、読後の変化
- 中心メッセージ、固有素材
- 語り口、書体、色、余白、グリッド
- 一つの逸脱ルール
- 媒体別のアクセシビリティ条件
- 固定するもの、変えてよいもの

## 正典所有表

各概念には、原則として一つの正典ファイルがあります。他ファイルでは要約とリンクにとどめます。

| 概念 | 正典ファイル | 状態 |
|---|---|---|
| 理念・4資質・AIくささの9要因 | [`docs/core-principles.md`](docs/core-principles.md) | stable |
| 統一STEP 1–10工程 | [`docs/staged-production.md`](docs/staged-production.md) | stable |
| 逆質問 | [`docs/question-blocks.md`](docs/question-blocks.md) | stable |
| 案件別スタイルガイド | [`docs/project-style-guide.md`](docs/project-style-guide.md) | stable |
| アクセシビリティ | [`docs/accessibility.md`](docs/accessibility.md) | stable |
| 役割・責任境界 | [`docs/roles-and-responsibility.md`](docs/roles-and-responsibility.md) | stable |
| 4層分離・機能保存 | [`docs/audience-first-redesign.md`](docs/audience-first-redesign.md) | stable |
| 物語設計 | [`docs/story-design.md`](docs/story-design.md) | stable |
| ビジュアル技法 | [`docs/visuals.md`](docs/visuals.md) | stable |
| 資料タイプ別方針 | [`docs/document-type-policies.md`](docs/document-type-policies.md) | stable |
| 失敗パターン | [`docs/ai-failure-patterns.md`](docs/ai-failure-patterns.md) | stable |
| 品質ルーブリック | [`docs/quality-rubric.md`](docs/quality-rubric.md) | stable |
| 参照戦略 | [`docs/reference-strategy.md`](docs/reference-strategy.md) | stable |
| 文型・文の完結度 | [`docs/sentence-completeness.md`](docs/sentence-completeness.md) | stable |
| 図形・矢印・台本 | [`docs/diagram-shapes.md`](docs/diagram-shapes.md) | stable |
| PowerPointノートの文体 | [`docs/speaker-notes.md`](docs/speaker-notes.md) | stable |
| 学習資料 | [`docs/learning-materials.md`](docs/learning-materials.md) | stable |
| 形式選択 | [`docs/format-selection.md`](docs/format-selection.md) | experimental |
| タイポ・余白の目的別判断 | [`docs/type-spacing-decisions.md`](docs/type-spacing-decisions.md) | experimental |
| 版・状態・リリース | [`docs/governance.md`](docs/governance.md) | stable |

## 読む順序

### 初めて読む

1. [`docs/core-principles.md`](docs/core-principles.md)
2. [`docs/staged-production.md`](docs/staged-production.md)
3. [`docs/story-design.md`](docs/story-design.md)
4. [`docs/visuals.md`](docs/visuals.md)

### 作る

上の4本を前提に、案件別スタイルガイド、媒体別ガイド、アクセシビリティだけを追加で読みます。全部を読んでから作り始める必要はありません。

### 外部AIへ渡す

`DESIGN.md` のRaw URLだけを渡します。

## 成果物を4層へ分ける

### A. 読者向け本編

理解、判断、行動に必要な内容。

### B. 発表者用台本

背景、因果、図の読み順、留保、前後ページへの接続。

### C. 付録・根拠

出典、詳細データ、長い比較、未確認事項。

### D. 制作ログ

ブリーフ、構成案、ページ役割、参照戦略、採用・不採用理由。

> 制作判断を残すことと、制作判断を読者へ全部見せることは違う。

## 箇条書きは完成した形式

次の場合は、図形化しない方が自然です。

- 項目が並列
- 項目数が少ない
- 順序や因果がない
- 話し手が補足する
- 図形へ変えても新しい関係が増えない

> 図解が上位、箇条書きが下位ではない。内容に対して、最小で正しい形式を選ぶ。

## アクセシビリティ

アクセシビリティは、完成後に足すチェックではありません。

- STEP 1：閲覧環境、支援技術、字幕等の必要性
- 構成：意味の順序、見出し階層
- 視覚：色以外の手掛かり、文字、余白
- 実装：読み順、代替テキスト、ノート、字幕、操作
- 検証：実寸、白黒、拡大、読み上げ、キーボード、別端末

`designmd` は検討を支援しますが、WCAG、JIS X 8341-3、PDF/UA等への適合を保証・認証しません。

## 版と状態

- `stable`：通常案件で使う
- `beta`：方向は確定しているが改善中
- `experimental`：限定試行し、撤回可能
- `deprecated`：新規利用を推奨しない

詳細は [`docs/governance.md`](docs/governance.md)、現在版は [`VERSION`](VERSION)、変更履歴は [`CHANGELOG.md`](CHANGELOG.md) を参照してください。

`docs-v*` タグまたは手動実行で、`DESIGN.md`、`README.md`、`docs/`、`prompts/` をZIP化するGitHub Actionsを用意しています。

## プロンプト

コピペ用プロンプトは [`prompts/README.md`](prompts/README.md) に整理しています。

- スライド新規作成
- 既存スライド再設計
- 逆質問テキストブロック
- 文章レビュー
- 画像・スライドレビュー
- 最終レビュー
- あたたかみ・ユーモア

## HTML版の構成

- `site/index.html` — 基本本文
- `site/app.js` — 機能レイヤーの読み込み
- `site/v2.*` — 段階制作、参照戦略、グリッド
- `site/v3.*` — あたたかみ、面白味、ユーモア
- `site/v4.*` — 日本語文章の3パス編集
- `site/v5.*` — 図形、矢印、台本
- `site/v6.*` — 読者向け分離、機能保存、学習、プレーンスライド
- `site/v7.*` — 共通基盤、案件別ガイド、役割、アクセシビリティ、形式、状態

各追加レイヤーが失敗しても、基礎本文は読める構成にしています。

## 責任境界

`designmd` を使っても、制作、デザイン、ファクトチェック、権利確認、アクセシビリティ検証、公開承認は不要になりません。

ガイドは判断の漏れを減らし、共通言語を作ります。成果物の最終責任は案件側が持ちます。

## 参考・加工表示

デジタル庁デザインシステムウェブサイトの考え方を参考に、designmd向けに編集・加工しています。デジタル庁がdesignmdを作成、推奨、監修したことを意味しません。

詳細は [`docs/references/digital-agency-design-system.md`](docs/references/digital-agency-design-system.md) を参照してください。

## 運用上の注意

- このガイドはAI生成物を見破る検出器ではありません。
- 手書き風、紙の質感、崩したレイアウトだけでは人間らしくなりません。
- ルールを機械的に守ると、このガイド自体が新しいテンプレートになります。
- experimentalを、目新しさだけで通常ルールへ昇格させません。
- 内容上の理由がある場合はルールを破れます。ただし、アクセシビリティの最低品質や事実性を、演出のために破らないでください。
