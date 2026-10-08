import React, { useState } from 'react';
import { Layers, Wind, Activity, Atom, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { IMAGES } from '../data/assets';

export const TechnologySection: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].techJourney;
  const [selectedStage, setSelectedStage] = useState<number>(2);

  const stageRelevance = [
    {
      title: lang === 'id' ? 'Karakteristik Biomassa' : 'Biomass Feedstock Profile',
      point: lang === 'id' ? 'Kandungan lignin & selulosa tinggi ideal sebagai prekursor karbon.' : 'High lignin & cellulose content ideal as carbon precursor.'
    },
    {
      title: lang === 'id' ? 'Parameter Pirolisis' : 'Pyrolysis Parameters',
      point: lang === 'id' ? 'Karbonisasi pada 500–700°C dilanjutkan perlakuan aktivator kimia.' : 'Carbonized at 500–700°C followed by activating chemical agent.'
    },
    {
      title: lang === 'id' ? 'Struktur Permukaan Pori' : 'Pore Surface Structure',
      point: lang === 'id' ? 'Distribusi mikropori (<2nm) dan mesopori (2–50nm) untuk gas C₂H₄.' : 'Micropore (<2nm) and mesopore (2–50nm) tuned for C₂H₄ gas.'
    },
    {
      title: lang === 'id' ? 'Konstruksi Modular' : 'Modular Enclosure',
      point: lang === 'id' ? 'Rangka kisi aliran seragam dengan segel kedap udara.' : 'Uniform grid distribution frame with airtight boundary gasket.'
    },
    {
      title: lang === 'id' ? 'Kinetika Adsorpsi Fisis' : 'Physical Adsorption Kinetics',
      point: lang === 'id' ? 'Gaya van der Waals mengikat etilen tanpa residu kimia sekunder.' : 'Van der Waals forces trap ethylene without chemical residue.'
    },
    {
      title: lang === 'id' ? 'Integrasi Telemetri' : 'Telemetry Integration',
      point: lang === 'id' ? 'Sensor NDIR & semikonduktor memantau tren ppm ruang simpan.' : 'Sensor array tracks ppm variations across cold bays.'
    },
    {
      title: lang === 'id' ? 'Hasil Komersial' : 'Commercial Outcome',
      point: lang === 'id' ? 'Menekan laju pelunakan buah dan memperpanjang jendela ekspor.' : 'Retards fruit softening and expands distribution radius.'
    }
  ];

  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#F8FAF7] border-b border-[#E3ECE3]">
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

        {/* HORIZONTAL INTERACTIVE STAGES STRIP */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center gap-3 min-w-[760px]">
            {t.stages.map((stage, idx) => {
              const isSelected = selectedStage === idx;
              return (
                <div key={stage.num} className="flex items-center">
                  <button
                    onClick={() => setSelectedStage(idx)}
                    className={`px-4 py-3 rounded-2xl text-left border transition-all cursor-pointer whitespace-nowrap flex items-center gap-2.5 ${
                      isSelected
                        ? 'bg-[#1E4D2B] text-white border-[#1E4D2B] shadow-sm font-bold scale-[1.03]'
                        : 'bg-white text-[#132A1C] border-[#DCE5DC] hover:border-[#2D6A4F]/60'
                    }`}
                  >
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#EAF3EB] text-[#2D6A4F]'
                      }`}
                    >
                      {stage.num}
                    </span>
                    <span className="text-xs font-bold font-display">{stage.name}</span>
                  </button>
                  {idx < t.stages.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-[#8BA090] mx-1 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Focused Active Stage Details Card */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-[#DCE5DC] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Detail Copy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#1E4D2B] bg-[#EAF3EB] px-3 py-1 rounded-md">
                  STAGE {t.stages[selectedStage].num} OF 07
                </span>
                <span className="text-xs font-mono text-[#5E7A68]">
                  Scientific Technology Pathway
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#132A1C] font-display">
                {t.stages[selectedStage].name}
              </h3>

              <p className="text-sm sm:text-base text-[#465A4E] leading-relaxed">
                {t.stages[selectedStage].desc}
              </p>

              <div className="p-4 bg-[#F2F8F2] rounded-2xl border border-[#D5E5D5] space-y-2">
                <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase tracking-wider block">
                  {stageRelevance[selectedStage].title}
                </span>
                <p className="text-xs sm:text-sm text-[#132A1C] font-medium leading-relaxed">
                  {stageRelevance[selectedStage].point}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#5A7764]">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
                <span>
                  {lang === 'id'
                    ? 'Material & proses melalui tahapan sintesis laboratorium tervalidasi.'
                    : 'Materials and processes subjected to standardized laboratory synthesis validation.'}
                </span>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#D5E1D5] shadow-xs">
                <img
                  src={IMAGES.sugarcaneBagasseCarbon}
                  alt="Sugarcane Bagasse Activated Carbon"
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-1">
                    Laboratory Prototype Characterization
                  </span>
                  <span className="text-xs text-white/90">
                    Engineered Porous Carbon Matrix Derived from Sugarcane Residue
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
