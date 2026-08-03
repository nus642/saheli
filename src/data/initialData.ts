import { Product, HerbIngredient, BrandMilestone, Certification, ContentPathConfig } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'saheli-organic-henna-227g',
    name: 'Saheli 莎荷丽有机海娜粉 227g',
    subName: '纯海娜粉',
    englishName: 'Organic Henna Powder',
    brand: 'Saheli 莎荷丽',
    category: 'pure-powder',
    price: 70,
    weight: '227g（8oz）',
    tags: ['纯海娜粉', '染发用途'],
    imagePath: '/assets/products/saheli-organic-henna-227g.jpg',
    purchaseUrl: 'https://1kbqzgp9java7z653535rattamnhltb.taobao.com/search.htm?search=y&keyword=Organic%20Henna%20Powder',
    description: '来自印度拉贾斯坦邦索杰特的海娜叶粉，用于植物染发。',
    ingredientOriginal: 'Henna (Lawsonia inermis) leaves powder',
    ingredientsChinese: '海娜（Lawsonia inermis，指甲花）叶粉',
    origin: 'Sojat City, Rajasthan, India',
    usage: '取适量粉末加水调成糊状，静置 2 小时；如有需要再加水调整稠度。仅供外用，使用前进行皮肤测试，并避免接触眼睛。',
    certification: '持证主体 Deepak Industries 的 USDA NOP 证书附录覆盖 Organic Henna；该范围说明仅针对证书附录所列产品，不代表 Saheli 全线产品均获认证。',
  },
  {
    id: 'saheli-soft-black-100g',
    name: 'Saheli 莎荷丽植物染发粉｜自然黑 100g',
    subName: '植物配方色粉',
    englishName: 'Herbal Hair Color - Soft Black',
    brand: 'Saheli 莎荷丽',
    category: 'herbal-color',
    price: 130,
    weight: '100g（50g × 2）',
    tags: ['自然黑', '两个相同配方内袋', '可分次使用'],
    imagePath: '/assets/products/saheli-soft-black-100g.jpg',
    purchaseUrl: 'https://1kbqzgp9java7z653535rattamnhltb.taobao.com/search.htm?search=y&keyword=Herbal%20Hair%20Color%20Soft%20Black',
    description: '两个内袋为相同配方，可根据头发长度和实际用量分次使用。',
    ingredientOriginal: 'Indigo (Indigofera tinctoria) leaves powder; Henna (Lawsonia inermis) leaves powder; Amla (Phyllanthus emblica) fruit powder; Katha (Acacia catechu) powder; Aloe vera (Aloe barbadensis miller) leaf powder',
    ingredientsChinese: '靛蓝叶粉、海娜叶粉、余甘子果粉、儿茶粉、芦荟叶粉',
    usage: '根据头发长度取适量粉末，加入约 40°C 温水调成顺滑糊状；戴手套分层涂抹并戴上塑料帽，60 分钟后用清水洗净。清洗时不用洗发水，不使用吹风机，并预留约 24 小时让颜色逐渐加深。',
    notice: '本产品不能令原本深色或黑色的头发变色。',
  }
];

