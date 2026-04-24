import React, { useState } from 'react';

export default function AdminSupport() {
  const [selectedTicket, setSelectedTicket] = useState(0);
  const [showConsole, setShowConsole] = useState(false);

  const tickets = [
    { name: 'Marcus Vane', type: 'Maintenance Inquiry', time: '2m', desc: 'Carbon frame squeaking after first 50km ride...', status: 'URGENT', color: 'error' },
    { name: 'Elena Rodriguez', type: 'Warranty Claim', time: '1h', desc: 'Electronic shifting calibration issue...', status: 'REVIEW', color: 'primary' },
    { name: 'Julian Thorne', type: 'Parts Request', time: '4h', desc: 'Looking for CeramicSpeed replacements...', status: 'PENDING', color: 'secondary' },
    { name: 'Sarah Chen', type: 'General Inquiry', time: '1d', desc: 'Showroom hours during upcoming holiday...', status: 'RESOLVED', color: 'success' },
  ];

  return (
    <div className="flex w-full h-[calc(100vh-80px)] overflow-hidden animate-in fade-in duration-700 relative">
      {/* Left Panel: Signal Feed */}
      <section className={`${showConsole ? 'hidden lg:flex' : 'flex'} w-full lg:w-[400px] flex-col border-r border-white/5 bg-surface-container-low transition-all duration-500`}>
        <div className="p-6 sm:p-8 border-b border-white/5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Signal Feed</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-on-surface tracking-tighter font-headline uppercase">INQUIRIES.</h2>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-primary text-background text-[8px] sm:text-[9px] font-black tracking-widest rounded-lg uppercase">ACTIVE</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-on-surface-variant text-[8px] sm:text-[9px] font-black tracking-widest rounded-lg uppercase">HIGH PRIORITY</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {tickets.map((ticket, i) => (
            <div 
              key={i} 
              onClick={() => {
                setSelectedTicket(i);
                setShowConsole(true);
              }}
              className={`p-6 sm:p-8 border-b border-white/5 hover:bg-white/[0.03] transition-all cursor-pointer group relative ${selectedTicket === i ? 'bg-white/[0.02]' : ''}`}
            >
              {selectedTicket === i && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>}
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[8px] sm:text-[9px] font-black text-${ticket.color} uppercase tracking-widest opacity-60`}>{ticket.type}</span>
                <span className="text-[8px] sm:text-[9px] text-on-surface-variant font-bold uppercase opacity-30">{ticket.time}</span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-on-surface tracking-tight group-hover:text-primary transition-colors">{ticket.name}</h3>
              <p className="text-[11px] sm:text-xs text-on-surface-variant line-clamp-1 mt-1 font-medium opacity-50">{ticket.desc}</p>
              <div className="mt-4 flex items-center gap-3">
                <span className={`px-2 py-0.5 bg-${ticket.color}/10 text-${ticket.color} border border-${ticket.color}/20 text-[8px] font-black rounded uppercase tracking-widest`}>{ticket.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Right Panel: Operational Console */}
      <section className={`${showConsole ? 'flex' : 'hidden lg:flex'} flex-1 flex flex-col bg-background relative overflow-hidden transition-all duration-500`}>
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-primary blur-[100px] sm:blur-[150px] rounded-full -mr-48 -mt-48 sm:-mr-96 sm:-mt-96 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-secondary blur-[100px] sm:blur-[150px] rounded-full -ml-36 -mb-36 sm:-ml-72 sm:-mb-72"></div>
        </div>

        {/* Console Header */}
        <div className="p-4 sm:p-6 lg:p-10 border-b border-white/5 bg-surface-container-low/40 backdrop-blur-3xl relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center sm:items-start space-y-2 w-full sm:w-auto">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowConsole(false)}
                className="lg:hidden p-2 -ml-2 text-on-surface-variant hover:text-primary transition-all material-symbols-outlined"
              >
                arrow_back
              </button>
              <span className="px-2 py-0.5 bg-error text-white text-[8px] font-black rounded uppercase tracking-widest shadow-[0_0_10px_rgba(255,0,85,0.3)]">CRITICAL</span>
              <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] opacity-40">TICKET-ALPHA-8842</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-on-surface tracking-tighter font-headline uppercase text-center sm:text-left">
              Maintenance Inquiry: <span className="text-primary">{tickets[selectedTicket].name}</span>
            </h2>
            <p className="text-[8px] sm:text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-40">Assigned: Operator Alex • SYNC: NOMINAL</p>
          </div>
          <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-on-surface-variant hover:text-primary transition-all active:scale-95 material-symbols-outlined">archive</button>
            <button className="flex-[3] sm:flex-none px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background font-black text-[9px] sm:text-[11px] uppercase tracking-[0.2em] rounded-xl sm:rounded-2xl shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:scale-105 active:scale-95 transition-all">
                Resolve Signal
            </button>
          </div>
        </div>

        {/* Transmission Interface */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 flex flex-col gap-6 sm:gap-10 relative z-10 custom-scrollbar">
          {/* Incoming Transmission */}
          <div className="flex gap-4 sm:gap-6 max-w-[90%] sm:max-w-3xl">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl sm:rounded-2xl bg-surface-container border border-white/10 overflow-hidden shadow-2xl">
              <img className="h-full w-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop" alt="Customer"/>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="bg-surface-container border border-white/5 p-5 sm:p-8 rounded-2xl sm:rounded-[32px] rounded-tl-none shadow-2xl">
                <p className="text-on-surface text-[13px] sm:text-sm leading-relaxed font-medium">Hi Kinetic Support, I took delivery of my Precision Elite R1 last week. After about 50km, I'm hearing a consistent creaking sound from the bottom bracket area when I'm out of the saddle. Is this normal during the break-in period?</p>
              </div>
              <span className="text-[8px] sm:text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-30 ml-2 sm:ml-4">10:24 AM TRANSMISSION</span>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 py-2 sm:py-4">
            <div className="flex-1 h-px bg-white/5"></div>
            <span className="text-[8px] sm:text-[9px] font-black text-primary uppercase tracking-[0.5em] opacity-40 text-center">Operator Alex Synchronized</span>
            <div className="flex-1 h-px bg-white/5"></div>
          </div>

          {/* Outgoing Transmission */}
          <div className="flex gap-4 sm:gap-6 max-w-[90%] sm:max-w-3xl self-end flex-row-reverse">
            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl sm:rounded-2xl bg-primary border border-primary/30 overflow-hidden shadow-[0_0_20px_rgba(14,165,233,0.2)]">
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop" alt="Agent"/>
            </div>
            <div className="space-y-2 sm:space-y-3 text-right">
              <div className="bg-primary/10 border border-primary/20 p-5 sm:p-8 rounded-2xl sm:rounded-[32px] rounded-tr-none shadow-2xl text-primary">
                <p className="text-[13px] sm:text-sm leading-relaxed font-black uppercase tracking-tight">Hello Marcus, congratulations on the new R1! A slight settling in period is normal, but a persistent creak shouldn't happen. It's likely just a torque adjustment needed. Bring it in tomorrow afternoon.</p>
              </div>
              <span className="text-[8px] sm:text-[9px] font-black text-primary uppercase tracking-widest opacity-40 mr-2 sm:mr-4">10:31 AM COMMAND</span>
            </div>
          </div>
        </div>

        {/* Command Input */}
        <div className="p-4 sm:p-6 lg:p-10 border-t border-white/5 bg-surface-container-low/60 backdrop-blur-3xl relative z-20">
          <div className="relative flex items-center gap-3 sm:gap-6">
            <button className="p-3 sm:p-4 text-on-surface-variant hover:text-primary transition-all material-symbols-outlined bg-white/5 rounded-xl sm:rounded-2xl border border-white/10">attach_file</button>
            <div className="flex-1">
              <input className="w-full bg-surface-container border border-white/10 rounded-xl sm:rounded-2xl px-5 sm:px-8 py-4 sm:py-5 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-primary transition-all text-[11px] sm:text-xs font-medium" placeholder="TYPE RESPONSE..." type="text"/>
            </div>
            <button className="bg-secondary p-4 sm:p-5 rounded-xl sm:rounded-2xl text-white shadow-[0_0_30px_rgba(255,77,0,0.3)] hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[20px] sm:text-[24px]">send</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
