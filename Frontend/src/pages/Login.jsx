import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
      } else {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/');
      }
    } catch {
      setError('Network error');
    }
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 overflow-x-hidden bg-background font-body text-on-background antialiased">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] sm:w-[40%] h-[40%] bg-primary opacity-10 blur-[100px] sm:blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] sm:w-[40%] h-[40%] bg-secondary opacity-10 blur-[100px] sm:blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="flex flex-col w-full max-w-5xl relative z-10 py-8 lg:py-0">
        <div className="flex flex-col lg:flex-row bg-surface-container rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.1)] border border-white/5 backdrop-blur-xl">

          {/* Visual Side */}
          <div className="relative w-full lg:w-5/12 bg-primary-container flex flex-col justify-center p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="z-10 text-center lg:text-left">
              <div className="mb-6 lg:mb-8 flex justify-center lg:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                  <span className="material-symbols-outlined text-background font-bold">bolt</span>
                </div>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tighter text-on-surface">
                KINETIC<br className="hidden lg:block" />
                <span className="text-primary lg:ml-0 ml-2">ENGINE.</span>
              </h2>
              <p className="mt-4 max-w-xs mx-auto lg:mx-0 text-xs sm:text-sm text-on-surface-variant leading-relaxed font-medium">
                The next generation of showroom management. High-performance tools for high-performance teams.
              </p>
            </div>

            <div className="mt-8 lg:mt-12 flex items-center justify-center lg:justify-start gap-4 text-primary text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
              <span className="px-2 py-1 border border-primary/30 rounded">CORE v3.0</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">shield</span> ENCRYPTED</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-7/12 bg-surface p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="max-w-[380px] mx-auto w-full">
              <div className="mb-6 lg:mb-8 text-center lg:text-left">
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-2">Login</h3>
                <p className="text-on-surface-variant text-xs sm:text-sm font-medium">Authorized personnel only.</p>
              </div>

              {error && (
                <div className="mb-6 p-3 bg-error/10 border border-error/20 text-error rounded-xl flex items-center gap-3 animate-head-shake">
                  <span className="material-symbols-outlined text-[18px]">warning</span>
                  <span className="text-[11px] font-bold">{error}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <label className="text-[9px] sm:text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Identity Access</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-on-surface-variant group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">fingerprint</span>
                    </div>
                    <input
                      className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-surface-container border border-white/5 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/20 text-on-surface transition-all placeholder:text-on-surface-variant/30 outline-none text-sm"
                      placeholder="operator@kinetic.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-[9px] sm:text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Secret Key</label>
                    <a className="text-[9px] sm:text-[10px] font-bold text-primary hover:text-primary/80 uppercase tracking-widest" href="#">Reset</a>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-on-surface-variant group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">vpn_key</span>
                    </div>
                    <input
                      className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-surface-container border border-white/5 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/20 text-on-surface transition-all placeholder:text-on-surface-variant/30 outline-none text-sm"
                      placeholder="••••••••"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button
                  className="w-full bg-primary hover:bg-primary/90 text-background font-headline font-black py-4 sm:py-4.5 rounded-xl shadow-[0_0_30px_rgba(14,165,233,0.2)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 tracking-widest text-xs mt-2"
                  type="submit"
                >
                  INITIALIZE SYSTEM
                  <span className="material-symbols-outlined text-[18px]">login</span>
                </button>
              </form>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/5 text-center">
                <p className="text-on-surface-variant text-[11px] sm:text-xs font-medium">
                  Need access?
                  <Link className="text-primary font-bold hover:underline ml-2" to="/register">
                    Request Credentials
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center px-4 gap-4 text-[8px] sm:text-[9px] font-bold text-on-surface-variant uppercase tracking-[0.3em] opacity-40">
          <p className="text-center sm:text-left">KINETIC ENGINEERING CORP © 2024</p>
          <div className="flex gap-4 sm:gap-8">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-success rounded-full"></span> SYSTEM ONLINE</span>
            <span>DATA-SECURE v3.4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
