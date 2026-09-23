import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import {
  DEFAULT_PAGE_METADATA,
  KNOWLEDGE_PAGE_METADATA,
  KNOWLEDGE_PATH,
  getInitialTab,
  getPageMetadata,
  getPathForTab,
} from '../routing';

test('knowledge guide has a stable public path that survives refresh', () => {
  assert.equal(getInitialTab(KNOWLEDGE_PATH), 'knowledge');
  assert.equal(getInitialTab(`${KNOWLEDGE_PATH}/`), 'knowledge');
  assert.equal(getPathForTab('knowledge'), KNOWLEDGE_PATH);
});

test('unknown and existing state-only views safely fall back to the home path', () => {
  assert.equal(getInitialTab('/'), 'home');
  assert.equal(getInitialTab('/unknown'), 'home');
  assert.equal(getPathForTab('products'), '/');
});

test('knowledge guide owns distinct search and sharing metadata', () => {
  assert.equal(getPageMetadata('home'), DEFAULT_PAGE_METADATA);
  assert.equal(getPageMetadata('knowledge'), KNOWLEDGE_PAGE_METADATA);
  assert.match(KNOWLEDGE_PAGE_METADATA.title, /两段染指南/);
  assert.match(KNOWLEDGE_PAGE_METADATA.description, /纯海娜底染/);
});

test('the public knowledge entry exposes metadata without requiring JavaScript', () => {
  const html = readFileSync(new URL('../../plant-hair-color-guide/index.html', import.meta.url), 'utf8');
  assert.match(html, /<title>植物染发知识与白发两段染指南｜莎荷丽 Saheli<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/hairdye\.cn\/plant-hair-color-guide"/);
  assert.match(html, /property="og:image" content="https:\/\/hairdye\.cn\/assets\/guides\/saheli-two-step-dye-guide\.jpg"/);
});
