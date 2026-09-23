import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { BrandStoryPage } from './components/BrandStoryPage';
import { IngredientAnalysisPage } from './components/IngredientAnalysisPage';
import { ProductCatalog } from './components/ProductCatalog';
import { PlantHairColorKnowledgePage } from './components/PlantHairColorKnowledgePage';
import { ShieldCheck, Sparkles, BookOpen, Factory } from 'lucide-react';
import { getInitialTab, getPageMetadata, getPathForTab } from './routing';

const SITE_ORIGIN = 'https://hairdye.cn';
const SHARE_IMAGE_PATH = '/assets/guides/saheli-two-step-dye-guide.jpg';

function setMetaContent(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(() => getInitialTab(window.location.pathname));

  const navigateToTab = (tab: string) => {
    window.history.pushState({ tab }, '', getPathForTab(tab));
    setActiveTab(tab);
  };

  useEffect(() => {
    window.history.replaceState({ tab: activeTab }, '', getPathForTab(activeTab));

    const handlePopState = (event: PopStateEvent) => {
      const tab = typeof event.state?.tab === 'string' ? event.state.tab : getInitialTab(window.location.pathname);
      setActiveTab(tab);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const metadata = getPageMetadata(activeTab);
    const canonicalUrl = `${SITE_ORIGIN}${metadata.path}`;
    const shareImageUrl = `${SITE_ORIGIN}${SHARE_IMAGE_PATH}`;
    document.title = metadata.title;

    setMetaContent('meta[name="description"]', 'name', 'description', metadata.description);
    setMetaContent('meta[property="og:title"]', 'property', 'og:title', metadata.title);
    setMetaContent('meta[property="og:description"]', 'property', 'og:description', metadata.description);
    setMetaContent('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaContent('meta[property="og:image"]', 'property', 'og:image', shareImageUrl);
    setMetaContent('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2825] font-sans-clean">
      {/* Global Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={navigateToTab}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* View 1: Home View */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <Hero setActiveTab={navigateToTab} />

            {/* Core Value Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#5B6346] text-[#FAF9F6] rounded-sm p-8 sm:p-12 border border-[#E5E2D9] shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
                <div className="space-y-2 border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0 pr-0 md:pr-6">
                  <div className="w-10 h-10 border border-white/40 text-white flex items-center justify-center font-bold mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-medium">Deepak Industries · USDA NOP</h3>
                  <p className="text-xs text-[#E5E2D9] leading-relaxed">
                    经 Ecocert SAS 审核；认证范围以证书附录及 USDA 官方数据库为准。
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
                    <Factory className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-medium">自有生产基础</h3>
                  <p className="text-xs text-[#E5E2D9] leading-relaxed">
                    两家自有工厂，约 36,000 平方英尺总建筑面积，约 1,200 MT 年产能。
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
                    Deepak Industries 的企业历史始于 1978 年；Saheli 品牌于 1990 年在印度 Rajasthan 的 Sojat 开始发展。Saheli 希望成为自然护理过程中的伙伴。
                  </p>
                  <button
                    onClick={() => { navigateToTab('brand'); window.scrollTo(0, 0); }}
                    className="px-6 py-3 bg-[#5B6346] hover:bg-[#4A5039] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-[#E5E2D9]" />
                    <span>查看完整品牌故事专页 →</span>
                  </button>
                </div>

                <div className="lg:col-span-5">
                  <figure className="rounded-sm overflow-hidden border border-[#E5E2D9] bg-[#E8E2D6]">
                    <img
                      src="/assets/brand/rajasthan-botanical-region-concept.webp"
                      alt="Rajasthan 草本产区意象"
                      className="w-full h-52 sm:h-60 object-cover"
                    />
                    <figcaption className="px-3 py-2 text-[10px] tracking-wider text-[#6F6A60] bg-[#F2F0E9] font-sans">
                      产地意象图 · AI 辅助生成，非 Saheli 农场实拍
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            {/* Products Showcase Component */}
            <ProductCatalog onOpenKnowledge={() => { navigateToTab('knowledge'); window.scrollTo(0, 0); }} />
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
          <ProductCatalog onOpenKnowledge={() => { navigateToTab('knowledge'); window.scrollTo(0, 0); }} />
        )}

        {/* View 5: Science-based Plant Hair Color Knowledge */}
        {activeTab === 'knowledge' && (
          <PlantHairColorKnowledgePage />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActiveTab={navigateToTab} />
    </div>
  );
}
