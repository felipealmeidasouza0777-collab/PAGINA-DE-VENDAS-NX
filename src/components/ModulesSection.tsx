import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  GitFork, 
  Target, 
  Gift, 
  Calculator, 
  MessageSquareCode 
} from 'lucide-react';

export const ModulesSection: React.FC = () => {
  const modules = [
    {
      title: "Biblioteca com 50+ Automações",
      subtitle: "Projetos Reais",
      icon: <BookOpen size={24} className="text-violet-400" />,
      colorClass: "border-violet-500/10 hover:border-violet-500/30 bg-violet-500/[0.01]",
      glowColor: "group-hover:bg-violet-500/10",
      description: "Coleção de automações documentadas com objetivos, dores elegíveis e perfis de negócios. Veja exatamente o que o mercado compra antes de oferecer soluções."
    },
    {
      title: "Fluxos Explicados Passo a Passo",
      subtitle: "Engenharia Visual",
      icon: <GitFork size={24} className="text-emerald-400" />,
      colorClass: "border-emerald-500/10 hover:border-emerald-500/30 bg-emerald-500/[0.01]",
      glowColor: "group-hover:bg-emerald-500/10",
      description: "Cada automação é destrinchada em blocos visuais de ações em sequência (gatilho, manipulação e saída), permitindo assimilar a lógica de arquitetura sem complicação."
    },
    {
      title: "Aplicação Comercial Completa",
      subtitle: "Argumento de Valor",
      icon: <Target size={24} className="text-rose-400" />,
      colorClass: "border-rose-500/10 hover:border-rose-500/30 bg-rose-500/[0.01]",
      glowColor: "group-hover:bg-rose-500/10",
      description: "Descubra o perfil do cliente ideal, as dores de negócio que justificam o seu preço e a forma correta de mensurar o retorno financeiro gerado para a empresa."
    },
    {
      title: "Bônus Exclusivos",
      subtitle: "Pacote de Implementação",
      icon: <Gift size={24} className="text-amber-400" />,
      colorClass: "border-amber-500/10 hover:border-amber-500/30 bg-amber-500/[0.01]",
      glowColor: "group-hover:bg-amber-500/10",
      description: "Templates, prompts de prospecção do método e mapas exclusivos de nichos de alta demanda para acelerar seus primeiros contatos e otimizar tempo."
    },
    {
      title: "Calculadora de Precificação",
      subtitle: "Parâmetros de Lucro",
      icon: <Calculator size={24} className="text-sky-400" />,
      colorClass: "border-sky-500/10 hover:border-sky-500/30 bg-sky-500/[0.01]",
      glowColor: "group-hover:bg-sky-500/10",
      description: "Planilha para calcular o valor do projeto com base em complexidade, horas e retorno gerado. Chegue à reunião com números explicados, sem chutar."
    },
    {
      title: "Roteiro de Reunião Comercial",
      subtitle: "Clareza Comercial",
      icon: <MessageSquareCode size={24} className="text-teal-400" />,
      colorClass: "border-teal-500/10 hover:border-teal-500/30 bg-teal-500/[0.01]",
      glowColor: "group-hover:bg-teal-500/10",
      description: "Script de conversa focado em fazer as perguntas certas na abordagem. Feche projetos com total segurança, sem usar jargões excessivamente técnicos."
    }
  ];

  return (
    <section id="modules-section" className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-t border-white/5 relative">
      <div className="absolute top-12 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />

      {/* Grid title */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <span className="text-[10px] font-mono tracking-widest text-[#FF6C88] font-bold uppercase inline-block mb-3 bg-[#FF6C88]/5 px-3 py-1 rounded-full border border-[#FF6C88]/10">
          O QUE VOCÊ RECEBE
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mt-1">
          Tudo que você precisa para vender automações
        </h2>
        <p className="text-zinc-400 text-sm font-light mt-4 leading-relaxed">
          O Nexus Pack não é um curso teórico cansativo. É uma biblioteca dinâmica projetada para dar respostas rápidas, de alta utilidade e foco prático.
        </p>
      </div>

      {/* Six Modules Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`group rounded-2xl border ${item.colorClass} p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-start gap-4 cursor-default`}
          >
            {/* Dynamic circle wrap with smooth backdrop */}
            <div className={`p-3.5 rounded-xl bg-zinc-900 border border-white/5 transition-colors duration-300 ${item.glowColor}`}>
              {item.icon}
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-wider text-zinc-500 font-bold uppercase block">
                {item.subtitle}
              </span>
              <h3 className="text-base font-bold text-zinc-100 group-hover:text-white transition-colors duration-200 mt-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 font-light mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
