# designmd

生成AIを使った文章・スライド・画像制作で、**「整っているが、誰も本気で選んでいないように見える」状態を避ける**ための実務ガイド。

AIの使用を隠すことが目的ではありません。人間が目的・原材料・優先順位・採用／棄却を判断し、その痕跡が成果物に残る状態を目指します。

> AIくさい成果物は、AIが作った成果物ではない。  
> 誰も本気で選んでいないように見える成果物である。

今回の更新では、**完成品を一度に作らず、段階ごとに判断を確定する制作方法**を中核へ追加しました。

## 人が読む

HTML版では、原則・媒体別ガイド・制作工程・レビュー・コピペ用プロンプトを1ページにまとめています。

- HTML版: https://silovar-uk.github.io/designmd/
- ソース: [`site/`](site/)

チェックリストは画面上で選択でき、プロンプトはボタンからコピーできます。

GitHub Pagesを初めて使うリポジトリでは、`Settings > Pages > Source` を一度だけ `GitHub Actions` に設定する必要があります。以降は `site/` の更新時に自動デプロイされます。

## AIに参照させる

次のURLを、依頼文と一緒にAIへ渡してください。

- GitHub表示版: https://github.com/silovar-uk/designmd/blob/main/DESIGN.md
- Raw版: https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

```text
以下の制作ガイドを必須要件として参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

今回の依頼：
（依頼内容）

完成版を一度に作らず、目的、原材料、構成、デザインシステム、代表ページ、全体制作を分けてください。
対話可能な場合は、逆質問、構成案の選択、代表ページの確認で一度止まり、承認後に次へ進んでください。
```

### スライドを段階的に作る

完成版を一発生成させるのではなく、次のゲートで進めます。

1. 逆質問
2. 原材料と証拠
3. 参照戦略
4. 構成案の比較
5. ストーリーボード
6. グリッドとデザインシステム
7. 代表ページ3〜5枚
8. 全体制作
9. 最終レビュー

- 段階制作: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/staged-production.md
- 参照戦略: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/reference-strategy.md
- スライド設計: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/slides.md
- 画像・図解: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/visuals.md
- 最終レビュー: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/review-checklist.md

すぐ使える完全版プロンプトは [`prompts/slide-create.md`](prompts/slide-create.md) にあります。

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
| 段階的に制作する | [`docs/staged-production.md`](docs/staged-production.md) |
| 独自性・面白味・動きを設計する | [`docs/reference-strategy.md`](docs/reference-strategy.md) |
| 文章を作る・直す | [`docs/writing.md`](docs/writing.md) |
| スライドを作る・直す | [`docs/slides.md`](docs/slides.md) |
| 画像・図・チャートを選ぶ | [`docs/visuals.md`](docs/visuals.md) |
| 制作手順を整える | [`docs/workflow.md`](docs/workflow.md) |
| 公開前に点検する | [`docs/review-checklist.md`](docs/review-checklist.md) |
| プロンプトだけコピーする | [`prompts/`](prompts/) |

## このガイドが扱う7つの問題

1. **言語的平均化** — 抽象語、二項対立、均一なリズム、きれいすぎる結論へ収束する
2. **ジャンルと文化の不整合** — ウェブサイトの構造をスライドへ移植するなど、媒体の目的と形式がずれる
3. **構造的均質化** — 内容にかかわらず、同じ見出し、同じカード、同じ密度が続く
4. **装飾と意味の乖離** — 画像や図が、理解・検証・記憶のどれにも寄与しない
5. **原材料と生活痕跡の欠如** — 実際の発言、日時、場所、失敗、数字、観察が消える
6. **判断主体と責任の不在** — なぜ採用し、なぜ削り、どこまで言えるかを説明できない
7. **早すぎる収束** — 原材料から完成版へ一気に進み、途中の判断を検証しない

## 新しい設計の考え方

### 完成を一度に作らない

完成度を少しずつ上げるだけではありません。各段階で、異なる判断を確定します。

- 目的
- 証拠
- 参照
- 構成
- グリッド
- 逸脱
- 代表ページ
- 全体

### 参照先から操作を借りる

参考資料を「この感じで」と模倣せず、次へ分けます。

- 骨格：出版物、グリッド、組版
- 逸脱：実験的タイポグラフィ、ポスター
- 時間：漫画、映画タイトル、映像
- 固有素材：元記事、会話、写真、表、手書き

各参照について、借りる操作と借りない外見を明示します。

### 秩序の上に逸脱を置く

先にグリッド、文字階層、余白、出典を整え、その上で内容に結びついた一つの逸脱ルールを置きます。

例：予想が外れるページだけグリッドから要素を外す、反証ページだけ左右を反転する、同じ引用を意味を変えて再登場させる。

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
- 一括制作を求められた場合も、内部ではステージを順番に通し、置いた前提と判断を示してください。
