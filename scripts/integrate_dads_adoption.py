from pathlib import Path
from textwrap import dedent

ROOT = Path(__file__).resolve().parents[1]
MARK = 'dads-adoption-2026-07'
VERSION = '2026.07.15-beta'


def read(path):
    return (ROOT / path).read_text(encoding='utf-8')


def write(path, text):
    (ROOT / path).write_text(text.rstrip() + '\n', encoding='utf-8')


def after(path, anchor, block, marker):
    text = read(path)
    if marker in text:
        return
    if anchor not in text:
        raise RuntimeError(f'{path}: anchor not found: {anchor}')
    write(path, text.replace(anchor, anchor + '\n\n' + block.rstrip(), 1))


def before(path, anchor, block, marker):
    text = read(path)
    if marker in text:
        return
    if anchor not in text:
        raise RuntimeError(f'{path}: anchor not found: {anchor}')
    write(path, text.replace(anchor, block.rstrip() + '\n\n' + anchor, 1))


readme_status = dedent(f'''
<!-- {MARK}:readme-status -->
**Current version:** `{VERSION}`  
**Project status:** beta

`stable`、`beta`、`experimental`、`deprecated`を区別して運用する。詳細は [`docs/governance.md`](docs/governance.md)、変更履歴は [`CHANGELOG.md`](CHANGELOG.md) を参照する。
''')
after('README.md', '> 誰も本気で選んでいないように見える成果物である。', readme_status, f'{MARK}:readme-status')

readme_roles = dedent(f'''
<!-- {MARK}:readme-entry -->
## 役割から入る

| やりたいこと | 最初に読む |
|---|---|
| AIへ依頼する | [`docs/question-blocks.md`](docs/question-blocks.md) → [`docs/project-style-guide.md`](docs/project-style-guide.md) |
| 構成・編集する | [`docs/staged-production.md`](docs/staged-production.md) → [`docs/story-design.md`](docs/story-design.md) |
| 視覚設計・実装する | [`docs/visuals.md`](docs/visuals.md) → [`docs/accessibility.md`](docs/accessibility.md) |
| レビューする | [`docs/quality-rubric.md`](docs/quality-rubric.md) → [`docs/review-checklist.md`](docs/review-checklist.md) |
| 役割と責任を確認する | [`docs/roles-and-responsibility.md`](docs/roles-and-responsibility.md) |

## 共通基盤と案件別スタイルガイド

designmdは、案件をまたいで使う判断基盤である。個別案件の書体、色、余白、語り口、逸脱ルールは [`docs/project-style-guide.md`](docs/project-style-guide.md) で定義する。

> ガイドを使っても、制作・検証・承認は不要にならない。正確性、権利、アクセシビリティ、公開可否の最終責任は案件側が持つ。
''')
before('README.md', '## HTML版', readme_roles, f'{MARK}:readme-entry')

ownership = dedent(f'''
<!-- {MARK}:ownership -->
| 共通基盤と案件別スタイルガイド | [`docs/project-style-guide.md`](docs/project-style-guide.md) |
| アクセシビリティ | [`docs/accessibility.md`](docs/accessibility.md) |
| 役割別入口・責任境界 | [`docs/roles-and-responsibility.md`](docs/roles-and-responsibility.md) |
| 形式選択（experimental） | [`docs/format-selection.md`](docs/format-selection.md) |
| タイポ・余白の目的別判断（experimental） | [`docs/type-spacing-decisions.md`](docs/type-spacing-decisions.md) |
| 版・状態・リリース運用 | [`docs/governance.md`](docs/governance.md) |
''')
after('README.md', '| 学習資料の7段梯子 | [`docs/learning-materials.md`](docs/learning-materials.md) |', ownership, f'{MARK}:ownership')

source = dedent(f'''
<!-- {MARK}:source -->
## 参考・加工表示

デジタル庁デザインシステムウェブサイトの考え方を参考に、designmd向けに編集・加工している。デジタル庁による推奨・監修を意味しない。詳細は [`docs/references/digital-agency-design-system.md`](docs/references/digital-agency-design-system.md) を参照する。
''')
before('README.md', '## 運用上の注意', source, f'{MARK}:source')

