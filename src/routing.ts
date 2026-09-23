export const KNOWLEDGE_PATH = '/plant-hair-color-guide';

export const DEFAULT_PAGE_METADATA = {
  title: '莎荷丽 Saheli｜印度植物染发',
  description: '以莎荷丽为主，汇集染得好与阿育，分享来自印度的植物染发产品、成分知识与使用方法。',
  path: '/',
} as const;

export const KNOWLEDGE_PAGE_METADATA = {
  title: '植物染发知识与白发两段染指南｜莎荷丽 Saheli',
  description: '了解纯海娜底染、自然黑与深棕第二段的使用区别，以及植物染发的科学依据、常见偏方和操作边界。',
  path: KNOWLEDGE_PATH,
} as const;

export function getInitialTab(pathname: string): string {
  return pathname.replace(/\/$/, '') === KNOWLEDGE_PATH ? 'knowledge' : 'home';
}

export function getPathForTab(tab: string): string {
  return tab === 'knowledge' ? KNOWLEDGE_PATH : '/';
}

export function getPageMetadata(tab: string) {
  return tab === 'knowledge' ? KNOWLEDGE_PAGE_METADATA : DEFAULT_PAGE_METADATA;
}
