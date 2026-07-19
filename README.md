# designmd

> Version: `2026.07.19-beta`  
> Status: beta

生成AIを使った文章・スライド・画像制作で、**整っているが、誰も本気で選んでいないように見える状態**を避けるための実務ガイド。

> AIくさい成果物は、AIが作った成果物ではない。  
> 誰も本気で選んでいないように見える成果物である。

制作は、必ず**最初の一問**から始める。正しく、分かりやすくつくった上で、読み手の期待を意味のある形で上振れさせる**WAO**も、designmdの判断基準として扱う。

## HTML版

https://silovar-uk.github.io/designmd/

HTML版は、全面置換前の情報量、教材性、操作性、細かな判断、ユーモアを基準に再興した。

上位入口は5つへ束ねる。

1. **はじめる**：最初の一問、問い、目的、AIくささ
2. **組み立てる**：段階、原材料、参照、構成
3. **表現する**：文章、図、スライド、台本、編集デザイン、質感、WAO
4. **外す・残す**：密度、逸脱、ユーモア、機能保存
5. **確かめる**：役割、アクセシビリティ、レビュー、正典

これは内容を5項目へ減らしたことを意味しない。詳細STEP、具体例、失敗条件、操作、参考資料は各入口の中へ残している。

公開面の構成：

- `site/index.html`：JavaScriptなしでも読める静的基盤
- `site/styles.css`：基礎スタイル
- `site/app.js`：既存機能、最初の一問、WAOセクションを読み込む
- `site/v2.*`〜`site/v9.*`：段階制作、ユーモア、文章、図、学習、運用、問いの監査
- `site/v10.*`：入口、順序、重複、キーボード、スマートフォンの修復
- `site/editorial-design.css`：五つの編集型と素材設計の表示
- `site/editorial-design.js`：横めくり、質感五軸、制作痕跡、スタイル指定コピー
- `site/wao.css`：WAOの思想、三つの方向、監査UI
- `site/wao.js`：WAO設計メモ、五条件チェック
- `site/one-question.css`：最初の一問の規則と比較表示
- `site/one-question.js`：一問生成ツールと公開ページへの組み込み
- `site/layout-fixes.css`：レイヤー横断のレイアウト修正

## AIに一つだけ参照させる

- GitHub表示版：[`DESIGN.md`](DESIGN.md)
- Raw版：https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

```text
以下の制作ガイドを必須要件として参照してください。
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

今回の依頼：
（依頼内容）

最初の応答では、計画や分析を出す前に、成果物を最も変える一問だけを聞いてください。
既に分かっていることは聞き直さず、題材に合う2〜3案、推奨案、短い理由を添えてください。
回答後は追加質問をせず、残る不足は仮説、未確認事項、制作範囲として管理してください。

その回答を踏まえて、前提、根拠、欲望、文脈、代替問いを監査してください。
ブリーフ忠実案、再定義案、反転・別軸案を比較し、推奨案と理由を示してください。
最終的に採用する問いと説明責任は人間が持ちます。
完成版を一度に作らず、問い、原材料、構成、代表ページ、全体制作を分けてください。
日本語の長文は、表面、論証、認知リズム、身体の四段階で編集してください。
読み物では、編集型と素材設計を分け、主型、副型、質感五軸、制作痕跡を決めてください。
通常の期待を定義し、手段・表現・構造からWAO案を比較してください。派手さだけをWAOと扱わないでください。
```

## 最初の一問

制作前の質問は、一問だけにする。

> 不足情報を全部集めるのではなく、回答によって成果物が最も大きく変わる判断を一つだけ共有する。

ルール：

- 最初の実質的な応答を質問にする
- 疑問文と質問符を一つだけにする
- 既知情報を聞き直さない
- 2〜3個の具体案、推奨案、短い理由を添える
- 記号、一語、短い修正で答えられるようにする
- 回答前に計画や制作へ進まない
- 回答後に追加質問をしない
- 残る不足は、仮説、未確認事項、制作範囲として管理する

```text
最初に一つだけ確認します。
今回、最優先にするのは A｜理解、B｜判断、C｜行動 のどれですか？ 実装へつなげる依頼なので、推奨はCです。
```

詳細：

- [`docs/question-blocks.md`](docs/question-blocks.md)
- [`prompts/question-block-template.md`](prompts/question-block-template.md)

## AIも問いを問い直す

AIは、与えられた問いへ答えるだけではない。

1. **前提**：何を事実として扱っているか
2. **根拠**：事実、仮説、慣習、未確認のどれか
3. **欲望**：解決後に本当は何を変えたいか
4. **文脈**：生活者、競合、組織、社会、時代を加えると何が変わるか
5. **代替問い**：元の問いを採用しない場合、何を問うか

原則として、ブリーフ忠実案、再定義案、反転・別軸案を比較する。

最初の一問への回答後、問いの監査は内部で行う。追加質問はせず、推奨案、仮説、未確認事項を示す。

詳細：[`docs/question-audit.md`](docs/question-audit.md)

## 五段階制作

最初の一問への回答後、五段階を進める。

1. **定める**：問い、読み手、使用場面、読後の変化
2. **集める**：原材料、証拠、反証、未確認事項
3. **組み立てる**：中心メッセージ、構成、役割、情報量、WAO
4. **つくる**：視覚方針、編集型、質感、代表ページ、実装
5. **確かめる**：問い、最初の一問、AIらしさ、アクセシビリティ、完成度

詳細：[`docs/staged-production.md`](docs/staged-production.md)

## WAO

WAOは、派手さ、奇抜さ、情報量の多さではない。

