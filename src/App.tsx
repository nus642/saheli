import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { BrandStoryPage } from './components/BrandStoryPage';
import { IngredientAnalysisPage } from './components/IngredientAnalysisPage';
import { ProductCatalog } from './components/ProductCatalog';
import { ShieldCheck, Sparkles, BookOpen, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2825] font-sans-clean">
      {/* Global Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* View 1: Home View */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <Hero setActiveTab={setActiveTab} />

            {/* Core Value Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#5B6346] text-[#FAF9F6] rounded-sm p-8 sm:p-12 border border-[#E5E2D9] shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
                <div className="space-y-2 border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0 pr-0 md:pr-6">
                  <div className="w-10 h-10 border border-white/40 text-white flex items-center justify-center font-bold mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-medium">100% USDA 有机认证</h3>
                  <p className="text-xs text-[#E5E2D9] leading-relaxed">
                    源自印度索杰特 (Sojat) 绿洲契约农场，全程零农药、零化肥、零基因改造。
                  </p>
                </div>

                <div className="space-y-2 border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0 pr-0 md:pr-6">
                  <div className="w-10 h-10 border border-white/40 text-white flex items-center justify-center font-bold mb-3">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-medium">植物粉配方</h3>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 border border-white/40 text-white flex items-center justify-center font-bold mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-medium">三道 3000目 极细微粉</h3>
                  <p className="text-xs text-[#E5E2D9] leading-relaxed">
                    独家过布筛滤微粉工艺，搅拌如冰淇淋顺滑，涂抹均匀，清水瞬间冲洗干净。
                  </p>
                </div>
              </div>
            </section>

            {/* Quick Teaser to Dedicated Brand Story Page */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-sm p-8 sm:p-10 border border-[#E5E2D9] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-left">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#A5A093] uppercase font-sans">
                    BRAND PHILOSOPHY & STORY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2C2C]">
                    为什么品牌叫 <span className="italic text-[#5B6346]">Saheli</span> (莎荷丽)？
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    在印地语中，Saheli 意为“女性身边最知己的闺蜜”。我们深知白发与头皮敏感带来的苦恼，因此秉持古印度阿育吠陀自然智慧，为东方发质带来温暖、放心的纯植物养发时光。
                  </p>
                  <button
                    onClick={() => { setActiveTab('brand'); window.scrollTo(0, 0); }}
                    className="px-6 py-3 bg-[#5B6346] hover:bg-[#4A5039] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-[#E5E2D9]" />
                    <span>查看完整品牌故事专页 →</span>
                  </button>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-sm overflow-hidden border border-[#E5E2D9] h-60 bg-[#E8E2D6]">
                    <img
                      src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80"
                      alt="Saheli Brand Story"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Products Showcase Component */}
            <ProductCatalog />
          </div>
        )}

        {/* View 2: Brand Story Dedicated Page */}
        {activeTab === 'brand' && (
          <BrandStoryPage />
        )}

        {/* View 3: Ingredient Analysis Dedicated Page */}
        {activeTab === 'ingredients' && (
          <IngredientAnalysisPage />
        )}

        {/* View 4: Product Catalog View */}
        {activeTab === 'products' && (
          <ProductCatalog />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
