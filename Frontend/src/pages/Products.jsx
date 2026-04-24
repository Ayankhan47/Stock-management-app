import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../config';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 lg:space-y-8 max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_rgba(255,77,0,0.5)]"></div>
            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em]">Asset Management</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-on-surface tracking-tighter font-headline uppercase leading-none">STOCK <span className="text-primary">CONTROL.</span></h1>
          <p className="text-on-surface-variant text-[10px] lg:text-xs font-medium opacity-60 max-w-xl">Precision tracking for high-performance instruments.</p>
        </div>
        <div className="flex bg-surface-container rounded-2xl p-1 border border-white/5 self-start md:self-auto">
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl text-[9px] lg:text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'list' ? 'bg-primary text-background shadow-lg' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            List Terminal
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl text-[9px] lg:text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'grid' ? 'bg-primary text-background shadow-lg' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Spatial Grid
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-surface-container border border-white/5 rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl relative">
        <div className="p-4 sm:p-6 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 sm:gap-6 bg-white/[0.01]">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 flex-1 w-full">
            <div className="relative flex-1 group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] group-focus-within:text-primary transition-colors">search</span>
              <input
                className="w-full bg-background border border-white/5 rounded-xl pl-12 pr-6 py-3 text-xs font-medium text-on-surface placeholder:text-on-surface-variant/40 outline-none focus:border-primary transition-all shadow-inner"
                placeholder="QUERY MODEL..."
                type="text"
              />
            </div>
            <button className="flex items-center justify-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-black text-on-surface uppercase tracking-widest transition-all active:scale-95">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              Filters
            </button>
          </div>
        </div>

        <div className="p-0 sm:p-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Decrypting Fleet Data...</p>
            </div>
          ) : viewMode === 'list' ? (
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/[0.02] text-on-surface-variant text-left">
                    <th className="px-6 sm:px-8 py-4 text-[9px] font-black tracking-[0.2em] uppercase opacity-40">MODEL CORE</th>
                    <th className="px-6 sm:px-8 py-4 text-[9px] font-black tracking-[0.2em] uppercase opacity-40">REGISTRY</th>
                    <th className="hidden lg:table-cell px-8 py-4 text-[9px] font-black tracking-[0.2em] uppercase opacity-40">TONAL</th>
                    <th className="hidden xl:table-cell px-8 py-4 text-[9px] font-black tracking-[0.2em] uppercase opacity-40">CHASSIS KEY</th>
                    <th className="hidden xl:table-cell px-8 py-4 text-[9px] font-black tracking-[0.2em] uppercase opacity-40">ENGINE CORE</th>
                    <th className="px-6 sm:px-8 py-4 text-[9px] font-black tracking-[0.2em] uppercase opacity-40">COORDINATES</th>
                    <th className="px-6 sm:px-8 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {Array.isArray(products) && products.map((item, idx) => (
                    <tr key={item.id || idx} className="hover:bg-white/[0.02] transition-all group">
                      <td className="px-6 sm:px-8 py-4">
                        <Link to={`/product/${item.id}`} className="flex items-center gap-4">
                          <div className="h-10 w-14 bg-background border border-white/10 rounded-lg overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300 hidden sm:block">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={item.img} alt={item.MODEL_NAME} />
                          </div>
                          <span className="font-headline font-black text-on-surface text-xs tracking-tight group-hover:text-primary transition-colors whitespace-nowrap">{item.MODEL_NAME}</span>
                        </Link>
                      </td>
                      <td className="px-6 sm:px-8 py-4 text-[10px] font-bold text-on-surface-variant whitespace-nowrap">{item.CODE}</td>
                      <td className="hidden lg:table-cell px-8 py-4 text-[10px] font-medium text-on-surface-variant opacity-60 whitespace-nowrap">{item.COLOUR}</td>
                      <td className="hidden xl:table-cell px-8 py-4 text-[9px] font-mono font-bold text-on-surface-variant/40 whitespace-nowrap">{item.CHASSIS_NO}</td>
                      <td className="hidden xl:table-cell px-8 py-4 text-[9px] font-mono font-bold text-on-surface-variant/40 whitespace-nowrap">{item.ENGINE_NO}</td>
                      <td className="px-6 sm:px-8 py-4">
                        <span className={`inline-block px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${item.LOCATION === 'SHOWROOM'
                            ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(14,165,233,0.1)]'
                            : 'bg-white/5 text-on-surface-variant border border-white/10'
                          }`}>
                          {item.LOCATION}
                        </span>
                      </td>
                      <td className="px-6 sm:px-8 py-4 text-right">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all ml-auto">
                          <span className="material-symbols-outlined text-[18px]">more_horizontal</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-0">
              {Array.isArray(products) && products.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="bg-background border border-white/5 rounded-[24px] p-4 lg:p-5 group hover:border-primary/50 transition-all duration-500 flex flex-col gap-4 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors"></div>
                  <div className="h-40 w-full bg-surface-container rounded-2xl overflow-hidden relative border border-white/5">
                    <img className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" src={item.img} alt={item.MODEL_NAME} />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-background/80 backdrop-blur-md border border-white/10 rounded-lg text-[8px] font-black text-primary tracking-widest uppercase">
                      {item.CODE}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-headline font-black text-on-surface text-sm tracking-tight group-hover:text-primary transition-colors">{item.MODEL_NAME}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest opacity-40">{item.COLOUR}</span>
                      <span className="text-[10px] font-black text-primary">{item.price}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest opacity-40">{item.LOCATION}</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px] group-hover:text-primary transition-colors">arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 sm:p-6 bg-white/[0.01] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-[0.2em] opacity-40 order-2 sm:order-1">Showing 1-{products.length} Units</span>
          <div className="flex gap-2 order-1 sm:order-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-on-surface-variant disabled:opacity-20 transition-all" disabled>
              <span className="material-symbols-outlined text-[16px]">west</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-background text-[10px] font-black shadow-lg">01</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-on-surface-variant transition-all">
              <span className="material-symbols-outlined text-[16px]">east</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
