import React, { useState } from 'react';
import { Share2, BarChart3, Megaphone, Smartphone, Sparkles, Send, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function MarketingHub() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [broadcastComplete, setBroadcastComplete] = useState<string | null>(null);

  const campaigns = [
    { name: 'Twin Cities Launch', reach: '12.4k', ctr: '4.2%', status: 'Active' },
    { name: 'Self-Worth Awareness', reach: '5.1k', ctr: '8.1%', status: 'Scheduled' },
  ];

  const handleBroadcast = async (campaignName: string) => {
    setIsSyncing(true);
    setBroadcastComplete(null);
    try {
      const res = await fetch('/api/broadcast-social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: campaignName, type: 'campaign' }),
      });
      const data = await res.json();
      if (data.success) {
        setBroadcastComplete(campaignName);
        setTimeout(() => setBroadcastComplete(null), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Campaign Control */}
        <div className="lg:col-span-2 p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-[2rem] border border-white/10 backdrop-blur-xl">
          <div className="flex justify-between items-start mb-10">
            <div>
              <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">
                <Megaphone size={12} />
                Global Outreach
              </div>
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">Campaign Engine</h2>
            </div>
            <div className="bg-black/20 px-4 py-2 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40">
               Omni-Channel Active
            </div>
          </div>

          <div className="space-y-4">
            {campaigns.map(c => (
              <div key={c.name} className="p-6 bg-black/40 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-blue-500/30 transition-all">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="font-bold text-lg">{c.name}</div>
                    <div className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase ${c.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/40'}`}>
                      {c.status}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Reach: {c.reach}</span>
                    <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">CTR: {c.ctr}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleBroadcast(c.name)}
                  disabled={isSyncing}
                  className={`px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                    broadcastComplete === c.name ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/20'
                  } disabled:opacity-50`}
                >
                  {isSyncing ? <Zap size={14} className="animate-spin" /> : (broadcastComplete === c.name ? <CheckCircle2 size={14} /> : <Send size={14} />)}
                  {isSyncing ? 'Broadcasting...' : (broadcastComplete === c.name ? 'Broadcast Sent' : 'Broadcast to All')}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insight Sidebar */}
        <div className="space-y-6">
          <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10">
            <div className="flex items-center gap-2 text-pink-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              Campaign Architect
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-pink-600/10 rounded-2xl border border-pink-500/20">
                <div className="text-[10px] font-black text-pink-400 uppercase mb-2">Optimal Posting Time</div>
                <div className="text-xl font-black italic">Today @ 7:45 PM</div>
                <p className="text-[9px] text-white/40 mt-1 uppercase">Twin Cities engagement spikes predicted based on local events.</p>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer">
                <div className="text-[10px] font-black text-white/40 uppercase mb-2">Suggested Audience</div>
                <div className="text-sm font-bold">MSP North Loop / Tech Core</div>
                <p className="text-[9px] text-white/30 mt-1 uppercase italic">High conversion potential identified in residential districts.</p>
              </div>

              <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <BarChart3 size={14} />
                View Detailed Analytics
              </button>

              <div className="mt-8 p-6 bg-gradient-to-br from-indigo-900/50 to-slate-900/50 rounded-[2rem] border border-indigo-500/20">
                <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase mb-4 tracking-widest">
                  <Sparkles size={12} /> Rae's Tone Suggestions
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[9px] font-bold text-white/60 italic">
                    "Suggestion: Use more 'Radical' and 'Unapologetic' keywords in the Twin Cities launch copy."
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[9px] font-bold text-white/60 italic">
                    "Insight: audience resonance peaks when mentioning 'Self-Worth' alongside local landmarks."
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2rem] shadow-2xl">
            <Smartphone className="w-8 h-8 text-white/20 mb-4" />
            <h3 className="font-black italic uppercase text-lg leading-tight mb-2">Mobile First Strategy</h3>
            <p className="text-[10px] font-bold opacity-70 uppercase leading-relaxed">
              Dispatching interactive ad units to 85% of Minneapolis users.
            </p>
          </div>
        </div>

      </div>

      {/* Marketing Preview Gallery */}
      <div className="mt-12 p-10 bg-slate-950/40 rounded-[3rem] border border-white/10 backdrop-blur-3xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white leading-none mb-1">Global Marketing Archive</h2>
            <p className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px]">Previewing all deployed and draft assets</p>
          </div>
          <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
            Refresh Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 1, type: 'Video', title: 'Twin Cities Expansion Reveal', date: 'Oct 24', color: 'text-purple-400' },
            { id: 2, type: 'Audio', title: 'Self-Worth Daily Affirmation', date: 'Oct 22', color: 'text-blue-400' },
            { id: 3, type: 'Script', title: 'MSP Metro Launch Copy', date: 'Oct 20', color: 'text-pink-400' },
          ].map(asset => (
            <div key={asset.id} className="group relative bg-white/5 rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-white/20 transition-all">
              <div className="aspect-video bg-black/40 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="relative z-10 p-4 bg-white/5 rounded-full border border-white/10 group-hover:scale-110 transition-transform">
                   <Share2 className={asset.color} size={24} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${asset.color}`}>{asset.type}</span>
                  <span className="text-[9px] font-bold text-white/20">{asset.date}</span>
                </div>
                <h4 className="text-lg font-black italic uppercase tracking-tight text-white/90 group-hover:text-white transition-colors">{asset.title}</h4>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 py-3 bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Preview</button>
                  <button className="flex-1 py-3 bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Analytics</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
