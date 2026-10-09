import React, { useState } from 'react';
import { Activity, Thermometer, Droplets, Wind, AlertTriangle, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

type SystemState = 'NORMAL' | 'WARNING' | 'REPLACEMENT';
type Timeframe = '6h' | '12h' | '24h';

export const MonitoringDashboard: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].dashboard;

  const [systemState, setSystemState] = useState<SystemState>('NORMAL');
  const [timeframe, setTimeframe] = useState<Timeframe>('24h');

  // Trend dataset mapped across status and timeframes
  const trendProfiles: Record<SystemState, Record<Timeframe, number[]>> = {
    NORMAL: {
      '6h': [0.85, 0.83, 0.82, 0.84, 0.81, 0.82],
      '12h': [0.90, 0.88, 0.86, 0.83, 0.82, 0.81, 0.83, 0.82],
      '24h': [0.95, 0.92, 0.88, 0.85, 0.83, 0.82, 0.81, 0.82, 0.80, 0.82]
    },
    WARNING: {
      '6h': [1.80, 2.05, 2.20, 2.38, 2.42, 2.45],
      '12h': [1.20, 1.45, 1.80, 2.05, 2.25, 2.38, 2.42, 2.45],
      '24h': [0.82, 0.95, 1.30, 1.85, 2.10, 2.35, 2.40, 2.45, 2.48, 2.45]
    },
    REPLACEMENT: {
      '6h': [1.70, 1.78, 1.85, 1.90, 1.92, 1.95],
      '12h': [1.45, 1.58, 1.68, 1.78, 1.85, 1.90, 1.92, 1.95],
      '24h': [1.10, 1.25, 1.45, 1.62, 1.78, 1.89, 1.92, 1.95, 1.96, 1.95]
    }
  };

  const stateConfigs = {
    NORMAL: {
      statusLabel: t.states.normal,
      statusColor: 'text-emerald-300 bg-emerald-950/70 border-emerald-500/50',
      badgeColor: 'bg-emerald-400',
      temp: '12.4°C',
      rh: '85%',
      ethylene: '0.82 ppm',
      airflow: '420 m³/h',
      cartridgeStatus: lang === 'id' ? 'AKTIF (Normal)' : 'ACTIVE (Nominal)',
      cartridgePercent: '82%',
      notification: null
    },
    WARNING: {
      statusLabel: t.states.warning,
      statusColor: 'text-amber-300 bg-amber-950/70 border-amber-500/50',
      badgeColor: 'bg-amber-400',
      temp: '13.8°C',
      rh: '88%',
      ethylene: '2.45 ppm',
      airflow: '480 m³/h',
      cartridgeStatus: lang === 'id' ? 'BEBAN TINGGI' : 'ELEVATED LOAD',
      cartridgePercent: '42%',
      notification: t.alertWarning
    },
    REPLACEMENT: {
      statusLabel: t.states.replacement,
      statusColor: 'text-rose-300 bg-rose-950/70 border-rose-500/50',
      badgeColor: 'bg-rose-400',
      temp: '12.5°C',
      rh: '84%',
      ethylene: '1.95 ppm',
      airflow: '410 m³/h',
      cartridgeStatus: lang === 'id' ? 'AMBANG BATAS TERCAPAI' : 'APPROACHING THRESHOLD',
      cartridgePercent: '12%',
      notification: t.alertReplacement
    }
  };

  const current = stateConfigs[systemState];
  const activeTrend = trendProfiles[systemState][timeframe];

  return (
    <section id="dashboard" className="py-20 lg:py-28 bg-[#07170F] text-white border-b border-emerald-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#1E4D2B] rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A3E635] mb-3">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight font-heading mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* PROMINENT DISCLAIMER AND SIMULATION STATE BAR */}
        <div className="mb-8 bg-[#0C2417] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <div>
              <span className="text-xs font-mono font-bold text-amber-300 tracking-wider uppercase block">
                {t.simulationTag}
              </span>
              <span className="text-xs text-white/60 font-sans">
                {t.simulationSub}
              </span>
            </div>
          </div>

          {/* Interactive State Toggle Buttons */}
          <div className="flex items-center gap-1.5 bg-[#0C1B10] p-1 rounded-xl border border-[#1E3E26] self-start sm:self-auto">
            <button
              onClick={() => setSystemState('NORMAL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                systemState === 'NORMAL'
                  ? 'bg-emerald-500 text-[#09150C] shadow-xs'
                  : 'text-emerald-300 hover:text-white'
              }`}
            >
              NORMAL
            </button>
            <button
              onClick={() => setSystemState('WARNING')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                systemState === 'WARNING'
                  ? 'bg-amber-400 text-[#09150C] shadow-xs'
                  : 'text-amber-300 hover:text-white'
              }`}
            >
              WARNING
            </button>
            <button
              onClick={() => setSystemState('REPLACEMENT')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                systemState === 'REPLACEMENT'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-rose-300 hover:text-white'
              }`}
            >
              REPLACEMENT
            </button>
          </div>
        </div>

        {/* Real-time Dashboard Shell */}
        <div className="bg-[#09170E] rounded-3xl p-6 lg:p-8 border border-[#1E3F27] shadow-xl">
          {/* Top Console Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#183620] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <span className="text-sm font-bold text-white tracking-wide font-display block">
                  SACETHYX SENSE TELEMETRY // BAY #04
                </span>
                <span className="text-xs text-emerald-300/70 font-mono">
                  Controlled Atmosphere Storage Unit 4 · Node ID: SN-2026-04
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className={`px-3.5 py-1.5 rounded-lg border text-xs font-mono font-bold flex items-center gap-2 ${current.statusColor}`}>
                <span className={`w-2 h-2 rounded-full ${current.badgeColor}`} />
                <span>{current.statusLabel}</span>
              </div>

              <div className="text-xs font-mono text-emerald-300 bg-[#122A19] px-3 py-1.5 rounded-lg border border-[#20452A]">
                Controller: CONNECTED
              </div>
            </div>
          </div>

          {/* Dynamic Notification Banner */}
          {current.notification && (
            <div className="mb-6 bg-rose-950/70 border border-rose-500/60 rounded-2xl p-4 flex items-start gap-3 animate-in fade-in duration-300">
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider block">
                  SYSTEM ACTION REQUIRED
                </span>
                <p className="text-sm text-rose-100 font-medium">
                  {current.notification}
                </p>
              </div>
              <span className="text-xs font-mono text-rose-300 bg-rose-900/60 px-2 py-1 rounded">
                SIMULATION ALERT
              </span>
            </div>
          )}

          {/* 6 Metric Readout Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            <div className="bg-[#122818] rounded-xl p-4 border border-[#20452A]">
              <span className="text-[11px] text-emerald-200/70 font-mono block mb-1">
                {t.metrics.status}
              </span>
              <div className="text-lg font-bold text-white tracking-tight">
                {current.statusLabel}
              </div>
              <span className="text-[10px] text-emerald-400 font-mono mt-1 block">
                Chamber nominal
              </span>
            </div>

            <div className="bg-[#122818] rounded-xl p-4 border border-[#20452A]">
              <div className="flex items-center justify-between text-[11px] text-emerald-200/70 font-mono mb-1">
                <span>{t.metrics.temp}</span>
                <Thermometer className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white tracking-tight tabular-nums">
                {current.temp}
              </div>
              <span className="text-[10px] text-emerald-400 font-mono mt-1 block">
                Target: 12.0°C ± 1.0
              </span>
            </div>

            <div className="bg-[#122818] rounded-xl p-4 border border-[#20452A]">
              <div className="flex items-center justify-between text-[11px] text-emerald-200/70 font-mono mb-1">
                <span>{t.metrics.rh}</span>
                <Droplets className="w-3.5 h-3.5 text-sky-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white tracking-tight tabular-nums">
                {current.rh}
              </div>
              <span className="text-[10px] text-sky-300 font-mono mt-1 block">
                Target: 85–90% RH
              </span>
            </div>

            <div className="bg-[#122818] rounded-xl p-4 border border-[#20452A]">
              <div className="flex items-center justify-between text-[11px] text-emerald-200/70 font-mono mb-1">
                <span>{t.metrics.ethylene}</span>
                <Activity className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-amber-300 tracking-tight tabular-nums">
                {current.ethylene}
              </div>
              <span className="text-[10px] text-amber-400/80 font-mono mt-1 block">
                Adsorption active
              </span>
            </div>

            <div className="bg-[#122818] rounded-xl p-4 border border-[#20452A]">
              <div className="flex items-center justify-between text-[11px] text-emerald-200/70 font-mono mb-1">
                <span>{t.metrics.airflow}</span>
                <Wind className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white tracking-tight tabular-nums">
                {current.airflow}
              </div>
              <span className="text-[10px] text-emerald-400 font-mono mt-1 block">
                Controlled loop
              </span>
            </div>

            <div className="bg-[#122818] rounded-xl p-4 border border-[#20452A]">
              <span className="text-[11px] text-emerald-200/70 font-mono block mb-1">
                {t.metrics.cartridge}
              </span>
              <div className="text-xs font-bold text-emerald-300 tracking-tight leading-snug line-clamp-1">
                {current.cartridgeStatus}
              </div>
              <div className="w-full bg-[#08150C] h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    systemState === 'REPLACEMENT'
                      ? 'bg-rose-500 w-[12%]'
                      : systemState === 'WARNING'
                      ? 'bg-amber-400 w-[42%]'
                      : 'bg-emerald-400 w-[82%]'
                  }`}
                />
              </div>
              <span className="text-[10px] text-emerald-200/70 font-mono mt-1 block">
                {current.cartridgePercent} bed life
              </span>
            </div>
          </div>

          {/* DYNAMIC ETHYLENE TREND GRAPH WITH TIMEFRAME SELECTOR */}
          <div className="bg-[#0E2013] rounded-2xl p-5 border border-[#1A3A23]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider block">
                  Ethylene Trend Telemetry Curve
                </span>
                <span className="text-[11px] text-emerald-200/60 font-mono">
                  Sample interval: 10 mins · Simulation baseline ppm vs time
                </span>
              </div>

              {/* Timeframe Buttons: 6 Hours, 12 Hours, 24 Hours */}
              <div className="flex items-center gap-1.5 bg-[#07130A] p-1 rounded-lg border border-[#15311D]">
                <button
                  onClick={() => setTimeframe('6h')}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-colors cursor-pointer ${
                    timeframe === '6h' ? 'bg-emerald-500 text-[#09150C]' : 'text-emerald-300/80 hover:text-white'
                  }`}
                >
                  {t.timeframes[0]}
                </button>
                <button
                  onClick={() => setTimeframe('12h')}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-colors cursor-pointer ${
                    timeframe === '12h' ? 'bg-emerald-500 text-[#09150C]' : 'text-emerald-300/80 hover:text-white'
                  }`}
                >
                  {t.timeframes[1]}
                </button>
                <button
                  onClick={() => setTimeframe('24h')}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-colors cursor-pointer ${
                    timeframe === '24h' ? 'bg-emerald-500 text-[#09150C]' : 'text-emerald-300/80 hover:text-white'
                  }`}
                >
                  {t.timeframes[2]}
                </button>
              </div>
            </div>

            {/* Render dynamic SVG Line Chart */}
            <div className="relative w-full h-44 flex items-end">
              <svg className="w-full h-full" viewBox="0 0 600 120" preserveAspectRatio="none">
                <line x1="0" y1="20" x2="600" y2="20" stroke="#163620" strokeDasharray="3 3" />
                <line x1="0" y1="60" x2="600" y2="60" stroke="#163620" strokeDasharray="3 3" />
                <line x1="0" y1="100" x2="600" y2="100" stroke="#163620" strokeDasharray="3 3" />

                {/* Threshold line at 2.0 ppm */}
                <line x1="0" y1="40" x2="600" y2="40" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
                <text x="590" y="36" textAnchor="end" fill="#F87171" fontSize="9" fontFamily="monospace">
                  Threshold Action (2.0 ppm)
                </text>

                {(() => {
                  const points = activeTrend.map((val, idx) => {
                    const x = (idx / (activeTrend.length - 1)) * 600;
                    const y = 110 - (val / 3.0) * 95;
                    return `${x},${y}`;
                  });
                  const pathStr = `M 0,110 L ${points.join(' L ')} L 600,110 Z`;
                  const lineStr = `M ${points.join(' L ')}`;
                  const strokeColor = systemState === 'REPLACEMENT' ? '#F43F5E' : systemState === 'WARNING' ? '#F59E0B' : '#10B981';
                  const fillColor = systemState === 'REPLACEMENT' ? 'rgba(244, 63, 94, 0.2)' : systemState === 'WARNING' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)';

                  return (
                    <>
                      <path d={pathStr} fill={fillColor} />
                      <path d={lineStr} fill="none" stroke={strokeColor} strokeWidth="3" />
                    </>
                  );
                })()}
              </svg>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-emerald-200/60 pt-2 border-t border-[#183620]">
              <span>T - {timeframe}</span>
              <span>Midpoint</span>
              <span>Live Present (T-0)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
