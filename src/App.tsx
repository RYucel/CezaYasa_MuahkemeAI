/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  Scale, 
  ChevronRight, 
  Gavel, 
  ShieldCheck, 
  AlertTriangle, 
  XCircle, 
  Info,
  Menu,
  LayoutDashboard,
  BrainCircuit,
  MessageSquareQuote,
  CheckCircle2
} from 'lucide-react';
import { AI_MODELS, ARTICLES, type AIModel } from './constants';

export default function App() {
  const [selectedAiId, setSelectedAiId] = useState<string>('consensus');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const selectedAi = useMemo(() => 
    AI_MODELS.find(m => m.id === selectedAiId) || null
  , [selectedAiId]);

  const StatusIcon = ({ status }: { status: AIModel['consensus'][string] }) => {
    switch (status) {
      case 'compatible': return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'conflict': return <XCircle className="w-4 h-4 text-[#E63946]" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-amber-600" />;
      default: return <Info className="w-4 h-4 text-slate-400" />;
    }
  };

  const StatusBadge = ({ status }: { status: AIModel['consensus'][string] }) => {
    const config = {
      compatible: { label: 'UYUM', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      conflict: { label: 'AYKIRI', bg: 'bg-[#E63946] text-white border-[#E63946]' },
      warning: { label: 'RİSK', bg: 'bg-amber-50 text-amber-700 border-amber-200' },
      neutral: { label: 'NÖTR', bg: 'bg-slate-50 text-slate-700 border-slate-200' }
    }[status];

    return (
      <span className={`px-2 py-0.5 text-[9px] font-black tracking-tighter border ${config.bg}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="flex h-screen bg-editorial-bg text-editorial-text font-sans overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-white border-r border-editorial-border flex flex-col relative z-20"
      >
        <div className="p-8 border-b border-editorial-border">
          {isSidebarOpen ? (
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-black tracking-[0.2em] text-[#E63946]">Archive</span>
              <h1 className="text-2xl font-serif font-black tracking-tighter leading-none">
                LegalAI <span className="italic">Matrix</span>
              </h1>
            </div>
          ) : (
            <Scale className="w-6 h-6 mx-auto text-[#E63946]" />
          )}
        </div>

        <nav className="flex-1 py-6 flex flex-col gap-0.5 overflow-y-auto">
          <button
            onClick={() => setSelectedAiId('consensus')}
            className={`flex items-center gap-4 px-8 py-3 transition-all relative ${
              selectedAiId === 'consensus' 
                ? 'bg-[#1A1A1A] text-white' 
                : 'text-[#666] hover:bg-slate-50'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 shrink-0" />
            {isSidebarOpen && <span className="font-bold text-xs uppercase tracking-widest">Global Matrix</span>}
            {selectedAiId === 'consensus' && isSidebarOpen && (
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#E63946]" />
            )}
          </button>

          <div className={`text-[9px] font-black text-[#999] uppercase tracking-[0.3em] mt-8 mb-4 px-8 ${isSidebarOpen ? '' : 'text-center opacity-0'}`}>
            Intelligence Models
          </div>
          {AI_MODELS.map((model, idx) => (
            <button
              key={model.id}
              onClick={() => setSelectedAiId(model.id)}
              className={`flex items-center gap-4 px-8 py-4 transition-all relative group ${
                selectedAiId === model.id 
                  ? 'bg-white text-editorial-text' 
                  : 'text-[#888] hover:bg-slate-50'
              }`}
            >
              <div className="relative">
                <BrainCircuit className={`w-5 h-5 shrink-0 ${selectedAiId === model.id ? 'text-[#E63946]' : ''}`} />
                <span className="absolute -top-2 -right-2 text-[8px] font-mono font-bold opacity-40">0{idx + 1}</span>
              </div>
              {isSidebarOpen && (
                <div className="text-left overflow-hidden">
                  <div className="font-serif font-bold text-sm tracking-tight">{model.name}</div>
                  <div className="text-[9px] uppercase tracking-wider font-bold opacity-60 mt-1">v{model.version} Analysis</div>
                </div>
              )}
              {selectedAiId === model.id && isSidebarOpen && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E63946]" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-editorial-border">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center gap-3 w-full group"
          >
            <div className="p-2 border border-editorial-border group-hover:border-editorial-text transition-colors">
              <Menu className="w-4 h-4" />
            </div>
            {isSidebarOpen && <span className="text-[10px] font-black uppercase tracking-widest text-[#999]">Control Panel</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-editorial-bg">
        <header className="p-10 border-b border-editorial-border flex justify-between items-end bg-white">
          <div>
            <h1 className="text-5xl font-serif font-black tracking-tighter leading-none mb-3">
              Constitutional <span className="text-[#E63946]">Conflict</span> Matrix
            </h1>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#666]">
              KKTC Ceza Muhakemeleri Usulü (Değişiklik) Yasa Tasarısı Analizi • 4 Bağımsız Rapor
            </p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-mono text-[#999] uppercase tracking-widest">Status: Comparative Evaluation</p>
            <p className="text-[10px] font-mono text-[#999] uppercase tracking-widest">Snapshot: 2026.05.05</p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto relative scroll-smooth">
          <AnimatePresence mode="wait">
            {selectedAiId === 'consensus' ? (
              <motion.div
                key="consensus-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-editorial-border min-h-full">
                  {/* Summary Column */}
                  <div className="p-10 bg-white space-y-12">
                    <div>
                      <span className="px-2 py-1 bg-editorial-text text-white text-[10px] font-black uppercase tracking-tighter">Abstract</span>
                      <h2 className="text-3xl font-serif font-black mt-4 leading-none">Global Summary</h2>
                      <p className="text-sm leading-relaxed mt-6 text-[#444] font-medium">
                        Dört yapay zeka modelinin ortak analizi, tasarının kişi özgürlüğünü genişleten maddelerini olumlarken, basın özgürlüğünü kısıtlayan 23B maddesi üzerinde ciddi anayasal aykırılık uyarısı vermektedir.
                      </p>
                    </div>

                    <div className="space-y-6 pt-10 border-t border-editorial-border">
                       <h3 className="text-xs font-black uppercase tracking-widest text-[#E63946]">Temel Bulgular</h3>
                       <div className="space-y-4">
                         <div className="flex gap-3 items-start">
                           <div className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                           <p className="text-xs font-bold leading-snug uppercase">Kişi Onuru: Tam Uyum</p>
                         </div>
                         <div className="flex gap-3 items-start">
                           <div className="w-1 h-1 rounded-full bg-[#E63946] mt-1.5 shrink-0" />
                           <p className="text-xs font-bold leading-snug uppercase">Basın Özgürlüğü: Ciddi İhlal</p>
                         </div>
                         <div className="flex gap-3 items-start">
                           <div className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                           <p className="text-xs font-bold leading-snug uppercase">Yetki Devri: Yüksek Risk</p>
                         </div>
                       </div>
                    </div>
                  </div>

                  {/* Table Content Column (Spans 3 on desktop) */}
                  <div className="lg:col-span-3 bg-[#F9F9F9] p-0">
                    <div className="sticky top-0 bg-white border-b border-editorial-border px-10 py-6 z-10 flex justify-between items-center">
                       <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#999]">Maddeler Bazında Analiz</h3>
                       <div className="flex gap-4">
                         <div className="flex items-center gap-1.5 grayscale opacity-50">
                           <div className="w-2 h-2 bg-emerald-500" />
                           <span className="text-[9px] font-black uppercase tracking-widest">Uyum</span>
                         </div>
                         <div className="flex items-center gap-1.5 grayscale opacity-50">
                           <div className="w-2 h-2 bg-[#E63946]" />
                           <span className="text-[9px] font-black uppercase tracking-widest">Aykırılık</span>
                         </div>
                       </div>
                    </div>
                    
                    <div className="p-10">
                      <table className="w-full border-collapse border border-editorial-border bg-white shadow-2xl shadow-black/5">
                        <thead>
                          <tr className="border-b-2 border-editorial-text">
                            <th className="p-6 text-[10px] font-black uppercase tracking-[0.1em] text-[#666] border-r border-editorial-border">Madde</th>
                            {AI_MODELS.map(model => (
                              <th key={model.id} className="p-6 text-[10px] font-black uppercase tracking-[0.1em] text-center border-r border-editorial-border last:border-r-0">
                                {model.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-editorial-border">
                          {ARTICLES.map((article) => (
                            <tr key={article} className="hover:bg-slate-50 transition-colors">
                              <td className="p-6 border-r border-editorial-border">
                                <span className="font-serif font-black text-xl italic text-editorial-text">{article}</span>
                              </td>
                              {AI_MODELS.map(model => (
                                <td key={model.id} className="p-6 text-center border-r border-editorial-border last:border-r-0">
                                  <div className="flex flex-col items-center gap-2">
                                    <StatusIcon status={model.consensus[article]} />
                                    <StatusBadge status={model.consensus[article]} />
                                  </div>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={selectedAiId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-10 lg:p-20"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-2 mb-8">
                    <span className="px-3 py-1 bg-[#E63946] text-white text-[10px] font-black uppercase tracking-tighter">Detailed Analysis Report</span>
                    <div className="h-[1px] flex-1 bg-editorial-border" />
                  </div>
                  
                  <div className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div>
                        <span className="text-xs font-mono text-[#999] uppercase tracking-widest mb-2 block">Intelligence Unit {AI_MODELS.findIndex(m => m.id === selectedAiId) + 1}</span>
                        <h2 className="text-6xl font-serif font-black tracking-tight leading-none text-editorial-text">{selectedAi?.name}</h2>
                      </div>
                      <div className="text-right border-l md:border-l-0 md:border-r border-editorial-border md:pr-6 pl-6 md:pl-0">
                        <p className="text-[10px] font-black uppercase tracking-widest">{selectedAi?.author}</p>
                        <p className="text-[10px] font-mono text-[#999] mt-1">ENGINE: v{selectedAi?.version}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-12 lg:p-20 shadow-2xl border border-editorial-border relative">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#E63946]" />
                    <div className="prose prose-slate max-w-none markdown-body">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {selectedAi?.content || ''}
                      </ReactMarkdown>
                    </div>
                  </div>

                  <div className="mt-16 flex justify-between items-center border-t border-dashed border-editorial-border pt-8">
                     <p className="text-[9px] font-black text-[#999] uppercase tracking-widest">End of Intelligence Briefing</p>
                     <p className="text-[9px] font-mono text-[#999]">{new Date().toISOString()}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <footer className="h-14 bg-white border-t border-editorial-border flex items-center px-8 justify-between text-[10px] font-black uppercase tracking-[0.2em] text-[#999]">
          <div className="flex gap-8">
            <span>Archive Ref: #TRNC-CMU-2024</span>
            <span className="hidden md:inline">Source: LegalAI Matrix Dataset</span>
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-emerald-500"></div>
              <span>Uyum</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-[#E63946]"></div>
              <span>Aykırılık</span>
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        .markdown-body {
          font-family: 'Inter', sans-serif;
        }
        .markdown-body h1, .markdown-body h2, .markdown-body h3 {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          color: #1A1A1A;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .markdown-body h1 { font-size: 2.75rem; line-height: 1; }
        .markdown-body h2 { font-size: 2rem; border-bottom: 2px solid #1A1A1A; padding-bottom: 0.5rem; display: inline-block; }
        .markdown-body h3 { font-size: 1.5rem; border-left: 4px solid #E63946; padding-left: 1rem; }
        .markdown-body p { margin-bottom: 1.5rem; font-size: 1.1rem; line-height: 1.7; color: #333; }
        .markdown-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 3rem 0;
          font-size: 0.85rem;
          background: #ffffff;
          border: 1px solid #DEDEDE;
        }
        .markdown-body th {
          background: #1A1A1A;
          padding: 1rem;
          text-align: left;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: #ffffff;
        }
        .markdown-body td {
          padding: 1.25rem 1rem;
          border-bottom: 1px solid #DEDEDE;
          vertical-align: top;
          font-weight: 500;
        }
        .markdown-body strong { font-weight: 900; color: #1A1A1A; }
        .markdown-body blockquote {
          border-left: none;
          background: #1A1A1A;
          color: #fff;
          padding: 2rem;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.5rem;
          margin: 3rem 0;
          rotate: -0.5deg;
        }
        .markdown-body hr { border: none; border-top: 1px solid #DEDEDE; margin: 4rem 0; }
      `}</style>
    </div>
  );
}
