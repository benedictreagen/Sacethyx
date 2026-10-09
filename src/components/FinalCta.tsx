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
    <section className="py-20 lg:py-28 bg-[#08170E] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#84CC16] rounded-full blur-3xl opacity-10" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#1E4D2B] rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A3E635] mb-5">
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-heading tracking-tight mb-5 leading-tight">
            {t.headline}
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto font-sans">
            {t.body}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => onRequestDemo('final_cta')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-[#08170E] bg-[#84CC16] hover:bg-[#A3E635] shadow-lg transition-all active:scale-[0.99] cursor-pointer"
            >
              <span>{t.demoBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#08170E]" />
            </button>

            <button
              onClick={onPartnerWithUs}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-colors cursor-pointer"
            >
              <span>{t.partnerBtn}</span>
            </button>
          </div>

          <p className="text-xs text-white/50 max-w-xl mx-auto font-sans">
            {t.subtext}
          </p>
        </div>
      </div>
    </section>
  );
};
