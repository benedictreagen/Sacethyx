import React, { useState } from 'react';
import { Sparkles, ShieldCheck, AlertCircle, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const StorageSimulator: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].simulator;

  // Simple two-state toggle: 'lower' (SACETHYX active) vs. 'higher' (uncontrolled ambient)
  const [ethyleneMode, setEthyleneMode] = useState<'lower' | 'higher'>('lower');
  // Visually prominent concentration slider (0.2 to 5.0 ppm)
  const [ambientPpm, setAmbientPpm] = useState<number>(2.4);

  // When lower (SACETHYX managed): 72% single-pass reduction
  // When higher (unscrubbed): 0% reduction, remains ambient level
  const reductionRate = 72;
  const activeReduction = ethyleneMode === 'lower' ? reductionRate : 0;
  const chamberLevel = ethyleneMode === 'lower'
    ? Math.max(0.08, ambientPpm * (1 - reductionRate / 100)).toFixed(2)
    : ambientPpm.toFixed(2);

  return (
    <section id="simulation" className="py-16 lg:py-24 bg-[#F8F6F2] border-b border-[#E8E4DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-[#2D6A4F] mb-2 font-semibold">
            {t.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132A1C] leading-tight font-heading mb-3">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#55695C] font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Clean Simulator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E5E0D5] shadow-sm">
          {/* Two-State Segmented Control */}
          <div className="mb-8">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#132A1C] mb-2.5">
              {t.modeLabel}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#F4F1EA] p-1.5 rounded-2xl border border-[#E2DDD3]">
              <button
                type="button"
                onClick={() => setEthyleneMode('lower')}
                className={`py-3 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  ethyleneMode === 'lower'
                    ? 'bg-[#1E4D2B] text-white shadow-sm'
                    : 'text-[#4A6451] hover:text-[#132A1C]'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.modeLower}</span>
              </button>
              <button
                type="button"
                onClick={() => setEthyleneMode('higher')}
                className={`py-3 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  ethyleneMode === 'higher'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-[#4A6451] hover:text-[#132A1C]'
                }`}
              >
                <AlertCircle className="w-4 h-4 text-amber-200" />
                <span>{t.modeHigher}</span>
              </button>
            </div>
          </div>

          {/* Prominent Slider & Concentration Readout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Slider Control */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#FAFDF9] p-5 rounded-2xl border border-[#DCE7DC]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-[#132A1C] font-mono">
                    {t.sliderLabel}
                  </span>
                  <span className="text-sm font-bold font-mono text-[#1E4D2B] bg-[#EAF3EB] px-2.5 py-0.5 rounded-md">
                    {ambientPpm.toFixed(1)} ppm
                  </span>
                </div>
                <input
                  type="range"
                  min="0.4"
                  max="5.0"
                  step="0.2"
                  value={ambientPpm}
                  onChange={(e) => setAmbientPpm(Number(e.target.value))}
                  className="w-full h-3 bg-[#DCE8DC] rounded-lg appearance-none cursor-pointer accent-[#1E4D2B]"
                />
                <div className="flex justify-between text-[11px] text-[#587361] mt-2 font-mono">
                  <span>0.4 ppm (Baseline)</span>
                  <span>2.6 ppm</span>
                  <span>5.0 ppm (High Inflow)</span>
                </div>
              </div>

              {/* Status explanation */}
              <div className="text-xs text-[#526458] leading-relaxed p-4 rounded-xl bg-[#F8FAF8] border border-[#E4EBE4]">
                {ethyleneMode === 'lower' ? (
                  <p>
                    {lang === 'id'
                      ? 'Adsorben karbon ampas tebu SACETHYX secara kontinu menyaring etilen dari sirkulasi udara, menjaga konsentrasi tetap pada ambang batas aman.'
                      : 'SACETHYX bagasse carbon continuously adsorbs volatile ethylene from recirculating air, maintaining storage atmosphere within safe thresholds.'}
                  </p>
                ) : (
                  <p>
                    {lang === 'id'
                      ? 'Tanpa filtrasi etilen aktif, gas yang diproduksi buah terakumulasi dalam ruang kedap dan mempercepat pematangan komoditas secara tidak terkendali.'
                      : 'Without active ethylene filtration, fruit-generated gas builds up within sealed chambers, triggering premature softening and accelerated decay.'}
                  </p>
                )}
              </div>
            </div>

            {/* Readout Display Card */}
            <div className="lg:col-span-6 bg-[#0E2014] text-white rounded-2xl p-6 sm:p-7 border border-[#204429] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-[#1C3E26] mb-5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                  {ethyleneMode === 'lower' ? t.controlledLevel : t.ambientLevel}
                </span>
                <span className={`text-xs font-mono px-2 py-0.5 rounded font-semibold ${
                  ethyleneMode === 'lower' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {ethyleneMode === 'lower' ? 'Active Protection' : 'Unmanaged'}
                </span>
              </div>

              {/* Primary Metric Indicator */}
              <div className="text-center py-4">
                <div className="text-5xl sm:text-6xl font-bold font-heading tracking-tight text-white mb-1 tabular-nums">
                  {chamberLevel}{' '}
                  <span className="text-2xl sm:text-3xl font-mono font-normal text-emerald-400">
                    ppm
                  </span>
                </div>
                <p className="text-xs text-white/60 font-mono mt-1">
                  {ethyleneMode === 'lower'
                    ? (lang === 'id' ? `Penurunan ~${activeReduction}% dibanding kadar ambien` : `~${activeReduction}% reduction from ambient load`)
                    : (lang === 'id' ? 'Akumulasi gas etilen penuh di ruang simpan' : 'Full ambient ethylene load in storage')}
                </p>
              </div>

              {/* Progress bar */}
              <div className="space-y-2 pt-3">
                <div className="w-full bg-[#1A3824] h-3.5 rounded-full overflow-hidden p-0.5 border border-[#2B5436]">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      ethyleneMode === 'lower' ? 'bg-[#84CC16]' : 'bg-amber-400'
                    }`}
                    style={{
                      width: `${Math.max(6, Math.min(100, (Number(chamberLevel) / 5.0) * 100))}%`
                    }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-white/50">
                  <span>0.0 ppm</span>
                  <span>Ambang Kritis (2.0 ppm)</span>
                  <span>5.0 ppm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Footer Caption Disclaimer */}
          <div className="mt-8 pt-4 border-t border-[#EFECE6] text-center">
            <p className="text-xs text-[#7A8C7F] font-mono">
              * {t.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
