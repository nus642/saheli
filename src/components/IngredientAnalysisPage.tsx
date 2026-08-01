import React, { useState } from 'react';
import { HERB_INGREDIENTS } from '../data/initialData';
import { HerbIngredient } from '../types';
import { Leaf, ShieldCheck, Sparkles, CheckCircle2, XCircle, Info, Activity, Microscope } from 'lucide-react';

export const IngredientAnalysisPage: React.FC = () => {
  const [selectedHerb, setSelectedHerb] = useState<HerbIngredient>(HERB_INGREDIENTS[0]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 border border-[#5B6346] text-[#5B6346] text-[10px] uppercase tracking-widest font-sans font-semibold">
            Botanical Science & Ingredient Specs
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C2C2C] font-light leading-tight">
            全成分透明解析 <br />
            <span className="italic text-[#5B6346]">把天然草本的力量，清晰呈现给你</span>
          </h1>

          <p className="text-base text-gray-600 leading-relaxed font-sans">
            拒绝隐瞒任何化学添加剂。Saheli 的每一包染发粉，均由 100% 单一或复方印度阿育吠陀经典植物微粉组成。不含防腐剂、不含重金属、不含对苯二胺 (PPD)。
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
                核心植物图鉴与养发原理
              </h2>
            </div>
            <span className="text-xs text-gray-500">点击下方植物卡片，即可查看深度成分分析与色泽贡献</span>
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
                <span className="font-bold text-[#5B6346] block uppercase tracking-wider">阿育吠陀特性 (Ayurvedic Property):</span>
                <p className="text-gray-700">{selectedHerb.ayurvedicProperty}</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block bg-[#5B6346] text-white text-xs font-semibold px-3 py-1 mb-2 uppercase tracking-wider">
                  色泽贡献：{selectedHerb.colorContribution}
                </span>
                <h3 className="text-2xl font-serif text-[#2C2C2C]">
                  {selectedHerb.chineseName} 的作用机制
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  {selectedHerb.fullDesc}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-[#2C2C2C] text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#5B6346]" />
                  <span>核心养发功效：</span>
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

              {/* Recommended Hair types */}
              <div className="flex items-center gap-2 pt-2 text-xs">
                <span className="font-bold text-[#2C2C2C]">适合发质群体：</span>
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

        {/* Section 2: Chemical Hair Dye vs Saheli Botanical Dye Matrix */}
        <div className="space-y-8 font-sans">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A5A093] font-semibold">
              SAFETY & SCIENCE COMPARISON
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2C2C]">
              传统化学染发 vs Saheli 有机植物染发 全方位对比
            </h2>
            <p className="text-sm text-gray-500">
              真正了解你的发丝与头皮承受了什么，做出对健康最负责任的选择
            </p>
          </div>

          <div className="overflow-x-auto border border-[#E5E2D9] bg-white">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#5B6346] text-[#FAF9F6] font-serif text-sm">
                  <th className="p-4 w-1/4 uppercase tracking-wider text-xs">对比维度</th>
                  <th className="p-4 w-3/8 bg-[#2C2C2C] text-gray-300">
                    <div className="flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span>传统化学染发剂 (PPD/氨水)</span>
                    </div>
                  </th>
                  <th className="p-4 w-3/8 bg-[#4A5039] text-[#FAF9F6]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FAF9F6]" />
                      <span>Saheli 莎荷丽 纯植物粉</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E2D9] text-xs sm:text-sm">
                <tr>
                  <td className="p-4 font-semibold text-[#2C2C2C] bg-[#FAF9F6]">核心染色原理</td>
                  <td className="p-4 text-red-900 bg-red-50/30">强行用双氧水强行漂白发丝黑色素，用强碱（氨水）撕开毛鳞片填入化学色素块。</td>
                  <td className="p-4 text-[#2C2C2C] bg-[#F2F0E9]/50 font-medium">物理渗透包覆：散色素与发丝表面角蛋白自然结合，像保护膜一样充填发干空隙。</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2C2C2C] bg-[#FAF9F6]">毛鳞片与发质影响</td>
                  <td className="p-4 text-red-900 bg-red-50/30">毛鳞片被破坏无法闭合，发丝水分流失，多次使用后头发干枯发脆易断裂。</td>
                  <td className="p-4 text-[#2C2C2C] bg-[#F2F0E9]/50 font-medium">不破坏毛鳞片结构，反而像透明高光油漆，越染发干越充实厚重，光泽倍增。</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2C2C2C] bg-[#FAF9F6]">头皮刺激与致敏风险</td>
                  <td className="p-4 text-red-900 bg-red-50/30">含对苯二胺 (PPD)，高概率引起头皮红肿、刺痛、刺痒甚至接触性皮炎。</td>
                  <td className="p-4 text-[#2C2C2C] bg-[#F2F0E9]/50 font-medium">阿育吠陀草本配方与传统氧化染发体系不同。</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2C2C2C] bg-[#FAF9F6]">气味体验</td>
                  <td className="p-4 text-red-900 bg-red-50/30">刺鼻难闻的强刺激性化学氨气味，令人头晕熏眼。</td>
                  <td className="p-4 text-[#2C2C2C] bg-[#F2F0E9]/50 font-medium">淡淡的自然干草与抹茶清香，使用体验如同静心草本茶包熏蒸。</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2C2C2C] bg-[#FAF9F6]">盖白发自然度</td>
                  <td className="p-4 text-red-900 bg-red-50/30">颜色较为生硬假面，新长出的白发交界处极为陡峭明显。</td>
                  <td className="p-4 text-[#2C2C2C] bg-[#F2F0E9]/50 font-medium">呈现天然多层次暖棕或乌黑高光，新旧发过渡柔和自然。</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2C2C2C] bg-[#FAF9F6]">适宜人群范围</td>
                  <td className="p-4 text-red-900 bg-red-50/30">孕妇、哺乳期妈妈、过敏体质、老人受限。</td>
                  <td className="p-4 text-[#2C2C2C] bg-[#F2F0E9]/50 font-medium">白发群体、敏感头皮、产后妈妈、烫染受损者均可放心调配使用。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Botanical Dye Science Explainer Graphic/Section */}
        <div className="bg-[#5B6346] text-[#FAF9F6] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#E5E2D9] font-sans">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block px-3 py-1 border border-white/40 text-white text-xs font-semibold uppercase tracking-wider">
              植物染发科学原理：为什么能够稳固不脱色？
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif">
              Lawsones (散色素分子) 与发丝角蛋白的“氢键包覆”
            </h2>
            <p className="text-sm text-[#E5E2D9] leading-relaxed">
              海娜粉中富含的小分子散色素（Lawsones，分子式 C10H6O3），在水与微酸性环境下能轻松穿透外层表皮。由于发丝主要由坚固的角蛋白（Keratin）组成，散色素会与角蛋白中的氨基酸通过<strong>天然氢键与范德华力</strong>发生牢固绑定。
            </p>
            <p className="text-sm text-[#E5E2D9] leading-relaxed">
              这种物理结合就像是在发丝表面穿上了一层透气透明的彩色防护漆，洗头不会洗掉结合的色素，色泽持久保持 4~8 周！
            </p>
          </div>

          <div className="lg:col-span-5 bg-white/10 p-6 border border-white/20 space-y-4">
            <h4 className="font-serif font-bold text-white text-sm">
              调配植物泥的黄金三原则：
            </h4>
            <div className="space-y-2 text-xs text-[#E8E2D6]">
              <div className="p-2.5 border border-white/20 bg-black/20">
                <strong className="text-white block">1. 60°C 温水激活：</strong>
                水温不可过高（避免破坏植物多酚活性），亦不可太冷。
              </div>
              <div className="p-2.5 border border-white/20 bg-black/20">
                <strong className="text-white block">2. 海娜醒泥 1-2 小时：</strong>
                让海娜叶粉中的散色素充分释放游离。
              </div>
              <div className="p-2.5 border border-white/20 bg-black/20">
                <strong className="text-white block">3. 靛蓝粉现调现用：</strong>
                木蓝粉遇到空气氧化速度极快，调好后需 15 分钟内涂抹到发丝上。
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
