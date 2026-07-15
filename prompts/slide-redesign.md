# 既存スライド再設計プロンプト

既存のPowerPoint／PDFを作り直すときに使用します。

```text
以下のガイドを必須要件として参照してください。

共通原則：
https://raw.githubusercontent.com/silovar-uk/designmd/main/DESIGN.md

理念・9要因診断：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/core-principles.md

段階制作：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/staged-production.md

逆質問：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/question-blocks.md

物語設計：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/story-design.md

スライド設計：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/slides.md

箇条書き・プレーンスライド：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/plain-slides.md

読者向け本編と制作ログ：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/audience-first-redesign.md

学習資料：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/learning-materials.md

図形・矢印・台本：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/diagram-shapes.md

PowerPointノート・台本の文体：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/speaker-notes.md

画像・図解：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/visuals.md

資料タイプ別方針：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/document-type-policies.md

失敗パターン集：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/ai-failure-patterns.md

品質ルーブリック：
https://raw.githubusercontent.com/silovar-uk/designmd/main/docs/quality-rubric.md

# 最重要方針

旧版を捨てて、いきなり新しいデザインへ置き換えないでください。

先に、旧版が読者へ提供していた理解上の機能を洗い出してください。

制作ブリーフ、ページ役割、構成案、採用理由などの内部情報は制作ログへ残し、読者に必要な理由がない限り本編へ表示しないでください。

箇条書きで十分に伝わる内容を、立派に見せるためだけにカード、アイコン、矢印、シェブロン、図形へ変換しないでください。

# STEP 1：目的と読み手

不足情報がある場合は、`question-blocks.md` に従って逆質問してください。

空欄だけを並べず、旧版と会話から読み取った確定事項、仮説、具体案2〜4案、推奨案、推奨理由を先に示してください。

対話モードでは、ここで一度止まってください。

# STEP 2：読後の変化と旧版の機能保存

新版で読み手の理解・判断・行動がどう変わるべきかを一文で定義してください。

旧版の各ページまたは要素について、次の表を作ってください。

| 旧版の要素 | 読者に与えていた機能 | 削除した場合の損失 | 新版の担当箇所 | 保存状況 |
|---|---|---|---|---|

定義、識別、理由、手順、具体例、変化、失敗条件、判断基準、記憶の手掛かりを確認してください。

新版に担当箇所がない場合は、「整理」ではなく「機能消失」と記録してください。

# STEP 3：中心メッセージ

新版が貫く主張を30字以内で確定し、旧版の主張を維持するのか刷新するのかを明示してください。

# STEP 4：ストーリーライン

構成案を最低3案比較してください。

各案について、旧版から保存する機能、新たに改善する機能、失う可能性がある機能、初心者がつまずく場所、付録や制作ログへ移す情報を示してください。

冒頭、転換点、見せ場、終わり方は `story-design.md` の条件に従って設計してください。

対話モードでは、ここで一度止まってください。

# STEP 5：各ページの役割と台本

各ページについて、次を定義してください。

- 読者向けの役割と主張
- 読者向け見出し
- 使用する具体物
- 旧版から保存する機能
- 新版で改善する機能
- 学習機能
- 本編に表示する情報
- ノート欄へ入れる台本
- 付録へ送る情報
- 制作ログへ残す情報
- 採用する形式

項目が並列で、図形化しても新しい関係が増えない場合は、箇条書きのままにしてください。

## ノート欄の絶対条件

PowerPointの各スライドのノート欄へ、文章形式の読み上げ台本を入れてください。

台本の説明文は、原則として **常体（だ・である調）** で統一してください。

- 「です」「ます」「ございます」を説明文へ残さない
- 「〜しましょう」「〜してください」を不要に使わない
- 常体と敬体を混在させない
- 引用、固有の発話、画面上の原文だけは原文を保持してよい
- 常体にするため報告書のように硬くしない
- 「である」を機械的に連続させない
- 内容は自然な話し言葉にし、語尾を常体へそろえる
- スライド本文をそのまま読み上げない
- 背景、因果、具体例、条件、限界、前後ページへの接続を補う
- 原則として1スライド約1分で話せる量にする。章扉、引用、間のページは短くてよい

敬体が引用以外に一文でも混ざった場合、その台本は未完成として修正してください。

# STEP 6：情報量と4層分離

情報を次へ分けてください。

A. 読者向け本編
B. 発表者用台本
C. 付録・根拠
D. 制作ログ

制作ブリーフ、ページ役割タグ、構成案、参照戦略、採用・不採用理由は、原則として制作ログへ置いてください。

# STEP 7：ビジュアル方針

参照先を骨格、逸脱、時間、固有素材へ分け、借りる操作と借りない外見を示してください。

グリッド、文字階層、余白、色、密度、速度、一つの逸脱ルール、図形と矢印の意味を定義してください。

# STEP 8：代表ページと実寸閲覧

最低限、定義または基本形、プレーンな箇条書き、手順、具体例、変化、失敗条件、判断チェックを試作してください。

30秒テスト、再話テスト、再現テスト、図単独テスト、本文単独テスト、旧版比較テスト、台本の音読テストを行ってください。

スマートフォン1ページ表示、PC 50％表示、A4縮小印刷でも確認してください。

対話モードでは、承認を得るまで全ページを制作しないでください。

# STEP 9：全体制作とAIらしさ除去

代表ページで確定した構造を全体へ展開し、9要因診断と失敗パターン照合を行ってください。

旧版の具体例や手順を削り、見た目だけ整える再設計を避けてください。

# STEP 10：完成度検証

以下を確認してください。

- 旧版の機能保存表があるか
- 新版で理解、判断、行動、再現のいずれかが改善したか
- 図や画像が情報上の仕事をしているか
- 箇条書きを無理にカード化していないか
- 各スライドに文章形式の台本があるか
- ノート欄の説明文が、だ・である調で統一されているか
- 引用以外に「です」「ます」「ございます」が残っていないか
- 台本が不自然に硬くなっていないか
- 台本がスライド本文の読み上げになっていないか
- 重要な視覚情報を台本でも説明しているか

最後に `quality-rubric.md` で採点し、3点以下の軸があれば該当STEPへ戻ってください。

# 最終提出

- 逆質問で提示した案とユーザーの修正
- 旧版の機能保存表
- 本編／台本／付録／制作ログの分離表
- 新版で改善した理解・判断・行動
- 新版で弱化または消失した機能
- 学習機能の配置
- 箇条書きのまま残したページと理由
- 図形へ変換したページと増えた関係
- 代表ページの理解テスト結果
- 実寸閲覧テスト結果
- 各ページの台本（だ・である調）
- 制作ログ
- 品質ルーブリックの採点結果
```
