export interface ProductDetails {
  price: number;
  imagePaths: string[];
  purchaseUrl: string;
  description: string;
  ingredientOriginal: string;
  ingredientsChinese: string;
  usage: string;
  notice?: string;
  certification?: string;
  origin?: string;
}

export interface ProductVariant extends ProductDetails {
  id: string;
  colorName: string;
  colorEnglishName: string;
  packagingEnglishName: string;
}

interface ProductBase {
  id: string;
  name: string;
  subName: string;
  englishName: string;
  brand: string;
  category: 'pure-powder' | 'herbal-color';
  weight: string;
  tags: string[];
}

export interface StandaloneProduct extends ProductBase, ProductDetails {
  kind: 'standalone';
}

export interface VariantProduct extends ProductBase {
  kind: 'variant';
  defaultVariantId: string;
  variants: ProductVariant[];
}

export type Product = StandaloneProduct | VariantProduct;

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
