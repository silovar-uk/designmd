# コピペ用プロンプト

必要な部分だけコピーして使える。

- [`question-audit.md`](question-audit.md)：依頼文の前提と代替問いを比較する
- [`question-block-template.md`](question-block-template.md)：逆質問テキストブロックの型だけを使う
- [`wao-audit.md`](wao-audit.md)：通常の期待と、手段・表現・構造のWAO案を比較する
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

制作前に、依頼された問いの前提と根拠を確認し、複数の問いを比較する。AIは候補を出し、最終判断は人間が行う。

WAOは派手さの追加指示ではない。通常の期待を定義し、題材固有の手段・表現・構造によって、理解、感情、行動、記憶のどれを上振れさせるか決める。

認知リズムは文書種別に応じて適用範囲を変える。

- 全工程：コラム、解説、インタビュー記事、長めの企画文、学習資料
- 一部：提案書、社内説明、調査レポート、プレゼンノート、プレスリリース
- 対象更新のみ：緊急告知、安全情報、法務、手順書、議事録、短いメール
