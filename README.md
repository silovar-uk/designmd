# designmd

> Version: `2026.07.16-beta`  
> Status: beta

生成AIを使った文章・スライド・画像制作で、**整っているが、誰も本気で選んでいないように見える状態**を避けるための実務ガイド。

> AIくさい成果物は、AIが作った成果物ではない。  
> 誰も本気で選んでいないように見える成果物である。

## HTML版

https://silovar-uk.github.io/designmd/

HTML版では、段階制作、参照戦略、文章の四回編集、認知リズム、図の文法、アクセシビリティ、形式選択を操作しながら確認できる。

## AIに一つだけ参照させる

- GitHub表示版：[`DESIGN.md`](DESIGN.md)
- Raw版：https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

```text
以下の制作ガイドを必須要件として参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

今回の依頼：
（依頼内容）

完成版を一度に作らず、目的、原材料、構成、代表ページ、全体制作を分けてください。
逆質問では、空欄だけでなく、仮説、具体案、推奨案、理由を先に示してください。
日本語の長文は、表面、論証、認知リズム、身体の四段階で編集してください。
```

## 認知リズムを正式実装

日本語文章の標準工程を、次の四回編集へ更新した。

1. **Lint**：記号、定型句、反復を取る
2. **Argument**：段落、根拠、因果、条件を直す
3. **Cognitive Rhythm**：対象更新、問いの回収、認知モード、密度を直す
4. **Embodiment**：本人の語彙、記憶、呼吸、責任へ戻す

認知リズムは、問いや短文を増やす技法ではない。読み手の認識が、具体的な事実と判断によってどう更新されるかを設計する。

### 文書種別ごとの適用

- **全工程**：コラム、解説、インタビュー記事、長めの企画文、学習資料
- **一部**：提案書、社内説明、調査レポート、プレゼンノート、プレスリリース
- **対象更新のみ**：緊急告知、安全情報、法務、手順書、議事録、短いメール

結論を遅らせず、書き手が持っていない迷い、感情、告白を創作しない。

## 役割から入る

| やりたいこと | 最初に読む |
|---|---|
| AIへ依頼する | [`docs/question-blocks.md`](docs/question-blocks.md) |
| 構成・編集する | [`docs/staged-production.md`](docs/staged-production.md) |
| 日本語文書を改善する | [`docs/japanese-ai-writing-practices.md`](docs/japanese-ai-writing-practices.md) |
| 認知リズムを設計する | [`docs/cognitive-rhythm-writing.md`](docs/cognitive-rhythm-writing.md) |
| 視覚設計・実装する | [`docs/visuals.md`](docs/visuals.md) |
| レビューする | [`docs/review-checklist.md`](docs/review-checklist.md) |

## 主要な正典

| 概念 | 正典 | 状態 |
|---|---|---|
| 制作工程 | [`docs/staged-production.md`](docs/staged-production.md) | stable |
| 案件別スタイル | [`docs/project-style-guide.md`](docs/project-style-guide.md) | stable |
| アクセシビリティ | [`docs/accessibility.md`](docs/accessibility.md) | stable |
| 日本語の四回編集 | [`docs/japanese-ai-writing-practices.md`](docs/japanese-ai-writing-practices.md) | stable |
| 認知リズム | [`docs/cognitive-rhythm-writing.md`](docs/cognitive-rhythm-writing.md) | stable |
| 認知リズム運用レビュー | [`docs/cognitive-rhythm-review.md`](docs/cognitive-rhythm-review.md) | stable |
| 文型・完結度 | [`docs/sentence-completeness.md`](docs/sentence-completeness.md) | stable |
| 物語設計 | [`docs/story-design.md`](docs/story-design.md) | stable |
| ビジュアル | [`docs/visuals.md`](docs/visuals.md) | stable |
| 形式選択 | [`docs/format-selection.md`](docs/format-selection.md) | experimental |
| タイポ・余白判断 | [`docs/type-spacing-decisions.md`](docs/type-spacing-decisions.md) | experimental |
| 版・状態管理 | [`docs/governance.md`](docs/governance.md) | stable |

## プロンプト

[`prompts/README.md`](prompts/README.md) に整理している。

- スライド作成・再設計
- 文章レビュー
- 認知リズム文章の生成・改稿
- 画像・図解レビュー
- 最終レビュー

## HTML版の構成

- `site/v4.*` — 日本語文章の四回編集と認知リズム
- `site/v5.*` — 図形、矢印、台本
- `site/v6.*` — 読者向け分離、機能保存、学習、プレーンスライド
- `site/v7.*` — 共通基盤、案件別ガイド、役割、アクセシビリティ、形式、状態

## 参考・加工表示

- デジタル庁デザインシステムの考え方をdesignmd向けに再構成している
- 鹿野桂一郎「cognitive-rhythm-writing」の考え方をdesignmd向けに再構成している
- 原文の例文や規則をそのまま転載せず、各作者による推奨・監修を意味しない

詳細：

- [`docs/references/digital-agency-design-system.md`](docs/references/digital-agency-design-system.md)
- [`docs/references/cognitive-rhythm-writing.md`](docs/references/cognitive-rhythm-writing.md)

## 運用上の注意

- AI検出器を通過することを目的にしない
- ルールを機械的に守り、新しいテンプレートにしない
- 認知リズムを、問い、短文、告白の定型として使わない
- 正確性、権利、アクセシビリティ、公開可否の最終責任は案件側が持つ
