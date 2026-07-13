# designmd

生成AIを使った文章・スライド・画像制作で、**「整っているが、誰も本気で選んでいないように見える」状態を避ける**ための実務ガイド。

AIの使用を隠すことが目的ではありません。人間が目的、原材料、優先順位、採用・棄却を判断し、その痕跡が成果物に残る状態を目指します。

> AIくさい成果物は、AIが作った成果物ではない。  
> 誰も本気で選んでいないように見える成果物である。

現在は、次を扱っています。

- 完成を一度にさせない段階制作
- 制作前の逆質問を、仮説・具体案・推奨案付きのテキストブロックで返す運用
- 参照先から外見ではなく操作を借りる方法
- グリッド、図形、矢印、台本の設計
- 箇条書き・プレーンスライドの使い分け
- あたたかみ、面白味、ユーモア
- 日本語文章の表面・論証・身体の3パス編集
- 読者向け本編と制作ログの分離
- 旧版からの機能保存を伴う再設計
- 学習資料の定義・手順・変化・失敗・判断設計

## HTML版

- https://silovar-uk.github.io/designmd/
- ソース: [`site/`](site/)

HTML版では、段階制作、参照戦略、グリッド、トーン、日本語文章、図の文法、読者向け成果物の分離、学習資料の理解テスト、箇条書きとカードの比較を操作しながら確認できます。

GitHub Pagesを初めて使うリポジトリでは、`Settings > Pages > Source` を一度だけ `GitHub Actions` に設定してください。

## AIに一つだけ参照させる

- GitHub表示版: https://github.com/silovar-uk/designmd/blob/main/DESIGN.md
- Raw版: https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

```text
以下の制作ガイドを必須要件として参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

今回の依頼：
（依頼内容）

完成版を一度に作らず、目的、原材料、構成、台本、デザインシステム、代表ページ、全体制作を分けてください。
対話可能な場合は、逆質問、構成案の選択、代表ページの確認で一度止まり、承認後に次へ進んでください。
逆質問が必要な場合は、ユーザーがそのまま書き換えられる text コードブロックで提示してください。
空欄だけを並べず、会話から読み取った前提と仮説、今回の題材に合わせた具体案2〜4案、推奨案、推奨理由を先に示してください。
回答欄は「推奨で進める／修正：」を基本にし、ユーザーが違うところだけ直せる形にしてください。
```

## 読む順序

- **初めて読む場合**: [`docs/core-principles.md`](docs/core-principles.md) → [`docs/staged-production.md`](docs/staged-production.md) → [`docs/story-design.md`](docs/story-design.md) → [`docs/visuals.md`](docs/visuals.md) の順に読む。この4本で全体像がつかめる、30分コース。
- **作る時**: 上の4本を前提に、目的に応じて下の第2〜5層から必要なものだけを参照する。全部を読んでから作り始める必要はない。
- **外部AIに渡す場合**: このリポジトリを開かせる必要はない。[`DESIGN.md`](DESIGN.md) のraw URL1本を貼れば、正典群の内容を自己完結ダイジェストとして参照できる。

## 正典所有表

各概念には唯一の正典ファイルがある。他のファイルで同じ概念に触れる場合は、要約と参照リンクにとどめる。

| 概念 | 正典ファイル |
|---|---|
| 統一STEP 1–10工程 | [`docs/staged-production.md`](docs/staged-production.md) |
| 逆質問（仮説・具体案・推奨案付きテキストブロック） | [`docs/question-blocks.md`](docs/question-blocks.md) |
| 4層分離・機能保存表 | [`docs/audience-first-redesign.md`](docs/audience-first-redesign.md) |
| 物語設計（冒頭・転換・見せ場・タイトル） | [`docs/story-design.md`](docs/story-design.md) |
| ビジュアル技法（タイポ・レイアウト・写真・色） | [`docs/visuals.md`](docs/visuals.md) |
| 資料タイプ別方針 | [`docs/document-type-policies.md`](docs/document-type-policies.md) |
| 失敗パターン＋案件間バリエーション規則 | [`docs/ai-failure-patterns.md`](docs/ai-failure-patterns.md) |
| 品質ルーブリック | [`docs/quality-rubric.md`](docs/quality-rubric.md) |
| 参照戦略 | [`docs/reference-strategy.md`](docs/reference-strategy.md) |
| 文型パレット・文の完結度 | [`docs/sentence-completeness.md`](docs/sentence-completeness.md) |
| 図の文法（図形・矢印・台本） | [`docs/diagram-shapes.md`](docs/diagram-shapes.md) |
| 学習資料の7段梯子 | [`docs/learning-materials.md`](docs/learning-materials.md) |

