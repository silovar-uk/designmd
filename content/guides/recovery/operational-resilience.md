---
id: operational-resilience
title: 立て直す｜中断、障害、回復
summary: 失敗を知らせるだけでなく、残ったものと再開方法を示す。
type: guide
area: recovery
status: experimental
updated_at: 2026-08-02
slug: /guides/recovery/operational-resilience/
principles: ["preserve-input", "return-control", "design-recovery", "keep-provenance"]
related: ["system-interaction", "evidence-data-ai", "review-tool"]
order: 40
---

## 回復可能性を設計する

エラー表示だけでは回復にならない。

- 何が成功したか
- 何が失敗したか
- 入力やデータは残っているか
- どこから再開できるか
- 再試行できるか
- 別経路があるか
- 通常運用へ戻す条件は何か

を示す。

## 通常運用と例外運用を分ける

配信、イベント、データ取込、外部サービス利用では、通常手順だけでなく、通信障害、権限不足、仕様変更、担当不在時の経路を用意する。

## 外部サービス依存の文書

手順書には、最終確認日、確認した画面、公式情報、変更されやすい箇所、更新トリガー、文書所有者を持たせる。

スクリーンショットどおりに押すだけでなく、各操作の目的と判断基準を残す。

## 状況別の発信

危機や障害の文章は、発生確認、調査中、被害確認、復旧中、通常運用移行の状態別に管理する。確定していない情報を完成文らしさのために断定しない。
