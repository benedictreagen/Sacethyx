import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Activity,
  Play,
  Pause,
  Zap,
  Sparkles,
  Maximize2,
  X,
  CheckCircle2,
  Cpu,
  Wind,
  Droplets,
  Thermometer,
  RotateCcw,
  Sliders,
  Eye,
  ChevronRight,
  Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { IMAGES } from '../data/assets';

interface HeroProps {
  onRequestDemo: (intent?: string) => void;
  onExploreTech: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  progress: number;
  speed: number;
  type: 'ethylene' | 'cleanAir';
  offsetY: number;
  radius: number;
  initialRadius: number;
  colliding: boolean;
  collisionProgress: number;
  targetPoreIndex: number;
  burstAlpha: number;
  burstRadius: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

interface PoreSite {
  x: number;
  y: number;
  baseRadius: number;
  glow: number;
}

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  titleKey: 'caseTitle' | 'cartridgeTitle' | 'displayTitle' | 'ledTitle' | 'hoseTitle' | 'accessTitle';
  descKey: 'caseDesc' | 'cartridgeDesc' | 'displayDesc' | 'ledDesc' | 'hoseDesc' | 'accessDesc';
  tag: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'housing',
    x: 55,
    y: 36,
    titleKey: 'caseTitle',
    descKey: 'caseDesc',
    tag: 'Control & MCU Unit',
  },
  {
    id: 'display',
    x: 59,
    y: 28,
    titleKey: 'displayTitle',
    descKey: 'displayDesc',
    tag: 'Telemetry GUI',
  },
  {
    id: 'led',
    x: 59,
    y: 46,
    titleKey: 'ledTitle',
    descKey: 'ledDesc',
    tag: 'Optic LED Status',
  },
  {
    id: 'cartridge',
    x: 84,
    y: 52,
    titleKey: 'cartridgeTitle',
    descKey: 'cartridgeDesc',
    tag: 'Adsorbent Core',
  },
  {
    id: 'hose',
    x: 74,
    y: 84,
    titleKey: 'hoseTitle',
    descKey: 'hoseDesc',
    tag: 'Pneumatic Flow',
  },
  {
    id: 'access',
    x: 84,
    y: 33,
    titleKey: 'accessTitle',
    descKey: 'accessDesc',
    tag: 'Quick-Service Latch',
  },
];

