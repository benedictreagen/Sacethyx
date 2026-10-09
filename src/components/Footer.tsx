import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onContactClick: (topic: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].footer;
  const navT = TRANSLATIONS[lang].nav;

  return (
    <footer className="bg-[#040B07] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#84CC16] to-[#2D6A4F] flex items-center justify-center text-[#08170E] font-bold text-sm shadow-xs">
                <span className="font-heading tracking-tight text-[#08170E]">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-heading">
                SACETHYX
              </span>
            </div>
            <p className="text-sm text-white/80 max-w-sm mb-3 font-medium leading-relaxed font-sans">
              {t.brandDesc}
            </p>
            <p className="text-xs text-white/50 max-w-sm leading-relaxed mb-4 font-sans">
              {t.subDesc}
            </p>
            <div className="text-[11px] font-mono text-[#A3E635] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
              {t.legalNote}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-4">
              {t.navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li>
                <a href="#technology" className="hover:text-white transition-colors">
                  {navT.technology}
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-white transition-colors">
                  {navT.solution}
                </a>
              </li>
              <li>
                <a href="#components" className="hover:text-white transition-colors">
                  {navT.components}
                </a>
              </li>
              <li>
                <a href="#cas-integration" className="hover:text-white transition-colors">
                  {navT.cas}
                </a>
              </li>
              <li>
                <a href="#simulation" className="hover:text-white transition-colors">
                  {navT.simulation}
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-white transition-colors">
                  {navT.dashboard}
                </a>
              </li>
              <li>
                <a href="#market" className="hover:text-white transition-colors">
                  {navT.market}
                </a>
              </li>
              <li>
                <a href="#circular-economy" className="hover:text-white transition-colors">
                  {navT.impact}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  {lang === 'id' ? 'Tentang Kami' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  {navT.insights}
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Partnerships */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-4">
              {t.businessTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li>
                <button
                  onClick={() => onContactClick('demo')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {navT.demoBtn}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onContactClick('partner')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {navT.partnerBtn}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onContactClick('investor')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {lang === 'id' ? 'Hubungan Investor' : 'Investor Relations'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onContactClick('pilot')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {lang === 'id' ? 'Pengujian Pilot Cold Store' : 'Pilot Storage Assessment'}
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-4">
              {t.connectTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@sacethyx.com"
                  className="hover:text-white transition-colors"
                >
                  contact@sacethyx.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/50 gap-4">
          <p>{t.legalDesc}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-emerald-200 transition-colors cursor-pointer">{t.privacy}</span>
            <span>·</span>
            <span className="hover:text-emerald-200 transition-colors cursor-pointer">{t.terms}</span>
            <span>·</span>
            <span className="hover:text-emerald-200 transition-colors cursor-pointer">{t.cookies}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
