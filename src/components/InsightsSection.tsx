import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { INSIGHTS_DATA, LocalizedArticle } from '../data/content';

interface InsightsSectionProps {
  onSelectArticle: (article: LocalizedArticle) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].insights;

  return (
    <section id="insights" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2D6A4F] mb-3">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#132A1C] leading-tight font-heading mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#526458] font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Technical Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSIGHTS_DATA.map((article) => {
            const title = article.title[lang];
            const category = article.category[lang];
            const readTime = article.readTime[lang];
            const summary = article.summary[lang];

            return (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-[#FAFDF9] rounded-2xl p-7 border border-[#DCE5DC] shadow-xs hover:border-[#2D6A4F]/60 transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#5E7A68] mb-4 font-sans">
                    <span className="font-semibold text-[#2D6A4F]">{category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#132A1C] font-heading mb-3 group-hover:text-[#2D6A4F] transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#526458] leading-relaxed mb-6 font-sans">
                    {summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EEF4EE] flex items-center justify-between text-xs font-semibold text-[#1E4D2B]">
                  <span>{t.readMore}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
