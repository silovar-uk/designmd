import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const data = JSON.parse(await fs.readFile(path.join(root, 'data/knowledge-map.json'), 'utf8'));
const publicData = JSON.parse(await fs.readFile(path.join(root, 'site/knowledge-map.json'), 'utf8'));

const ids = (items) => items.map((item) => item.id);
const unique = (items) => new Set(items).size === items.length;

test('公開用と正典の知識地図データが一致する', () => {
  assert.deepEqual(publicData, data);
});

test('場所・地区・散歩道・PackのIDが一意である', () => {
  assert.ok(unique(ids(data.places)));
  assert.ok(unique(ids(data.topics)));
  assert.ok(unique(ids(data.routes)));
  assert.ok(unique(ids(data.packs)));
});

test('ページの住所、地区、関係先が存在する', () => {
  const placeIds = new Set(ids(data.places));
  const topicIds = new Set(ids(data.topics));
  const contentIds = new Set(Object.keys(data.content));

  for (const [id, item] of Object.entries(data.content)) {
    assert.ok(placeIds.has(item.home), `${id}: unknown home ${item.home}`);
    assert.ok(item.topics.length >= 1 && item.topics.length <= 4, `${id}: topics must contain 1-4 items`);
    for (const topic of item.topics) assert.ok(topicIds.has(topic), `${id}: unknown topic ${topic}`);
    assert.ok(item.use_when?.length, `${id}: use_when is required`);
    assert.ok(item.avoid_when?.length, `${id}: avoid_when is required`);
    for (const targets of Object.values(item.relations ?? {})) {
      for (const target of targets) assert.ok(contentIds.has(target), `${id}: unknown relation target ${target}`);
    }
  }
});

test('散歩道とContext Packの参照先が存在する', () => {
  const topicIds = new Set(ids(data.topics));
  const contentIds = new Set(Object.keys(data.content));

  for (const route of data.routes) {
    for (const topic of route.topics) assert.ok(topicIds.has(topic), `${route.id}: unknown topic ${topic}`);
    assert.ok(route.stops.length >= 2, `${route.id}: route requires at least two stops`);
    for (const stop of route.stops) {
      assert.ok(stop.url || contentIds.has(stop.id), `${route.id}: unknown stop ${stop.id ?? '(empty)'}`);
    }
  }

  for (const pack of data.packs) {
    for (const id of [...pack.primary, ...pack.examples]) {
      assert.ok(contentIds.has(id), `${pack.id}: unknown content ${id}`);
    }
  }
});