## 主なガイド

### 第1層 思想

| 目的 | 参照先 |
|---|---|
| 理念・4つの資質の統合・AIくささの9要因診断 | [`docs/core-principles.md`](docs/core-principles.md) |

### 第2層 プロセス

| 目的 | 参照先 |
|---|---|
| 統一STEP 1–10で段階的に制作する | [`docs/staged-production.md`](docs/staged-production.md) |
| 逆質問を仮説・提案付きのテキストブロックで返す | [`docs/question-blocks.md`](docs/question-blocks.md) |
| 読者向け本編と制作ログを分け、旧版の機能を保存する | [`docs/audience-first-redesign.md`](docs/audience-first-redesign.md) |

### 第3層 技法

| 目的 | 参照先 |
|---|---|
| 冒頭・転換・見せ場・タイトルを設計する | [`docs/story-design.md`](docs/story-design.md) |
| タイポ・レイアウト・写真・色などビジュアル技法 | [`docs/visuals.md`](docs/visuals.md) |
| 参照先から外見ではなく操作を借りる | [`docs/reference-strategy.md`](docs/reference-strategy.md) |

### 第4層 媒体・タイプ別

| 目的 | 参照先 |
|---|---|
| 発表資料・報告書・学習資料などタイプ別方針を判定する | [`docs/document-type-policies.md`](docs/document-type-policies.md) |
| スライドを作る・直す | [`docs/slides.md`](docs/slides.md) |
| 箇条書き・プレーンスライド | [`docs/plain-slides.md`](docs/plain-slides.md) |
| 学習資料を設計する | [`docs/learning-materials.md`](docs/learning-materials.md) |
| 図形・矢印・台本 | [`docs/diagram-shapes.md`](docs/diagram-shapes.md) |
| 文章を作る・直す | [`docs/writing.md`](docs/writing.md) |
| 文の完結度を設計する | [`docs/sentence-completeness.md`](docs/sentence-completeness.md) |
| 日本語のAIくささを深く直す | [`docs/japanese-ai-writing-practices.md`](docs/japanese-ai-writing-practices.md) |
| あたたかみ・ユーモア | [`docs/playful-editoriality.md`](docs/playful-editoriality.md) |

### 第5層 検証

| 目的 | 参照先 |
|---|---|
| 制作現場で繰り返し起きる失敗パターンと案件間バリエーション規則 | [`docs/ai-failure-patterns.md`](docs/ai-failure-patterns.md) |
| 成果物・ガイド自体の到達水準を測る品質ルーブリック | [`docs/quality-rubric.md`](docs/quality-rubric.md) |
| 最終レビュー | [`docs/review-checklist.md`](docs/review-checklist.md) |
| 日本語文章の専用チェックリスト | [`docs/japanese-writing-review-checklist.md`](docs/japanese-writing-review-checklist.md) |
| 図形・矢印・台本の専用チェックリスト | [`docs/diagram-review-checklist.md`](docs/diagram-review-checklist.md) |
| 読者向け成果物・学習資料の専用チェックリスト | [`docs/audience-learning-review-checklist.md`](docs/audience-learning-review-checklist.md) |

## プロンプト

コピペ用プロンプトは [`prompts/README.md`](prompts/README.md) に全8件を整理しています。スライド新規作成・再設計、逆質問テキストブロック、文章・画像・スライド・最終レビュー、あたたかみ・ユーモアの追加プロンプトがあります。

## 成果物を4層へ分ける

