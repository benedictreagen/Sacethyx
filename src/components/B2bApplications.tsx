import React, { useState } from 'react';
import { Warehouse, PackageCheck, Truck, Factory, Globe2, Network, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { IMAGES } from '../data/assets';

export const B2bApplications: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].supplyChain;
  const [activeStageIdx, setActiveStageIdx] = useState<number>(2); // Default to Cold Storage & CAS

  const stageIcons = [Warehouse, PackageCheck, Factory, Network, Globe2];

  const currentStage = t.steps[activeStageIdx];
  const CurrentIcon = stageIcons[activeStageIdx];

  return (
    <section id="applications" className="py-20 lg:py-28 bg-[#EFF4F0] border-b border-[#D8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2D6A4F] mb-3">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#132A1C] leading-tight font-heading mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4E6756] font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Highlight Image Banner */}
        <div className="mb-10 rounded-3xl overflow-hidden border border-[#DCE5DC] shadow-xs relative">
          <img
            src={IMAGES.packhouseFacility}
            alt="Commercial Horticulture Packhouse and Sorting Facility"
            className="w-full h-56 sm:h-72 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-1">
              Industrial Post-Harvest Facilities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              {lang === 'id'
                ? 'Perlindungan Kualitas Ekspor Melintasi Seluruh Rantai Distribusi'
                : 'Preserving Export-Grade Produce Across Logistics Milestones'}
            </h3>
          </div>
        </div>

        {/* INTERACTIVE SUPPLY CHAIN PROGRESSION TRACK */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-[#DCE5DC] shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#EDF4ED] gap-2">
            <span className="text-xs font-mono font-bold text-[#1E4D2B] uppercase tracking-wider">
              {lang === 'id' ? 'KLIK TAHAPAN RANTAI PASOK UNTUK INSPEKSI TITIK KRITIS' : 'CLICK SUPPLY CHAIN STAGE TO INSPECT BOTTLENECK'}
            </span>
            <span className="text-xs font-mono text-[#5E7A68]">
              Stage {activeStageIdx + 1} / 5
            </span>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {t.steps.map((step, idx) => {
              const isSelected = activeStageIdx === idx;
              const Icon = stageIcons[idx];
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1E4D2B] text-white border-[#1E4D2B] shadow-sm transform -translate-y-0.5'
                      : 'bg-[#FAFDF9] text-[#132A1C] border-[#DCE5DC] hover:border-[#2D6A4F]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-emerald-300' : 'text-[#2D6A4F]'}`} />
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#EAF3EB] text-[#2D6A4F]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold font-display">{step.title}</h4>
                </button>
              );
            })}
          </div>

          {/* Active Stage Inspection Card */}
          <div className="bg-[#F4F9F4] rounded-2xl p-6 lg:p-8 border border-[#DCE7DC] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-2 flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-[#D5E4D5] shadow-2xs">
              <div className="w-14 h-14 rounded-2xl bg-[#1E4D2B] text-white flex items-center justify-center mb-2 shadow-xs">
                <CurrentIcon className="w-7 h-7 text-emerald-300" />
              </div>
              <span className="text-xs font-mono font-bold text-[#132A1C] text-center">
                Stage 0{activeStageIdx + 1}
              </span>
            </div>

            <div className="md:col-span-10 space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#132A1C] font-display">
                {currentStage.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-4 rounded-xl border border-[#DCE7DC]">
                  <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider block mb-1">
                    {lang === 'id' ? 'Tantangan Ruang Simpan:' : 'Storage Challenge:'}
                  </span>
                  <p className="text-xs text-[#465A4E] leading-relaxed">
                    {currentStage.challenge}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DCE7DC]">
                  <span className="text-xs font-mono font-bold text-[#1E4D2B] uppercase tracking-wider block mb-1">
                    {lang === 'id' ? 'Aplikasi Solusi SACETHYX:' : 'SACETHYX Application:'}
                  </span>
                  <p className="text-xs text-[#465A4E] leading-relaxed">
                    {currentStage.application}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
