import React from 'react';
import { Hammer, Ruler, Box, Sparkles, Zap, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export function CarpenterPortal() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-1000">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-2">
            <Sparkles size={12} />
            Master Crafting Node
          </div>
          <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-tight">Carpenter <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Infrastructure</span></h2>
        </div>
        <div className="px-6 py-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 flex items-center gap-3">
          <Activity size={14} className="text-amber-400 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">8 Active Builds</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-slate-900/60 rounded-[3rem] border border-white/10 backdrop-blur-xl">
          <Hammer className="text-amber-400 w-10 h-10 mb-6" />
          <h3 className="text-xl font-black italic uppercase mb-2 tracking-tight">Project Threads</h3>
          <p className="text-sm text-white/40 font-bold mb-8">Manage structural deployments across the Twin Cities metro.</p>
          <div className="space-y-3">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase">TC-HQ Renovation</span>
              <span className="text-[10px] font-black text-green-400">Phase 3</span>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase">MSP Hub Expansion</span>
              <span className="text-[10px] font-black text-amber-400">Framing</span>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-900/60 rounded-[3rem] border border-white/10 backdrop-blur-xl">
          <Ruler className="text-indigo-400 w-10 h-10 mb-6" />
          <h3 className="text-xl font-black italic uppercase mb-2 tracking-tight">Precision Specs</h3>
          <p className="text-sm text-white/40 font-bold mb-8">Access blueprinted frequencies for high-value client nodes.</p>
          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-2">
            <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} className="h-full bg-indigo-500" />
          </div>
          <div className="flex justify-between text-[10px] font-black uppercase text-white/20">
            <span>Blueprint Accuracy</span>
            <span>75%</span>
          </div>
        </div>

        <div className="p-8 bg-slate-900/60 rounded-[3rem] border border-white/10 backdrop-blur-xl">
          <Box className="text-pink-400 w-10 h-10 mb-6" />
          <h3 className="text-xl font-black italic uppercase mb-2 tracking-tight">Resource Node</h3>
          <p className="text-sm text-white/40 font-bold mb-8">Sync with Shopify inventory for raw materials and hardware.</p>
          <div className="p-4 bg-pink-500/10 rounded-2xl border border-pink-500/20 text-[10px] font-bold italic text-white/60 leading-relaxed">
            "Inventory sync: Cedar lumber stock depleted. Restock scheduled for Tuesday 0800."
          </div>
        </div>
      </div>

      {/* Rae's Structural Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-indigo-600/10 rounded-[3rem] border border-indigo-500/20 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Sparkles size={12} />
            Structural Efficiency Suggestions
          </div>
          <div className="space-y-4">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-black uppercase mb-1">Scaffold Optimization</h4>
                <p className="text-[10px] font-bold text-white/40">Reduces setup time by 15% on the TC-HQ site.</p>
              </div>
              <Zap size={16} className="text-amber-400" />
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-black uppercase mb-1">Load Bearing Calibration</h4>
                <p className="text-[10px] font-bold text-white/40">Recalculate structural nodes for the MSP Hub.</p>
              </div>
              <Activity size={16} className="text-indigo-400" />
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-900/60 rounded-[3rem] border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-widest mb-6">
            <Activity size={12} />
            Site Resonance
          </div>
          <div className="space-y-6">
             <p className="text-xs font-bold leading-relaxed text-white/60 italic">
               "Rae's Site Audit: High noise levels detected at TC-HQ. Recommend ear protection sync and 10-min silence cycles for the team."
             </p>
             <button className="w-full py-4 bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-widest border border-white/10 rounded-2xl transition-all">
                Acknowledge Site Safety
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
