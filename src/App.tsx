/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { RegionalDashboard } from './components/RegionalDashboard';
import { ClientPortal } from './components/ClientPortal';
import { ContractorPortal } from './components/ContractorPortal';
import { DatabasePortal } from './components/DatabasePortal';
import { Motivation } from './components/Motivation';
import { LaunchCenter } from './components/LaunchCenter';
import { ShopifyDashboard } from './components/ShopifyDashboard';
import { MarketingHub } from './components/MarketingHub';
import { CreativeStudio } from './components/CreativeStudio';
import { AIReceptionist } from './components/AIReceptionist';
import { CompanionNurse } from './components/CompanionNurse';
import { EmployeePortal } from './components/EmployeePortal';
import { LandingPage } from './components/LandingPage';
import { ServiceHub } from './components/ServiceHub';
import { MembershipPaywall } from './components/MembershipPaywall';
import { CarpenterPortal } from './components/CarpenterPortal';

import { Zap, Sparkles, Lock, LogOut, LayoutGrid, ShieldCheck, Users, Hammer, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const mockData = [
  { id: '1', entity: 'Contractor Alpha', location: 'Minneapolis', pulse: 'Green', task: 'Fix', completionRate: 85, activityLevel: 90 },
  { id: '2', entity: 'Client A', location: 'St. Cloud', pulse: 'Red', task: 'Wait', completionRate: 20, activityLevel: 30 },
  { id: '3', entity: 'Contractor Beta', location: 'Annandale', pulse: 'Yellow', task: 'Work', completionRate: 50, activityLevel: 60 },
  { id: '4', entity: 'Contractor Gamma', location: 'Stillwater', pulse: 'Green', task: 'Done', completionRate: 95, activityLevel: 80 },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('services');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [unlockedPortals, setUnlockedPortals] = useState<string[]>([]);

  const toggleUnlock = (id: string) => {
    if (!unlockedPortals.includes(id)) {
      setUnlockedPortals([...unlockedPortals, id]);
    }
  };

  const tabs = [
    { id: 'services', label: 'Services', component: <ServiceHub />, protected: false, icon: LayoutGrid },
    { id: 'employee', label: 'Employee Portal', component: <EmployeePortal />, protected: false, icon: ShieldCheck },
    { id: 'contractor', label: 'Contractor Portal', component: <ContractorPortal />, protected: true, icon: Users },
    { id: 'carpenter', label: 'Carpenter Portal', component: <CarpenterPortal />, protected: true, icon: Hammer },
    { id: 'client', label: 'Client Portal', component: <ClientPortal />, protected: false, icon: Users },
    { id: 'nurse', label: 'Companion Nurse', component: <CompanionNurse />, protected: false, icon: Heart },
    { id: 'reception', label: 'AI Receptionist', component: <AIReceptionist />, protected: false, icon: Sparkles },
  ];

  const currentTab = tabs.find(t => t.id === activeTab);

  if (!isLoggedIn) {
    return <LandingPage onEnter={(tabId) => {
      if (tabId) setActiveTab(tabId);
      setIsLoggedIn(true);
    }} />;
  }

  return (
    <div className="min-h-screen bg-shiny-black text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden pb-24 relative">
      {/* Dynamic Rainbow Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-red-500/5 via-yellow-500/5 to-transparent blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <header className="mb-8 p-6 rounded-3xl rainbow-border shadow-3xl flex flex-col md:flex-row justify-between items-center relative overflow-hidden backdrop-blur-xl">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 flex items-center justify-center shadow-2xl animate-gradient-slow">
                <Zap className="text-white w-8 h-8 animate-pulse" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter uppercase italic leading-none mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Rainbow Rays</h1>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">System Rae v4.0</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest italic">Life Support Active</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-end">
              <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">System Heartbeat</div>
              <div className="flex gap-1 h-4 items-end">
                {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [`${h}%`, `${h * 0.6}%`, `${h}%`] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1 bg-indigo-500/40 rounded-full" 
                  />
                ))}
              </div>
            </div>
            
            <nav className="flex bg-black/40 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md overflow-x-auto scrollbar-hide max-w-2xl">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-white text-black shadow-lg' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon size={12} className={activeTab === tab.id ? 'text-black' : 'text-indigo-400'} />
                  {tab.label}
                  {tab.protected && !unlockedPortals.includes(tab.id) && <Lock size={10} className="opacity-40" />}
                </button>
              ))}
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="ml-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <LogOut size={10} /> Logout
              </button>
            </nav>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <main>
              {currentTab?.protected && !unlockedPortals.includes(currentTab.id) ? (
                <MembershipPaywall portalName={currentTab.label} onUnlock={() => toggleUnlock(currentTab.id)} />
              ) : (
                currentTab?.component
              )}
            </main>
          </div>
          <div className="lg:col-span-1">
            <Motivation />
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] font-black uppercase tracking-[0.2em] gap-4">
          <div>&copy; 2026 Rainbow Rays Inc. // Twin Cities Mega-Hub v4.0.0-PRO</div>
          <div className="flex gap-6">
            <span>Rae Status: ACTIVE</span>
            <span>Security: Quantum Bridge</span>
            <span>Region: MN-STP-HQ</span>
          </div>
        </footer>
      </div>

      {/* Global AI Command Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-50">
        <div className="bg-black/80 backdrop-blur-3xl rainbow-border rounded-[2.5rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-900/40">
            <Sparkles className="text-white animate-pulse" size={24} />
          </div>
          <input 
            type="text" 
            placeholder="Command Rae: 'Optimize dispatch', 'Broadcast update', 'Check vitals'..."
            className="flex-1 bg-transparent border-none text-sm font-bold focus:ring-0 placeholder-white/20"
          />
          <button className="px-8 py-3 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10">
            Execute
          </button>
        </div>
      </div>
    </div>
  );
}
