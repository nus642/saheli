import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from '../data/initialData';
import { Product } from '../types';
import { Sparkles, Star, Tag, CheckCircle2, Clock, Calculator, Eye, ShieldCheck, ArrowRight, X } from 'lucide-react';

interface ProductCatalogProps {
  openShadeCalc: () => void;
  openUsageGuide: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  openShadeCalc,
  openUsageGuide,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: '全部产品' },
    { id: 'kit', label: '盖白发黄金套组' },
    { id: 'powder', label: '单品草本粉' },
    { id: 'care', label: '无患子与头皮养护' },
  ];

  const filteredProducts = INITIAL_PRODUCTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section className="bg-[#FAF9F6] py-12 lg:py-20" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 font-sans">
          <div className="inline-block px-3 py-1 border border-[#5B6346] text-[#5B6346] text-[10px] uppercase tracking-widest font-semibold">
            Product Lineup & Formulations
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2C2C] font-light">
            选购 100% 纯净植物染发与养护泥
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            根据白发比例与期望发色，选择对应纯粉或智能配方套组。每款产品均可查看图文输入路径与详细调配说明。
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-sans">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#5B6346] text-white'
                    : 'bg-white text-[#2C2C2C] border border-[#E5E2D9] hover:border-[#5B6346]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white border border-[#E5E2D9] overflow-hidden shadow-xs hover:border-[#5B6346] transition-all flex flex-col group relative"
            >
              {/* Best seller badge */}
              {prod.isBestSeller && (
                <div className="absolute top-3 left-3 z-10 bg-[#5B6346] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">
                  核心爆款
                </div>
              )}

              {/* Product Image Container */}
              <div className="relative h-64 bg-[#E8E2D6] overflow-hidden">
                <img
                  src={
                    prod.id === 'prod-set-darkbrown'
                      ? 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&auto=format&fit=crop&q=80'
                      : prod.id === 'prod-henna-01'
                      ? 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80'
                      : prod.id === 'prod-indigo-02'
                      ? 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80'
                      : prod.id === 'prod-cassia-03'
                      ? 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80'
                      : 'https://images.unsplash.com/photo-1512290900673-03f48a1cb36c?w=800&auto=format&fit=crop&q=80'
                  }
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  referrerPolicy="no-referrer"
                />

                {/* Color Shade Preview Badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-2.5 py-1 flex items-center gap-1.5 border border-white/20">
                  <span
                    className="w-2.5 h-2.5 border border-white shrink-0"
                    style={{ backgroundColor: prod.shadeColorHex }}
                  />
                  <span>预估发色</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-mono">{prod.weight}</span>
                    <div className="flex items-center gap-1 text-[#5B6346] font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{prod.rating}</span>
                      <span className="text-gray-400 font-normal">({prod.reviewCount}评价)</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-[#2C2C2C] group-hover:text-[#5B6346] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#5B6346] font-semibold uppercase tracking-wider">{prod.subName}</p>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {prod.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="bg-[#F2F0E9] text-[#2C2C2C] border border-[#D8D4C7] text-[10px] font-medium px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="pt-3 border-t border-[#E5E2D9] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400">参考售价：</span>
                    <span className="text-xl font-bold text-[#5B6346] font-serif">￥{prod.price}</span>
                    {prod.originalPrice && (
                      <span className="text-xs text-gray-400 line-through ml-1">￥{prod.originalPrice}</span>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveProduct(prod)}
                    className="px-4 py-2 bg-[#5B6346] hover:bg-[#4A5039] text-white text-xs uppercase tracking-wider font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#FAF9F6]" />
                    <span>图文配方</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {activeProduct && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#FAF9F6] border border-[#E5E2D9] max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-xl max-h-[90vh] overflow-y-auto font-sans animate-in zoom-in-95 duration-200">
              
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 right-4 p-2 bg-white text-[#2C2C2C] border border-[#E5E2D9] hover:bg-[#F2F0E9] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 border-b border-[#E5E2D9] pb-4">
                <div className="w-20 h-20 bg-[#E8E2D6] overflow-hidden shrink-0 border border-[#E5E2D9]">
                  <img
                    src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&auto=format&fit=crop&q=80"
                    alt={activeProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#5B6346] font-bold uppercase tracking-wider">{activeProduct.englishName}</span>
                  <h3 className="text-xl font-serif text-[#2C2C2C]">{activeProduct.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{activeProduct.subName}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-[#5B6346] font-serif">￥{activeProduct.price}</span>
                    <span className="text-xs text-gray-500 font-mono">容量: {activeProduct.weight}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-[#2C2C2C] text-sm uppercase tracking-wider">【产品图文与功效介绍】</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-white p-4 border border-[#E5E2D9]">
                  {activeProduct.description}
                </p>
              </div>

              {/* Ingredients & Usage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 border border-[#E5E2D9] space-y-1">
                  <strong className="text-[#5B6346] block font-bold uppercase tracking-wider">🍃 100% 有机成分：</strong>
                  <ul className="list-disc list-inside text-gray-600 space-y-0.5">
                    {activeProduct.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 border border-[#E5E2D9] space-y-1">
                  <strong className="text-[#5B6346] block font-bold uppercase tracking-wider">⏱️ 醒泥与停留时间：</strong>
                  <p className="text-gray-600">醒泥时间：约 {activeProduct.steepTimeHours * 60} 分钟</p>
                  <p className="text-gray-600">发丝停留：建议 {activeProduct.leaveInHours}</p>
                </div>
              </div>

              {/* Suitable for */}
              <div className="space-y-1 text-xs">
                <strong className="text-[#2C2C2C] font-bold uppercase tracking-wider">适用于：</strong>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {activeProduct.suitableFor.map((sf, idx) => (
                    <span key={idx} className="bg-[#F2F0E9] text-[#5B6346] border border-[#D8D4C7] px-2.5 py-1 text-[11px] font-medium">
                      ✓ {sf}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Input Path Info */}
              <div className="p-3 bg-[#F2F0E9] border border-[#D8D4C7] text-[11px] text-gray-600 font-mono space-y-1">
                <span className="font-bold text-[#2C2C2C]">图文资源输入路径（Media Asset Path）:</span>
                <p className="text-[#5B6346] break-all">{activeProduct.imagePath}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveProduct(null);
                    openShadeCalc();
                  }}
                  className="flex-1 py-3 px-4 bg-[#5B6346] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#4A5039] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-[#FAF9F6]" />
                  <span>计算用量与发色算盘</span>
                </button>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
