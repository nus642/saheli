import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  setActiveTab,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] border-b border-[#E5E2D9] pt-8 pb-16 lg:pt-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Hero Column: Headline & Product Showcase */}
          <div className="lg:col-span-7 border-r-0 lg:border-r border-[#E5E2D9] pr-0 lg:pr-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-left">
              {/* Organic Origin Editorial Badge */}
              <div className="inline-block px-3 py-1 border border-[#5B6346] text-[10px] uppercase tracking-widest text-[#5B6346] font-sans font-semibold">
                Saheli · Sojat, India · Since 1990
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.15] font-light font-serif text-[#2C2C2C]">
                来自印度的<br />
                <span className="italic font-serif text-[#5B6346]">海娜</span>与植物染发粉
              </h1>

              {/* Subtitle / Value Prop */}
              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-gray-600 font-sans">
                <strong className="text-[#2C2C2C] font-semibold">Saheli 莎荷丽</strong> 代理印度拉贾斯坦邦索杰特海娜与植物配方染发粉。查看当前目录中的两款真实商品与包装使用说明。
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => { setActiveTab('products'); window.scrollTo(0, 0); }}
                  className="px-6 py-3.5 border border-[#5B6346] text-[#5B6346] text-xs uppercase tracking-widest hover:bg-[#5B6346] hover:text-white transition-colors cursor-pointer flex items-center gap-2 font-sans"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>查看真实产品目录</span>
                </button>

              </div>

              {/* Key Feature Checklist - Fine Hairline Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4 text-xs text-[#2C2C2C] font-sans">
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>Deepak Industries · USDA NOP</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>植物粉调配</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>海娜与植物配方染发粉</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>植物原料信息透明</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>具体配方以商品包装为准</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>植物染发选择</span>
                </div>
              </div>
            </div>

            {/* Editorial Image Feature Block */}
            <div className="mt-4">
              <div className="relative aspect-[16/7] bg-[#E8E2D6] border border-[#E5E2D9] rounded-sm overflow-hidden flex items-center justify-center group">
                <img
                  src="/assets/products/saheli-organic-henna-227g.jpg"
                  alt="Saheli 莎荷丽有机海娜粉 227g 产品包装"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[10px] uppercase tracking-widest font-sans backdrop-blur-xs bg-black/30 p-2.5 border border-white/20">
                  <span>Henna & Botanical Hair Color Powder</span>
                  <span className="text-[#FAF9F6] font-bold">海娜与植物配方染发粉</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Heritage & Analysis */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Brand Heritage Box */}
            <div className="p-8 border border-[#E5E2D9] bg-white flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#A5A093] mb-4 font-sans font-semibold">
                  品牌故事 / Heritage
                </h3>
                <p className="text-base sm:text-lg leading-relaxed italic font-serif text-[#2C2C2C]">
                  “Saheli”在印地语中意为“女性友人与知己”。品牌从印度拉贾斯坦邦索杰特出发，提供海娜与植物配方染发粉。
                </p>
              </div>
              <button
                onClick={() => { setActiveTab('brand'); window.scrollTo(0, 0); }}
                className="text-xs uppercase tracking-widest font-sans font-bold text-[#5B6346] hover:underline flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>阅读完整品牌起源 →</span>
              </button>
            </div>

            {/* Ingredient Analysis Quick Overview Box */}
            <div className="p-8 border border-[#E5E2D9] bg-[#F2F0E9] flex-1 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#A5A093] mb-4 font-sans font-semibold">
                草本分析 / Analysis
              </h3>
              <div className="space-y-3 font-sans">
                <div className="flex justify-between items-end border-b border-[#D8D4C7] pb-2">
                  <span className="text-sm font-medium text-[#2C2C2C]">指甲花 (Henna)</span>
                  <span className="text-xs text-[#5B6346] font-semibold">提供暖红铜色调</span>
                </div>
                <div className="flex justify-between items-end border-b border-[#D8D4C7] pb-2">
                  <span className="text-sm font-medium text-[#2C2C2C]">木蓝 (Indigo)</span>
                  <span className="text-xs text-[#5B6346] font-semibold">用于调配深色调</span>
                </div>
                <div className="flex justify-between items-end border-b border-[#D8D4C7] pb-2">
                  <span className="text-sm font-medium text-[#2C2C2C]">余甘子 (Amla)</span>
                  <span className="text-xs text-[#5B6346] font-semibold">用于调整暖色调</span>
                </div>
                <div className="flex justify-between items-end border-b border-[#D8D4C7] pb-2">
                  <span className="text-sm font-medium text-[#2C2C2C]">无患子 (Reetha)</span>
                  <span className="text-xs text-[#5B6346] font-semibold">植物配方原料</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
