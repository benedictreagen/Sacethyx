import React, { useState } from 'react';
import { Wind, Sliders, Bell, LayoutDashboard, CheckCircle2, ChevronRight, RefreshCw, Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const SolutionDiagram: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].solution;
  const [hoveredStep, setHoveredStep] = useState<number | null>(2);

  return (
    <section id="solution" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
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

          {/* Core Principle Badge */}
          <div className="bg-[#F4F8F4] border border-[#D5E5D7] rounded-2xl p-5 lg:max-w-xs shrink-0 shadow-2xs">
            <div className="flex items-center gap-2 text-[#1E4D2B] font-bold text-sm mb-1.5 font-heading">
              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
              <span>{lang === 'id' ? 'Prinsip Posisioning B2B' : 'Core B2B Principle'}</span>
            </div>
            <p className="text-sm font-bold text-[#132A1C] font-heading">
              {lang === 'id' ? '“Dirancang untuk mengintegrasi, bukan menggantikan.”' : '“Designed to integrate, not replace.”'}
            </p>
            <p className="text-xs text-[#52705C] mt-1 font-sans">
              {lang === 'id'
                ? 'Dapat diintegrasikan langsung pada fasilitas cold storage maupun Controlled Atmosphere Storage (CAS).'
                : 'Directly retrofits into standard cold storage and Controlled Atmosphere Storage (CAS).'}
            </p>
          </div>
        </div>

        {/* INTERACTIVE ARCHITECTURE SYSTEM FLOW DIAGRAM */}
        <div className="bg-[#FAFDF9] rounded-3xl p-6 lg:p-10 border border-[#DDE8DD] shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-[#EBF2EB] gap-2">
            <div>
              <h3 className="text-lg font-bold text-[#132A1C] font-heading">
                {lang === 'id' ? 'Diagram Arsitektur Loop Resirkulasi Udara' : 'Airflow Recirculation Architecture Loop'}
              </h3>
              <p className="text-xs text-[#5E7A68] font-sans">
                {lang === 'id'
                  ? 'Arahkan kursor / klik langkah untuk menginspeksi peran fungsional dalam sistem'
                  : 'Hover or click any stage to inspect its functional role in the system'}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#2D6A4F] bg-white px-3 py-1 rounded-lg border border-[#DCE6DC]">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Closed Loop Airflow</span>
            </div>
          </div>

          {/* Stepper Pipeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative mb-8">
            {t.pipeline.map((stage, idx) => {
              const isHovered = hoveredStep === idx;
              return (
                <div
                  key={stage.step}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onClick={() => setHoveredStep(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                    isHovered
                      ? 'bg-[#1E4D2B] text-white border-[#1E4D2B] shadow-md transform -translate-y-1'
                      : 'bg-[#FAFDF9] text-[#132A1C] border-[#E2EBE2] hover:border-[#2D6A4F]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isHovered ? 'bg-white/20 text-white' : 'bg-[#EAF3EB] text-[#2D6A4F]'
                      }`}
                    >
                      {stage.step}
                    </span>
                    {idx < t.pipeline.length - 1 && (
                      <ChevronRight
                        className={`w-4 h-4 hidden md:block ${
                          isHovered ? 'text-white/70' : 'text-[#87A08F]'
                        }`}
                      />
                    )}
                  </div>
                  <h4 className="text-xs font-bold mb-1.5 leading-snug tracking-wide uppercase">
                    {stage.name}
                  </h4>
                  <p
                    className={`text-[12px] leading-relaxed ${
                      isHovered ? 'text-emerald-50' : 'text-[#465A4E]'
                    }`}
                  >
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Dynamic Inspector Detail Box */}
          {hoveredStep !== null && (
            <div className="bg-[#F2F8F2] rounded-2xl p-5 border border-[#D5E5D5] flex items-start gap-4 animate-in fade-in duration-200">
              <div className="w-10 h-10 rounded-xl bg-[#1E4D2B] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Layers className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase tracking-wider block mb-0.5">
                  {lang === 'id' ? 'Fungsi Arsitektur Komponen:' : 'Component Architecture Role:'}{' '}
                  {t.pipeline[hoveredStep].name}
                </span>
                <p className="text-sm font-medium text-[#132A1C] leading-relaxed">
                  {t.pipeline[hoveredStep].hover}
                </p>
              </div>
            </div>
          )}

          {/* Animated SVG Path Connecting Existing Storage to Lower Ethylene Return */}
          <div className="mt-8 bg-[#0D2214] rounded-2xl p-6 text-white border border-[#21472B] relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono mb-4">
              <span className="text-emerald-300">
                {lang === 'id' ? 'POLA INTEGRASI TERTUTUP:' : 'CLOSED INTEGRATION PATTERN:'}
              </span>
              <span className="text-emerald-100/70">
                Storage / CAS → Air Recirculation → Cartridge → Ethylene Adsorption → Lower-Ethylene Air → Storage
              </span>
            </div>

            <div className="w-full flex items-center justify-between gap-2 py-3">
              <div className="bg-[#1A3824] px-3.5 py-2 rounded-xl border border-[#2A5437] text-xs font-semibold text-white">
                1. Existing Storage / CAS
              </div>
              <div className="flex-1 px-2">
                <svg className="w-full h-4" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M 0 5 L 96 5" stroke="#34D399" strokeWidth="2" strokeDasharray="4 3" className="animate-flow-dash" />
                  <polygon points="94,2 100,5 94,8" fill="#34D399" />
                </svg>
              </div>
              <div className="bg-[#2D6A4F] px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-sm">
                2. SACETHYX Cartridge
              </div>
              <div className="flex-1 px-2">
                <svg className="w-full h-4" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M 0 5 L 96 5" stroke="#10B981" strokeWidth="2" strokeDasharray="4 3" className="animate-flow-dash" />
                  <polygon points="94,2 100,5 94,8" fill="#10B981" />
                </svg>
              </div>
              <div className="bg-[#1A3824] px-3.5 py-2 rounded-xl border border-[#2A5437] text-xs font-semibold text-white">
                3. Scrubbed Return Air
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry Control Pipeline */}
        <div className="bg-[#FAFDF9] rounded-3xl p-6 lg:p-8 border border-[#E1EBE1]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-[#132A1C]">
                {lang === 'id' ? 'Alur Kontrol & Telemetri Digital' : 'Telemetry & Control Pipeline'}
              </h3>
              <p className="text-xs text-[#5E7A68]">
                Sensors → Controller → Dashboard → Alert
              </p>
            </div>
            <span className="text-xs font-mono text-[#2D6A4F] bg-[#EAF3EB] px-3 py-1 rounded-md self-start sm:self-auto font-semibold">
              Closed-Loop Autonomous
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: lang === 'id' ? 'Sensor Array' : 'Sensor Array',
                desc: lang === 'id' ? 'Mendeteksi etilen, temperatur, dan RH ruangan.' : 'Measures ethylene trends, chamber temperature, and RH.',
                icon: Wind
              },
              {
                title: lang === 'id' ? 'Edge Controller' : 'Edge Controller',
                desc: lang === 'id' ? 'Menghitung waktu tinggal adsorpsi dan durasi fan.' : 'Calculates contact residence and fan duty cycles.',
                icon: Sliders
              },
              {
                title: lang === 'id' ? 'Dashboard Telemetri' : 'Telemetry Dashboard',
                desc: lang === 'id' ? 'Menyajikan tren kualitas udara kepada operator.' : 'Displays real-time atmospheric trends for facility staff.',
                icon: LayoutDashboard
              },
              {
                title: lang === 'id' ? 'Sistem Peringatan' : 'Alert Engine',
                desc: lang === 'id' ? 'Mengirim peringatan penggantian sebelum kartrid jenuh.' : 'Dispatches notification before cartridge saturation.',
                icon: Bell
              }
            ].map((step, sIdx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="bg-white rounded-2xl p-5 border border-[#DEE8DE] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF5EC] flex items-center justify-center text-[#2D6A4F] mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#132A1C] mb-1">{step.title}</h4>
                  <p className="text-xs text-[#465A4E] leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
