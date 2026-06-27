import React from 'react';
import { User, Bell, ShieldCheck, Sparkles, Calendar, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function ClientPortal() {
  const activities = [
    { id: 1, type: 'Security', detail: 'Biometric lock active', time: '2m ago' },
    { id: 2, type: 'Maintenance', detail: 'HVAC Filter sync complete', time: '1h ago' },
    { id: 3, type: 'Concierge', detail: 'Sally booked a spa appointment', time: '3h ago' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Welcome Card */}
        <div className="lg:col-span-2 p-8 bg-gradient-to-br from-indigo-900/40 to-slate-900/60 rounded-[2rem] border border-white/10 backdrop-blur-xl">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <User className="text-indigo-400 w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-black italic tracking-tighter uppercase">Client Portal</h2>
                <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Minneapolis Premium Tier</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full border-2 border-slate-900" />
              </button>
              <button className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <ShieldCheck size={20} className="text-green-400" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Upcoming Schedule</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-indigo-600/10 rounded-xl border border-indigo-500/20">
                  <Calendar className="text-indigo-400" size={18} />
                  <div>
                    <div className="text-xs font-bold">House Detailing</div>
                    <div className="text-[10px] text-white/40 uppercase">Tomorrow @ 10:00 AM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Active Services</h3>
              <div className="flex gap-2">
                {['Security', 'HVAC', 'Network'].map(s => (
                  <span key={s} className="px-3 py-1 bg-green-500/20 text-green-400 text-[9px] font-black uppercase rounded-full border border-green-500/20">
                    {s} Online
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rae's Resident Intelligence */}
        <div className="space-y-6">
          <div className="p-6 bg-slate-900/80 rounded-[2.5rem] border border-indigo-500/20 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sparkles size={80} />
            </div>
            <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Sparkles size={12} />
              Rae's Intelligence
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                <div className="text-[10px] font-black text-indigo-400 uppercase mb-1">Energy Optimization</div>
                <p className="text-xs font-bold leading-relaxed">System adjusted thermostat for predicted 82°F high in Twin Cities. Estimated saving: $12.40.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] font-black text-white/40 uppercase mb-1">Security Health</div>
                <p className="text-xs font-bold leading-relaxed">Perimeter integrity at 100%. All smart locks synced with mobile device ID.</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-pink-500/10 to-transparent rounded-2xl border border-pink-500/20">
                <div className="text-[10px] font-black text-pink-400 uppercase mb-1">Wellness Sync</div>
                <p className="text-xs font-bold leading-relaxed">Companion Nurse Rae suggests a 5-min cooldown based on your heart rate metrics.</p>
              </div>
            </div>
            <button className="w-full mt-6 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-indigo-600/20">
              Apply All Optimizations
            </button>
          </div>

          <div className="p-6 bg-slate-900/60 rounded-[2.5rem] border border-white/10">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6 italic">Lifestyle Calibration</h3>
            <div className="space-y-4">
               <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold">Sanctuary Peace Level</span>
                  <span className="text-[10px] font-black text-green-400">92%</span>
               </div>
               <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[92%]" />
               </div>
               <p className="text-[9px] font-bold text-white/30 leading-relaxed mt-2 uppercase">
                 "Your environment is currently optimized for radical self-acceptance. No noise pollution detected."
               </p>
            </div>
          </div>

          <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Activity Log</h3>
            <div className="space-y-4">
              {activities.map(a => (
                <div key={a.id} className="flex justify-between items-center text-[10px]">
                  <span className="font-bold text-white/80">{a.detail}</span>
                  <span className="text-white/20 uppercase font-mono">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
