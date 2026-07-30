import React from 'react';
import { BookOpen, X, CheckCircle2, Clock, Droplets, Sparkles, ShieldCheck } from 'lucide-react';

interface UsageGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UsageGuideModal: React.FC<UsageGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const steps = [
    {
      num: '01',
      title: '皮试与工具准备',
      desc: '初次使用建议取极微量海娜泥涂于耳后留存24小时做敏感测试。准备好染发碗、搅拌勺、浴帽、披肩与双手戴上手套。',
      icon: '🛡️',
    },
    {
      num: '02',
      title: '温水调配泥膏 (60°C)',
      desc: '将植物粉倒入碗中，按1:3的比例加入 60°C 左右的温水（也可使用浓红茶水或黑咖啡水），顺时针搅拌至如同酸奶/抹茶泥般细腻。',
      icon: '🥣',
    },
    {
      num: '03',
      title: '海娜醒泥 1-2 小时',
      desc: '盖上保鲜膜静置醒泥 1~2 小时，让指甲花中的散色素（Lawsone）完全游离释放（若含有靛蓝粉，靛蓝部分需临涂抹前15分钟再混合）。',
      icon: '⏳',
    },
    {
      num: '04',
      title: '分区厚涂发根白发',
      desc: '洗净发丝并吹至 8 成干。将头发分成小区块，用梳子或手套将海娜泥厚厚包裹在白发多的发根部位（宁多勿少）。',
      icon: '🌿',
    },
    {
      num: '05',
      title: '浴帽/保鲜膜包裹 2-3 小时',
      desc: '用浴帽将头发完全包裹紧实，防止植物泥干涸。保持头皮温暖，停留 2~3 小时（期间可听音乐、看书或做家务）。',
      icon: '💆‍♀️',
    },
    {
      num: '06',
      title: '温水冲净与 72h 自然沉淀',
      desc: '用温水直接将植物泥冲洗干净，前48-72小时尽量不要使用强碱洗发水。植物色素会在空气中自然氧化，发色在第3天会更加沉稳光亮！',
      icon: '✨',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200 font-sans">
      <div className="bg-[#FAF9F6] max-w-2xl w-full p-6 sm:p-8 space-y-6 border border-[#E5E2D9] shadow-xl relative max-h-[92vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white text-[#2C2C2C] border border-[#E5E2D9] hover:bg-[#F2F0E9] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-[#E5E2D9] pb-4">
          <div className="w-10 h-10 bg-[#5B6346] text-white flex items-center justify-center border border-[#5B6346]">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-[#2C2C2C]">
              Saheli 植物染发新手 6 步图解指南
            </h3>
            <p className="text-xs text-gray-500">
              掌握简单顺手的草本染发节奏，在家尊享阿育吠陀养发SPA
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {steps.map((st) => (
            <div key={st.num} className="p-4 bg-white border border-[#E5E2D9] space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-2xl">{st.icon}</span>
                <span className="font-mono text-xs font-bold text-[#5B6346] bg-[#5B6346]/10 px-2 py-0.5">
                  STEP {st.num}
                </span>
              </div>
              <h4 className="font-serif font-bold text-[#2C2C2C] text-sm uppercase tracking-wider">{st.title}</h4>
              <p className="text-gray-600 leading-relaxed text-[11px]">{st.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#2C2C2C] text-[#E8E2D6] border border-[#2C2C2C] text-xs space-y-1">
          <span className="font-bold text-[#5B6346] block uppercase tracking-wider">★ 提示与温馨提示：</span>
          <p className="leading-relaxed text-gray-300">
            植物染发属于温和包裹养护过程，发色会在染后 48 小时内随空气接触而进一步氧化定色（从最初偏浅逐渐转变为沉稳深棕/乌黑）。请给植物一些自然的蜕变时间！
          </p>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#5B6346] hover:bg-[#4A5039] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
          >
            我已知晓，开始体验植物染发
          </button>
        </div>

      </div>
    </div>
  );
};
