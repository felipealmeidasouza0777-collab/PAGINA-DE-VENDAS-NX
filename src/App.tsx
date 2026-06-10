import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { VideoSection } from './components/VideoSection';
import { WorkflowSection } from './components/WorkflowSection';
import { ProofSection } from './components/ProofSection';
import { ModulesSection } from './components/ModulesSection';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { CreatorSection } from './components/CreatorSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="premium-glow-bg min-h-screen w-full relative overflow-hidden bg-zinc-950 font-sans text-zinc-100 antialiased" id="nexus-app-root">
      
      {/* Absolute floating gradient backgrounds for premium dark mode */}
      <div className="absolute top-0 left-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[1800px] right-10 -z-10 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[3400px] left-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* Navbar Integration */}
      <Navbar />

      {/* Landing Page Content flow exactly matching mockup reference */}
      <main className="relative overflow-visible pb-12 w-full">
        
        {/* Hero Section */}
        <Hero />

        {/* Problem Section (Você domina as ferramentas mas trava...) */}
        <Problem />

        {/* Video demonstration VSL Section */}
        <VideoSection />

        {/* The beautiful n8n Workflow editor simulator Section */}
        <WorkflowSection />

        {/* Proof section showing product mockup, document pages and workflow application */}
        <ProofSection />

        {/* Deliverable/Modules details Section */}
        <ModulesSection />

        {/* Testimonials Review section */}
        <Testimonials />

        {/* Creator / Authority & Guarantee twin Column section */}
        <CreatorSection />

        {/* Massive Discount Offer Price box section */}
        <PricingSection />

        {/* FAQ Accordion Section */}
        <FAQSection />

      </main>

      {/* Footer & Integration sliding strip */}
      <Footer />

    </div>
  );
}

