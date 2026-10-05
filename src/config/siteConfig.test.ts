import assert from 'node:assert/strict';
import test from 'node:test';
import { siteConfig } from './siteConfig';

test('publishes the same number for phone and WeChat contact', () => {
  assert.equal(siteConfig.contact.phone, '16698001319');
  assert.equal(siteConfig.contact.wechat, siteConfig.contact.phone);
  assert.equal(siteConfig.contact.displayPhone.replaceAll(' ', ''), siteConfig.contact.phone);
});
