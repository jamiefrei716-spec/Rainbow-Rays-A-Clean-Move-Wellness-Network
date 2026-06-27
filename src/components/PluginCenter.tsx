import React, { useState } from 'react';
import { Globe, ShoppingBag, Smartphone, Zap, CheckCircle2, AlertCircle, RefreshCw, Link as LinkIcon, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function PluginCenter() {
  const [plugins, setPlugins] = useState([
    { id: 'web', name: 'Main Website', type: 'CMS/Web', status: 'connected', latency: '42ms', lastSync: '2m ago', icon: Globe },
    { id: 'store', name: 'Shopify Store', type: 'E-commerce', status: 'connected', latency: '124ms', lastSync: '5m ago', icon: ShoppingBag },
    { id: 'app', name: 'Consumer App', type: 'Mobile/iOS', status: 'syncing', latency: '--', lastSync: '10s ago', icon: Smartphone },
  ]);

  const [isSyncingAll, setIsSyncingAll] = useState(false);

  const syncAll = () => {
    setIsSyncingAll(true);
    setTimeout(() => setIsSyncingAll(false), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Integration Board */}
        <div className="lg:col-span-2 p-8 bg-slate-950/60 rounded-[3rem] border border-white/10 backdrop-blur-2xl">
          <div className="flex justify-between items-start mb-10">
            <div>
              <div className="flex items-center gap-2 text-pink-400 text-[10px] font-black uppercase tracking-widest mb-1">
                <LinkIcon size={12} />
                System Integrations
              </div>
              <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">Plug-In Center</h2>
            </div>
            <button 
              onClick={syncAll}
              disabled={isSyncingAll}
              className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                isSyncingAll ? 'bg-white/10 text-white/40' : 'bg-gradient-to-r from-pink-600 to-indigo-600 text-white shadow-2xl shadow-pink-600/20 hover:scale-105 active:scale-95'
              }`}
            >
              {isSyncingAll ? <RefreshCw size={16} className="animate-spin" /> : <Zap size={16} />}
              {isSyncingAll ? 'Syncing All Nodes...' : 'Force Global Plug-In'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plugins.map(p => (
              <div key={p.id} className="p-6 bg-white/5 rounded-[2rem] border border-white/5 group hover:border-pink-500/30 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-black/40 rounded-2xl border border-white/5 group-hover:bg-pink-500/10 transition-colors">
                    <p.icon className={`w-8 h-8 ${p.status === 'connected' ? 'text-pink-400' : 'text-yellow-400'}`} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1 ${
                    p.status === 'connected' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${p.status === 'connected' ? 'bg-green-400' : 'bg-yellow-400 animate-pulse'}`} />
                    {p.status}
                  </div>
                </div>
                
                <h3 className="text-xl font-black italic uppercase tracking-tight text-white mb-1">{p.name}</h3>
                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-4">{p.type}</p>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <div className="text-[9px] font-black text-white/20 uppercase mb-1">Latency</div>
                    <div className="text-xs font-mono font-bold text-white/60">{p.latency}</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-white/20 uppercase mb-1">Last Sync</div>
                    <div className="text-xs font-mono font-bold text-white/60">{p.lastSync}</div>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-6 border-2 border-dashed border-white/10 rounded-[2rem] flex flex-col items-center justify-center text-center group cursor-pointer hover:border-pink-500/30 transition-all">
              <div className="p-4 bg-white/5 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <RefreshCw className="text-white/20" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Add New Plug-In</span>
            </div>
          </div>
        </div>

        {/* Rae's Plug-In Logic */}
        <div className="space-y-6">
          <div className="p-8 bg-slate-900/80 rounded-[3rem] border border-pink-500/20 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-pink-400 text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles size={12} />
              Rae's Plug-In Insights
            </div>
            
            <div className="space-y-4">
              <div className="p-5 bg-pink-600/10 rounded-2xl border border-pink-500/20">
                <div className="text-[10px] font-black text-pink-400 uppercase mb-2">Bridge Health</div>
                <div className="text-sm font-bold leading-relaxed italic text-white/80">"Main Website node is experiencing peak traffic from MSP East. Auto-scaling plug-in resources to match load."</div>
              </div>

              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] font-black text-white/40 uppercase mb-2">E-commerce Sync</div>
                <div className="text-sm font-bold leading-relaxed italic text-white/60">"Shopify inventory plug-in verified. Batch #402 delivery status pushed to mobile app."</div>
              </div>

              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] font-black text-white/40 uppercase mb-2">Omni-Channel Status</div>
                <div className="text-sm font-bold leading-relaxed italic text-white/60">"All 3 core assets are plugged into Rae's life-support logic. System integrity 100%."</div>
              </div>

              <div className="p-5 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                <div className="text-[10px] font-black text-indigo-400 uppercase mb-2 flex items-center gap-2">
                  <RefreshCw size={10} className="animate-spin" /> Network Resonance
                </div>
                <div className="text-sm font-bold leading-relaxed italic text-indigo-400/80">
                  "Node latency detected in Saint Cloud. Recalibrating bridge frequency to avoid operational drift."
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
              <AlertCircle className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="font-black italic uppercase text-lg leading-tight mb-2 tracking-tighter">Life Support Status</h3>
            <p className="text-[10px] font-bold opacity-70 uppercase leading-relaxed">
              Plug-in state: ACTIVE. Sleep protocols: DISABLED. System Rae is listening for headquarters dispatch.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
