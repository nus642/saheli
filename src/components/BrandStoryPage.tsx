import React from 'react';
import { BRAND_MILESTONES, CERTIFICATIONS } from '../data/initialData';
import { Leaf, Award, ShieldCheck, Heart, Sparkles, MapPin, CheckCircle, Users, Sun, Droplets } from 'lucide-react';

export const BrandStoryPage: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero Banner for Brand Story */}
        <div className="relative border border-[#E5E2D9] bg-[#5B6346] text-[#FAF9F6] p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="relative z-10 max-w-3xl space-y-6 text-left">
            <div className="inline-block px-3 py-1 border border-white/40 text-white text-[10px] uppercase tracking-widest font-sans font-semibold">
              Heritage & Origin
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light leading-tight">
              源自印度圣地的自然馈赠 <br />
              <span className="italic text-[#E8E2D6]">以“知己”之名，守护东方发质</span>
            </h1>

            <p className="text-base sm:text-lg text-[#E5E2D9] leading-relaxed font-sans">
              在印地语中，<strong className="text-white">“Saheli”（莎荷丽）</strong> 意为闺蜜、值得信赖的女性知己。古印度女性千百年来习惯在神圣的仪式前，聚在一起用头采海娜嫩叶敷泥养发。 Saheli 莎荷丽品牌继承这一传统，将纯净、无化学刺激的植物染发粉带到东方，让每一次染发都成为温润、安心的养护时光。
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs font-sans text-white/90">
              <div className="flex items-center gap-1.5 border border-white/30 px-3 py-1.5 bg-white/10">
                <MapPin className="w-4 h-4 text-[#FAF9F6]" />
                <span>核心产区：印度索杰特 (Sojat)</span>
              </div>
              <div className="flex items-center gap-1.5 border border-white/30 px-3 py-1.5 bg-white/10">
                <Sun className="w-4 h-4 text-[#FAF9F6]" />
                <span>300 天充沛日光曝晒</span>
              </div>
              <div className="flex items-center gap-1.5 border border-white/30 px-3 py-1.5 bg-white/10">
                <Droplets className="w-4 h-4 text-[#FAF9F6]" />
                <span>0 农药化肥 · 有机土壤</span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section 1: The Land of Sojat & Lawsonia Inermis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A5A093] font-sans font-semibold">
              CHAPTER 01 / 得天独厚的自然圣地
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2C2C]">
              为什么全世界最顶级的红海娜，只产于印度索杰特 (Sojat)？
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
              印度拉贾斯坦邦的索杰特地区，拥有特殊的富铁红土壤与极高的昼夜温差。这里的指甲花树（Lawsonia Inermis）为了抵御干燥强光，会在嫩叶中合成极其浓郁的天然红棕色素分——<strong className="text-[#2C2C2C]">散色素（Lawsone）</strong>。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
              普通海娜粉的 Lawsone 含量通常仅为 1.0%~1.5%，而 Saheli 莎荷丽在索杰特契约农场头采的微嫩绿叶， Lawsone 含量高达 <strong className="text-[#5B6346]">2.8% 以上</strong>！这保证了对白发拥有卓越的包覆附着力与持久色泽。
            </p>

            <div className="p-5 bg-white border border-[#E5E2D9] space-y-2 font-sans">
              <h4 className="font-serif font-bold text-[#2C2C2C] text-sm flex items-center gap-2">
                <Users className="w-4 h-4 text-[#5B6346]" />
                <span>公平贸易与女性合作社 (Ethical Women's Co-operative)</span>
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                在索杰特，超过 500 位当地女性参与嫩叶的采摘与自然晾晒。Saheli 坚持支付高于市场 30% 的公平贸易薪酬，并为采摘女工家庭提供健康保障与清洁饮用水，让纯净的草本事业富足乡村女性。
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden border border-[#E5E2D9] bg-[#E8E2D6] group">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80"
                alt="Rajasthan Henna Plantation"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white font-sans">
                <span className="text-[10px] font-semibold text-[#E8E2D6] uppercase tracking-[0.2em]">
                  SOLAR SUN-DRYING
                </span>
                <h3 className="font-serif text-lg mt-1">
                  阳光日光晒干与古法过布筛
                </h3>
                <p className="text-xs text-gray-200 mt-1">
                  不经过高温烘烤，完好保留叶片天然植物活性与精油油脂。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section 2: Technical Innovation: Triple Sifting */}
        <div className="bg-white p-8 sm:p-12 border border-[#E5E2D9] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 font-sans">
              <div className="p-4 bg-[#F2F0E9] border border-[#D8D4C7] text-center">
                <span className="block text-3xl font-serif text-[#5B6346]">3,000目</span>
                <span className="text-xs text-gray-600 mt-1 block">超细微粉筛滤级别</span>
              </div>
              <div className="p-4 bg-[#F2F0E9] border border-[#D8D4C7] text-center">
                <span className="block text-3xl font-serif text-[#2C2C2C]">0 渣</span>
                <span className="text-xs text-gray-600 mt-1 block">告别传统植物泥结块颗粒</span>
              </div>
              <div className="p-4 bg-[#F2F0E9] border border-[#D8D4C7] text-center">
                <span className="block text-3xl font-serif text-[#2C2C2C]">15 分钟</span>
                <span className="text-xs text-gray-600 mt-1 block">快速极细腻调和如冰淇淋</span>
              </div>
              <div className="p-4 bg-[#F2F0E9] border border-[#D8D4C7] text-center">
                <span className="block text-3xl font-serif text-[#5B6346]">100% 易冲</span>
                <span className="text-xs text-gray-600 mt-1 block">清水即冲不残留毛囊</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A5A093] font-sans font-semibold">
              CHAPTER 02 / 解决传统植物粉痛点
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2C2C]">
              三道过布超微研磨，颠覆传统“杂质多、难清洗”的笨重印象
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
              很多人对传统印尼或散装海娜粉的印象是“颗粒粗糙、难以涂均匀、洗头洗出满头树叶渣”。 Saheli 莎荷丽采用了三道冷磨 Cloth-Sifted 筛滤干法工艺。
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
              筛滤后的粉末细如抹茶，加入温水搅拌即可化为细腻顺滑的植物膏泥。不仅极易均匀涂抹到发根白发处，染完后只需清水轻冲，即可瞬间将植物残渣洗掉，不会堵塞毛囊。
            </p>
          </div>
        </div>

        {/* Brand Timeline Milestones */}
        <div className="space-y-8 font-sans">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A5A093] font-semibold">
              BRAND CHRONICLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2C2C]">
              Saheli 莎荷丽 品牌发展里程碑
            </h2>
            <p className="text-sm text-gray-500">从印度拉贾斯坦农场到数万东方家庭的安心选择</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_MILESTONES.map((m, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E5E2D9] relative hover:border-[#5B6346] transition-colors"
              >
                <div className="text-2xl font-serif text-[#5B6346] mb-2">{m.year}</div>
                <h3 className="font-serif font-bold text-[#2C2C2C] text-base mb-2">{m.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="bg-[#5B6346] text-[#FAF9F6] p-8 sm:p-12 space-y-8 border border-[#E5E2D9] font-sans">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#E8E2D6] uppercase tracking-[0.2em]">
              GLOBAL QUALITY ASSURANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif">
              四重国际权威认证 · 权威零化学残留化验单
            </h2>
            <p className="text-sm text-[#E5E2D9]">
              不仅是口头承诺，Saheli 莎荷丽每批次原料均附带权威 SGS 化验单与中国进口报关单。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/10 border border-white/20 space-y-3 text-left hover:border-white transition-colors"
              >
                <div className="w-9 h-9 border border-white/40 text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="inline-block bg-white text-[#5B6346] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                  {cert.badgeText}
                </div>
                <h3 className="font-serif text-white text-base">{cert.name}</h3>
                <p className="text-xs text-[#E8E2D6]">{cert.agency}</p>
                <p className="text-xs text-gray-200 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center border-t border-white/20 flex flex-wrap justify-center items-center gap-6 text-xs text-[#E5E2D9]">
            <span>检测报告编号：SGS-CN2026-HERB-0988</span>
            <span>•</span>
          </div>
        </div>

      </div>
    </div>
  );
};
