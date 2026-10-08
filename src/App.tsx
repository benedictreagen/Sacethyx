import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessProblem } from './components/BusinessProblem';
import { SolutionDiagram } from './components/SolutionDiagram';
import { CasIntegration } from './components/CasIntegration';
import { ProductArchitecture } from './components/ProductArchitecture';
import { CartridgeCutaway } from './components/CartridgeCutaway';
import { TechnologySection } from './components/TechnologySection';
import { StorageSimulator } from './components/StorageSimulator';
import { MonitoringDashboard } from './components/MonitoringDashboard';
import { B2bApplications } from './components/B2bApplications';
import { ValueProposition } from './components/ValueProposition';
import { RoiCalculator } from './components/RoiCalculator';
import { BusinessModel } from './components/BusinessModel';
import { MarketOpportunity } from './components/MarketOpportunity';
import { CircularEconomy } from './components/CircularEconomy';
import { InvestorStory } from './components/InvestorStory';
import { DevelopmentRoadmap } from './components/DevelopmentRoadmap';
import { TeamSection } from './components/TeamSection';
import { InsightsSection } from './components/InsightsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { ArticleModal } from './components/ArticleModal';
import { LocalizedArticle } from './data/content';

function MainSite() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryIntent, setInquiryIntent] = useState('demo');
  const [selectedArticle, setSelectedArticle] = useState<LocalizedArticle | null>(null);

  const handleOpenDemo = (intent: string = 'demo') => {
    setInquiryIntent(intent);
    setInquiryModalOpen(true);
  };

  const handlePartnerWithUs = () => {
    setInquiryIntent('partnership');
    setInquiryModalOpen(true);
  };

  const handleExploreTech = () => {
    const el = document.getElementById('technology');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnSolution = () => {
    const el = document.getElementById('solution');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF7] text-[#132A1C] flex flex-col font-sans selection:bg-[#2D6A4F] selection:text-white">
      {/* 1. Sticky Navigation with Bilingual Switcher */}
      <Navbar
        onRequestDemo={() => handleOpenDemo('nav_primary')}
        onPartnerWithUs={handlePartnerWithUs}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Particle Adsorption Canvas Loop */}
        <Hero
          onRequestDemo={handleOpenDemo}
          onExploreTech={handleExploreTech}
        />

        {/* 3. Interactive Problem Section with Storage Environment Slider */}
        <BusinessProblem onLearnSolution={handleLearnSolution} />

        {/* 4. Interactive Solution Architecture Diagram */}
        <SolutionDiagram />

        {/* 5. Interactive CAS Integration Layer Switcher */}
        <CasIntegration />

        {/* 6. System Sub-Components with Dedicated 3D/Hardware Renders */}
        <ProductArchitecture />

        {/* 7. Interactive Cartridge Cutaway Anatomy Explorer */}
        <CartridgeCutaway />

        {/* 8. Horizontal Interactive Technology Journey */}
        <TechnologySection />

        {/* 9. Interactive Storage Simulator Lab (SACETHYX Simulation) */}
        <StorageSimulator />

        {/* 10. Smart Telemetry Monitoring Dashboard with 6h/12h/24h Curves */}
        <MonitoringDashboard />

        {/* 11. Interactive Supply Chain Progression (B2B Applications) */}
        <B2bApplications />

        {/* 12. Strategic Value Proposition (P-A-N-E-N Framework) */}
        <ValueProposition />

        {/* 13. Return on Investment (ROI) & Food Loss Reduction Calculator */}
        <RoiCalculator onOpenInquiry={handleOpenDemo} />

        {/* 14. Visual Business Model & Recurring Consumable Flywheel */}
        <BusinessModel />

        {/* 14. Interactive Concentric TAM / SAM / SOM Market Opportunity */}
        <MarketOpportunity />

        {/* 15. Animated Circular Economy Closed-Loop Diagram */}
        <CircularEconomy />

        {/* 16. Investor Platform Story & Horizontal Progression */}
        <InvestorStory onPartnerClick={handlePartnerWithUs} />

        {/* 17. Development Roadmap with Clear Validation Statuses */}
        <DevelopmentRoadmap />

        {/* 18. Multidisciplinary Technical Leadership Team */}
        <TeamSection />

        {/* 19. Technical Insights Whitepaper Library */}
        <InsightsSection onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* 20. Authoritative B2B FAQ */}
        <FaqSection />

        {/* 21. Final High-Conversion B2B CTA */}
        <FinalCta
          onRequestDemo={handleOpenDemo}
          onPartnerWithUs={handlePartnerWithUs}
        />
      </main>

      {/* 22. Corporate B2B Footer */}
      <Footer onContactClick={(topic) => handleOpenDemo(topic)} />

      {/* Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultIntent={inquiryIntent}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainSite />
    </LanguageProvider>
  );
}
