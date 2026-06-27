import React, { useMemo } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Map, Activity, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface PingItem {
  id: string;
  entity: string;
  location: string;
  pulse: 'Green' | 'Yellow' | 'Red';
  task: string;
  completionRate: number;
  activityLevel: number;
}

const TARGET_REGIONS = [
  'Minneapolis', 'Saint Paul', 'Annandale', 'St. Cloud', 
  'Albert Lea', 'Stillwater', 'Bloomington', 'Eden Prairie'
];

export function RegionalDashboard({ data }: { data: PingItem[] }) {
  const filteredData = useMemo(() => {
    return data.filter(item => TARGET_REGIONS.includes(item.location));
  }, [data]);

  const pulseData = useMemo(() => {
    return [
      { name: 'Active', value: filteredData.filter(d => d.pulse === 'Green').length },
      { name: 'Idle', value: filteredData.filter(d => d.pulse === 'Yellow').length },
      { name: 'Alert', value: filteredData.filter(d => d.pulse === 'Red').length },
    ];
  }, [filteredData]);

  const activityData = useMemo(() => {
    return filteredData.map(d => ({ name: d.entity, activity: d.activityLevel }));
  }, [filteredData]);

  const completionData = useMemo(() => {
    return filteredData.map(d => ({ name: d.entity, completion: d.completionRate }));
  }, [filteredData]);

  const COLORS = ['#22c55e', '#eab308', '#ef4444'];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Regional Overview */}
        <div className="lg:col-span-2 p-8 bg-slate-950/60 rounded-[3rem] border border-white/10 backdrop-blur-2xl">
          <div className="flex justify-between items-start mb-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                <Map className="text-indigo-400 w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white leading-none">Regional View</h2>
                <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mt-1">Twin Cities Regional Hub // LIVE</div>
              </div>
            </div>
            <div className="px-4 py-2 bg-indigo-600/10 text-indigo-400 text-[10px] font-black uppercase rounded-full border border-indigo-500/20 flex items-center gap-2">
              <Activity size={12} className="animate-pulse" />
              Real-Time Pulse
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-64 p-6 bg-black/40 rounded-[2rem] border border-white/5 relative">
               <h3 className="text-[10px] font-black uppercase text-white/30 mb-6 tracking-widest">Pulse Overview</h3>
               <div className="w-full h-full pb-8">
                 <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pulseData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} innerRadius={40}>
                      {pulseData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '8px', fontSize: '10px' }} />
                  </PieChart>
                 </ResponsiveContainer>
               </div>
            </div>

            <div className="h-64 p-6 bg-black/40 rounded-[2rem] border border-white/5 relative">
               <h3 className="text-[10px] font-black uppercase text-white/30 mb-6 tracking-widest">Completion Rates</h3>
               <div className="w-full h-full pb-8">
                 <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={completionData}>
                    <XAxis dataKey="name" stroke="#64748b" fontSize={8} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '8px', fontSize: '10px' }} />
                    <Bar dataKey="completion" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                 </ResponsiveContainer>
               </div>
            </div>

            <div className="h-64 p-6 bg-black/40 rounded-[2rem] border border-white/5 col-span-1 md:col-span-2 relative">
               <h3 className="text-[10px] font-black uppercase text-white/30 mb-6 tracking-widest">Activity Velocity</h3>
               <div className="w-full h-full pb-8">
                 <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={activityData}>
                    <XAxis dataKey="name" stroke="#64748b" fontSize={8} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '8px', fontSize: '10px' }} />
                    <Line type="monotone" dataKey="activity" stroke="#ec4899" strokeWidth={3} dot={{ fill: '#ec4899', r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                 </ResponsiveContainer>
               </div>
            </div>
          </div>
        </div>

        {/* Rae's Regional Insights */}
        <div className="space-y-6">
          <div className="p-8 bg-slate-900/80 rounded-[3rem] border border-indigo-500/20 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles size={12} />
              Rae's Regional Insights
            </div>
            
            <div className="space-y-6">
              <div className="p-5 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                <div className="text-[10px] font-black text-indigo-400 uppercase mb-2 flex items-center gap-2">
                  <TrendingUp size={10} /> Market Growth
                </div>
                <p className="text-xs font-bold leading-relaxed text-white/60 italic">
                  "Minneapolis hub is operating at 92% peak efficiency. Recommend rerouting Stillwater surplus to Saint Paul node for 24h."
                </p>
              </div>

              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] font-black text-white/40 uppercase mb-2 flex items-center gap-2">
                  <Zap size={10} /> Latency Alert
                </div>
                <p className="text-xs font-bold leading-relaxed text-white/60 italic">
                  "St. Cloud nodes showing minor sync delay. Cody has been notified to reset local threads."
                </p>
              </div>

              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] font-black text-white/40 uppercase mb-2">Network Health</div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-2">
                  <motion.div initial={{ width: 0 }} animate={{ width: '94%' }} className="h-full bg-indigo-500" />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[8px] font-black text-white/20 uppercase">Global Integrity</span>
                  <span className="text-[8px] font-black text-indigo-400">94%</span>
                </div>
              </div>

              {/* Localized Growth Suggestion */}
              <div className="p-5 bg-gradient-to-br from-pink-500/10 to-transparent rounded-2xl border border-pink-500/20">
                <div className="text-[10px] font-black text-pink-400 uppercase mb-2 flex items-center gap-2">
                  <Heart size={10} /> Community Resonance
                </div>
                <p className="text-xs font-bold leading-relaxed text-white/70 italic">
                  "Suggestion: The Annandale node is reporting high demand for 'Collective Presence' sessions. Deploy extra wellness therapists to the region."
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <h3 className="font-black italic uppercase text-lg leading-tight mb-2 tracking-tighter">Export Intelligence</h3>
            <p className="text-[10px] font-bold opacity-70 uppercase leading-relaxed">
              Generate PDF report of regional performance for headquarters review.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
