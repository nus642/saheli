import { Product, HerbIngredient, BrandMilestone, Certification, ContentPathConfig } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    kind: 'standalone',
    id: 'saheli-organic-henna-227g',
    name: 'Saheli 莎荷丽有机海娜粉 227g',
    subName: '纯海娜粉',
    englishName: 'Organic Henna Powder',
    brand: 'Saheli 莎荷丽',
    category: 'pure-powder',
    price: 70,
    weight: '227g（8oz）',
    tags: ['纯海娜粉', '染发用途'],
    imagePaths: ['/assets/products/saheli-organic-henna-227g.jpg'],
    purchaseUrl: 'https://1kbqzgp9java7z653535rattamnhltb.taobao.com/search.htm?search=y&keyword=Organic%20Henna%20Powder',
    description: '来自印度拉贾斯坦邦索杰特的海娜叶粉，用于植物染发。',
    ingredientOriginal: 'Henna (Lawsonia inermis) leaves powder',
    ingredientsChinese: '海娜（Lawsonia inermis，指甲花）叶粉',
    origin: 'Sojat City, Rajasthan, India',
    usage: '取适量粉末加水调成糊状，静置 2 小时；如有需要再加水调整稠度。仅供外用，使用前进行皮肤测试，并避免接触眼睛。',
    certification: '持证主体 Deepak Industries 的 USDA NOP 证书附录覆盖 Organic Henna；该范围说明仅针对证书附录所列产品，不代表 Saheli 全线产品均获认证。',
  },
  {
    kind: 'variant',
    id: 'saheli-herbal-hair-color-100g',
    name: 'Saheli 莎荷丽植物染发粉 100g',
    subName: '植物配方染发粉',
    englishName: 'Saheli Herbal Hair Color 100g',
    brand: 'Saheli 莎荷丽',
    category: 'herbal-color',
    weight: '100g（50g × 2）',
    tags: ['自然黑 Soft Black', '深棕 Dark Brown'],
    defaultVariantId: 'soft-black',
    variants: [
      {
        id: 'soft-black',
        colorName: '自然黑',
        colorEnglishName: 'Soft Black',
        packagingEnglishName: 'Herbal Hair Color - Soft Black',
        price: 130,
        imagePaths: ['/assets/products/saheli-soft-black-100g.jpg'],
        purchaseUrl: 'https://1kbqzgp9java7z653535rattamnhltb.taobao.com/search.htm?search=y&keyword=Herbal%20Hair%20Color%20Soft%20Black',
        description: '两个内袋为相同配方，可根据头发长度和实际用量分次使用。',
        ingredientOriginal: 'Indigo (Indigofera tinctoria) leaves powder; Henna (Lawsonia inermis) leaves powder; Amla (Phyllanthus emblica) fruit powder; Katha (Acacia catechu) powder; Aloe vera (Aloe barbadensis miller) leaf powder',
        ingredientsChinese: '靛蓝叶粉、海娜叶粉、余甘子果粉、儿茶粉、芦荟叶粉',
        usage: '根据头发长度取适量粉末，加入约 40°C 温水调成顺滑糊状；戴手套分层涂抹并戴上塑料帽，60 分钟后用清水洗净。清洗时不用洗发水，不使用吹风机，并预留约 24 小时让颜色逐渐加深。',
        notice: '本产品不能令原本深色或黑色的头发变色。',
      },
      {
        id: 'dark-brown',
        colorName: '深棕',
        colorEnglishName: 'Dark Brown',
        packagingEnglishName: 'Saheli Pure Origins Herbal Hair Color — Dark Brown',
        price: 130,
        imagePaths: [
          '/assets/products/saheli-herbal-hair-color-dark-brown-front.jpg',
          '/assets/products/saheli-herbal-hair-color-dark-brown-back.jpg',
        ],
        purchaseUrl: 'https://item.taobao.com/item.htm?id=1005023844945&mi_id=0000FCC3o_6UuxvVeLxsRHTzar6jG0_9MLvfss8_82lFvbM&spm=a21xtw.29978516.0.0&xxc=shop',
        description: '植物配方染发粉，净含量 100g（50g × 2）。生产商：Deepak Industries；地址：Khasra 1340, Dhinawas Road, Sojat City - 306104 (Raj.), India；原产国：印度。',
        ingredientOriginal: 'Indigo (Indigofera tinctoria) leaves powder; Henna (Lawsonia inermis) leaves powder; Amla (Phyllanthus emblica) fruit powder; Katha (Acacia catechu) powder; Aloe vera (Aloe barbadensis miller) leaf powder.',
        ingredientsChinese: '靛蓝叶粉、海娜叶粉、余甘子果粉、儿茶粉、库拉索芦荟叶粉。',
        origin: '印度',
        usage: '1. 按头发长度将适量粉末倒入碗中。2. 加入约 40°C 温水，充分搅拌成顺滑糊状。3. 戴上手套，用刷子分层从发根涂至发梢。4. 戴上塑料帽覆盖头部。5. 60 分钟后清洗。',
        notice: '清洗时不要使用洗发水；不要使用吹风机吹干；颜色需要约 24 小时加深；对深色或黑色头发不起作用。',
      },
    ],
  },
];

