import assert from 'node:assert/strict';
import test from 'node:test';
import { INITIAL_PRODUCTS } from '../data/initialData';
import { getDefaultVariant, getProductDetails, getProductImageAlt, getTwoStepDyeReminder } from './ProductCatalog';

const hairColor = INITIAL_PRODUCTS.find((product) => product.id === 'saheli-herbal-hair-color-100g');

if (!hairColor || hairColor.kind !== 'variant') throw new Error('Variant product fixture is missing');

test('product detail selection defaults to soft black', () => {
  assert.equal(getDefaultVariant(hairColor)?.id, 'soft-black');
  assert.equal(getProductDetails(hairColor).imagePaths[0], '/assets/products/saheli-soft-black-100g.jpg');
});

test('an invalid default variant deterministically falls back to the first variant', () => {
  const invalidDefaultProduct = { ...hairColor, defaultVariantId: 'not-a-variant' };
  assert.equal(getDefaultVariant(invalidDefaultProduct)?.id, 'soft-black');
  assert.equal(getProductDetails(invalidDefaultProduct).imagePaths[0], '/assets/products/saheli-soft-black-100g.jpg');
});

test('image alt text follows the selected color and image side', () => {
  const softBlack = hairColor.variants.find(({ id }) => id === 'soft-black');
  const darkBrown = hairColor.variants.find(({ id }) => id === 'dark-brown');
  assert.equal(getProductImageAlt(hairColor, softBlack, 0), 'Saheli 莎荷丽植物染发粉 100g｜自然黑正面包装');
  assert.equal(getProductImageAlt(hairColor, darkBrown, 1), 'Saheli 莎荷丽植物染发粉 100g｜深棕背面包装');
});

test('detail selection switches all independent fields to dark brown and back', () => {
  const darkBrown = getProductDetails(hairColor, 'dark-brown');
  assert.equal(darkBrown.price, 130);
  assert.match(darkBrown.imagePaths[0], /dark-brown-front/);
  assert.match(darkBrown.ingredientsChinese, /库拉索芦荟叶粉/);
  assert.match(darkBrown.purchaseUrl, /id=1005023844945/);
  assert.equal(darkBrown.certification, undefined);

  const softBlack = getProductDetails(hairColor, 'soft-black');
  assert.equal(softBlack.imagePaths[0], '/assets/products/saheli-soft-black-100g.jpg');
  assert.equal(softBlack.ingredientsChinese, '靛蓝叶粉、海娜叶粉、余甘子果粉、儿茶粉、芦荟叶粉');
  assert.match(softBlack.purchaseUrl, /Soft%20Black/);
});

test('two-step reminder is limited to color variants and follows the selected color', () => {
  const henna = INITIAL_PRODUCTS.find((product) => product.id === 'saheli-organic-henna-227g');
  const softBlack = hairColor.variants.find(({ id }) => id === 'soft-black');
  const darkBrown = hairColor.variants.find(({ id }) => id === 'dark-brown');
  assert.ok(henna);
  assert.equal(getTwoStepDyeReminder(henna), null);
  assert.match(getTwoStepDyeReminder(hairColor, softBlack) ?? '', /自然黑效果/);
  assert.doesNotMatch(getTwoStepDyeReminder(hairColor, softBlack) ?? '', /深棕效果/);
  assert.match(getTwoStepDyeReminder(hairColor, darkBrown) ?? '', /深棕效果/);
  assert.doesNotMatch(getTwoStepDyeReminder(hairColor, darkBrown) ?? '', /自然黑效果/);
});
