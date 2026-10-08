import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  onRequestDemo: (intent?: string) => void;
  onPartnerWithUs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo, onPartnerWithUs }) => {
  const { lang, setLang } = useLanguage();
  const t = TRANSLATIONS[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.technology, href: '#technology' },
    { name: t.solution, href: '#solution' },
    { name: t.cas, href: '#cas-integration' },
    { name: t.components, href: '#components' },
    { name: t.simulation, href: '#simulation' },
    { name: t.dashboard, href: '#dashboard' },
    { name: t.market, href: '#market' },
    { name: t.impact, href: '#circular-economy' },
    { name: t.roadmap, href: '#roadmap' },
    { name: t.insights, href: '#insights' },
    { name: t.faq, href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8FAF7]/95 backdrop-blur-md border-b border-[#E1E8E0] shadow-xs py-3'
          : 'bg-[#F8FAF7]/75 backdrop-blur-xs py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group text-decoration-none shrink-0"
            aria-label="SACETHYX Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1E4D2B] to-[#2D6A4F] flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
              <span className="font-display tracking-tight text-emerald-200">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#132A1C] font-display">
              SACETHYX
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-[#465A4E]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#132A1C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2D6A4F] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Switcher & CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Elegant Language Switcher */}
            <div className="flex items-center bg-[#EAF2EA] p-0.5 rounded-lg border border-[#D5E4D5] text-xs font-semibold">
              <button
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                  lang === 'id'
                    ? 'bg-white text-[#1E4D2B] shadow-2xs font-bold'
                    : 'text-[#587361] hover:text-[#132A1C]'
                }`}
                title="Bahasa Indonesia"
              >
                <span>ID</span>
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                  lang === 'en'
                    ? 'bg-white text-[#1E4D2B] shadow-2xs font-bold'
                    : 'text-[#587361] hover:text-[#132A1C]'
                }`}
                title="English"
              >
                <span>EN</span>
              </button>
            </div>

            <button
              onClick={onPartnerWithUs}
              className="text-xs font-semibold text-[#2D6A4F] hover:text-[#132A1C] px-3.5 py-2 rounded-lg border border-[#D0DCD0] hover:border-[#2D6A4F] transition-colors bg-white/80 whitespace-nowrap cursor-pointer"
            >
              {t.partnerBtn}
            </button>

            <button
              onClick={() => onRequestDemo('general_demo')}
              className="text-xs font-semibold text-white bg-[#1E4D2B] hover:bg-[#15381F] active:scale-98 px-4 py-2 rounded-lg transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>{t.demoBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <div className="flex items-center bg-[#EAF2EA] p-0.5 rounded-md border border-[#D5E4D5] text-[11px] font-semibold">
              <button
                onClick={() => setLang('id')}
                className={`px-2 py-0.5 rounded ${lang === 'id' ? 'bg-white text-[#1E4D2B] font-bold shadow-2xs' : 'text-[#587361]'}`}
              >
                ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded ${lang === 'en' ? 'bg-white text-[#1E4D2B] font-bold shadow-2xs' : 'text-[#587361]'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#465A4E] hover:text-[#132A1C] hover:bg-[#E9F0E8] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E1E8E0] bg-[#F8FAF7] px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#465A4E] hover:text-[#132A1C] px-2 py-1.5 rounded-md hover:bg-[#E9F0E8]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E1E8E0] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPartnerWithUs();
                }}
                className="w-full text-center text-xs font-semibold text-[#2D6A4F] py-2.5 rounded-lg border border-[#D0DCD0] bg-white"
              >
                {t.partnerBtn}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo('general_demo');
                }}
                className="w-full text-center text-xs font-semibold text-white bg-[#1E4D2B] py-2.5 rounded-lg shadow-xs"
              >
                {t.demoBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
