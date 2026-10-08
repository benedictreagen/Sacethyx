import React, { useState } from 'react';
import { Layers, Wind, Radio, Cpu, Network, CheckCircle2, ChevronRight, Eye, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { IMAGES } from '../data/assets';

export const ProductArchitecture: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].components;
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const imagesMap = [
    IMAGES.cartridgeHardwareModule,
    IMAGES.flowBlower,
    IMAGES.senseSensor,
    IMAGES.controllerHub,
    IMAGES.integrationFlange
  ];

  const currentComp = t.list[selectedIdx];
  const currentImg = imagesMap[selectedIdx];

  return (
    <section id="components" className="py-20 lg:py-28 bg-[#F2F7F2] border-b border-[#DFE7DF]">
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

        {/* PROMINENT INTERACTIVE 5-COMPONENT INSPECTION WORKBENCH */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-[#D8E6D8] shadow-md mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#EDF4ED] gap-2">
            <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase tracking-wider">
              {t.clickPrompt}
            </span>
            <div className="text-xs font-mono text-[#5E7A68]">
              {selectedIdx + 1} / 5 Selected · High-Res Agritech Hardware Render
            </div>
          </div>

          {/* Component Tabs Horizontal Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
            {t.list.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1E4D2B] text-white border-[#1E4D2B] shadow-sm transform -translate-y-0.5'
                      : 'bg-[#FAFDF9] text-[#132A1C] border-[#DCE5DC] hover:border-[#2D6A4F]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#EAF3EB] text-[#2D6A4F]'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-emerald-200' : 'text-[#5E7A68]'
                      }`}
                    >
                      {item.id === 'cartridge' ? 'CORE' : 'MODULE'}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold leading-tight line-clamp-1">{item.name}</h4>
                </button>
              );
            })}
          </div>

          {/* Large Focused Showcase Display for Selected Component */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAFDF9] p-6 lg:p-8 rounded-2xl border border-[#DDE7DD]">
            {/* Visual Image Render */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#D5E1D5] shadow-xs bg-neutral-100 group">
                <img
                  src={currentImg}
                  alt={currentComp.name}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-1">
                    {currentComp.num} // {currentComp.role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display">{currentComp.name}</h3>
                  <span className="text-xs text-white/80 font-mono mt-0.5">
                    Engineered Agritech Subsystem Hardware
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Detail Specifications */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#1E4D2B] bg-[#EAF3EB] px-3 py-1 rounded-md">
                  {currentComp.role}
                </span>
                <span className="text-xs text-[#5E7A68] font-mono">
                  {currentComp.id === 'cartridge' ? 'Proprietary Core Asset' : 'Hardware Integration Module'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#132A1C] font-display">
                {currentComp.name}
              </h3>

              <p className="text-sm sm:text-base text-[#465A4E] leading-relaxed">
                {currentComp.desc}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-white rounded-xl border border-[#DDE7DD]">
                  <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase tracking-wider block mb-1">
                    {lang === 'id' ? 'Fungsi Teknis Spesifik:' : 'Specific Technical Function:'}
                  </span>
                  <p className="text-xs text-[#132A1C] font-medium">
                    {currentComp.techFunction}
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#DDE7DD]">
                  <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase tracking-wider block mb-1">
                    {lang === 'id' ? 'Peran dalam Sistem:' : 'Role in Complete System:'}
                  </span>
                  <p className="text-xs text-[#132A1C] font-medium">
                    {currentComp.systemRole}
                  </p>
                </div>
              </div>

              {/* Location in System Schematic Marker */}
              <div className="p-3 bg-[#EAF3EB] rounded-xl border border-[#CDDECE] flex items-center justify-between text-xs text-[#2A4835]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
                  <span>
                    {lang === 'id' ? 'Status Integrasi:' : 'Integration Status:'}{' '}
                    <strong>{lang === 'id' ? 'Modular & Siap Pasang' : 'Modular & Ready for Retrofit'}</strong>
                  </span>
                </div>
                <span className="font-mono text-[#1E4D2B] font-bold">Slot #{currentComp.num}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
