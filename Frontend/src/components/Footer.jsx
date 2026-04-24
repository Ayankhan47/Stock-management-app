import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-background text-xs font-black">bolt</span>
              </div>
              <span className="font-headline font-black text-sm tracking-[0.3em] text-on-surface">KINETIC</span>
            </div>
            <p className="text-[8px] sm:text-[9px] font-bold text-on-surface-variant uppercase tracking-[0.2em] opacity-60 text-center md:text-left">PRECISION ENGINEERED. PERFORMANCE DRIVEN.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              { to: '/privacy', label: 'Privacy' },
              { to: '/terms', label: 'Protocols' },
              { to: '/support', label: 'Support' }
            ].map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="font-headline text-[9px] font-black text-on-surface-variant uppercase tracking-[0.2em] hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex gap-4">
            {['public', 'contact_support', 'mail'].map((icon) => (
              <button key={icon} className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-on-surface-variant hover:text-primary transition-all border border-white/5">
                <span className="material-symbols-outlined text-[18px]">{icon}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-4">
          <p className="text-[7px] sm:text-[8px] font-bold text-on-surface-variant uppercase tracking-[0.4em] opacity-40 text-center md:text-left">
            © 2024 KINETIC ENGINEERING CORP. ALL SYSTEMS ENCRYPTED.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[8px] font-bold text-success uppercase tracking-[0.2em] opacity-60">
              <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span> SYSTEM NOMINAL
            </span>
            <span className="text-[8px] font-bold text-on-surface-variant uppercase tracking-[0.2em] opacity-40">v3.4.0-STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