export const Hero: React.FC<HeroProps> = ({ onRequestDemo, onExploreTech }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].hero;
  const b = t.banner;

  // View state: Main Banner (default) vs Physics Simulation
  const [heroView, setHeroView] = useState<'banner' | 'physics'>('banner');
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
  const [isFullscreenBanner, setIsFullscreenBanner] = useState<boolean>(false);

  // Live telemetry fluctuation for display badge
  const [telemetryValues, setTelemetryValues] = useState({
    c2h4: 0.2,
    o2: 2.1,
    co2: 1.5,
    temp: 12.5,
    rh: 92,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryValues({
        c2h4: +(0.2 + (Math.random() * 0.04 - 0.02)).toFixed(2),
        o2: +(2.1 + (Math.random() * 0.1 - 0.05)).toFixed(1),
        co2: +(1.5 + (Math.random() * 0.1 - 0.05)).toFixed(1),
        temp: +(12.5 + (Math.random() * 0.2 - 0.1)).toFixed(1),
        rh: Math.round(92 + (Math.random() * 1 - 0.5)),
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Canvas particle simulation state
  const [isPlaying, setIsPlaying] = useState(true);
  const [isSlowMo, setIsSlowMo] = useState(false);
  const [adsorbedCount, setAdsorbedCount] = useState<number>(1420);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);

  // Simulation loop with particle collision & shrinking effect
  useEffect(() => {
    if (heroView !== 'physics') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = 580;
    let height = 380;

    const setupDimensions = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const displayWidth = parent.clientWidth || 540;
      const displayHeight = Math.min(420, Math.max(340, Math.round(displayWidth * 0.62)));

      const dpr = window.devicePixelRatio || 1;
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
      width = displayWidth;
      height = displayHeight;
    };

    setupDimensions();
    window.addEventListener('resize', setupDimensions);

    // Initialize Pore Sites (Microporous receptor matrix inside cartridge)
    const getPoreSites = (): PoreSite[] => {
      const bayW = width * 0.35;
      const cartridgeX = width * 0.54;
      const cartridgeW = width * 0.38;
      const bedX = cartridgeX + 22;
      const bedY = 96;
      const bedW = cartridgeW - 44;
      const bedH = height - 160;

      const pores: PoreSite[] = [];
      const cols = 5;
      const rows = 6;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const jitterX = ((c * 17 + r * 13) % 7) - 3;
          const jitterY = ((r * 19 + c * 11) % 7) - 3;
          pores.push({
            x: bedX + 16 + (c * (bedW - 32)) / (cols - 1) + jitterX,
            y: bedY + 20 + (r * (bedH - 40)) / (rows - 1) + jitterY,
            baseRadius: 3.5,
            glow: 0,
          });
        }
      }
      return pores;
    };

    let poreSites = getPoreSites();

    // Particle pool
    const particles: Particle[] = [];
    const particleCount = 52;
    for (let i = 0; i < particleCount; i++) {
      const isEthylene = Math.random() > 0.38;
      particles.push({
        id: i,
        x: 0,
        y: 0,
        progress: Math.random(),
        speed: 0.0032 + Math.random() * 0.0035,
        type: isEthylene ? 'ethylene' : 'cleanAir',
        offsetY: (Math.random() - 0.5) * 32,
        radius: isEthylene ? 4.5 : 3.2,
        initialRadius: isEthylene ? 4.5 : 3.2,
        colliding: false,
        collisionProgress: 0,
        targetPoreIndex: Math.floor(Math.random() * poreSites.length),
        burstAlpha: 0,
        burstRadius: 0,
      });
    }

    const resetParticle = (p: Particle) => {
      p.progress = 0;
      p.type = Math.random() > 0.38 ? 'ethylene' : 'cleanAir';
      p.speed = 0.0032 + Math.random() * 0.0035;
      p.offsetY = (Math.random() - 0.5) * 32;
      p.initialRadius = p.type === 'ethylene' ? 4.5 : 3.2;
      p.radius = p.initialRadius;
      p.colliding = false;
      p.collisionProgress = 0;
      p.burstAlpha = 0;
      p.burstRadius = 0;
      p.targetPoreIndex = Math.floor(Math.random() * poreSites.length);
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const bayW = width * 0.35;
      const cartridgeX = width * 0.54;
      const cartridgeW = width * 0.38;
      const bedX = cartridgeX + 22;
      const bedY = 96;
      const bedW = cartridgeW - 44;
      const bedH = height - 160;

      if (poreSites.length === 0 || Math.abs(poreSites[0].x - (bedX + 16)) > 5) {
        poreSites = getPoreSites();
      }

      poreSites.forEach((pore) => {
        if (pore.glow > 0.01) {
          pore.glow *= 0.94;
        } else {
          pore.glow = 0;
        }
      });

      // 1. Storage Bay
      const roomX = 14;
      const roomY = 16;
      const roomH = height - 32;

      ctx.fillStyle = '#E9F1EA';
      ctx.beginPath();
      ctx.roundRect(roomX + 4, roomY + 4, bayW, roomH, 16);
      ctx.fill();

      const roomGrad = ctx.createLinearGradient(roomX, roomY, roomX + bayW, roomY + roomH);
      roomGrad.addColorStop(0, '#FFFFFF');
      roomGrad.addColorStop(1, '#F3F8F4');
      ctx.fillStyle = roomGrad;
      ctx.strokeStyle = '#D1E2D4';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.roundRect(roomX, roomY, bayW, roomH, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#132A1C';
      ctx.font = 'bold 12px "Cabinet Grotesk", sans-serif';
      ctx.fillText(t.diagram.fruitBay, roomX + 16, roomY + 28);

      ctx.fillStyle = '#E3F2E6';
      ctx.beginPath();
      ctx.roundRect(roomX + bayW - 88, roomY + 16, 74, 18, 9);
      ctx.fill();
      ctx.fillStyle = '#2D6A4F';
      ctx.font = 'bold 9px monospace';
      ctx.fillText('TEMP: 3.2°C', roomX + bayW - 80, roomY + 28);

      ctx.fillStyle = '#5A7B64';
      ctx.font = '10px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(t.diagram.emission, roomX + 16, roomY + 44);

      // Crates
      const crateCols = 3;
      const crateRows = 3;
      const crateW = (bayW - 44) / crateCols;
      const crateH = 46;

      for (let r = 0; r < crateRows; r++) {
        for (let c = 0; c < crateCols; c++) {
          const cx = roomX + 16 + c * (crateW + 6);
          const cy = roomY + 68 + r * (crateH + 12);

          ctx.fillStyle = '#F4FAF5';
          ctx.strokeStyle = '#CFDFD2';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.roundRect(cx, cy, crateW, crateH, 8);
          ctx.fill();
          ctx.stroke();

          const fruitHue = (c + r) % 2 === 0 ? '#F59E0B' : '#10B981';
          ctx.fillStyle = fruitHue;
          ctx.beginPath();
          ctx.arc(cx + 14, cy + 22, 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#3E5C47';
          ctx.font = 'bold 8.5px monospace';
          ctx.fillText('C₂H₄', cx + 24, cy + 25);
        }
      }

      // Ducts
      const intakeY = 110;
      const ductX1 = roomX + bayW - 6;
      const ductX2 = cartridgeX + 10;

      ctx.fillStyle = 'rgba(230, 243, 233, 0.7)';
      ctx.strokeStyle = '#B8D8BF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(ductX1, intakeY - 14, ductX2 - ductX1, 28, 8);
      ctx.fill();
      ctx.stroke();

      const returnY = height - 85;
      ctx.fillStyle = 'rgba(215, 245, 226, 0.65)';
      ctx.strokeStyle = '#93D7AC';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(ductX1, returnY - 14, ductX2 - ductX1, 28, 8);
      ctx.fill();
      ctx.stroke();

      // Cartridge Unit
      const cartY = 32;
      const cartH = height - 64;

      const shellGrad = ctx.createLinearGradient(cartridgeX, cartY, cartridgeX + cartridgeW, cartY + cartH);
      shellGrad.addColorStop(0, '#10351C');
      shellGrad.addColorStop(0.5, '#154124');
      shellGrad.addColorStop(1, '#0C2615');
      ctx.fillStyle = shellGrad;
      ctx.strokeStyle = '#34D399';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cartridgeX, cartY, cartridgeW, cartH, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#A7F3D0';
      ctx.font = 'bold 11px "Cabinet Grotesk", sans-serif';
      ctx.fillText(t.diagram.cartridgeUnit, cartridgeX + 20, cartY + 30);

      ctx.fillStyle = '#6EE7B7';
      ctx.font = '10px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(t.diagram.cartridgeSubtitle, cartridgeX + 20, cartY + 46);

      // Bed
      ctx.fillStyle = '#071A0E';
      ctx.strokeStyle = '#225B36';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(bedX, bedY, bedW, bedH, 12);
      ctx.fill();
      ctx.stroke();

      poreSites.forEach((pore) => {
        ctx.fillStyle = pore.glow > 0.1 ? `rgba(245, 158, 11, ${0.3 + pore.glow * 0.7})` : '#0E311B';
        ctx.strokeStyle = pore.glow > 0.1 ? `rgba(251, 191, 36, ${0.5 + pore.glow * 0.5})` : '#1E5833';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(pore.x, pore.y, pore.baseRadius + pore.glow * 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = pore.glow > 0.1 ? '#FDE68A' : '#34D399';
        ctx.beginPath();
        ctx.arc(pore.x, pore.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Particle update
      const effectiveSpeedMultiplier = isSlowMo ? 0.38 : 1.0;

      if (isPlaying) {
        particles.forEach((p) => {
          p.progress += p.speed * effectiveSpeedMultiplier;
          if (p.progress >= 1) {
            resetParticle(p);
          }
        });
      }

      particles.forEach((p) => {
        if (p.progress < 0.32) {
          const subT = p.progress / 0.32;
          const px = roomX + 30 + subT * (ductX2 - (roomX + 30));
          const py = intakeY + p.offsetY * 0.45;
          ctx.fillStyle = p.type === 'ethylene' ? '#F59E0B' : '#6EE7B7';
          ctx.beginPath();
          ctx.arc(px, py, p.radius, 0, Math.PI * 2);
          ctx.fill();
          return;
        }

        if (p.progress < 0.65) {
          const subT = (p.progress - 0.32) / 0.33;
          if (p.type === 'ethylene') {
            const targetPore = poreSites[p.targetPoreIndex % poreSites.length];
            const startX = ductX2;
            const startY = intakeY + p.offsetY * 0.45;
            const px = startX + (targetPore.x - startX) * Math.min(1, subT * 1.6);
            const py = startY + (targetPore.y - startY) * Math.min(1, subT * 1.6);

            if (subT > 0.4) {
              if (!p.colliding) {
                p.colliding = true;
                targetPore.glow = 1.0;
                setAdsorbedCount((prev) => prev + 1);
              }
              const shrinkT = Math.min(1, (subT - 0.4) / 0.4);
              p.radius = p.initialRadius * Math.max(0, 1 - shrinkT * 1.1);
              const fadeAlpha = Math.max(0, 1 - shrinkT);
              ctx.fillStyle = `rgba(245, 158, 11, ${fadeAlpha})`;
              ctx.beginPath();
              ctx.arc(px, py, p.radius, 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.fillStyle = '#F59E0B';
              ctx.beginPath();
              ctx.arc(px, py, p.radius, 0, Math.PI * 2);
              ctx.fill();
            }
            return;
          } else {
            const startX = ductX2;
            const startY = intakeY + p.offsetY * 0.45;
            const endX = cartridgeX + 24;
            const endY = returnY;
            const px = startX + (endX - startX) * subT;
            const py = startY + (endY - startY) * subT;
            ctx.fillStyle = '#34D399';
            ctx.beginPath();
            ctx.arc(px, py, p.radius, 0, Math.PI * 2);
            ctx.fill();
            return;
          }
        }

        // Return
        const subT = (p.progress - 0.65) / 0.35;
        const px = ductX2 - subT * (ductX2 - (roomX + 30));
        const py = returnY + p.offsetY * 0.45;
        ctx.fillStyle = '#10B981';
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setupDimensions);
    };
  }, [isPlaying, isSlowMo, heroView, t]);

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-gradient-to-br from-[#E6F4EA] via-[#EBF5EE] to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-gradient-to-tr from-[#EDF5EE] via-[#F4F9F4] to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row: Headline, Value Proposition, Action Buttons */}
        <div className="max-w-4xl mb-8 lg:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2EC] border border-[#CFDFC0] text-xs font-semibold uppercase tracking-wider text-[#1E4D2B] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse" />
            <span>{t.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#132A1C] leading-[1.08] mb-4 font-display">
            {t.headline1}{' '}
            <span className="text-[#2D6A4F] block sm:inline">{t.headline2}</span>
          </h1>

          {/* Supporting Pitch */}
          <p className="text-lg sm:text-xl font-medium text-[#294B35] mb-3">
            {t.supporting}
          </p>

          <p className="text-base sm:text-[17px] text-[#465A4E] leading-relaxed mb-6 max-w-3xl">
            {t.body}
          </p>

          {/* CTAs and Trust Badges */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <button
              onClick={() => onRequestDemo('hero_primary')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#1E4D2B] hover:bg-[#15381F] shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
            >
              <span>{t.demoCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreTech}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[#1E4D2B] bg-[#EAF2EC] hover:bg-[#DDE9DF] transition-colors cursor-pointer border border-[#D5E5D8]"
            >
              <span>{t.exploreCta}</span>
            </button>

            {/* Quick Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#465A4E] sm:ml-4 py-1.5 px-3 bg-white/70 backdrop-blur-sm rounded-lg border border-[#E1EAE1]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
                <span>{t.trust.b2b}</span>
              </div>
              <span className="text-neutral-300">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>{t.trust.cas}</span>
              </div>
              <span className="text-neutral-300">·</span>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>{t.trust.modular}</span>
              </div>
              <span className="text-neutral-300">·</span>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>{t.trust.monitoring}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN BANNER CONTAINER (Hero Centerpiece) */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl bg-white border border-[#D5E2D5] shadow-lg overflow-hidden">
          {/* Top Control Bar: Mode Toggle and Status Indicator */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#FAFDF9] border-b border-[#E3EDE3] gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-[#132A1C] uppercase tracking-wider font-mono">
                {heroView === 'banner' ? b.subBadge : t.diagram.title}
              </span>
              <span className="hidden sm:inline-block text-[11px] text-[#2D6A4F] bg-[#E8F3EA] px-2 py-0.5 rounded font-mono font-medium">
                {heroView === 'banner' ? 'HARDWARE DEPLOYMENT' : 'PHYSICS ENGINE'}
              </span>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1.5 bg-[#EEF5EF] p-1 rounded-xl border border-[#DCE8DD]">
              <button
                onClick={() => setHeroView('banner')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  heroView === 'banner'
                    ? 'bg-white text-[#132A1C] shadow-sm'
                    : 'text-[#486350] hover:text-[#132A1C]'
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>{b.tabBanner}</span>
              </button>
              <button
                onClick={() => setHeroView('physics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  heroView === 'physics'
                    ? 'bg-white text-[#132A1C] shadow-sm'
                    : 'text-[#486350] hover:text-[#132A1C]'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                <span>{b.tabPhysics}</span>
              </button>

              {heroView === 'banner' && (
                <button
                  onClick={() => setIsFullscreenBanner(true)}
                  className="p-1.5 rounded-lg text-[#2D6A4F] hover:bg-white transition-colors cursor-pointer ml-1"
                  title="Expand / Fullscreen View"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* VIEW 1: MAIN BANNER (High-Res CAS Room Hardware Installation) */}
          {heroView === 'banner' && (
            <div className="relative">
              {/* The Main Banner Image Display */}
              <div className="relative aspect-[16/9] w-full bg-[#0E1A12] overflow-hidden select-none">
                <img
                  src={IMAGES.heroCasMainBanner}
                  alt="SACETHYX Smart Ethylene Management in CAS Banana Cold Storage"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay for optimal badge readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                {/* Top-Left Banner Identification Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-xs sm:max-w-md bg-black/75 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20 text-white shadow-xl pointer-events-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                      {lang === 'id' ? 'FASILITAS KOMERSIAL' : 'COMMERCIAL FACILITY'}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {b.badge}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-300 mt-1 hidden sm:block">
                    {lang === 'id'
                      ? 'Integrasi unit dinding SACETHYX terhubung dengan filter kartrid karbon aktif ampas tebu dan sensor terintegrasi.'
                      : 'Wall-mounted SACETHYX hub connected with sugarcane bagasse carbon adsorbent cartridge and live multi-gas sensor suite.'}
                  </p>
                </div>

                {/* Top-Right Floating Live Telemetry HUD Widget */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/85 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20 text-white shadow-2xl max-w-[200px] sm:max-w-[260px] pointer-events-auto">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] sm:text-xs font-mono text-emerald-400">
                    <div className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      <span className="font-semibold">{b.telemetryTitle}</span>
                    </div>
                    <span className="text-neutral-400">10:24</span>
                  </div>

                  {/* 3 Gas Metrics Grid */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-2.5">
                    {/* C2H4 */}
                    <div className="bg-white/10 rounded-lg p-1.5 sm:p-2 text-center border border-white/10">
                      <div className="text-[9px] sm:text-[10px] text-neutral-300 font-mono">C₂H₄</div>
                      <div className="text-xs sm:text-sm font-bold text-amber-300 font-mono">
                        {telemetryValues.c2h4} <span className="text-[8px] font-normal">ppm</span>
                      </div>
                      <div className="text-[8px] text-emerald-400 font-mono">{b.statusLow}</div>
                    </div>
                    {/* O2 */}
                    <div className="bg-white/10 rounded-lg p-1.5 sm:p-2 text-center border border-white/10">
                      <div className="text-[9px] sm:text-[10px] text-neutral-300 font-mono">O₂</div>
                      <div className="text-xs sm:text-sm font-bold text-cyan-300 font-mono">
                        {telemetryValues.o2}%
                      </div>
                      <div className="text-[8px] text-emerald-400 font-mono">{b.statusStable}</div>
                    </div>
                    {/* CO2 */}
                    <div className="bg-white/10 rounded-lg p-1.5 sm:p-2 text-center border border-white/10">
                      <div className="text-[9px] sm:text-[10px] text-neutral-300 font-mono">CO₂</div>
                      <div className="text-xs sm:text-sm font-bold text-indigo-300 font-mono">
                        {telemetryValues.co2}%
                      </div>
                      <div className="text-[8px] text-emerald-400 font-mono">{b.statusStable}</div>
                    </div>
                  </div>

                  {/* Temp & Humidity row */}
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-neutral-200 mb-2.5 bg-black/30 px-2 py-1.5 rounded-lg border border-white/5">
                    <div className="flex items-center gap-1">
                      <Thermometer className="w-3 h-3 text-cyan-400" />
                      <span>{b.tempLabel}: <strong>{telemetryValues.temp}°C</strong></span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Droplets className="w-3 h-3 text-blue-400" />
                      <span>{b.humidityLabel}: <strong>{telemetryValues.rh}%</strong></span>
                    </div>
                  </div>

                  {/* Status Banner */}
                  <div className="flex items-center gap-1.5 bg-emerald-950/80 text-emerald-300 px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{b.roomStatus}</span>
                  </div>
                </div>

                {/* Interactive Hotspots Overlaid on Hardware Components */}
                {HOTSPOTS.map((spot) => {
                  const isSelected = selectedHotspot === spot.id;
                  const title = b[spot.titleKey];
                  const desc = b[spot.descKey];

                  return (
                    <div
                      key={spot.id}
                      className="absolute group z-20"
                      style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                      {/* Pulse Ring */}
                      <span className="absolute -inset-2 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />

                      {/* Hotspot Button */}
                      <button
                        onClick={() => setSelectedHotspot(isSelected ? null : spot.id)}
                        className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-all cursor-pointer border-2 ${
                          isSelected
                            ? 'bg-amber-400 text-neutral-950 border-white scale-125 ring-4 ring-amber-400/50'
                            : 'bg-[#1E4D2B] text-white border-emerald-300 hover:bg-emerald-600 hover:scale-110'
                        }`}
                        title={title}
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      {/* Tooltip Card (Shown on hover or click) */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 mt-2 w-60 sm:w-72 bg-neutral-900/95 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-2xl border border-white/20 transition-all z-30 pointer-events-auto ${
                          isSelected
                            ? 'opacity-100 visible scale-100'
                            : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible scale-95 group-hover:scale-100'
                        }`}
                        style={{
                          top: spot.y > 60 ? 'auto' : '100%',
                          bottom: spot.y > 60 ? '100%' : 'auto',
                          marginBottom: spot.y > 60 ? '10px' : '0px',
                        }}
                      >
                        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10">
                          <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold tracking-wider">
                            {spot.tag}
                          </span>
                          <span className="text-[10px] text-neutral-400">SACETHYX Hardware</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                          {title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Bottom Left Quick-Tip Overlay */}
                <div className="absolute bottom-4 left-4 hidden md:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-white text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    {lang === 'id'
                      ? 'Klik titik interaktif hijau pada gambar untuk memeriksa detail komponen hardware.'
                      : 'Click the green interactive pins to inspect specific hardware modules.'}
                  </span>
                </div>
              </div>

              {/* 4 Core Pillars Strip (Matching the user banner's bottom feature pills) */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E2EDE2] bg-[#F7FAF7] border-t border-[#DDEADE]">
                {b.features.map((feature, idx) => (
                  <div key={idx} className="p-4 sm:p-5 flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-1.5">
                      {idx === 0 && <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />}
                      {idx === 1 && <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />}
                      {idx === 2 && <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                      {idx === 3 && <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />}
                      <h4 className="text-xs sm:text-sm font-bold text-[#132A1C]">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#4F6D58] leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 2: PHYSICS ADSORPTION SIMULATION (Canvas Engine) */}
          {heroView === 'physics' && (
            <div className="p-4 sm:p-6 bg-white">
              {/* Controls bar */}
              <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-[#EAF0EA] gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <span className="text-xs font-semibold text-[#132A1C] uppercase tracking-wider font-mono block">
                      {t.diagram.title}
                    </span>
                    <span className="text-[10px] text-[#5A7B64] font-medium block">
                      {t.diagram.collisionTag || 'PARTICLE COLLISION & ADSORPTION EFFECT'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSlowMo(!isSlowMo)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                      isSlowMo
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-[#F0F5F0] hover:bg-[#E2EDE2] text-[#294B35]'
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    <span className="text-[11px]">{isSlowMo ? (t.diagram.speedSlow || '0.4x Slow') : (t.diagram.speedNormal || '1.0x Normal')}</span>
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 px-2.5 rounded-lg bg-[#EAF2EA] hover:bg-[#DCEBDC] text-[#1E4D2B] transition-colors cursor-pointer text-xs flex items-center gap-1 font-medium"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>
                </div>
              </div>

              {/* Simulation Canvas */}
              <div
                ref={containerRef}
                className="relative w-full rounded-2xl overflow-hidden bg-[#F7FAF7] border border-[#DEEADE] cursor-crosshair"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoverPos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                onMouseLeave={() => setHoverPos(null)}
              >
                <canvas ref={canvasRef} className="w-full block" />

                <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-md text-white px-2.5 py-1.5 rounded-lg border border-white/10 text-[10px] font-mono flex items-center gap-2 shadow-sm pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  <span>
                    {t.diagram.moleculesCaptured || 'C₂H₄ Trapped'}:{' '}
                    <strong className="text-amber-300">{adsorbedCount.toLocaleString()}</strong>
                  </span>
                </div>
              </div>

              {/* Explanatory legend */}
              <div className="mt-3.5 p-3.5 bg-[#F4F9F4] rounded-xl border border-[#DCE7DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#3E5C47]">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-[#132A1C]">{t.diagram.collisionTag || 'Particle Collision & Adsorption'}:</strong>{' '}
                    {t.diagram.particleCaption}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3 text-[11px] bg-white px-2.5 py-1.5 rounded-lg border border-[#E0EBE0]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] ring-2 ring-amber-200" />
                    <span className="text-[#132A1C] font-mono">C₂H₄</span>
                  </div>
                  <span className="text-neutral-300">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
                    <span className="text-[#2D6A4F] font-mono">{lang === 'id' ? 'Pori Karbon' : 'Pore Site'}</span>
                  </div>
                  <span className="text-neutral-300">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    <span className="text-[#132A1C] font-mono">{lang === 'id' ? 'Udara Bersih' : 'Clean Air'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FULLSCREEN BANNER INSPECTION MODAL */}
      {isFullscreenBanner && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex flex-col p-4 sm:p-8 animate-fadeIn">
          <div className="flex items-center justify-between text-white pb-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <h3 className="text-base sm:text-lg font-bold">{b.badge}</h3>
                <p className="text-xs text-neutral-400">{b.subBadge}</p>
              </div>
            </div>
            <button
              onClick={() => setIsFullscreenBanner(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 max-w-7xl mx-auto w-full relative rounded-2xl overflow-hidden border border-white/20 flex items-center justify-center bg-black">
            <img
              src={IMAGES.heroCasMainBanner}
              alt="SACETHYX Hardware Banner Fullscreen"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
