import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Lucas M.",
      role: "Freelancer em Automação",
      avatarLetter: "L",
      avatarBg: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      boldTxt: "Fechei meu primeiro projeto em 3 semanas",
      text: "Ficou 4 meses aprendendo n8n, criou dezenas de fluxogramas de simulação, mas não conseguia visualizar o que apresentar de prático nas reuniões com possíveis clientes.",
      quote: "Depois de ver os projetos reais e as dores de negócios no material, clareou tudo. Fechei meu primeiro freela em 3 semanas por R$ 1.800!"
    },
    {
      name: "Renata C.",
      role: "Especialista em Processos",
      avatarLetter: "R",
      avatarBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      boldTxt: "Cobrei R$ 2.400 na primeira entrega",
      text: "Sabia usar Make e Zapier para automações internas, mas tinha a impressão de que seus fluxos eram simples demais para ser cobrados como consultoria profissional.",
      quote: "Ao ler o Guia de Aplicação Comercial, percebi que o simples resolve dores complexas. Entreguei um fluxo e cobrei meu primeiro contrato de R$ 2.400."
    },
    {
      name: "Diego F.",
      role: "Consultor de Automações",
      avatarLetter: "D",
      avatarBg: "bg-rose-500/20 text-rose-400 border-rose-500/30",
      boldTxt: "Agendei 2 reuniões na primeira semana",
      text: "Estava prestes a desistir por não conseguir converter o conhecimento técnico avançado das ferramentas em contatos de vendas ou interesse real de empresas.",
      quote: "O Roteiro de Primeira Reunião e o Mapa de Nichos mudaram meu jogo. Identifiquei 3 nichos com demanda latente e marquei 2 vendas em menos de 2 semanas."
    }
  ];

  return (
    <section id="testimonials-section" className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-t border-white/5 relative">
      <div className="absolute top-2/3 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[125px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[10px] font-mono tracking-widest text-[#FF6C88] font-bold uppercase inline-block mb-3 bg-[#FF6C88]/5 px-3 py-1 rounded-full border border-[#FF6C88]/10">
          HISTÓRIAS REAIS DE RESULTADOS
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mt-1">
          Quem saiu do modo estudo para o modo projeto
        </h2>
        <p className="text-zinc-400 text-sm font-light mt-4 leading-relaxed">
          Veja como pessoas comuns romperam a barreira da timidez técnica e usaram nossa documentação como atalho para faturar no mercado real.
        </p>
      </div>

      {/* Cards columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {reviews.map((el, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-white/5 bg-zinc-950 p-6 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Stars row */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Bold Quote summary */}
              <h3 className="text-sm font-extrabold text-white mb-3">
                &ldquo;{el.boldTxt}&rdquo;
              </h3>

              {/* Content description */}
              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                {el.text}
              </p>

              {/* Quotes */}
              <p className="text-xs text-zinc-300 italic font-light border-l border-white/10 pl-3 leading-relaxed mb-6">
                {el.quote}
              </p>
            </div>

            {/* Profile Avatar footer */}
            <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full border font-bold text-sm ${el.avatarBg}`}>
                {el.avatarLetter}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-zinc-200">{el.name}</span>
                <span className="text-[10px] font-mono text-zinc-500 mt-0.5">{el.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
