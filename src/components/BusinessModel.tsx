import React from 'react';
import { ArrowRight, RefreshCw, Wrench, Shield, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const BusinessModel: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].businessModel;

  return (
    <section id="business-model" className="py-20 lg:py-28 bg-[#F8FAF7] border-b border-[#E3ECE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
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

        {/* VISUAL BUSINESS MODEL WORKBENCH */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-[#DCE5DC] shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-[#EDF4ED] gap-2">
            <h3 className="text-lg font-bold text-[#132A1C] font-display">
              {lang === 'id' ? 'Alur Nilai & Flywheel Pendapatan B2B' : 'B2B Commercial Value Flywheel'}
            </h3>
            <span className="text-xs font-mono font-bold text-[#1E4D2B] bg-[#EAF3EB] px-3 py-1 rounded-md">
              B2B Hardware + Consumable Model
            </span>
          </div>

          {/* Stepper Pipeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 mb-8">
            {t.steps.map((step, idx) => {
              const isRecurring = idx === 2; // Cartridge Replacement
              return (
                <div
                  key={step.name}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between relative ${
                    isRecurring
                      ? 'bg-gradient-to-br from-[#1E4D2B] to-[#123A1B] text-white border-[#2D6A4F] shadow-md ring-2 ring-emerald-400'
                      : 'bg-[#FAFDF9] text-[#132A1C] border-[#DCE7DC]'
                  }`}
                >
                  {isRecurring && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 text-[9px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full shadow-xs whitespace-nowrap">
                      ★ CORE RECURRING ENGINE
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          isRecurring ? 'bg-white/20 text-white' : 'bg-[#EAF3EB] text-[#2D6A4F]'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      {idx < t.steps.length - 1 && (
                        <ArrowRight
                          className={`w-4 h-4 hidden md:block ${
                            isRecurring ? 'text-white/60' : 'text-[#87A08F]'
                          }`}
                        />
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold mb-1.5 leading-snug font-display">
                      {step.name}
                    </h4>
                    <p
                      className={`text-xs leading-relaxed ${
                        isRecurring ? 'text-emerald-100' : 'text-[#465A4E]'
                      }`}
                    >
                      {step.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recurring Revenue Spotlight Banner */}
          <div className="bg-[#F2F8F2] rounded-2xl p-6 lg:p-8 border border-[#CCE0CD] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1E4D2B] text-white flex items-center justify-center shrink-0 shadow-xs">
                <RefreshCw className="w-6 h-6 text-emerald-300 animate-spin" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#1E4D2B] uppercase tracking-wider block">
                  {t.recurringHighlight}
                </span>
                <h4 className="text-lg font-bold text-[#132A1C] font-display">
                  {lang === 'id' ? 'Siklus Penggantian Kartrid Adsorben Berkelanjutan' : 'Ongoing Cartridge Replenishment Cycles'}
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#3E5C47] max-w-lg">
              {t.recurringDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
