import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Terminal, 
  Sliders, 
  Cpu, 
  CheckCircle2, 
  Plus, 
  Settings, 
  HelpCircle, 
  Braces, 
  RefreshCw 
} from 'lucide-react';
import { 
  GmailIcon, 
  n8nIcon, 
  SlackIcon, 
  GoogleDriveIcon, 
  WebhookIcon 
} from './Icons';

// Type definitions for high-fidelity workflow nodes
interface Parameter {
  label: string;
  value: string;
}

interface WorkflowNode {
  id: string;
  name: string;
  type: string;
  icon: React.ReactNode;
  brandColor: string;
  status: 'idle' | 'running' | 'success';
  executionTime?: string;
  parameters: Parameter[];
  jsonOutput: string;
}

export const WorkflowSection: React.FC = () => {
  // Nodes mapping following exact user requirements and official logos
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    {
      id: 'input-node',
      name: 'Stripe Purchase',
      type: 'Trigger (Input)',
      icon: <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-500"><Plus size={18} /></div>,
      brandColor: 'pink',
      status: 'idle',
      executionTime: '8ms',
      parameters: [
        { label: 'Event Trigger', value: 'checkout.session.completed' },
        { label: 'Payment Status', value: 'paid' },
        { label: 'Live Mode', value: 'true' }
      ],
      jsonOutput: JSON.stringify({
        event: "checkout.session.completed",
        id: "evt_3M1tXYZ",
        created: 1781200742,
        customer: {
          name: "Carlos Eduardo Silva",
          email: "carlos.du@gmail.com"
        },
        amount_total: 97.00,
        currency: "brl"
      }, null, 2)
    },
    {
      id: 'webhook-node',
      name: 'n8n Listen Webhook',
      type: 'Webhook Listener',
      icon: <div className="p-2 rounded-lg bg-[#FF6C88]/10 border border-[#FF6C88]/20"><WebhookIcon size={18} className="text-[#FF6C88]" /></div>,
      brandColor: 'orange',
      status: 'idle',
      executionTime: '3ms',
      parameters: [
        { label: 'HTTP Method', value: 'POST' },
        { label: 'Path', value: '/v1/stripe-purchase-webhook' },
        { label: 'Response Mode', value: 'On Received (200)' }
      ],
      jsonOutput: JSON.stringify({
        webhook: "Active",
        source: "Stripe",
        headers: {
          "user-agent": "Stripe/v1",
          "content-type": "application/json"
        },
        payload_body: {
          customer_email: "carlos.du@gmail.com",
          product_name: "Nexus Automation Pack - Vol 1",
          transaction_id: "tx_9a8b1c2d"
        }
      }, null, 2)
    },
    {
      id: 'process-node',
      name: 'License Key Gen',
      type: 'Process Node (JS)',
      icon: <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"><Cpu size={18} /></div>,
      brandColor: 'indigo',
      status: 'idle',
      executionTime: '14ms',
      parameters: [
        { label: 'Operation', value: 'Generate Crypto UUID' },
        { label: 'Token Duration', value: 'Lifetime access' },
        { label: 'Format Type', value: 'SHA256 Hash Link' }
      ],
      jsonOutput: JSON.stringify({
        generation: "successful",
        access_key: "nex_df9b12a83c74d0e9a112bc5f8e",
        membership_id: "mem_2026_0411",
        access_url: "https://plataforma.nexus.com/acesso?key=nex_df9b"
      }, null, 2)
    },
    {
      id: 'drive-node',
      name: 'Bonus PDF Fetch',
      type: 'Google Drive Doc',
      icon: <div className="p-1.5 rounded-lg bg-zinc-900 border border-emerald-500/20"><GoogleDriveIcon size={20} /></div>,
      brandColor: 'emerald',
      status: 'idle',
      executionTime: '45ms',
      parameters: [
        { label: 'Action', value: 'Get Shareable Download Link' },
        { label: 'Folder Target', value: 'Nexus_Pack_Source_V1' },
         { label: 'File Type', value: 'Interactive PDF + Source Node Code' }
      ],
      jsonOutput: JSON.stringify({
        status: "FOUND",
        file_id: "drive_f10a29b3c48d",
        file_name: "Nexus_Pack_Completo_v1.pdf",
        direct_download_url: "https://drive.google.com/uc?export=download&id=drive_f10a",
        bytes: "18293740"
      }, null, 2)
    },
    {
      id: 'gmail-node',
      name: 'Deliver Pack Email',
      type: 'Gmail Delivery',
      icon: <div className="p-1.5 rounded-lg bg-zinc-900 border border-red-500/20"><GmailIcon size={20} /></div>,
      brandColor: 'red',
      status: 'idle',
      executionTime: '128ms',
      parameters: [
        { label: 'Recipient (To)', value: 'carlos.du@gmail.com' },
        { label: 'Sender (From)', value: 'contato@nexus-pack.com' },
        { label: 'Email Template', value: 'Welcome_Deliver_Pack_Vol1' }
      ],
      jsonOutput: JSON.stringify({
        status: "DELIVERED",
        message_id: "msg_abc89a1b2c3d4e5f",
        tracking_pixel: "https://nexus-pack.com/px/track_abc89.png",
        sent_timestamp: "2026-06-10T18:24:00Z"
      }, null, 2)
    },
    {
      id: 'success-node',
      name: 'Sale Notification',
      type: 'Slack Notification',
      icon: <div className="p-1.5 rounded-lg bg-zinc-900 border border-[#ECB22E]/20"><SlackIcon size={20} /></div>,
      brandColor: 'yellow',
      status: 'idle',
      executionTime: '22ms',
      parameters: [
        { label: 'Slack Channel', value: '#nexus-vendas-v1' },
        { label: 'Channel ID', value: 'CH_019BF73A' },
        { label: 'Message Color', value: '#2EB67D (Success Green)' }
      ],
      jsonOutput: JSON.stringify({
        slack_api_post: "OK",
        channel_notified: "#nexus-vendas-v1",
        payload_sent: {
          text: "🎉 Nova venda! Carlos Eduardo acabou de garantir o Nexus Pack Vol 1!"
        }
      }, null, 2)
    }
  ]);

  const [selectedNodeId, setSelectedNodeId] = useState<string>('input-node');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationLog, setSimulationLog] = useState<string[]>(['Pronto para iniciar a simulação comercial.']);

  // Find currently clicked/selected node
  const currentNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  // Run sequential step-by-step visual workflow execution simulation
  const runWorkflowSimulation = async () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationLog(['Iniciando simulação do fluxo n8n...', 'Handshake executado com os servidores webhook.']);

    // Reset all nodes back to idle
    setNodes(prev => prev.map(n => ({ ...n, status: 'idle' })));

    for (let i = 0; i < nodes.length; i++) {
      const activeNode = nodes[i];
      
      // Update state to running
      setNodes(prev => prev.map((n, idx) => idx === i ? { ...n, status: 'running' } : n));
      setSimulationLog(prev => [...prev, `Executando Nó [${activeNode.name}]...`]);
      setSelectedNodeId(activeNode.id);

      // Simulation node run speed lag simulation
      await new Promise(resolve => setTimeout(resolve, 900));

      // Successfully resolved
      setNodes(prev => prev.map((n, idx) => idx === i ? { ...n, status: 'success' } : n));
      setSimulationLog(prev => [
        ...prev, 
        `Nó [${activeNode.name}] finalizado com sucesso em ${activeNode.executionTime || '5ms'}!`
      ]);
    }

    setSimulationLog(prev => [...prev, '✔ Fluxo finalizado! Acesso entregue e notificação disparada com 100% de sucesso.']);
    setIsSimulating(false);
  };

  return (
    <section id="workflow-section" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 border-t border-white/5 relative">
      <div className="absolute top-1/2 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-[#FF6C88]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      {/* Header section titles */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-[10px] font-mono tracking-widest text-[#FF6C88] font-bold uppercase inline-block mb-3 bg-[#FF6C88]/5 px-3 py-1 rounded-full border border-[#FF6C88]/10 select-none">
          AMBIENTE REAL DE ENGENHARIA VISUAL
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mt-1">
          Simulador oficial de Workflows n8n
        </h2>
        <p className="text-zinc-400 text-sm font-light mt-4 leading-relaxed max-w-2xl mx-auto">
          Veja abaixo como funciona a esteira comercial que você vai aprender a estruturar. Clique nos nós para conferir seus parâmetros e o JSON real de saída.
        </p>
      </div>

      {/* Main SaaS Frame container */}
      <div className="w-full rounded-2xl border border-white/10 bg-[#0c0c0e] shadow-2xl overflow-hidden relative flex flex-col" id="n8n-saas-frame">
        
        {/* Mock Top bar of Node UI Workspace */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 bg-[#0e0e11] px-5 py-3.5 z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-md bg-zinc-900 border border-white/10 px-2.5 py-1 font-mono text-[10px] text-zinc-300 font-bold select-none">
              <div className="w-3.5 h-3.5 rounded shrink-0 flex items-center justify-center bg-[#FF6C88] text-white font-extrabold text-[8px] mr-1">8</div>
              <span>n8n Core Editor • Active Sandbox</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={runWorkflowSimulation}
              disabled={isSimulating}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold font-mono uppercase tracking-wider transition-all select-none ${
                isSimulating 
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 cursor-not-allowed hover:bg-emerald-500/20' 
                  : 'bg-emerald-500 text-black border-transparent hover:bg-emerald-400 active:scale-95'
              }`}
            >
              <Play size={12} className={`fill-current ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Executando...' : 'Executar Automação'}</span>
            </button>
            
            <button 
              onClick={() => {
                setNodes(p => p.map(n => ({...n, status: 'idle'})));
                setSimulationLog(['Ambiente de execução redefinido.']);
              }}
              disabled={isSimulating}
              className="p-1.5 rounded-lg border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
              title="Redefinir Fluxo"
            >
              <RefreshCw size={13} />
            </button>
          </div>
        </div>

        {/* Core Layout split: Left Side Canvas, Right Side Details Panel */}
        <div className="flex flex-col lg:flex-row min-h-[480px]">
          
          {/* Canvas block (Interactive SVG Connected nodes) */}
          <div className="flex-1 p-6 relative overflow-x-auto overflow-y-hidden border-b lg:border-b-0 lg:border-r border-white/5 scrollbar-thin select-none">
            
            {/* Dots matrix workspace styling overlay */}
            <div 
              className="absolute inset-0 z-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                backgroundPosition: '0 0'
              }}
            />

            {/* Container mapping our custom n8n designed nodes with curves */}
            <div className="relative z-10 flex items-center gap-8 min-w-[1300px] py-16 px-4 justify-between h-full">
              
              {nodes.map((node, i) => (
                <div key={node.id} className="flex items-center relative gap-8">
                  
                  {/* Real high-fidelity n8n box representing node properties */}
                  <div 
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`relative w-[180px] rounded-xl border bg-[#111116] p-3.5 flex flex-col items-start shadow-xl transition-all duration-300 cursor-pointer ${
                      selectedNodeId === node.id 
                        ? 'border-orange-500 ring-1 ring-orange-500/20 shadow-orange-500/5' 
                        : 'border-white/10 hover:border-zinc-700'
                    } ${
                      node.status === 'running' ? 'border-[#FF6C88] animate-pulse duration-1000' : ''
                    } ${
                      node.status === 'success' ? 'border-emerald-500/60 shadow-emerald-500/5' : ''
                    }`}
                  >
                    
                    {/* Floating executions checkpoint checkmarks */}
                    {node.status === 'success' && (
                      <div className="absolute -top-1.5 -right-1.5 text-emerald-400 bg-[#0c0c0e] rounded-full">
                        <CheckCircle2 size={16} className="fill-[#0c0c0e]" />
                      </div>
                    )}
                    {node.status === 'running' && (
                      <div className="absolute -top-1.5 -right-1.5 h-4.5 w-4.5 rounded-full border border-[#FF6C88] border-t-transparent animate-spin bg-[#0c0c0e]" />
                    )}

                    {/* Nodes Connector Ports: Left Input Port */}
                    <div className="absolute left-0 top-1/2 -translate-x-1.5 -translate-y-1/2 h-3 w-3 rounded-full border border-white/20 bg-zinc-950 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                    </div>

                    <div className="flex gap-2.5 items-center w-full">
                      {/* Icon */}
                      <div className="shrink-0">
                        {node.icon}
                      </div>

                      {/* Header values */}
                      <div className="flex flex-col truncate max-w-full">
                        <span className="text-[11px] font-bold text-zinc-100 leading-tight block truncate">
                          {node.name}
                        </span>
                        <span className="text-[9px] text-zinc-500 tracking-wide font-mono mt-0.5 uppercase block truncate">
                          {node.type}
                        </span>
                      </div>
                    </div>

                    {/* Meta info underneath */}
                    <div className="w-full flex items-center justify-between mt-3.5 pt-2 border-t border-white/5">
                      <div className="text-[8px] font-mono font-medium text-zinc-500 select-none">
                        Ref: {node.id.split('-')[0].toUpperCase()}
                      </div>
                      
                      {node.status === 'success' ? (
                        <div className="text-[8.5px] font-mono font-bold text-emerald-400 bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10">
                          {node.executionTime}
                        </div>
                      ) : (
                        <div className="text-[8.5px] font-mono text-zinc-600">
                          Idle
                        </div>
                      )}
                    </div>

                    {/* Nodes Connector Ports: Right Output Port */}
                    <div className="absolute right-0 top-1/2 translate-x-1.5 -translate-y-1/2 h-3 w-3 rounded-full border border-orange-500 bg-zinc-950 flex items-center justify-center hover:bg-orange-500/20 transition-all">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    </div>
                  </div>

                  {/* Curved dynamic connector lines (Curves) */}
                  {i < nodes.length - 1 && (
                    <div className="w-16 h-8 relative select-none pointer-events-none flex items-center justify-center shrink-0">
                      <svg className="absolute overflow-visible w-full h-full" viewBox="0 0 64 32">
                        {/* Static light background line */}
                        <path 
                          d="M 0 16 Q 32 16, 32 16 T 64 16" 
                          stroke="rgba(255, 255, 255, 0.08)" 
                          strokeWidth="2.5" 
                          fill="none" 
                        />
                        {/* Dynamic colorful path segment depending on status */}
                        <path 
                          d="M 0 16 Q 32 16, 32 16 T 64 16" 
                          stroke={
                            node.status === 'success' 
                              ? '#10b981' 
                              : node.status === 'running' 
                                ? '#FF6C88' 
                                : 'rgba(255, 255, 255, 0.08)'
                          } 
                          strokeWidth="2" 
                          fill="none" 
                          className={node.status === 'running' ? 'stroke-dash' : ''}
                        />
                      </svg>
                      
                      {/* Interactive timing flow bubble */}
                      {node.status === 'success' && (
                        <div className="absolute h-3 w-3 rounded-full border border-emerald-400 bg-emerald-500/10 shadow-lg animate-pulse" />
                      )}
                    </div>
                  )}

                </div>
              ))}

            </div>
          </div>

          {/* Right Parameters Console panel split */}
          <div className="w-full lg:w-[350px] bg-[#0e0e11] border-t lg:border-t-0 border-white/5 flex flex-col justify-between shrink-0 p-5 select-none text-left">
            <div>
              {/* Header inside Panel */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/5">
                <Sliders size={14} className="text-orange-500" />
                <span className="text-[11px] font-mono font-bold text-zinc-200 uppercase tracking-widest">
                  Parâmetros do Nó
                </span>
              </div>

              {/* Node Basic Info */}
              <div className="flex items-center gap-3 bg-zinc-900/50 p-2.5 rounded-lg mb-5 border border-white/5">
                <div className="shrink-0">{currentNode.icon}</div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-zinc-100">{currentNode.name}</span>
                  <span className="text-[9px] font-mono text-zinc-400 select-all uppercase">{currentNode.type}</span>
                </div>
              </div>

              {/* Form parameters inputs view */}
              <div className="flex flex-col gap-4 mb-6">
                {currentNode.parameters.map((param, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wide">
                      {param.label}
                    </span>
                    <div className="w-full mt-1.5 px-3 py-2 bg-zinc-950 border border-white/5 rounded-lg font-mono text-[11px] text-zinc-100 overflow-hidden select-all">
                      {param.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Code output label */}
              <div className="flex items-center gap-1.5 mb-2">
                <Braces size={12} className="text-[#FF6C88]" />
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wide">
                  Output JSON (n8n payload)
                </span>
              </div>

              {/* JSON code container */}
              <div className="relative font-mono text-[9px] text-zinc-300 bg-zinc-950 p-3 rounded-lg border border-white/5 max-h-[160px] overflow-y-auto scrollbar-thin select-all">
                <pre className="whitespace-pre">{currentNode.jsonOutput}</pre>
              </div>
            </div>

            {/* Bottom active logging message */}
            <div className="border-t border-white/5 pt-4 mt-6">
              <div className="flex items-center gap-1.5 text-[8.5px] font-mono font-bold text-zinc-500 uppercase mb-2 select-none">
                <Terminal size={11} />
                <span>Sandbox Run Logs:</span>
              </div>
              <div className="bg-zinc-950 p-2 border border-white/5 rounded h-[80px] overflow-y-auto font-mono text-[8.5px] text-zinc-400 leading-normal scrollbar-thin">
                {simulationLog.map((log, index) => (
                  <div key={index} className="mb-0.5 select-text">
                    <span className="text-[#FF6C88] mr-1 select-none">&gt;</span> {log}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Console footer helper summary */}
        <div className="border-t border-white/5 bg-[#0a0a0d] py-3.5 px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-zinc-500 text-center sm:text-left">
          <span>✔ Esteira integrada com o n8n • Sem necessidade de servidor manual dedicado</span>
          <a href="#proposta-sec" className="text-orange-400 font-bold hover:underline select-none">Ver propostas comerciais &rarr;</a>
        </div>
      </div>
    </section>
  );
};
