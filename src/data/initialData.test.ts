import assert from 'node:assert/strict';
import test from 'node:test';
import { INITIAL_PRODUCTS } from './initialData';

const henna = INITIAL_PRODUCTS.find((product) => product.id === 'saheli-organic-henna-227g');
const hairColor = INITIAL_PRODUCTS.find((product) => product.id === 'saheli-herbal-hair-color-100g');

test('catalog contains henna and one herbal hair color product', () => {
  assert.equal(INITIAL_PRODUCTS.length, 2);
  assert.equal(henna?.kind, 'standalone');
  assert.equal(hairColor?.kind, 'variant');
});

test('hair color offers only soft black and dark brown and defaults to soft black', () => {
  assert.equal(hairColor?.kind, 'variant');
  if (hairColor?.kind !== 'variant') return;
  assert.equal(hairColor.defaultVariantId, 'soft-black');
  assert.deepEqual(hairColor.variants.map(({ id }) => id), ['soft-black', 'dark-brown']);
  assert.equal(hairColor.variants.some((variant) => /natural brown|自然棕/i.test(`${variant.colorName} ${variant.colorEnglishName}`)), false);
});

test('dark brown has independent price, images, ingredients, purchase link, and no certification', () => {
  assert.equal(hairColor?.kind, 'variant');
  if (hairColor?.kind !== 'variant') return;
  const darkBrown = hairColor.variants.find((variant) => variant.id === 'dark-brown');
  assert.equal(darkBrown?.price, 130);
  assert.deepEqual(darkBrown?.imagePaths, [
    '/assets/products/saheli-herbal-hair-color-dark-brown-front.jpg',
    '/assets/products/saheli-herbal-hair-color-dark-brown-back.jpg',
  ]);
  assert.match(darkBrown?.ingredientsChinese ?? '', /库拉索芦荟叶粉/);
  assert.match(darkBrown?.purchaseUrl ?? '', /id=1005023844945/);
  assert.equal(darkBrown?.certification, undefined);
});

test('soft black keeps its verified data boundary when selected again', () => {
  assert.equal(hairColor?.kind, 'variant');
  if (hairColor?.kind !== 'variant') return;
  const softBlack = hairColor.variants.find((variant) => variant.id === hairColor.defaultVariantId);
  assert.equal(softBlack?.price, 130);
  assert.deepEqual(softBlack?.imagePaths, ['/assets/products/saheli-soft-black-100g.jpg']);
  assert.equal(softBlack?.ingredientsChinese, '靛蓝叶粉、海娜叶粉、余甘子果粉、儿茶粉、芦荟叶粉');
  assert.match(softBlack?.purchaseUrl ?? '', /Soft%20Black/);
  assert.equal(softBlack?.certification, undefined);
});

test('henna details and purchase link remain unchanged', () => {
  assert.equal(henna?.kind, 'standalone');
  if (henna?.kind !== 'standalone') return;
  assert.equal(henna.price, 70);
  assert.deepEqual(henna.imagePaths, ['/assets/products/saheli-organic-henna-227g.jpg']);
  assert.match(henna.purchaseUrl, /Organic%20Henna%20Powder/);
  assert.match(henna.certification ?? '', /Deepak Industries/);
});
