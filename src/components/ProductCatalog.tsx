import React, { useState } from 'react';
import { AlertTriangle, ExternalLink, Eye, X } from 'lucide-react';
import { INITIAL_PRODUCTS } from '../data/initialData';
import { Product, ProductDetails, ProductVariant } from '../types';

export function getDefaultVariant(product: Product): ProductVariant | undefined {
  if (product.kind === 'standalone') return undefined;
  return product.variants.find((variant) => variant.id === product.defaultVariantId) ?? product.variants[0];
}

export function getProductDetails(product: Product, variantId?: string): ProductDetails {
  if (product.kind === 'standalone') return product;

  const variant = product.variants.find((item) => item.id === variantId) ?? getDefaultVariant(product);
  if (!variant) throw new Error(`Product "${product.id}" must define at least one variant.`);
  return variant;
}

export function getProductImageAlt(
  product: Product,
  variant: ProductVariant | undefined,
  imageIndex: number,
): string {
  const color = variant ? `｜${variant.colorName}` : '';
  const side = imageIndex === 0 ? '正面' : '背面';
  return `${product.name}${color}${side}包装`;
}

interface ProductCatalogProps {
  onOpenKnowledge?: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onOpenKnowledge }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeVariantId, setActiveVariantId] = useState<string | undefined>();

  const categories = [
    { id: 'all', label: `全部产品（${INITIAL_PRODUCTS.length}）` },
    { id: 'pure-powder', label: '纯海娜粉' },
    { id: 'herbal-color', label: '植物配方色粉' },
  ];
  const filteredProducts = INITIAL_PRODUCTS.filter(
    (product) => selectedCategory === 'all' || product.category === selectedCategory,
  );

  const openDetails = (product: Product) => {
    setActiveProduct(product);
    setActiveVariantId(getDefaultVariant(product)?.id);
  };

  const activeDetails = activeProduct ? getProductDetails(activeProduct, activeVariantId) : null;
  const activeVariant = activeProduct?.kind === 'variant'
    ? activeProduct.variants.find((variant) => variant.id === activeVariantId) ?? getDefaultVariant(activeProduct)
    : undefined;

  return (
    <section className="bg-[#FAF9F6] py-12 lg:py-20" id="products">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 font-sans">
          <div className="inline-block px-3 py-1 border border-[#5B6346] text-[#5B6346] text-[10px] uppercase tracking-widest font-semibold">
            Verified Product Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2C2C] font-light">Saheli 莎荷丽产品目录</h2>
          <p className="text-sm sm:text-base text-gray-600">基于已核验包装资料与业务确认，首批上线两款植物染发产品。</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 font-sans">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-[#5B6346] text-white'
                  : 'bg-white text-[#2C2C2C] border border-[#E5E2D9] hover:border-[#5B6346]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {filteredProducts.map((product) => {
            const details = getProductDetails(product);
            const defaultVariant = getDefaultVariant(product);
            return (
              <article key={product.id} className="bg-white border border-[#E5E2D9] overflow-hidden shadow-xs hover:border-[#5B6346] transition-all flex flex-col group">
                <div className="relative h-80 bg-[#E8E2D6] overflow-hidden">
                  <img
                    src={details.imagePaths[0]}
                    alt={getProductImageAlt(product, defaultVariant, 0)}
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="text-xs text-gray-500">
                      <span>{product.brand}</span><span className="mx-2">·</span><span className="font-mono">{product.weight}</span>
                    </div>
                    <h3 className="font-serif text-xl text-[#2C2C2C] group-hover:text-[#5B6346] transition-colors">{product.name}</h3>
                    <p className="text-xs text-[#5B6346] font-semibold uppercase tracking-wider">{product.englishName}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{details.description}</p>
                  </div>
                  {product.kind === 'variant' ? (
                    <div className="flex flex-wrap gap-1.5" aria-label="可选颜色">
                      {product.variants.map((variant) => (
                        <span key={variant.id} className="bg-[#F2F0E9] text-[#2C2C2C] border border-[#D8D4C7] text-[10px] font-medium px-2 py-0.5">
                          {variant.colorName} {variant.colorEnglishName}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {product.tags.map((tag) => <span key={tag} className="bg-[#F2F0E9] text-[#2C2C2C] border border-[#D8D4C7] text-[10px] font-medium px-2 py-0.5">{tag}</span>)}
                    </div>
                  )}
                  <div className="pt-3 border-t border-[#E5E2D9] flex flex-wrap items-center justify-between gap-3">
                    <div><span className="text-xs text-gray-400">中国售价：</span><span className="text-xl font-bold text-[#5B6346] font-serif">¥{details.price}</span></div>
                    <div className="flex gap-2">
                      <button onClick={() => openDetails(product)} className="px-3 py-2 border border-[#5B6346] text-[#5B6346] text-xs font-semibold flex items-center gap-1 hover:bg-[#F2F0E9] transition-colors cursor-pointer">
                        <Eye className="w-3.5 h-3.5" />查看详情
                      </button>
                      <a href={details.purchaseUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-[#5B6346] hover:bg-[#4A5039] text-white text-xs font-semibold flex items-center gap-1 transition-colors">
                        前往淘宝查看<ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {activeProduct && activeDetails && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="product-detail-title">
            <div className="bg-[#FAF9F6] border border-[#E5E2D9] max-w-3xl w-full p-6 sm:p-8 space-y-6 relative shadow-xl max-h-[90vh] overflow-y-auto font-sans">
              <button onClick={() => setActiveProduct(null)} aria-label="关闭产品详情" className="absolute top-4 right-4 p-2 bg-white text-[#2C2C2C] border border-[#E5E2D9] hover:bg-[#F2F0E9] cursor-pointer">
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-start gap-4 border-b border-[#E5E2D9] pb-4 pr-10">
                <div className="flex gap-2 shrink-0">
                  {activeDetails.imagePaths.map((imagePath, index) => (
                    <div key={imagePath} className="w-20 sm:w-24 h-28 bg-white overflow-hidden border border-[#E5E2D9]">
                      <img src={imagePath} alt={getProductImageAlt(activeProduct, activeVariant, index)} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#5B6346] font-bold uppercase tracking-wider">{activeVariant?.packagingEnglishName ?? activeProduct.englishName}</span>
                  <h3 id="product-detail-title" className="text-xl font-serif text-[#2C2C2C]">{activeProduct.name}{activeVariant && `｜${activeVariant.colorName}`}</h3>
                  <p className="text-xs text-gray-500 mt-1">{activeProduct.brand} · {activeProduct.subName}</p>
                  <div className="flex items-center gap-2 mt-2"><span className="text-lg font-bold text-[#5B6346] font-serif">¥{activeDetails.price}</span><span className="text-xs text-gray-500 font-mono">规格：{activeProduct.weight}</span></div>
                </div>
              </div>

              {activeProduct.kind === 'variant' && (
                <fieldset className="space-y-2">
                  <legend className="font-serif font-bold text-[#2C2C2C] text-sm">选择颜色</legend>
                  <div className="flex flex-wrap gap-2">
                    {activeProduct.variants.map((variant) => (
                      <button
                        key={variant.id}
                        type="button"
                        aria-pressed={variant.id === activeVariant?.id}
                        onClick={() => setActiveVariantId(variant.id)}
                        className={`px-4 py-2 border text-sm font-semibold cursor-pointer transition-colors ${variant.id === activeVariant?.id ? 'bg-[#5B6346] border-[#5B6346] text-white' : 'bg-white border-[#D8D4C7] text-[#2C2C2C] hover:border-[#5B6346]'}`}
                      >
                        {variant.colorName} <span className="font-normal">{variant.colorEnglishName}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}

              {activeVariant?.tags && activeVariant.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5" aria-label="当前颜色产品标签">
                  {activeVariant.tags.map((tag) => (
                    <span key={tag} className="bg-[#F2F0E9] text-[#2C2C2C] border border-[#D8D4C7] text-[10px] font-medium px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              )}
              {activeProduct.kind === 'variant' && (
                <div className="bg-[#F5EDE8] border border-[#C59A87] p-4 text-sm text-[#6A3327] space-y-2" aria-label="白发两段染提醒">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                    <p><strong>白发较多，希望获得{activeVariant?.colorName ?? '自然黑或深棕'}效果：</strong>建议先用纯海娜完成底染，再于同一天使用本色粉。色粉请用约 40°C 温水调制并立即使用，不要长时间静置或使用加热帽。</p>
                  </div>
                  {onOpenKnowledge && <button type="button" onClick={() => { setActiveProduct(null); onOpenKnowledge(); }} className="ml-6 underline underline-offset-2 font-semibold cursor-pointer">查看完整两段染与科学说明 →</button>}
                </div>
              )}
              <div className="space-y-2"><h4 className="font-serif font-bold text-[#2C2C2C] text-sm">产品说明</h4><p className="text-sm text-gray-600 leading-relaxed bg-white p-4 border border-[#E5E2D9]">{activeDetails.description}</p></div>
              {activeDetails.notice && <div className="bg-[#F5EDE8] border border-[#C59A87] p-4 text-sm font-semibold text-[#6A3327]">重要提示：{activeDetails.notice}</div>}
              <div className="space-y-2"><h4 className="font-serif font-bold text-[#2C2C2C] text-sm">配料</h4><div className="bg-white p-4 border border-[#E5E2D9] text-sm text-gray-600 space-y-2"><p><strong className="text-[#5B6346]">配料原文：</strong>{activeDetails.ingredientOriginal}</p><p><strong className="text-[#5B6346]">中文配料：</strong>{activeDetails.ingredientsChinese}</p>{activeDetails.origin && <p><strong className="text-[#5B6346]">产地：</strong>{activeDetails.origin}</p>}</div></div>
              <div className="space-y-2"><h4 className="font-serif font-bold text-[#2C2C2C] text-sm">染发使用说明</h4><p className="bg-white p-4 border border-[#E5E2D9] text-sm text-gray-600 leading-relaxed">{activeDetails.usage}</p></div>
              {activeDetails.certification && <div className="space-y-2"><h4 className="font-serif font-bold text-[#2C2C2C] text-sm">认证范围说明</h4><p className="bg-white p-4 border border-[#E5E2D9] text-sm text-gray-600 leading-relaxed">{activeDetails.certification}</p></div>}
              <a href={activeDetails.purchaseUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-5 py-3 bg-[#5B6346] hover:bg-[#4A5039] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                前往淘宝查看{activeVariant && `（${activeVariant.colorName}）`}<ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
