# コピペ用プロンプト

必要な部分だけコピーして使える。

- [`question-block-template.md`](question-block-template.md)：制作前の最初の一問をつくる
- [`question-audit.md`](question-audit.md)：依頼文の前提と代替問いを比較する
- [`wao-audit.md`](wao-audit.md)：通常の期待と、手段・表現・構造のWAO案を比較する
- [`app-design.md`](app-design.md)：A｜操作具、B｜作業台、C｜探索空間からアプリを設計・改善する
- [`manual-create.md`](manual-create.md)：実際の事故、例外、担当、Word書式を反映したマニュアルを作る
- [`editorial-design.md`](editorial-design.md)：雑誌の編集型と質感五軸を決める
- [`slide-create.md`](slide-create.md)：スライドを新規作成する
- [`slide-redesign.md`](slide-redesign.md)：既存スライドを再設計する
- [`slide-review.md`](slide-review.md)：既存スライドを批評・改善する
- [`writing-review.md`](writing-review.md)：文章をLint、論証、認知リズム、身体の四段階で点検する
- [`cognitive-rhythm-writing.md`](cognitive-rhythm-writing.md)：長文のコラム・解説を認知リズムの観点で生成・改稿する
- [`visual-review.md`](visual-review.md)：画像・図解の必要性を点検する
- [`final-review.md`](final-review.md)：成果物全体を最終点検する
- [`playful-editoriality.md`](playful-editoriality.md)：通常の制作プロンプトへ追加してあたたかみ・ユーモアを加える

AIがURLを読める場合は、各プロンプトと一緒に次を渡す。

```text
共通原則：
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md
```

アプリ案件では、次も渡す。

```text
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/app-design.md
```

Wordマニュアル案件では、次も渡す。

```text
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/manual.md
```

## すべての制作プロンプトに共通する開始規則

最初の応答では、計画、分析、制作案を出す前に、成果物を最も変える一問だけを聞く。

- 既知情報を聞き直さない
- 題材に合う2〜3案、推奨案、短い理由を添える
- 疑問文と質問符は一つだけにする
- 記号、一語、短い修正で回答できる形にする
- 回答前に制作へ進まない
- 回答後に追加質問をしない
- 残る不足は仮説、未確認事項、制作範囲として扱う

```text
最初に一つだけ確認します。
今回、最優先にするのは A｜理解、B｜判断、C｜行動 のどれですか？ 実装へつなげる依頼なので、推奨はCです。
```

最初の一問への回答後、依頼された問いの前提と根拠を確認し、複数の問いを比較する。AIは候補を出し、最終判断は人間が行う。

WAOは派手さの追加指示ではない。通常の期待を定義し、題材固有の手段・表現・構造によって、理解、感情、行動、記憶のどれを上振れさせるか決める。

認知リズムは文書種別に応じて適用範囲を変える。

- 全工程：コラム、解説、インタビュー記事、長めの企画文、学習資料
- 一部：提案書、社内説明、調査レポート、プレゼンノート、プレスリリース
- 対象更新のみ：緊急告知、安全情報、法務、手順書、議事録、短いメール
