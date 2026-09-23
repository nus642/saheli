import assert from 'node:assert/strict';
import test from 'node:test';
import { KITCHEN_ADDITIVE_GUIDANCE, TWO_STEP_DYE_STEPS } from './PlantHairColorKnowledgePage';

test('two-step guide preserves the verified product instructions', () => {
  assert.equal(TWO_STEP_DYE_STEPS.length, 8);
  assert.ok(TWO_STEP_DYE_STEPS.some((step) => step.includes('静置约 2 小时')));
  assert.ok(TWO_STEP_DYE_STEPS.some((step) => step.includes('约 40°C') && step.includes('立即使用')));
  assert.ok(TWO_STEP_DYE_STEPS.some((step) => step.includes('不使用洗发水') && step.includes('不使用吹风机')));
  assert.ok(TWO_STEP_DYE_STEPS.some((step) => step.includes('约 24 小时')));
});

test('kitchen additives are not presented as the standard recipe', () => {
  assert.deepEqual(KITCHEN_ADDITIVE_GUIDANCE.map(({ name }) => name), ['柠檬汁／醋', '茶', '咖啡', '酸奶']);
  assert.equal(KITCHEN_ADDITIVE_GUIDANCE.some(({ advice }) => /推荐添加/.test(advice)), false);
});