rules = dedent(f'''
<!-- {MARK}:rules -->
16. designmdの共通基盤と、案件固有のスタイルガイドを分ける。
17. 新しい規範は、目的、向く場面、注意が必要な場面、例外、検証方法を示す。
18. アクセシビリティを最終検査ではなく、目的・構成・視覚・実装・検証の全工程へ通す。
19. 依頼者、編集者、実装者、レビュアー、AIの責任を分け、最終判断者を明示する。
20. ルールの状態をstable、beta、experimental、deprecatedで区別し、experimentalには評価期限と撤回条件を置く。
''')
after('DESIGN.md', '15. 最終的な採用、棄却、説明責任は人間が持つ。', rules, f'{MARK}:rules')

digest = dedent(f'''
<!-- {MARK}:digest -->
## 14. 共通基盤と案件別スタイルガイド

designmdは制作判断の共通基盤であり、個別案件のブランドや外見を固定するテンプレートではない。案件ごとに、読み手、中心メッセージ、固有素材、語り口、書体、色、余白、グリッド、逸脱ルール、アクセシビリティ条件を短い案件別スタイルガイドへまとめる。事実性、出典、責任、アクセシビリティなどの共通基盤は案件側で上書きしない。詳細は [`docs/project-style-guide.md`](docs/project-style-guide.md) を参照する。

## 15. アクセシビリティ

アクセシビリティは完成後に足す検査ではない。STEP 1で閲覧環境を確認し、構成では意味順序、視覚では色以外の手掛かり、実装では読み順・代替説明・字幕等、最終段階では実寸・読み上げ・操作を確認する。designmdは検討を支援するが、WCAG、JIS、PDF/UA等への適合を保証しない。詳細は [`docs/accessibility.md`](docs/accessibility.md) を参照する。

## 16. 役割と責任

依頼者は目的と最終採否、編集者は原材料と構成、実装者は媒体別の表現とアクセシビリティ、レビュアーは出荷判断を担う。AIは候補・比較・検査を支援するが、権利、倫理、公開可否、規格適合を最終判断しない。詳細は [`docs/roles-and-responsibility.md`](docs/roles-and-responsibility.md) を参照する。

## 17. 形式と数値の選択

箇条書き、カード、見出し、表、画像、図は、見栄えではなく担う仕事で選ぶ。形式判定とタイポグラフィ・余白の目的別数値は現在experimentalである。内容を型へ当てはめる兆候が出た場合は撤回する。詳細は [`docs/format-selection.md`](docs/format-selection.md) と [`docs/type-spacing-decisions.md`](docs/type-spacing-decisions.md) を参照する。

## 18. 版・状態・リリース

現在版は `{VERSION}` である。stable、beta、experimental、deprecatedを区別し、意味のある正典変更はCHANGELOGへ記録する。`docs-v*` タグでMarkdown一式をリリースできる。詳細は [`docs/governance.md`](docs/governance.md) を参照する。
''')
before('DESIGN.md', '## 14. AIへ任せる範囲', digest, f'{MARK}:digest')
text = read('DESIGN.md')
if '## 14. AIへ任せる範囲' in text:
    text = text.replace('## 14. AIへ任せる範囲', '## 19. AIへ任せる範囲', 1)
    text = text.replace('## 15. 最終レビュー', '## 20. 最終レビュー', 1)
    text = text.replace('## 16. 制作ログ', '## 21. 制作ログ', 1)
    write('DESIGN.md', text)

refs = dedent(f'''
<!-- {MARK}:agent-refs -->
- 案件別スタイルガイド：`docs/project-style-guide.md`
- アクセシビリティ：`docs/accessibility.md`
- 役割・責任境界：`docs/roles-and-responsibility.md`
- 形式選択（experimental）：`docs/format-selection.md`
- タイポ・余白判断（experimental）：`docs/type-spacing-decisions.md`
- 版・状態・リリース：`docs/governance.md`
''')
after('AGENTS.md', '- PowerPointノート・読み上げ台本の文体：`docs/speaker-notes.md`', refs, f'{MARK}:agent-refs')

agent_rules = dedent(f'''
<!-- {MARK}:agent-rules -->
- designmdの共通基盤と案件別スタイルガイドを分ける。案件固有の書体、色、余白、語り口を共通ルールとして固定しない。
- 新しい規範には、目的、向く場面、注意が必要な場面、例外、検証方法を含める。
- アクセシビリティをSTEP 1、構成、視覚、実装、最終検証の全工程で確認する。
- designmdやAIが、正確性、法令・権利、アクセシビリティ適合、公開可否を保証するように書かない。
- experimentalな規則は通常ルールと区別し、評価期限、試行範囲、撤回条件を記載する。
- 正典を変更したらVERSION、CHANGELOG、DESIGN.md、README、関連プロンプト、サイトの同期要否を確認する。
''')
before('AGENTS.md', '## 対話できない場合', agent_rules, f'{MARK}:agent-rules')

