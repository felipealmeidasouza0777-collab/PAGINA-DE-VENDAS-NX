import React from 'react';
import { NexusLogo } from './Icons';
import { 
  GmailIcon, 
  GoogleSheetsIcon, 
  SlackIcon, 
  NotionIcon, 
  WhatsAppIcon, 
  AirtableIcon, 
  OpenAIIcon 
} from './Icons';

export const Footer: React.FC = () => {
  const tools = [
    { icon: <GmailIcon size={18} />, label: "Gmail" },
    { icon: <GoogleSheetsIcon size={18} />, label: "Google Sheets" },
    { icon: <SlackIcon size={18} />, label: "Slack" },
    { icon: <NotionIcon size={18} />, label: "Notion" },
    { icon: <WhatsAppIcon size={18} />, label: "WhatsApp" },
    { icon: <AirtableIcon size={18} />, label: "Airtable" },
    { icon: <OpenAIIcon size={18} />, label: "OpenAI" }
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-zinc-950/40 relative overflow-hidden">
      {/* Brands Integration Grid footer */}
      <div className="border-b border-white/5 bg-zinc-950/70 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
            {tools.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2.5 text-zinc-500 hover:text-zinc-300 transition-colors duration-200 select-none group"
              >
                <div className="opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
                  {item.icon}
                </div>
                <span className="text-xs font-mono font-medium tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer layout content */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Brand layout info */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <NexusLogo size={36} />
            <div className="flex flex-col text-left">
              <span className="font-space text-base font-extrabold tracking-wider text-white">NEXUS</span>
              <span className="text-[8px] font-mono tracking-widest text-zinc-500 font-semibold leading-none">AUTOMATION PACK</span>
            </div>
          </div>
          <p className="text-[11px] text-zinc-500 font-sans tracking-wide max-w-sm mt-1 leading-relaxed">
            Bibliotecas de documentações de fluxos comerciais para turbinar o posicionamento técnico de desenvolvedores em consultoria e freelance remunerado.
          </p>
        </div>

        {/* Links parameters */}
        <div className="flex flex-col items-center md:items-end gap-3.5">
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-mono text-zinc-500">
            <a href="#hero-section" className="hover:text-zinc-300 transition-colors">Voltar ao topo</a>
            <a href="#dor-section" className="hover:text-zinc-300 transition-colors">O Maior Problema</a>
            <a href="#workflow-section" className="hover:text-zinc-300 transition-colors">Como Funciona</a>
          </div>
          <div className="text-[10px] font-mono text-zinc-600 mt-2">
            &copy; {new Date().getFullYear()} Nexus Automation Pack • Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
