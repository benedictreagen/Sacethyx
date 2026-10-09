import React, { useState } from 'react';
import { Recycle, Factory, Sprout, Layers, Wind, RefreshCw, Sparkles, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const CircularEconomy: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].circular;
  const [activeStep, setActiveStep] = useState<number>(3); // Default to Activated Carbon

  const circularNodes = [
    { title: t.steps[0], icon: Sprout, tag: 'Agro-Feedstock', desc: lang === 'id' ? 'Tanaman tebu dipanen di perkebunan gula regional.' : 'Sugarcane estates harvested for regional sugar refining.' },
    { title: t.steps[1], icon: Factory, tag: 'Milling', desc: lang === 'id' ? 'Ekstraksi nira tebu di pabrik menghasilkan residu padat.' : 'Sugar extraction leaves fibrous lignocellulose byproduct.' },
    { title: t.steps[2], icon: Recycle, tag: 'Agro-Residue', desc: lang === 'id' ? 'Ampas tebu melimpah yang biasanya dibakar atau terbuang.' : 'Abundant bagasse residue traditionally incinerated as boiler fuel.' },
    { title: t.steps[3], icon: Sparkles, tag: 'Carbonization', desc: lang === 'id' ? 'Pirolisis dan aktivasi menghasilkan karbon berpori tinggi.' : 'Pyrolysis and chemical activation produce tailored porous carbon.' },
    { title: t.steps[4], icon: Layers, tag: 'Hardware Unit', desc: lang === 'id' ? 'Media dikemas ke dalam kartrid standar siap pasang.' : 'Enclosed in standardized modular quick-release cartridges.' },
    { title: t.steps[5], icon: Wind, tag: 'Post-Harvest Bay', desc: lang === 'id' ? 'Adsorpsi etilen aktif melindungi komoditas hortikultura.' : 'Targeted C₂H₄ adsorption protects stored fruit batches.' },
    { title: t.steps[6], icon: RefreshCw, tag: 'Take-Back Loop', desc: lang === 'id' ? 'Kartrid jenuh ditarik kembali via logistik terjadwal.' : 'Saturated cartridges collected via reverse logistics schedule.' },
    { title: t.steps[7], icon: Recycle, tag: 'Secondary Life', desc: lang === 'id' ? 'Regenerasi termal atau pemanfaatan karbon sekunder.' : 'Thermal desorption, carbon reactivation, or soil amendment.' }
  ];

  return (
    <section id="circular-economy" className="py-20 lg:py-28 bg-[#EAF1EB] border-b border-[#D8E4D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
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

        {/* LARGE INTERACTIVE CIRCULAR WHEEL & DIAGRAM */}
        <div className="bg-white rounded-3xl p-6 lg:p-12 border border-[#DCE5DC] shadow-md mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Interactive Radial Flow Wheel Visual */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center relative py-6">
              <div className="relative w-72 sm:w-96 aspect-square rounded-full border-2 border-dashed border-[#2D6A4F]/40 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                {/* 8 Nodes arranged evenly along the circumference */}
                {circularNodes.map((node, i) => {
                  const angle = (i * 360) / 8 - 90;
                  const rad = (angle * Math.PI) / 180;
                  // Radius offset from center (e.g. 130px on small, 160px on larger)
                  const rDist = 145;
                  const x = Math.cos(rad) * rDist;
                  const y = Math.sin(rad) * rDist;
                  const Icon = node.icon;
                  const isSelected = activeStep === i;

                  return (
                    <div
                      key={node.title}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                      className="absolute flex items-center justify-center"
                    >
                      <button
                        onClick={() => setActiveStep(i)}
                        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md ${
                          isSelected
                            ? 'bg-[#1E4D2B] text-white ring-4 ring-emerald-300 scale-125'
                            : 'bg-white text-[#2D6A4F] border border-[#CDE0CE] hover:bg-[#EAF3EB]'
                        }`}
                        title={node.title}
                      >
                        <Icon className="w-5 h-5" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Central Hub Label inside the circle */}
              <div className="absolute flex flex-col items-center justify-center text-center p-4 bg-[#F2F8F2] rounded-full w-40 h-40 border border-[#CDE0CE] shadow-2xs pointer-events-none">
                <Recycle className="w-7 h-7 text-[#1E4D2B] mb-1 animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#1E4D2B] uppercase tracking-wider">
                  SACETHYX LOOP
                </span>
                <span className="text-[10px] text-[#587361] mt-0.5 font-medium">
                  Closed Value Cycle
                </span>
              </div>
            </div>

            {/* Right: Step Inspection Display */}
            <div className="lg:col-span-5 bg-[#FAFDF9] rounded-2xl p-6 lg:p-8 border border-[#DCE7DC] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#1E4D2B] bg-[#EAF3EB] px-3 py-1 rounded-md">
                  STAGE 0{activeStep + 1} OF 08
                </span>
                <span className="text-xs font-mono text-[#5E7A68]">
                  {circularNodes[activeStep].tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#132A1C] font-display">
                {circularNodes[activeStep].title}
              </h3>

              <p className="text-sm text-[#465A4E] leading-relaxed">
                {circularNodes[activeStep].desc}
              </p>

              {/* Progress selector dots */}
              <div className="pt-4 border-t border-[#E0EBE0] flex items-center gap-2">
                {circularNodes.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveStep(dotIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeStep === dotIdx ? 'w-6 bg-[#1E4D2B]' : 'w-2 bg-[#D0DFD0]'
                    }`}
                    aria-label={`Go to stage ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <div className="pt-2 text-xs text-[#2A4835] bg-white p-3 rounded-xl border border-[#DDE7DD]">
                <strong className="text-[#132A1C]">
                  {lang === 'id' ? 'Nilai Tambah Industri:' : 'Industrial Value Driver:'}
                </strong>{' '}
                {lang === 'id'
                  ? 'Menghindari biaya pembuangan limbah biomassa dan menggantikan media karbon impor dengan produk dalam negeri.'
                  : 'Eliminates agro-waste disposal costs while displacing fossil-derived imported carbons with regional circular media.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
