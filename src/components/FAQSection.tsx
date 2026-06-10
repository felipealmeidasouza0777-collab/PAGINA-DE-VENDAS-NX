import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 py-4 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-2 text-left text-zinc-100 hover:text-white transition-colors focus:outline-none select-none group"
      >
        <span className="text-sm font-bold sm:text-base group-hover:underline group-hover:underline-offset-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 group-hover:text-white"
        >
          <ChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-4 pt-2 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Preciso ter experiência avançada em automação para aproveitar o material?",
      answer: "Não. O material foi desenvolvido especificamente para quem já tem conhecimento básico ou intermediário — conhece o conceito de workflow e já mexeu em ferramentas de integração como n8n, Make ou Zapier — mas trava na hora de empacotar o serviço. Se você sabe criar conexões básicas, o Nexus Pack dá a visão de valor comercial que você precisa para cobrar."
    },
    {
      question: "Qual o formato do material e quanto tempo preciso para consumir?",
      answer: "O formato de entrega é de PDF interativo independente com layout premium para consulta focada. Não é um curso de vídeo aulas longas de 50 horas. O projeto foi desenhado sob medida para ser modular: você gasta de 10 a 15 minutos em cada automação para entender a dor que ela resolve, seu fluxo de lógica e argumentos comerciais prontos. Use-o de forma pontual ao preparar propostas ou prospectar."
    },
    {
      question: "As automações são especificamente compatíveis com n8n?",
      answer: "Sim. A maioria das lógicas e fluxos de engenharia visual documentados tem compatibilidade direta com n8n, refletindo inclusive as convenções de nós. No entanto, o raciocínio comercial e metodológico de workflows pode ser adaptado com extrema facilidade por quem utiliza Make, Zapier ou programação em geral."
    },
    {
      question: "Em quanto tempo consigo o meu primeiro cliente pago usando o material?",
      answer: "Depende exclusivamente da sua dedicação em prospectar e agendar reuniões comerciais. Nosso material remove o maior obstáculo que trava iniciantes: a incerteza de não saber o que oferecer e o medo de parecer amador. Com o Roteiro de Reunião e o Mapa de Nichos Comprovados, profissionais ativos relatam fechar os primeiros acordos de 2 a 6 semanas."
    },
    {
      question: "Como funciona a garantia do Nexus Automation Pack?",
      answer: "Oferecemos garantia incondicional blindada de 7 dias. Você adquire, acessa a biblioteca completa, confere todos os bônus exclusivos no conforto de seu tempo. Se preferir qualquer devolução por qualquer motivo, mande um único e-mail direto e nós providenciaremos 100% de reembolso sem burocracia ou constrangimentos."
    },
    {
      question: "O acesso ao material é vitalício?",
      answer: "Sim. Após o download do PDF interativo, ele permanece permanentemente na sua coleção pessoal sem expiração. E você garante acesso direto a todas as futuras atualizações de fluxos adicionados."
    }
  ];

  return (
    <section id="faq-section" className="mx-auto max-w-4xl px-6 py-16 md:py-24 border-t border-white/5 text-left relative">
      <div className="absolute top-1/2 left-10 -z-10 h-[250px] w-[250px] rounded-full bg-violet-600/5 blur-[90px] pointer-events-none" />

      {/* HeaderTitle */}
      <div className="flex flex-col items-start mb-12">
        <span className="text-[10px] font-mono tracking-widest text-[#FF6C88] font-bold uppercase block mb-3 bg-[#FF6C88]/5 px-3 py-1 rounded-full border border-[#FF6C88]/10 select-none">
          DÚVIDAS FREQUENTES
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
          Perguntas que aparecem antes do seu sim
        </h2>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col w-full">
        {faqs.map((el, i) => (
          <FAQItem key={i} question={el.question} answer={el.answer} />
        ))}
      </div>
    </section>
  );
};
