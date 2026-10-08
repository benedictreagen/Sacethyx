import React from 'react';
import { Target, Cpu, RefreshCw, Maximize, Clock, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface InvestorStoryProps {
  onPartnerClick: () => void;
}

export const InvestorStory: React.FC<InvestorStoryProps> = ({ onPartnerClick }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].investorStory;

  const progression = [
    { title: '1. PROBLEM', subtitle: lang === 'id' ? 'Kebocoran Ekonomi Panen' : 'Economic Value Leakage' },
    { title: '2. TECHNOLOGY', subtitle: lang === 'id' ? 'Adsorpsi Karbon Tebu' : 'Bagasse Carbon Adsorption' },
    { title: '3. PRODUCT', subtitle: lang === 'id' ? 'Kartrid Modular Siap Pakai' : 'Modular Replaceable Cartridge' },
    { title: '4. REVENUE', subtitle: lang === 'id' ? 'Kartrid Berulang & Servis' : 'Recurring Cartridge Sales' },
    { title: '5. SCALE', subtitle: lang === 'id' ? 'Retrofit Ribuan Gudang' : 'Universal Retrofit Scalability' },
  ];

  const pillars = [
    {
      title: lang === 'id' ? 'Platform Teknologi Modular' : 'Modular Technology Platform',
      desc: lang === 'id' ? 'Perangkat terpisah yang dapat disesuaikan dengan volume ruangan dan beban etilen tanpa merombak sistem pendingin.' : 'Modular architecture configurable to room volumes and ethylene loads without replacing cooling.'
    },
    {
      title: lang === 'id' ? 'Model Pendapatan Berulang' : 'Recurring Revenue Model',
      desc: lang === 'id' ? 'Penjualan sistem awal didukung penggantian kartrid berkala dan kontrak pemeliharaan SLA tahunan.' : 'Initial system deployment supported by predictable cartridge replenishment cycles and annual SLAs.'
    },
    {
      title: lang === 'id' ? 'Skalabilitas Retrofit Universal' : 'Universal Retrofit Scalability',
      desc: lang === 'id' ? 'Kompatibel dengan cold storage standar dan Controlled Atmosphere Storage (CAS) di berbagai komoditas.' : 'Compatible with both standard cold rooms and advanced CAS across diverse horticulture commodities.'
    },
    {
      title: lang === 'id' ? 'Integritas Ekonomi Sirkular' : 'Circular Economy Advantage',
      desc: lang === 'id' ? 'Memanfaatkan ampas tebu lokal berbiaya rendah untuk menghasilkan produk bernilai tambah tinggi.' : 'Upcycling abundant regional agro-residues into high-margin functional agritech components.'
    }
  ];

  return (
    <section id="investor-story" className="py-20 lg:py-28 bg-[#F8FAF7] border-b border-[#E3ECE3]">
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

        {/* HORIZONTAL PROGRESSION BAR */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-[#DCE5DC] shadow-xs mb-10">
          <span className="text-xs font-mono font-bold text-[#1E4D2B] uppercase tracking-wider block mb-4">
            {lang === 'id' ? 'PROGRESI STRATEGIS PLATFORM' : 'STRATEGIC PLATFORM PROGRESSION'}
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {progression.map((item, idx) => (
              <div
                key={item.title}
                className="bg-[#FAFDF9] p-4 rounded-2xl border border-[#DCE7DC] flex flex-col justify-between"
              >
                <div className="text-xs font-mono font-bold text-[#2D6A4F] mb-1">
                  {item.title}
                </div>
                <div className="text-xs font-bold text-[#132A1C] font-display">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Strategic Investor Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {pillars.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-[#DCE5DC] shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#2D6A4F] bg-[#EAF3EB] px-2.5 py-1 rounded inline-block mb-3">
                  0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-[#132A1C] font-display mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#465A4E] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Now Banner */}
        <div className="bg-[#EAF3EB] rounded-2xl p-6 border border-[#CCDCCC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#1E4D2B] shrink-0" />
            <p className="text-xs sm:text-sm text-[#2A4835] font-medium">
              {t.whyNow}
            </p>
          </div>
          <button
            onClick={onPartnerClick}
            className="text-xs font-bold text-white bg-[#1E4D2B] hover:bg-[#15381F] px-4 py-2.5 rounded-xl transition-colors shrink-0 cursor-pointer"
          >
            {lang === 'id' ? 'Bermitra / Diskusi Bisnis' : 'Explore Strategic Partnership'}
          </button>
        </div>
      </div>
    </section>
  );
};
