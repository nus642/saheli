import React from 'react';
import { BookOpen, X } from 'lucide-react';

interface UsageGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UsageGuideModal: React.FC<UsageGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const steps = [
    {
      num: '01',
      title: '确认粉类并进行测试',
      desc: '先确认使用的是纯海娜，还是含靛蓝的自然黑／深棕色粉。使用前进行皮肤测试和发束测试，并准备手套、染发碗与塑料帽。',
      icon: '🛡️',
    },
    {
      num: '02',
      title: '纯海娜底染调制',
      desc: 'Saheli 纯海娜按包装加水调成糊状，静置约 2 小时。不要自行加入茶、咖啡、柠檬汁、酸奶或其他家庭材料。',
      icon: '🥣',
    },
    {
      num: '03',
      title: '完成第一段底染',
      desc: '把海娜泥均匀覆盖白发，戴塑料帽保持湿润。Saheli 当前包装资料没有标明上头停留时间，因此本站不提供统一数字；其他纯海娜产品请遵循其包装说明。',
      icon: '⏳',
    },
    {
      num: '04',
      title: '同日调制目标色粉',
      desc: '清水冲净海娜泥后，按包装以约 40°C 温水调匀自然黑或深棕色粉。结合靛蓝染料机理，本站建议调好后尽快使用，不长时间静置。',
      icon: '🌿',
    },
    {
      num: '05',
      title: '第二段均匀涂抹',
      desc: '戴手套分层涂抹目标色粉，覆盖塑料帽，不使用加热帽。按包装停留约 60 分钟。',
      icon: '💆‍♀️',
    },
    {
      num: '06',
      title: '清水冲净并等待显色',
      desc: '用清水冲净，不使用洗发水，也不使用吹风机。预留约 24 小时让颜色逐渐加深；刚冲洗后的颜色不是最终效果。',
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
              白发两段染 6 步指南
            </h3>
            <p className="text-xs text-gray-500">
              纯海娜底染，再于同一天使用自然黑或深棕目标色粉
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
            具体产品操作以包装说明为准。纯海娜需要预先释放染料；含靛蓝色粉则应即调即用。不要把两种粉按同一种方式长时间静置。
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
