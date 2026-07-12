# designmd

生成AIを使った文章・スライド・画像制作で、**「整っているが、誰も本気で選んでいないように見える」状態を避ける**ための実務ガイド。

AIの使用を隠すことが目的ではありません。人間が目的・原材料・優先順位・採用／棄却を判断し、その痕跡が成果物に残る状態を目指します。

> AIくさい成果物は、AIが作った成果物ではない。  
> 誰も本気で選んでいないように見える成果物である。

現在は、**完成品を一度に作らず、段階ごとに判断を確定する制作方法**、あたたかみ・面白味・ユーモアの設計、日本語のAIくささを表面・論証・身体の3回に分けて編集する方法を扱っています。

## 人が読む

HTML版では、原則・段階制作・参照戦略・グリッド・あたたかみとユーモア・日本語文章編集・レビュー・コピペ用プロンプトを1ページにまとめています。

- HTML版: https://silovar-uk.github.io/designmd/
- ソース: [`site/`](site/)

HTML版では、次を操作しながら確認できます。

- 9段階のステージゲート
- 参照先の4分類
- 静・標準・密・動の速度設計
- 本線・副線・脱線の三層
- 正確さ、あたたかみ、小さなユーモア、静かな帰還のトーン試作
- 同じ事実を異なるユーモア強度で書き分けるトーンラボ
- 日本語文章の表面・論証・身体を切り替える3パス編集
- 禁止語の置換と、原材料へ戻る編集の違い
- 問題に応じて戻るべき制作段階を示すチェックリスト
- コピペ用プロンプト

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

### あたたかみ・面白味・ユーモアを加える

ポップな装飾や面白い見出しを均等に足すのではなく、次の三層を分けて設計します。

- 本線：正確な情報、根拠、論理
- 副線：作り手の観察、戸惑い、反応、生活の具体性
- 脱線：ズレ、余計な検証、キャプション、コールバック

全体制作前に、正確さ、あたたかみ、小さなユーモア、静かな帰還の4種類を代表ページで試します。

- ガイド: [`docs/playful-editoriality.md`](docs/playful-editoriality.md)
- 追加プロンプト: [`prompts/playful-editoriality.md`](prompts/playful-editoriality.md)

### 日本語文章のAIくささを減らす

禁止語を別の語へ置換するだけで終えず、文章を3回に分けて編集します。

1. **表面**：記号、定型句、文末、接続詞、過剰な文完結性
2. **論証**：段落の役割、主張と証拠、因果、条件、読者負荷
3. **身体**：本人の観察、記憶、迷い、音読、最終責任

本人が提供していない感情、経験、会話、五感は創作しません。不足している場合は、AIが書き足すのではなく本人へ質問します。

- 実践ガイド: [`docs/japanese-ai-writing-practices.md`](docs/japanese-ai-writing-practices.md)
- 過剰な文完結性: [`docs/sentence-completeness.md`](docs/sentence-completeness.md)
- 専用チェックリスト: [`docs/japanese-writing-review-checklist.md`](docs/japanese-writing-review-checklist.md)
- レビュープロンプト: [`prompts/writing-review.md`](prompts/writing-review.md)

### 文章だけ参照させる

- 文章設計: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/writing.md
- 日本語AI文章: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/japanese-ai-writing-practices.md
- 専用チェックリスト: https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/japanese-writing-review-checklist.md
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
| あたたかみ・ユーモアを設計する | [`docs/playful-editoriality.md`](docs/playful-editoriality.md) |
| 文章を作る・直す | [`docs/writing.md`](docs/writing.md) |
| 日本語のAIくささを深く直す | [`docs/japanese-ai-writing-practices.md`](docs/japanese-ai-writing-practices.md) |
| 文の完結度を設計する | [`docs/sentence-completeness.md`](docs/sentence-completeness.md) |
| 日本語文章を点検する | [`docs/japanese-writing-review-checklist.md`](docs/japanese-writing-review-checklist.md) |
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

### 正しさに人の気配を混ぜる

あたたかみは、ベージュ、丸い角、手書き文字から自動的には生まれません。

- 読み手と同じ疑問を小さく共有する
- 誤解や言い直しを理解へ使う
- キャプションを第二の語り手にする
- 失敗のうち、理解を深めるものだけを編集して残す
- 面白さを全ページへ均等に配らない
- 笑いの後に静かなページへ戻る

### 日本語文章を三回に分けて編集する

表面校正だけでは、文章の論証や原材料不足は直りません。

- Lint：機械的な残留物と反復
- Argument：段落、主張、証拠、因果
- Embodiment：本人の身体、記憶、語彙、責任

「人間らしく」と抽象的に指定せず、どの深さを直しているかを明示します。

## HTML版の構成

- `site/index.html` — 本文とページ構造
- `site/styles.css` — 基本のレスポンシブデザイン
- `site/app.js` — 機能レイヤーの読み込みと基本操作
- `site/v2.css` / `site/v2.js` — 段階制作、参照戦略、グリッド
- `site/v3.css` / `site/v3.js` — あたたかみ、面白味、ユーモアのトーン試作
- `site/v4.css` / `site/v4.js` — 日本語文章の3パス編集と原材料への逆質問
- `.github/workflows/pages.yml` — GitHub Pagesへの自動デプロイ

## 運用上の注意

- このガイドは、AI生成物を見破る検出器ではありません。
- 手書き風、紙の質感、崩したレイアウトを加えるだけでは人間らしくなりません。
- 禁止語を別の言葉へ置換するだけでは、問題が移動します。
- 本人が提供していない感情、経験、会話、五感を作りません。
- ルールを機械的に守ると、このガイド自体が新しいテンプレートになります。
- 内容上の理由がある場合は、ルールを破って構いません。その理由を説明できることが条件です。
- 一括制作を求められた場合も、内部ではステージを順番に通し、置いた前提と判断を示してください。