> 読み手が想定していた体験を、内容と結びついた一手によって、分かりやすさを失わずに上振れさせる。

三つの方向から考える。

- **手段のWAO**：場所、媒体、導線、参加方法そのものを企画へ変える
- **表現のWAO**：言葉、写真、音、尺度、動きの関係を変える
- **構造のWAO**：前後、複数媒体、操作、回収によって意味を増やす

WAOが成立する条件：

1. 通常ならどうなるか説明できる
2. 題材固有の材料と結びついている
3. 分かりやすさ、正確さ、安全を壊さない
4. 一つの強い一手へ集中している
5. 体験後の理解、感情、行動、記憶が変わる

詳細：

- [`docs/wao.md`](docs/wao.md)
- [`prompts/wao-audit.md`](prompts/wao-audit.md)

## 日本語文章の四回編集

1. **Lint**：記号、定型句、反復を取る
2. **Argument**：段落、根拠、因果、条件を直す
3. **Cognitive Rhythm**：対象更新、問いの回収、認知モード、密度を直す
4. **Embodiment**：本人の語彙、記憶、呼吸、責任へ戻す

認知リズムは、問いや短文を増やす技法ではない。読み手の認識が、具体的な事実と判断によってどう更新されるかを設計する。

## 雑誌の読み方と質感

「雑誌風」を、明朝体、段組み、紙テクスチャの組み合わせで終わらせない。

- 編集型：報道・新聞／写真・ラグジュアリー／文芸・思想誌／カルチャー・インディー／解説・データ
- 素材設計：表面／反射／精度／時間／重量
- 制作痕跡：網点、版ずれ、切り貼り、折り、ニス、半透明の重なりなどから最大二つ

詳細：

- [`docs/editorial-design.md`](docs/editorial-design.md)
- [`docs/materiality.md`](docs/materiality.md)
- [`prompts/editorial-design.md`](prompts/editorial-design.md)

## 役割から入る

| やりたいこと | 最初に読む |
|---|---|
| 最初の一問をつくる | [`docs/question-blocks.md`](docs/question-blocks.md) |
| 問いを監査する | [`docs/question-audit.md`](docs/question-audit.md) |
| 構成・編集する | [`docs/staged-production.md`](docs/staged-production.md) |
| WAOを設計・監査する | [`docs/wao.md`](docs/wao.md) |
| 雑誌の読み方を設計する | [`docs/editorial-design.md`](docs/editorial-design.md) |
| 素材感・質感を決める | [`docs/materiality.md`](docs/materiality.md) |
| 日本語文書を改善する | [`docs/japanese-ai-writing-practices.md`](docs/japanese-ai-writing-practices.md) |
| 視覚設計・実装する | [`docs/visuals.md`](docs/visuals.md) |
| レビューする | [`docs/review-checklist.md`](docs/review-checklist.md) |

## 主要な正典

| 概念 | 正典 | 状態 |
|---|---|---|
| 最初の一問 | [`docs/question-blocks.md`](docs/question-blocks.md) | stable |
| 問いの監査 | [`docs/question-audit.md`](docs/question-audit.md) | stable |
| 制作工程 | [`docs/staged-production.md`](docs/staged-production.md) | stable |
| 案件別スタイル | [`docs/project-style-guide.md`](docs/project-style-guide.md) | stable |
| WAO | [`docs/wao.md`](docs/wao.md) | stable |
| 編集デザイン | [`docs/editorial-design.md`](docs/editorial-design.md) | stable |
| 素材設計 | [`docs/materiality.md`](docs/materiality.md) | stable |
| アクセシビリティ | [`docs/accessibility.md`](docs/accessibility.md) | stable |
| 日本語の四回編集 | [`docs/japanese-ai-writing-practices.md`](docs/japanese-ai-writing-practices.md) | stable |
| 認知リズム | [`docs/cognitive-rhythm-writing.md`](docs/cognitive-rhythm-writing.md) | stable |
| 情報の束ね方 | [`docs/information-grouping.md`](docs/information-grouping.md) | stable |
| ビジュアル | [`docs/visuals.md`](docs/visuals.md) | stable |
| 形式選択 | [`docs/format-selection.md`](docs/format-selection.md) | experimental |
| タイポ・余白判断 | [`docs/type-spacing-decisions.md`](docs/type-spacing-decisions.md) | experimental |

## プロンプト

[`prompts/README.md`](prompts/README.md) に整理している。

- 最初の一問
- 問いの監査
- WAOの設計・監査
- スライド作成・再設計
- 文章レビュー
- 認知リズム文章の生成・改稿
- 編集型と質感の設計
- 画像・図解レビュー
- 最終レビュー

## 運用上の注意

- 一問と言いながら複数の確認事項を詰め込まない
- 質問前に計画や分析を長く説明しない
- 回答後に「もう一点だけ」と追加質問をしない
- AIが出した刺激的な問いを、そのまま本質的な問いと扱わない
- 元の問いを否定すること自体をクリエイティブと考えない
- 「5つ以下」を情報量の上限として使わない
- WAOを派手な色、巨大文字、動き、奇抜な操作の言い換えにしない
- 強いWAOを連続させず、基準となる静かな区間を残す
- 五つの編集型を完成済みテンプレートとして使い回さない
- 質感を紙粒子、汚れ、金色、影の代用品にしない
- 副題を減らすために具体例、失敗条件、ユーモアを削らない
- 緊急、安全、法令、決定済み事項を面白さのために広げない
- ルールを機械的に守り、新しいテンプレートにしない
- 正確性、権利、アクセシビリティ、公開可否の最終責任は案件側が持つ