stage = dedent(f'''
<!-- {MARK}:stage -->
## 全STEPを通す二つの横断条件

### アクセシビリティ

アクセシビリティはSTEP 10だけで確認しない。STEP 1で閲覧環境、STEP 2で代替説明の材料、STEP 4〜6で意味順序と認知負荷、STEP 7で色・文字・余白、STEP 8で読み順・代替テキスト・字幕、STEP 10で実寸・読み上げ・操作を確認する。詳細は [`accessibility.md`](accessibility.md) を参照する。

### 案件別スタイルガイド

designmdの共通基盤を、案件固有の外見へ直接変換しない。STEP 1で仮版を作り、STEP 7で書体・色・余白・グリッド・逸脱・媒体別アクセシビリティを確定し、STEP 8の代表シークエンスで検証する。詳細は [`project-style-guide.md`](project-style-guide.md) を参照する。
''')
before('docs/staged-production.md', '# ステージゲート', stage, f'{MARK}:stage')

visuals = dedent(f'''
<!-- {MARK}:type-spacing -->
## 数値は目的と検証をセットにする

以下の文字サイズ、行長、行間、余白の数値は、固定トークンではなく仮説を始める範囲である。値を選ぶ前に、読み手の行動、閲覧距離・端末、情報の優先順位を決め、実寸で確認する。目的別の試行表は [`type-spacing-decisions.md`](type-spacing-decisions.md) に分離している。この補助表はexperimentalであり、内容を数値へ当てはめる兆候が出た場合は使用を止める。
''')
before('docs/visuals.md', '## タイポグラフィの数値体系', visuals, f'{MARK}:type-spacing')

review = dedent(f'''
<!-- {MARK}:review -->
## 共通基盤・案件別スタイル

- [ ] designmdの共通基盤を、そのまま案件の外見テンプレートにしている
- [ ] 案件別スタイルガイドがなく、書体・色・余白・逸脱の理由を説明できない
- [ ] 新しいルールに、向く場面と注意が必要な場面がない

## アクセシビリティ

- [ ] 色、位置、アニメーションだけで意味を伝えている
- [ ] 見出し・読み順・オブジェクト順が意味と一致していない
- [ ] 画像、図、表、動画の要点に代替説明がない
- [ ] 実寸、白黒、拡大、読み上げ、キーボード等の必要な確認をしていない
- [ ] designmdを使ったことを、規格適合の保証として扱っている

## 役割・責任

- [ ] 目的、権利、公開、最終承認をAIやガイドへ移譲している
- [ ] 誰がアクセシビリティと公開可否を確認するか決まっていない
- [ ] experimentalなルールをstableと同じ強さで適用している
''')
after('docs/review-checklist.md', '各項目を0（問題なし）、1（少し該当）、2（明確に該当）で確認する。点数は検出器ではなく、改善箇所の発見に使う。', review, f'{MARK}:review')

changelog = read('CHANGELOG.md')
entry_marker = f'{MARK}:changelog'
if entry_marker not in changelog:
    entry = dedent(f'''
    <!-- {entry_marker} -->
    ## 2026-07-15：デジタル庁デザインシステムを参考にした運用基盤の追加

    - 共通基盤と案件別スタイルガイドを分離した
    - アクセシビリティを全STEPへ通す正典を追加した
    - 役割別入口と責任境界を追加した
    - 版とstable／beta／experimental／deprecatedの状態管理を追加した
    - 形式選択とタイポ・余白判断をexperimentalとして追加し、3案件での評価・撤回条件を設定した
    - Markdown一式をタグまたは手動でパッケージ化するワークフローを追加した
    - デジタル庁デザインシステムの出典と編集・加工の記録を追加した

    出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/dads/  
    同サイトの考え方をdesignmd向けに編集・加工している。デジタル庁による推奨・監修を意味しない。
    ''')
    first_sep = changelog.find('\n---\n')
    if first_sep == -1:
        changelog = changelog.rstrip() + '\n\n' + entry
    else:
        pos = first_sep + len('\n---\n')
        changelog = changelog[:pos] + '\n' + entry + '\n---\n' + changelog[pos:]
    write('CHANGELOG.md', changelog)

print('integration complete')
