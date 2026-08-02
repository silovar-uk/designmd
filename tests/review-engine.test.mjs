import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { evaluateReview, resultToMarkdown } from '../src/scripts/review-engine.js';

const reviewData = JSON.parse(fs.readFileSync(new URL('../data/review-rules.json', import.meta.url), 'utf8'));

test('Criticalが一件あれば公開停止になる', () => {
  const result = evaluateReview(['recovery.preserve-input'], reviewData);
  assert.equal(result.blocked, true);
  assert.equal(result.returnTo, 'recovery');
});

test('最も上流の工程を戻り先にする', () => {
  const result = evaluateReview(['expression.line-rhythm', 'define.reader', 'evidence.fact-source'], reviewData);
  assert.equal(result.returnTo, 'define');
});

test('同じ修正案を重複させない', () => {
  const result = evaluateReview(['evidence.fact-source', 'evidence.fact-source'], reviewData);
  assert.equal(result.remediations.length, 1);
});

test('Markdownに対象と判定を含める', () => {
  const result = evaluateReview(['interaction.visible-state'], reviewData);
  const markdown = resultToMarkdown(result, reviewData, 'アプリ');
  assert.match(markdown, /対象：アプリ/);
  assert.match(markdown, /操作・状態へ戻る/);
});
