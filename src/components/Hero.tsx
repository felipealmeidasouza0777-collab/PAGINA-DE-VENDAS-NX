import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Compass, 
  Coins 
} from 'lucide-react';
import { 
  GmailIcon, 
  GoogleSheetsIcon, 
  SlackIcon, 
  NotionIcon, 
  WhatsAppIcon, 
  AirtableIcon, 
  OpenAIIcon, 
  n8nIcon 
} from './Icons';

// Paths of generated images
const HERO_HUMAN_IMG = '/src/assets/images/hero_human_engineer_1781114977821.png';

export const Hero: React.FC = () => {
  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Floating platforms configuration around the hero illustration
  const floatingTools = [
    { icon: <GmailIcon size={24} />, x: "12%", y: "15%", label: "Gmail", delay: 0 },
    { icon: <GoogleSheetsIcon size={24} />, x: "9%", y: "45%", label: "Google Sheets", delay: 0.5 },
    { icon: <SlackIcon size={24} />, x: "18%", y: "75%", label: "Slack", delay: 1.0 },
    { icon: <NotionIcon size={24} />, x: "82%", y: "20%", label: "Notion", delay: 1.5 },
    { icon: <WhatsAppIcon size={24} />, x: "85%", y: "55%", label: "WhatsApp", delay: 0.8 },
    { icon: <AirtableIcon size={24} />, x: "72%", y: "82%", label: "Airtable", delay: 0.3 },
    { icon: <OpenAIIcon size={24} />, x: "50%", y: "-5%", label: "OpenAI", delay: 1.2 },
    // n8n is on the far top-right exactly like mockup
    { icon: <div className="bg-zinc-950 p-2 rounded-xl border border-pink-500/30 shrink-0"><n8nIcon size={28} /></div>, x: "86%", y: "-2%", label: "n8n", delay: 0.7, custom: true }
  ];

  return (
    <section id="hero-section" className="relative overflow-visible pb-16 pt-12 md:pb-24 md:pt-20">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-40 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 py-1 px-3 text-[11px] font-mono font-medium tracking-widest text-violet-400 uppercase"
          >
            <Sparkles size={12} className="text-violet-400" />
            NEXUS AUTOMATION PACK
          </motion.div>

          {/* Master Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]"
          >
            Quem sabe criar automações já tem o que o mercado quer comprar.
          </motion.h1>

          {/* Scannable Copy Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl"
          >
            O problema não é falta de conhecimento técnico. É não saber quais projetos têm demanda, 
            como funcionam passo a passo e como vendê-los. Acesse referências visuais que conectam suas 
            habilidades de fluxo a projetos comerciais de valor.
          </motion.p>

          {/* Horizontal bullet points block matching the image layout */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid grid-cols-3 gap-3 w-full border-t border-b border-white/5 py-6"
          >
            {/* Bullet 1 */}
            <div className="flex flex-col items-start text-left gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0 shadow-lg shadow-indigo-500/5">
                <Compass size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-200 leading-snug">Projetos reais</p>
                <p className="text-[10px] text-zinc-400 mt-1 font-light">Casos práticos de alta demanda por empresas.</p>
              </div>
            </div>

            {/* Bullet 2 */}
            <div className="flex flex-col items-start text-left gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 shadow-lg shadow-emerald-500/5">
                <Layers size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-200 leading-snug">Fluxos detalhados</p>
                <p className="text-[10px] text-zinc-400 mt-1 font-light">Arquitetura lógica explicada sem mistério.</p>
              </div>
            </div>

            {/* Bullet 3 */}
            <div className="flex flex-col items-start text-left gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 shadow-lg shadow-amber-500/5">
                <Coins size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-200 leading-snug">Valor Comercial</p>
                <p className="text-[10px] text-zinc-400 mt-1 font-light">Estratégia, dor do cliente e argumentos prontos.</p>
              </div>
            </div>
          </motion.div>

          {/* Action button in the premium shape */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full"
          >
            <button 
              onClick={handleScrollToPricing}
              className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-xs font-bold tracking-wider text-black transition-all duration-300 hover:bg-zinc-100 hover:scale-[1.02] active:scale-95 shadow-2xl shadow-white/10"
            >
              QUERO VER AS AUTOMAÇÕES QUE O MERCADO COMPRA
              <ArrowRight size={14} className="stroke-[3] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300"
          >
            <div className="inline-flex items-center gap-2 text-emerald-400">
              <span className="text-base leading-none">✓</span>
              Acesso Imediato
            </div>
            <div className="inline-flex items-center gap-2 text-emerald-400">
              <span className="text-base leading-none">✓</span>
              Download Instantâneo
            </div>
            <div className="inline-flex items-center gap-2 text-emerald-400">
              <span className="text-base leading-none">✓</span>
              Garantia de 7 Dias
            </div>
            <div className="inline-flex items-center gap-2 text-emerald-400">
              <span className="text-base leading-none">✓</span>
              Atualizações Futuras
            </div>
            <div className="inline-flex items-center gap-2 text-emerald-400 sm:col-span-2">
              <span className="text-base leading-none">✓</span>
              Biblioteca Premium
            </div>
          </motion.div>

          {/* Trust badges underneath */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 flex flex-wrap items-center gap-6 text-zinc-500 text-[11px] font-mono leading-none"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
              <span>Compra 100% Segura • Ambiente Criptografado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-violet-500 shrink-0" />
              <span>Acesso imediato • Ebook PDF + 3 super bônus inclusos</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column Illustration (Human & floating integrations) */}
        <div className="lg:col-span-5 relative flex justify-center items-center overflow-visible mt-6 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-[450px] aspect-[4/5] rounded-[32px] overflow-visible border border-white/5 bg-zinc-950/40 p-3"
          >
            {/* Connected curves drawing from logos (rendered behind logos, in background) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-zinc-500/20 fill-none" strokeWidth="1" strokeDasharray="4 4" id="floating-lines-svg">
              <path d="M 50 10 C 25 15, 12 15, 12 15" />
              <path d="M 50 10 C 70 10, 86 0, 86 0" />
              <path d="M 12 15 C 9 30, 9 45, 9 45" />
              <path d="M 9 45 C 18 60, 18 75, 18 75" />
              <path d="M 82 20 C 85 30, 85 55, 85 55" />
              <path d="M 85 55 C 72 70, 72 82, 72 82" />
            </svg>

            {/* Floating rounded integration items */}
            {floatingTools.map((tool, index) => (
              <motion.div
                key={index}
                animate={{ 
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: tool.delay
                }}
                style={{ left: tool.x, top: tool.y }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 ${
                  tool.custom 
                    ? '' 
                    : 'flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 shadow-lg shadow-black/60 glow-effect'
                }`}
                title={tool.label}
              >
                {tool.icon}
              </motion.div>
            ))}

            {/* The primary photograph (human engineering picture generated by AI) */}
            <div className="w-full h-full rounded-[24px] overflow-hidden relative shadow-2xl">
              <img 
                src={HERO_HUMAN_IMG} 
                alt="Nexus Expert Developer" 
                className="w-full h-full object-cover grayscale-[15%] contrast-[110%] brightness-[90%]"
                referrerPolicy="no-referrer"
              />
              {/* Overlay styling for premium feeling */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px]" />

              {/* Automações 50+ Card (Exact Match) */}
              <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-[220px] rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-white/10 p-5 shadow-2xl flex flex-col gap-1 z-30">
                <span className="text-[10px] font-mono tracking-widest text-[#FF6C88] font-bold uppercase">AUTOMAÇÕES</span>
                <span className="text-4xl font-space font-black text-white">50+</span>
                <span className="text-[10px] text-zinc-400 font-sans tracking-wide leading-snug">PROJETOS COM APLICAÇÃO COMERCIAL IMEDIATA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
