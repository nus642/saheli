import React, { useState } from 'react';
import { Leaf, Menu, X, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '首页', icon: Leaf },
    { id: 'brand', label: '品牌故事', icon: BookOpen },
    { id: 'ingredients', label: '草本成分解析', icon: ShieldCheck },
    { id: 'products', label: '产品与配方', icon: Sparkles },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E2D9] transition-all">
      {/* Top Banner Notice */}
      <div className="bg-[#5B6346] text-[#FAF9F6] text-xs py-2 px-4 text-center font-sans-clean flex items-center justify-center gap-2 overflow-x-auto whitespace-nowrap">
        <span className="inline-flex items-center gap-1 bg-white/20 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-white/30">
          Deepak Industries · USDA NOP Certified
        </span>
        <span className="tracking-wide">来自印度索杰特 (Sojat) 的海娜与木蓝 · 天然包裹遮盖白发</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-[#5B6346] text-[#5B6346] flex items-center justify-center group-hover:bg-[#5B6346] group-hover:text-white transition-colors">
              <Leaf className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-brand text-2xl font-bold tracking-widest text-[#5B6346]">
                  {siteConfig.siteName.en.toUpperCase()}
                </span>
                <span className="font-serif-sc text-xl font-bold text-[#2C2C2C]">
                  {siteConfig.siteName.zh}
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#A5A093] font-sans">
                Henna & Herbal Care Since 1990
              </p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 text-xs uppercase tracking-[0.2em] font-sans transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#5B6346] font-bold border-b-2 border-[#5B6346]'
                      : 'text-[#2C2C2C] hover:text-[#5B6346]'
                  }`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#5B6346]' : 'text-[#A5A093]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>


          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-[#2C2C2C] hover:bg-[#F2F0E9] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E2D9] bg-[#FAF9F6] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full px-4 py-3 rounded-sm text-sm uppercase tracking-wider flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#5B6346] text-white font-semibold'
                      : 'text-[#2C2C2C] hover:bg-[#F2F0E9]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#5B6346]'}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                </button>
              );
            })}
          </div>

        </div>
      )}
    </header>
  );
};
