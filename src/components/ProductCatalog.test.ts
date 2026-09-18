import assert from 'node:assert/strict';
import test from 'node:test';
import { INITIAL_PRODUCTS } from '../data/initialData';
import { getDefaultVariant, getProductDetails } from './ProductCatalog';

const hairColor = INITIAL_PRODUCTS.find((product) => product.id === 'saheli-herbal-hair-color-100g');

if (!hairColor || hairColor.kind !== 'variant') throw new Error('Variant product fixture is missing');

test('product detail selection defaults to soft black', () => {
  assert.equal(getDefaultVariant(hairColor)?.id, 'soft-black');
  assert.equal(getProductDetails(hairColor).imagePaths[0], '/assets/products/saheli-soft-black-100g.jpg');
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
