import React from 'react';
import { Briefcase, Award, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const TeamSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].team;

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#F8FAF7] border-b border-[#E3ECE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
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

        {/* Professional Role-Based Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.roles.map((member, idx) => (
            <div
              key={member.role}
              className="bg-white rounded-2xl p-7 border border-[#DCE5DC] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#1E4D2B]">
                    LEAD 0{idx + 1}
                  </span>
                  <span className="text-xs text-[#5A7764] font-sans">
                    Core Engineering
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#132A1C] font-heading mb-2">
                  {member.role}
                </h3>

                <p className="text-xs sm:text-sm text-[#526458] leading-relaxed font-sans">
                  {member.domain}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EEF4EE] flex items-center gap-2 text-xs text-[#2A4B36] font-sans">
                <Briefcase className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                <span>{lang === 'id' ? 'Fokus Penelitian & Validasi Lapangan' : 'Research & Field Deployment Focus'}</span>
              </div>
            </div>
          ))}

          {/* Institutional Advisory Network */}
          <div className="bg-[#1E4D2B] text-white rounded-2xl p-7 border border-[#2D6A4F] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#A3E635]">
                  COLLABORATION
                </span>
                <span className="text-xs text-white/70 font-sans">
                  Advisory
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-heading mb-2">
                {lang === 'id' ? 'Jaringan Riset & Mitra Industri' : 'Research & Industrial Network'}
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                {lang === 'id'
                  ? 'Bekerja sama dengan laboratorium pascapanen perguruan tinggi, pabrik gula, dan praktisi cold-chain hortikultura nasional.'
                  : 'Collaborating with post-harvest university laboratories, sugar refineries, and regional horticulture cold-chain practitioners.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 text-xs font-mono text-[#A3E635]">
              Institutional R&D Alliance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
