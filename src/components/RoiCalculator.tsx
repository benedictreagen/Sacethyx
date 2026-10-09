import React, { useState, useMemo } from 'react';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Layers,
  HelpCircle,
  CheckCircle2,
  Package,
  Clock,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface RoiCalculatorProps {
  onOpenInquiry: (intent?: string) => void;
}

interface CommodityPreset {
  id: string;
  nameId: string;
  nameEn: string;
  pricePerTon: number;
  baselineDecayRate: number; // e.g. 0.18 = 18%
  code: string;
}

const COMMODITY_PRESETS: CommodityPreset[] = [
  {
    id: 'mango',
    nameId: 'Mangga (Gedong Gincu / Harum Manis)',
    nameEn: 'Mango (Gedong Gincu / Harum Manis)',
    pricePerTon: 22_000_000,
    baselineDecayRate: 0.18,
    code: 'MG'
  },
  {
    id: 'banana',
    nameId: 'Pisang (Cavendish / Barangan)',
    nameEn: 'Banana (Cavendish / Barangan)',
    pricePerTon: 14_000_000,
    baselineDecayRate: 0.22,
    code: 'BA'
  },
  {
    id: 'avocado',
    nameId: 'Alpukat (Mentega / Hass)',
    nameEn: 'Avocado (Mentega / Hass)',
    pricePerTon: 28_000_000,
    baselineDecayRate: 0.20,
    code: 'AV'
  },
  {
    id: 'melon',
    nameId: 'Melon (Golden / Cantaloupe)',
    nameEn: 'Melon (Golden / Cantaloupe)',
    pricePerTon: 16_000_000,
    baselineDecayRate: 0.15,
    code: 'ML'
  },
  {
    id: 'papaya',
    nameId: 'Pepaya (California)',
    nameEn: 'Papaya (California)',
    pricePerTon: 10_000_000,
    baselineDecayRate: 0.25,
    code: 'PP'
  }
];

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenInquiry }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].roi;

  // User input states
  const [capacityTons, setCapacityTons] = useState<number>(30); // 5 - 150 MT
  const [selectedCommodityId, setSelectedCommodityId] = useState<string>('mango');
  const [customPrice, setCustomPrice] = useState<number>(22_000_000);
  const [cyclesPerYear, setCyclesPerYear] = useState<number>(8); // 4, 8, 12 cycles
  const [facilityType, setFacilityType] = useState<string>('packhouse');
  const [marketTier, setMarketTier] = useState<'export' | 'retail' | 'wholesale'>('export');

  // Active commodity preset
  const selectedCommodity = useMemo(() => {
    return COMMODITY_PRESETS.find((c) => c.id === selectedCommodityId) || COMMODITY_PRESETS[0];
  }, [selectedCommodityId]);

  // Sync price when commodity changes
  const handleCommoditySelect = (comm: CommodityPreset) => {
    setSelectedCommodityId(comm.id);
    setCustomPrice(comm.pricePerTon);
  };

  // -------------------------------------------------------------
  // BMC-ALIGNED FINANCIAL CALCULATION ENGINE
  // -------------------------------------------------------------
  // 1. Initial System Packaging (BMC: Rp20jt / customer / unit setup)
  // Recommended SACETHYX units based on storage capacity:
  // 1 unit covers ~25-35 MT (approx 100-150 m³ chamber)
  const recommendedUnits = useMemo(() => {
    if (capacityTons <= 35) return 1;
    if (capacityTons <= 70) return 2;
    if (capacityTons <= 110) return 3;
    return 4;
  }, [capacityTons]);

  const initialSetupCost = recommendedUnits * 20_000_000; // Rp20M per unit (BMC)

  // 2. Recurring Cartridge Consumables (BMC: Rp1.5jt / cartridge)
  // Estimated cartridge life is ~30-45 operational days per batch
  const cartridgesPerYear = useMemo(() => {
    const cartsPerUnit = Math.max(4, Math.ceil(cyclesPerYear * 0.75));
    return recommendedUnits * cartsPerUnit;
  }, [recommendedUnits, cyclesPerYear]);

  const recurringCartridgeCost = cartridgesPerYear * 1_500_000; // Rp1.5M per cartridge (BMC)
  const totalFirstYearCost = initialSetupCost + recurringCartridgeCost;

  // 3. Harvest Volume & Commercial Decay Leakage
  const annualThroughputTons = capacityTons * cyclesPerYear;
  const totalAnnualCropValue = annualThroughputTons * customPrice;

  // Baseline decay rate adjusted slightly by market strictness
  const marketStrictnessFactor = marketTier === 'export' ? 1.1 : marketTier === 'retail' ? 1.0 : 0.9;
  const baselineDecayRate = Math.min(0.35, selectedCommodity.baselineDecayRate * marketStrictnessFactor);

  // Baseline economic loss without ethylene management
  const baselineLossValue = totalAnnualCropValue * baselineDecayRate;
  const baselineLossTons = annualThroughputTons * baselineDecayRate;

  // 4. Performance with SACETHYX Sugarcane Bagasse Carbon Adsorption
  // Ethylene management typically reduces decay and premature softening by 68% - 75%
  const decayReductionEfficiency = 0.72; // 72% decay reduction
  const controlledDecayRate = baselineDecayRate * (1 - decayReductionEfficiency);
  const controlledLossValue = totalAnnualCropValue * controlledDecayRate;
  const controlledLossTons = annualThroughputTons * controlledDecayRate;

  // 5. Commercial Value Protected & Financial ROI
  const protectedHarvestValue = baselineLossValue - controlledLossValue;
  const protectedTons = baselineLossTons - controlledLossTons;

  const netAnnualSavings = protectedHarvestValue - totalFirstYearCost;
  const roiPercentage = Math.round((netAnnualSavings / totalFirstYearCost) * 100);

  // Payback period in months
  const paybackMonths = Math.max(
    0.8,
    Math.round(((totalFirstYearCost / protectedHarvestValue) * 12) * 10) / 10
  );

  // Equivalent chamber room volume estimation
  const chamberVolumeM3 = Math.round(capacityTons * 4.2);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="roi-calculator" className="py-20 lg:py-28 bg-[#F8FAF7] border-b border-[#DDE7DD]">
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

        {/* CALCULATOR WORKBENCH (GRID 12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* LEFT COLUMN: Input Configuration Controls (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE5DC] shadow-sm space-y-7">
            {/* 1. Facility Segment Selection (BMC Grounding) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#132A1C]">
                  {t.facilityType}
                </label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'packhouse', nameId: 'Packhouse & Ripening', nameEn: 'Packhouse & Ripening' },
                  { id: 'coldstorage', nameId: 'Cold Storage / CAS', nameEn: 'Cold Storage / CAS' },
                  { id: 'distributor', nameId: 'Distributor / Supplier', nameEn: 'Distributor / Supplier' },
                  { id: 'exporter', nameId: 'Eksportir / Importir', nameEn: 'Exporter / Importer' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFacilityType(item.id)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer border ${
                      facilityType === item.id
                        ? 'bg-[#1E4D2B] text-white border-[#1E4D2B] shadow-xs'
                        : 'bg-[#F9FAF9] hover:bg-[#EEF5EF] text-[#3A5042] border-[#DFE7DF]'
                    }`}
                  >
                    {lang === 'id' ? item.nameId : item.nameEn}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Storage Capacity (Tonase per Siklus) */}
            <div className="pt-2 border-t border-[#EEF4EE]">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#132A1C] block">
                    {t.storageCapacity}
                  </label>
                  <span className="text-[11px] text-[#55715E]">
                    Estimasi Volume Ruangan: ~{chamberVolumeM3} m³
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#EAF3EB] px-3.5 py-1.5 rounded-xl border border-[#CFE2D0]">
                  <span className="text-lg font-bold font-mono text-[#1E4D2B]">
                    {capacityTons}
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#2D6A4F]">MT (Ton)</span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="5"
                max="120"
                step="5"
                value={capacityTons}
                onChange={(e) => setCapacityTons(Number(e.target.value))}
                className="w-full h-2 bg-[#D9E7DA] rounded-lg appearance-none cursor-pointer accent-[#1E4D2B]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#6A8874] mt-1">
                <span>5 Ton (Ruang Kecil)</span>
                <span>30 Ton (Standar Packhouse)</span>
                <span>75 Ton</span>
                <span>120 Ton (Terminal Hub)</span>
              </div>
            </div>

            {/* 3. Fruit Commodity Presets */}
            <div className="pt-2 border-t border-[#EEF4EE]">
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#132A1C]">
                  {t.commodityType}
                </label>
                <span className="text-[11px] text-[#55715E]">
                  Kerentanan Gas Etilen
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {COMMODITY_PRESETS.map((comm) => (
                  <button
                    key={comm.id}
                    type="button"
                    onClick={() => handleCommoditySelect(comm)}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer border flex items-center justify-between ${
                      selectedCommodityId === comm.id
                        ? 'bg-[#EAF3EB] border-[#2D6A4F] text-[#132A1C] shadow-xs'
                        : 'bg-[#F9FAF9] hover:bg-[#EEF5EF] border-[#DFE7DF] text-[#3A5042]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#1E4D2B]/10 text-[#1E4D2B] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {comm.code}
                      </span>
                      <div>
                        <span className="text-xs font-bold block leading-tight">
                          {lang === 'id' ? comm.nameId : comm.nameEn}
                        </span>
                        <span className="text-[10px] font-mono text-[#587561]">
                          Susut Alami: ~{Math.round(comm.baselineDecayRate * 100)}%
                        </span>
                      </div>
                    </div>
                    {selectedCommodityId === comm.id && (
                      <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                    )}
                  </button>
                ))}
              </div>

              {/* Price per Ton field */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6FAF6] border border-[#DEEADE]">
                <span className="text-xs font-medium text-[#2C4834]">
                  {t.customPrice}
                </span>
                <div className="flex items-center gap-1 font-mono font-bold text-xs text-[#1E4D2B]">
                  <span>Rp</span>
                  <input
                    type="number"
                    min="1000000"
                    step="500000"
                    value={customPrice}
                    onChange={(e) => setCustomPrice(Math.max(1_000_000, Number(e.target.value)))}
                    className="w-28 text-right px-2 py-1 rounded bg-white border border-[#CBDCCF] text-xs font-mono"
                  />
                  <span>/ Ton</span>
                </div>
              </div>
            </div>

            {/* 4. Cycles and Market Tier */}
            <div className="pt-2 border-t border-[#EEF4EE] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#132A1C] block mb-2">
                  {t.cyclesPerYear}
                </label>
                <div className="flex gap-2">
                  {[4, 8, 12].map((cycle) => (
                    <button
                      key={cycle}
                      type="button"
                      onClick={() => setCyclesPerYear(cycle)}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold cursor-pointer border ${
                        cyclesPerYear === cycle
                          ? 'bg-[#1E4D2B] text-white border-[#1E4D2B]'
                          : 'bg-[#F9FAF9] text-[#3A5042] border-[#DFE7DF] hover:bg-[#EEF5EF]'
                      }`}
                    >
                      {cycle} {lang === 'id' ? 'Siklus' : 'Cycles'}
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-[#64826E] mt-1 block">
                  Total Throughput: {annualThroughputTons} Ton / tahun
                </span>
              </div>

              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#132A1C] block mb-2">
                  {t.marketTarget}
                </label>
                <select
                  value={marketTier}
                  onChange={(e) => setMarketTier(e.target.value as any)}
                  className="w-full py-2 px-3 rounded-xl text-xs bg-[#F9FAF9] border border-[#DFE7DF] font-medium text-[#132A1C] cursor-pointer"
                >
                  <option value="export">
                    {lang === 'id' ? 'Pasar Ekspor (Standar Mutu Kelas A)' : 'Export Market (Grade A Strict)'}
                  </option>
                  <option value="retail">
                    {lang === 'id' ? 'Ritel Modern & Supermarket' : 'Modern Retail & Supermarkets'}
                  </option>
                  <option value="wholesale">
                    {lang === 'id' ? 'Pasar Grosir & Distribusi Domestik' : 'Wholesale & Domestic Market'}
                  </option>
                </select>
                <span className="text-[10px] text-[#64826E] mt-1 block">
                  Toleransi demosi & penalti mutu
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Output Simulation Results & ROI Projections (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#13351C] to-[#0D2413] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#225B34] flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                    HASIL SIMULASI PROYEKSI ROI
                  </span>
                </div>
              </div>

              {/* Top Hero Stat: Protected Harvest Value */}
              <div className="mb-6 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="text-xs text-emerald-200 font-medium block mb-1">
                  {t.protectedValue}
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight tabular-nums">
                  {formatCurrency(protectedHarvestValue)}
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-emerald-300 font-mono">
                  <span className="bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-200 font-bold">
                    + {protectedTons.toFixed(1)} MT
                  </span>
                  <span>buah segar terselamatkan dari demosi grade</span>
                </div>
              </div>

              {/* Decay Reduction Comparison Bars */}
              <div className="mb-6 space-y-3">
                <div className="text-xs font-mono text-emerald-200 uppercase tracking-wider flex justify-between">
                  <span>Perbandingan Susut Mutu</span>
                  <span className="text-amber-300 font-bold">-72% Kerusakan</span>
                </div>

                {/* Bar 1: Without SACETHYX */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-neutral-300">
                    <span>Tanpa Adsorben Etilen:</span>
                    <span className="text-amber-400 font-mono font-semibold">
                      {(baselineDecayRate * 100).toFixed(1)}% ({formatCurrency(baselineLossValue)})
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${Math.min(100, baselineDecayRate * 100 * 2.8)}%` }}
                    />
                  </div>
                </div>

                {/* Bar 2: With SACETHYX */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-emerald-300 font-semibold">
                    <span>Dengan SACETHYX:</span>
                    <span className="text-emerald-300 font-mono">
                      {(controlledDecayRate * 100).toFixed(1)}% ({formatCurrency(controlledLossValue)})
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full"
                      style={{ width: `${Math.min(100, controlledDecayRate * 100 * 2.8)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Unit Economics Breakdown (BMC Aligned) */}
              <div className="p-4 rounded-xl bg-black/25 border border-white/10 mb-6 space-y-2.5 text-xs">
                <div className="flex justify-between text-emerald-200">
                  <span>
                    Paket Sistem Awal ({recommendedUnits} unit @ Rp20 Jt):
                  </span>
                  <span className="font-mono text-white">
                    {formatCurrency(initialSetupCost)}
                  </span>
                </div>
                <div className="flex justify-between text-emerald-200">
                  <span>
                    Kartrid Pengganti ({cartridgesPerYear} unit @ Rp1,5 Jt):
                  </span>
                  <span className="font-mono text-white">
                    {formatCurrency(recurringCartridgeCost)}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-white">
                  <span>Total Biaya Tahun Pertama:</span>
                  <span className="font-mono text-emerald-300">
                    {formatCurrency(totalFirstYearCost)}
                  </span>
                </div>
              </div>

              {/* Final ROI & Payback Indicators */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30">
                  <span className="text-[11px] font-mono text-emerald-300 block mb-1">
                    {t.roiPercent}
                  </span>
                  <div className="text-2xl font-black font-mono text-emerald-400">
                    +{roiPercentage}%
                  </div>
                  <span className="text-[10px] text-emerald-200/80">Tahun Pertama</span>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30">
                  <span className="text-[11px] font-mono text-emerald-300 block mb-1">
                    {t.paybackPeriod}
                  </span>
                  <div className="text-2xl font-black font-mono text-emerald-400">
                    ~{paybackMonths} bln
                  </div>
                  <span className="text-[10px] text-emerald-200/80">
                    Balik Modal Cepat
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button to Request Demo */}
            <div>
              <button
                type="button"
                onClick={() => onOpenInquiry(`roi_calc_${capacityTons}MT_${selectedCommodityId}`)}
                className="w-full py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0C2413] font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <span>{t.ctaBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-neutral-400 text-center mt-2 leading-relaxed">
                {t.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM PANEL: REALISASI PILAR P-A-N-E-N DALAM PERHITUNGAN INI */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE5DC] shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
            <h3 className="text-sm font-mono font-bold text-[#132A1C] uppercase tracking-wider">
              {t.panenTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 text-xs">
            <div className="p-4 rounded-2xl bg-[#F6FAF6] border border-[#DEEADE]">
              <span className="font-mono font-bold text-[#2D6A4F] block mb-1">
                [P] PROFITABILITY
              </span>
              <p className="text-[#3F5A47] leading-relaxed">
                Mencegah kerugian <strong>{formatCurrency(protectedHarvestValue)}</strong> dari devaluasi mutu buah per tahun.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F6FAF6] border border-[#DEEADE]">
              <span className="font-mono font-bold text-[#2D6A4F] block mb-1">
                [A] ADAPTABILITY
              </span>
              <p className="text-[#3F5A47] leading-relaxed">
                Unit <strong>{recommendedUnits} modul</strong> langsung dipasang pada duktus cold storage / CAS tanpa henti operasional.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F6FAF6] border border-[#DEEADE]">
              <span className="font-mono font-bold text-[#2D6A4F] block mb-1">
                [N] NOVELTY
              </span>
              <p className="text-[#3F5A47] leading-relaxed">
                Karbon aktif ampas tebu dengan kartrid isi ulang Rp1,5 Jt menjaga biaya operasional tetap efisien.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F6FAF6] border border-[#DEEADE]">
              <span className="font-mono font-bold text-[#2D6A4F] block mb-1">
                [E] EFFICIENCY
              </span>
              <p className="text-[#3F5A47] leading-relaxed">
                Pengelolaan etilen terukur menghemat energi refrigerasi dan memperpanjang holding window buah.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F6FAF6] border border-[#DEEADE]">
              <span className="font-mono font-bold text-[#2D6A4F] block mb-1">
                [N] NETWORK
              </span>
              <p className="text-[#3F5A47] leading-relaxed">
                Memastikan konsistensi kualitas hingga tiba di tangan mitra distributor, eksportir, dan ritel modern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
