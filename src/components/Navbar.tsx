import React from 'react';
import { motion } from 'motion/react';
import { NexusLogo } from './Icons';
import { ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      id="nexus-navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/70 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo and Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <NexusLogo size={42} className="shrink-0" />
          <div className="flex flex-col select-none">
            <span className="font-space text-lg font-bold tracking-wider text-white leading-tight">NEXUS</span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-400 font-semibold leading-none">AUTOMATION PACK</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollTo('dor-section')} 
            className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-4"
          >
            O que é
          </button>
          <button 
            onClick={() => scrollTo('workflow-section')} 
            className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-4"
          >
            Como funciona
          </button>
          <button 
            onClick={() => scrollTo('modules-section')} 
            className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-4"
          >
            O que você recebe
          </button>
          <button 
            onClick={() => scrollTo('testimonials-section')} 
            className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-4"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollTo('faq-section')} 
            className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-4"
          >
            Perguntas
          </button>
        </nav>

        {/* Action Button */}
        <div>
          <button 
            onClick={() => scrollTo('pricing-section')}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-2 px-5 text-xs font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 active:scale-95"
          >
            QUERO ACESSAR AGORA
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};
