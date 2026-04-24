import React from 'react';

export default function AdminOrders() {
  return (
    <div className="p-4 sm:p-8 lg:p-12 space-y-8 lg:space-y-12 max-w-[1600px] mx-auto animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_10px_rgba(255,77,0,0.5)]"></div>
            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em]">Fulfillment Pipeline</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-on-surface tracking-tighter font-headline">ORDER <span className="text-secondary">TRACKING.</span></h1>
          <p className="text-on-surface-variant text-xs sm:text-sm font-medium opacity-60">Global transaction logs and real-time shipping telemetry.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
          {['ALL', 'PROCESSING', 'SHIPPED', 'DELIVERED'].map((filter, i) => (
            <button key={i} className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-secondary text-white shadow-[0_0_20px_rgba(255,77,0,0.2)]' : 'bg-white/5 border border-white/10 text-on-surface-variant hover:text-on-surface hover:bg-white/10'}`}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Grid */}
      <div className="bg-surface-container border border-white/5 rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[700px] lg:min-w-0">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="px-6 lg:px-10 py-6 uppercase tracking-[0.2em] text-[9px] font-black text-on-surface-variant opacity-40">Registry ID</th>
                <th className="px-6 lg:px-10 py-6 uppercase tracking-[0.2em] text-[9px] font-black text-on-surface-variant opacity-40">Customer Entity</th>
                <th className="px-6 lg:px-10 py-6 uppercase tracking-[0.2em] text-[9px] font-black text-on-surface-variant opacity-40">Asset Unit</th>
                <th className="px-6 lg:px-10 py-6 uppercase tracking-[0.2em] text-[9px] font-black text-on-surface-variant opacity-40">Status Protocol</th>
                <th className="hidden lg:table-cell px-10 py-6 uppercase tracking-[0.2em] text-[9px] font-black text-on-surface-variant opacity-40">Operational Value</th>
                <th className="px-6 lg:px-10 py-6 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { id: '#ORD-9942', customer: 'Elias Jensen', initials: 'EJ', model: 'Aero-X Mk.III', sub: 'Carbon Fiber Edition', status: 'SHIPPED', color: 'secondary', price: '$12,499.00' },
                { id: '#ORD-9941', customer: 'Marcus Webb', initials: 'MW', model: 'Velocita STR', sub: 'Matte Obsidian Finish', status: 'PROCESSING', color: 'primary', price: '$8,250.00' },
                { id: '#ORD-9940', customer: 'Sarah Chen', initials: 'SC', model: 'Titan-X Endurance', sub: 'Titanium Frame', status: 'DELIVERED', color: 'success', price: '$14,100.00' },
                { id: '#ORD-9939', customer: 'Riley Lucas', initials: 'RL', model: 'Aero-X Mk.III', sub: 'Performance Pro Pack', status: 'SHIPPED', color: 'secondary', price: '$12,499.00' },
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-white/[0.03] transition-colors">
                  <td className="px-6 lg:px-10 py-6 font-black text-secondary text-[13px] sm:text-sm tracking-tight">{row.id}</td>
                  <td className="px-6 lg:px-10 py-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-${row.color}/10 border border-${row.color}/20 flex items-center justify-center text-[9px] sm:text-[10px] font-black text-${row.color} shadow-inner flex-shrink-0`}>
                        {row.initials}
                      </div>
                      <span className="font-bold text-on-surface tracking-tight text-[13px] sm:text-base whitespace-nowrap">{row.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 lg:px-10 py-6">
                    <div className="flex flex-col">
                      <span className="font-black text-on-surface tracking-tight text-[13px] sm:text-base whitespace-nowrap">{row.model}</span>
                      <span className="text-[9px] sm:text-[10px] text-on-surface-variant font-bold uppercase tracking-widest opacity-40 whitespace-nowrap">{row.sub}</span>
                    </div>
                  </td>
                  <td className="px-6 lg:px-10 py-6">
                    <span className={`inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[8px] sm:text-[9px] font-black tracking-widest bg-${row.color}/10 text-${row.color} border border-${row.color}/20 uppercase whitespace-nowrap`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="hidden lg:table-cell px-10 py-6 text-sm font-black text-on-surface tracking-tighter">{row.price}</td>
                  <td className="px-6 lg:px-10 py-6 text-right">
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px]">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {[
          { label: 'Revenue Velocity', val: '$248,500', trend: '+12.5%', icon: 'show_chart', color: 'primary' },
          { label: 'Active Fulfillment', val: '42 Units', trend: 'Next: 2h', icon: 'inventory', color: 'secondary' },
          { label: 'Customer Trust', val: '94.8', trend: 'Top 1%', icon: 'star', color: 'success' }
        ].map((stat, i) => (
          <div key={i} className={`bg-surface-container border border-white/5 p-8 lg:p-10 rounded-[30px] lg:rounded-[40px] relative overflow-hidden group ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
            <div className={`absolute top-0 right-0 w-40 h-40 bg-${stat.color} opacity-[0.03] blur-[80px] rounded-full -mr-20 -mt-20`}></div>
            <div className="relative z-10 space-y-4 sm:space-y-6">
              <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-background border border-white/5 rounded-xl lg:rounded-2xl flex items-center justify-center text-${stat.color} shadow-inner`}>
                <span className="material-symbols-outlined text-[24px] lg:text-[28px]">{stat.icon}</span>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] lg:text-[10px] font-black text-on-surface-variant uppercase tracking-[0.4em] opacity-40">{stat.label}</p>
                <h3 className="text-3xl lg:text-4xl font-black text-on-surface font-headline tracking-tighter">{stat.val}</h3>
              </div>
              <p className={`text-[9px] lg:text-[10px] font-black text-${stat.color} uppercase tracking-widest`}>{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
