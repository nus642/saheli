import React from 'react';
import { ExternalLink, Leaf, ShieldCheck, Factory, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
}) => {
  return (
    <footer className="bg-[#2C2C2C] text-[#FAF9F6] pt-16 pb-12 border-t border-[#5B6346] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-white/10 text-center">
          <div className="flex flex-col items-center p-4 border border-white/10 bg-white/5">
            <ShieldCheck className="w-8 h-8 text-[#5B6346] mb-2" />
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Deepak Industries · USDA NOP</h4>
            <p className="text-xs text-gray-400 mt-1">认证范围以证书附录为准</p>
          </div>
          <div className="flex flex-col items-center p-4 border border-white/10 bg-white/5">
            <Sparkles className="w-8 h-8 text-[#5B6346] mb-2" />
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">植物粉配方</h4>

          </div>
          <div className="flex flex-col items-center p-4 border border-white/10 bg-white/5">
            <Factory className="w-8 h-8 text-[#5B6346] mb-2" />
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">两家自有工厂</h4>
            <p className="text-xs text-gray-400 mt-1">约 1,200 MT 年产能</p>
          </div>
          <div className="flex flex-col items-center p-4 border border-white/10 bg-white/5">
            <Leaf className="w-8 h-8 text-[#5B6346] mb-2" />
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">始于 Sojat</h4>
            <p className="text-xs text-gray-400 mt-1">海娜及草本护理产品</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#5B6346] bg-[#5B6346] text-white flex items-center justify-center font-bold">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="font-serif text-2xl font-light tracking-widest text-white uppercase">{siteConfig.siteName.en}</span>
                <span className="font-serif text-xl text-[#5B6346] ml-2">{siteConfig.siteName.zh}</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              {siteConfig.positioning}
            </p>
          </div>

          {/* Dedicated Pages Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-base border-b border-white/10 pb-2 uppercase tracking-wider">
              专栏与功能导向
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => { setActiveTab('brand'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                  • 品牌故事专页 (Brand Story)
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('ingredients'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                  • 草本成分深度解析 (Ingredients)
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('products'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                  • 植物产品与配方指南 (Products)
                </button>
              </li>
            </ul>
          </div>

          {/* Partner Brands & Store */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-base border-b border-white/10 pb-2 uppercase tracking-wider">
              合作品牌
            </h4>
            <div className="bg-white/5 p-4 border border-white/10 text-sm text-[#E8E2D6] space-y-3">
              {siteConfig.brands.partners.map((brand) => (
                <div key={brand.en} className="flex items-center justify-between gap-4">
                  <span className="font-serif text-white">{brand.en}</span>
                  <span className="text-gray-400">{brand.zh}</span>
                </div>
              ))}
            </div>
            <a
              href={siteConfig.taobaoStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-[#5B6346] hover:bg-[#4A5039] text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>前往淘宝店铺</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.siteName.en} {siteConfig.siteName.zh}. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <button onClick={() => { setActiveTab('brand'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">查看认证范围</button>
            <span>•</span>
            <a href="https://organic.ams.usda.gov/integrity/CP/OPP?cid=24&nopid=7880267101" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">USDA 官方查询</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
