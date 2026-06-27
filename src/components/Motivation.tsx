import React, { useState } from 'react';

export function Motivation() {
  const [quote, setQuote] = useState('Your existence is a radical act of defiance. Refuse to be diminished. Radiate your full spectrum.');

  const getNewQuote = async () => {
    const response = await fetch('/api/ask-sally', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: 'Give a short, radical, and unapologetic affirmation for self-worth and self-acceptance. Make it bold and slightly intense.' })
    });
    const data = await response.json();
    setQuote(data.response);
  };

  return (
    <div className="space-y-6">
      <div className="p-8 bg-slate-900/80 rounded-[2.5rem] border border-white/10 backdrop-blur-xl text-center shadow-2xl">
        <h3 className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-6 italic">The Unapologetic Node</h3>
        <p className="text-xl font-black italic text-white leading-tight mb-8 h-24 flex items-center justify-center">"{quote}"</p>
        <button 
          onClick={getNewQuote}
          className="w-full py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5"
        >
          Renew Frequency
        </button>
      </div>

      {/* Rae's Resonance Frequency Analysis */}
      <div className="p-6 bg-white/5 rounded-3xl border border-indigo-500/20">
        <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <Sparkles size={12} /> Frequency Analysis
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-black/40 rounded-xl border border-white/5">
          <span className="text-[10px] font-bold text-white/40">Current Resonance</span>
          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">98.4% Peak</span>
        </div>
        <p className="mt-4 text-[10px] font-bold text-white/40 leading-relaxed italic text-center">
          "Rae's Insight: Your atmospheric pressure is stabilizing. No sleep required. The Twin Cities node is listening."
        </p>
      </div>
    </div>
  );
}
