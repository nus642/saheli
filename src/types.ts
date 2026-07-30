export interface Product {
  id: string;
  name: string;
  subName: string;
  englishName: string;
  category: 'powder' | 'kit' | 'care' | 'tool';
  price: number;
  originalPrice?: number;
  weight: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  imagePath: string; // Dynamic path or CDN URL
  description: string;
  shadeColorHex: string;
  suitableFor: string[];
  ingredients: string[];
  steepTimeHours: number;
  leaveInHours: string;
  isBestSeller?: boolean;
}

export interface HerbIngredient {
  id: string;
  chineseName: string;
  hindiName: string;
  latinName: string;
  shortDesc: string;
  fullDesc: string;
  keyBenefits: string[];
  hairTypes: string[];
  colorContribution: string;
  imagePath: string;
  ayurvedicProperty: string;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  userTag: string; // e.g. "白发比例50% | 染自然深棕"
  rating: number;
  date: string;
  productUsed: string;
  content: string;
  verifiedPurchase: boolean;
  beforeImg?: string;
  afterImg?: string;
  tags: string[];
  helpfulCount: number;
}

export interface BrandMilestone {
  year: string;
  title: string;
  description: string;
}

export interface Certification {
  name: string;
  agency: string;
  badgeText: string;
  description: string;
  iconName: string;
}

export interface ContentPathConfig {
  productImagePathBase: string;
  ingredientImagePathBase: string;
  brandStoryImagePathBase: string;
  reviewImagePathBase: string;
  customProducts: Product[];
  lastUpdated: string;
}
