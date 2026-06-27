import React from 'react';
import { ShoppingBag, TrendingUp, Package, Users, Sparkles, ArrowUpRight, ShoppingCart } from 'lucide-react';

export function ShopifyDashboard() {
  const stats = [
    { label: 'Today Revenue', value: '$4,285.40', trend: '+12.5%', icon: ShoppingBag, color: 'text-green-400' },
    { label: 'Active Carts', value: '142', trend: '+24%', icon: ShoppingCart, color: 'text-indigo-400' },
    { label: 'Total Orders', value: '1,894', trend: '+5.2%', icon: Package, color: 'text-pink-400' },
    { label: 'New Customers', value: '84', trend: '+18%', icon: Users, color: 'text-blue-400' },
  ];

  const stores = [
    { id: 1, name: 'Main Retail', sales: '$12,450', orders: 142, status: 'Online' },
    { id: 2, name: 'Wholesale Hub', sales: '$8,200', orders: 45, status: 'Online' },
    { id: 3, name: 'Exclusive Drops', sales: '$2,100', orders: 28, status: 'Maintenance' },
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-right-10 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.label} className="p-6 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-md hover:bg-slate-900/80 transition-all">
            <div className="flex justify-between items-start mb-4">
              <s.icon className={`w-6 h-6 ${s.color}`} />
              <div className="flex items-center text-[10px] font-black text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                <ArrowUpRight size={10} className="mr-1" /> {s.trend}
              </div>
            </div>
            <div className="text-2xl font-black italic tracking-tighter mb-1">{s.value}</div>
            <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-8 bg-gradient-to-br from-emerald-900/20 to-indigo-900/20 rounded-[2rem] border border-white/10 backdrop-blur-xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
              <h2 className="text-3xl font-black italic tracking-tighter uppercase">Sales Momentum</h2>
            </div>
            <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              Live Feed // MSP Region
            </div>
          </div>
          
          <div className="h-64 flex items-end gap-2 px-4">
            {[45, 67, 43, 89, 56, 78, 92, 45, 67, 34, 56, 89, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-white/5 rounded-t-lg relative group transition-all hover:bg-emerald-500/20">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500 to-indigo-500 rounded-t-lg transition-all duration-1000"
                  style={{ height: `${h}%` }}
                />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-[10px] font-black px-2 py-1 rounded">
                  ${(h * 120).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-black text-white/20 uppercase tracking-widest">
            <span>08:00</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-slate-900/80 rounded-[2rem] border border-emerald-500/20 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              Shopify AI Insights
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] font-black text-emerald-400 uppercase mb-1">Inventory Alert</div>
                <div className="text-xs font-bold leading-relaxed">Stock up on "MSP Winter Gear" — 85% probability of sell-out next week.</div>
              </div>
              
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] font-black text-indigo-400 uppercase mb-1">Revenue Predictor</div>
                <div className="text-xs font-bold leading-relaxed">Projected $12,400 weekend volume based on local weather forecast.</div>
              </div>

              <div className="p-4 bg-pink-500/10 rounded-2xl border border-pink-500/20">
                <div className="text-[10px] font-black text-pink-400 uppercase mb-1 flex items-center gap-2">
                  <TrendingUp size={10} /> Commercial Resonance
                </div>
                <div className="text-xs font-bold leading-relaxed text-white/70 italic">
                  "Rae's Insight: Twin Cities 'Wellness' sales are up 40%. Recommend bundling the 'Radical Presence' kit with all residential cleanings."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
