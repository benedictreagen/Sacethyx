import React, { useState } from 'react';
import {
  Layers,
  Wind,
  Radio,
  Cpu,
  Network,
  CheckCircle2,
  ChevronRight,
  Eye,
  ShieldCheck,
  Maximize2,
  X,
  Sparkles,
  Zap,
  RotateCcw,
  Sliders,
  Activity,
  Droplets,
  Thermometer,
  Lock,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { IMAGES } from '../data/assets';

export const ProductArchitecture: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].components;
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [activeProductTab, setActiveProductTab] = useState<'device' | 'cartridge' | 'docking'>('device');
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  // Maps the 5 modular components to official hardware images
  const imagesMap = [
    IMAGES.sacethyxCartridgeProduct, // Item 0: Cartridge Core (New product photo)
    IMAGES.flowBlower,               // Item 1: Centrifugal Airflow Blower
    IMAGES.senseSensor,              // Item 2: Multi-Gas Telemetry Sensor
    IMAGES.sacethyxProductDevice,    // Item 3: Master Control & Display Hub (New product photo)
    IMAGES.integrationFlange         // Item 4: CAS Wall Integration Flange
  ];

  const currentComp = t.list[selectedIdx];
  const currentImg = imagesMap[selectedIdx];

  // Specific product callout bullets from the uploaded product image
  const productFeatures = [
    {
      icon: 'etilen',
      title: lang === 'id' ? 'Mengurangi Etilen' : 'Reduce Ethylene',
      desc: lang === 'id'
        ? 'Karbon aktif ampas tebu menyerap gas etilen secara selektif dan efektif.'
        : 'Sugarcane bagasse activated carbon selectively and effectively adsorbs ethylene.',
    },
    {
      icon: 'kesegaran',
      title: lang === 'id' ? 'Menjaga Kesegaran Buah' : 'Preserve Fruit Freshness',
      desc: lang === 'id'
        ? 'Memperpanjang masa simpan dan mutu komoditas buah klimaterik pascapanen.'
        : 'Extends post-harvest shelf life and firmness for climacteric fruit commodities.',
    },
    {
      icon: 'cas',
      title: lang === 'id' ? 'Terintegrasi Modified Atmosphere' : 'Integrated with Modified Atmosphere',
      desc: lang === 'id'
        ? 'Bekerja harmonis mengontrol kadar O₂ dan CO₂ agar atmosfer ruang simpan tetap optimal.'
        : 'Operates in harmony to preserve target O₂ and CO₂ setpoints within sealed storage rooms.',
    },
    {
      icon: 'telemetri',
      title: lang === 'id' ? 'Monitoring Real-Time' : 'Real-Time Monitoring',
      desc: lang === 'id'
        ? 'Pantau dinamika gas, suhu, dan kelembapan ruang kapan saja melalui layar sentuh atau cloud.'
        : 'Track gas dynamics, temperature, and relative humidity anytime via touchscreen or telemetry cloud.',
    },
    {
      icon: 'praktis',
      title: lang === 'id' ? 'Desain Praktis (Plug & Play)' : 'Practical Plug & Play Design',
      desc: lang === 'id'
        ? 'Cartridge plug & play, mudah diganti dan dirawat tanpa perlu peralatan khusus.'
        : 'Plug & play cartridge, easily swapped and maintained without requiring specialized tools.',
    },
  ];

  return (
    <section id="components" className="py-20 lg:py-28 bg-[#F2F7F2] border-b border-[#DFE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2D6A4F] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#132A1C] leading-tight font-display mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#465A4E]">
            {t.subtitle}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* HERO PRODUCT SHOWCASE CONTAINER (User Uploaded Product Graphics) */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-[#D5E2D5] shadow-md mb-12 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-[#EDF4ED] gap-3">
            <div>
              <span className="text-xs font-mono font-bold text-[#1E4D2B] uppercase tracking-wider block">
                {lang === 'id' ? 'FOTO PRODUK RESMI // SACETHYX HARDWARE SYSTEM' : 'OFFICIAL PRODUCT SHOWCASE // SACETHYX HARDWARE SYSTEM'}
              </span>
              <span className="text-xs text-[#52705C]">
                {lang === 'id'
                  ? 'Perangkat cerdas pengontrol etilen dan filter kartrid karbon aktif ampas tebu.'
                  : 'Smart ethylene controller device and sugarcane bagasse activated carbon filter cartridge.'}
              </span>
            </div>

            {/* View Selector for Product Photos */}
            <div className="flex items-center gap-1.5 bg-[#EEF5EF] p-1 rounded-xl border border-[#DCE8DD]">
              <button
                onClick={() => setActiveProductTab('device')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeProductTab === 'device'
                    ? 'bg-white text-[#132A1C] shadow-sm'
                    : 'text-[#486350] hover:text-[#132A1C]'
                }`}
              >
                {lang === 'id' ? 'Sistem Lengkap' : 'Complete System'}
              </button>
              <button
                onClick={() => setActiveProductTab('cartridge')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeProductTab === 'cartridge'
                    ? 'bg-white text-[#132A1C] shadow-sm'
                    : 'text-[#486350] hover:text-[#132A1C]'
                }`}
              >
                {lang === 'id' ? 'Cartridge Filter' : 'Filter Cartridge'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: High-Resolution Product Image with Interactive Overlay */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#D0DFD0] shadow-sm bg-neutral-50 group">
                {activeProductTab === 'device' ? (
                  <div className="relative aspect-[4/3] w-full bg-neutral-100">
                    <img
                      src={IMAGES.sacethyxProductDevice}
                      alt="SACETHYX Smart Ethylene Management Hardware System"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-white text-xs font-mono">
                      <span className="text-emerald-400 font-bold">SACETHYX HUB</span> · PLUG & PLAY
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] w-full bg-white flex items-center justify-center p-6">
                    <img
                      src={IMAGES.sacethyxCartridgeProduct}
                      alt="SACETHYX Filter Cartridge Product Photo"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-white text-xs font-mono">
                      <span className="text-emerald-400 font-bold">FILTER CARTRIDGE</span> · BIOMASS CARBON
                    </div>
                  </div>
                )}

                {/* Inspect Fullscreen Button */}
                <button
                  onClick={() =>
                    setFullscreenImg(
                      activeProductTab === 'device'
                        ? IMAGES.sacethyxProductDevice
                        : IMAGES.sacethyxCartridgeProduct
                    )
                  }
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Perbesar Gambar' : 'Inspect High-Res'}</span>
                </button>
              </div>

              {/* Callout highlights beneath image */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3 text-xs">
                <div className="p-2.5 bg-[#FAFDF9] rounded-xl border border-[#DCE5DC]">
                  <span className="font-mono text-[10px] text-[#2D6A4F] uppercase font-bold block mb-0.5">
                    {lang === 'id' ? 'Case / Housing' : 'Case / Housing'}
                  </span>
                  <p className="text-[11px] text-[#465A4E] leading-snug">
                    {lang === 'id'
                      ? 'Desain ringkas, tahan suhu dingin, mudah ditempatkan di ruang simpan.'
                      : 'Compact, cold-resistant casing, easily wall or rack mounted.'}
                  </p>
                </div>

                <div className="p-2.5 bg-[#FAFDF9] rounded-xl border border-[#DCE5DC]">
                  <span className="font-mono text-[10px] text-[#2D6A4F] uppercase font-bold block mb-0.5">
                    {lang === 'id' ? 'Layar Display Real-Time' : 'Real-Time Screen'}
                  </span>
                  <p className="text-[11px] text-[#465A4E] leading-snug">
                    {lang === 'id'
                      ? 'Menampilkan kadar C₂H₄, O₂, CO₂, suhu, dan kelembapan real-time.'
                      : 'Displays live C₂H₄, O₂, CO₂, temp, and relative humidity.'}
                  </p>
                </div>

                <div className="p-2.5 bg-[#FAFDF9] rounded-xl border border-[#DCE5DC] col-span-2 sm:col-span-1">
                  <span className="font-mono text-[10px] text-[#2D6A4F] uppercase font-bold block mb-0.5">
                    {lang === 'id' ? 'Slot Plug & Play' : 'Plug & Play Latch'}
                  </span>
                  <p className="text-[11px] text-[#465A4E] leading-snug">
                    {lang === 'id'
                      ? 'Cukup buka pintu samping dan masukkan cartridge tanpa alat bantu.'
                      : 'Zero-tool side latch for instant tool-free cartridge replacement.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Product Specifications & 5 Key Value Points */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EB] text-xs font-semibold text-[#1E4D2B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>{lang === 'id' ? 'Spesifikasi Produk Resmi' : 'Official Product Specifications'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#132A1C] font-display">
                {lang === 'id'
                  ? 'Sistem Terintegrasi untuk Ruang Simpan Komersial'
                  : 'Integrated Platform for Commercial Storage'}
              </h3>

              <p className="text-sm text-[#465A4E] leading-relaxed">
                {lang === 'id'
                  ? 'Dirancang khusus untuk fasilitas Controlled Atmosphere Storage (CAS) dan cold storage hortikultura. Menggabungkan efisiensi adsorpsi karbon aktif ampas tebu dengan telemetri multi-gas presisi tinggi.'
                  : 'Engineered specifically for Controlled Atmosphere Storage (CAS) and horticulture cold bays. Pairs high-efficiency sugarcane bagasse activated carbon with precision multi-gas telemetry.'}
              </p>

              {/* 5 Value Propositions (From User Graphic) */}
              <div className="space-y-2.5 pt-2">
                {productFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#FAFDF9] rounded-xl border border-[#DCE5DC] hover:border-[#2D6A4F]/60 transition-colors flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-lg bg-[#EAF3EB] text-[#1E4D2B] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#132A1C] mb-0.5">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-[#4F6D58] leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE 5-COMPONENT INSPECTION WORKBENCH */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-[#D8E6D8] shadow-md mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#EDF4ED] gap-2">
            <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase tracking-wider">
              {t.clickPrompt}
            </span>
            <div className="text-xs font-mono text-[#5E7A68]">
              {selectedIdx + 1} / 5 Selected · High-Res Agritech Hardware Render
            </div>
          </div>

          {/* Component Tabs Horizontal Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
            {t.list.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1E4D2B] text-white border-[#1E4D2B] shadow-sm transform -translate-y-0.5'
                      : 'bg-[#FAFDF9] text-[#132A1C] border-[#DCE5DC] hover:border-[#2D6A4F]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#EAF3EB] text-[#2D6A4F]'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-emerald-200' : 'text-[#5E7A68]'
                      }`}
                    >
                      {item.id === 'cartridge' ? 'CORE' : 'MODULE'}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold leading-tight line-clamp-1">{item.name}</h4>
                </button>
              );
            })}
          </div>

          {/* Large Focused Showcase Display for Selected Component */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAFDF9] p-6 lg:p-8 rounded-2xl border border-[#DDE7DD]">
            {/* Visual Image Render */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#D5E1D5] shadow-xs bg-neutral-100 group">
                <img
                  src={currentImg}
                  alt={currentComp.name}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-1">
                    {currentComp.num} // {currentComp.role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display">{currentComp.name}</h3>
                  <span className="text-xs text-white/80 font-mono mt-0.5">
                    Engineered Agritech Subsystem Hardware
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Detail Specifications */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#1E4D2B] bg-[#EAF3EB] px-3 py-1 rounded-md">
                  {currentComp.role}
                </span>
                <span className="text-xs text-[#5E7A68] font-mono">
                  {currentComp.id === 'cartridge' ? 'Proprietary Core Asset' : 'Hardware Integration Module'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#132A1C] font-display">
                {currentComp.name}
              </h3>

              <p className="text-sm sm:text-base text-[#465A4E] leading-relaxed">
                {currentComp.desc}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-white rounded-xl border border-[#DDE7DD]">
                  <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase tracking-wider block mb-1">
                    {lang === 'id' ? 'Fungsi Teknis Spesifik:' : 'Specific Technical Function:'}
                  </span>
                  <p className="text-xs text-[#132A1C] font-medium">
                    {currentComp.techFunction}
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#DDE7DD]">
                  <span className="text-xs font-mono font-bold text-[#2D6A4F] uppercase tracking-wider block mb-1">
                    {lang === 'id' ? 'Peran dalam Sistem:' : 'Role in Complete System:'}
                  </span>
                  <p className="text-xs text-[#132A1C] font-medium">
                    {currentComp.systemRole}
                  </p>
                </div>
              </div>

              {/* Location in System Schematic Marker */}
              <div className="p-3 bg-[#EAF3EB] rounded-xl border border-[#CDDECE] flex items-center justify-between text-xs text-[#2A4835]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
                  <span>
                    {lang === 'id' ? 'Status Integrasi:' : 'Integration Status:'}{' '}
                    <strong>{lang === 'id' ? 'Modular & Siap Pasang' : 'Modular & Ready for Retrofit'}</strong>
                  </span>
                </div>
                <span className="font-mono text-[#1E4D2B] font-bold">Slot #{currentComp.num}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal for High-Res Inspection */}
      {fullscreenImg && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex flex-col p-4 sm:p-8 animate-fadeIn">
          <div className="flex items-center justify-between text-white pb-4 max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <div>
                <h3 className="text-base sm:text-lg font-bold">
                  {lang === 'id' ? 'Foto Produk Resolusi Tinggi' : 'High-Resolution Product Inspection'}
                </h3>
                <p className="text-xs text-neutral-400">SACETHYX Hardware System</p>
              </div>
            </div>
            <button
              onClick={() => setFullscreenImg(null)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 max-w-6xl mx-auto w-full relative rounded-2xl overflow-hidden border border-white/20 flex items-center justify-center bg-black">
            <img
              src={fullscreenImg}
              alt="High-Res Product Inspection"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
