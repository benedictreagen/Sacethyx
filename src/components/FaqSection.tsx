import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { FAQ_DATA } from '../data/content';

export const FaqSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F2F7F2] border-b border-[#DDE7DD]">
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

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            const question = item.q[lang];
            const answer = item.a[lang];

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#DCE5DC] shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F9FAF9] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#132A1C] font-display pr-2">
                    {question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F0F6F0] flex items-center justify-center text-[#2D6A4F] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1E4D2B] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-[#465A4E] leading-relaxed border-t border-[#EEF4EE] mt-1 pt-4">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
