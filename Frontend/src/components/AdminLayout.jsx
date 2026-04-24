import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

export default function AdminLayout() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-background text-on-background font-body antialiased">
      {/* Backdrop for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-background/60 backdrop-blur-md z-[45] lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`h-screen w-64 fixed left-0 top-0 border-r border-white/5 bg-surface-container-lowest flex flex-col py-8 z-50 overflow-hidden shadow-2xl transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-8 mb-10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.3)]">
              <span className="material-symbols-outlined text-background font-bold">speed</span>
            </div>
            <div>
              <h1 className="text-sm font-black text-on-surface font-headline tracking-[0.2em] uppercase leading-none">VELOCITY</h1>
              <p className="font-headline uppercase tracking-[0.3em] text-[8px] text-primary mt-1">CORE TERMINAL</p>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-on-surface-variant">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
          {[
            { to: '/inventory/overview', icon: 'dashboard', label: 'Overview' },
            { to: '/inventory/stock', icon: 'inventory_2', label: 'Stock Control' },
            { to: '/inventory/orders', icon: 'shopping_cart', label: 'Orders' },
            { to: '/inventory/team', icon: 'group', label: 'Team' },
            { to: '/inventory/support', icon: 'support_agent', label: 'Support' },
          ].map((item) => (
            <NavLink 
              key={item.to}
              to={item.to} 
              onClick={() => setIsSidebarOpen(false)}
              className={({isActive}) => `flex items-center gap-4 px-8 py-4 transition-all group ${isActive ? 'bg-primary/10 text-primary border-r-2 border-primary' : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'}`}
            >
              <span className={`material-symbols-outlined text-[20px] transition-transform group-hover:scale-110`}>{item.icon}</span>
              <span className="font-headline uppercase tracking-[0.2em] text-[10px] font-bold">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="px-6 mt-auto space-y-3">
          <button className="w-full py-4 bg-secondary text-white rounded-xl font-headline text-[10px] tracking-[0.2em] uppercase font-black hover:brightness-110 active:scale-[0.98] transition-all flex justify-center gap-2 shadow-[0_0_20px_rgba(255,77,0,0.2)]">
            <span className="material-symbols-outlined text-sm">add</span>
            New Inventory
          </button>
          <button 
            onClick={() => { navigate('/'); setIsSidebarOpen(false); }} 
            className="w-full py-3.5 bg-surface-container text-on-surface-variant rounded-xl font-headline text-[9px] tracking-[0.2em] uppercase font-bold hover:text-on-surface hover:bg-surface-container-high active:scale-[0.98] transition-all flex justify-center gap-2 border border-white/5"
          >
            <span className="material-symbols-outlined text-sm">home</span>
            Exit Terminal
          </button>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="lg:ml-64 flex-1 flex flex-col min-h-screen relative overflow-x-hidden">
        {/* Unified TopAppBar */}
        <header className="sticky top-0 z-40 flex justify-between items-center px-6 lg:px-10 h-20 w-full bg-background/80 backdrop-blur-2xl border-b border-white/5">
          <div className="flex items-center gap-4 lg:gap-10">
            {/* Mobile Menu Trigger */}
            <button 
              onClick={toggleSidebar}
              className="lg:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>

            <div className="flex flex-col">
              <h2 className="text-[10px] lg:text-xs font-black tracking-[0.4em] text-on-surface font-headline uppercase">FLEET OPERATIONS</h2>
              <div className="h-0.5 w-1/2 bg-primary mt-1"></div>
            </div>
            
            {/* Navigation Bridge */}
            <nav className="hidden lg:flex items-center gap-6 pl-10 border-l border-white/10">
              <NavLink to="/" className="text-[10px] font-black text-on-surface-variant hover:text-primary uppercase tracking-[0.3em] transition-all">Showcase</NavLink>
              <NavLink to="/support" className="text-[10px] font-black text-on-surface-variant hover:text-primary uppercase tracking-[0.3em] transition-all">Public Support</NavLink>
            </nav>

            <div className="relative hidden xl:block ml-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined text-[18px]">search</span>
              <input className="bg-surface-container border border-white/5 rounded-full pl-12 pr-6 py-2.5 text-[11px] font-medium text-on-surface focus:ring-1 focus:ring-primary w-80 transition-all placeholder:text-on-surface-variant/40" placeholder="SEARCH OPERATIONAL DATA..." type="text"/>
            </div>
          </div>
          
          <div className="flex items-center gap-3 lg:gap-6">
            <div className="flex items-center gap-1 lg:gap-2">
              <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-xl transition-all material-symbols-outlined text-[18px] lg:text-[20px] active:scale-90">notifications</button>
              <button className="hidden sm:block p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-xl transition-all material-symbols-outlined text-[18px] lg:text-[20px] active:scale-90">settings</button>
            </div>
            <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-lg lg:rounded-xl bg-surface-container border border-white/10 overflow-hidden shadow-lg group cursor-pointer transition-transform hover:scale-105 active:scale-95">
              <img className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop" alt="Admin" />
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col overflow-x-hidden p-0 relative">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
