import React from 'react';
import { ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface FinalCtaProps {
  onRequestDemo: (intent?: string) => void;
  onPartnerWithUs: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onRequestDemo, onPartnerWithUs }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].finalCta;

  return (
    <section className="py-20 lg:py-28 bg-[#132A1C] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2D6A4F] rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#1E4D2B] rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase bg-white/10 px-3.5 py-1.5 rounded-full mb-6">
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
            {t.headline}
          </h2>

          <p className="text-base sm:text-xl text-emerald-100/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t.body}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => onRequestDemo('final_cta')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#132A1C] bg-[#E8F3E9] hover:bg-white shadow-lg transition-all active:scale-[0.99] cursor-pointer"
            >
              <span>{t.demoBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#1E4D2B]" />
            </button>

            <button
              onClick={onPartnerWithUs}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-transparent hover:bg-white/10 border border-emerald-400/40 transition-colors cursor-pointer"
            >
              <span>{t.partnerBtn}</span>
            </button>
          </div>

          <p className="text-xs text-emerald-200/70 max-w-xl mx-auto">
            {t.subtext}
          </p>
        </div>
      </div>
    </section>
  );
};
