import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { KITCHEN_ADDITIVE_GUIDANCE, TWO_STEP_DYE_STEPS } from './PlantHairColorKnowledgePage';

test('two-step guide preserves the verified product instructions', () => {
  assert.equal(TWO_STEP_DYE_STEPS.length, 8);
  assert.ok(TWO_STEP_DYE_STEPS.some((step) => step.includes('静置约 2 小时')));
  assert.ok(TWO_STEP_DYE_STEPS.some((step) => step.includes('约 40°C') && step.includes('本站建议')));
  assert.ok(TWO_STEP_DYE_STEPS.some((step) => step.includes('不使用洗发水') && step.includes('不使用吹风机')));
  assert.ok(TWO_STEP_DYE_STEPS.some((step) => step.includes('约 24 小时')));
  assert.match(TWO_STEP_DYE_STEPS[2], /没有标明上头停留时间/);
  assert.doesNotMatch(TWO_STEP_DYE_STEPS[2], /\d+\s*(分钟|小时)/);
});

test('kitchen additives are not presented as the standard recipe', () => {
  assert.deepEqual(KITCHEN_ADDITIVE_GUIDANCE.map(({ name }) => name), ['柠檬汁／醋', '茶', '咖啡', '酸奶']);
  assert.equal(KITCHEN_ADDITIVE_GUIDANCE.some(({ advice }) => /推荐添加/.test(advice)), false);
});

test('legacy unverified recipes cannot return to retained guide components', () => {
  const sourceFiles = ['PlantHairColorKnowledgePage.tsx', 'UsageGuideModal.tsx', 'ShadeCalculatorModal.tsx'];
  const publishedGuidance = sourceFiles.map((file) => readFileSync(new URL(file, import.meta.url), 'utf8')).join('\n');
  const forbiddenRecipePhrases = [
    '60°C', '55°C', '红茶水', '黑咖啡水', '蜂蜜水', '半个柠檬', '少许盐', '加盐固色',
    '吹至 8 成干', '2-3 小时', '2~3 小时', '48-72 小时', '72h', '养发SPA', '最高盖白率', '极致盖白',
  ];
  for (const phrase of forbiddenRecipePhrases) assert.equal(publishedGuidance.includes(phrase), false, `forbidden recipe phrase: ${phrase}`);
});
