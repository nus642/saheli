import React, { useState } from 'react';
import { INITIAL_PRODUCTS, DEFAULT_PATH_CONFIG } from '../data/initialData';
import { Product, ContentPathConfig } from '../types';
import { FolderKanban, X, Save, Copy, RefreshCw, Check, FileText, Image as ImageIcon, Code, Upload } from 'lucide-react';

interface ContentPathManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContentPathManagerModal: React.FC<ContentPathManagerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [config, setConfig] = useState<ContentPathConfig>(DEFAULT_PATH_CONFIG);
  const [activeTab, setActiveTab] = useState<'paths' | 'products' | 'export'>('paths');
  const [copied, setCopied] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  if (!isOpen) return null;

  const handleProductImageChange = (id: string, newPath: string) => {
    setConfig((prev) => ({
      ...prev,
      customProducts: prev.customProducts.map((p) =>
        p.id === id ? { ...p, imagePath: newPath } : p
      ),
      lastUpdated: new Date().toISOString().split('T')[0],
    }));
  };

  const handleSave = () => {
    setSaveMessage('图文路径与配置已成功保存至本地内存！');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200 font-sans">
      <div className="bg-[#FAF9F6] max-w-3xl w-full p-6 sm:p-8 space-y-6 border border-[#E5E2D9] shadow-xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white text-[#2C2C2C] border border-[#E5E2D9] hover:bg-[#F2F0E9] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-[#E5E2D9] pb-4">
          <div className="w-10 h-10 bg-[#5B6346] text-white flex items-center justify-center border border-[#5B6346]">
            <FolderKanban className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-[#2C2C2C]">
              产品图文输入路径 & 媒体资产配置中心
            </h3>
            <p className="text-xs text-gray-500">
              在此管理和配置产品的素材存储路径、图文说明及 API JSON 导出结构
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 border-b border-[#E5E2D9] pb-3 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('paths')}
            className={`px-3.5 py-1.5 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider ${
              activeTab === 'paths' ? 'bg-[#5B6346] text-white font-bold' : 'bg-white text-[#2C2C2C] border border-[#E5E2D9]'
            }`}
          >
            <FolderKanban className="w-3.5 h-3.5" />
            <span>核心文件路径规范</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`px-3.5 py-1.5 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider ${
              activeTab === 'products' ? 'bg-[#5B6346] text-white font-bold' : 'bg-white text-[#2C2C2C] border border-[#E5E2D9]'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>各产品图文路径修改</span>
          </button>

          <button
            onClick={() => setActiveTab('export')}
            className={`px-3.5 py-1.5 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider ${
              activeTab === 'export' ? 'bg-[#5B6346] text-white font-bold' : 'bg-white text-[#2C2C2C] border border-[#E5E2D9]'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>导出 JSON 配置数据</span>
          </button>
        </div>

        {/* Tab 1: System Paths Standard */}
        {activeTab === 'paths' && (
          <div className="space-y-4 text-xs">
            <div className="p-4 bg-white border border-[#E5E2D9] space-y-3">
              <h4 className="font-serif font-bold text-[#2C2C2C] text-sm flex items-center gap-2 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-[#5B6346]" />
                <span>预设标准图文文件目录结构 (Asset Folder Directory Schema)</span>
              </h4>
              <p className="text-gray-600 leading-relaxed">
                网站已为您预留了标准的图文素材映射接口。建议将本地或远程服务器的产品宣传图片存放在以下指定目录：
              </p>

              <div className="bg-[#2C2C2C] text-[#E8E2D6] p-4 font-mono text-[11px] space-y-2 border border-[#2C2C2C]">
                <div>📁 /assets/images/products/  <span className="text-gray-400">← 存放所有包装/草本粉产品图文</span></div>
                <div>📁 /assets/images/ingredients/ <span className="text-gray-400">← 存放海娜、木蓝、余甘子等成分图</span></div>
                <div>📁 /assets/images/brand/       <span className="text-gray-400">← 存放印度索杰特农场与品牌故事图</span></div>
                <div>📁 /assets/images/reviews/     <span className="text-gray-400">← 存放真实用户盖白发前后对比图</span></div>
              </div>
            </div>

            <div className="p-4 bg-[#F2F0E9] border border-[#D8D4C7] text-[#2C2C2C] space-y-2">
              <span className="font-bold block uppercase tracking-wider">💡 接入建议：</span>
              <p>
                在实际运维中，只需将替换的图片放入对应路径，或者在“各产品图文路径修改”选项卡中贴入 CDN 图片 URL 链接，系统即可自动全量替换展示。
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Individual Products Path Edit */}
        {activeTab === 'products' && (
          <div className="space-y-4 text-xs max-h-[50vh] overflow-y-auto pr-1">
            {config.customProducts.map((prod) => (
              <div key={prod.id} className="p-4 bg-white border border-[#E5E2D9] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-[#2C2C2C] text-sm">{prod.name}</span>
                  <span className="font-mono text-gray-400">ID: {prod.id}</span>
                </div>
                <div>
                  <label className="block text-gray-500 mb-1">图片资源路径 (Image Asset Path or CDN URL):</label>
                  <input
                    type="text"
                    value={prod.imagePath}
                    onChange={(e) => handleProductImageChange(prod.id, e.target.value)}
                    className="w-full p-2 border border-[#E5E2D9] font-mono text-xs bg-[#FAF9F6]"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: JSON Export */}
        {activeTab === 'export' && (
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[#2C2C2C] font-bold text-xs uppercase tracking-wider">当前完整的配置 JSON 数据:</span>
              <button
                onClick={handleCopyJSON}
                className="px-3 py-1 bg-[#5B6346] text-white flex items-center gap-1 hover:bg-[#4A5039] cursor-pointer text-xs font-bold uppercase tracking-wider"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '已复制 JSON' : '复制到剪贴板'}</span>
              </button>
            </div>

            <pre className="p-4 bg-[#2C2C2C] text-[#E8E2D6] max-h-60 overflow-y-auto text-[11px] border border-[#2C2C2C]">
              {JSON.stringify(config, null, 2)}
            </pre>
          </div>
        )}

        {/* Save message notice */}
        {saveMessage && (
          <div className="p-3 bg-[#F2F0E9] text-[#2C2C2C] border border-[#D8D4C7] text-xs font-semibold text-center animate-in fade-in">
            {saveMessage}
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-3 border-t border-[#E5E2D9] flex items-center justify-between">
          <button
            onClick={() => {
              setConfig(DEFAULT_PATH_CONFIG);
              setSaveMessage('已重置为默认图文接口路径！');
              setTimeout(() => setSaveMessage(''), 3000);
            }}
            className="px-3.5 py-2 text-[#2C2C2C] border border-[#E5E2D9] hover:bg-[#F2F0E9] text-xs font-medium flex items-center gap-1 cursor-pointer uppercase tracking-wider"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>恢复预设图文路径</span>
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2.5 bg-[#5B6346] hover:bg-[#4A5039] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-4 h-4 text-white" />
            <span>保存图文输入配置</span>
          </button>
        </div>

      </div>
    </div>
  );
};
