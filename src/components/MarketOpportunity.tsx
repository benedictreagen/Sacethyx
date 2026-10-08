import React, { useState } from 'react';
import { Target, Users, MapPin, Building2, CheckCircle2, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const MarketOpportunity: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].market;
  const [selectedLayer, setSelectedLayer] = useState<'tam' | 'sam' | 'som'>('som');

  return (
    <section id="market" className="py-20 lg:py-28 bg-[#F2F7F2] border-b border-[#DDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2D6A4F] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#132A1C] leading-tight font-display mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#465A4E]">
            {t.subtitle}
          </p>
        </div>

        {/* INTERACTIVE CONCENTRIC TAM / SAM / SOM WORKBENCH */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-[#DCE5DC] shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-[#EEF4EE] gap-2">
            <span className="text-xs font-mono font-bold text-[#1E4D2B] uppercase tracking-wider">
              {lang === 'id' ? 'KLIK ATAU ARAHKAN KURSOR KE LAPISAN TARGET PASAR' : 'HOVER OR CLICK TARGET MARKET LAYERS'}
            </span>
            <span className="text-xs font-mono font-bold text-[#2D6A4F] bg-[#EAF3EB] px-3 py-1 rounded-md">
              {t.proxyNotice}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Concentric Circles Graphic */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-[#FAFDF9] rounded-2xl border border-[#DDE7DD]">
              <div className="relative w-72 sm:w-80 aspect-square flex items-center justify-center">
                {/* Outer Circle: TAM */}
                <div
                  onClick={() => setSelectedLayer('tam')}
                  className={`absolute w-full h-full rounded-full border-2 transition-all cursor-pointer flex flex-col items-center pt-3 ${
                    selectedLayer === 'tam'
                      ? 'border-[#2D6A4F] bg-[#EAF3EB]/80 shadow-md ring-4 ring-[#2D6A4F]/20'
                      : 'border-[#CCE0CE] bg-[#F2F7F2]/40 hover:bg-[#EAF3EB]/40'
                  }`}
                >
                  <span className="text-[11px] font-mono font-bold text-[#2D6A4F]">TAM: Rp38,78 M</span>
                </div>

                {/* Middle Circle: SAM */}
                <div
                  onClick={() => setSelectedLayer('sam')}
                  className={`absolute w-48 sm:w-56 h-48 sm:h-56 rounded-full border-2 transition-all cursor-pointer flex flex-col items-center pt-3 ${
                    selectedLayer === 'sam'
                      ? 'border-[#1E4D2B] bg-[#D8EADB] shadow-md ring-4 ring-[#1E4D2B]/30'
                      : 'border-[#B4D4B6] bg-[#E2EFE3]/70 hover:bg-[#D8EADB]/60'
                  }`}
                >
                  <span className="text-[11px] font-mono font-bold text-[#1E4D2B]">SAM: Rp17,78 M (Jawa)</span>
                </div>

                {/* Inner Core: SOM */}
                <div
                  onClick={() => setSelectedLayer('som')}
                  className={`absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full transition-all cursor-pointer flex flex-col items-center justify-center text-center shadow-lg ${
                    selectedLayer === 'som'
                      ? 'bg-[#1E4D2B] text-white ring-4 ring-emerald-400 scale-105'
                      : 'bg-[#2D6A4F] text-white hover:bg-[#1E4D2B]'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-emerald-300">SOM</span>
                  <span className="text-sm font-black font-display text-white">Rp200 Jt</span>
                  <span className="text-[8px] uppercase tracking-wider text-emerald-200">Tahun 1</span>
                </div>
              </div>

              <div className="mt-4 text-xs font-mono text-[#587361] text-center">
                {lang === 'id' ? 'Pilih: TAM (Rp38,78 M) · SAM (Rp17,78 M) · SOM (Rp200 Jt)' : 'Select: TAM (Rp38.78 B) · SAM (Rp17.78 B) · SOM (Rp200 M)'}
              </div>
            </div>

            {/* Selected Layer Readout Data */}
            <div className="lg:col-span-6 bg-[#FAFDF9] rounded-2xl p-6 lg:p-8 border border-[#DCE7DC] space-y-4">
              {selectedLayer === 'tam' && (
                <div>
                  <span className="text-xs font-mono font-bold text-[#2D6A4F] bg-[#EAF3EB] px-3 py-1 rounded-md block w-fit mb-2">
                    TOTAL ADDRESSABLE MARKET (BMC)
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#132A1C] font-display mb-1">
                    {t.tam.value}
                  </h3>
                  <div className="text-sm font-bold text-[#1E4D2B] mb-3">{t.tam.unit}</div>
                  <p className="text-xs sm:text-sm text-[#465A4E] leading-relaxed mb-4">
                    {t.tam.desc}
                  </p>
                  <div className="text-xs font-mono text-[#587361] p-3 bg-white rounded-xl border border-[#DCE7DC]">
                    <strong>Scope:</strong> Total usaha hortikultura buah nasional (packhouse, cold storage, distributor ekspor/impor).
                  </div>
                </div>
              )}

              {selectedLayer === 'sam' && (
                <div>
                  <span className="text-xs font-mono font-bold text-[#1E4D2B] bg-[#DCECDC] px-3 py-1 rounded-md block w-fit mb-2">
                    SERVICEABLE AVAILABLE MARKET (BMC)
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#1E4D2B] font-display mb-1">
                    {t.sam.value}
                  </h3>
                  <div className="text-sm font-bold text-[#132A1C] mb-3">{t.sam.unit}</div>
                  <p className="text-xs sm:text-sm text-[#465A4E] leading-relaxed mb-4">
                    {t.sam.desc}
                  </p>
                  <div className="text-xs font-mono text-[#587361] p-3 bg-white rounded-xl border border-[#DCE7DC]">
                    <strong>Scope:</strong> Wilayah Pulau Jawa dengan akses logistik rantai dingin dan sentra tebu Jawa Timur / Jawa Tengah.
                  </div>
                </div>
              )}

              {selectedLayer === 'som' && (
                <div>
                  <span className="text-xs font-mono font-bold text-white bg-[#1E4D2B] px-3 py-1 rounded-md block w-fit mb-2">
                    SERVICEABLE OBTAINABLE MARKET (BMC TAHUN 1)
                  </span>
                  <h3 className="text-3xl font-extrabold text-emerald-800 font-display mb-1">
                    {t.som.value}
                  </h3>
                  <div className="text-sm font-bold text-[#1E4D2B] mb-3">{t.som.unit}</div>
                  <p className="text-xs sm:text-sm text-[#465A4E] leading-relaxed mb-4">
                    {t.som.desc}
                  </p>
                  <div className="text-xs font-mono text-[#2B4E35] p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                    <strong>Target:</strong> Validasi lapangan dan adopsi komersial awal pada fasilitas packhouse dan cold storage perintis.
                  </div>
                </div>
              )}

              {/* Segment Cards (Firmografis & Geografis dari BMC) */}
              <div className="pt-4 border-t border-[#EEF4EE] grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#DEEADE]">
                  <span className="font-mono font-bold text-[#1E4D2B] block mb-1">
                    Firmografis Sasaran
                  </span>
                  <span className="text-[#55715E] leading-snug block">
                    Packhouse & ripening, cold-chain, eksportir/importir buah.
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#DEEADE]">
                  <span className="font-mono font-bold text-[#1E4D2B] block mb-1">
                    Geografis Logistik
                  </span>
                  <span className="text-[#55715E] leading-snug block">
                    Sentra produksi hulu, logistik domestik, dan zona pelabuhan/bandara ekspor.
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
