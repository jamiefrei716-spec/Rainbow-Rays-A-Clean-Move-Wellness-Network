import React from 'react';
import { Rocket, CheckCircle2, ShieldCheck, Zap, Sparkles, Activity, Gauge } from 'lucide-react';
import { motion } from 'motion/react';

export function LaunchCenter() {
  const checklist = [
    { id: 1, task: 'Twin Cities Regional Grid Synced', status: 'ready' },
    { id: 2, task: 'AI Sally (Concierge) Active', status: 'ready' },
    { id: 3, task: 'Contractor Dispatch Portal Secure', status: 'ready' },
    { id: 4, task: 'Self-Worth Affirmation Engine Online', status: 'ready' },
    { id: 5, task: 'Global Pulse Monitoring Live', status: 'pending' },
  ];

  return (
    <div className="space-y-6 animate-in zoom-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Readiness Checklist */}
        <div className="lg:col-span-2 p-10 bg-slate-950/80 rounded-[3rem] border border-white/10 backdrop-blur-2xl shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Rocket size={200} />
          </div>
          
          <div className="flex items-center gap-6 mb-12 relative z-10">
            <div className="p-4 bg-white/5 rounded-3xl border border-white/10 shadow-xl">
              <Rocket className="w-12 h-12 text-yellow-400" />
            </div>
            <div>
              <h2 className="text-4xl font-black italic tracking-tighter uppercase text-white leading-none mb-1">Launch Control</h2>
              <p className="text-white/40 font-black uppercase tracking-[0.3em] text-[10px]">Rainbow Rays Global Deployment Sequence</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-black uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                  <ShieldCheck size={14} /> Pre-Launch Verification
                </h3>
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">v3.1.2</span>
              </div>
              <div className="space-y-3">
                {checklist.map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.id} 
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all"
                  >
                    <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{item.task}</span>
                    {item.status === 'ready' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-dashed border-indigo-500/40 animate-spin" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center p-8 bg-gradient-to-br from-indigo-600/10 to-pink-600/10 rounded-[2.5rem] border border-white/10 relative group">
              <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
              <Zap className="w-20 h-20 text-yellow-400 mb-6 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]" />
              <h3 className="text-3xl font-black mb-2 tracking-tighter italic uppercase">MISSION: GO</h3>
              <p className="text-center text-xs font-bold text-white/50 mb-8 uppercase leading-relaxed px-4">
                Twin Cities mega-hub is pressurized. All regional nodes reporting stable status for global dispatch.
              </p>
              <button className="w-full py-5 bg-white text-indigo-950 rounded-[2rem] font-black uppercase text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10">
                Initiate Sequence
              </button>
            </div>
          </div>
        </div>

        {/* Rae's Probability Analysis */}
        <div className="space-y-6">
          <div className="p-8 bg-slate-900/80 rounded-[3rem] border border-indigo-500/20 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles size={12} />
              Rae's Mission Probability
            </div>
            
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-white/5"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={440}
                    strokeDashoffset={440 - (440 * 0.992)}
                    className="text-indigo-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black italic tracking-tighter">99.2%</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Success</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] font-black text-indigo-400 uppercase mb-2 flex items-center gap-2">
                  <Activity size={10} /> Market Stability
                </div>
                <p className="text-xs font-bold leading-relaxed">Local MSP market conditions optimized for expansion. Competitive interference at seasonal lows.</p>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] font-black text-white/40 uppercase mb-2 flex items-center gap-2">
                  <Gauge size={10} /> Resource Velocity
                </div>
                <p className="text-xs font-bold leading-relaxed">Contractor availability is 15% above predicted baseline for the 2 PM operational window.</p>
              </div>

              {/* Mission Calibration Node */}
              <div className="p-5 bg-indigo-600/10 rounded-2xl border border-indigo-500/30">
                <div className="text-[10px] font-black text-indigo-400 uppercase mb-3 flex items-center gap-2">
                  <Sparkles size={10} /> Rae's Calibration Suggestion
                </div>
                <p className="text-[10px] font-bold text-white/60 leading-relaxed italic">
                  "Detected atmospheric turbulence in the St. Cloud sector. Recommend delaying the 2 PM dispatch by 12 minutes to ensure frequency stabilization."
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-pink-600 to-rose-600 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <Activity className="w-8 h-8 text-white/20 mb-4" />
            <h3 className="font-black italic uppercase text-xl leading-tight mb-2 tracking-tighter">Emergency Override</h3>
            <p className="text-[10px] font-bold opacity-70 uppercase leading-relaxed">
              Manual shutdown of regional nodes. Only for critical failure states.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
