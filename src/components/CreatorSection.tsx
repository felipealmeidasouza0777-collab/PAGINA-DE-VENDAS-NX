import React from 'react';
import { motion } from 'motion/react';
import { Trophy, HelpCircle, ShieldAlert } from 'lucide-react';

export const CreatorSection: React.FC = () => {
  return (
    <section id="creator-section" className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
        {/* Creator Column (Left) */}
        <div className="lg:col-span-7 flex flex-col justify-between items-start gap-8">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#FF6C88] font-bold uppercase block mb-3">
              AUTORIDADE E PROPÓSITO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
              Quem estruturou esse material e por que ele existe
            </h2>
            <div className="mt-6 space-y-4 text-zinc-400 text-sm font-light leading-relaxed max-w-xl">
              <p>
                O <strong className="text-white font-semibold">Nexus Automation Pack</strong> foi estruturado por especialistas com anos de experiência prática instalando automações robustas e integrando APIs no mercado nacional e internacional.
              </p>
              <p>
                Este material não nasceu de discussões teóricas ou cursos repetitivos. Ele foi moldado pela observação direta de um padrão frequente: desenvolvedores excelentes travando na hora de apresentar suas soluções ou precificar o valor dos seus serviços.
              </p>
              <p>
                Nós transformamos anos de discussões comerciais e arquitetura de fluxos complexos em uma documentação intuitiva, organizada e de rápida consulta imediata.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center bg-zinc-950 p-4 rounded-xl border border-white/5 w-full max-w-xl">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
              <Trophy size={18} />
            </div>
            <div className="text-xs">
              <p className="font-bold text-zinc-200">Visão comercial e estratégica aplicada</p>
              <p className="text-zinc-500 mt-1 font-light leading-relaxed">Conectamos o seu raciocínio de workflow às dores reais que as empresas estão prontas para pagar agora.</p>
            </div>
          </div>
        </div>

        {/* Guarantee Column (Right) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border-2 border-dashed border-white/10 bg-zinc-950/60 p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full"
          >
            {/* Ambient gold glow */}
            <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-amber-500/10 blur-xl pointer-events-none" />

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6 shadow-lg shadow-amber-500/5">
                <ShieldAlert size={24} />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Garantia incondicional blindada de 7 dias
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mt-4">
                Você pode conferir a biblioteca completa de automações, testar os bônus e validar as estratégias de prospecção.
              </p>
              
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mt-3">
                Se durante os primeiros 7 dias decidir que o conteúdo não agregou valor ao seu posicionamento profissional, basta nos contatar por e-mail. Nós devolveremos 100% do seu pagamento imediatamente. Risco financeiro zero para você.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-5 text-[10px] font-mono text-zinc-500 text-center uppercase tracking-wide">
              Decisão segura • Compromisso com sua confiança
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
