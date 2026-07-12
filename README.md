# designmd

生成AIを使った文章・スライド・画像制作で、**「整っているが、誰も本気で選んでいないように見える」状態を避ける**ための実務ガイド。

AIの使用を隠すことが目的ではありません。人間が目的・原材料・優先順位・採用／棄却を判断し、その痕跡が成果物に残る状態を目指します。

> AIくさい成果物は、AIが作った成果物ではない。  
> 誰も本気で選んでいないように見える成果物である。

## 人が読む

HTML版では、原則・媒体別ガイド・制作工程・レビュー・コピペ用プロンプトを1ページにまとめています。

- HTML版: https://silovar-uk.github.io/designmd/
- ソース: [`site/`](site/)

チェックリストは画面上で選択でき、プロンプトはボタンからコピーできます。

## AIに参照させる

次のURLを、依頼文と一緒にAIへ渡してください。

- GitHub表示版: https://github.com/silovar-uk/designmd/blob/main/DESIGN.md
- Raw版: https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

```text
以下の制作ガイドを必須要件として参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

今回の依頼：
（依頼内容）

成果物を作った後、ガイドの「最終レビュー」に沿って自己点検し、
重大な問題を修正してから提出してください。
```

### スライドだけ参照させる

- スライド設計: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/slides.md
- 画像・図解: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/visuals.md
- 最終レビュー: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/review-checklist.md

すぐ使える依頼文は [`prompts/slide-create.md`](prompts/slide-create.md) にあります。

### 文章だけ参照させる

- 文章設計: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/writing.md
- 最終レビュー: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/review-checklist.md

すぐ使える依頼文は [`prompts/writing-review.md`](prompts/writing-review.md) にあります。

## 読み方

| 目的 | 参照先 |
|---|---|
| 人がブラウザで読む | [HTML版](https://silovar-uk.github.io/designmd/) |
| AIへ一つだけ渡す | [`DESIGN.md`](DESIGN.md) |
| 原理原則を理解する | [`docs/core-principles.md`](docs/core-principles.md) |
| 文章を作る・直す | [`docs/writing.md`](docs/writing.md) |
| スライドを作る・直す | [`docs/slides.md`](docs/slides.md) |
| 画像・図・チャートを選ぶ | [`docs/visuals.md`](docs/visuals.md) |
| 制作手順を整える | [`docs/workflow.md`](docs/workflow.md) |
| 公開前に点検する | [`docs/review-checklist.md`](docs/review-checklist.md) |
| プロンプトだけコピーする | [`prompts/`](prompts/) |

## このガイドが扱う6つの問題

1. **言語的平均化** — 抽象語、二項対立、均一なリズム、きれいすぎる結論へ収束する
2. **ジャンルと文化の不整合** — ウェブサイトの構造をスライドへ移植するなど、媒体の目的と形式がずれる
3. **構造的均質化** — 内容にかかわらず、同じ見出し、同じカード、同じ密度が続く
4. **装飾と意味の乖離** — 画像や図が、理解・検証・記憶のどれにも寄与しない
5. **原材料と生活痕跡の欠如** — 実際の発言、日時、場所、失敗、数字、観察が消える
6. **判断主体と責任の不在** — なぜ採用し、なぜ削り、どこまで言えるかを説明できない

## HTML版の構成

- `site/index.html` — 本文とページ構造
- `site/styles.css` — レスポンシブデザイン
- `site/app.js` — プロンプトコピーとレビュー集計
- `.github/workflows/pages.yml` — GitHub Pagesへの自動デプロイ

## 運用上の注意

- このガイドは、AI生成物を見破る検出器ではありません。
- 手書き風、紙の質感、崩したレイアウトを加えるだけでは人間らしくなりません。
- ルールを機械的に守ると、このガイド自体が新しいテンプレートになります。
- 内容上の理由がある場合は、ルールを破って構いません。その理由を説明できることが条件です。
