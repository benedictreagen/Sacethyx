import React from 'react';
import { ArrowRight, RefreshCw, Wrench, Shield, TrendingUp, Layers, CheckCircle2, DollarSign } from 'lucide-react';
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

          {/* REVENUE STREAMS BREAKDOWN (BMC OFFICIAL DATA) */}
          <div className="pt-6 border-t border-[#EDF4ED] mb-8">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2D6A4F]">
                {lang === 'id' ? 'STRUKTUR PENDAPATAN (REVENUE STREAMS SESUAI BMC)' : 'BMC OFFICIAL REVENUE STREAMS'}
              </span>
              <span className="text-[11px] font-mono text-[#52705B]">
                Cost-plus & Value-based Pricing
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Stream 1: Initial System */}
              <div className="p-5 rounded-2xl bg-[#F6FAF6] border border-[#DEEADE]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase">
                    Initial System
                  </span>
                  <span className="text-sm font-black font-mono text-[#1E4D2B]">
                    Rp 20 Jt <span className="text-[11px] font-normal text-[#5A7B64]">/ customer</span>
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#132A1C] mb-1">
                  {lang === 'id' ? 'Sistem Awal & Setup Fasilitas' : 'Initial System & Setup Package'}
                </h4>
                <p className="text-xs text-[#526D5B] leading-relaxed">
                  {lang === 'id'
                    ? 'Paket perangkat keras, sensor SACETHYX SENSE, blower sirkulasi, flens integrasi, dan setup awal ruang penyimpanan.'
                    : 'Initial hardware casing, SACETHYX SENSE sensor node, circulation blower, integration flange, and facility calibration.'}
                </p>
              </div>

              {/* Stream 2: Recurring Cartridge */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#EAF3EB] to-[#D8EADB] border border-[#2D6A4F] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#1E4D2B] uppercase">
                    Recurring Cartridge
                  </span>
                  <span className="text-sm font-black font-mono text-[#1E4D2B]">
                    Rp 1,5 Jt <span className="text-[11px] font-normal text-[#5A7B64]">/ cartridge</span>
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#132A1C] mb-1">
                  {lang === 'id' ? 'Penggantian Kartrid Berkala' : 'Replacement Cartridge Consumable'}
                </h4>
                <p className="text-xs text-[#2A4833] leading-relaxed">
                  {lang === 'id'
                    ? 'Langganan kartrid adsorben ampas tebu berkala sesuai siklus panen dan durasi penyimpanan pelanggan.'
                    : 'Scheduled consumable replacement cartridges packed with sugarcane bagasse bio-carbon matching customer harvest throughput.'}
                </p>
              </div>

              {/* Stream 3: Services & Support */}
              <div className="p-5 rounded-2xl bg-[#F6FAF6] border border-[#DEEADE]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase">
                    Service & Support
                  </span>
                  <span className="text-xs font-mono font-bold text-[#2D6A4F] bg-[#E1EEE2] px-2 py-0.5 rounded">
                    Annual / SLA
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#132A1C] mb-1">
                  {lang === 'id' ? 'Pemeliharaan, Kalibrasi & Telemetri' : 'Maintenance, Calibration & Support'}
                </h4>
                <p className="text-xs text-[#526D5B] leading-relaxed">
                  {lang === 'id'
                    ? 'Layanan purna jual, kalibrasi sensor berkala, pelaporan tren atmosfer ruang simpan, dan dukungan teknis B2B.'
                    : 'After-sales support, periodic sensor recalibration, atmospheric logging reports, and dedicated B2B technical SLAs.'}
                </p>
              </div>
            </div>
          </div>

          {/* REVENUE PROJECTION (BMC 3-YEAR TRAJECTORY) */}
          <div className="bg-[#FAFDF9] rounded-2xl p-6 border border-[#DDE7DD] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#1E4D2B] uppercase tracking-wider block mb-1">
                {lang === 'id' ? 'PROYEKSI PENDAPATAN (REVENUE PROJECTION BMC)' : 'BMC REVENUE PROJECTIONS'}
              </span>
              <h4 className="text-base font-bold text-[#132A1C] font-display">
                {lang === 'id' ? 'Pertumbuhan Finansial 3 Tahun Pertama' : 'First 3 Years Growth Pathway'}
              </h4>
            </div>

            <div className="flex items-center gap-6 sm:gap-10">
              <div className="text-center">
                <span className="text-[11px] font-mono text-[#6A8874] block">Tahun 1</span>
                <span className="text-lg font-bold font-mono text-[#1E4D2B]">Rp 260 Jt</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-300" />
              <div className="text-center">
                <span className="text-[11px] font-mono text-[#6A8874] block">Tahun 2</span>
                <span className="text-lg font-bold font-mono text-[#1E4D2B]">Rp 710 Jt</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-300" />
              <div className="text-center">
                <span className="text-[11px] font-mono text-[#6A8874] block">Tahun 3</span>
                <span className="text-xl font-black font-mono text-emerald-700">Rp 1,51 M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
