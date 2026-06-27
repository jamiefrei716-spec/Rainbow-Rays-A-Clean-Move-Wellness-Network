import React from 'react';
import { Palette, Layers, Image as ImageIcon, Sparkles } from 'lucide-react';
import { MarketingGenerator } from './MarketingGenerator';

export function CreativeStudio() {
  const projects = [
    { name: 'Twin Cities Mural', type: 'Design', progress: 85 },
    { name: 'Rainbow Rays Branding', type: 'Assets', progress: 100 },
    { name: 'Summer Campaign', type: 'Creative', progress: 40 },
  ];

  return (
    <div className="space-y-6 animate-in zoom-in-95 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-3xl border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <Palette className="w-8 h-8 text-pink-400" />
              <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white">RaeStudio Creative</h2>
            </div>
            
            <div className="space-y-6">
              {projects.map(p => (
                <div key={p.name} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-all cursor-pointer group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-bold text-lg group-hover:text-pink-300 transition-colors text-white">{p.name}</div>
                    <div className="text-[10px] bg-white/10 px-2 py-1 rounded-md uppercase font-black tracking-widest text-white/60">{p.type}</div>
                  </div>
                  <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 transition-all duration-1000" 
                      style={{ width: `${p.progress}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prismatic Insight Panel */}
          <div className="p-8 bg-black/40 rounded-[2.5rem] border border-pink-500/20 backdrop-blur-xl">
             <div className="flex items-center gap-2 text-pink-400 text-[10px] font-black uppercase tracking-widest mb-6">
                <Sparkles size={12} /> Rae's Creative Insight
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                   <h4 className="text-[10px] font-black uppercase text-white/40 mb-2">Atmospheric Suggestion</h4>
                   <p className="text-xs font-bold leading-relaxed text-white/70 italic">
                      "Market resonance in MSP is leaning towards 'Obsidian Minimal' with rainbow accents. Adjust Summer Campaign hue saturation by +12%."
                   </p>
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                   <h4 className="text-[10px] font-black uppercase text-white/40 mb-2">Tone Calibration</h4>
                   <p className="text-xs font-bold leading-relaxed text-white/70 italic">
                      "Draft copy for Rainbow Rays Branding: Replace 'Affordable' with 'Invaluable'. Self-worth is not a price point."
                   </p>
                </div>
             </div>
          </div>

          <div className="p-6 border-2 border-dashed border-white/10 rounded-3xl flex items-center justify-center gap-4 text-white/20 opacity-50">
            <Layers className="w-12 h-12" />
            <span className="font-mono text-sm">Asset Library Empty</span>
          </div>
        </div>

        <div className="space-y-6">
          <MarketingGenerator />
        </div>
      </div>
    </div>
  );
}
