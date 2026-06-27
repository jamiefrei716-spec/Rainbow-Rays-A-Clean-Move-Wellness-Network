import React from 'react';
import { motion } from 'motion/react';
import { Zap, Sparkles, ChevronRight, Shield, Heart, ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onEnter: (tabId?: string) => void;
}

export function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-shiny-black text-white selection:bg-indigo-500/30 overflow-x-hidden relative">
      {/* Background Architecture */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-red-500/5 via-yellow-500/5 to-transparent blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent blur-[150px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 flex items-center justify-center shadow-2xl animate-gradient-slow">
              <Zap className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">Rainbow Rays</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onEnter('client')}
              className="hidden md:block px-5 py-2.5 bg-white/5 text-white/60 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all border border-white/5"
            >
              Client Portal
            </button>
            <button 
              onClick={() => onEnter('contractor')}
              className="hidden md:block px-5 py-2.5 bg-white/5 text-white/60 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all border border-white/5"
            >
              Contractor Portal
            </button>
            <button 
              onClick={() => onEnter('employee')}
              className="px-6 py-3 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10 rainbow-glow"
            >
              Employee Entry
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/10 rounded-full border border-indigo-500/20 mb-8">
              <Sparkles size={14} className="text-indigo-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">The Twin Cities Evolution</span>
            </div>
            <h1 className="text-7xl lg:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/30">
              Self Worth is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-500 animate-gradient-slow drop-shadow-[0_0_20px_rgba(255,0,0,0.2)]">Hostile Takeover.</span>
            </h1>
            <p className="text-xl text-white/40 font-bold max-w-xl leading-relaxed mb-12">
              Acceptance isn't a gentle wave; it's a structural collapse of the mirrors that lied to you. We don't just provide services—we build the bridge to your unapologetic frequency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onEnter('client')}
                className="px-10 py-5 bg-white text-black rounded-[2rem] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl rainbow-glow flex items-center gap-3"
              >
                Client Entry <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => onEnter('contractor')}
                className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3"
              >
                Contractor Hub <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl relative">
              <img 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
                alt="Prismatic Self" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="p-8 bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="text-pink-500 fill-pink-500" size={20} />
                    <span className="text-xs font-black uppercase tracking-widest">Rule #1: Presence</span>
                  </div>
                  <p className="text-lg font-black italic uppercase tracking-tight">"The first step to acceptance is burning the map someone else drew for you."</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-12 -right-12 p-8 bg-indigo-600 rounded-[3rem] shadow-3xl border border-white/20 hidden lg:block">
              <div className="text-4xl font-black italic tracking-tighter mb-1">99.2%</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Frequency Alignment</div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-4">The Architecture of Worth</h2>
            <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Four Nodes of Radical Existence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Pulse Activation', desc: 'Real-time synchronization with your internal value metrics.' },
              { icon: Shield, title: 'Quantum Shielding', desc: 'Blocking external noise that dilutes your narrative.' },
              { icon: Heart, title: 'Prismatic Flow', desc: 'Direct access to high-frequency self-acceptance nodes.' },
              { icon: Sparkles, title: 'Infinite Loop', desc: 'A perpetual cycle of unapologetic growth and presence.' },
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-indigo-500/40 transition-all group"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-600/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <f.icon className="text-indigo-400 w-8 h-8" />
                </div>
                <h3 className="text-xl font-black italic uppercase tracking-tight mb-4">{f.title}</h3>
                <p className="text-sm text-white/40 font-bold leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="relative p-16 lg:p-24 rainbow-border rounded-[4rem] overflow-hidden text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                { title: 'The Mirror Rule', desc: 'Shatter every reflection that does not recognize your sovereign light.' },
                { title: 'The Space Mandate', desc: 'You are required to take up more room than you were taught was polite.' },
                { title: 'The Frequency Vow', desc: 'Never lower your vibration to make others feel comfortable.' },
                { title: 'The Radical Yes', desc: 'A total, unapologetic affirmation of your present form.' },
              ].map((rule, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10 text-left">
                  <div className="text-indigo-400 text-[10px] font-black uppercase mb-3">Protocol 0{i+1}</div>
                  <h4 className="text-sm font-black uppercase mb-2">{rule.title}</h4>
                  <p className="text-[10px] font-bold text-white/40 leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase leading-none mb-8">Ready to Burn the Map?</h2>
              <p className="text-lg text-white/60 font-bold mb-12 leading-relaxed">
                Join the Twin Cities movement that's rewriting the laws of presence. The rays are waiting.
              </p>
              <button className="px-12 py-6 bg-white text-black rounded-[2.5rem] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
                Initialize Connection
              </button>
            </div>
          </div>
        </section>

        <footer className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] font-black uppercase tracking-[0.2em] gap-8">
          <div>&copy; 2026 Rainbow Rays Inc. // The Future of Presence</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Manifesto</a>
            <a href="#" className="hover:text-white transition-colors">Nodes</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
