import React from 'react';
import { motion } from 'motion/react';
import { User, Cpu, Network, HelpCircle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="dor-section" className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-t border-white/5">
      {/* Upper header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <div className="lg:col-span-7">
          <span className="text-[10px] font-mono tracking-widest text-[#FF6C88] font-bold uppercase block mb-3">
            O MAIOR PROBLEMA NÃO É TÉCNICO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Você domina as ferramentas, mas trava na hora de vender.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pl-6 text-zinc-400 text-sm sm:text-base leading-relaxed font-light mt-2">
          <p>
            Existe uma lacuna entre dominar a tecnologia e saber quais soluções têm demanda real no mercado.
          </p>
          <p className="mt-3">
            Nós chamamos isso de <strong className="text-white font-semibold">Lacuna da Virada Comercial</strong>. É exatamente esse espaço que o Nexus Automation Pack preenche, traduzindo conhecimento técnico em soluções vendáveis.
          </p>
        </div>
      </div>

      {/* Horizontal row of 4 visual states */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Step 1 */}
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl bg-zinc-950 border border-white/5 p-6 flex flex-col items-start gap-4 shadow-xl"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-white/5 text-zinc-400">
            <User size={20} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-200">Aprendeu as ferramentas</h3>
            <p className="text-xs text-zinc-500 mt-2 font-light leading-relaxed">
              Você assistiu às aulas, aprendeu comandos e domina as configurações do painel.
            </p>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl bg-zinc-950 border border-white/5 p-6 flex flex-col items-start gap-4 shadow-xl"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-white/5 text-zinc-400">
            <Cpu size={20} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-200">Criou workflows de teste</h3>
            <p className="text-xs text-zinc-500 mt-2 font-light leading-relaxed">
              Desenvolveu fluxos fictícios no n8n e no Make para testar conexões e lógicas simples.
            </p>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl bg-zinc-950 border border-white/5 p-6 flex flex-col items-start gap-4 shadow-xl"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-white/5 text-zinc-400">
            <Network size={20} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-200">Entendeu integrações</h3>
            <p className="text-xs text-zinc-500 mt-2 font-light leading-relaxed">
              Sabe conectar APIs externas, mapear webhook, manipular JSONs e configurar triggers.
            </p>
          </div>
        </motion.div>

        {/* Step 4 (Highlighted bottle-neck state) */}
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl bg-zinc-900 border-2 border-white/20 p-6 flex flex-col items-start gap-4 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glossy overlay shimmer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-white/5 pointer-events-none" />
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6C88]/10 border border-[#FF6C88]/20 text-[#FF6C88]">
            <HelpCircle size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              Mas não sabe o que vender
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            </h3>
            <p className="text-xs text-zinc-300 mt-2 font-light leading-relaxed">
              Você não consegue enxergar quais problemas de negócios o mercado está disposto a pagar para resolver.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
