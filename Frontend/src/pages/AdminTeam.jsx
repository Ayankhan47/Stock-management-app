import React from 'react';

export default function AdminTeam() {
  return (
    <div className="p-4 sm:p-8 lg:p-12 space-y-8 lg:space-y-12 max-w-[1600px] mx-auto animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Human Capital Terminal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-on-surface tracking-tighter font-headline">ELITE <span className="text-primary">SQUAD.</span></h1>
          <p className="text-on-surface-variant text-xs sm:text-sm font-medium opacity-60">Manage your high-performance roster of technicians and sales mechanics.</p>
        </div>
        <button className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary text-background rounded-2xl font-black text-[10px] sm:text-[11px] uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:scale-105 transition-all active:scale-95">
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          Initialize New Operator
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div className="bg-surface-container border border-white/5 p-8 lg:p-10 rounded-[30px] lg:rounded-[40px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-[0.03] blur-[60px] rounded-full -mr-16 -mt-16"></div>
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.4em] opacity-40">Active Personnel</p>
          <div className="mt-6 lg:mt-8 flex items-baseline gap-4">
            <h3 className="text-5xl lg:text-6xl font-black text-on-surface tracking-tighter">24</h3>
            <span className="text-[10px] font-black text-success uppercase tracking-widest">+2 New Synced</span>
          </div>
        </div>
        
        <div className="md:col-span-2 bg-surface-container border border-white/5 p-8 lg:p-10 rounded-[30px] lg:rounded-[40px] relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.4em] opacity-40 relative z-10">Departmental Efficiency</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-6 lg:mt-8 relative z-10">
            {[
              { label: 'Sales Mechanics', val: '92%' },
              { label: 'Technicians', val: '98%' },
              { label: 'Logistics Hub', val: '85%' }
            ].map((dept, i) => (
              <div key={i} className="space-y-1">
                <p className="text-[9px] font-black text-primary uppercase tracking-widest opacity-60">{dept.label}</p>
                <p className="text-2xl lg:text-3xl font-black text-on-surface tracking-tighter">{dept.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Personnel Roster */}
      <div className="space-y-6 lg:space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/5 pb-6 gap-6">
          <h4 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.5em] opacity-40">Operational Roster</h4>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {['ALL OPERATORS', 'TECHNICIANS', 'SALES'].map((f, i) => (
              <button key={i} className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all whitespace-nowrap ${i === 0 ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>{f}</button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { name: 'ERIK VANDERHOFF', role: 'Lead Technical Engineer', email: 'e.vanderhoff@kinetic.tech', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop', status: 'ACTIVE' },
            { name: 'SARAH JENKINS', role: 'Senior Sales Strategist', email: 's.jenkins@kinetic.bike', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop', status: 'ON BREAK' },
            { name: 'LEON CORELLI', role: 'Inventory Manager', email: 'l.corelli@kinetic.bike', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop', status: 'ACTIVE' },
          ].map((member, i) => (
            <div key={i} className="group bg-surface-container border border-white/5 rounded-[24px] lg:rounded-[32px] overflow-hidden hover:border-primary/30 transition-all duration-500">
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" src={member.img} alt={member.name}/>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
                <div className={`absolute top-4 lg:top-6 right-4 lg:right-6 px-3 lg:px-4 py-1 lg:py-1.5 backdrop-blur-xl border border-white/10 text-[8px] lg:text-[9px] font-black rounded-full uppercase tracking-widest ${member.status === 'ACTIVE' ? 'bg-success/10 text-success' : 'bg-white/10 text-on-surface-variant'}`}>
                    {member.status}
                </div>
              </div>
              <div className="p-6 lg:p-8 space-y-6">
                <div>
                  <h5 className="text-xl lg:text-2xl font-black text-on-surface tracking-tighter group-hover:text-primary transition-colors">{member.name}</h5>
                  <p className="text-primary font-black text-[9px] lg:text-[10px] uppercase tracking-[0.2em] mt-1 opacity-60">{member.role}</p>
                </div>
                <div className="space-y-4 pt-4 lg:pt-6 border-t border-white/5">
                  <div className="flex items-center gap-4 text-on-surface-variant group-hover:text-on-surface transition-colors">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    <span className="text-[11px] lg:text-xs font-medium tracking-tight truncate">{member.email}</span>
                  </div>
                </div>
                <button className="w-full py-3.5 lg:py-4 bg-background border border-white/5 text-on-surface-variant group-hover:text-primary group-hover:border-primary/30 text-[9px] lg:text-[10px] font-black uppercase tracking-widest rounded-xl lg:rounded-2xl transition-all active:scale-95">
                    Access Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
