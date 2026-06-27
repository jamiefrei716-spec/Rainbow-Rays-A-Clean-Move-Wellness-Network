import React, { useState } from 'react';
import { LayoutDashboard, Users, Database, Rocket, Link2, ShoppingCart, Map, ChevronRight, Activity, ShieldCheck, Zap, Globe, Palette, Megaphone } from 'lucide-react';
import { motion } from 'motion/react';
import { OperationsHub } from './OperationsHub';
import { RegionalDashboard } from './RegionalDashboard';
import { ContractorPortal } from './ContractorPortal';
import { DatabasePortal } from './DatabasePortal';
import { LaunchCenter } from './LaunchCenter';
import { PluginCenter } from './PluginCenter';
import { ShopifyDashboard } from './ShopifyDashboard';
import { WorkspaceHub } from './WorkspaceHub';
import { CreativeStudio } from './CreativeStudio';
import { MarketingHub } from './MarketingHub';

const mockData = [
  { id: '1', entity: 'Contractor Alpha', location: 'Minneapolis', pulse: 'Green', task: 'Fix', completionRate: 85, activityLevel: 90 },
  { id: '2', entity: 'Client A', location: 'St. Cloud', pulse: 'Red', task: 'Wait', completionRate: 20, activityLevel: 30 },
  { id: '3', entity: 'Contractor Beta', location: 'Annandale', pulse: 'Yellow', task: 'Work', completionRate: 50, activityLevel: 60 },
  { id: '4', entity: 'Contractor Gamma', location: 'Stillwater', pulse: 'Green', task: 'Done', completionRate: 95, activityLevel: 80 },
];

export function EmployeePortal() {
  const [activeView, setActiveView] = useState('ops');

  const menuItems = [
    { id: 'ops', label: 'Operations Hub', icon: LayoutDashboard, component: <OperationsHub /> },
    { id: 'hub', label: 'Regional View', icon: Map, component: <RegionalDashboard data={mockData as any} /> },
    { id: 'contractor', label: 'Contractor Portal', icon: Users, component: <ContractorPortal /> },
    { id: 'db', label: 'Database Terminal', icon: Database, component: <DatabasePortal /> },
    { id: 'launch', label: 'Launch Center', icon: Rocket, component: <LaunchCenter /> },
    { id: 'plugin', label: 'Plug-In Center', icon: Link2, component: <PluginCenter /> },
    { id: 'creative', label: 'Creative Studio', icon: Palette, component: <CreativeStudio /> },
    { id: 'marketing', label: 'Marketing Hub', icon: Megaphone, component: <MarketingHub /> },
    { id: 'shopify', label: 'Shopify Admin', icon: ShoppingCart, component: <ShopifyDashboard /> },
    { id: 'workspace', label: 'Workspace Hub', icon: Globe, component: <WorkspaceHub /> },
  ];

  const currentView = menuItems.find(i => i.id === activeView);

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-left-4 duration-700">
      {/* Sidebar Navigation */}
      <aside className="lg:w-72 space-y-4">
        <div className="p-6 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="p-2 bg-indigo-600 rounded-xl">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-tighter italic">Employee Portal</h3>
              <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none mt-1">Staff Access v1.2</div>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${
                  activeView === item.id 
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-900/40' 
                    : 'text-white/40 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} className={activeView === item.id ? 'text-white' : 'text-white/20 group-hover:text-indigo-400'} />
                  <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                </div>
                <ChevronRight size={14} className={activeView === item.id ? 'opacity-100' : 'opacity-0'} />
              </button>
            ))}
          </nav>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="p-6 bg-slate-900/80 rounded-[2.5rem] border border-white/5">
          <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Activity size={12} />
            Staff Pulse
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black uppercase text-white/40">Network Load</span>
              <span className="text-xs font-bold">14%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
               <motion.div initial={{ width: 0 }} animate={{ width: '14%' }} className="h-full bg-indigo-500" />
            </div>
            
            <div className="flex justify-between items-end mt-6">
              <span className="text-[10px] font-black uppercase text-white/40">Active Dispatchers</span>
              <span className="text-xs font-bold text-green-400">12 LIVE</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-pink-400 text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles size={12} />
              Rae's Directives
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[10px] font-bold leading-relaxed text-white/60 italic">
                "Priority: Sync Annandale hub inventory with Shopify node. Latency spike detected."
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[10px] font-bold leading-relaxed text-white/60 italic">
                "Rotation schedule optimized for 2 PM peak. 100% contractor coverage confirmed."
              </div>
              <div className="p-3 bg-indigo-600/10 rounded-xl border border-indigo-500/20 text-[10px] font-bold leading-relaxed text-indigo-400 italic">
                "Suggestion: Employee morale calibration required. Initiate a 5-minute 'Radical Presence' session for the team."
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Viewport */}
      <main className="flex-1 min-w-0">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{currentView?.label}</h2>
            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mt-1">Management View // {currentView?.id}</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-indigo-600/10 rounded-full border border-indigo-500/20">
            <Zap size={14} className="text-indigo-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Low Latency Channel</span>
          </div>
        </div>
        
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {currentView?.component}
        </div>
      </main>
    </div>
  );
}
