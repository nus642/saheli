import React from 'react';
import { Leaf, ShieldCheck, Sparkles, ArrowRight, Calculator, CheckCircle2, Award, HeartHandshake } from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: string) => void;
  openShadeCalc: () => void;
  openUsageGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  setActiveTab,
  openShadeCalc,
  openUsageGuide,
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
                100% Organic India Origin
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.15] font-light font-serif text-[#2C2C2C]">
                来自印度的<br />
                <span className="italic font-serif text-[#5B6346]">草本奇迹</span>与纯净自然
              </h1>

              {/* Subtitle / Value Prop */}
              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-gray-600 font-sans">
                <strong className="text-[#2C2C2C] font-semibold">Saheli 莎荷丽</strong> 代理印度顶级拉贾斯坦邦索杰特头采有机海娜与木蓝植物粉。0 对苯二胺 (PPD)、0 氨水、0 重金属。天然包裹遮盖白发，为发丝带来温润本色。
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={openShadeCalc}
                  className="px-8 py-3.5 bg-[#5B6346] text-white text-xs uppercase tracking-widest hover:bg-[#4A5039] transition-colors flex items-center gap-2 cursor-pointer font-sans"
                >
                  <Calculator className="w-4 h-4 text-[#FAF9F6]" />
                  <span>计算用量与发色算盘</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => { setActiveTab('products'); window.scrollTo(0, 0); }}
                  className="px-6 py-3.5 border border-[#5B6346] text-[#5B6346] text-xs uppercase tracking-widest hover:bg-[#5B6346] hover:text-white transition-colors cursor-pointer flex items-center gap-2 font-sans"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>天然染发套组</span>
                </button>

                <button
                  onClick={openUsageGuide}
                  className="px-4 py-3 text-xs text-[#5B6346] underline font-sans uppercase tracking-wider hover:text-[#4A5039] transition-colors cursor-pointer"
                >
                  新手 6 步指南 →
                </button>
              </div>

              {/* Key Feature Checklist - Fine Hairline Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4 text-xs text-[#2C2C2C] font-sans">
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>USDA 有机认证</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>0% PPD 过敏源</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>天然物理包裹遮白</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>3000目极细微粉</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>修护受损毛鳞片</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white border border-[#E5E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                  <span>孕妇及敏感头皮安心</span>
                </div>
              </div>
            </div>

            {/* Editorial Image Feature Block */}
            <div className="mt-4">
              <div className="relative aspect-[16/7] bg-[#E8E2D6] border border-[#E5E2D9] rounded-sm overflow-hidden flex items-center justify-center group">
                <img
                  src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=1000&auto=format&fit=crop&q=80"
                  alt="Organic Henna & Indigo Mix"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[10px] uppercase tracking-widest font-sans backdrop-blur-xs bg-black/30 p-2.5 border border-white/20">
                  <span>Organic Henna & Indigo Mix</span>
                  <span className="text-[#FAF9F6] font-bold">自然深棕盖白发套组</span>
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
                  “Saheli”在印地语中意为“女性友人与知己”。我们希望这份来自拉贾斯坦邦土地的馈赠，能像闺蜜般温柔呵护您的每一根发丝。
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
                  <span className="text-xs text-[#5B6346] font-semibold">上色 & 强韧</span>
                </div>
                <div className="flex justify-between items-end border-b border-[#D8D4C7] pb-2">
                  <span className="text-sm font-medium text-[#2C2C2C]">木蓝 (Indigo)</span>
                  <span className="text-xs text-[#5B6346] font-semibold">调色 & 光泽</span>
                </div>
                <div className="flex justify-between items-end border-b border-[#D8D4C7] pb-2">
                  <span className="text-sm font-medium text-[#2C2C2C]">余甘子 (Amla)</span>
                  <span className="text-xs text-[#5B6346] font-semibold">固色 & 养发</span>
                </div>
                <div className="flex justify-between items-end border-b border-[#D8D4C7] pb-2">
                  <span className="text-sm font-medium text-[#2C2C2C]">无患子 (Reetha)</span>
                  <span className="text-xs text-[#5B6346] font-semibold">清洁 & 蓬松</span>
                </div>
              </div>
            </div>

            {/* Rating Banner */}
            <div className="p-4 border border-[#E5E2D9] bg-white flex items-center justify-between text-xs font-sans">
              <div className="flex items-center gap-2">
                <div className="text-lg font-bold text-[#5B6346] font-serif">4.9 / 5.0</div>
                <div className="text-[11px] text-gray-500">超过 12,000+ 真实买家验货好评</div>
              </div>
              <button
                onClick={() => { setActiveTab('reviews'); window.scrollTo(0, 0); }}
                className="text-[10px] uppercase tracking-widest font-bold text-[#5B6346] underline"
              >
                查看评价 →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
