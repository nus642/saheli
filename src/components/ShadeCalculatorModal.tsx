import React from 'react';
import { AlertTriangle, BookOpen, X } from 'lucide-react';

interface ShadeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: string) => void;
}

/** Retained unmounted. Bespoke recipes remain disabled until product-specific evidence exists. */
export const ShadeCalculatorModal: React.FC<ShadeCalculatorModalProps> = ({
  isOpen,
  onClose,
  setActiveTab,
}) => {
  if (!isOpen) return null;

  const openKnowledge = () => {
    onClose();
    setActiveTab('knowledge');
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans" role="dialog" aria-modal="true" aria-labelledby="shade-guide-title">
      <div className="bg-[#FAF9F6] max-w-lg w-full p-6 sm:p-8 space-y-6 border border-[#E5E2D9] shadow-xl relative">
        <button onClick={onClose} aria-label="关闭选色说明" className="absolute top-4 right-4 p-2 bg-white text-[#2C2C2C] border border-[#E5E2D9] hover:bg-[#F2F0E9] cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-3 pr-10">
          <div className="w-10 h-10 bg-[#F5EDE8] text-[#6A3327] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h3 id="shade-guide-title" className="font-serif text-xl text-[#2C2C2C]">选色与用量应以产品说明为准</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              原始发色、白发比例、发质和既往染发情况都会影响结果。网站目前不提供未经产品验证的海娜／靛蓝比例、加盐、加酸或家庭配方计算。
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#E5E2D9] p-4 text-sm text-gray-600 leading-relaxed">
          白发较多且目标为自然黑或深棕时，可先了解纯海娜底染后再使用目标色粉的同日两段染方法。正式使用前请进行皮肤测试和发束测试。
        </div>

        <button onClick={openKnowledge} className="w-full px-5 py-3 bg-[#5B6346] hover:bg-[#4A5039] text-white text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer">
          <BookOpen className="w-4 h-4" />查看植物染发知识与两段染指南
        </button>
      </div>
    </div>
  );
};
