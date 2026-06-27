import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Brush, Truck, Heart, Package, ArrowRight, Zap, Star } from 'lucide-react';

export function ServiceHub() {
  const services = [
    {
      id: 'cleaning',
      title: 'Cleaning Portal',
      desc: 'Surgical precision for your sanctuary. We remove the physical and energetic clutter that dilutes your frequency.',
      icon: Brush,
      color: 'from-blue-500 to-cyan-500',
      features: ['Prismatic Sterilization', 'Energetic Dusting', 'Unapologetic Order']
    },
    {
      id: 'moving',
      title: 'Moving Portal',
      desc: 'Seamless migration of your existence. We handle the heavy lifting while you focus on your new alignment.',
      icon: Truck,
      color: 'from-purple-500 to-indigo-500',
      features: ['Quantum Logistics', 'Careful Transition', 'Radical Relocation']
    },
    {
      id: 'wellness',
      title: 'Wellness Portal',
      desc: 'The center of self-acceptance. A dedicated node for your physical, mental, and spiritual calibration.',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      features: ['Frequency Healing', 'Acceptance Therapy', 'Vitality Sync']
    },
    {
      id: 'bundle',
      title: 'Bundle Service',
      desc: 'The ultimate expansion. A synchronized integration of all Rainbow Rays services into one radical lifestyle node.',
      icon: Package,
      color: 'from-amber-500 to-orange-500',
      features: ['Global Integration', 'Priority Dispatch', 'Unified Presence']
    }
  ];

  const handleBookService = async (serviceName: string) => {
    // In a real implementation, this would open a calendar picker or redirect to a booking URL
    alert(`Initializing Google Calendar Sync for ${serviceName}...`);
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-2">
            <Sparkles size={12} />
            Service Architecture
          </div>
          <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Radical <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-500 animate-gradient-slow drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Existence Nodes</span></h2>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="max-w-md text-sm text-white/40 font-bold leading-relaxed italic text-right">
            "Each portal is a bridge to a version of you that refuses to apologize for taking up space."
          </p>
          <div className="px-4 py-2 bg-indigo-600/10 rounded-full border border-indigo-500/20 flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
             <span className="text-[9px] font-black uppercase tracking-widest text-indigo-400">Google Calendar Sync Active</span>
          </div>
        </div>
      </div>

      {/* Request for Service Form Trigger */}
      <div className="p-8 rainbow-border rounded-[3rem] backdrop-blur-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-gradient-to-br from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-2xl shadow-xl animate-gradient-slow">
              <Star className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none">New Service Request</h3>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Property Intake // Scope of Work</p>
            </div>
          </div>
          <button 
            onClick={() => window.open('https://forms.google.com', '_blank')}
            className="px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-3 rainbow-glow"
          >
            Open Intake Form <ExternalLink size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-slate-900/60 rounded-[3rem] border border-white/10 overflow-hidden hover:border-white/20 transition-all p-10"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
            
            <div className="flex items-start justify-between mb-8">
              <div className={`p-5 rounded-[2rem] bg-gradient-to-br ${service.color} shadow-2xl`}>
                <service.icon className="text-white w-8 h-8" />
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} className="text-amber-500 fill-amber-500" />)}
                </div>
                <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Top Rated Node</span>
              </div>
            </div>

            <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">{service.title}</h3>
            <p className="text-sm text-white/40 font-bold leading-relaxed mb-8 h-12">
              {service.desc}
            </p>

            <div className="space-y-3 mb-10">
              {service.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/60">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  {f}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => handleBookService(service.title)}
                className="flex-1 py-5 bg-white text-black rounded-[1.5rem] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                Book via Calendar <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rae's Intelligence & Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-indigo-600/10 rounded-[3rem] border border-indigo-500/20 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Sparkles size={12} />
            Frequency Suggestions
          </div>
          <div className="space-y-4">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all cursor-pointer">
              <div>
                <h4 className="text-sm font-black uppercase mb-1">North Loop Calibration</h4>
                <p className="text-[10px] font-bold text-white/40">Highly requested in your zip code this week.</p>
              </div>
              <button className="p-2 bg-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all cursor-pointer">
              <div>
                <h4 className="text-sm font-black uppercase mb-1">Twilight Wellness Session</h4>
                <p className="text-[10px] font-bold text-white/40">Best for evening decompression and acceptance.</p>
              </div>
              <button className="p-2 bg-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-900/60 rounded-[3rem] border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-widest mb-6">
            <Activity size={12} />
            Market Resonance
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                <span>Self-Acceptance Velocity</span>
                <span className="text-indigo-400">+22.4%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[78%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                <span>Sanctuary Integrity</span>
                <span className="text-green-400">Stable</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[92%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rae's Bundle Logic */}
      <div className="p-12 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[4rem] border border-white/10 relative overflow-hidden">
        <Zap className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-black italic tracking-tighter uppercase leading-none mb-6">The Omnipresent <br /> Bundle</h3>
            <p className="text-white/60 font-bold leading-relaxed mb-8">
              Why fragment your presence? The bundle node synchronizes Cleaning, Moving, and Wellness into a singular, unapologetic rhythm. One bill, one frequency, infinite worth.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black italic tracking-tighter">$999<span className="text-sm opacity-40">/MO</span></div>
              <button className="px-8 py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
                Claim Total Presence
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase text-indigo-400 mb-2">Benefit 01</div>
              <div className="text-sm font-bold">Priority Dispatch</div>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase text-indigo-400 mb-2">Benefit 02</div>
              <div className="text-sm font-bold">Quantum Backup</div>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase text-indigo-400 mb-2">Benefit 03</div>
              <div className="text-sm font-bold">24/7 Wellness Sync</div>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase text-indigo-400 mb-2">Benefit 04</div>
              <div className="text-sm font-bold">Infinite Revisions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
