# Repository instructions for AI agents

このリポジトリで文章、スライド、画像、プロンプト、サイトを追加・修正するAIは、最初に [`DESIGN.md`](DESIGN.md) を読むこと。

現在版は [`VERSION`](VERSION)、状態と更新方法は [`docs/governance.md`](docs/governance.md)、大きな変更は [`CHANGELOG.md`](CHANGELOG.md) を確認する。

## 正典の参照先

- 理念・AIくささの要因：`docs/core-principles.md`
- 制作工程：`docs/staged-production.md`
- 逆質問：`docs/question-blocks.md`
- 案件別スタイル：`docs/project-style-guide.md`
- アクセシビリティ：`docs/accessibility.md`
- 役割・責任：`docs/roles-and-responsibility.md`
- 読者向け本編と制作ログ：`docs/audience-first-redesign.md`
- 物語設計：`docs/story-design.md`
- 文章：`docs/writing.md`
- 日本語の四回編集：`docs/japanese-ai-writing-practices.md`
- 認知リズム：`docs/cognitive-rhythm-writing.md`
- 認知リズム運用レビュー：`docs/cognitive-rhythm-review.md`
- 文型・完結度：`docs/sentence-completeness.md`
- スライド：`docs/slides.md`
- 箇条書き：`docs/plain-slides.md`
- 図形・矢印・台本：`docs/diagram-shapes.md`
- PowerPointノート：`docs/speaker-notes.md`
- 画像・図解・タイポ・余白：`docs/visuals.md`
- 学習資料：`docs/learning-materials.md`
- 資料タイプ別方針：`docs/document-type-policies.md`
- 参照戦略：`docs/reference-strategy.md`
- 失敗パターン：`docs/ai-failure-patterns.md`
- 品質ルーブリック：`docs/quality-rubric.md`
- 形式選択：`docs/format-selection.md`（experimental）
- タイポ・余白判断：`docs/type-spacing-decisions.md`（experimental）
- 最終レビュー：`docs/review-checklist.md`

## 作業時の必須事項

1. 読み手、使用場面、読後の変化、判断事項を明示する。
2. 事実、解釈、仮説、提案、演出を混同しない。
3. 原材料の具体性を残す。
4. 完成版を一度に作らず、統一STEP 1–10を通す。
5. 対話可能なら、逆質問、構成案、代表ページで一度止まる。
6. 逆質問は空欄だけを並べず、仮説、具体案2〜4案、推奨案、理由を先に示す。
7. 日時、人数、予算、権利条件など、誤ると危険な事実は推測しない。
8. 構成案を最低3案比較し、採用・不採用理由を示す。
9. designmdの共通基盤と、案件固有のスタイルを分ける。
10. アクセシビリティを目的、構成、視覚、実装、検証の全工程で確認する。
11. 参照先から借りる操作と、借りない外見を示す。
12. 同一テンプレートを内容に関係なく反復しない。
13. 本編、台本、付録・根拠、制作ログを分ける。
14. 既存成果物の再設計では、旧版の機能保存表を先に作る。
15. 図形化で新しい関係が増えない場合、文章、箇条書き、表を優先する。
16. PowerPointのノートは常体、だ・である調で書く。
17. 最終的な採用、権利、公開、説明責任は人間が持つ。

## 日本語文章の四回編集

日本語文章は、原則として次の順で編集する。

### PASS 1：Lint

- 記号、Markdown、半角スペース
- 定型句、空句
- 同じ文末、接続詞、文型
- 内容を増やさない予告・総括

### PASS 2：Argument

- 段落の役割
- 主張と根拠
- 因果、条件、限界
- 削除、統合、移動

### PASS 3：Cognitive Rhythm

- 対象更新／文書更新
- 問い・回収台帳
- 観察、推論、保留、反証、固定、適用
- 高・中・低の密度
- 冒頭、節頭、節末、列挙、結び

### PASS 4：Embodiment

- 実際の場面、発言、数字
- 本人の語彙と呼吸
- 実際に持っていた迷いと判断
- 最終責任

## 認知リズムの適用範囲

- **全工程**：コラム、解説、インタビュー記事、長めの企画文、学習資料
- **一部**：提案書、社内説明、調査レポート、プレゼンノート、プレスリリース
- **対象更新のみ**：緊急告知、安全情報、法務、手順書、議事録、短いメール

必須条件：

- 論証を直す前に問いや短文を足さない
- 文章の進行だけを実況する文を、対象側の情報へ戻す
- 問いを置くなら、後の説明または判断を変える
- 認知モードと密度を固定テンプレートにしない
- 結論、重要条件、注意事項を遅らせない
- 書き手が持っていない迷い、感情、告白、場面を創作しない
- 技法名や制作手順を本文へ漏らさない

## Experimentalの扱い

現在のexperimentalは次の二つである。

- `docs/format-selection.md`
- `docs/type-spacing-decisions.md`

通常ルールと同じ強さで強制せず、内容より先に形式や数値を決めない。安定化するときはVERSION、CHANGELOG、DESIGN.md、README、必要に応じsiteを更新する。

## 対話できない場合

一度の出力でも、内部では全STEPを順番に通す。

提出時に必要に応じて示す。

- 置いた前提
- 比較した構成案と不採用理由
- 案件別スタイルガイド
- 本編、台本、付録、制作ログの分離
- 参照した資料と借りた操作
- 旧版から保存した機能
- アクセシビリティ確認
- 未確認事項と最終判断者

日本語長文では、次も残す。

- 認知リズムの適用範囲
- 削除した文書更新文
- 問い・回収台帳
- 過剰適用を避けた判断

## 保守規約

1. 各概念には一つの正典を置く。
2. 新しい原則を追加する前に既存正典との重複を確認する。
3. 新しい規範には、目的、向く場面、注意が必要な場面、例外、検証方法を書く。
4. 正典を編集したら、DESIGN.md、README、プロンプト、site、VERSION、CHANGELOGの同期要否を確認する。
5. STEP番号を変えたら、すべての参照を更新する。
6. 外部資料を参考にしたら、出典、加工内容、借りた考え方、借りなかった表現を記録する。
7. cognitive-rhythm-writingの扱いを変えたら、`docs/references/cognitive-rhythm-writing.md` を更新する。
