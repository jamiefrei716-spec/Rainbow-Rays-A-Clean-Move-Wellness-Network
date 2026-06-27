import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Check, Zap, Sparkles, Lock, ArrowRight } from 'lucide-react';

interface Tier {
  name: string;
  price: string;
  features: string[];
  color: string;
}

interface MembershipPaywallProps {
  portalName: string;
  onUnlock: () => void;
}

export function MembershipPaywall({ portalName, onUnlock }: MembershipPaywallProps) {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const tiers: Tier[] = [
    {
      name: 'Apprentice Node',
      price: '199.99',
      color: 'border-blue-500/20 text-blue-400 bg-blue-500/5',
      features: ['Basic Dispatch Access', 'Regional Visibility', 'Weekly Sync']
    },
    {
      name: 'Journeyman Node',
      price: '399.99',
      color: 'border-indigo-500/20 text-indigo-400 bg-indigo-500/5',
      features: ['Priority Dispatch', 'Advanced Analytics', 'Daily Frequency Sync', '24/7 Support']
    },
    {
      name: 'Master Craftsman',
      price: '599.99',
      color: 'border-pink-500/20 text-pink-400 bg-pink-500/5',
      features: ['Unlimited Threads', 'Quantum Logistics', 'Rae AI Dedicated Sub-Node', 'Global Priority']
    },
    {
      name: 'Architect of Presence',
      price: '799.99',
      color: 'border-amber-500/20 text-amber-400 bg-amber-500/5',
      features: ['Full Infrastructure Access', 'White-Label Portals', 'Board Level Insights', 'Infinite Scaling']
    }
  ];

  return (
    <div className="p-12 rainbow-border rounded-[4rem] backdrop-blur-3xl animate-in fade-in zoom-in duration-700">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600/10 rounded-full border border-indigo-500/20 mb-8">
          <Lock size={16} className="text-indigo-400" />
          <span className="text-xs font-black uppercase tracking-widest text-indigo-400">Restricted Access Node</span>
        </div>
        <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-4 leading-none">The {portalName} <br /> <span className="text-white/20">Requires Initialization</span></h2>
        <p className="max-w-xl mx-auto text-white/40 font-bold leading-relaxed">
          To maintain the high-frequency integrity of this portal, a verified membership tier is required. Select your node density to proceed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {tiers.map((tier, i) => (
          <motion.button
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedTier(tier.name)}
            className={`p-8 rounded-[2.5rem] border transition-all text-left group relative overflow-hidden ${
              selectedTier === tier.name 
                ? `${tier.color} border-current ring-2 ring-current` 
                : 'border-white/5 bg-white/5 hover:border-white/20'
            }`}
          >
            {selectedTier === tier.name && (
               <div className="absolute top-6 right-6">
                 <div className="w-6 h-6 bg-current rounded-full flex items-center justify-center">
                   <Check className="text-black w-4 h-4" />
                 </div>
               </div>
            )}
            
            <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">{tier.name}</div>
            <div className="text-4xl font-black italic tracking-tighter mb-8 text-white">
              <span className="text-sm opacity-40 italic">$</span>
              {tier.price}
              <span className="text-xs opacity-40 uppercase tracking-widest font-bold"> /mo</span>
            </div>

            <div className="space-y-3 mb-8">
              {tier.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-[10px] font-bold text-white/60">
                  <Check size={10} className="text-current" />
                  {f}
                </div>
              ))}
            </div>

            <div className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
              Select Tier <ArrowRight size={12} />
            </div>
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-8">
        <button 
          onClick={onUnlock}
          disabled={!selectedTier}
          className="px-16 py-6 bg-white text-black rounded-[2.5rem] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl disabled:opacity-20 disabled:scale-100"
        >
          Initialize Access
        </button>

        <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/20">
          <div className="flex items-center gap-2"><Shield size={12} /> Encrypted</div>
          <div className="flex items-center gap-2"><Zap size={12} /> Instant Access</div>
          <div className="flex items-center gap-2"><Sparkles size={12} /> Rae Verified</div>
        </div>
      </div>
    </div>
  );
}
