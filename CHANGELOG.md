# CHANGELOG

このファイルは、designmdの正典、運用、公開形式に関する大きな変更と、その理由を記録する。

個々のコミット履歴の代わりではない。次の変更時に、何を守り、何を再検討するかを残す場所として使う。

---

## 2026-07-16：認知リズム文章ガイドをexperimentalで追加

### 背景

既存の日本語文章ガイドは、AI生成物の残留物、定型句、過剰な文完結性、段落の論証、具体性、書き手の身体と責任を扱っていた。

一方で、論証と具体性は成立しているのに、次の状態になる長文への診断が弱かった。

- すべての段落が同じ認知モードで進む
- 理論や説明が続き、具体へ戻らない
- 問いを置いても、後の説明や判断が変わらない
- 文章の進行だけを実況する短文が残る
- 列挙が続き、今回の判断へ着地しない
- 冒頭と結びが一般論で入れ替え可能

鹿野桂一郎「cognitive-rhythm-writing」を参考に、長文のコラム・解説・読み物へ限定したexperimentalガイドを追加した。

### 追加

- `docs/cognitive-rhythm-writing.md`
  - 対象更新／文書更新テスト
  - 問い・回収台帳
  - 観察、推論、保留、反証、固定、適用の認知モード
  - 高・中・低の密度波形
  - 冒頭、節頭、節末、列挙、結びの点検
  - 過剰適用と撤回条件
- `docs/experiments/cognitive-rhythm-evaluation.md`
  - 6文書または3案件の比較評価
  - コラム、解説、報告、告知を使った適用判定
  - Stable化、継続、縮小、撤回の判定
- `docs/references/cognitive-rhythm-writing.md`
  - 出典、借りた考え方、designmd向けの変更、借りなかった表現を記録
- `prompts/cognitive-rhythm-writing.md`
  - 長文生成・改稿用の適用判定付きプロンプト

### 既存ファイルへの接続

- `docs/writing.md`
  - 文長だけでリズムを作らないことを追加
  - 長文で平坦さが問題の場合だけ認知リズムを任意適用
- `docs/japanese-writing-review-checklist.md`
  - OPTIONAL PASSとして対象更新、問い・回収、モード、密度、境界、過剰適用を追加
- `prompts/writing-review.md`
  - 媒体別の適用判定と認知リズム診断を追加
- `prompts/README.md`
  - 専用プロンプトを追加
- `README.md`、`AGENTS.md`
  - experimentalとしての適用範囲、評価、撤回条件を追加

### 正式採用前に行わないこと

- `DESIGN.md`の必須原則へ統合しない
- HTML版へ診断UIを追加しない
- 既存の三回編集を四回編集へ変更しない
- 緊急告知、法務、手順書、議事録、短いメールへ全面適用しない

6文書または3案件の評価後に、Stable化、Experimental継続、機能縮小、撤回を判断する。

### 参考・加工表示

出典：鹿野桂一郎「cognitive-rhythm-writing/SKILL.md」  
https://gist.github.com/k16shikano/eb2929f13ed19c97188393d297be8432

同Gistの考え方をdesignmd向けに編集・加工している。原文の規則・例文をそのまま転載せず、作者がdesignmdを作成、推奨、監修したことを意味しない。

---

## 2026-07-15：デジタル庁デザインシステムを参考にした運用基盤の追加

### 背景

従来のdesignmdは、制作物の内容・構成・視覚を改善する原則は充実していた。一方で、次の運用面が弱かった。

- designmdの共通原則と、案件固有の外見の境界
- アクセシビリティをいつ、誰が、どの媒体で確認するか
- 依頼者、編集者、実装者、レビュアー、AIの入口と責任
- ルールの安定度、版、更新日
- カード、箇条書き、表などの使用条件
- 数値目安が固定トークンとして独り歩きする危険

デジタル庁デザインシステムの、共通基盤と個別スタイルガイドの分離、役割別の使い方、ユースケースと注意事項、アクセシビリティ、版・リソース管理を参考にした。

### Stableとして追加

- `docs/project-style-guide.md`
  - designmdと案件別スタイルガイドを分離
  - 共通基盤で上書きできない条件を定義
  - 最小版・詳細版テンプレートを追加
- `docs/accessibility.md`
  - アクセシビリティをSTEP 1〜10へ通す
  - PowerPoint、PDF、Webの媒体別確認を追加
  - 規格適合を保証しない責任境界を明文化