export const HERB_INGREDIENTS: HerbIngredient[] = [
  {
    id: 'herb-henna',
    chineseName: '指甲花 / 海娜',
    hindiName: 'Mehendi (मेहंदी)',
    latinName: 'Lawsonia Inermis',
    shortDesc: '天然散色素与角蛋白结合，赋予发丝强韧与红铜沉淀基底。',
    fullDesc: '海娜是印度植物染发的灵魂。其叶片中富含的 Lawsones（散色素分子）能渗透毛发角质层，与发丝中的角蛋白形成坚固的氢键结合。它不仅能将白发涂染为温暖的栗红/铜褐色，更能充填受损毛鳞片空隙，使发丝变厚变紧致。',
    keyBenefits: ['天然遮盖白发', '填补发丝空隙修护受损', '增强发丝韧度与光泽', '抑菌止痒调理头皮'],
    hairTypes: ['白发群体', '细软易断发质', '受损发质'],
    colorContribution: '天然红铜色 / 赤褐色（白发显色更亮，黑发显高光红晕）',
    imagePath: '/assets/ingredients/henna-leaf.jpg',
    ayurvedicProperty: '清热降火 (Pitta Pacifying)，收敛定色'
  },
  {
    id: 'herb-indigo',
    chineseName: '木蓝 / 靛蓝',
    hindiName: 'Neel (नील)',
    latinName: 'Indigofera Tinctoria',
    shortDesc: '蓝色有机植物色素，与海娜重叠呈现自然深棕至乌黑。',
    fullDesc: '靛蓝叶在发酵烘干后含有丰富的靛蓝前体。当靛蓝粉遇到温水氧化时，会释放出深蓝色素。在已涂抹海娜的发丝上，蓝色与海娜的红黄色叠加，精准调和成令人惊艳的自然深棕或乌黑发色。',
    keyBenefits: ['中和海娜暖红调', '调配自然黑/深棕', '保护发根坚固', '天然植物防腐'],
    hairTypes: ['希望染深发色人群', '白发较多者'],
    colorContribution: '靛蓝色（与海娜叠加后生成深棕或浓郁深黑）',
    imagePath: '/assets/ingredients/indigo-leaf.jpg',
    ayurvedicProperty: '凉血安神，深层沉淀'
  },
  {
    id: 'herb-amla',
    chineseName: '阿姆拉 / 印度醋栗',
    hindiName: 'Amla (आंवला)',
    latinName: 'Phyllanthus Emblica',
    shortDesc: '高浓度超强抗氧化维C，紧致毛鳞片，加深固色。',
    fullDesc: '阿姆拉被称为印度“圣果”。其丰富的超氧化物歧化酶与天然维生素C能抑制头皮自由基老化。在植物染发泥中加入阿姆拉，能降低海娜过度的红色，使出来的棕色更具质感，且极具锁水抚平毛躁的效果。',
    keyBenefits: ['强化固色，防止褪色', '紧致发丝毛鳞片', '延缓头皮与毛囊衰老', '刺激头皮微循环'],
    hairTypes: ['毛躁干枯发质', '易掉发人群'],
    colorContribution: '不直接显色，但可使海娜色调偏向冷棕沉稳',
    imagePath: '/assets/ingredients/amla-fruit.jpg',
    ayurvedicProperty: '三因平衡 (Tridoshic Balancer)，延缓衰老'
  },
  {
    id: 'herb-cassia',
    chineseName: '决明子 / 无色海娜',
    hindiName: 'Senna / Cassia',
    latinName: 'Cassia Obovata',
    shortDesc: '高光蓬松养发素，抚平受损，不改深色发色。',
    fullDesc: '决明子叶粉富含大黄素与植物黄酮。它具有与海娜相似的调理与丰盈发丝功效，但几乎不带有强烈的染色效果。非常适合黑发或深色发质作为周度深度养发膜使用。',
    keyBenefits: ['高光提亮发丝', '增加细软发蓬松感', '强效水合保湿', '修护抚平毛躁'],
    hairTypes: ['细软塌发质', '油性头皮', '不想改变发色者'],
    colorContribution: '对深色发无显色；对极浅白发呈微亮金黄色',
    imagePath: '/assets/ingredients/cassia-leaf.jpg',
    ayurvedicProperty: '轻盈清爽 (Kapha Balancing)'
  },
  {
    id: 'herb-shikakai',
    chineseName: '刺槐豆 / 无患子',
    hindiName: 'Shikakai (शिककाई)',
    latinName: 'Acacia Concinna',
    shortDesc: '阿育吠陀果实皂苷，低pH值温和清洁，不伤油脂屏障。',
    fullDesc: 'Shikakai在印地语中字面意思即为“发丝之果”。其果荚天然含有温和皂苷，呈天然弱酸性（低pH值），能够在清洁头皮多余油脂的同时，绝不剥离发丝天然角质脂质。',
    keyBenefits: ['天然温和洁发', '不伤头皮皮脂膜', '去屑止痒', '易于冲洗'],
    hairTypes: ['敏感头皮', '植物染发后日常清洁'],
    colorContribution: '无染色功能',
    imagePath: '/assets/ingredients/shikakai-pod.jpg',
    ayurvedicProperty: '温和润泽，去秽清心'
  },
  {
    id: 'herb-bhringraj',
    chineseName: '墨旱莲 / 发丝之王',
    hindiName: 'Bhringraj (भृंगराज)',
    latinName: 'Eclipta Alba',
    shortDesc: '阿育吠陀古法“发丝国王”，深层滋养毛囊与发根。',
    fullDesc: '墨旱莲在古印度文献中享有“Kesharaja”（发丝之王）的美誉。富含黄酮类、茺蔚子碱与多酚，能深入渗透毛囊，活化发根活力，预防发丝早白与稀疏。',
    keyBenefits: ['滋养发根毛囊', '预防发丝早白', '改善发量稀疏', '固发防断'],
    hairTypes: ['脱发困扰者', '白发早生群体'],
    colorContribution: '辅助深发色固色',
    imagePath: '/assets/ingredients/bhringraj-herb.jpg',
    ayurvedicProperty: '滋阴乌发，强基固本'
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
