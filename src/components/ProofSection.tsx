import React from 'react';
import { motion } from 'framer-motion';
import { SiGoogleDrive, SiGmail, SiOpenai, SiStripe, SiN8n, SiAirtable, SiGoogleSheets, SiWhatsapp, SiSlack, SiNotion } from 'react-icons/si';

const PRODUCT_BOX_IMG = '/src/assets/images/nexus_product_box_1781114997650.png';

export const ProofSection: React.FC = () => {
  return (
    <section id="proof-section" className="mx-auto max-w-7xl px-6 py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-10 -z-10 h-[240px] w-[240px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-[280px] w-[280px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="text-center mx-auto max-w-3xl mb-14">
        <span className="inline-flex items-center justify-center rounded-full border border-[#FF6C88]/20 bg-[#FF6C88]/5 px-4 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF6C88]">
          VEJA O QUE EXISTE DENTRO DO NEXUS AUTOMATION PACK
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mt-6">
          Prova visual premium do material que transforma fluxo em venda.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
          Uma seção dedicada a mostrar o pacote real: mockup, documentos, workflow de automação e aplicação comercial prática.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group rounded-3xl border border-white/10 bg-zinc-950/80 p-6 shadow-2xl shadow-black/20 overflow-hidden"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-5">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
            <div className="relative flex h-48 items-center justify-center">
              <img
                src={PRODUCT_BOX_IMG}
                alt="Nexus Automation Pack mockup"
                className="h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-zinc-500">Mockup do produto</p>
            <h3 className="mt-3 text-lg font-semibold text-white">Caixa premium e identidade de marca reais</h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              O material apresenta uma identidade coerente com branding premium, mostrando o produto como um ativo comercial real.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="group rounded-3xl border border-white/10 bg-zinc-950/80 p-6 shadow-2xl shadow-black/20 overflow-hidden"
        >
          <div className="grid grid-cols-[auto_1fr] gap-4 items-start rounded-3xl border border-white/10 bg-[#09090d] p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111116] border border-white/10 text-[#FF6C88]">
              <SiGoogleSheets size={24} />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-zinc-500">Página interna do PDF</p>
              <h3 className="mt-2 text-lg font-semibold text-white">Documentação com layout corporativo</h3>
            </div>
          </div>
          <div className="mt-5 grid gap-3">
            <div className="rounded-2xl border border-white/5 bg-zinc-900/80 p-4 text-sm text-zinc-400">
              <div className="h-3.5 w-3/4 rounded-full bg-white/10 mb-3" />
              <div className="h-2.5 w-full rounded-full bg-white/5 mb-2.5" />
              <div className="h-2.5 w-5/6 rounded-full bg-white/5" />
            </div>
            <div className="rounded-2xl border border-white/5 bg-zinc-900/80 p-4 text-sm text-zinc-400">
              <div className="h-3.5 w-1/2 rounded-full bg-white/10 mb-3" />
              <div className="h-2.5 w-3/4 rounded-full bg-white/5 mb-2.5" />
              <div className="h-2.5 w-2/4 rounded-full bg-white/5" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group rounded-3xl border border-white/10 bg-zinc-950/80 p-6 shadow-2xl shadow-black/20 overflow-hidden"
        >
          <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-[#09090d] p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111116] border border-white/10 text-emerald-400">
              <SiN8n size={24} />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-zinc-500">Workflow</p>
              <h3 className="mt-2 text-lg font-semibold text-white">Editor n8n com nós reais</h3>
            </div>
          </div>
          <div className="mt-5 rounded-3xl border border-white/5 bg-zinc-900/80 p-4 text-sm text-zinc-300">
            <div className="mb-4 grid grid-cols-2 gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs text-zinc-300">
                <SiStripe size={14} className="text-sky-400" /> Stripe</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs text-zinc-300">
                <SiGoogleDrive size={14} className="text-emerald-400" /> Drive</span>
            </div>
            <div className="grid gap-3">
              <div className="rounded-2xl bg-zinc-950/95 p-3 border border-white/5">
                <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">Trigger</span>
                <p className="mt-2 text-sm text-white">Cliente Compra → Stripe → Webhook</p>
              </div>
              <div className="rounded-2xl bg-zinc-950/95 p-3 border border-white/5">
                <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">IA</span>
                <p className="mt-2 text-sm text-white">OpenAI valida, gera e envia por Gmail.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="group rounded-3xl border border-white/10 bg-zinc-950/80 p-6 shadow-2xl shadow-black/20 overflow-hidden"
        >
          <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-[#09090d] p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111116] border border-white/10 text-[#FF6C88]">
              <SiGmail size={24} />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-zinc-500">Aplicação comercial</p>
              <h3 className="mt-2 text-lg font-semibold text-white">Uso direto em propostas de serviço</h3>
            </div>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-zinc-400">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">✓</span>
              Documentação pronta para apresentações a clientes.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">✓</span>
              Mapas de fluxo, pontos de valor e gatilhos acionáveis.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">✓</span>
              Inclui integrações com Gmail, Slack, Notion, WhatsApp e Airtable.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