- `docs/roles-and-responsibility.md`
  - 依頼者、編集者、実装者、レビュアー、AIの入口と責任を整理
- `docs/governance.md`
  - `stable`、`beta`、`experimental`、`deprecated` を定義
  - 正典、DESIGN.md、README、site、promptsの同期関係を整理
- `VERSION`
  - `2026.07.15-beta`
- `docs/references/digital-agency-design-system.md`
  - 出典、加工内容、借りた考え方、借りなかった外見を記録

### Experimentalとして追加

- `docs/format-selection.md`
  - 箇条書き、カード、見出し、表、画像、図を、担う仕事から選ぶ
  - 3案件で試行し、形式先行、同型化、制作時間増、理解改善なしの場合は撤回・縮小
- `docs/type-spacing-decisions.md`
  - 文字サイズ、行長、行間、余白を、用途と実寸確認へ接続
  - 数値を固定トークンとして使わない

### サイト・配布

- `site/v7.js`、`site/v7.css`
  - 共通基盤と案件別ガイド
  - 役割別入口
  - 全工程アクセシビリティ
  - experimentalな形式選択
  - 状態表示
- `.github/workflows/markdown-release.yml`
  - `docs-v*` タグまたは手動実行でMarkdown一式をZIP化
- `DESIGN.md`、`README.md`、`AGENTS.md`
  - 新しい正典と責任境界を自己完結的に統合

### 参考・加工表示

出典：デジタル庁デザインシステムウェブサイト  
https://design.digital.go.jp/dads/

同サイトの考え方をdesignmd向けに編集・加工している。デジタル庁がdesignmdを作成、推奨、監修したことを意味しない。

---

## 2026年：GATE制からSTEP制への再設計

### 背景

既存ガイドは「AIくささの回避」には強かったが、物語の必然性、見せ場、資料タイプごとの分岐など「良さをどう作るか」の正典が弱かった。

また、`GATE 0–8` と別の工程表記が並立し、段階制作、参照戦略、あたたかみなどの説明が複数ファイルへ重複していた。

### 主な変更

- 制作工程を `docs/staged-production.md` のSTEP 1–10へ統一
- `docs/story-design.md` を新設
- `docs/document-type-policies.md` を新設
- `docs/ai-failure-patterns.md` を新設
- `docs/quality-rubric.md` を新設
- `docs/visuals.md` をビジュアル技法の正典として拡張
- `docs/core-principles.md` に理念、4資質、AIくささの9要因を統合
- `docs/slides.md`、`docs/writing.md` の重複を削減
- レビューとプロンプトのSTEP番号を統一
- `DESIGN.md` を正典群の自己完結ダイジェストとして再構成

### Before / After

**Before**：悪さの回避には強いが、良さの作り方が薄い。工程番号と原則が複数ファイルで重複していた。

**After**：物語設計、ビジュアル技法、資料タイプ別方針を正典化し、制作工程をSTEP 1–10へ統一した。

---

## 今後の更新ルール

### 1. 追加前に正典を確認する

新しい原則を追加する前に、既存正典に同じ概念がないか確認する。該当する正典があれば、新規ファイルではなく既存箇所を更新する。

### 2. 概念の正典は一つに保つ

別ファイルで触れる場合は、要約とリンクにとどめる。

### 3. 新しい規範の記述単位

原則として、次を示す。

- 目的
- 向く場面
- 注意が必要な場面
- 例外
- 検証方法

### 4. 正典を編集したら同期を確認する

- `DESIGN.md`
- `README.md`
- `AGENTS.md`
- 関連プロンプト
- `site/`
- `VERSION`
- `CHANGELOG.md`

すべてを毎回更新するのではなく、意味が変わる箇所だけを同期する。

Experimentalで正式採用前の場合は、`DESIGN.md`と`site/`への統合を保留できる。その理由と評価条件をREADME、AGENTS、CHANGELOGへ記録する。

### 5. STEP番号を変更する場合

レビュー、プロンプト、DESIGN.md、正典間リンクをすべて洗い出して更新する。

### 6. Experimental

experimentalには、次を持たせる。

- 試行範囲
- 評価方法
- 評価期限または件数
- stable化の条件
- 撤回・縮小条件

### 7. 参考資料

外部のガイドやデザインシステムを参考にした場合は、借りた操作、借りなかった外見、出典、編集・加工の事実を記録する。

### 8. 責任境界

ガイドの状態がstableでも、成果物の正確性、法令・権利、アクセシビリティ、公開可否を保証しない。最終判断者を案件ごとに明示する。
