import React from 'react';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const DevelopmentRoadmap: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].roadmap;

  return (
    <section id="roadmap" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2D6A4F] mb-3">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#132A1C] leading-tight font-heading mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#526458] font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Legend Indicators - Clean Unboxed Text with Separators */}
        <div className="mb-8 flex flex-wrap items-center gap-4 text-xs font-sans text-[#526458]">
          <span className="font-semibold text-[#132A1C]">{lang === 'id' ? 'Status Milestone:' : 'Status Flags:'}</span>
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.statuses.completed}</span>
          </div>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <div className="flex items-center gap-1.5 text-amber-700 font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.statuses.inDev}</span>
          </div>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <div className="flex items-center gap-1.5 text-neutral-600 font-medium">
            <Calendar className="w-3.5 h-3.5 text-neutral-500" />
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
                className="bg-[#FAFDF9] rounded-2xl p-7 border border-[#DCE5DC] shadow-xs flex flex-col justify-between hover:border-[#2D6A4F]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#1E4D2B]">
                      {item.phase}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isCompleted
                          ? 'text-emerald-700'
                          : isInDev
                          ? 'text-amber-700'
                          : 'text-neutral-500'
                      }`}
                    >
                      {isCompleted
                        ? t.statuses.completed
                        : isInDev
                        ? t.statuses.inDev
                        : t.statuses.planned}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#132A1C] font-heading mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#526458] font-sans leading-relaxed">
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
