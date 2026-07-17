# designmd

> Version: `2026.07.18-beta`  
> Status: beta

生成AIを使った文章・スライド・画像制作で、**整っているが、誰も本気で選んでいないように見える状態**を避けるための実務ガイド。

> AIくさい成果物は、AIが作った成果物ではない。  
> 誰も本気で選んでいないように見える成果物である。

## HTML版

https://silovar-uk.github.io/designmd/

HTML版は、全面置換前の情報量、教材性、操作性、細かな判断、ユーモアを基準に再興した。

上位入口は5つへ束ねる。

1. **はじめる**：問い、目的、AIくささ
2. **組み立てる**：段階、原材料、参照、構成
3. **表現する**：文章、図、スライド、台本
4. **外す・残す**：密度、逸脱、ユーモア、機能保存
5. **確かめる**：役割、アクセシビリティ、レビュー、正典

これは内容を5項目へ減らしたことを意味しない。詳細STEP、具体例、失敗条件、操作、参考資料は各入口の中へ残している。

公開面の構成：

- `site/index.html`：JavaScriptなしでも読める静的基盤
- `site/styles.css`：基礎スタイル
- `site/app.js`：v2〜v10を順番に読み込む
- `site/v2.*`〜`site/v9.*`：段階制作、ユーモア、文章、図、学習、運用、問いの監査
- `site/v10.*`：入口、順序、重複、キーボード、スマートフォンの修復
- `site/layout-fixes.css`：レイヤー横断のレイアウト修正

再興時の判断：

- [`docs/site-reconstruction-2026-07-18.md`](docs/site-reconstruction-2026-07-18.md)
- [`docs/site-reconstruction-references.md`](docs/site-reconstruction-references.md)

## AIに一つだけ参照させる

- GitHub表示版：[`DESIGN.md`](DESIGN.md)
- Raw版：https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

```text
以下の制作ガイドを必須要件として参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

今回の依頼：
（依頼内容）

与えられた問いをそのまま固定せず、前提、根拠、欲望、文脈、代替問いを監査してください。
ブリーフ忠実案、再定義案、反転・別軸案を比較し、推奨案と理由を示してください。
最終的に採用する問いと説明責任は人間が持ちます。
完成版を一度に作らず、問い、原材料、構成、代表ページ、全体制作を分けてください。
日本語の長文は、表面、論証、認知リズム、身体の四段階で編集してください。
```

## AIも問いを問い直す

AIは、与えられた問いへ答えるだけではない。

1. **前提**：何を事実として扱っているか
2. **根拠**：事実、仮説、慣習、未確認のどれか
3. **欲望**：解決後に本当は何を変えたいか
4. **文脈**：生活者、競合、組織、社会、時代を加えると何が変わるか
5. **代替問い**：元の問いを採用しない場合、何を問うか

原則として、ブリーフ忠実案、再定義案、反転・別軸案を比較する。

AIは問いを生成・比較できる。人間は、どの問いへ時間、予算、信用を賭けるかを決める。

詳細：[`docs/question-audit.md`](docs/question-audit.md)

## 五段階制作

1. **定める**：問い、読み手、使用場面、読後の変化
2. **集める**：原材料、証拠、反証、未確認事項
3. **組み立てる**：中心メッセージ、構成、役割、情報量
4. **つくる**：視覚方針、代表ページ、実装
5. **確かめる**：問い、AIらしさ、アクセシビリティ、完成度

五段階は入口であり、内部には詳細STEPを残す。

## 日本語文章の四回編集

1. **Lint**：記号、定型句、反復を取る
2. **Argument**：段落、根拠、因果、条件を直す
3. **Cognitive Rhythm**：対象更新、問いの回収、認知モード、密度を直す
4. **Embodiment**：本人の語彙、記憶、呼吸、責任へ戻す

認知リズムは、問いや短文を増やす技法ではない。読み手の認識が、具体的な事実と判断によってどう更新されるかを設計する。

## 役割から入る

| やりたいこと | 最初に読む |
|---|---|
| 問いを監査する | [`docs/question-audit.md`](docs/question-audit.md) |
| AIへ逆質問させる | [`docs/question-blocks.md`](docs/question-blocks.md) |
| 構成・編集する | [`docs/staged-production.md`](docs/staged-production.md) |
| 日本語文書を改善する | [`docs/japanese-ai-writing-practices.md`](docs/japanese-ai-writing-practices.md) |
| 視覚設計・実装する | [`docs/visuals.md`](docs/visuals.md) |
| レビューする | [`docs/review-checklist.md`](docs/review-checklist.md) |

## 主要な正典

| 概念 | 正典 | 状態 |
|---|---|---|
| 問いの監査 | [`docs/question-audit.md`](docs/question-audit.md) | stable |
| 制作工程 | [`docs/staged-production.md`](docs/staged-production.md) | stable |
| 案件別スタイル | [`docs/project-style-guide.md`](docs/project-style-guide.md) | stable |
| アクセシビリティ | [`docs/accessibility.md`](docs/accessibility.md) | stable |
| 日本語の四回編集 | [`docs/japanese-ai-writing-practices.md`](docs/japanese-ai-writing-practices.md) | stable |
| 認知リズム | [`docs/cognitive-rhythm-writing.md`](docs/cognitive-rhythm-writing.md) | stable |
| 情報の束ね方 | [`docs/information-grouping.md`](docs/information-grouping.md) | stable |
| ビジュアル | [`docs/visuals.md`](docs/visuals.md) | stable |
| 形式選択 | [`docs/format-selection.md`](docs/format-selection.md) | experimental |
| タイポ・余白判断 | [`docs/type-spacing-decisions.md`](docs/type-spacing-decisions.md) | experimental |

## プロンプト

[`prompts/README.md`](prompts/README.md) に整理している。

- 問いの監査
- スライド作成・再設計
- 文章レビュー
- 認知リズム文章の生成・改稿
- 画像・図解レビュー
- 最終レビュー

## 運用上の注意

- AIが出した刺激的な問いを、そのまま本質的な問いと扱わない
- 元の問いを否定すること自体をクリエイティブと考えない
- 「5つ以下」を情報量の上限として使わない
- 副題を減らすために具体例・失敗条件・ユーモアを削らない
- 緊急、安全、法令、決定済み事項を面白さのために広げない
- ルールを機械的に守り、新しいテンプレートにしない
- 正確性、権利、アクセシビリティ、公開可否の最終責任は案件側が持つ
