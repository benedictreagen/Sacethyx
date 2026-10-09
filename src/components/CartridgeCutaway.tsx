import React, { useState } from 'react';
import { Layers, CheckCircle2, ChevronRight, Info, Eye, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { IMAGES } from '../data/assets';

export const CartridgeCutaway: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].cutaway;
  const [activeLayer, setActiveLayer] = useState<number>(2); // Default to activated carbon
  const [viewMode, setViewMode] = useState<'cutaway' | 'product'>('cutaway');

  const layerColors = [
    '#334E3C', // Housing
    '#2D6A4F', // Filter
    '#1E4D2B', // Carbon
    '#1B3D25', // Channel
    '#122819'  // Outlet
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAFDF9] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2D6A4F] mb-3">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#132A1C] leading-tight font-heading mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#526458] font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* INTERACTIVE CUTAWAY CANVAS & LAYER EXPLORER */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-[#DCE5DC] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-[#EEF4EE] gap-2">
            <span className="text-xs font-mono font-bold text-[#1E4D2B] uppercase tracking-wider">
              {lang === 'id' ? 'KLIK LAPISAN UNTUK MEMBEDAH ANATOMI PERANGKAT' : 'CLICK ANY LAYER TO EXPLORE INTERNAL ANATOMY'}
            </span>
            <div className="flex items-center gap-2">
              {/* Toggle Cutaway vs Real Product Photo */}
              <div className="flex items-center bg-[#EEF5EF] p-0.5 rounded-lg border border-[#DCE8DD] text-xs">
                <button
                  onClick={() => setViewMode('cutaway')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    viewMode === 'cutaway'
                      ? 'bg-white text-[#132A1C] shadow-xs'
                      : 'text-[#486350] hover:text-[#132A1C]'
                  }`}
                >
                  {lang === 'id' ? 'Penampang Silang' : 'Cross-Section'}
                </button>
                <button
                  onClick={() => setViewMode('product')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    viewMode === 'product'
                      ? 'bg-white text-[#132A1C] shadow-xs'
                      : 'text-[#486350] hover:text-[#132A1C]'
                  }`}
                >
                  {lang === 'id' ? 'Foto Produk Fisik' : 'Physical Product'}
                </button>
              </div>
              <span className="text-xs font-mono text-emerald-800 bg-[#EAF3EB] px-3 py-1 rounded-md font-bold">
                {t.badge}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Layered Cutaway SVG Graphic or Real Product Photo */}
            <div className="lg:col-span-6 bg-[#0D2013] rounded-2xl p-6 border border-[#21442A] relative flex flex-col justify-center min-h-[360px] overflow-hidden">
              {viewMode === 'cutaway' ? (
                <>
                  <div className="text-[11px] font-mono text-emerald-300 mb-4 flex items-center justify-between">
                    <span>CUTAWAY EXPLORER // CROSS-SECTION</span>
                    <span>AIRFLOW: IN → OUT</span>
                  </div>

                  {/* Stacked Interactive Cutaway Slices */}
                  <div className="space-y-2.5">
                    {t.layers.map((layer, idx) => {
                      const isSelected = activeLayer === idx;
                      return (
                        <div
                          key={layer.id}
                          onClick={() => setActiveLayer(idx)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                            isSelected
                              ? 'bg-[#1E4D2B] text-white border-emerald-400 shadow-md scale-[1.02]'
                              : 'bg-[#142A1B] text-emerald-100/80 border-[#22472E] hover:bg-[#1A3824]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-bold ${
                                isSelected ? 'bg-emerald-400 text-[#0D2013]' : 'bg-[#0A180E] text-emerald-300'
                              }`}
                            >
                              0{idx + 1}
                            </span>
                            <span className="text-xs sm:text-sm font-bold font-display">
                              {layer.name}
                            </span>
                          </div>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              isSelected ? 'rotate-90 text-emerald-300' : 'text-emerald-500/50 group-hover:translate-x-1'
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1C3D25] flex justify-between text-[10px] font-mono text-emerald-300/70">
                    <span>Quick-Swap Slide Rails</span>
                    <span>Zero Bypass Seals</span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="w-56 sm:w-64 aspect-square bg-white rounded-xl p-3 flex items-center justify-center shadow-lg border border-emerald-500/30">
                    <img
                      src={IMAGES.sacethyxCartridgeProduct}
                      alt="SACETHYX Cartridge Product"
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                      SACETHYX FILTER CARTRIDGE
                    </span>
                    <span className="text-xs text-neutral-300">
                      {lang === 'id' ? 'Tutup Aluminium Mesin CNC & Media Lipit Mikropori' : 'CNC Machined Aluminum Caps & Pleated Microporous Media'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Selected Layer Technical Data Card */}
            <div className="lg:col-span-6 bg-[#FAFDF9] rounded-2xl p-6 lg:p-8 border border-[#DCE7DC]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#1E4D2B] bg-[#EAF3EB] px-2.5 py-1 rounded">
                  LAYER 0{activeLayer + 1}
                </span>
                <span className="text-xs font-mono text-[#5E7A68]">
                  {t.layers[activeLayer].name}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#132A1C] font-display mb-4">
                {t.layers[activeLayer].name}
              </h3>

              <div className="p-4 bg-white rounded-xl border border-[#DCE7DC] mb-6 shadow-2xs">
                <p className="text-sm text-[#465A4E] leading-relaxed">
                  {t.layers[activeLayer].desc}
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#2F4E3A]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'id'
                      ? 'Format modular standar untuk kemudahan pengiriman dan penggantian berkala.'
                      : 'Standardized modular form factor for predictable logistics and quick replacements.'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'id'
                      ? 'Desain tertutup mencegah pelepasan butiran karbon ke dalam ruang komoditas buah.'
                      : 'Enclosed design prevents carbon particulate egress into fruit crates.'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'id'
                      ? 'Paking segel O-ring karet ganda memastikan nol kebocoran aliran bypass.'
                      : 'Dual rubber O-ring gasket seals ensure zero pneumatic bypass leakage.'}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E0EBE0] flex items-center gap-2 text-[11px] font-mono text-[#5A7764]">
                <Info className="w-3.5 h-3.5" />
                <span>
                  {lang === 'id'
                    ? '* Spesifikasi dimensi dan rasio berat media ditentukan berdasarkan validasi laboratorium.'
                    : '* Dimensions and media weight ratios determined via laboratory breakthrough validation.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