制作時に必要な情報を、すべて読者へ見せないでください。

### A. 読者向け本編

理解、判断、行動に直接必要な内容。

### B. 発表者用台本

PowerPointのノート欄など、説明者だけが使う文章。

### C. 付録・根拠

出典、詳細データ、長い比較、未確認事項。

### D. 制作ログ

制作ブリーフ、構成案、ページ役割、参照戦略、採用・不採用理由。

> 制作判断を残すことと、制作判断を読者へ全部見せることは違う。

## 再設計では旧版の機能を保存する

見た目を作り直す前に、旧版が担っていた機能を記録します。

| 旧版の要素 | 読者に与えていた機能 | 新版の担当箇所 | 保存状況 |
|---|---|---|---|
| 例：4段階の手順 | 手順を再現できる | 新版5ページ | 保存／弱化／消失 |

新版に担当箇所がない場合、それは整理ではなく機能喪失です。

新版は、旧版より次のいずれかを改善する必要があります。

- 理解
- 判断
- 行動
- 再現

## 箇条書きは完成した形式

Speaker Deckで見かけるような、簡潔な箇条書きページも正式な選択肢です。

次の条件では、図形化しない方が自然です。

- 項目同士が並列
- 項目数が少ない
- 順序や因果がない
- 話し手が一項目ずつ補足する
- 図形へ変えても新しい関係が増えない

箇条書きで十分な内容を、立派に見せるためだけに3枚のカード、アイコン、矢印、シェブロンへ変換しません。

> 図解が上位、箇条書きが下位ではない。内容に対して、最小で正しい形式を選ぶ。

## 学習資料の7段階

1. 定義：何なのか
2. 識別：どの場面か
3. 理由：なぜ成立するか
4. 手順：何をどの順番で行うか
5. 変化：状況が変わったらどうするか
6. 失敗条件：いつ使わないか
7. 転用：資料を閉じた後、自分で判断できるか

一般的な「一枚一メッセージ」や統一感だけでは、教材の品質を評価できません。

## 代表ページの理解テスト

- 30秒テスト：何のページで、どこを見るか分かるか
- 再話テスト：閉じた後、一文で説明できるか
- 再現テスト：手順を自分で使えるか
- 図単独テスト：本文を隠しても図の意味が分かるか
- 本文単独テスト：図を隠しても最低限の論理が通るか
- 旧版比較テスト：理解、判断、行動が改善したか

## 実寸閲覧テスト

一覧画像の美しさより、単ページの理解を優先します。

- スマートフォン縦画面で1ページ表示
- PCで50％表示
- A4縮小印刷
- 3秒で視線の入口を確認
- 図表、盤面、注釈を拡大せず判別

## HTML版の構成

- `site/index.html` — 本文とページ構造
- `site/styles.css` — 基本デザイン
- `site/app.js` — 機能レイヤーの読み込み
- `site/v2.css` / `site/v2.js` — 段階制作、参照戦略、グリッド
- `site/v3.css` / `site/v3.js` — あたたかみ、面白味、ユーモア
- `site/v4.css` / `site/v4.js` — 日本語文章の3パス編集
- `site/v5.css` / `site/v5.js` — 図形、矢印、台本
- `site/v6.css` / `site/v6.js` — 読者向け分離、機能保存、学習、プレーンスライド

## 運用上の注意

- このガイドは、AI生成物を見破る検出器ではありません。
- 手書き風、紙の質感、崩したレイアウトを加えるだけでは人間らしくなりません。
- 禁止語を別の言葉へ置換するだけでは、問題が移動します。
- 本人が提供していない感情、経験、会話、五感を作りません。
- ルールを機械的に守ると、このガイド自体が新しいテンプレートになります。
- 制作ログを丁寧に作っても、それを本編へ全部表示しません。
- 逆質問は、依頼者へ空欄を埋めさせるアンケートではありません。制作者側の仮説、具体案、推奨案と理由を先に示し、違うところだけ直せる入力フォームとして返します。
- 内容上の理由がある場合は、ルールを破って構いません。理由を説明できることが条件です。
