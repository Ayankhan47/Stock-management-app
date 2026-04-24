import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../config';
import futuristic_hero from '../assets/futuristic_superbike_hero_1776672904617.png';
import electric_profile from '../assets/electric_motorcycle_profile_1776672935953.png';
import bike_detail from '../assets/racing_bike_detail_1776672955339.png';

export default function Showcase() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/showcase/featured`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-background text-on-background font-body antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-[60%] h-[60%] bg-primary opacity-5 blur-[160px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-secondary opacity-5 blur-[160px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="space-y-8 lg:space-y-10 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Live Terminal: v3.4.0 Nominal</span>
            </div>
            
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-on-surface">
              RAW<br/>
              <span className="text-primary">VELOCITY.</span>
            </h1>
            
            <p className="max-w-md mx-auto lg:mx-0 text-base lg:text-lg text-on-surface-variant leading-relaxed font-medium">
              Engineered for the absolute edge. High-performance instruments designed to dominate the asphalt and redefine the terminal.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 pt-4">
              <button className="px-10 py-5 bg-primary text-background font-headline text-[11px] font-black uppercase tracking-[0.3em] rounded-xl shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:scale-105 transition-all active:scale-95 w-full sm:w-auto">
                Initialize Config
              </button>
              <button className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-on-surface font-headline text-[11px] font-black uppercase tracking-[0.3em] rounded-xl transition-all active:scale-95 w-full sm:w-auto">
                View Archive
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 pt-12 border-t border-white/5">
              {[
                { label: 'Top Velocity', val: '320+', unit: 'km/h' },
                { label: '0-100 Pulse', val: '2.4', unit: 'sec' },
                { label: 'Mass', val: '168', unit: 'kg' }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">{stat.label}</p>
                  <p className="text-2xl font-black text-on-surface tracking-tighter">{stat.val}<span className="text-sm text-primary ml-1">{stat.unit}</span></p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group order-1 lg:order-2 px-4 lg:px-0">
            <div className="absolute inset-0 bg-primary opacity-20 blur-[80px] lg:blur-[100px] rounded-full group-hover:opacity-30 transition-opacity duration-1000"></div>
            <img 
              alt="Futuristic Superbike" 
              className="relative z-10 w-full drop-shadow-[0_0_50px_rgba(14,165,233,0.2)] transition-transform duration-700 group-hover:scale-105" 
              src={futuristic_hero} 
            />
          </div>
        </div>
      </section>

      {/* Bento Grid Models */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl lg:text-4xl font-black tracking-tighter text-on-surface">SELECT MODELS</h2>
              <p className="text-[10px] lg:text-sm font-medium text-on-surface-variant uppercase tracking-[0.2em]">Precision units for every operational theater.</p>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-on-surface hover:border-primary hover:text-primary transition-all">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-on-surface hover:border-primary hover:text-primary transition-all">
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
            <div className="md:col-span-8 relative rounded-3xl overflow-hidden group min-h-[400px]">
              <img alt="Model A" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={electric_profile} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10">
                <span className="inline-block px-3 py-1 bg-secondary text-white text-[8px] font-black uppercase tracking-[0.2em] rounded-full mb-3 lg:mb-4">PROTO-S PHASE IV</span>
                <h3 className="font-headline text-3xl lg:text-5xl font-black text-on-surface mb-4 lg:mb-6 tracking-tighter">ELECTRIC APEX.</h3>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
                  <div className="flex gap-8 lg:gap-10">
                    <div>
                      <p className="text-[8px] font-bold text-on-surface-variant uppercase tracking-widest mb-1 opacity-60">RANGE</p>
                      <p className="text-xl font-black text-on-surface">450<span className="text-xs text-secondary ml-1">KM</span></p>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-on-surface-variant uppercase tracking-widest mb-1 opacity-60">POWER</p>
                      <p className="text-xl font-black text-on-surface">180<span className="text-xs text-secondary ml-1">KW</span></p>
                    </div>
                  </div>
                  <Link to="/inventory/stock" className="w-full sm:w-auto px-8 py-3 bg-white text-background font-headline text-[10px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-secondary hover:text-white transition-all text-center">Explore Unit</Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 relative rounded-3xl overflow-hidden group min-h-[350px]">
              <img alt="Model B" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={bike_detail} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 right-6 lg:right-8">
                <span className="inline-block px-3 py-1 bg-primary text-background text-[9px] font-black uppercase tracking-[0.2em] rounded-full mb-3">ELITE CORE</span>
                <h3 className="font-headline text-2xl lg:text-3xl font-black text-on-surface mb-3 lg:mb-4 tracking-tighter">AERO-X MK.III</h3>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed mb-6">Ultra-modulus carbon structure with integrated terminal telemetry.</p>
                <Link to="/product/aero-x" className="w-full py-3 border border-white/20 text-on-surface font-headline text-[10px] font-black uppercase tracking-[0.2em] rounded-lg group-hover:border-primary group-hover:text-primary transition-all text-center block">Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Test Ride */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="bg-surface-container rounded-[30px] lg:rounded-[40px] p-8 lg:p-20 relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-1/2 lg:h-full opacity-10 lg:opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-primary to-transparent"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="font-headline text-4xl lg:text-5xl font-black tracking-tighter text-on-surface leading-none">
                INITIALIZE <br/><span className="text-primary">SYNC.</span>
              </h2>
              <p className="text-on-surface-variant text-base lg:text-lg font-medium leading-relaxed">
                Experience the terminal in real-time. Schedule a high-velocity evaluation session with our performance engineers.
              </p>
              
              <div className="flex gap-4">
                <div className="bg-background/50 border border-white/10 rounded-2xl p-4 lg:p-6 flex-1 text-center lg:text-left">
                  <span className="material-symbols-outlined text-primary mb-3 lg:mb-4">timer</span>
                  <p className="text-xl lg:text-2xl font-black text-on-surface">45<span className="text-xs lg:text-sm font-bold text-on-surface-variant ml-1">MIN</span></p>
                  <p className="text-[8px] lg:text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">SESSION TIME</p>
                </div>
                <div className="bg-background/50 border border-white/10 rounded-2xl p-4 lg:p-6 flex-1 text-center lg:text-left">
                  <span className="material-symbols-outlined text-secondary mb-3 lg:mb-4">location_on</span>
                  <p className="text-xl lg:text-2xl font-black text-on-surface">HQ</p>
                  <p className="text-[8px] lg:text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">CORE CENTER</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-10 space-y-6 lg:space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] ml-1">OPERATIONAL DATE</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary text-[20px]">calendar_today</span>
                  <input className="w-full pl-12 pr-6 py-4 bg-surface-container border border-white/5 rounded-xl focus:border-primary text-on-surface text-sm outline-none transition-all" placeholder="SELECT COORDINATES..." type="text" />
                </div>
              </div>
              <button className="w-full py-5 bg-primary text-background font-headline text-[11px] font-black uppercase tracking-[0.3em] rounded-xl shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                Request Evaluation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Inventory Section */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 lg:mb-20">
          <div className="space-y-4 w-full md:w-auto">
            <h2 className="font-headline text-3xl lg:text-4xl font-black tracking-tighter text-on-surface">INVENTORY ARCHIVE</h2>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
              {['ALL UNITS', 'RACE', 'URBAN', 'TRAIL'].map((f, i) => (
                <button key={i} className={`px-4 py-1 text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${i === 0 ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>{f}</button>
              ))}
            </div>
          </div>
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.4em] opacity-40">TOTAL UNITS: {products.length}</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-6">
            <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Syncing Data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((item, idx) => (
              <div className="group bg-surface-container border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500" key={idx}>
                <div className="relative h-64 overflow-hidden">
                  <img alt={item.MODEL_NAME} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  {item.tag && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-md border border-white/10 text-primary text-[8px] font-black uppercase tracking-widest rounded-full">{item.tag}</span>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <p className="text-[8px] font-bold text-primary uppercase tracking-[0.2em]">{item.cat}</p>
                    <h4 className="text-lg font-black text-on-surface tracking-tight group-hover:text-primary transition-colors">{item.MODEL_NAME}</h4>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <span className="text-lg font-black text-on-surface">{item.price}</span>
                    <Link to={`/product/${item.id}`} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-on-surface hover:bg-primary hover:text-background hover:border-primary transition-all">
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
