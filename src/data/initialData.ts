import { Product, HerbIngredient, BrandMilestone, Certification, ContentPathConfig } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-henna-01',
    name: 'Saheli 经典特级红海娜粉',
    subName: '100% 纯指甲花叶粉 (Lawsonia Inermis)',
    englishName: 'Pure Organic Sojat Henna Powder',
    category: 'powder',
    price: 88,
    originalPrice: 118,
    weight: '250g / 包',
    tags: ['白发转铜红/棕色底', '100%有机', '三道超细研磨'],
    imagePath: '/assets/products/saheli-henna-pure.jpg',
    shadeColorHex: '#B84A28',
    description: '选用印度拉贾斯坦邦索杰特（Sojat）核心产区头采指甲花叶，经历三道低温研磨与精细筛滤，散色素（Lawsones）含量高达 2.8%+。滋养头发鳞片，赋予白发自然栗红铜色，强化发丝粗度与韧性。',
    suitableFor: ['遮盖白发', '修护烫染受损发质', '头皮油脂调理', '搭配靛蓝调配深发色'],
    ingredients: ['100% 有机拉贾斯坦指甲花叶 (Lawsonia Inermis Powder)'],
    steepTimeHours: 2,
    leaveInHours: '2 - 3 小时',
  },
  {
    id: 'prod-indigo-02',
    name: 'Saheli 纯净木蓝/靛蓝粉',
    subName: '100% 纯靛蓝叶粉 (Indigofera Tinctoria)',
    englishName: 'Pure Organic Indigo Powder',
    category: 'powder',
    price: 98,
    originalPrice: 128,
    weight: '250g / 包',
    tags: ['天然调深色', '一步/两步法配方', '防脱乌发'],
    imagePath: '/assets/products/saheli-indigo-pure.jpg',
    shadeColorHex: '#22384D',
    description: '新鲜头采木蓝嫩叶发酵后超微研磨而成。与海娜粉配合使用（一步法混合或两步法先红后黑），可将白发自然转变为自然深棕、黑棕或浓郁乌黑。',
    suitableFor: ['追求自然黑/深棕色', '抗拒化学黑发剂', '头皮敏感人群'],
    ingredients: ['100% 有机木蓝叶粉 (Indigofera Tinctoria Leaf Powder)'],
    steepTimeHours: 0.2, // 15 mins
    leaveInHours: '1.5 - 2 小时',
  },
  {
    id: 'prod-set-darkbrown',
    name: 'Saheli 智能植物盖白发套组【自然深棕】',
    subName: '红海娜粉 250g + 靛蓝粉 250g + 养发辅助包',
    englishName: 'Organic Natural Dark Brown Dye Kit',
    category: 'kit',
    price: 168,
    originalPrice: 226,
    weight: '500g 组合装',
    tags: ['自然深棕色', '买即赠全套工具', '新手无忧'],
    imagePath: '/assets/products/saheli-kit-darkbrown.jpg',
    shadeColorHex: '#3D2B1F',
    description: '专为亚洲人白发群体设计的经典比例套组。结合海娜的强效包覆与靛蓝的自然调深，一步法调配出自然暖棕，两步法实现自然深棕/自然黑。赠送专业染发碗、搅拌勺、浴帽、耳罩及量匙。',
    suitableFor: ['白发比例 30% - 100%', '长期染发者'],
    ingredients: ['有机海娜粉 250g', '有机靛蓝粉 250g', '无患子洗发果粉 20g (赠品)'],
    steepTimeHours: 1.5,
    leaveInHours: '2 - 2.5 小时',
  },
  {
    id: 'prod-cassia-03',
    name: 'Saheli 无色海娜/决明子亮发粉',
    subName: '100% 钝叶决明 (Cassia Obovata)',
    englishName: 'Pure Organic Cassia Shine & Nourish Powder',
    category: 'care',
    price: 82,
    originalPrice: 108,
    weight: '200g / 包',
    tags: ['不改变深发色', '发丝高光质感', '蓬松丰盈', '头皮SPA'],
    imagePath: '/assets/products/saheli-cassia-shine.jpg',
    shadeColorHex: '#D1AC00',
    description: '被称为“无色海娜”。富含天然大黄素与黄酮类成分，不会改变深色发丝颜色，但能在发丝表面形成天然水光保护膜，抚平毛躁，增加丰盈感与金黄光泽。',
    suitableFor: ['细软塌发质', '受损无光泽发丝', '只想养发不想变发色者'],
    ingredients: ['100% 有机钝叶决明叶粉 (Cassia Obovata Leaf Powder)'],
    steepTimeHours: 0.5,
    leaveInHours: '1 小时',
  },
  {
    id: 'prod-amla-04',
    name: 'Saheli 阿姆拉/印度醋栗维C果粉',
    subName: '100% 余甘子果实粉 (Phyllanthus Emblica)',
    englishName: 'Pure Organic Amla Hair Nutritive Powder',
    category: 'care',
    price: 78,
    originalPrice: 98,
    weight: '200g / 包',
    tags: ['高超抗氧化维C', '固色加深', '收敛毛鳞片', '毛囊滋养'],
    imagePath: '/assets/products/saheli-amla-vitamin.jpg',
    shadeColorHex: '#708238',
    description: '蕴含比鲜橙高出 20 倍的天然维生素C与单宁酸。加入海娜调配中可减缓海娜过红调，使发色更显沉稳雅致；同时收敛毛鳞片，让发质滑顺不干涩。',
    suitableFor: ['头皮易出油/易脱发', '希望固色防退色', '调和海娜暖红调'],
    ingredients: ['100% 有机余甘子果实粉 (Amla Powder)'],
    steepTimeHours: 0.5,
    leaveInHours: '45 - 60 分钟',
  },
  {
    id: 'prod-shikakai-05',
    name: 'Saheli 阿育吠陀三果清透洗发粉',
    subName: '无患子 + 刺槐豆 + 余甘子 黄金养护复方',
    englishName: 'Ayurvedic Herbal Hair Wash Powder',
    category: 'care',
    price: 75,
    originalPrice: 95,
    weight: '200g / 包',
    tags: ['无硅油无泡沫剂', '自然植物皂苷', '温和头皮去屑', '染后洗护'],
    imagePath: '/assets/products/saheli-ayurvedic-wash.jpg',
    shadeColorHex: '#5C4033',
    description: '印度千年来传统洗发配方。利用刺槐豆（Shikakai）与无患子天然皂苷，不含硫酸盐与人造表面活性剂，温和带走发丝污垢，保留头皮天然保护油脂。',
    suitableFor: ['敏感头皮', '植物染发后前3天清洁', '追求无添加洗发'],
    ingredients: ['刺槐豆粉 (Shikakai)', '无患子粉 (Reetha)', '余甘子粉 (Amla)'],
    steepTimeHours: 0.1,
    leaveInHours: '5 - 10 分钟',
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
