import test from 'node:test';
import assert from 'node:assert/strict';
import { markdownToHtml, parseFrontMatter, sitePath } from '../scripts/lib.mjs';

test('basePathとslugを重複スラッシュなしで結合する', () => {
  assert.equal(sitePath('/designmd/site-next/', '/guides/test/'), '/designmd/site-next/guides/test/');
});

test('front matterを読み取る', () => {
  const parsed = parseFrontMatter('---\nid: sample\nitems: ["a", "b"]\n---\n\n本文', 'sample.md');
  assert.equal(parsed.data.id, 'sample');
  assert.deepEqual(parsed.data.items, ['a', 'b']);
  assert.equal(parsed.body, '本文');
});

test('Markdownの見出しと箇条書きをHTML化する', () => {
  const html = markdownToHtml('## 見出し\n\n- A\n- B');
  assert.match(html, /<h2 id="見出し">/);
  assert.match(html, /<ul><li>A<\/li><li>B<\/li><\/ul>/);
});
