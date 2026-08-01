export interface Product {
  id: string;
  name: string;
  subName: string;
  englishName: string;
  category: 'powder' | 'kit' | 'care' | 'tool';
  price: number;
  originalPrice?: number;
  weight: string;
  tags: string[];
  imagePath: string; // Dynamic path or CDN URL
  description: string;
  shadeColorHex: string;
  suitableFor: string[];
  ingredients: string[];
  steepTimeHours: number;
  leaveInHours: string;
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
  holder: string;
  standard: string;
  certificateNumber: string;
  operationId: string;
  firstCertified: string;
  issued: string;
  scope: string;
  verificationUrl: string;
}

export interface ContentPathConfig {
  productImagePathBase: string;
  ingredientImagePathBase: string;
  brandStoryImagePathBase: string;
  customProducts: Product[];
  lastUpdated: string;
}
