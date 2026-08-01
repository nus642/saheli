import React from 'react';
import { ExternalLink, Factory, MapPin, ShieldCheck } from 'lucide-react';
import { BRAND_MILESTONES, CERTIFICATIONS } from '../data/initialData';

export const BrandStoryPage: React.FC = () => {
  const certification = CERTIFICATIONS[0];

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <section className="border border-[#E5E2D9] bg-[#5B6346] text-[#FAF9F6] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E8E2D6]">Heritage & Origin</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light leading-tight">
              源自 Sojat，三十多年的海娜与草本护理品牌
            </h1>
            <p className="text-base sm:text-lg text-[#E5E2D9] leading-relaxed">
              Saheli 于 1990 年在印度 Rajasthan 的 Sojat 开始发展，由 Deepak Industries 经营。品牌希望成为消费者自然护理过程中的朋友与伙伴。
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="flex items-center gap-2 border border-white/30 px-3 py-2"><MapPin className="w-4 h-4" />Sojat, Rajasthan, India</span>
              <span className="flex items-center gap-2 border border-white/30 px-3 py-2"><Factory className="w-4 h-4" />经营主体：Deepak Industries</span>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A5A093] font-semibold">Brand Chronicle</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2C2C]">品牌与企业历史</h2>
            <p className="text-sm text-gray-500">企业历史与品牌起点分别记录，避免混淆。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRAND_MILESTONES.map((milestone) => (
              <article key={milestone.year} className="p-6 bg-white border border-[#E5E2D9]">
                <div className="text-2xl font-serif text-[#5B6346] mb-2">{milestone.year}</div>
                <h3 className="font-serif font-bold text-[#2C2C2C] mb-2">{milestone.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#5B6346] text-[#FAF9F6] p-8 sm:p-12 border border-[#E5E2D9] space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E8E2D6]">Organic Certification</span>
            <h2 className="text-2xl sm:text-3xl font-serif">{certification.name}</h2>
            <p className="text-sm text-[#E5E2D9] leading-relaxed">{certification.description}</p>
          </div>
          <div className="bg-white/10 border border-white/20 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex gap-3 sm:col-span-2"><ShieldCheck className="w-5 h-5 shrink-0" /><strong>{certification.badgeText}</strong></div>
            <p><span className="text-[#E8E2D6]">持证主体：</span>{certification.holder}</p>
            <p><span className="text-[#E8E2D6]">{certification.agency}</span></p>
            <p><span className="text-[#E8E2D6]">标准：</span>{certification.standard}</p>
            <p><span className="text-[#E8E2D6]">业务类别：</span>{certification.scope}</p>
            <p><span className="text-[#E8E2D6]">Operation ID：</span>{certification.operationId}</p>
            <p><span className="text-[#E8E2D6]">证书编号：</span>{certification.certificateNumber}</p>
            <p><span className="text-[#E8E2D6]">首次认证日期：</span>{certification.firstCertified}</p>
            <p><span className="text-[#E8E2D6]">证书签发日期：</span>{certification.issued}</p>
          </div>
          <div className="space-y-4 text-sm text-[#E5E2D9]">
            <p>具体认证范围以证书附录及 USDA Organic Integrity Database 的实时状态为准。认证持续有效，直至放弃、暂停或撤销；周年更新日期 5 月 1 日并非失效日期。</p>
            <a href={certification.verificationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/40 px-4 py-2 hover:bg-white hover:text-[#5B6346] transition-colors">
              <ExternalLink className="w-4 h-4" />前往 USDA 官方数据库查询
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
