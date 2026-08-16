---
id: japanese-line-breaking
title: 日本語を組む｜改行は意味を編集する
summary: 「改行できる」と「そこで改行したい」を分け、規則・語・意味・リズム・可変幅の順で日本語の折り返しを判断する。
type: guide
area: build
status: experimental
updated_at: 2026-08-16
slug: /guides/build/japanese-line-breaking/
principles: ["keep-decision-owner"]
related: ["content-production", "slide-visual-grammar"]
order: 25
---

> このページは公開用の入口である。詳細な判断基準と実装仕様の正典は [`docs/web-line-composition.md`](https://github.com/silovar-uk/designmd/blob/main/docs/web-line-composition.md) とする。

## 一番大事な区別

**ブラウザが改行できる場所と、読み手にとってそこで改行したい場所は同じではない。**

Unicodeの改行処理は「改行候補」を扱う。実際にどの候補を選ぶかは、幅、文字サイズ、レイアウト、意味、美的判断を含む一段上の仕事になる。

DesignMDでは、改行を「空いた幅に文字を詰める処理」ではなく、**意味を視覚的に編集する行為**として扱う。

## 五層で見る

1. **規則**：禁則や文字単位を守る
2. **語**：短い見出しでは固有名詞、外来語、複合語を不自然に割らない
3. **意味**：文節・フレーズのまとまりを優先する
4. **リズム**：一語だけの最終行、短い行の連続、極端な長短差を確認する
5. **適応**：PCで美しい行末をスマートフォンへ固定しない

```text
避けたい
ユーザーエクスペリエ
ンスを改善する

考えたい
ユーザー体験を
改善する
```

単語を絶対に分割しない、という単純なルールではない。本文と見出しでも強さを変える。

## 収まらないときの順番

「途中で切る」か「文字を小さくする」かの二択にしない。

1. 意味を確認する
2. 文言を短くできるか編集する
3. 幅、余白、列数、配置を見直す
4. 折り返し候補を調整する
5. 必要な場合だけ字間を小さく調整する
6. 短い表示文字だけ、決めた下限まで文字サイズを調整する
7. それでも難しければ一行増やす

**本文は、収めるために縮小しない。**

一方、ヒーロー見出しや短いキャッチコピーでは、意味の途中で割るより、あらかじめ決めた下限まで少し縮小した方がよい場合がある。

## Webでは固定改行を増やさない

PCの見た目だけを理由に `<br>` を増やさない。

短い見出しでは、対応状況を確認しながら次を漸進適用する。

```css
.heading {
  word-break: normal;
  text-wrap: balance;
}

@supports (word-break: auto-phrase) {
  .heading {
    word-break: auto-phrase;
  }
}
```

編集上望ましい任意の境界を示す場合は、強制する `<br>` より `<wbr>` を検討する。

```html
<h1>日本語の改行を<wbr>意味から設計する</h1>
```

固有名詞などを守る `nowrap`、長いURLを救済する `overflow-wrap: anywhere` も、ページ全体ではなく局所的に使う。

## AIへ渡す最小ルール

```text
日本語の改行は、規則 → 語 → 意味 → リズム → 可変幅の順で確認する。
固定の<br>は意味上の理由がある例外だけにする。
短い見出しでは固有名詞、外来語、複合語、文節を不自然に分割しない。
収まらない場合は、意味 → 文言 → 幅・余白・配置 → 折り返し → 字間 → 短い表示文字のサイズ → 行数追加、の順で検討する。
本文を収めるために縮小しない。
320〜1440pxと200％文字拡大で確認する。
```

## この入口をexperimentalにする理由

禁則や改行候補の考え方には既存仕様の根拠がある。一方、どの複合語まで保護するか、文字サイズと行数をどこで入れ替えるかは、媒体、書体、閲覧環境によって変わる。

また、`word-break: auto-phrase` はCSS Text Level 4に含まれる機能であり、対応差を前提に扱う。

2026-11-30までに、Web記事、固定面積の見出し、スライド／HTML資料など複数の媒体で検証し、共通原則へ昇格できるか判断する。

### 修正・撤回条件

- フレーズ保護によってオーバーフローが増える
- 文字サイズ調整が端末ごとの大きな差を生む
- 固有名詞保護が増えすぎ、本文の自然な折り返しを妨げる
- experimentalなCSS機能がないと意味が成立しない

その場合は、「本文は通常の折り返し、短い表示文字だけ人が追加判断する」という最小ルールへ戻す。

## 詳細

- 正典：[`docs/web-line-composition.md`](https://github.com/silovar-uk/designmd/blob/main/docs/web-line-composition.md)
- 実行用：[`prompts/web-line-composition.md`](https://github.com/silovar-uk/designmd/blob/main/prompts/web-line-composition.md)
- W3C「日本語組版処理の要件」：https://www.w3.org/International/jlreq/
- Unicode UAX #14：https://www.unicode.org/reports/tr14/
- W3C CSS Text Module Level 4：https://www.w3.org/TR/css-text-4/
