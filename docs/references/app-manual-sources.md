# アプリ設計・Wordマニュアルの参照記録

> 最終更新：2026-07-21

この文書は、[`app-design.md`](../app-design.md)と[`manual.md`](../manual.md)の判断根拠を記録する。外見の模倣ではなく、設計原則、操作、アクセシビリティ、文書構造を借りる。

## 1. デジタル庁デザインシステム

- https://design.digital.go.jp/dads/
- https://design.digital.go.jp/dads/guidance/design-system/
- https://design.digital.go.jp/dads/guidance/style-guides/
- https://design.digital.go.jp/dads/guidance/accessibility/

### 借りるもの

- デザインシステムを機械的な生成規則ではなく、判断と共同作業を支える仕組みとして扱う
- 共通基盤と、個別サービス・案件のスタイルガイドを分ける
- アクセシビリティを後工程の確認ではなく、設計の前提へ置く
- 一貫性を、同じ外見の反復ではなく学習可能性と操作予測へ使う

### 借りないもの

- 行政サービス向けの外見を、そのまま個人アプリへ移植すること
- 提供コンポーネントを、要件確認なしに並べること

## 2. Apple Human Interface Guidelines

- https://developer.apple.com/design/human-interface-guidelines/design-principles
- https://developer.apple.com/design/human-interface-guidelines/feedback
- https://developer.apple.com/design/human-interface-guidelines/motion
- https://developer.apple.com/design/human-interface-guidelines/gestures

### 借りるもの

- 操作結果を予測できる明確なフィードバック
- 状態、移動、結果を説明するモーション
- ジェスチャー中にも結果を予測できる反応
- 頻繁な操作を邪魔しない簡潔な応答

### 借りないもの

- Apple製品固有の見た目、角丸、素材、画面遷移の模倣
- 流体的な動き自体を品質の証明にすること

## 3. Material Design

- https://m3.material.io/styles/motion/overview

### 借りるもの

- モーションを空間関係、機能、意図、連続性の説明へ使う
- 変化の起点と行き先を見せる
- 操作結果の理解を助ける時間設計

### 借りないもの

- Materialのコンポーネント外観を案件へ自動適用すること
- すべての変化へ同じイージングや移動を使うこと

## 4. Microsoft Word / Microsoft 365

- https://support.microsoft.com/en-US/accessibility/word/make-your-word-documents-accessible-to-people-with-disabilities
- https://support.microsoft.com/en-us/office/making-documents-accessible-fe0961bd-11f4-4c9a-8894-e8957be3e42f
- https://support.microsoft.com/en-us/office/use-styles-in-word-for-the-web-ec9b0f9e-a4ae-43a1-b861-dd50747410bb

### 借りるもの

- 組み込み見出しスタイルによる文書構造
- ナビゲーションウィンドウと自動目次
- 色だけに依存しない情報伝達
- 画像の代替説明、分かるリンク名、アクセシビリティチェック
- スタイルによる書式の一括管理

### 借りないもの

- Wordの既定テーマを、そのまま案件のデザイン判断とすること
- 色、網掛け、SmartArtを使うこと自体を分かりやすさと考えること

## 5. 過去案件からの固有判断

### アプリ

- Flowmap：キャンバスはB｜作業台。パン、範囲選択、追加の操作を競合させない
- プロンプト検索：スマートフォンは検索から3〜5件へ絞り、コピーまでを短くする
- 学習アプリ：全機能を見せず、次の一手を先に示す
- メモ拡張：状態がないときはバッジを出さず、開いている数だけ表示する
- 文字起こし系：不要な開始アラートや閉じる操作を減らし、処理中だけは明示する

### マニュアル

- 網羅的な分類より、実際に起きた事故を優先する
- 確認されていない運用ルールを補わない
- 本文、表、チェックリストの三重化を避ける
- 危険な工程だけ説明を濃くする
- 部署・役割と現在の個人窓口を分ける
- 例外時の過去事例を組織の記憶として残す
- リンクや連絡先を使用箇所の近くへ置く
- 現場のコメントが示す重みを、整文で消さない

## 6. 統合した中心原則

```text
実用を成立させる
  ↓
現在地、次の行動、結果を見せる
  ↓
入力と出力の往復を短くする
  ↓
事故、例外、判断を外部化する
  ↓
一つのWAOで期待を上振れさせる
```

アプリでもマニュアルでも、均等に整えることを目的にしない。人が実際に迷う場所、判断する場所、事故が起きる場所へ情報と強調を集中する。
