import React from 'react';
import { DollarSign, Sliders, Sparkles, Gauge, Network, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ValueProposition: React.FC = () => {
  const { lang } = useLanguage();

  const panenPillars = [
    {
      letter: 'P',
      name: 'PROFITABILITY',
      icon: DollarSign,
      color: 'from-emerald-600 to-teal-700',
      tagline: lang === 'id' ? 'Mengurangi Kerugian Food Loss' : 'Mitigate Commercial Food Loss',
      bmcText:
        lang === 'id'
          ? 'Mengurangi potensi kerugian akibat food loss dan penurunan mutu buah.'
          : 'Reduces potential financial losses caused by food loss and post-harvest fruit quality degradation.',
      detail:
        lang === 'id'
          ? 'Menjaga kekerasan daging buah, mencegah diskon harga paksa akibat demosi grade, dan mempertahankan margin komersial distributor.'
          : 'Preserves pulp firmness, prevents forced clearance discounting from grade demotions, and secures distributor profit margins.'
    },
    {
      letter: 'A',
      name: 'ADAPTABILITY',
      icon: Sliders,
      color: 'from-emerald-700 to-green-800',
      tagline: lang === 'id' ? 'Integrasi Fasilitas yang Ada' : 'Non-Invasive Integration',
      bmcText:
        lang === 'id'
          ? 'Dapat diintegrasikan dengan fasilitas penyimpanan yang sudah ada.'
          : 'Can be seamlessly integrated with customers’ existing storage infrastructure.',
      detail:
        lang === 'id'
          ? 'Kompatibel dengan cold storage dan CAS (Controlled Atmosphere Storage) tanpa memerlukan renovasi sipil atau rekonstruksi bangunan.'
          : 'Fully compatible with existing cold rooms and CAS (Controlled Atmosphere Storage) without demanding structural or civil building retrofits.'
    },
    {
      letter: 'N',
      name: 'NOVELTY',
      icon: Sparkles,
      color: 'from-teal-600 to-emerald-700',
      tagline: lang === 'id' ? 'Adsorben Karbon Ampas Tebu' : 'Bagasse Carbon & Cartridge',
      bmcText:
        lang === 'id'
          ? 'Karbon aktif berbasis ampas tebu sebagai adsorben etilen dengan replaceable cartridge.'
          : 'Sugarcane bagasse-derived activated carbon as an ethylene adsorbent with replaceable cartridges.',
      detail:
        lang === 'id'
          ? 'Pemanfaatan biomassa lokal Saccharum dengan struktur pori mikro yang dirancang khusus untuk menangkap gas etilen secara selektif.'
          : 'Upcycling local Saccharum agricultural biomass into engineered microporous carbon optimized for selective C₂H₄ volatile capture.'
    },
    {
      letter: 'E',
      name: 'EFFICIENCY',
      icon: Gauge,
      color: 'from-green-700 to-emerald-800',
      tagline: lang === 'id' ? 'Pengelolaan Terukur & Presisi' : 'Measurable Smart Control',
      bmcText:
        lang === 'id'
          ? 'Mendukung pengelolaan etilen dan kondisi penyimpanan secara lebih terukur.'
          : 'Enables measurable, data-driven ethylene management and storage condition tracking.',
      detail:
        lang === 'id'
          ? 'Sinergi modul sirkulasi SACETHYX FLOW, telemetri SACETHYX SENSE, dan kontroler cerdas menghasilkan data atmosfer real-time.'
          : 'Synergy of SACETHYX FLOW airflow, SACETHYX SENSE telemetry, and edge controllers provides actionable real-time atmospheric data.'
    },
    {
      letter: 'N',
      name: 'NETWORK',
      icon: Network,
      color: 'from-emerald-800 to-teal-900',
      tagline: lang === 'id' ? 'Keberlanjutan Rantai Pasok' : 'Supply Chain Sustainability',
      bmcText:
        lang === 'id'
          ? 'Mendukung efisiensi dan keberlanjutan rantai pasok buah.'
          : 'Supports commercial efficiency and sustainability across the entire fruit supply chain.',
      detail:
        lang === 'id'
          ? 'Memperpanjang jendela distribusi logistik domestik dan menjaga kelayakan standar mutu ekspor hingga pelabuhan tujuan internasional.'
          : 'Extends domestic logistics distribution windows and preserves strict export compliance standards arriving at international ports.'
    }
  ];

  return (
    <section id="value" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2D6A4F] mb-3">
              <span>
                {lang === 'id'
                  ? 'PROPOSISI NILAI BUSINESS MODEL CANVAS'
                  : 'BUSINESS MODEL CANVAS VALUE PROPOSITION'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#132A1C] leading-tight font-heading mb-4">
              {lang === 'id' ? (
                <>
                  Pilar Nilai Komersial <span className="text-[#2D6A4F]">P-A-N-E-N</span>
                </>
              ) : (
                <>
                  The <span className="text-[#2D6A4F]">P-A-N-E-N</span> Value Proposition
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-[#465A4E]">
              {lang === 'id'
                ? '5 keunggulan operasional inti SACETHYX yang dirancang untuk memperpanjang umur simpan dan melindungi margin agribisnis.'
                : 'The 5 operational pillars of SACETHYX designed to extend shelf life and protect commercial margins.'}
            </p>
          </div>

          {/* Acronym Visual Badge */}
          <div className="inline-flex items-center gap-1.5 p-2 bg-white rounded-2xl border border-[#D5E4D5] shadow-xs self-start md:self-auto">
            {['P', 'A', 'N', 'E', 'N'].map((char, i) => (
              <span
                key={i}
                className="w-9 h-9 rounded-xl bg-[#EAF3EB] text-[#1E4D2B] font-display font-extrabold text-sm flex items-center justify-center border border-[#CFE2D0]"
              >
                {char}
              </span>
            ))}
            <span className="text-xs font-mono font-bold text-[#2D6A4F] px-2 uppercase hidden sm:inline">
              Core Pillars
            </span>
          </div>
        </div>

        {/* 5 PANEN Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-10">
          {panenPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={`${pillar.name}-${idx}`}
                className="bg-white rounded-3xl p-6 border border-[#DCE5DC] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#A3C8A8]"
              >
                <div>
                  {/* Top Badge with Letter & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1E4D2B] to-[#123A1B] text-white font-display font-black text-lg flex items-center justify-center shadow-xs">
                      {pillar.letter}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#F0F6F0] flex items-center justify-center text-[#2D6A4F] group-hover:bg-[#E2EDE2] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2D6A4F] block">
                      {pillar.name}
                    </span>
                    <h3 className="text-base font-bold text-[#132A1C] font-display leading-snug">
                      {pillar.tagline}
                    </h3>
                  </div>

                  {/* BMC Official Phrasing Quote */}
                  <div className="p-3 rounded-xl bg-[#F6FAF6] border-l-3 border-[#2D6A4F] mb-3">
                    <p className="text-xs font-semibold text-[#1B3E25] italic leading-relaxed">
                      "{pillar.bmcText}"
                    </p>
                  </div>

                  {/* Operational Detail */}
                  <p className="text-xs text-[#526D5B] leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EEF4EE] flex items-center justify-between text-[11px] text-[#2D6A4F] font-mono">
                  <span>Pilar 0{idx + 1}</span>
                  <span className="text-emerald-700 font-semibold">{lang === 'id' ? 'Terverifikasi' : 'Verified'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Callout Strip */}
        <div className="bg-gradient-to-r from-[#173D22] to-[#1E4D2B] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <ShieldCheck className="w-6 h-6 text-emerald-300 shrink-0" />
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-emerald-200">
                {lang === 'id' ? 'Kompatibilitas Fleksibel' : 'Flexible Compatibility'}
              </p>
              <h4 className="text-sm sm:text-base font-bold">
                {lang === 'id'
                  ? 'Dirancang untuk mengintegrasi, bukan menggantikan fasilitas cold storage & CAS yang sudah ada.'
                  : 'Engineered to integrate with, never replace, existing cold storage and CAS infrastructure.'}
              </h4>
            </div>
          </div>
          <span className="text-xs font-mono bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 whitespace-nowrap">
            Retrofit Layer B2B
          </span>
        </div>
      </div>
    </section>
  );
};
