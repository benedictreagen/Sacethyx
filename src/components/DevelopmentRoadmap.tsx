import React from 'react';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const DevelopmentRoadmap: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].roadmap;

  return (
    <section id="roadmap" className="py-20 lg:py-28 bg-[#F2F7F2] border-b border-[#DDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2D6A4F] mb-3">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#132A1C] leading-tight font-display mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#465A4E]">
            {t.subtitle}
          </p>
        </div>

        {/* Legend Indicators */}
        <div className="mb-8 flex flex-wrap items-center gap-4 text-xs font-medium text-[#465A4E]">
          <span className="font-semibold text-[#132A1C]">{lang === 'id' ? 'Status Milestone:' : 'Status Flags:'}</span>
          <div className="flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.statuses.completed}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-100 text-amber-800 px-3 py-1 rounded-full border border-amber-200">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.statuses.inDev}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{t.statuses.planned}</span>
          </div>
        </div>

        {/* 6 Phases Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.phases.map((item, idx) => {
            const isCompleted = item.status === 'completed';
            const isInDev = item.status === 'inDev';

            return (
              <div
                key={item.phase}
                className="bg-white rounded-3xl p-7 border border-[#DCE5DC] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#1E4D2B] bg-[#EAF3EB] px-2.5 py-1 rounded">
                      {item.phase}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                        isCompleted
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : isInDev
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {isCompleted
                        ? t.statuses.completed
                        : isInDev
                        ? t.statuses.inDev
                        : t.statuses.planned}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#132A1C] font-display mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#465A4E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#EEF4EE] flex items-center justify-between text-[11px] font-mono text-[#5E7A68]">
                  <span>Step 0{idx + 1} / 06</span>
                  <span>{isCompleted ? '✓ Completed' : 'In Progress'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
