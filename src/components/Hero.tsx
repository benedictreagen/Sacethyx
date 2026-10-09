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
  Eye,
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

  const [heroView, setHeroView] = useState<'banner' | 'physics'>('banner');
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
  const [isFullscreenBanner, setIsFullscreenBanner] = useState<boolean>(false);

  // Live telemetry fluctuation for display badge
  const [telemetryValues, setTelemetryValues] = useState({
    c2h4: 0.20,
    o2: 2.1,
    co2: 1.5,
    temp: 12.5,
    rh: 92,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryValues({
        c2h4: +(0.20 + (Math.random() * 0.04 - 0.02)).toFixed(2),
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

    const getPoreSites = (): PoreSite[] => {
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

    const particles: Particle[] = [];
    const particleCount = 48;
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

      // Storage Bay
      const roomX = 14;
      const roomY = 16;
      const roomH = height - 32;

      ctx.fillStyle = '#10281A';
      ctx.beginPath();
      ctx.roundRect(roomX + 4, roomY + 4, bayW, roomH, 16);
      ctx.fill();

      const roomGrad = ctx.createLinearGradient(roomX, roomY, roomX + bayW, roomY + roomH);
      roomGrad.addColorStop(0, '#132F20');
      roomGrad.addColorStop(1, '#0C2015');
      ctx.fillStyle = roomGrad;
      ctx.strokeStyle = '#275238';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.roundRect(roomX, roomY, bayW, roomH, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 12px "Space Grotesk", sans-serif';
      ctx.fillText(t.diagram.fruitBay, roomX + 16, roomY + 28);

      ctx.fillStyle = '#183D29';
      ctx.beginPath();
      ctx.roundRect(roomX + bayW - 88, roomY + 16, 74, 18, 9);
      ctx.fill();
      ctx.fillStyle = '#A3E635';
      ctx.font = 'bold 9px monospace';
      ctx.fillText('TEMP: 3.2°C', roomX + bayW - 80, roomY + 28);

      ctx.fillStyle = '#8CB397';
      ctx.font = '10px "Inter", sans-serif';
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

          ctx.fillStyle = '#173624';
          ctx.strokeStyle = '#2D6142';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.roundRect(cx, cy, crateW, crateH, 8);
          ctx.fill();
          ctx.stroke();

          const fruitHue = (c + r) % 2 === 0 ? '#F59E0B' : '#A3E635';
          ctx.fillStyle = fruitHue;
          ctx.beginPath();
          ctx.arc(cx + 14, cy + 22, 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#A7CFB4';
          ctx.font = 'bold 8.5px monospace';
          ctx.fillText('C₂H₄', cx + 24, cy + 25);
        }
      }

      // Ducts
      const intakeY = 110;
      const ductX1 = roomX + bayW - 6;
      const ductX2 = cartridgeX + 10;

      ctx.fillStyle = 'rgba(21, 51, 34, 0.7)';
      ctx.strokeStyle = '#2D6A4F';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.roundRect(ductX1, intakeY - 14, ductX2 - ductX1, 28, 8);
      ctx.fill();
      ctx.stroke();

      const returnY = height - 85;
      ctx.fillStyle = 'rgba(16, 46, 29, 0.65)';
      ctx.strokeStyle = '#327354';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.roundRect(ductX1, returnY - 14, ductX2 - ductX1, 28, 8);
      ctx.fill();
      ctx.stroke();

      // Cartridge Unit
      const cartY = 32;
      const cartH = height - 64;

      const shellGrad = ctx.createLinearGradient(cartridgeX, cartY, cartridgeX + cartridgeW, cartY + cartH);
      shellGrad.addColorStop(0, '#0D2417');
      shellGrad.addColorStop(0.5, '#133522');
      shellGrad.addColorStop(1, '#091A10');
      ctx.fillStyle = shellGrad;
      ctx.strokeStyle = '#84CC16';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.roundRect(cartridgeX, cartY, cartridgeW, cartH, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 11px "Space Grotesk", sans-serif';
      ctx.fillText(t.diagram.cartridgeUnit, cartridgeX + 20, cartY + 30);

      ctx.fillStyle = '#A3E635';
      ctx.font = '10px "Inter", sans-serif';
      ctx.fillText(t.diagram.cartridgeSubtitle, cartridgeX + 20, cartY + 46);

      // Bed
      ctx.fillStyle = '#05120A';
      ctx.strokeStyle = '#1F4D32';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(bedX, bedY, bedW, bedH, 12);
      ctx.fill();
      ctx.stroke();

      poreSites.forEach((pore) => {
        ctx.fillStyle = pore.glow > 0.1 ? `rgba(245, 158, 11, ${0.3 + pore.glow * 0.7})` : '#0B2416';
        ctx.strokeStyle = pore.glow > 0.1 ? `rgba(251, 191, 36, ${0.5 + pore.glow * 0.5})` : '#1B472C';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(pore.x, pore.y, pore.baseRadius + pore.glow * 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = pore.glow > 0.1 ? '#FDE68A' : '#84CC16';
        ctx.beginPath();
        ctx.arc(pore.x, pore.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

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
          ctx.fillStyle = p.type === 'ethylene' ? '#F59E0B' : '#A3E635';
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
            ctx.fillStyle = '#84CC16';
            ctx.beginPath();
            ctx.arc(px, py, p.radius, 0, Math.PI * 2);
            ctx.fill();
            return;
          }
        }

        const subT = (p.progress - 0.65) / 0.35;
        const px = ductX2 - subT * (ductX2 - (roomX + 30));
        const py = returnY + p.offsetY * 0.45;
        ctx.fillStyle = '#A3E635';
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
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#08170E] text-white overflow-hidden border-b border-white/10">
      {/* Restrained radial lighting and soft subtle green gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#18462B]/35 via-[#0F301D]/20 to-transparent rounded-full blur-3xl opacity-80" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[450px] bg-radial from-[#84CC16]/10 via-transparent to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 -left-20 w-[500px] h-[350px] bg-radial from-[#1E4D2B]/20 via-transparent to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Focal Header: Large Space Grotesk Headline + 1 Concise Pitch + Main CTA */}
        <div className="max-w-4xl mb-10 lg:mb-14">
          {/* Subtle unboxed kicker text */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A3E635] mb-4">
            <span>B2B Post-Harvest Agritech</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Cold Storage & CAS Infrastructure</span>
          </div>

          {/* Expressive Hero Headline (Space Grotesk, 600-700 weight, tight line height) */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.05] mb-5 font-heading">
            {t.headline1}{' '}
            <span className="text-[#A3E635] block sm:inline">{t.headline2}</span>
          </h1>

          {/* Exactly ONE concise supporting sentence */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mb-8 font-normal font-sans">
            {t.supporting}
          </p>

          {/* Primary CTA + Quiet Secondary Link + Unboxed Trust Markers */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-1">
            <button
              onClick={() => onRequestDemo('hero_primary')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-[#08170E] bg-[#84CC16] hover:bg-[#A3E635] shadow-lg shadow-[#84CC16]/20 transition-all active:scale-[0.99] cursor-pointer"
            >
              <span>{t.demoCta}</span>
              <ArrowRight className="w-4 h-4 text-[#08170E]" />
            </button>

            <button
              onClick={onExploreTech}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer py-2 self-start sm:self-auto group"
            >
              <span>{t.exploreCta}</span>
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </button>

            {/* Quiet Unboxed Trust Markers */}
            <div className="hidden xl:flex items-center gap-3 text-xs text-white/55 font-medium ml-auto">
              <span>{t.trust.cas}</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>{t.trust.modular}</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>{t.trust.monitoring}</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN PRODUCT BANNER CENTERPIECE */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl bg-[#0B1E13] border border-white/15 shadow-2xl overflow-hidden">
          {/* Top Control Bar: Mode Toggle and Status Indicator */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-black/40 border-b border-white/10 gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
              <span className="text-xs font-bold text-white tracking-wide font-heading uppercase">
                {heroView === 'banner' ? b.subBadge : t.diagram.title}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#A3E635] bg-[#84CC16]/10 px-2 py-0.5 rounded border border-[#84CC16]/20">
                {heroView === 'banner' ? 'COMMERCIAL CAS BANANA ROOM' : 'PHYSICS ENGINE'}
              </span>
            </div>

            {/* Clean Segmented Controls */}
            <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setHeroView('banner')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  heroView === 'banner'
                    ? 'bg-[#84CC16] text-[#08170E] shadow-sm font-bold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{b.tabBanner}</span>
              </button>
              <button
                onClick={() => setHeroView('physics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  heroView === 'physics'
                    ? 'bg-[#84CC16] text-[#08170E] shadow-sm font-bold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{b.tabPhysics}</span>
              </button>

              {heroView === 'banner' && (
                <button
                  onClick={() => setIsFullscreenBanner(true)}
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ml-1"
                  title="Expand Fullscreen View"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* VIEW 1: MAIN BANNER (High-Res CAS Room Hardware Installation) */}
          {heroView === 'banner' && (
            <div className="relative">
              <div className="relative aspect-[16/9] w-full bg-[#051009] overflow-hidden select-none">
                <img
                  src={IMAGES.heroCasMainBanner}
                  alt="SACETHYX Smart Ethylene Management in CAS Banana Cold Storage"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Measured Scrim for Maximum Contrast & Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35 pointer-events-none" />

                {/* Top-Left Banner Identification Card */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-xs sm:max-w-md bg-black/80 backdrop-blur-md rounded-2xl p-3.5 sm:p-4.5 border border-white/15 text-white shadow-2xl pointer-events-auto">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#A3E635] font-semibold mb-1">
                    {lang === 'id' ? 'FASILITAS KOMERSIAL PASCAPANEN' : 'COMMERCIAL POST-HARVEST FACILITY'}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading leading-snug">
                    {b.badge}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/70 mt-1 hidden sm:block font-sans">
                    {lang === 'id'
                      ? 'Unit dinding SACETHYX terhubung ke cartridge adsorben karbon aktif ampas tebu dan sensor terintegrasi.'
                      : 'Wall-mounted SACETHYX hub connected with sugarcane bagasse carbon adsorbent cartridge and live multi-gas sensor suite.'}
                  </p>
                </div>

                {/* Top-Right Floating Live Telemetry HUD Widget */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/85 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20 text-white shadow-2xl max-w-[200px] sm:max-w-[260px] pointer-events-auto">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] sm:text-xs font-mono text-[#A3E635]">
                    <div className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      <span className="font-semibold">{b.telemetryTitle}</span>
                    </div>
                    <span className="text-white/50 tabular-nums">10:24</span>
                  </div>

                  {/* 3 Gas Metrics Grid with Tabular Numerals */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-2.5">
                    {/* C2H4 */}
                    <div className="bg-white/10 rounded-lg p-1.5 sm:p-2 text-center border border-white/10">
                      <div className="text-[9px] sm:text-[10px] text-white/60 font-mono">C₂H₄</div>
                      <div className="text-xs sm:text-sm font-bold text-amber-300 font-mono tabular-nums">
                        {telemetryValues.c2h4.toFixed(2)} <span className="text-[8px] font-normal">ppm</span>
                      </div>
                      <div className="text-[8px] text-[#A3E635] font-mono">{b.statusLow}</div>
                    </div>
                    {/* O2 */}
                    <div className="bg-white/10 rounded-lg p-1.5 sm:p-2 text-center border border-white/10">
                      <div className="text-[9px] sm:text-[10px] text-white/60 font-mono">O₂</div>
                      <div className="text-xs sm:text-sm font-bold text-cyan-300 font-mono tabular-nums">
                        {telemetryValues.o2}%
                      </div>
                      <div className="text-[8px] text-[#A3E635] font-mono">{b.statusStable}</div>
                    </div>
                    {/* CO2 */}
                    <div className="bg-white/10 rounded-lg p-1.5 sm:p-2 text-center border border-white/10">
                      <div className="text-[9px] sm:text-[10px] text-white/60 font-mono">CO₂</div>
                      <div className="text-xs sm:text-sm font-bold text-indigo-300 font-mono tabular-nums">
                        {telemetryValues.co2}%
                      </div>
                      <div className="text-[8px] text-[#A3E635] font-mono">{b.statusStable}</div>
                    </div>
                  </div>

                  {/* Temp & Humidity row */}
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-white/80 mb-2.5 bg-black/40 px-2 py-1.5 rounded-lg border border-white/10 font-mono tabular-nums">
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
                  <div className="flex items-center gap-1.5 bg-[#84CC16]/20 text-[#A3E635] px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold border border-[#84CC16]/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A3E635] shrink-0" />
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
                      <button
                        onClick={() => setSelectedHotspot(isSelected ? null : spot.id)}
                        className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-all cursor-pointer border-2 ${
                          isSelected
                            ? 'bg-[#A3E635] text-[#08170E] border-white scale-110 ring-4 ring-[#84CC16]/40'
                            : 'bg-[#08170E] text-white border-[#84CC16] hover:bg-[#84CC16] hover:text-[#08170E] hover:scale-105'
                        }`}
                        title={title}
                      >
                        <Info className="w-3.5 h-3.5" />
                      </button>

                      {/* Tooltip Card */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 mt-2 w-64 sm:w-72 bg-[#091D11]/95 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-2xl border border-white/20 transition-all z-30 pointer-events-auto ${
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
                          <span className="text-[10px] font-mono uppercase text-[#A3E635] font-bold tracking-wider">
                            {spot.tag}
                          </span>
                          <span className="text-[10px] text-white/50 font-mono">SACETHYX Hardware</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white font-heading mb-1">
                          {title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-white/75 leading-relaxed font-sans">
                          {desc}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Bottom Left Quick-Tip Overlay */}
                <div className="absolute bottom-4 left-4 hidden md:flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 text-white/80 text-[11px] font-sans">
                  <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
                  <span>
                    {lang === 'id'
                      ? 'Klik titik info interaktif untuk memeriksa spesifikasi modul hardware.'
                      : 'Click the info pins to inspect specific hardware modules.'}
                  </span>
                </div>
              </div>

              {/* 4 Core Pillars Strip (Space Grotesk headings, Inter body) */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#06140B] border-t border-white/10">
                {b.features.map((feature, idx) => (
                  <div key={idx} className="p-4 sm:p-5 flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
                      <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-white/65 leading-relaxed font-sans">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 2: PHYSICS ADSORPTION SIMULATION (Canvas Engine) */}
          {heroView === 'physics' && (
            <div className="p-4 sm:p-6 bg-[#07170F]">
              <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-white/10 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
                  <div>
                    <span className="text-xs font-semibold text-white uppercase tracking-wider font-heading block">
                      {t.diagram.title}
                    </span>
                    <span className="text-[10px] text-[#A3E635] font-mono block">
                      {t.diagram.collisionTag || 'PARTICLE COLLISION & ADSORPTION EFFECT'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSlowMo(!isSlowMo)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                      isSlowMo
                        ? 'bg-amber-400 text-[#08170E] font-bold'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    <span className="text-[11px] font-mono">{isSlowMo ? (t.diagram.speedSlow || '0.4x Slow') : (t.diagram.speedNormal || '1.0x Normal')}</span>
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs flex items-center gap-1 font-medium font-mono"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>
                </div>
              </div>

              {/* Simulation Canvas */}
              <div
                ref={containerRef}
                className="relative w-full rounded-2xl overflow-hidden bg-[#040C07] border border-white/10 cursor-crosshair"
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

                <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-md text-white px-2.5 py-1.5 rounded-lg border border-white/15 text-[10px] font-mono flex items-center gap-2 shadow-sm pointer-events-none tabular-nums">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    {t.diagram.moleculesCaptured || 'C₂H₄ Trapped'}:{' '}
                    <strong className="text-amber-300">{adsorbedCount.toLocaleString()}</strong>
                  </span>
                </div>
              </div>

              {/* Explanatory footer */}
              <div className="mt-3.5 p-3.5 bg-white/5 rounded-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/70">
                <p className="leading-relaxed font-sans">
                  <strong className="text-white font-heading">{t.diagram.collisionTag || 'Particle Collision & Adsorption'}:</strong>{' '}
                  {t.diagram.particleCaption}
                </p>

                <div className="shrink-0 flex items-center gap-3 text-[11px] bg-black/40 px-2.5 py-1.5 rounded-lg border border-white/10 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <span>C₂H₄</span>
                  </div>
                  <span className="text-white/20">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
                    <span>{lang === 'id' ? 'Pori Karbon' : 'Pore Site'}</span>
                  </div>
                  <span className="text-white/20">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#A3E635]" />
                    <span>{lang === 'id' ? 'Udara Bersih' : 'Clean Air'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FULLSCREEN BANNER INSPECTION MODAL */}
      {isFullscreenBanner && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col p-4 sm:p-8 animate-fadeIn">
          <div className="flex items-center justify-between text-white pb-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16]" />
              <div>
                <h3 className="text-base sm:text-lg font-bold font-heading">{b.badge}</h3>
                <p className="text-xs text-white/60 font-mono">{b.subBadge}</p>
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
