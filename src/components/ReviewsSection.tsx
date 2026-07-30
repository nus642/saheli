import React, { useState } from 'react';
import { INITIAL_REVIEWS } from '../data/initialData';
import { Review } from '../types';
import { Star, ShieldCheck, ThumbsUp, MessageSquarePlus, Sparkles, Filter, CheckCircle2, Sliders, X } from 'lucide-react';

interface ReviewsSectionProps {
  openUsageGuide: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ openUsageGuide }) => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [filterTag, setFilterTag] = useState<string>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // New review form state
  const [newUserName, setNewUserName] = useState('');
  const [newUserTag, setNewUserTag] = useState('白发比例50% | 染自然深棕');
  const [newRating, setNewRating] = useState(5);
  const [newProductUsed, setNewProductUsed] = useState('Saheli 智能植物盖白发套组【自然深棕】');
  const [newContent, setNewContent] = useState('');
  const [newReviewTags, setNewReviewTags] = useState('盖白发好, 头皮无刺痛');

  const filterOptions = [
    { id: 'all', label: '全部真实口碑' },
    { id: '白发', label: '盖白发效果' },
    { id: '头皮', label: '敏感头皮/孕妇' },
    { id: '光泽', label: '光泽/改善发质' },
    { id: '男士', label: '男士体验' },
  ];

  const filteredReviews = reviews.filter((rev) => {
    if (filterTag === 'all') return true;
    return (
      rev.tags.some((t) => t.includes(filterTag)) ||
      rev.userTag.includes(filterTag) ||
      rev.content.includes(filterTag)
    );
  });

  const handleHelpful = (id: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim() || !newContent.trim()) return;

    const created: Review = {
      id: `rev-custom-${Date.now()}`,
      userName: newUserName,
      userTag: newUserTag,
      rating: newRating,
      date: new Date().toISOString().split('T')[0],
      productUsed: newProductUsed,
      content: newContent,
      verifiedPurchase: true,
      tags: newReviewTags.split(',').map((t) => t.trim()).filter(Boolean),
      helpfulCount: 1,
    };

    setReviews([created, ...reviews]);
    setShowSubmitModal(false);
    setNewUserName('');
    setNewContent('');
  };

  return (
    <section className="bg-[#FAF9F6] py-12 lg:py-20" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 font-sans">
          <div className="inline-block px-3 py-1 border border-[#5B6346] text-[#5B6346] text-[10px] uppercase tracking-widest font-semibold">
            Testimonials & Community Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2C2C] font-light">
            听听真实用户的“告别化学染发”心得
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            来自全国数万位受白发困扰、头皮敏感体质用户的真实发声与染发前后对比。
          </p>
        </div>

        {/* Rating Overview Dashboard */}
        <div className="bg-white border border-[#E5E2D9] p-6 sm:p-10 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-sans">
          <div className="md:col-span-4 text-center md:border-r md:border-[#E5E2D9] pr-0 md:pr-8 space-y-2">
            <div className="text-5xl font-serif text-[#5B6346]">4.9</div>
            <div className="flex items-center justify-center gap-1 text-[#5B6346]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-gray-500">基于 12,800+ 份植物染发真实回访数据</p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3.5 bg-[#F2F0E9] border border-[#D8D4C7]">
              <span className="block text-2xl font-serif text-[#2C2C2C]">98.6%</span>
              <span className="text-xs text-gray-600 mt-0.5 block">白发遮盖满意度</span>
            </div>
            <div className="p-3.5 bg-[#F2F0E9] border border-[#D8D4C7]">
              <span className="block text-2xl font-serif text-[#5B6346]">0 次</span>
              <span className="text-xs text-gray-600 mt-0.5 block">头皮过敏红肿反馈</span>
            </div>
            <div className="p-3.5 bg-[#F2F0E9] border border-[#D8D4C7] col-span-2 sm:col-span-1">
              <span className="block text-2xl font-serif text-[#2C2C2C]">94.2%</span>
              <span className="text-xs text-gray-600 mt-0.5 block">复购并推荐给家人</span>
            </div>
          </div>
        </div>

        {/* Filter Bar & Submit Review Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E5E2D9] pb-4 font-sans">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#2C2C2C] flex items-center gap-1 mr-2 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5" />
              <span>筛选评价：</span>
            </span>
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilterTag(opt.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  filterTag === opt.id
                    ? 'bg-[#5B6346] text-white'
                    : 'bg-white text-[#2C2C2C] border border-[#E5E2D9] hover:border-[#5B6346]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-2 bg-[#5B6346] hover:bg-[#4A5039] text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#FAF9F6]" />
            <span>分享我的染发心得</span>
          </button>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 border border-[#E5E2D9] shadow-xs hover:border-[#5B6346] transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* User Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif font-bold text-[#2C2C2C] text-base">{rev.userName}</h4>
                      {rev.verifiedPurchase && (
                        <span className="bg-[#5B6346] text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3" />
                          已买验货
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#5B6346] font-semibold mt-0.5">{rev.userTag}</p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center text-[#5B6346]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-gray-400 mt-0.5 block">{rev.date}</span>
                  </div>
                </div>

                {/* Product Tag */}
                <div className="text-xs font-medium text-[#2C2C2C] bg-[#F2F0E9] px-2.5 py-1 border border-[#D8D4C7] w-fit">
                  使用配方：{rev.productUsed}
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  “{rev.content}”
                </p>

                {/* Before & After Photos if present */}
                {rev.beforeImg && rev.afterImg && (
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-[#5B6346] block mb-1 uppercase tracking-wider">使用前后实拍对比：</span>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative border border-[#E5E2D9] h-32 bg-[#E8E2D6]">
                        <img
                          src={rev.beforeImg}
                          alt="Before"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-1 left-1 bg-black/70 text-white text-[9px] px-1.5 py-0.5 uppercase">
                          染前白发
                        </span>
                      </div>
                      <div className="relative border border-[#5B6346] h-32 bg-[#E8E2D6]">
                        <img
                          src={rev.afterImg}
                          alt="After"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-1 left-1 bg-[#5B6346] text-white text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
                          染后自然发色
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tags & Helpful button */}
              <div className="pt-3 border-t border-[#E5E2D9] flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1">
                  {rev.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] bg-[#F2F0E9] text-gray-600 px-2 py-0.5 border border-[#D8D4C7]">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleHelpful(rev.id)}
                  className="flex items-center gap-1 text-[#5B6346] hover:text-[#2C2C2C] transition-colors font-medium cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>有用 ({rev.helpfulCount})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Review Modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#FAF9F6] border border-[#E5E2D9] max-w-lg w-full p-6 space-y-4 shadow-xl relative font-sans">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="absolute top-4 right-4 p-2 bg-white text-[#2C2C2C] border border-[#E5E2D9] hover:bg-[#F2F0E9]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <h3 className="font-serif font-bold text-xl text-[#2C2C2C]">写下您的植物染发体验</h3>
                <p className="text-xs text-gray-500">分享您的发质、白配比与染后感受，帮助更多朋友告别化学染发。</p>
              </div>

              <form onSubmit={handleAddReview} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-[#2C2C2C] mb-1 uppercase tracking-wider">您的昵称 / 称呼：</label>
                  <input
                    type="text"
                    required
                    placeholder="例如：王阿姨 (52岁)"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    className="w-full p-2.5 border border-[#E5E2D9] bg-white focus:outline-none focus:border-[#5B6346]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#2C2C2C] mb-1 uppercase tracking-wider">白发比例与发色说明：</label>
                  <input
                    type="text"
                    value={newUserTag}
                    onChange={(e) => setNewUserTag(e.target.value)}
                    className="w-full p-2.5 border border-[#E5E2D9] bg-white focus:outline-none focus:border-[#5B6346]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#2C2C2C] mb-1 uppercase tracking-wider">评测星级：</label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="text-[#5B6346] p-1"
                      >
                        <Star className={`w-6 h-6 ${star <= newRating ? 'fill-current' : 'text-gray-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#2C2C2C] mb-1 uppercase tracking-wider">使用配方：</label>
                  <select
                    value={newProductUsed}
                    onChange={(e) => setNewProductUsed(e.target.value)}
                    className="w-full p-2.5 border border-[#E5E2D9] bg-white text-xs"
                  >
                    <option value="Saheli 智能植物盖白发套组【自然深棕】">Saheli 智能植物盖白发套组【自然深棕】</option>
                    <option value="Saheli 经典特级红海娜粉">Saheli 经典特级红海娜粉</option>
                    <option value="Saheli 纯净木蓝/靛蓝粉">Saheli 纯净木蓝/靛蓝粉</option>
                    <option value="Saheli 无色海娜/决明子亮发粉">Saheli 无色海娜/决明子亮发粉</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#2C2C2C] mb-1 uppercase tracking-wider">评测内容：</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="例如：搅拌泥很细腻，染完头皮很舒服，盖白发效果很自然..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full p-2.5 border border-[#E5E2D9] bg-white focus:outline-none focus:border-[#5B6346]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 border border-[#E5E2D9] bg-white text-gray-700 font-semibold uppercase tracking-wider"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#5B6346] text-white font-bold uppercase tracking-widest hover:bg-[#4A5039]"
                  >
                    发布评测
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
