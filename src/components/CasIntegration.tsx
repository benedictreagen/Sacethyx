import React, { useState } from 'react';
import { Plus, Check, Shield, Layers, Sparkles, Wind, Gauge, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const CasIntegration: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].cas;
  const [mode, setMode] = useState<'casOnly' | 'casPlus'>('casPlus');

  return (
    <section id="cas-integration" className="py-20 lg:py-28 bg-[#EEF4EE] border-b border-[#D8E6D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2D6A4F] mb-3">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#132A1C] leading-tight font-heading mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A6453] font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* INTERACTIVE MODE TOGGLE BAR */}
        <div className="mb-10 bg-white border border-[#D5E4D6] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
            <span className="text-xs font-mono font-bold text-[#132A1C] uppercase tracking-wider">
              {t.toggleLabel}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#E2EBE2] p-1 rounded-xl border border-[#CCDCCD] self-start sm:self-auto">
            <button
              onClick={() => setMode('casOnly')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-heading ${
                mode === 'casOnly'
                  ? 'bg-white text-[#132A1C] shadow-2xs'
                  : 'text-[#4A6B53] hover:text-[#132A1C]'
              }`}
            >
              {t.casOnlyBtn}
            </button>
            <button
              onClick={() => setMode('casPlus')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 font-heading ${
                mode === 'casPlus'
                  ? 'bg-[#1E4D2B] text-white shadow-xs'
                  : 'text-[#4A6B53] hover:text-[#132A1C]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A3E635]" />
              <span>{t.casPlusBtn}</span>
            </button>
          </div>
        </div>

        {/* Live Visual Atmosphere Layer Schematics */}
        <div className="bg-[#0E2014] text-white rounded-3xl p-6 lg:p-8 border border-[#204429] mb-10 shadow-md">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E3F27]">
            <span className="text-xs font-mono font-bold text-emerald-300">
              {mode === 'casOnly' ? 'MODE: CAS ONLY (Standard Atmosphere)' : 'MODE: CAS + SACETHYX (Active Ethylene Layer Active)'}
            </span>
            <span className="text-xs font-mono text-emerald-200/70">
              {mode === 'casOnly'
                ? lang === 'id' ? 'Tanpa Adsorpsi Etilen Khusus' : 'No Targeted Ethylene Adsorption'
                : lang === 'id' ? 'Perlindungan Etilen Menyeluruh Aktif' : 'Comprehensive Ethylene Protection Active'}
            </span>
          </div>

          {/* Visual Simulation Display Box */}
          <div className="relative rounded-2xl bg-[#08150C] border border-[#183620] p-6 min-h-[220px] flex flex-col justify-between overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* CAS Base Chamber */}
              <div className="md:col-span-6 bg-[#122818] rounded-xl p-4 border border-[#21472B]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>CAS Primary Chamber</span>
                  </span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-mono">
                    O₂: 2% · CO₂: 3%
                  </span>
                </div>
                <p className="text-xs text-emerald-100/80 mb-3">
                  {lang === 'id'
                    ? 'Atmosfer gas makro terkendali menjaga laju respirasi dasar tetap rendah.'
                    : 'Regulated macro-gases suppress baseline respiration rate.'}
                </p>
                <div className="text-[11px] font-mono text-amber-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    {mode === 'casOnly'
                      ? lang === 'id' ? 'Etilen berakumulasi tanpa saringan' : 'Ethylene accumulates unscrubbed'
                      : lang === 'id' ? 'Etilen dialirkan ke lapisan SACETHYX' : 'Ethylene routed into SACETHYX layer'}
                  </span>
                </div>
              </div>

              {/* Dynamic Added Layer Indicator */}
              <div className="md:col-span-6">
                {mode === 'casPlus' ? (
                  <div className="bg-gradient-to-br from-[#1E4D2B] to-[#12381C] rounded-xl p-4 border-2 border-emerald-400 shadow-md animate-in fade-in duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-emerald-300" />
                        <span>SACETHYX Ethylene Layer</span>
                      </span>
                      <span className="text-[10px] bg-emerald-400 text-emerald-950 px-2 py-0.5 rounded font-mono font-bold">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-xs text-emerald-100 mb-2">
                      {lang === 'id'
                        ? 'Menyerap gas etilen secara selektif menggunakan karbon aktif ampas tebu.'
                        : 'Selectively captures volatile ethylene using sugarcane bagasse carbon.'}
                    </p>
                    <div className="text-[11px] font-mono text-emerald-200">
                      ✓ {lang === 'id' ? 'Menekan hormon pemicu penuaan' : 'Eliminates senescence triggers'}
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#0C1B10] rounded-xl p-4 border border-dashed border-[#1E3E26] text-center text-xs text-emerald-200/50 flex flex-col items-center justify-center py-6">
                    <span>{lang === 'id' ? 'Lapisan etilen tidak terpasang' : 'No ethylene management layer mounted'}</span>
                    <span className="text-[10px] text-amber-400/80 mt-1 font-mono">
                      {lang === 'id' ? 'Risiko: Pelunakan buah dini tetap terjadi' : 'Risk: Premature pulp softening persists'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2 Comparative Columns (CAS vs SACETHYX) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">
          {/* Box 1: CAS Scope */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 lg:p-8 border border-[#DCE5DC] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#465A4E] bg-[#F0F4F0] px-3 py-1 rounded-md">
                  {t.casBox.tag}
                </span>
                <span className="text-xs font-semibold text-[#5A7764]">Macro Envelope</span>
              </div>

              <h3 className="text-2xl font-bold text-[#132A1C] font-display mb-2 flex items-center gap-2">
                <Shield className="w-6 h-6 text-[#2D6A4F]" />
                <span>{t.casBox.title}</span>
              </h3>
              <p className="text-xs text-[#5E7A68] mb-6">{t.casBox.note}</p>

              <div className="space-y-3">
                {t.casBox.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#2C4836]">
                    <div className="w-5 h-5 rounded-full bg-[#EAF3EB] flex items-center justify-center text-[#2D6A4F] shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EEF4EE] text-xs text-[#5E7A68]">
              <em>{lang === 'id' ? 'Disediakan oleh kontraktor sistem pendingin pelanggan.' : 'Maintained by customer cold-chain contractor.'}</em>
            </div>
          </div>

          {/* Plus Separator */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="w-12 h-12 rounded-full bg-[#E5F0E5] border border-[#CCDCCC] flex items-center justify-center text-[#2D6A4F] font-bold shadow-xs">
              <Plus className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#2D6A4F] mt-2 text-center uppercase tracking-wider">
              {lang === 'id' ? 'Lapisan Terintegrasi' : 'Integrated Layer'}
            </span>
          </div>

          {/* Box 2: SACETHYX Scope */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1E4D2B] to-[#15381F] text-white rounded-3xl p-7 lg:p-8 border border-[#2D6A4F] shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-emerald-200 bg-white/10 px-3 py-1 rounded-md">
                  {t.sacethyxBox.tag}
                </span>
                <span className="text-xs font-semibold text-emerald-300">Targeted Hormone Layer</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-display mb-2 flex items-center gap-2">
                <Layers className="w-6 h-6 text-emerald-300" />
                <span>{t.sacethyxBox.title}</span>
              </h3>
              <p className="text-xs text-emerald-100/80 mb-6">{t.sacethyxBox.note}</p>

              <div className="space-y-3">
                {t.sacethyxBox.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-emerald-50">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-700/60 text-xs text-emerald-200/80">
              <em>{lang === 'id' ? 'Pemasangan non-invasif pada dinding ruang simpan.' : 'Non-invasive retrofit to storage walls.'}</em>
            </div>
          </div>
        </div>

        {/* Combined Value Banner */}
        <div className="bg-gradient-to-r from-[#E8F3E9] via-[#F1F7F1] to-[#E8F3E9] rounded-2xl p-6 lg:p-8 border border-[#CFDFCF] shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1E4D2B] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase tracking-wider block">
                  {t.synergy.badge}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#132A1C] font-display">
                  {t.synergy.headline}
                </h4>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[#3E5C47] max-w-md">
              <p>{t.synergy.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
