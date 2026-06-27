import React from 'react';
import { Database, Terminal, Shield, Zap, Sparkles, Server, Cpu, HardDrive } from 'lucide-react';
import { motion } from 'motion/react';

export function DatabasePortal() {
  const serverMetrics = [
    { label: 'CPU Load', value: '14%', icon: Cpu, color: 'text-blue-400' },
    { label: 'Memory', value: '4.2GB', icon: HardDrive, color: 'text-purple-400' },
    { label: 'Uptime', value: '99.9%', icon: Shield, color: 'text-green-400' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Terminal View */}
        <div className="lg:col-span-2 p-8 bg-slate-950/80 rounded-[3rem] border border-white/10 backdrop-blur-2xl shadow-3xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-2xl border border-green-500/20">
                <Terminal className="text-green-400 w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white leading-none">Database Terminal</h2>
                <div className="text-[10px] font-black text-green-500 uppercase tracking-widest mt-1">MSP_REGION_ALPHA // CORE_SYNC</div>
              </div>
            </div>
            <div className="px-4 py-2 bg-green-500/10 text-green-400 text-[10px] font-black uppercase rounded-full border border-green-500/20 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
              Live Query Access
            </div>
          </div>

          <div className="bg-black/60 p-8 rounded-[2rem] border border-white/5 font-mono text-sm leading-relaxed overflow-hidden relative">
            <div className="absolute top-4 right-6 text-[10px] font-black text-white/10 uppercase tracking-widest">Read-Only Session</div>
            <pre className="text-green-500/80">
              {`> CONNECT msp_hub_v4
> AUTHENTICATING... [OK]
> FETCHING NODE STATUS...

> SELECT * FROM ping_grid WHERE region = 'Twin Cities';
+----------------+-------------+--------+----------+
| node_id        | location    | pulse  | threads  |
+----------------+-------------+--------+----------+
| tc_alpha_01    | Minneapolis | GREEN  | 12       |
| tc_beta_02     | Saint Paul  | GREEN  | 8        |
| tc_gamma_03    | Bloomington | YELLOW | 4        |
+----------------+-------------+--------+----------+

> regional_status: 24/7 ONLINE
> active_threads: 24
> sally_status: READY
> cody_status: READY
> raebot_status: OK
> INITIALIZING LAUNCH SEQUENCE...
> system_check: PASSED
> carrier_signal: LOCKED
> deployment_target: MSP_REGION_ALPHA
> status: STANDBY FOR USER INITIATION`}
            </pre>
          </div>
        </div>

        {/* System Health / Rae's Insights */}
        <div className="space-y-6">
          <div className="p-8 bg-slate-900/80 rounded-[3rem] border border-green-500/20 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-green-400 text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles size={12} />
              Rae's System Insights
            </div>
            
            <div className="space-y-6">
              {serverMetrics.map(m => (
                <div key={m.label} className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <m.icon className={`w-5 h-5 ${m.color}`} />
                    <span className="text-[10px] font-black uppercase text-white/40 tracking-widest">{m.label}</span>
                  </div>
                  <span className="text-sm font-black italic">{m.value}</span>
                </div>
              ))}

              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="p-4 bg-green-500/10 rounded-2xl border border-green-500/20">
                  <div className="text-[10px] font-black text-green-400 uppercase mb-2 flex items-center gap-2">
                    <Shield size={10} /> Data Integrity
                  </div>
                  <p className="text-xs font-bold leading-relaxed text-white/60 italic">
                    "Database synchronization between Minneapolis and Saint Paul is at 100% parity. All contractor tasks verified."
                  </p>
                </div>
                <div className="p-4 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                  <div className="text-[10px] font-black text-indigo-400 uppercase mb-2 flex items-center gap-2">
                    <Sparkles size={10} /> Structural Calibration
                  </div>
                  <p className="text-xs font-bold leading-relaxed text-white/60 italic">
                    "Suggestion: Archive regional logs from Q1 to free up 12% compute frequency. Resonance levels are peak for Q3 deployment."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-green-600 to-emerald-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <Zap className="absolute -bottom-6 -right-6 text-white/10 w-40 h-40 group-hover:scale-110 transition-transform" />
            <h3 className="font-black italic uppercase text-lg leading-tight mb-2 tracking-tighter">Emergency Dump</h3>
            <p className="text-[10px] font-bold opacity-70 uppercase leading-relaxed">
              Flush system cache and reset regional threads. Requires Level 4 access.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
