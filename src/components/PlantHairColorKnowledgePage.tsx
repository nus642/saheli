import React from 'react';
import { AlertTriangle, Beaker, BookOpen, CheckCircle2, Droplets, FlaskConical, Timer } from 'lucide-react';

export const TWO_STEP_DYE_STEPS = [
  '清洁头发，去除油脂和造型产品。',
  '第一段使用纯海娜底染；Saheli 纯海娜按包装加水调成糊状，并静置约 2 小时。',
  '将海娜泥均匀覆盖白发，戴塑料帽保持湿润；停留时间以所用海娜产品包装为准。',
  '用清水冲净海娜泥，并在同一天进行第二段。',
  '自然黑或深棕色粉加入约 40°C 温水调匀，调好立即使用，不要长时间静置。',
  '戴手套分层涂抹，覆盖塑料帽；不使用加热帽，停留约 60 分钟。',
  '用清水冲洗，不使用洗发水，也不使用吹风机。',
  '预留约 24 小时让颜色逐渐加深；刚冲洗后的颜色不是最终效果。',
] as const;

export const KITCHEN_ADDITIVE_GUIDANCE = [
  { name: '柠檬汁／醋', evidence: '温和酸性与海娜染料释放存在一定化学依据，但浓度难控制，并非必需。', advice: '不加入标准流程' },
  { name: '茶', evidence: '单宁可能影响色调，但目前只有特定条件下的有限证据。', advice: '不作为功效建议' },
  { name: '咖啡', evidence: '没有可靠证据证明能把海娜稳定染成棕色或明显加深。', advice: '不能替代靛蓝' },
  { name: '酸奶', evidence: '没有可靠证据证明能提高上色，还会改变酸度、黏度和冲洗条件。', advice: '不建议添加' },
] as const;

const comparison = [
  {
    title: '纯海娜／底粉',
    icon: Timer,
    points: ['重点是让海娜染料充分释放', 'Saheli 纯海娜按包装静置约 2 小时', '覆盖塑料帽，保持染泥湿润', '包装未要求时，不把主动加热列为标准步骤'],
  },
  {
    title: '含靛蓝的目标色粉',
    icon: Droplets,
    points: ['自然黑和深棕均含靛蓝叶粉', '使用约 40°C 温水调制', '调好立即使用，不长时间静置', '不额外加热；按包装停留约 60 分钟'],
  },
];

