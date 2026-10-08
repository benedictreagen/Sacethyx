import React from 'react';
import { DollarSign, Sliders, Sparkles, Gauge, Recycle, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ValueProposition: React.FC = () => {
  const { lang } = useLanguage();

  const pillars = [
    {
      title: 'PROFITABILITY',
      icon: DollarSign,
      headline: lang === 'id' ? 'Menekan Kerugian Finansial' : 'Mitigate Commercial Loss',
      desc: lang === 'id'
        ? 'Mereduksi potensi kerugian akibat pematangan dini, pelunakan daging buah, dan penurunan kelas mutu komoditas saat penyimpanan.'
        : 'Potentially reduce economic losses associated with premature fruit softening, aesthetic downgrading, and post-harvest quality deterioration.'
    },
    {
      title: 'ADAPTABILITY',
      icon: Sliders,
      headline: lang === 'id' ? 'Integrasi Non-Invasif' : 'Non-Invasive Integration',
      desc: lang === 'id'
        ? 'Dirancang untuk terpasang pada cold storage dan CAS yang sudah beroperasi tanpa menuntut rekonstruksi struktur bangunan ruangan.'
        : 'Designed to integrate with existing cold storage and CAS infrastructure without demanding costly civil or structural retrofits.'
    },
    {
      title: 'NOVELTY',
      icon: Sparkles,
      headline: lang === 'id' ? 'Media Karbon Ampas Tebu' : 'Bio-Derived Adsorbent Core',
      desc: lang === 'id'
        ? 'Pemanfaatan karbon aktif ampas tebu dengan pori yang dioptimalkan untuk adsorpsi etilen dalam format kartrid standar isi ulang.'
        : 'Proprietary bagasse-based activated carbon engineered specifically for volatile ethylene capture inside a standardized replaceable cartridge.'
    },
    {
      title: 'EFFICIENCY',
      icon: Gauge,
      headline: lang === 'id' ? 'Kinerja Sistem Terpadu' : 'Unified System Performance',
      desc: lang === 'id'
        ? 'Memadukan adsorpsi fisik fisis, resirkulasi udara terkontrol, sensor nirkabel, dan peringatan operasional otomatis.'
        : 'Seamlessly combines physical adsorption, calibrated airflow recirculation, multi-parameter sensing, and automated operational alerts.'
    },
    {
      title: 'CIRCULARITY',
      icon: Recycle,
      headline: lang === 'id' ? 'Nilai Tambah Dari Limbah' : 'Waste-to-Value Loop',
      desc: lang === 'id'
        ? 'Mengubah residu ampas tebu industri gula menjadi material fungsional bernilai tinggi, mendukung target keberlanjutan industri.'
        : 'Converts agricultural sugarcane bagasse residue into a higher-value functional adsorbent, driving industrial resource circularity.'
    },
    {
      title: 'SCALABILITY',
      icon: Maximize2,
      headline: lang === 'id' ? 'Kapasitas Ruang Fleksibel' : 'Modular Storage Capacity',
      desc: lang === 'id'
        ? 'Arsitektur modular berbasis kartrid memungkinkan penyesuaian susunan unit sesuai volume ruangan dan tonase komoditas buah.'
        : 'Cartridge-based architecture allows flexible system sizing and parallel cartridge arrays configured to exact room volume and fruit loads.'
    }
  ];

  return (
    <section id="value" className="py-20 lg:py-28 bg-[#F2F7F2] border-b border-[#DDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2D6A4F] mb-3">
            <span>{lang === 'id' ? 'KEUNGGULAN KOMPETITIF' : 'COMPETITIVE DIFFERENTIATION'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#132A1C] leading-tight font-display mb-4">
            {lang === 'id' ? 'Mengapa SACETHYX?' : 'Why SACETHYX?'}
          </h2>
          <p className="text-base sm:text-lg text-[#465A4E]">
            {lang === 'id'
              ? 'Proposisi nilai komersial menyeluruh yang dirancang bagi pemangku kepentingan rantai dingin pascapanen.'
              : 'A comprehensive commercial proposition engineered specifically for cold-chain stakeholders seeking dependable preservation.'}
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-7 lg:p-8 border border-[#DCE5DC] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#2D6A4F] bg-[#EAF3EB] px-3 py-1 rounded-md">
                      {pillar.title}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#F0F6F0] flex items-center justify-center text-[#2D6A4F]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#132A1C] font-display mb-2">
                    {pillar.headline}
                  </h3>

                  <p className="text-sm text-[#465A4E] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EDF3ED] text-xs font-mono text-[#5A7764]">
                  {lang === 'id' ? 'Keunggulan Operasional B2B' : 'Industrial B2B Advantage'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
