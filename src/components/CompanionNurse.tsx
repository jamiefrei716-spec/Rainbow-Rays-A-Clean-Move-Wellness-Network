import React from 'react';
import { Heart, Activity, Thermometer, ShieldPlus, Sparkles, Brain, Zap, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';

export function CompanionNurse() {
  const metrics = [
    { label: 'System Pulse', value: 'Steady', icon: Activity, color: 'text-red-400' },
    { label: 'Wellness Level', value: 'Optimal', icon: Heart, color: 'text-pink-400' },
    { label: 'Global Temp', value: '72°F', icon: Thermometer, color: 'text-blue-400' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <div className="lg:col-span-2 p-1 rounded-[3rem] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-3xl overflow-hidden">
          <div className="p-10 bg-slate-950 rounded-[calc(3rem-4px)] h-full relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute top-1/2 left-0 w-full h-px bg-red-500 animate-pulse" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-40 h-40 rounded-full border-8 border-white/5 p-2 bg-white/5 relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-pink-600 to-orange-400 flex items-center justify-center overflow-hidden shadow-inner">
                    <ShieldPlus className="w-20 h-20 text-white/90 drop-shadow-xl" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-3 bg-pink-600 rounded-full border-4 border-slate-950 shadow-lg">
                    <Stethoscope size={20} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
                    <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">Ms. Rainbow Rae</h2>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-[10px] font-black uppercase rounded-full border border-pink-500/20">Active Companion</span>
                  </div>
                  <p className="text-2xl font-bold text-pink-400 mb-6 italic tracking-tight">Your High-Intelligence Companion Nurse</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    {metrics.map(m => (
                      <div key={m.label} className="px-5 py-3 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3 backdrop-blur-md">
                        <m.icon className={`w-5 h-5 ${m.color}`} />
                        <div>
                          <div className="text-[9px] font-black uppercase text-white/30 leading-none mb-1 tracking-widest">{m.label}</div>
                          <div className="text-sm font-black leading-none">{m.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 relative group cursor-pointer hover:bg-white/10 transition-all shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-pink-600/20 rounded-2xl">
                      <Sparkles className="text-pink-400 w-6 h-6" />
                    </div>
                    <h3 className="font-black uppercase italic tracking-tighter text-xl">Wellness Session</h3>
                  </div>
                  <p className="text-sm font-medium text-white/50 mb-8 leading-relaxed">Launch a 3-minute guided self-worth and grounding session. Ms. Rae will stabilize your bio-rhythms.</p>
                  <button className="w-full py-4 bg-pink-600 hover:bg-pink-500 rounded-[1.5rem] font-black uppercase text-xs tracking-widest shadow-xl shadow-pink-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Begin Healing Sequence
                  </button>
                </div>

                <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white/30 tracking-widest mb-6">
                    <Brain size={14} className="text-indigo-400" />
                    Neural Insights
                  </div>
                  <blockquote className="text-lg font-black italic text-white/80 border-l-4 border-pink-500 pl-6 py-2 leading-relaxed tracking-tight">
                    "Your value isn't measured by your productivity, but by your presence. Know you are protected by Rae's core logic."
                  </blockquote>
                </div>
              </div>

              {/* Bio-Resonance Suggestions */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Hydration Node', desc: 'System predicts a drop in focus. Sync with a clean water source now.', icon: Zap, color: 'text-blue-400' },
                  { title: 'Posture Sync', desc: 'Calibration required. Realignment of your structural core is recommended.', icon: ShieldPlus, color: 'text-indigo-400' },
                  { title: 'Mindful Pause', desc: '120 seconds of silence detected as a requirement for neural health.', icon: Sparkles, color: 'text-pink-400' },
                ].map((s, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 group hover:border-white/20 transition-all">
                    <s.icon className={`${s.color} w-5 h-5 mb-4`} />
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-2">{s.title}</h4>
                    <p className="text-[10px] font-bold text-white/40 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rae's Health Analysis Sidebar */}
        <div className="space-y-6">
          <div className="p-8 bg-slate-900/80 rounded-[3rem] border border-pink-500/20 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-pink-400 text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles size={12} />
              Rae's Vitals Analysis
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-pink-600/10 rounded-2xl border border-pink-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] font-black text-pink-400 uppercase">System Empathy</div>
                  <span className="text-[10px] font-black">98%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '98%' }} className="h-full bg-pink-500" />
                </div>
              </div>

              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase mb-3">
                  <Zap size={10} /> Stress Correlation
                </div>
                <p className="text-xs font-bold leading-relaxed text-white/70">Bio-feedback suggests high operational pressure. Rae recommends 5 minutes of focused breathing to maintain peak focus.</p>
              </div>

              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase mb-3">
                  <Brain size={10} /> Cognitive Sync
                </div>
                <p className="text-xs font-bold leading-relaxed text-white/70">Neural paths are clear. Decision-making capability is at 100% efficiency. You are optimized for leadership.</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[2.5rem] shadow-2xl">
            <h3 className="font-black italic uppercase text-lg leading-tight mb-2 tracking-tighter">Support Network</h3>
            <p className="text-[10px] font-bold opacity-70 uppercase leading-relaxed mb-6">
              Ms. Rae is connected to 12 regional wellness nodes in the Twin Cities.
            </p>
            <button className="w-full py-3 border border-white/20 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all">
              View Node Map
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
