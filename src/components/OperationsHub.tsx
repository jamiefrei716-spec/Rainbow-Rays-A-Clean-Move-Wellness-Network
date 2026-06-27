import React, { useState, useEffect } from 'react';
import { Settings, Activity, Clock, Users, Zap, RotateCw, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function OperationsHub() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dispatchRate, setDispatchRate] = useState(50);
  const [rotation, setRotation] = useState(100);
  const [isLeadCaptureActive, setLeadCaptureActive] = useState(true);
  const [isBookingJobs, setBookingJobs] = useState(true);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const fetchSuggestions = async () => {
    setLoadingSuggestions(true);
    try {
      const res = await fetch('/api/rae-suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dispatchRate, rotation }),
      });
      const data = await res.json();
      setSuggestions(data.suggestions || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, [dispatchRate, rotation]);

  const applySuggestion = (suggestion: string) => {
    // Simulate applying the suggestion
    console.log(`Applying Suggestion: ${suggestion}`);
    // In a real app, this would trigger backend changes
  };

  const currentHour = currentTime.getHours();
  // Request specified: "Start system at 2 pm" (14:00)
  const isScheduledTime = currentHour >= 14;

  return (
    <div className="space-y-6 animate-in fade-in zoom-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Core Control Panel */}
        <div className="lg:col-span-2 p-8 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2rem] border border-white/10 shadow-3xl">
          <div className="flex justify-between items-start mb-10">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                <Activity size={12} className="animate-pulse" />
                Live Mission Control
              </div>
              <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">Operations Hub</h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-mono font-bold text-white/80">
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </div>
              <div className={`text-[10px] font-bold uppercase py-1 px-3 rounded-full mt-2 inline-block ${isScheduledTime ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30'}`}>
                {isScheduledTime ? 'Operational Phase Active' : 'Pre-Shift Sync'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dispatch Control */}
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Zap className="text-yellow-400" size={18} />
                  <span className="text-sm font-bold uppercase tracking-wider">Dispatch Load</span>
                </div>
                <span className="text-2xl font-black text-indigo-400">{dispatchRate}%</span>
              </div>
              <input 
                type="range" 
                min="0" max="100" 
                value={dispatchRate} 
                onChange={(e) => setDispatchRate(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <p className="text-[10px] text-white/40 uppercase font-bold italic">Targeting stabilized flow for Twin Cities routes.</p>
            </div>

            {/* Rotation Monitoring */}
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <RotateCw className="text-pink-500" size={18} />
                  <span className="text-sm font-bold uppercase tracking-wider">Rotation Cycles</span>
                </div>
                <span className="text-2xl font-black text-pink-500">{rotation}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-lg overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${rotation}%` }}
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
                />
              </div>
              <p className="text-[10px] text-white/40 uppercase font-bold italic">Full 100% rotation capability engaged.</p>
            </div>

            {/* Lead Capture Toggle */}
            <div className={`p-6 rounded-2xl border transition-all duration-500 ${isLeadCaptureActive ? 'bg-indigo-600/20 border-indigo-500/30' : 'bg-white/5 border-white/5'}`}>
              <div className="flex justify-between items-center mb-4">
                <Users className={isLeadCaptureActive ? 'text-indigo-400' : 'text-white/20'} size={24} />
                <button 
                  onClick={() => setLeadCaptureActive(!isLeadCaptureActive)}
                  className={`w-12 h-6 rounded-full relative transition-colors ${isLeadCaptureActive ? 'bg-indigo-500' : 'bg-white/10'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${isLeadCaptureActive ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="font-bold uppercase tracking-tight text-sm">Lead Capture System</div>
              <div className="text-[10px] text-white/40">Real-time prospecting active in Minneapolis.</div>
            </div>

            {/* Booking Toggle */}
            <div className={`p-6 rounded-2xl border transition-all duration-500 ${isBookingJobs ? 'bg-green-600/20 border-green-500/30' : 'bg-white/5 border-white/5'}`}>
              <div className="flex justify-between items-center mb-4">
                <ShieldCheck className={isBookingJobs ? 'text-green-400' : 'text-white/20'} size={24} />
                <button 
                  onClick={() => setBookingJobs(!isBookingJobs)}
                  className={`w-12 h-6 rounded-full relative transition-colors ${isBookingJobs ? 'bg-green-500' : 'bg-white/10'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${isBookingJobs ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="font-bold uppercase tracking-tight text-sm">Automated Booking</div>
              <div className="text-[10px] text-white/40">Direct-to-calendar workforce dispatching.</div>
            </div>
          </div>
        </div>

        {/* System Health / Right Sidebar */}
        <div className="space-y-6">
          <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 rounded-full border-8 border-indigo-500/20 border-t-indigo-500 flex items-center justify-center mb-4 relative">
              <span className="text-3xl font-black italic">{dispatchRate}%</span>
              <div className="absolute inset-0 border-2 border-white/5 rounded-full" />
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-2">Target Dispatch Turn</div>
            <p className="text-[10px] text-white/30 leading-relaxed uppercase font-bold italic px-4">
              Optimizing turn-rate to {dispatchRate}% for maximum efficiency during peak 2 PM window.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 rounded-[2rem] rainbow-border backdrop-blur-xl">
            <div className="flex items-center gap-2 text-pink-400 text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles size={12} />
              Rae's Mission Calibration
            </div>
            <div className="space-y-3">
              {loadingSuggestions ? (
                <div className="flex items-center gap-2 text-white/20 text-[10px] uppercase font-bold py-4">
                  <RotateCw size={14} className="animate-spin" />
                  Analyzing market context...
                </div>
              ) : (
                suggestions.map((s, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => applySuggestion(s)}
                    className="p-3 bg-white/5 rounded-xl border border-white/5 text-[10px] text-white/70 font-bold uppercase italic leading-tight cursor-pointer hover:bg-pink-500/10 hover:border-pink-500/30 transition-all flex items-center justify-between group"
                  >
                    <span>• {s}</span>
                    <Zap size={10} className="text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))
              )}
            </div>
            {!loadingSuggestions && (
               <div className="mt-4 p-3 bg-indigo-600/10 rounded-xl border border-indigo-500/20">
                  <p className="text-[9px] font-black text-indigo-400 uppercase mb-1">Global Directive</p>
                  <p className="text-[10px] font-bold text-white/60 italic leading-relaxed">
                    "When head, respond to client. System Rae is maintaining active life support for all MSP nodes."
                  </p>
               </div>
            )}
          </div>

          <div className="p-6 bg-indigo-600 rounded-[2rem] text-white shadow-2xl shadow-indigo-600/20">
            <h3 className="font-black uppercase italic tracking-tighter text-xl mb-4">Daily Manifesto</h3>
            <p className="text-xs leading-relaxed font-bold opacity-80 uppercase">
              "When you hear Rae, respond to context. No sleep. Life support system active. Dispatching 100% rotations starting now."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
