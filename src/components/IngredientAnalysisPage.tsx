import React, { useState } from 'react';
import { HERB_INGREDIENTS } from '../data/initialData';
import { HerbIngredient } from '../types';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const IngredientAnalysisPage: React.FC = () => {
  const [selectedHerb, setSelectedHerb] = useState<HerbIngredient>(HERB_INGREDIENTS[0]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 border border-[#5B6346] text-[#5B6346] text-[10px] uppercase tracking-widest font-sans font-semibold">
            Botanical Ingredients & Color Notes
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C2C2C] font-light leading-tight">
            全成分透明解析 <br />
            <span className="italic text-[#5B6346]">了解植物原料与配色角色</span>
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-sans">
            Saheli 的染发粉分为单一植物微粉与复方植物微粉产品。
          </p>
        </div>

        {/* Section 1: Herbal Encyclopedia Interactive Component */}
        <div className="space-y-8 font-sans">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E5E2D9] pb-4 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#A5A093] font-semibold">
                HERBAL ENCYCLOPEDIA
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2C2C]">
                植物原料图鉴与配色说明
              </h2>
            </div>
            <span className="text-xs text-gray-500">点击下方植物卡片，查看原料介绍与色泽贡献</span>
          </div>

          {/* Plant Selector Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {HERB_INGREDIENTS.map((herb) => {
              const isSelected = selectedHerb.id === herb.id;
              return (
                <button
                  key={herb.id}
                  onClick={() => setSelectedHerb(herb)}
                  className={`p-3 border text-left transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#5B6346] text-white border-[#5B6346]'
                      : 'bg-white text-[#2C2C2C] border-[#E5E2D9] hover:border-[#5B6346] hover:bg-[#F2F0E9]'
                  }`}
                >
                  <div className={`text-[10px] font-mono uppercase tracking-widest ${isSelected ? 'text-[#E8E2D6]' : 'text-[#A5A093]'}`}>{herb.latinName.split(' ')[0]}</div>
                  <div className="font-serif font-bold text-sm mt-0.5">{herb.chineseName}</div>
                  <div className={`text-[10px] mt-1 truncate ${isSelected ? 'text-[#FAF9F6]' : 'text-gray-500'}`}>
                    {herb.hindiName}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Herb Card */}
          <div className="bg-white p-6 sm:p-10 border border-[#E5E2D9] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-5 space-y-4">
              <div className="relative overflow-hidden h-64 sm:h-80 border border-[#E5E2D9] bg-[#E8E2D6]">
                <img
                  src={selectedHerb.imagePath.startsWith('/assets') ? 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80' : selectedHerb.imagePath}
                  alt={selectedHerb.chineseName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs text-[#E8E2D6] font-semibold">{selectedHerb.hindiName}</div>
                  <h3 className="font-serif text-2xl font-normal">{selectedHerb.chineseName}</h3>
                  <p className="text-xs text-gray-200 font-mono mt-0.5">{selectedHerb.latinName}</p>
                </div>
              </div>

              <div className="bg-[#F2F0E9] p-3.5 border border-[#D8D4C7] text-xs space-y-1">
                <span className="font-bold text-[#5B6346] block uppercase tracking-wider">配方中的一般角色：</span>
                <p className="text-gray-700">{selectedHerb.ayurvedicProperty}</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block bg-[#5B6346] text-white text-xs font-semibold px-3 py-1 mb-2 uppercase tracking-wider">
                  色泽贡献：{selectedHerb.colorContribution}
                </span>
                <h3 className="text-2xl font-serif text-[#2C2C2C]">
                  {selectedHerb.chineseName} 的原料说明
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  {selectedHerb.fullDesc}
                </p>
              </div>

              {/* Formula roles */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-[#2C2C2C] text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#5B6346]" />
                  <span>在植物染发配方中的一般角色：</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedHerb.keyBenefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#F2F0E9] p-2.5 border border-[#D8D4C7] text-xs text-[#2C2C2C]">
                      <CheckCircle2 className="w-4 h-4 text-[#5B6346] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Observable color use */}
              <div className="flex items-center gap-2 pt-2 text-xs">
                <span className="font-bold text-[#2C2C2C]">常见配色用途：</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedHerb.hairTypes.map((t, idx) => (
                    <span key={idx} className="bg-white border border-[#5B6346] text-[#5B6346] px-2.5 py-0.5 uppercase tracking-wider font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#E5E2D9] bg-white p-5 text-center text-sm text-gray-600 font-sans">
          实际配方及使用方法以具体商品包装说明为准。
        </div>

      </div>
    </div>
  );
};
