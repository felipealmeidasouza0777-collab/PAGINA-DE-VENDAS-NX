import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';

const PRODUCT_BOX_IMG = '/src/assets/images/nexus_product_box_1781114997650.png';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing-section" className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-t border-white/5 relative">
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-zinc-950/40 rounded-[32px] border border-white/5 p-8 lg:p-12 relative overflow-hidden">
        {/* Decorative ambient background shimmer */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.02] via-transparent to-emerald-500/[0.02] pointer-events-none" />

        {/* Left part: 3D Box Mockup Product (Twin to Mockup) */}
        <div className="lg:col-span-4 flex justify-center items-center overflow-visible">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-[280px] aspect-square rounded-2xl p-2"
          >
            <img 
              src={PRODUCT_BOX_IMG} 
              alt="Nexus Automation Pack Mockup Box" 
              className="w-full h-full object-contain filter drop-shadow-[0_25px_25px_rgba(0,0,0,0.8)]"
              referrerPolicy="no-referrer"
            />
            {/* Soft glowing floor shadow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[180px] h-6 bg-violet-600/15 rounded-full blur-xl pointer-events-none -z-10 animate-pulse" />
          </motion.div>
        </div>

        {/* Right part: Complete Offer parameters */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 py-1 px-3 text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase">
            <Sparkles size={11} className="text-amber-400" />
            OFERTA ESPECIAL POR TEMPO LIMITADO
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mt-5">
            Acesso completo por um preço que cabe no seu bolso
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 w-full border-b border-white/5 pb-8">
            {/* Price values details layout */}
            <div className="flex flex-col items-start shrink-0">
              <span className="text-xs text-zinc-500 line-through font-mono">De R$ 452,00 por apenas</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-bold text-white font-mono">R$</span>
                <span className="text-5xl sm:text-6xl font-black text-white font-space tracking-tight">27,90</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 mt-2">Pagamento único e acesso vitalício</span>
            </div>

            {/* Bullets lists parameters */}
            <div className="flex flex-col gap-3 w-full sm:border-l sm:border-white/5 sm:pl-8">
              <div className="flex items-center gap-2.5">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Check size={10} className="stroke-[3]" />
                </div>
                <span className="text-xs text-zinc-300 font-light">Acesso imediato ao material após a confirmação</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Check size={10} className="stroke-[3]" />
                </div>
                <span className="text-xs text-zinc-300 font-light">Pagamento único, sem assinaturas recorrentes</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Check size={10} className="stroke-[3]" />
                </div>
                <span className="text-xs text-zinc-300 font-light">Garantia incondicional blindada de 7 dias</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Check size={10} className="stroke-[3]" />
                </div>
                <span className="text-xs text-zinc-300 font-light">Acesso vitalício a todos os futuros updates</span>
              </div>
            </div>
          </div>

          {/* Large Secure CTA check out */}
          <div className="mt-8 flex flex-col items-start gap-4 w-full">
            <a 
              href="https://hotmart.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-white text-zinc-950 py-4.5 px-8 text-sm font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-zinc-100 active:scale-98 shadow-xl shadow-white/5"
            >
              QUERO ACESSAR AGORA POR R$ 27,90
              <ArrowRight size={16} className="stroke-[3.5] transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>

            <div className="flex items-center justify-center gap-2 w-full text-zinc-500 text-[10px] font-mono leading-none">
              <ShieldAlert size={12} className="text-zinc-500" />
              <span>Garantia de segurança máxima via criptografia SSL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