export const PlantHairColorKnowledgePage: React.FC = () => (
  <div className="bg-[#FAF9F6] py-12 lg:py-20 font-sans">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <header className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#5B6346] text-[#5B6346] text-[10px] uppercase tracking-widest font-semibold">
          <BookOpen className="w-3.5 h-3.5" /> Science-based Guide
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#2C2C2C] font-light">植物染发知识与使用指南</h1>
        <p className="text-base text-gray-600 leading-relaxed">
          用包装说明确定具体操作，用可核查资料解释背后的原理。植物粉种类不同，调制、静置和显色方式也不同。
        </p>
      </header>

      <section className="bg-[#6A3327] text-white p-6 sm:p-8 border border-[#54271E] space-y-3" aria-labelledby="two-step-alert-title">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5 text-[#F1D5A8]" />
          <div className="space-y-2">
            <h2 id="two-step-alert-title" className="font-serif text-2xl">白发较多，希望染成自然黑或深棕？</h2>
            <p className="text-sm leading-relaxed text-[#F7EDE8]">
              建议先用纯海娜完成底染，再于同一天使用自然黑或深棕目标色粉。第一段建立海娜暖色底，第二段再由含靛蓝的配方调整为目标深色。
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="comparison-title">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#5B6346]">先分清粉的类型</p>
          <h2 id="comparison-title" className="text-2xl sm:text-3xl font-serif text-[#2C2C2C]">为什么两种粉不能按同一种方法处理？</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {comparison.map(({ title, icon: Icon, points }) => (
            <article key={title} className="bg-white border border-[#E5E2D9] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F2F0E9] text-[#5B6346] flex items-center justify-center"><Icon className="w-5 h-5" /></div>
                <h3 className="font-serif text-xl text-[#2C2C2C]">{title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {points.map((point) => <li key={point} className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#5B6346]" /><span>{point}</span></li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="steps-title">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#5B6346]">Two-step method</p>
          <h2 id="steps-title" className="text-2xl sm:text-3xl font-serif text-[#2C2C2C]">同日两段染流程</h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TWO_STEP_DYE_STEPS.map((step, index) => (
            <li key={step} className="bg-white border border-[#E5E2D9] p-5 flex gap-4">
              <span className="w-8 h-8 shrink-0 bg-[#5B6346] text-white flex items-center justify-center font-mono text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
              <p className="text-sm text-gray-600 leading-relaxed pt-1">{step}</p>
            </li>
          ))}
        </ol>
        <p className="text-xs text-gray-500 border-l-2 border-[#A5A093] pl-3">
          纯海娜的上头停留时间因产品而异；Saheli 当前包装资料没有给出该数字，本指南不自行补写。请遵循所使用纯海娜产品的包装说明。
        </p>
      </section>

      <section className="space-y-5" aria-labelledby="ph-title">
        <div className="flex items-center gap-3">
          <Beaker className="w-6 h-6 text-[#5B6346]" />
          <h2 id="ph-title" className="text-2xl sm:text-3xl font-serif text-[#2C2C2C]">弱酸会“打开毛鳞片”吗？</h2>
        </div>
        <div className="bg-white border border-[#E5E2D9] p-6 text-sm text-gray-600 leading-relaxed space-y-3">
          <p><strong className="text-[#6A3327]">不会，这个说法并不准确。</strong> 毛鳞片不是简单的开关。偏碱环境更容易使毛发膨胀并增加表面摩擦；温和偏酸环境通常更接近头发和头皮状态，过强酸性同样可能带来刺激或结构影响。</p>
          <p>植物染能否良好上色，主要取决于染料释放、与角蛋白结合、覆盖是否均匀、染泥是否保持湿润以及停留时间，而不是用酸把毛鳞片“打开”。</p>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="additives-title">
        <div className="flex items-center gap-3">
          <FlaskConical className="w-6 h-6 text-[#5B6346]" />
          <h2 id="additives-title" className="text-2xl sm:text-3xl font-serif text-[#2C2C2C]">茶、咖啡、酸奶、柠檬汁有必要吗？</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {KITCHEN_ADDITIVE_GUIDANCE.map((item) => (
            <article key={item.name} className="bg-white border border-[#E5E2D9] p-5 space-y-2">
              <div className="flex items-center justify-between gap-3"><h3 className="font-serif text-lg text-[#2C2C2C]">{item.name}</h3><span className="text-[10px] bg-[#F5EDE8] text-[#6A3327] px-2 py-1 font-bold">{item.advice}</span></div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.evidence}</p>
            </article>
          ))}
        </div>
        <div className="bg-[#F2F0E9] border border-[#D8D4C7] p-5 text-sm text-[#2C2C2C] leading-relaxed">
          <strong>统一建议：</strong>请按包装说明只加水调制，不自行加入茶、咖啡、柠檬汁、醋、酸奶或精油。额外材料会同时改变酸碱度、黏度和染料释放，使结果难以预测；含靛蓝的自然黑和深棕尤其不应加入酸性材料。
        </div>
      </section>

      <section className="border-t border-[#E5E2D9] pt-6 text-xs text-gray-500 leading-relaxed space-y-2">
        <p><strong className="text-[#2C2C2C]">证据边界：</strong>具体产品操作以包装说明为准；科学资料用于解释原理，不替代产品说明，也不代表所有植物粉配方均适用同一方法。</p>
        <p><strong className="text-[#2C2C2C]">使用安全：</strong>仅供外用。使用前进行皮肤测试和发束测试；如出现明显刺激，请立即停止使用并彻底冲洗。最后核验：2026-09-23。</p>
        <details className="pt-2">
          <summary className="cursor-pointer font-semibold text-[#5B6346]">查看主要科学资料来源</summary>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li><a className="underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9692289/" target="_blank" rel="noopener noreferrer">Recent Advancements in Natural Plant Colorants Used for Hair Dye Applications（综述）</a></li>
            <li><a className="underline" href="https://pubmed.ncbi.nlm.nih.gov/39529213/" target="_blank" rel="noopener noreferrer">Insights into structural and proteomic alterations related to pH-induced changes in hair</a></li>
            <li><a className="underline" href="https://pubmed.ncbi.nlm.nih.gov/25210332/" target="_blank" rel="noopener noreferrer">The Shampoo pH can Affect the Hair: Myth or Reality?</a></li>
            <li><a className="underline" href="https://patents.google.com/patent/WO2014104301A1/en" target="_blank" rel="noopener noreferrer">Indigo leaf dye chemistry and low-temperature preparation（技术资料）</a></li>
          </ul>
        </details>
      </section>
    </div>
  </div>
);
