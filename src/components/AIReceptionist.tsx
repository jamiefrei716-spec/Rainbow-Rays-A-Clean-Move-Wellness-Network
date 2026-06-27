import React from 'react';
import { Phone, Users, Calendar, MessageSquare, Bell, Sparkles } from 'lucide-react';

export function AIReceptionist() {
  const visitors = [
    { name: 'John Doe', time: '10:15 AM', purpose: 'Contractor Sync', status: 'Checked In' },
    { name: 'Sarah Miller', time: '11:30 AM', purpose: 'Consultation', status: 'Waiting' },
    { name: 'Albert Johnson', time: '01:00 PM', purpose: 'Inventory Dropoff', status: 'Scheduled' },
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-left-4 duration-500">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 p-8 bg-slate-900 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold uppercase tracking-tighter">Rex // AI Receptionist</h2>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase flex items-center gap-1 border border-indigo-500/20">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" /> Lead Capture
              </div>
              <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[10px] font-black uppercase flex items-center gap-1 border border-green-500/20">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Booking Jobs
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black text-white/30 uppercase tracking-widest px-1">Active Visitor Log</h3>
            {visitors.map(visitor => (
              <div key={visitor.name} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white/20">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold">{visitor.name}</div>
                    <div className="text-xs text-white/40">{visitor.time} // {visitor.purpose}</div>
                    <div className="mt-2 text-[10px] text-indigo-400 font-bold uppercase flex items-center gap-1">
                      <Sparkles size={10} /> Smart Triage: {visitor.purpose === 'Consultation' ? 'Prioritize for booking' : 'Auto-log to CRM'}
                    </div>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded ${visitor.status === 'Checked In' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  {visitor.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-80 space-y-4">
          <div className="p-6 bg-blue-600/10 rounded-3xl border border-blue-500/20 flex flex-col items-center">
            <Calendar className="w-10 h-10 text-blue-400 mb-2" />
            <div className="text-xl font-bold">12 Appointments</div>
            <div className="text-xs text-white/40">Scheduled for today</div>
            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-400 transition-all">
              Manage Queue
            </button>
          </div>

          <div className="p-6 bg-slate-800/50 rounded-3xl border border-white/5 space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-white/30 uppercase tracking-widest">
              <span>Quick Actions</span>
            </div>
            <button className="w-full flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold">Broadcase Announcement</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
              <Bell className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-bold">Mute System Alerts</span>
            </button>
          </div>

          <div className="p-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl text-white shadow-xl">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles size={12} />
              Lead Scoring Engine
            </div>
            <p className="text-xs font-bold opacity-80 mb-6 uppercase leading-relaxed">
              Analyzing Twin Cities lead volume for high-value conversions.
            </p>
            <div className="flex justify-between items-end">
              <div className="text-4xl font-black italic tracking-tighter">94.2%</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Confidence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Rex's Intelligent Lead Insights */}
      <div className="p-8 bg-slate-900/60 rounded-[3rem] border border-green-500/20 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-green-400 text-[10px] font-black uppercase tracking-widest mb-8">
          <Sparkles size={12} />
          Rex's Lead Intelligence
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
            <div className="text-[10px] font-black text-white/40 uppercase mb-2">High-Value Capture</div>
            <p className="text-xs font-bold leading-relaxed text-white/70 italic">
              "Detected 4 leads from Edina with &gt;$5k budget. Rex has auto-assigned priority status and scheduled immediate follow-ups."
            </p>
          </div>
          <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
            <div className="text-[10px] font-black text-white/40 uppercase mb-2">Booking Velocity</div>
            <p className="text-xs font-bold leading-relaxed text-white/70 italic">
              "Booking conversion rate is 22% higher when utilizing Rae's 'Self-Worth' copy node in automated SMS responses."
            </p>
          </div>
          <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
            <div className="text-[10px] font-black text-white/40 uppercase mb-2">CRM Integration</div>
            <p className="text-xs font-bold leading-relaxed text-white/70 italic">
              "System integrity: All leads from last 24 hours synced with Database node. No data leakage detected."
            </p>
          </div>
        </div>

        {/* New Sentiment Suggestions */}
        <div className="mt-8 p-6 bg-green-500/5 rounded-2xl border border-green-500/10">
          <div className="text-[10px] font-black text-green-400 uppercase tracking-[0.2em] mb-4">Sentiment Frequency Analysis</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] font-bold text-white/60">Urgency Level: Low</span>
              <span className="text-[10px] font-black text-blue-400">Match Tone: Gentle</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] font-bold text-white/60">Interest Spike: Wellness</span>
              <span className="text-[10px] font-black text-pink-400">Match Node: Therapy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
