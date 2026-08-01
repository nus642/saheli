import React, { useState } from 'react';
import { Calculator, X, Sparkles, Clock, Droplets, CheckCircle2, ArrowRight } from 'lucide-react';

interface ShadeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: string) => void;
}

export const ShadeCalculatorModal: React.FC<ShadeCalculatorModalProps> = ({
  isOpen,
  onClose,
  setActiveTab,
}) => {
  const [hairLength, setHairLength] = useState<'short' | 'medium' | 'long'>('medium');
  const [whiteRatio, setWhiteRatio] = useState<'low' | 'medium' | 'high'>('medium');
  const [targetShade, setTargetShade] = useState<'red' | 'darkbrown' | 'black' | 'clear'>('darkbrown');

  if (!isOpen) return null;

  // Calculate grams & recipe
  const calculateRecipe = () => {
    let baseGrams = 100;
    if (hairLength === 'short') baseGrams = 60;
    if (hairLength === 'medium') baseGrams = 120;
    if (hairLength === 'long') baseGrams = 200;

    if (targetShade === 'clear') {
      return {
        henna: 0,
        indigo: 0,
        cassia: baseGrams,
        methodName: '决明子纯养发高光泥',
        stepType: '单步养护法',
        waterTemp: '50°C - 60°C 温水/蜂蜜水',
        steepMin: 30,
        leaveInMin: '60 分钟',
        desc: '不改变任何原发色，适合抚平毛躁与增加粗度蓬松感。',
      };
    }

    if (targetShade === 'red') {
      return {
        henna: baseGrams,
        indigo: 0,
        cassia: 0,
        methodName: '红海娜纯粉白发亮彩',
        stepType: '单步染色法',
        waterTemp: '60°C 红茶水或温水 (加半个柠檬汁激活)',
        steepMin: 120, // 2h
        leaveInMin: '2 - 3 小时',
        desc: '白发转变为自然栗红/铜褐色；黑发显隐约暖红高光。',
      };
    }

    if (targetShade === 'darkbrown') {
      if (whiteRatio === 'high') {
        return {
          henna: Math.round(baseGrams * 0.5),
          indigo: Math.round(baseGrams * 0.5),
          cassia: 0,
          methodName: '推荐【两步法】先海娜打底，后靛蓝覆盖',
          stepType: '两步法 (自然深棕最高盖白率)',
          waterTemp: '60°C 温水 + 少许盐 (靛蓝粉)',
          steepMin: 120,
          leaveInMin: '第一步1.5h，第二步1.5h',
          desc: '白发>50%强烈推荐两步法！第一步海娜打底呈黄色，第二步上靛蓝迅速变沉稳自然深棕。',
        };
      } else {
        return {
          henna: Math.round(baseGrams * 0.4),
          indigo: Math.round(baseGrams * 0.6),
          cassia: 0,
          methodName: '【一步法】海娜与靛蓝混合调泥',
          stepType: '一步混合法',
          waterTemp: '55°C - 60°C 温水',
          steepMin: 30,
          leaveInMin: '2 小时',
          desc: '海娜先调好醒泥1.5小时后，加入靛蓝粉搅拌15分钟内快速上发。',
        };
      }
    }

    // Black
    return {
      henna: Math.round(baseGrams * 0.35),
      indigo: Math.round(baseGrams * 0.65),
      cassia: 0,
      methodName: '两步法自然乌黑（无化学纯黑）',
      stepType: '两步法极致盖白',
      waterTemp: '55°C 温水 (靛蓝加1克食盐固色)',
      steepMin: 120,
      leaveInMin: '第一步1.5h，第二步2小时',
      desc: '两步法染色呈现浓郁乌黑。',
    };
  };

  const recipe = calculateRecipe();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200 font-sans">
      <div className="bg-[#FAF9F6] max-w-2xl w-full p-6 sm:p-8 space-y-6 border border-[#E5E2D9] shadow-xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white text-[#2C2C2C] border border-[#E5E2D9] hover:bg-[#F2F0E9] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-[#E5E2D9] pb-4">
          <div className="w-10 h-10 bg-[#5B6346] text-[#FAF9F6] flex items-center justify-center border border-[#5B6346]">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-[#2C2C2C]">
              智能植物选色与调配比例算盘
            </h3>
            <p className="text-xs text-gray-500">
              根据您的发量与白发状况，精准推导草本克数、配水温度与停留时间
            </p>
          </div>
        </div>

        {/* Wizard Controls */}
        <div className="space-y-4 text-xs">
          
          {/* Hair length */}
          <div>
            <label className="block font-bold text-[#2C2C2C] mb-2 uppercase tracking-wider">1. 您的头发长度与发量：</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'short', label: '短发 / 仅补染发根 (约 60g)' },
                { id: 'medium', label: '齐肩中发 (约 120g)' },
                { id: 'long', label: '过肩长发 (约 200g)' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setHairLength(item.id as any)}
                  className={`p-2.5 border text-center font-medium transition-all cursor-pointer ${
                    hairLength === item.id
                      ? 'bg-[#5B6346] text-white border-[#5B6346] font-bold'
                      : 'bg-white text-[#2C2C2C] border-[#E5E2D9] hover:border-[#5B6346]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* White Hair Ratio */}
          <div>
            <label className="block font-bold text-[#2C2C2C] mb-2 uppercase tracking-wider">2. 您的白发比例情况：</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'low', label: '白发很少 (< 20%)' },
                { id: 'medium', label: '白发较多 (20% - 50%)' },
                { id: 'high', label: '白发大量或密集 (> 50%)' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setWhiteRatio(item.id as any)}
                  className={`p-2.5 border text-center font-medium transition-all cursor-pointer ${
                    whiteRatio === item.id
                      ? 'bg-[#5B6346] text-white border-[#5B6346] font-bold'
                      : 'bg-white text-[#2C2C2C] border-[#E5E2D9] hover:border-[#5B6346]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Target Shade */}
          <div>
            <label className="block font-bold text-[#2C2C2C] mb-2 uppercase tracking-wider">3. 您期望染出的目标发色：</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'darkbrown', label: '自然深棕色', hex: '#3D2B1F' },
                { id: 'black', label: '浓郁乌黑', hex: '#1C1B1A' },
                { id: 'red', label: '栗红铜褐色', hex: '#9E3A1C' },
                { id: 'clear', label: '无色养发高光', hex: '#D1AC00' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTargetShade(item.id as any)}
                  className={`p-2.5 border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                    targetShade === item.id
                      ? 'bg-[#5B6346] text-white border-[#5B6346]'
                      : 'bg-white text-[#2C2C2C] border-[#E5E2D9] hover:border-[#5B6346]'
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full border border-white shrink-0"
                    style={{ backgroundColor: item.hex }}
                  />
                  <span className="font-bold">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Recipe Output Card */}
        <div className="bg-white p-5 border border-[#5B6346] space-y-4">
          <div className="flex items-center justify-between border-b border-[#E5E2D9] pb-3">
            <div>
              <span className="text-[10px] font-bold text-[#5B6346] uppercase tracking-widest">
                RECIPE RESULT
              </span>
              <h4 className="font-serif font-bold text-lg text-[#2C2C2C]">
                {recipe.methodName}
              </h4>
            </div>
            <span className="bg-[#5B6346] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
              {recipe.stepType}
            </span>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            {recipe.desc}
          </p>

          {/* Grams Breakdown */}
          <div className="grid grid-cols-3 gap-3 text-center">
            {recipe.henna > 0 && (
              <div className="p-3 bg-[#F2F0E9] border border-[#D8D4C7]">
                <span className="block text-xl font-bold font-serif text-[#5B6346]">{recipe.henna}g</span>
                <span className="text-[10px] text-gray-500">特级红海娜粉</span>
              </div>
            )}
            {recipe.indigo > 0 && (
              <div className="p-3 bg-[#F2F0E9] border border-[#D8D4C7]">
                <span className="block text-xl font-bold font-serif text-[#2C2C2C]">{recipe.indigo}g</span>
                <span className="text-[10px] text-gray-500">纯净靛蓝粉</span>
              </div>
            )}
            {recipe.cassia > 0 && (
              <div className="p-3 bg-[#F2F0E9] border border-[#D8D4C7]">
                <span className="block text-xl font-bold font-serif text-[#5B6346]">{recipe.cassia}g</span>
                <span className="text-[10px] text-gray-500">无色决明子亮发粉</span>
              </div>
            )}
          </div>

          {/* Prep Instructions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 p-2.5 bg-[#F2F0E9] border border-[#D8D4C7]">
              <Droplets className="w-4 h-4 text-[#5B6346] shrink-0" />
              <div>
                <span className="font-bold text-[#2C2C2C]">调配水温：</span>
                <span className="text-gray-600 block">{recipe.waterTemp}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 bg-[#F2F0E9] border border-[#D8D4C7]">
              <Clock className="w-4 h-4 text-[#2C2C2C] shrink-0" />
              <div>
                <span className="font-bold text-[#2C2C2C]">停留时间：</span>
                <span className="text-gray-600 block">{recipe.leaveInMin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              setActiveTab('products');
            }}
            className="w-full py-3 bg-[#5B6346] hover:bg-[#4A5039] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>查看相关产品套组</span>
            <ArrowRight className="w-4 h-4 text-[#FAF9F6]" />
          </button>
        </div>

      </div>
    </div>
  );
};
