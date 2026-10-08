import React, { useState } from 'react';
import { Sliders, RefreshCw, Wind, Zap, Layers, Activity, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const StorageSimulator: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].simulator;

  // Sliders state
  const [roomVolume, setRoomVolume] = useState<number>(200); // 50 to 1000 m³
  const [initialEthylene, setInitialEthylene] = useState<number>(2.2); // 0.2 to 5.0 ppm
  const [airflow, setAirflow] = useState<number>(450); // 100 to 1200 m³/h
  const [cartridgeCondition, setCartridgeCondition] = useState<'fresh' | 'used'>('fresh');

  // Conceptual simulation math:
  // Fresh cartridge single-pass removal efficiency: ~65% - 75% depending on face velocity
  // Used cartridge: ~30% - 40%
  const baseEfficiency = cartridgeCondition === 'fresh' ? 0.72 : 0.38;
  // Velocity penalty if airflow is very high relative to volume
  const velocityFactor = Math.max(0.85, 1 - (airflow / 1500) * 0.15);
  const removalEfficiency = baseEfficiency * velocityFactor;

  const scrubbedEthylene = Math.max(0.05, initialEthylene * (1 - removalEfficiency)).toFixed(2);
  const efficiencyPercent = Math.round(removalEfficiency * 100);

  // Air exchanges per hour
  const ach = (airflow / roomVolume).toFixed(1);

  return (
    <section id="simulation" className="py-20 lg:py-28 bg-[#F2F7F2] border-b border-[#DDE7DD]">
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

        {/* SIMULATOR WORKBENCH CONTAINER */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-[#D8E6D8] shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-[#EDF4ED] gap-2">
            <span className="text-xs font-mono font-bold text-[#1E4D2B] uppercase tracking-wider">
              {lang === 'id' ? 'KONSOL PARAMETER PENGUJIAN' : 'PARAMETRIC SIMULATION CONSOLE'}
            </span>
            <span className="text-xs font-mono text-emerald-800 bg-[#EAF3EB] px-3 py-1 rounded-md font-bold">
              {t.disclaimerBadge}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Slider 1: Room Volume */}
              <div className="bg-[#FAFDF9] p-4.5 rounded-2xl border border-[#DCE7DC]">
                <div className="flex justify-between items-center text-xs font-bold text-[#132A1C] mb-2 font-mono">
                  <span>{t.volLabel}</span>
                  <span className="text-[#2D6A4F] font-bold text-sm">{roomVolume} m³</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={roomVolume}
                  onChange={(e) => setRoomVolume(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#DCE8DC] rounded-lg appearance-none cursor-pointer accent-[#1E4D2B]"
                />
                <div className="flex justify-between text-[11px] text-[#587361] mt-1 font-mono">
                  <span>50 m³ (Mini Cold Store)</span>
                  <span>1000 m³ (Industrial Bay)</span>
                </div>
              </div>

              {/* Slider 2: Initial Ethylene */}
              <div className="bg-[#FAFDF9] p-4.5 rounded-2xl border border-[#DCE7DC]">
                <div className="flex justify-between items-center text-xs font-bold text-[#132A1C] mb-2 font-mono">
                  <span>{t.ethLabel}</span>
                  <span className="text-amber-700 font-bold text-sm">{initialEthylene.toFixed(1)} ppm</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="5.0"
                  step="0.1"
                  value={initialEthylene}
                  onChange={(e) => setInitialEthylene(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#DCE8DC] rounded-lg appearance-none cursor-pointer accent-[#1E4D2B]"
                />
                <div className="flex justify-between text-[11px] text-[#587361] mt-1 font-mono">
                  <span>0.2 ppm (Trace)</span>
                  <span>2.5 ppm</span>
                  <span>5.0 ppm (Heavy Ripening)</span>
                </div>
              </div>

              {/* Slider 3: Airflow Blower */}
              <div className="bg-[#FAFDF9] p-4.5 rounded-2xl border border-[#DCE7DC]">
                <div className="flex justify-between items-center text-xs font-bold text-[#132A1C] mb-2 font-mono">
                  <span>{t.flowLabel}</span>
                  <span className="text-[#2D6A4F] font-bold text-sm">{airflow} m³/h</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1200"
                  step="50"
                  value={airflow}
                  onChange={(e) => setAirflow(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#DCE8DC] rounded-lg appearance-none cursor-pointer accent-[#1E4D2B]"
                />
                <div className="flex justify-between text-[11px] text-[#587361] mt-1 font-mono">
                  <span>100 m³/h</span>
                  <span>ACH: {ach}x / hr</span>
                  <span>1200 m³/h</span>
                </div>
              </div>

              {/* Toggle 4: Cartridge Status */}
              <div className="bg-[#FAFDF9] p-4.5 rounded-2xl border border-[#DCE7DC]">
                <span className="block text-xs font-bold text-[#132A1C] mb-2 font-mono">
                  {t.cartridgeLabel}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCartridgeCondition('fresh')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      cartridgeCondition === 'fresh'
                        ? 'bg-[#1E4D2B] text-white shadow-xs'
                        : 'bg-white text-[#4A6B53] border border-[#DCE7DC]'
                    }`}
                  >
                    {t.cartridgeFresh}
                  </button>
                  <button
                    onClick={() => setCartridgeCondition('used')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      cartridgeCondition === 'used'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-white text-[#4A6B53] border border-[#DCE7DC]'
                    }`}
                  >
                    {t.cartridgeUsed}
                  </button>
                </div>
              </div>
            </div>

            {/* Visual Output Response Graphic */}
            <div className="lg:col-span-6 bg-[#0E2014] text-white rounded-2xl p-6 lg:p-8 border border-[#204429] flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider block mb-1">
                  {lang === 'id' ? 'RESPONS PENYERAPAN SISTEM' : 'SYSTEM ADSORPTION RESPONSE'}
                </span>
                <div className="text-xs text-emerald-100/70 font-mono">
                  Dynamic simulation output per single airflow cycle
                </div>
              </div>

              {/* Comparative Progress Bars */}
              <div className="space-y-5">
                {/* Before Cartridge */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-amber-300 font-bold">{t.initialEth}</span>
                    <span className="text-white font-bold">{initialEthylene.toFixed(2)} ppm</span>
                  </div>
                  <div className="w-full bg-[#1A3824] h-4 rounded-full overflow-hidden p-0.5 border border-[#2B5436]">
                    <div
                      className="bg-amber-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (initialEthylene / 5.0) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Animated Arrow Down */}
                <div className="flex items-center justify-center gap-2 text-xs font-mono text-emerald-300 py-1">
                  <span>↓ Passes SACETHYX Cartridge Bed ({efficiencyPercent}% Adsorption) ↓</span>
                </div>

                {/* After Passing Cartridge */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-emerald-300 font-bold">{t.scrubbedEth}</span>
                    <span className="text-emerald-200 font-bold">{scrubbedEthylene} ppm</span>
                  </div>
                  <div className="w-full bg-[#1A3824] h-4 rounded-full overflow-hidden p-0.5 border border-[#2B5436]">
                    <div
                      className="bg-emerald-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${Math.max(4, Math.min(100, (Number(scrubbedEthylene) / 5.0) * 100))}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Key Efficiency Readout */}
              <div className="bg-[#142E1C] rounded-xl p-4 border border-[#265333] flex items-center justify-between">
                <div>
                  <span className="text-xs text-emerald-200/80 font-mono block">
                    {t.reductionRate}
                  </span>
                  <span className="text-2xl font-black text-emerald-300 font-display">
                    ~{efficiencyPercent}%
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-emerald-200/80 font-mono block">
                    Recirculation Turnover
                  </span>
                  <span className="text-base font-bold text-white font-mono">
                    {ach} cycles/hr
                  </span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-emerald-200/60 leading-relaxed border-t border-[#1C3E26] pt-3">
                {t.note}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
