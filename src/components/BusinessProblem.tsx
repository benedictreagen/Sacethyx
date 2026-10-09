import React, { useState } from 'react';
import { AlertTriangle, Clock, ServerOff, TrendingDown, ArrowRight, Sliders, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface BusinessProblemProps {
  onLearnSolution: () => void;
}

export const BusinessProblem: React.FC<BusinessProblemProps> = ({ onLearnSolution }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].problem;

  // Interactive slider: 0 (Low) to 100 (High)
  const [ethyleneSlider, setEthyleneSlider] = useState<number>(35);

  // Computed interactive simulation values based on slider:
  // Low (0): Ethylene = 0.15 ppm, Window = 28 days, Risk = 4%
  // Mid (50): Ethylene = 1.25 ppm, Window = 16 days, Risk = 28%
  // High (100): Ethylene = 4.80 ppm, Window = 5 days, Risk = 72%
  const simulatedEthylene = (0.15 + (ethyleneSlider / 100) * 4.65).toFixed(2);
  const simulatedWindowDays = Math.max(5, Math.round(28 - (ethyleneSlider / 100) * 23));
  const simulatedSpoilageRisk = Math.round(4 + (ethyleneSlider / 100) * 68);

  const getConditionStatus = () => {
    if (ethyleneSlider < 30) {
      return {
        label: lang === 'id' ? 'TERKONTROL (Mutu Stabil)' : 'CONTROLLED (Stable Quality)',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300',
        fruitColor: 'bg-emerald-500',
        fruitLabel: lang === 'id' ? 'Kekerasan Prima / Grade A' : 'Firm Pulp / Grade A'
      };
    } else if (ethyleneSlider < 65) {
      return {
        label: lang === 'id' ? 'MODERAT (Pematangan Berlangsung)' : 'MODERATE (Ripening In Progress)',
        color: 'text-amber-700 bg-amber-50 border-amber-300',
        fruitColor: 'bg-amber-400',
        fruitLabel: lang === 'id' ? 'Mulai Melunak / Grade B' : 'Softening Initiated / Grade B'
      };
    } else {
      return {
        label: lang === 'id' ? 'KRITIS (Penuaan Cepat & Risiko Busuk)' : 'CRITICAL (Accelerated Senescence)',
        color: 'text-rose-700 bg-rose-50 border-rose-300',
        fruitColor: 'bg-rose-500',
        fruitLabel: lang === 'id' ? 'Pelunakan Ekstrem / Risiko Busuk' : 'Extreme Softening / Rot Risk'
      };
    }
  };

  const currentCondition = getConditionStatus();

  return (
    <section id="problem" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2D6A4F] mb-3">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#132A1C] leading-tight font-heading mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#55695C] leading-relaxed font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* INTERACTIVE STORAGE ENVIRONMENT SIMULATION CONTAINER */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-[#E5E0D5] shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#EFECE6] gap-3">
            <div>
              <h3 className="text-base font-bold text-[#132A1C] font-heading">
                {t.sliderLabel}
              </h3>
              <p className="text-xs text-[#526458] mt-0.5">
                {t.sliderSubtext}
              </p>
            </div>
          </div>

          {/* Interactive Slider Control Bar */}
          <div className="mb-8 bg-[#F6F4EE] p-5 rounded-2xl border border-[#E5E0D5]">
            <div className="flex justify-between items-center text-xs font-bold text-[#132A1C] mb-3 font-mono">
              <span className="text-emerald-700">{t.sliderLow}</span>
              <span className="text-[#1E4D2B] bg-[#EAF3EB] px-3 py-1 rounded-lg border border-[#CFE2D0] font-bold tabular-nums">
                {simulatedEthylene} ppm
              </span>
              <span className="text-rose-700">{t.sliderHigh}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={ethyleneSlider}
              onChange={(e) => setEthyleneSlider(Number(e.target.value))}
              aria-label="Storage ethylene concentration slider"
              className="w-full h-3 bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-500 rounded-lg appearance-none cursor-pointer accent-[#1E4D2B]"
            />
          </div>

          {/* Real-time Storage Chamber Visualizer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Chamber Chamber Illustration */}
            <div className="lg:col-span-6 bg-[#0E1F14] text-white rounded-2xl p-6 border border-[#23422C] relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E3B27] text-xs font-mono">
                <span className="text-emerald-300">CHAMBER ATMOSPHERE SIMULATION</span>
                <span className="text-emerald-200/70">12.0°C · 85% RH</span>
              </div>

              {/* Chamber Interior with dynamic glowing particles and fruit crates */}
              <div className="relative h-56 rounded-xl bg-[#09150D] border border-[#1A3822] p-4 flex flex-col justify-between overflow-hidden">
                {/* Airflow velocity lines */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                  <div className="w-full h-full bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                {/* Ethylene molecules scatter count based on slider */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: Math.min(36, Math.max(4, Math.round(ethyleneSlider / 2.8))) }).map((_, i) => {
                    const top = 15 + ((i * 17) % 70);
                    const left = 10 + ((i * 23) % 80);
                    const size = 4 + (i % 3);
                    return (
                      <span
                        key={i}
                        className="absolute rounded-full bg-amber-400 animate-pulse"
                        style={{
                          top: `${top}%`,
                          left: `${left}%`,
                          width: `${size}px`,
                          height: `${size}px`,
                          boxShadow: '0 0 8px rgba(251, 191, 36, 0.8)',
                          animationDuration: `${1.5 + (i % 3) * 0.5}s`
                        }}
                      />
                    );
                  })}
                </div>

                {/* Stored Fruit Crates visual state */}
                <div className="relative z-10 grid grid-cols-3 gap-3 my-auto">
                  {[1, 2, 3].map((pallet) => (
                    <div
                      key={pallet}
                      className="bg-[#122819] rounded-xl p-3 border border-[#21472B] flex flex-col items-center text-center transition-colors duration-300"
                    >
                      <div
                        className={`w-10 h-10 rounded-full mb-2 flex items-center justify-center transition-colors duration-300 shadow-md ${currentCondition.fruitColor}`}
                      >
                        <span className="text-[10px] font-bold text-white">
                          {ethyleneSlider > 65 ? '⚠' : '✓'}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-white font-mono">
                        Pallet 0{pallet}
                      </span>
                      <span className="text-[9px] text-emerald-300/80 mt-0.5">
                        {currentCondition.fruitLabel}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-emerald-200/80 pt-2 border-t border-[#1C3D25]">
                  <span>Circulation: Active</span>
                  <span className="text-amber-300">
                    C₂H₄: {simulatedEthylene} ppm
                  </span>
                </div>
              </div>
            </div>

            {/* Impact Readouts on Commercial Window */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="bg-[#FAFDF9] p-5 rounded-2xl border border-[#DDE7DD]">
                <span className="text-xs font-mono font-bold text-[#5E7A68] uppercase block mb-1">
                  {t.conditionLabel}
                </span>
                <div className={`inline-block px-3 py-1.5 rounded-lg border text-sm font-bold font-mono ${currentCondition.color}`}>
                  {currentCondition.label}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FAFDF9] p-5 rounded-2xl border border-[#DDE7DD]">
                  <span className="text-xs font-mono font-bold text-[#5E7A68] uppercase block mb-1">
                    {t.windowLabel}
                  </span>
                  <div className="text-3xl font-extrabold text-[#132A1C] font-display">
                    {simulatedWindowDays}{' '}
                    <span className="text-sm font-normal text-[#5E7A68]">
                      {lang === 'id' ? 'Hari' : 'Days'}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#4A6B53] font-mono mt-1 block">
                    {ethyleneSlider > 50
                      ? lang === 'id' ? 'Terpangkas akibat etilen' : 'Reduced by ethylene surge'
                      : lang === 'id' ? 'Jendela optimal terjaga' : 'Optimal window preserved'}
                  </span>
                </div>

                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E5E0D5]">
                  <span className="text-xs font-mono font-bold text-[#5E7A68] uppercase block mb-1">
                    {t.rotRiskLabel}
                  </span>
                  <div className={`text-3xl font-bold font-heading tabular-nums ${ethyleneSlider > 60 ? 'text-rose-600' : 'text-[#1E4D2B]'}`}>
                    {simulatedSpoilageRisk}%
                  </div>
                  <span className="text-[11px] text-[#4A6B53] font-mono mt-1 block">
                    {ethyleneSlider > 60
                      ? lang === 'id' ? 'Tinggi: Risiko susut berat' : 'High: Softening loss risk'
                      : lang === 'id' ? 'Rendah: Terkendali' : 'Low: Fully controlled'}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#F2EFE9] rounded-xl border border-[#DDD7CC] text-xs text-[#2D5038] leading-relaxed font-sans">
                <strong>{lang === 'id' ? 'Mengapa Etilen Krusial:' : 'Why Ethylene is Critical:'}</strong>{' '}
                {lang === 'id'
                  ? 'Kenaikan etilen memicu pematangan eksponensial. Menjaga kadar etilen tetap rendah memperpanjang daya simpan dan mencegah kerugian komersial saat distribusi.'
                  : 'Rising ethylene induces autocatalytic cascades. Maintaining low ethylene preserves fruit firmness and prevents devastating downgrading losses.'}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EFECE6] text-[11px] text-[#6F7E74] font-mono text-center">
            {t.disclaimer}
          </div>
        </div>

        {/* 4 Explanatory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.cards.map((item, idx) => {
            const icons = [AlertTriangle, Clock, ServerOff, TrendingDown];
            const IconComponent = icons[idx] || AlertTriangle;
            const accents = [
              { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', dot: 'bg-amber-500' },
              { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800', dot: 'bg-orange-500' },
              { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', dot: 'bg-emerald-500' },
              { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-800', dot: 'bg-rose-500' }
            ];
            const accent = accents[idx] || accents[0];

            return (
              <div
                key={item.index}
                className="bg-white rounded-2xl p-6 border border-[#E5E0D5] shadow-xs hover:border-[#1E4D2B]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
                      <span className="text-xs font-mono font-bold text-[#1E4D2B] bg-[#F1EFEA] px-2.5 py-1 rounded">
                        {item.index}
                      </span>
                    </div>
                    <div className={`w-9 h-9 rounded-xl ${accent.bg} ${accent.border} border flex items-center justify-center ${accent.text} group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#132A1C] font-heading mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#526458] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA link to solution */}
        <div className="mt-10 text-center">
          <button
            onClick={onLearnSolution}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#1E4D2B] hover:bg-[#15381F] px-6 py-3 rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            <span>{lang === 'id' ? 'Pelajari Cara Kerja Solusi SACETHYX' : 'See How SACETHYX Solves This'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