export const HERB_INGREDIENTS: HerbIngredient[] = [
  {
    id: 'herb-henna',
    chineseName: '指甲花 / 海娜',
    hindiName: 'Mehendi (मेहंदी)',
    latinName: 'Lawsonia Inermis',
    shortDesc: '植物染发配方中用于提供暖红铜色调的海娜叶粉。',
    fullDesc: '海娜叶粉是植物染发配方中的常见着色原料，可提供暖红铜至赤褐色调。实际显色会因原始发色、配方比例及使用方法而不同。',
    keyBenefits: ['提供暖红铜色调', '可作为植物配色基底', '可与其他植物粉调配', '实际显色因使用条件而异'],
    hairTypes: ['暖红铜色调', '赤褐色调', '植物配色基底'],
    colorContribution: '提供暖红铜至赤褐色调',
    imagePath: '/assets/ingredients/henna-leaf.jpg',
    ayurvedicProperty: '植物染发配方中的暖色着色原料'
  },
  {
    id: 'herb-indigo',
    chineseName: '木蓝 / 靛蓝',
    hindiName: 'Neel (नील)',
    latinName: 'Indigofera Tinctoria',
    shortDesc: '植物染发配方中用于提供蓝色并调整深色调的木蓝叶粉。',
    fullDesc: '木蓝叶粉在植物染发配方中提供蓝色调。与海娜等暖色植物粉按不同比例调配时，可用于调整最终色调；实际显色以具体商品说明为准。',
    keyBenefits: ['提供蓝色调', '用于调整海娜的暖色调', '可参与深色调配', '实际比例以商品说明为准'],
    hairTypes: ['蓝色调', '降低暖红感', '深色调配'],
    colorContribution: '提供蓝色调；与暖色植物粉组合时可用于调配深色',
    imagePath: '/assets/ingredients/indigo-leaf.jpg',
    ayurvedicProperty: '植物染发配方中的冷色调配原料'
  },
  {
    id: 'herb-amla',
    chineseName: '阿姆拉 / 印度醋栗',
    hindiName: 'Amla (आंवला)',
    latinName: 'Phyllanthus Emblica',
    shortDesc: '植物染发配方中用于辅助调整海娜暖色调的果粉。',
    fullDesc: '阿姆拉果粉可作为植物染发配方中的调配原料，用于辅助调整海娜呈现的暖红色调。具体用量与使用方法以商品包装说明为准。',
    keyBenefits: ['辅助调整暖红色调', '作为复方植物粉原料', '可与海娜配方组合', '用量以商品说明为准'],
    hairTypes: ['调整暖红色调', '复方植物配色'],
    colorContribution: '不直接显色，但可使海娜色调偏向冷棕沉稳',
    imagePath: '/assets/ingredients/amla-fruit.jpg',
    ayurvedicProperty: '植物染发配方中的辅助调色原料'
  },
  {
    id: 'herb-cassia',
    chineseName: '决明子 / 无色海娜',
    hindiName: 'Senna / Cassia',
    latinName: 'Cassia Obovata',
    shortDesc: '在植物粉配方中作为浅色调配原料，通常不用于提供深色。',
    fullDesc: '决明子叶粉可作为植物粉配方中的调配原料。其色泽贡献较浅，实际呈色取决于原始发色、配方比例与使用方法。',
    keyBenefits: ['作为植物粉调配原料', '色泽贡献较浅', '不用于提供深色', '实际呈色因使用条件而异'],
    hairTypes: ['浅色调配', '低显色配方'],
    colorContribution: '对深色发无显色；对极浅白发呈微亮金黄色',
    imagePath: '/assets/ingredients/cassia-leaf.jpg',
    ayurvedicProperty: '植物粉配方中的浅色调配原料'
  },
  {
    id: 'herb-shikakai',
    chineseName: '刺槐豆 / 无患子',
    hindiName: 'Shikakai (शिककाई)',
    latinName: 'Acacia Concinna',
    shortDesc: '可见于植物粉配方中的刺槐果荚粉原料。',
    fullDesc: 'Shikakai（Acacia Concinna）是植物粉配方中使用的一种果荚粉原料。本页仅说明其原料身份，不对其护理或清洁功效作出承诺。',
    keyBenefits: ['植物果荚粉原料', '可用于复方植物粉', '本身不作为着色原料介绍', '具体用途以商品说明为准'],
    hairTypes: ['复方植物粉原料', '无染色角色'],
    colorContribution: '无染色功能',
    imagePath: '/assets/ingredients/shikakai-pod.jpg',
    ayurvedicProperty: '复方植物粉中的原料之一'
  },
  {
    id: 'herb-bhringraj',
    chineseName: '墨旱莲 / 发丝之王',
    hindiName: 'Bhringraj (भृंगराज)',
    latinName: 'Eclipta Alba',
    shortDesc: '可见于复方植物粉中的墨旱莲原料。',
    fullDesc: '墨旱莲（Eclipta Alba）可作为复方植物粉中的一种原料。本页仅说明其原料身份与一般配方角色。',
    keyBenefits: ['复方植物粉原料', '可与其他植物粉组合', '不单独承诺染色效果', '具体用途以商品说明为准'],
    hairTypes: ['复方植物粉原料', '辅助配方角色'],
    colorContribution: '不单独承诺显色效果',
    imagePath: '/assets/ingredients/bhringraj-herb.jpg',
    ayurvedicProperty: '复方植物粉中的原料之一'
  }
];

