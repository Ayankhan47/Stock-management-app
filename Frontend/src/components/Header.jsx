import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Showcase' },
    { to: '/support', label: 'Support' },
    ...(user && user.role === 'admin' ? [{ to: '/inventory/overview', label: 'Terminal' }] : [])
  ];

  return (
    <header className="sticky top-0 z-[100] w-full bg-background/80 backdrop-blur-2xl border-b border-white/5 h-16 sm:h-20">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-12">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.3)] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-background font-black text-lg sm:text-xl">bolt</span>
            </div>
            <span className="font-headline font-black text-lg sm:text-xl tracking-[0.2em] text-on-surface">KINETIC</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`font-headline text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-primary ${
                  (link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to)) 
                  ? 'text-primary' 
                  : 'text-on-surface-variant'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="relative group hidden lg:block">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary material-symbols-outlined text-[18px] transition-colors">search</span>
            <input 
              placeholder="SEARCH FLEET..." 
              className="bg-surface-container border border-white/5 rounded-full pl-12 pr-6 py-2 text-[10px] font-bold text-on-surface focus:ring-1 focus:ring-primary w-48 lg:w-64 transition-all placeholder:text-on-surface-variant/30" 
              type="text" 
            />
          </div>
          
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3 sm:gap-4 pl-3 sm:pl-4 border-l border-white/10">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-[10px] font-black text-on-surface uppercase tracking-wider">{user.name.split(' ')[0]}</span>
                  <span className="text-[8px] font-bold text-primary uppercase tracking-widest">Operator</span>
                </div>
                <button 
                  onClick={handleLogout} 
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-on-surface font-headline text-[8px] sm:text-[9px] font-black uppercase tracking-widest rounded-lg transition-all active:scale-95"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-primary text-background font-headline text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] rounded-lg shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:brightness-110 transition-all active:scale-95"
              >
                <span className="hidden sm:inline">Access Terminal</span>
                <span className="sm:hidden">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/60 backdrop-blur-lg z-[90] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="fixed top-16 left-0 right-0 bg-surface-container border-b border-white/5 z-[95] p-6 md:hidden animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-headline text-sm font-black uppercase tracking-[0.3em] transition-all ${
                    (link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to)) 
                    ? 'text-primary' 
                    : 'text-on-surface-variant'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="relative group sm:hidden">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined text-[18px]">search</span>
                <input 
                  placeholder="SEARCH FLEET..." 
                  className="w-full bg-background border border-white/5 rounded-xl pl-12 pr-6 py-3 text-[10px] font-bold text-on-surface" 
                  type="text" 
                />
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
