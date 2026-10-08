import React, { useState } from 'react';
import { Wind, Radio, Sliders, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'CAPTURE',
      tagline: 'Targeted Volatile Adsorption',
      icon: Wind,
      short: 'Storage air passes through the SACETHYX cartridge.',
      detail:
        'A dedicated recirculation fan guides air from the storage chamber into the SACETHYX cartridge. As the air passes through the internal porous activated carbon bed, volatile ethylene molecules are trapped on the high surface area of the bagasse-derived media.',
      metricNote: 'Physical adsorption with zero chemical exhaust into room air'
    },
    {
      num: '02',
      title: 'MONITOR',
      tagline: 'Multi-Parameter Telemetry',
      icon: Radio,
      short: 'Sensors monitor ethylene and relevant storage conditions.',
      detail:
        'SACETHYX SENSE probes continuously track ethylene trend variations, room temperature, and relative humidity inside the cold storage envelope, feeding microsecond readings to the local controller.',
      metricNote: 'Continuous environmental telemetry prevents silent quality drift'
    },
    {
      num: '03',
      title: 'MANAGE',
      tagline: 'Edge Logic & Operational Alerts',
      icon: Sliders,
      short: 'The controller and monitoring system provide operational information and alerts.',
      detail:
        'The controller algorithm monitors cumulative run hours, air volume treated, and sensor patterns. Operators can view status on an intuitive web dashboard and receive notifications when values approach action limits.',
      metricNote: 'Automated warnings prior to saturation breakthrough'
    },
    {
      num: '04',
      title: 'REPLACE',
      tagline: 'Zero-Downtime Cartridge Cycle',
      icon: RefreshCw,
      short: 'The cartridge can be replaced when adsorption approaches validated threshold.',
      detail:
        'When the cartridge reaches its validated operational threshold, facility technicians perform a simple tool-free slide swap. Depleted cartridges are collected via our take-back loop for regeneration or secondary recovery.',
      metricNote: '5-minute quick-swap restores 100% capacity'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAF7] border-b border-[#E3ECE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2D6A4F] mb-3">
            <span>Operational Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#132A1C] leading-tight font-display mb-4">
            Capture. Monitor. Manage. Replace.
          </h2>
          <p className="text-base sm:text-lg text-[#465A4E]">
            A seamless four-phase operational lifecycle designed for facility ease, continuous atmosphere protection, and predictable operational maintenance.
          </p>
        </div>

        {/* 4 Interactive Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1E4D2B] text-white border-[#1E4D2B] shadow-md transform -translate-y-1'
                    : 'bg-white text-[#132A1C] border-[#DCE5DC] hover:border-[#2D6A4F]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-sm font-mono font-bold px-2.5 py-0.5 rounded ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#EAF3EB] text-[#2D6A4F]'
                      }`}
                    >
                      {step.num}
                    </span>
                    <Icon
                      className={`w-5 h-5 ${
                        isSelected ? 'text-emerald-300' : 'text-[#2D6A4F]'
                      }`}
                    />
                  </div>

                  <h3 className="text-lg font-bold font-display mb-1">{step.title}</h3>
                  <div
                    className={`text-xs font-semibold mb-3 ${
                      isSelected ? 'text-emerald-200' : 'text-[#4A6B53]'
                    }`}
                  >
                    {step.tagline}
                  </div>

                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? 'text-emerald-50' : 'text-[#465A4E]'
                    }`}
                  >
                    {step.short}
                  </p>
                </div>

                <div
                  className={`mt-4 pt-3 border-t text-[11px] font-mono ${
                    isSelected ? 'border-emerald-700/60 text-emerald-200' : 'border-[#EEF4EE] text-[#5E7A68]'
                  }`}
                >
                  Click to inspect details →
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Inspection Showcase & Airflow Animation Diagram */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-[#DCE6DC] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Detail Copy */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2D6A4F] mb-2">
                <span>PHASE {steps[activeStep].num} INSPECTION</span>
                <span>·</span>
                <span className="uppercase">{steps[activeStep].title}</span>
              </div>
              <h4 className="text-2xl font-bold text-[#132A1C] font-display mb-3">
                {steps[activeStep].tagline}
              </h4>
              <p className="text-sm text-[#465A4E] leading-relaxed mb-6">
                {steps[activeStep].detail}
              </p>

              <div className="bg-[#F4F8F4] p-4 rounded-xl border border-[#DCE6DC] mb-4">
                <span className="text-xs font-semibold text-[#132A1C] block mb-1">
                  System Parameter Focus:
                </span>
                <span className="text-xs text-[#2D6A4F] font-mono">
                  {steps[activeStep].metricNote}
                </span>
              </div>
            </div>

            {/* Visual Animated Schematic Diagram */}
            <div className="lg:col-span-6 bg-[#F2F7F2] rounded-2xl p-6 border border-[#DCE5DC]">
              <div className="text-xs font-semibold text-[#132A1C] mb-3 flex items-center justify-between">
                <span>Continuous Airflow & Adsorption Loop</span>
                <span className="text-[11px] font-mono text-[#2D6A4F]">Active Animation</span>
              </div>

              {/* Schematic Airflow SVG with pulsing dash */}
              <div className="w-full bg-white rounded-xl p-4 border border-[#DAE5DA] relative">
                <svg viewBox="0 0 400 160" className="w-full h-auto" fill="none">
                  {/* Chamber Box */}
                  <rect x="20" y="20" width="130" height="120" rx="10" fill="#EAF3EB" stroke="#CDE1CF" strokeWidth="1.5" />
                  <text x="85" y="45" textAnchor="middle" fill="#132A1C" fontSize="11" fontWeight="bold">Cold Room / CAS</text>
                  <text x="85" y="65" textAnchor="middle" fill="#465A4E" fontSize="9">Stored Fruit (C₂H₄)</text>

                  {/* Fruit Icon Placeholder dots */}
                  <circle cx="55" cy="95" r="8" fill="#FBBF24" />
                  <circle cx="85" cy="95" r="8" fill="#FBBF24" />
                  <circle cx="115" cy="95" r="8" fill="#FBBF24" />

                  {/* Flow Out Path */}
                  <path
                    d="M 150 50 L 220 50"
                    stroke="#2D6A4F"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                    className="animate-flow-dash"
                  />
                  <polygon points="215,46 225,50 215,54" fill="#2D6A4F" />

                  {/* SACETHYX Cartridge Box */}
                  <rect x="230" y="20" width="150" height="120" rx="10" fill="#1E4D2B" stroke="#2D6A4F" strokeWidth="2" />
                  <text x="305" y="45" textAnchor="middle" fill="#A7F3D0" fontSize="11" fontWeight="bold">SACETHYX CARTRIDGE</text>
                  <text x="305" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="9">Bagasse Activated Carbon</text>
                  <rect x="250" y="80" width="110" height="24" rx="4" fill="#15381F" stroke="#2D6A4F" />
                  <text x="305" y="96" textAnchor="middle" fill="#34D399" fontSize="8" fontFamily="monospace">Adsorption Bed</text>

                  {/* Flow Return Path */}
                  <path
                    d="M 230 115 L 150 115"
                    stroke="#059669"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                    className="animate-flow-dash-reverse"
                  />
                  <polygon points="160,111 150,115 160,119" fill="#059669" />

                  <text x="190" y="40" textAnchor="middle" fill="#854D0E" fontSize="8" fontWeight="bold">Ethylene Air</text>
                  <text x="190" y="132" textAnchor="middle" fill="#065F46" fontSize="8" fontWeight="bold">Clean Return Air</text>
                </svg>

                <div className="mt-2 text-center text-[10px] text-[#5A7764]">
                  Closed-loop circulation prevents room pressure loss and retains cooling efficiency.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
