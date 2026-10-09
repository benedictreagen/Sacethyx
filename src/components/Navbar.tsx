import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
    { name: t.solution, href: '#solution' },
    { name: t.technology, href: '#technology' },
    { name: t.components, href: '#components' },
    { name: t.simulation, href: '#simulation' },
    { name: t.dashboard, href: '#dashboard' },
    { name: t.roi, href: '#roi-calculator' },
    { name: t.impact, href: '#circular-economy' },
    { name: t.faq, href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08170E]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
          : 'bg-[#08170E]/80 backdrop-blur-sm border-b border-white/5 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Space Grotesk) */}
          <a
            href="#"
            className="flex items-center gap-2.5 group text-decoration-none shrink-0"
            aria-label="SACETHYX Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#84CC16] to-[#4D7C0F] flex items-center justify-center text-[#08170E] font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
              <span className="font-heading tracking-tight font-extrabold text-[#08170E]">S</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                SACETHYX
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#A3E635] font-semibold hidden md:inline">
                Agritech
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Inter, whitespace-nowrap, hover underline) */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-white/75">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A3E635] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Toggle & Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 p-0.5 rounded-lg border border-white/10 text-xs font-medium">
              <button
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'id'
                    ? 'bg-[#A3E635] text-[#08170E] font-bold shadow-xs'
                    : 'text-white/70 hover:text-white'
                }`}
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#A3E635] text-[#08170E] font-bold shadow-xs'
                    : 'text-white/70 hover:text-white'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            <button
              onClick={onPartnerWithUs}
              className="text-xs font-semibold text-white/90 hover:text-white px-3.5 py-2 rounded-lg border border-white/20 hover:border-[#A3E635]/60 transition-colors bg-white/5 whitespace-nowrap cursor-pointer"
            >
              {t.partnerBtn}
            </button>

            <button
              onClick={() => onRequestDemo('general_demo')}
              className="text-xs font-semibold text-[#08170E] bg-[#84CC16] hover:bg-[#A3E635] active:scale-98 px-4 py-2 rounded-lg transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>{t.demoBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <div className="flex items-center bg-white/10 p-0.5 rounded-md border border-white/10 text-[11px] font-medium">
              <button
                onClick={() => setLang('id')}
                className={`px-2 py-0.5 rounded ${lang === 'id' ? 'bg-[#A3E635] text-[#08170E] font-bold' : 'text-white/70'}`}
              >
                ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded ${lang === 'en' ? 'bg-[#A3E635] text-[#08170E] font-bold' : 'text-white/70'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/10 bg-[#08170E] px-4 pt-3 pb-6 shadow-2xl animate-in fade-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white px-2 py-2 rounded-md hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPartnerWithUs();
                }}
                className="w-full text-center text-xs font-semibold text-white/90 py-2.5 rounded-lg border border-white/20 bg-white/5"
              >
                {t.partnerBtn}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo('general_demo');
                }}
                className="w-full text-center text-xs font-semibold text-[#08170E] bg-[#84CC16] py-2.5 rounded-lg shadow-xs"
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
