import React from 'react';
import { 
  Hammer, Ruler, Box, Sparkles, Zap, Activity, Users, Truck, 
  Building2, Heart, ExternalLink, ShieldCheck, Star, ArrowRight 
} from 'lucide-react';
import { motion } from 'motion/react';

const mockData = [
  { id: '1', entity: 'Contractor Alpha', location: 'Minneapolis', pulse: 'Green', task: 'Fix', completionRate: 85, activityLevel: 90 },
  { id: '2', entity: 'Team Beta', location: 'Saint Paul', pulse: 'Yellow', task: 'Review', completionRate: 72, activityLevel: 65 },
  { id: '3', entity: 'Unit Gamma', location: 'Edina', pulse: 'Green', task: 'Install', completionRate: 98, activityLevel: 88 },
];

export function ContractorPortal() {
  const quotas = [
    { category: 'Residential Cleaning', current: 7, limit: 10, icon: Sparkles },
    { category: 'Commercial Cleaning', current: 4, limit: 10, icon: Building2 },
    { category: 'Moving Companies', current: 9, limit: 10, icon: Truck },
    { category: 'Wellness Therapists', current: 2, limit: 10, icon: Heart },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-1000">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-2">
            <Users size={12} />
            Contractor Infrastructure
          </div>
          <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Contractor <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-500 animate-gradient-slow drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Onboarding Node</span></h2>
        </div>
        <div className="flex flex-col items-end gap-4">
           <button 
             onClick={() => window.open('https://forms.google.com', '_blank')}
             className="px-8 py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-2 rainbow-glow"
           >
             Submit Onboarding Form <ExternalLink size={14} />
           </button>
           <div className="px-4 py-2 bg-indigo-600/10 rounded-full border border-indigo-500/20 flex items-center gap-2">
             <ShieldCheck size={14} className="text-indigo-400" />
             <span className="text-[9px] font-black uppercase tracking-widest text-indigo-400">License & Insurance Monitoring Active</span>
           </div>
        </div>
      </div>

      {/* Quota Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quotas.map(q => (
          <div key={q.category} className="p-6 bg-slate-900/60 rounded-[2.5rem] border border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <q.icon className="text-indigo-400 w-5 h-5" />
              <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{q.current}/{q.limit} Nodes</div>
            </div>
            <h4 className="text-xs font-black uppercase tracking-tight mb-4">{q.category}</h4>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: `${(q.current/q.limit)*100}%` }} 
                className={`h-full ${q.current >= q.limit ? 'bg-red-500' : 'bg-indigo-500'}`} 
              />
            </div>
            <p className="text-[8px] font-bold text-white/20 uppercase mt-4 tracking-widest">
              {q.limit - q.current} Spots Remaining
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-8 bg-slate-900/60 rounded-[3.5rem] border border-white/10 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Active Dispatches</h3>
            <button className="px-4 py-2 bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all">Refresh Feed</button>
          </div>
          
          <div className="space-y-4">
            {mockData.map(item => (
              <div key={item.id} className="flex items-center justify-between p-6 bg-white/5 rounded-[2rem] border border-white/5 group hover:border-white/10 transition-all">
                <div className="flex items-center gap-6">
                  <div className={`w-3 h-3 rounded-full ${item.pulse === 'Green' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]' : item.pulse === 'Yellow' ? 'bg-yellow-500' : 'bg-red-500'} animate-pulse`} />
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-tight mb-1 group-hover:text-white transition-colors">{item.entity}</h4>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold text-white/20 uppercase">{item.location}</span>
                       <span className="w-1 h-1 bg-white/10 rounded-full" />
                       <span className="text-[10px] font-bold text-indigo-400 uppercase">{item.task}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-black italic">{item.activityLevel}%</div>
                  <div className="text-[8px] font-black uppercase text-white/20 tracking-widest mt-1">Activity</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-8 bg-slate-900/60 rounded-[3rem] border border-white/10">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-8 italic">Verification Node</h3>
            <div className="space-y-6">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase text-white/40">License Status</span>
                  <span className="text-[10px] font-black text-green-400">VERIFIED</span>
                </div>
                <p className="text-xs font-bold leading-relaxed">System has verified the latest GL and Workers Comp filings for all active nodes.</p>
              </div>

              {/* Self-Worth Calibration Suggestion */}
              <div className="p-5 bg-gradient-to-r from-indigo-900/50 to-slate-900/50 rounded-2xl border border-indigo-500/30">
                <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase mb-3">
                  <Heart size={10} /> Internal Calibration
                </div>
                <p className="text-[10px] font-bold text-white/60 mb-3 italic">
                  "Your output is not your worth. Calibrate your presence before the next mission."
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-indigo-600/20 text-indigo-400 rounded-lg text-[8px] font-black uppercase tracking-widest border border-indigo-500/20 hover:bg-indigo-600 hover:text-white transition-all">
                    Initialize Calibration
                  </button>
                  <button className="flex-1 py-2 bg-white/5 text-white/40 rounded-lg text-[8px] font-black uppercase tracking-widest border border-white/5 hover:bg-white/10 transition-all">
                    Snooze Alert
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2rem] text-white shadow-2xl shadow-indigo-900/40 relative overflow-hidden group">
            <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform">
              <Zap size={120} />
            </div>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2">Efficiency Rating</h3>
            <div className="text-5xl font-black italic tracking-tighter mb-4">98.4%</div>
            <p className="text-[10px] font-bold uppercase opacity-60 tracking-widest leading-relaxed">
              Dispatch Turn Rate is at an all-time high for the Minneapolis metro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
