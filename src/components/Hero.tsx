import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Wind, Activity, Layers, ShieldCheck, Play, Pause, RefreshCw, Zap, Sparkles, Eye, Gauge } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

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

export const Hero: React.FC<HeroProps> = ({ onRequestDemo, onExploreTech }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].hero;
  const [isPlaying, setIsPlaying] = useState(true);
  const [isSlowMo, setIsSlowMo] = useState(false);
  const [activeTab, setActiveTab] = useState<'cartridge' | 'flow' | 'telemetry'>('cartridge');
  const [adsorbedCount, setAdsorbedCount] = useState<number>(1420);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);

  // Simulation loop with particle collision & shrinking effect
  useEffect(() => {
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
        speed: (0.0032 + Math.random() * 0.0035),
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
      p.speed = (0.0032 + Math.random() * 0.0035);
      p.offsetY = (Math.random() - 0.5) * 32;
      p.initialRadius = p.type === 'ethylene' ? 4.5 : 3.2;
      p.radius = p.initialRadius;
      p.colliding = false;
      p.collisionProgress = 0;
      p.burstAlpha = 0;
      p.burstRadius = 0;
      p.targetPoreIndex = Math.floor(Math.random() * poreSites.length);
    };

    // Render frame
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Re-sync pore sites coordinates on width change
      const bayW = width * 0.35;
      const cartridgeX = width * 0.54;
      const cartridgeW = width * 0.38;
      const bedX = cartridgeX + 22;
      const bedY = 96;
      const bedW = cartridgeW - 44;
      const bedH = height - 160;

      // Update pore sites geometry
      if (poreSites.length === 0 || Math.abs(poreSites[0].x - (bedX + 16)) > 5) {
        poreSites = getPoreSites();
      }

      // Decay pore excitation glows
      poreSites.forEach((pore) => {
        if (pore.glow > 0.01) {
          pore.glow *= 0.94;
        } else {
          pore.glow = 0;
        }
      });

      // -----------------------------------------------------------------
      // 1. DRAW 3D STORAGE CHAMBER (Left Side)
      // -----------------------------------------------------------------
      const roomX = 14;
      const roomY = 16;
      const roomH = height - 32;

      // 3D Isometric floor shadow
      ctx.fillStyle = '#E9F1EA';
      ctx.beginPath();
      ctx.roundRect(roomX + 4, roomY + 4, bayW, roomH, 16);
      ctx.fill();

      // Main chamber body
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

      // 3D isometric perspective grid lines on chamber floor
      ctx.strokeStyle = 'rgba(74, 107, 83, 0.12)';
      ctx.lineWidth = 1;
      for (let gy = roomY + roomH - 70; gy < roomY + roomH - 12; gy += 16) {
        ctx.beginPath();
        ctx.moveTo(roomX + 12, gy);
        ctx.lineTo(roomX + bayW - 12, gy + 8);
        ctx.stroke();
      }

      // Header label: Storage Bay
      ctx.fillStyle = '#132A1C';
      ctx.font = 'bold 12px "Cabinet Grotesk", sans-serif';
      ctx.fillText(t.diagram.fruitBay, roomX + 16, roomY + 28);

      // Status pill in chamber
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

      // 3D Fruit crate stacks with ethylene vapor aura
      const crateCols = 3;
      const crateRows = 3;
      const crateW = (bayW - 44) / crateCols;
      const crateH = 46;

      for (let r = 0; r < crateRows; r++) {
        for (let c = 0; c < crateCols; c++) {
          const cx = roomX + 16 + c * (crateW + 6);
          const cy = roomY + 68 + r * (crateH + 12);

          // Crate 3D drop shadow
          ctx.fillStyle = 'rgba(19, 42, 28, 0.04)';
          ctx.beginPath();
          ctx.roundRect(cx + 2, cy + 2, crateW, crateH, 8);
          ctx.fill();

          // Crate body
          ctx.fillStyle = '#F4FAF5';
          ctx.strokeStyle = '#CFDFD2';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.roundRect(cx, cy, crateW, crateH, 8);
          ctx.fill();
          ctx.stroke();

          // Wooden crate slats
          ctx.strokeStyle = '#D8E7DB';
          ctx.beginPath();
          ctx.moveTo(cx + 4, cy + crateH / 2);
          ctx.lineTo(cx + crateW - 4, cy + crateH / 2);
          ctx.stroke();

          // Fruit representation (Honey Mangoes / Avocados)
          const fruitHue = (c + r) % 2 === 0 ? '#F59E0B' : '#10B981';
          ctx.fillStyle = fruitHue;
          ctx.shadowColor = fruitHue;
          ctx.shadowBlur = 4;
          ctx.beginPath();
          ctx.arc(cx + 14, cy + 22, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Ambient subtle ethylene emission aura above crates
          const time = Date.now() * 0.002 + r + c;
          const auraAlpha = 0.15 + 0.1 * Math.sin(time);
          ctx.fillStyle = `rgba(245, 158, 11, ${auraAlpha})`;
          ctx.beginPath();
          ctx.arc(cx + 14, cy + 14 - Math.sin(time) * 4, 9, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#3E5C47';
          ctx.font = 'bold 8.5px monospace';
          ctx.fillText(`C₂H₄`, cx + 24, cy + 25);
        }
      }

      // -----------------------------------------------------------------
      // 2. DUCTWORK (Air Recirculation Conduits)
      // -----------------------------------------------------------------
      // Upper Intake Duct (Fruit Bay -> Cartridge Unit)
      const intakeY = 110;
      const ductX1 = roomX + bayW - 6;
      const ductX2 = cartridgeX + 10;

      // Outer volumetric pipe styling
      ctx.fillStyle = 'rgba(230, 243, 233, 0.7)';
      ctx.strokeStyle = '#B8D8BF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(ductX1, intakeY - 14, ductX2 - ductX1, 28, 8);
      ctx.fill();
      ctx.stroke();

      // Directional chevrons along intake duct (Air moving right)
      ctx.strokeStyle = 'rgba(45, 106, 79, 0.35)';
      ctx.lineWidth = 1.6;
      for (let x = ductX1 + 16; x < ductX2 - 10; x += 24) {
        ctx.beginPath();
        ctx.moveTo(x - 4, intakeY - 6);
        ctx.lineTo(x + 4, intakeY);
        ctx.lineTo(x - 4, intakeY + 6);
        ctx.stroke();
      }

      // Intake flow label
      ctx.fillStyle = '#2D6A4F';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(t.diagram.intake || 'RAW INTAKE AIR', ductX1 + 10, intakeY - 18);

      // Lower Return Duct (Cartridge Unit -> Fruit Bay)
      const returnY = height - 85;
      ctx.fillStyle = 'rgba(215, 245, 226, 0.65)';
      ctx.strokeStyle = '#93D7AC';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(ductX1, returnY - 14, ductX2 - ductX1, 28, 8);
      ctx.fill();
      ctx.stroke();

      // Directional chevrons along return duct (Air moving left)
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.45)';
      ctx.lineWidth = 1.6;
      for (let x = ductX2 - 16; x > ductX1 + 10; x -= 24) {
        ctx.beginPath();
        ctx.moveTo(x + 4, returnY - 6);
        ctx.lineTo(x - 4, returnY);
        ctx.lineTo(x + 4, returnY + 6);
        ctx.stroke();
      }

      ctx.fillStyle = '#059669';
      ctx.font = 'bold 9px monospace';
      ctx.fillText('CLEAN RECIRCULATION', ductX1 + 10, returnY + 26);

      // -----------------------------------------------------------------
      // 3. DRAW 3D SACETHYX CARTRIDGE UNIT (Right Side)
      // -----------------------------------------------------------------
      const cartY = 32;
      const cartH = height - 64;

      // 3D Shadow for Cartridge
      ctx.fillStyle = 'rgba(11, 35, 19, 0.12)';
      ctx.beginPath();
      ctx.roundRect(cartridgeX + 4, cartY + 6, cartridgeW, cartH, 20);
      ctx.fill();

      // Cartridge Outer Metallic Shell
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

      // Top Bevel Highlight (3D depth cue)
      ctx.strokeStyle = 'rgba(167, 243, 208, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(cartridgeX + 2, cartY + 2, cartridgeW - 4, cartH - 4, 18);
      ctx.stroke();

      // Quick-release latch hardware representations
      ctx.fillStyle = '#235936';
      ctx.beginPath();
      ctx.roundRect(cartridgeX - 5, cartY + 36, 6, 22, 3);
      ctx.roundRect(cartridgeX - 5, cartY + cartH - 58, 6, 22, 3);
      ctx.fill();

      // Unit Header & Status Ring
      ctx.fillStyle = '#A7F3D0';
      ctx.font = 'bold 11px "Cabinet Grotesk", sans-serif';
      ctx.fillText(t.diagram.cartridgeUnit, cartridgeX + 20, cartY + 30);

      ctx.fillStyle = '#6EE7B7';
      ctx.font = '10px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(t.diagram.cartridgeSubtitle, cartridgeX + 20, cartY + 46);

      // Status indicator ring
      const ledGlow = Math.sin(Date.now() * 0.005) * 0.2 + 0.8;
      ctx.fillStyle = `rgba(52, 211, 153, ${ledGlow})`;
      ctx.shadowColor = '#34D399';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(cartridgeX + cartridgeW - 24, cartY + 34, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Cartridge Porous Bio-Carbon Matrix Chamber (Cutaway bed)
      ctx.fillStyle = '#071A0E';
      ctx.strokeStyle = '#225B36';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(bedX, bedY, bedW, bedH, 12);
      ctx.fill();
      ctx.stroke();

      // Bed Matrix Header Banner
      ctx.fillStyle = '#34D399';
      ctx.font = 'bold 8.5px monospace';
      ctx.fillText('SACCHARUM BIO-CARBON MATRIX', bedX + 12, bedY + 16);

      // Draw Carbon Granule Background Texture (Micro-pores)
      ctx.fillStyle = 'rgba(52, 211, 153, 0.08)';
      for (let mx = bedX + 10; mx < bedX + bedW - 10; mx += 14) {
        for (let my = bedY + 24; my < bedY + bedH - 10; my += 14) {
          ctx.beginPath();
          ctx.arc(mx, my, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw Active Carbon Pore Receptor Sites (Collision targets)
      poreSites.forEach((pore, idx) => {
        // Receptor base circle
        ctx.fillStyle = pore.glow > 0.1 ? `rgba(245, 158, 11, ${0.3 + pore.glow * 0.7})` : '#0E311B';
        ctx.strokeStyle = pore.glow > 0.1 ? `rgba(251, 191, 36, ${0.5 + pore.glow * 0.5})` : '#1E5833';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(pore.x, pore.y, pore.baseRadius + pore.glow * 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Pore center nucleus
        ctx.fillStyle = pore.glow > 0.1 ? '#FDE68A' : '#34D399';
        if (pore.glow > 0.2) {
          ctx.shadowColor = '#F59E0B';
          ctx.shadowBlur = 10 * pore.glow;
        }
        ctx.beginPath();
        ctx.arc(pore.x, pore.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // If pore was recently struck by a collision, draw excitation rings
        if (pore.glow > 0.3) {
          ctx.strokeStyle = `rgba(251, 191, 36, ${pore.glow * 0.6})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(pore.x, pore.y, pore.baseRadius + (1 - pore.glow) * 12, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // -----------------------------------------------------------------
      // 4. PARTICLE PHYSICS, COLLISION & VISIBLE ADSORPTION SHRINK EFFECT
      // -----------------------------------------------------------------
      const effectiveSpeedMultiplier = isSlowMo ? 0.38 : 1.0;

      if (isPlaying) {
        particles.forEach((p) => {
          // Advance progress
          p.progress += p.speed * effectiveSpeedMultiplier;

          // When particle completes cycle
          if (p.progress >= 1) {
            resetParticle(p);
          }
        });
      }

      particles.forEach((p) => {
        let px = 0;
        let py = 0;

        // Phase 1: Intake travel through upper duct towards cartridge (0.0 to 0.32)
        if (p.progress < 0.32) {
          const subT = p.progress / 0.32;
          px = roomX + 30 + subT * (ductX2 - (roomX + 30));
          py = intakeY + p.offsetY * 0.45;

          // Unaffected before collision zone
          p.radius = p.initialRadius;

          // Draw approaching molecule
          if (p.type === 'ethylene') {
            // Glowing amber/orange Ethylene C2H4 molecule
            ctx.fillStyle = '#F59E0B';
            ctx.shadowColor = '#F59E0B';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(px, py, p.radius, 0, Math.PI * 2);
            ctx.fill();

            // Outer molecular valence ring
            ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(px, py, p.radius + 2, 0, Math.PI * 2);
            ctx.stroke();
            ctx.shadowBlur = 0;
          } else {
            // Cool emerald carrier air particle
            ctx.fillStyle = '#6EE7B7';
            ctx.beginPath();
            ctx.arc(px, py, p.radius, 0, Math.PI * 2);
            ctx.fill();
          }
          return;
        }

        // Phase 2: Entrance into Cartridge & PARTICLE COLLISION EFFECT (0.32 to 0.65)
        if (p.progress < 0.65) {
          const subT = (p.progress - 0.32) / 0.33;

          if (p.type === 'ethylene') {
            // Target specific pore site in carbon bed
            const targetPore = poreSites[p.targetPoreIndex % poreSites.length];
            const startX = ductX2;
            const startY = intakeY + p.offsetY * 0.45;

            // Travel toward the pore receptor
            px = startX + (targetPore.x - startX) * Math.min(1, subT * 1.6);
            py = startY + (targetPore.y - startY) * Math.min(1, subT * 1.6);

            // PARTICLE COLLISION LOGIC:
            // When particle gets close to pore site (subT > 0.4)
            if (subT > 0.4) {
              if (!p.colliding) {
                p.colliding = true;
                targetPore.glow = 1.0; // Excite the pore site!

                // Register collision & increment adsorption counter
                setAdsorbedCount((prev) => prev + 1);

                // Spawn micro collision sparks around impact site
                if (sparksRef.current.length < 60) {
                  const sparkCount = 3 + Math.floor(Math.random() * 3);
                  for (let s = 0; s < sparkCount; s++) {
                    const angle = Math.random() * Math.PI * 2;
                    const speed = 0.8 + Math.random() * 1.6;
                    sparksRef.current.push({
                      x: px,
                      y: py,
                      vx: Math.cos(angle) * speed,
                      vy: Math.sin(angle) * speed,
                      life: 1,
                      maxLife: 18 + Math.random() * 12,
                      color: Math.random() > 0.5 ? '#FBBF24' : '#34D399',
                    });
                  }
                }
              }

              // Advance collision & shrinking progress
              const shrinkT = Math.min(1, (subT - 0.4) / 0.4);
              p.collisionProgress = shrinkT;

              // VISIBLY SHRINK THE MOLECULE TO ZERO (Adsorption into pore)
              p.radius = p.initialRadius * Math.max(0, 1 - shrinkT * 1.1);

              // Collision burst shockwave expanding outward as molecule collapses
              p.burstRadius = 2 + shrinkT * 14;
              p.burstAlpha = Math.max(0, 1 - shrinkT);

              // 1. Draw Collision Impact Flash Ring
              if (p.burstAlpha > 0.05) {
                ctx.strokeStyle = `rgba(251, 191, 36, ${p.burstAlpha * 0.8})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(px, py, p.burstRadius, 0, Math.PI * 2);
                ctx.stroke();

                // Secondary inner emerald pore capture ring
                ctx.strokeStyle = `rgba(52, 211, 153, ${p.burstAlpha * 0.6})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(px, py, p.burstRadius * 0.6, 0, Math.PI * 2);
                ctx.stroke();
              }

              // 2. Draw Shrinking Ethylene Molecule (Vanishing into carbon pore)
              if (p.radius > 0.3) {
                const fadeAlpha = Math.max(0, 1 - shrinkT);
                ctx.fillStyle = `rgba(245, 158, 11, ${fadeAlpha})`;
                ctx.shadowColor = '#F59E0B';
                ctx.shadowBlur = 10 * fadeAlpha;
                ctx.beginPath();
                ctx.arc(px, py, p.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;

                // Collision impact focal dot
                ctx.fillStyle = `rgba(255, 255, 255, ${fadeAlpha})`;
                ctx.beginPath();
                ctx.arc(px, py, p.radius * 0.45, 0, Math.PI * 2);
                ctx.fill();
              }
            } else {
              // Pre-collision flight inside cartridge entrance
              ctx.fillStyle = '#F59E0B';
              ctx.shadowColor = '#F59E0B';
              ctx.shadowBlur = 6;
              ctx.beginPath();
              ctx.arc(px, py, p.radius, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0;
            }

            return; // Ethylene stops & vanishes inside the cartridge!
          } else {
            // Clean air particles DO NOT collide with pores.
            // They navigate the void spaces between carbon granules unhindered!
            const startX = ductX2;
            const startY = intakeY + p.offsetY * 0.45;
            const endX = cartridgeX + 24;
            const endY = returnY;

            px = startX + (endX - startX) * subT;
            py = startY + (endY - startY) * subT + Math.sin(subT * Math.PI * 2) * 8;

            ctx.fillStyle = '#34D399';
            ctx.shadowColor = '#34D399';
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.arc(px, py, p.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
            return;
          }
        }

        // Phase 3: Lower Return Duct - Only Decontaminated Clean Air returns! (0.65 to 1.0)
        // Notice: Virtually NO ethylene molecules reach this stage, visually proving 100% selective capture!
        const subT = (p.progress - 0.65) / 0.35;
        px = ductX2 - subT * (ductX2 - (roomX + 30));
        py = returnY + p.offsetY * 0.45;

        // Fresh lower-ethylene air particle styling
        ctx.fillStyle = '#10B981';
        ctx.shadowColor = '#10B981';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Sleek aerodynamic comet trail for clean air
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + 10, py);
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // -----------------------------------------------------------------
      // 5. UPDATE AND DRAW MICRO COLLISION SPARKS
      // -----------------------------------------------------------------
      const activeSparks = sparksRef.current;
      for (let i = activeSparks.length - 1; i >= 0; i--) {
        const s = activeSparks[i];
        s.x += s.vx * effectiveSpeedMultiplier;
        s.y += s.vy * effectiveSpeedMultiplier;
        s.life += effectiveSpeedMultiplier;

        const sparkAlpha = Math.max(0, 1 - s.life / s.maxLife);
        ctx.fillStyle = s.color === '#FBBF24' ? `rgba(251, 191, 36, ${sparkAlpha})` : `rgba(52, 211, 153, ${sparkAlpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.2, 0, Math.PI * 2);
        ctx.fill();

        if (s.life >= s.maxLife) {
          activeSparks.splice(i, 1);
        }
      }

      // -----------------------------------------------------------------
      // 6. INTERACTIVE HOVER INSPECTION
      // -----------------------------------------------------------------
      if (hoverPos) {
        // Crosshair ring
        ctx.strokeStyle = 'rgba(45, 106, 79, 0.4)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(hoverPos.x, hoverPos.y, 22, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // If hovering over cartridge
        if (hoverPos.x > cartridgeX && hoverPos.x < cartridgeX + cartridgeW) {
          ctx.fillStyle = 'rgba(11, 35, 19, 0.85)';
          ctx.beginPath();
          ctx.roundRect(Math.min(width - 150, hoverPos.x - 70), Math.max(10, hoverPos.y - 40), 140, 26, 6);
          ctx.fill();

          ctx.fillStyle = '#34D399';
          ctx.font = 'bold 9px monospace';
          ctx.fillText('COLLISION ADSORPTION: ACTIVE', Math.min(width - 145, hoverPos.x - 65), Math.max(26, hoverPos.y - 24));
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setupDimensions);
    };
  }, [isPlaying, isSlowMo, t, lang, hoverPos]);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-gradient-to-br from-[#E6F4EA] via-[#EBF5EE] to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-gradient-to-tr from-[#EDF5EE] via-[#F4F9F4] to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2D6A4F] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse" />
              <span>{t.eyebrow}</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#132A1C] leading-[1.08] mb-4 font-display">
              {t.headline1}{' '}
              <span className="text-[#2D6A4F] block sm:inline">{t.headline2}</span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-medium text-[#294B35] mb-4">
              {t.supporting}
            </p>

            {/* Body */}
            <p className="text-base sm:text-[17px] text-[#465A4E] leading-relaxed mb-8 max-w-xl">
              {t.body}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={() => onRequestDemo('hero_primary')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#1E4D2B] hover:bg-[#15381F] shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
              >
                <span>{t.demoCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreTech}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[#1E4D2B] bg-[#EAF2EC] hover:bg-[#DDE9DF] transition-colors cursor-pointer"
              >
                <span>{t.exploreCta}</span>
              </button>
            </div>

            {/* Small trust/value indicators */}
            <div className="pt-6 border-t border-[#E1E8E0]">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-medium text-[#465A4E]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
                  <span>{t.trust.b2b}</span>
                </div>
                <span className="text-neutral-300">·</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                  <span>{t.trust.cas}</span>
                </div>
                <span className="text-neutral-300">·</span>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#2D6A4F]" />
                  <span>{t.trust.modular}</span>
                </div>
                <span className="text-neutral-300">·</span>
                <div className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#2D6A4F]" />
                  <span>{t.trust.monitoring}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enhanced 3D Particle Collision & Adsorption Simulation */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-white border border-[#DCE5DC] p-4 sm:p-6 shadow-sm overflow-hidden">
              {/* Top Bar with Status and Interactive Controls */}
              <div className="flex flex-wrap items-center justify-between pb-3.5 mb-3 border-b border-[#EAF0EA] gap-2">
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
                  {/* Slow-mo toggle to observe particle shrink in detail */}
                  <button
                    onClick={() => setIsSlowMo(!isSlowMo)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                      isSlowMo
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-[#F0F5F0] hover:bg-[#E2EDE2] text-[#294B35]'
                    }`}
                    title="Toggle Slow Motion (Inspect particle collision & shrink)"
                  >
                    <Zap className="w-3 h-3" />
                    <span className="text-[11px]">{isSlowMo ? (t.diagram.speedSlow || '0.4x Slow') : (t.diagram.speedNormal || '1.0x Normal')}</span>
                  </button>

                  {/* Play / Pause toggle */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 px-2 rounded-lg bg-[#EAF2EA] hover:bg-[#DCEBDC] text-[#1E4D2B] transition-colors cursor-pointer text-xs flex items-center gap-1"
                    title={isPlaying ? 'Pause Simulation' : 'Resume Simulation'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span className="text-[11px] font-medium hidden sm:inline">
                      {isPlaying ? 'Pause' : 'Play'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Dynamic Particle Collision Canvas */}
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

                {/* Overlaid Live Adsorption Metrics Badge */}
                <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-md text-white px-2.5 py-1.5 rounded-lg border border-white/10 text-[10px] font-mono flex items-center gap-2 shadow-sm pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  <span>
                    {t.diagram.moleculesCaptured || 'C₂H₄ Trapped'}:{' '}
                    <strong className="text-amber-300">{adsorbedCount.toLocaleString()}</strong>
                  </span>
                </div>
              </div>

              {/* Particle Collision Explanatory Caption Banner */}
              <div className="mt-3.5 p-3.5 bg-[#F4F9F4] rounded-xl border border-[#DCE7DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#3E5C47]">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-[#132A1C]">{t.diagram.collisionTag || 'Particle Collision & Adsorption'}:</strong>{' '}
                    {t.diagram.particleCaption}
                  </p>
                </div>

                {/* Visual Legend */}
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

              {/* Sub-component preview tabs */}
              <div className="mt-4 pt-3 border-t border-[#EEF4EE] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#132A1C]">Key System Assets:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('cartridge')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium cursor-pointer transition-colors ${
                      activeTab === 'cartridge' ? 'bg-[#1E4D2B] text-white' : 'bg-[#EAF2EA] text-[#294B35]'
                    }`}
                  >
                    Cartridge Core
                  </button>
                  <button
                    onClick={() => setActiveTab('flow')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium cursor-pointer transition-colors ${
                      activeTab === 'flow' ? 'bg-[#1E4D2B] text-white' : 'bg-[#EAF2EA] text-[#294B35]'
                    }`}
                  >
                    Airflow Loop
                  </button>
                  <button
                    onClick={() => setActiveTab('telemetry')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium cursor-pointer transition-colors ${
                      activeTab === 'telemetry' ? 'bg-[#1E4D2B] text-white' : 'bg-[#EAF2EA] text-[#294B35]'
                    }`}
                  >
                    Telemetry Node
                  </button>
                </div>
              </div>

              <div className="mt-2 text-[11px] text-[#4F6D58] bg-white p-2.5 rounded-lg border border-[#E2EBE2]">
                {activeTab === 'cartridge' && (
                  <span>
                    <strong>SACETHYX Cartridge:</strong> High-density bio-activated carbon from sugarcane bagasse with tailored pore distribution for selective volatile C₂H₄ capture via physical collision adsorption into micropores.
                  </span>
                )}
                {activeTab === 'flow' && (
                  <span>
                    <strong>Controlled Airflow:</strong> Low-shear centrifugal blower maintains uniform air distribution across pallets without disturbing cold-room thermal stratification.
                  </span>
                )}
                {activeTab === 'telemetry' && (
                  <span>
                    <strong>Multi-Parameter Sensing:</strong> Real-time ethylene trend logging alongside storage temperature and relative humidity.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