export const BRAND_MILESTONES: BrandMilestone[] = [
  {
    year: '1978',
    title: 'Deepak Industries 企业基础建立',
    description: 'Deepak Industries 的企业历史始于 1978 年；这一年份并非 Saheli 品牌的创立年份。'
  },
  {
    year: '1990',
    title: 'Saheli 品牌开始发展',
    description: 'Saheli 品牌在印度 Rajasthan 的 Sojat 开始发展，专注海娜及草本护理产品。'
  },
  {
    year: '今日',
    title: '稳定的自有生产基础',
    description: '官方 Brand Deck 记载 Deepak Industries 拥有两家自有工厂，总建筑面积约 36,000 平方英尺，年产能约 1,200 MT。'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'USDA National Organic Program',
    agency: '认证机构：Ecocert SAS',
    badgeText: 'Deepak Industries · USDA NOP',
    description: 'Saheli 的经营主体 Deepak Industries 经 Ecocert 审核，获得美国 USDA National Organic Program 有机认证。认证范围覆盖证书附录所列的海娜粉、靛蓝粉及多种草本植物产品。',
    iconName: 'ShieldCheck',
    holder: 'Deepak Industries',
    standard: 'USDA Organic Regulations, 7 CFR Part 205',
    certificateNumber: '267101/202510280952',
    operationId: '7880267101',
    firstCertified: '2023年11月24日',
    issued: '2025年10月28日',
    scope: 'Handling / Processing',
    verificationUrl: 'https://organic.ams.usda.gov/integrity/CP/OPP?cid=24&nopid=7880267101'
  }
];

export const DEFAULT_PATH_CONFIG: ContentPathConfig = {
  productImagePathBase: '/assets/images/products/',
  ingredientImagePathBase: '/assets/images/ingredients/',
  brandStoryImagePathBase: '/assets/images/brand/',
  customProducts: INITIAL_PRODUCTS,
  lastUpdated: new Date().toISOString().split('T')[0]
};
