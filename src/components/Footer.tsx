import React from 'react';
import { Leaf, ShieldCheck, Heart, Sparkles, Award, MapPin, Phone, Mail, FileText } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openContentPathManager: () => void;
  openUsageGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  openContentPathManager,
  openUsageGuide,
}) => {
  return (
    <footer className="bg-[#2C2C2C] text-[#FAF9F6] pt-16 pb-12 border-t border-[#5B6346] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-white/10 text-center">
          <div className="flex flex-col items-center p-4 border border-white/10 bg-white/5">
            <ShieldCheck className="w-8 h-8 text-[#5B6346] mb-2" />
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">USDA 有机认证</h4>
            <p className="text-xs text-gray-400 mt-1">100% 印度原料源头保证</p>
          </div>
          <div className="flex flex-col items-center p-4 border border-white/10 bg-white/5">
            <Sparkles className="w-8 h-8 text-[#5B6346] mb-2" />
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">0% 对苯二胺 (PPD)</h4>
            <p className="text-xs text-gray-400 mt-1">拒绝化学过敏与头皮伤害</p>
          </div>
          <div className="flex flex-col items-center p-4 border border-white/10 bg-white/5">
            <Award className="w-8 h-8 text-[#5B6346] mb-2" />
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">索杰特 3000 目微粉</h4>
            <p className="text-xs text-gray-400 mt-1">细腻易拌泥 · 轻松水冲净</p>
          </div>
          <div className="flex flex-col items-center p-4 border border-white/10 bg-white/5">
            <Heart className="w-8 h-8 text-[#5B6346] mb-2" />
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">妇女公平贸易合作</h4>
            <p className="text-xs text-gray-400 mt-1">支持印度当地采摘社群</p>
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
                <span className="font-serif text-2xl font-light tracking-widest text-white uppercase">Saheli</span>
                <span className="font-serif text-xl text-[#5B6346] ml-2">莎荷丽</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              莎荷丽 (Saheli) 专注引进印度拉贾斯坦邦圣地索杰特 (Sojat) 纯天然草本植物染发粉。以高散色素活性的红海娜（Henna）与木蓝（Indigo）为核心，传承古法草本养发智慧，让每一次盖白发都成为头皮SPA。
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E8E2D6] bg-white/5 px-3 py-2 border border-white/10 w-fit">
              <MapPin className="w-4 h-4 shrink-0 text-[#5B6346]" />
              <span>原料产地：Rajasthan, Sojat, India (印度索杰特天然农场)</span>
            </div>
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
              <li>
                <button onClick={() => { setActiveTab('reviews'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                  • 真实用户盖白发口碑 (Reviews)
                </button>
              </li>
              <li>
                <button onClick={openUsageGuide} className="hover:text-white transition-colors cursor-pointer">
                  • 首次染发使用步骤图解
                </button>
              </li>
            </ul>
          </div>

          {/* Product Image & Text Path System */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-base border-b border-white/10 pb-2 uppercase tracking-wider">
              图文输入路径与数据接口
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              本系统预留了完整的图文输入标准接口（JSON Schema / Asset Folder Paths），方便商家配置本地或服务器上的产品图文、成分图鉴与品牌素材。
            </p>
            <div className="bg-white/5 p-3 border border-white/10 text-xs font-mono text-[#E8E2D6] space-y-1">
              <div>📁 /assets/images/products/</div>
              <div>📁 /assets/images/ingredients/</div>
              <div>📁 /assets/images/brand/</div>
            </div>
            <button
              onClick={openContentPathManager}
              className="w-full py-2.5 px-3 bg-[#5B6346] hover:bg-[#4A5039] text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>管理产品图文输入路径 & 编辑数据</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Saheli 莎荷丽 印度有机植物染发中国代理团队. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>100% 纯植物无添加</span>
            <span>•</span>
            <span>海关进口检验合格</span>
            <span>•</span>
            <span>纯素非动物实验</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
