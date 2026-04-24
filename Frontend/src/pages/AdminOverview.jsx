import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../config';

export default function AdminOverview() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [velocityData, setVelocityData] = useState([40, 55, 45, 70, 85, 60, 95, 100]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/products`);
        setProducts(res.data);
      } catch (err) {
        console.error('Failed to fetch inventory:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  return (
    <div className="p-4 sm:p-8 lg:p-12 space-y-8 lg:space-y-12 max-w-[1600px] mx-auto animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Operational Telemetry</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-on-surface tracking-tighter font-headline">COMMAND <span className="text-primary">CENTER.</span></h1>
          <p className="text-on-surface-variant text-xs sm:text-sm font-medium opacity-60">Real-time fleet performance metrics and terminal synchronization.</p>
        </div>
        <div className="flex items-center justify-between md:justify-end gap-4 bg-surface-container/50 p-4 rounded-2xl border border-white/5 md:bg-transparent md:p-0 md:border-0">
          <div className="flex flex-col items-start md:items-end">
            <span className="text-[8px] sm:text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">Last Sync</span>
            <span className="text-[10px] sm:text-xs font-black text-on-surface uppercase tracking-wider">0.4ms Latency</span>
          </div>
          <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all active:scale-95">
            Manual Override
          </button>
        </div>
      </div>

      {/* Bento Grid Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: 'Total Capital', val: '₹21.4M', trend: '+12%', icon: 'monetization_on', color: 'primary' },
          { label: 'Fleet Units', val: loading ? '...' : products.length, trend: 'Optimal', icon: 'inventory_2', color: 'secondary' },
          { label: 'Active Hubs', val: 'SHOWROOM + 1', trend: 'Nominal', icon: 'location_on', color: 'primary' },
          { label: 'Critical Syncs', val: '5', trend: '3 Alert', icon: 'notifications_active', color: 'error' }
        ].map((metric, i) => (
          <div key={i} className="bg-surface-container border border-white/5 p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] group hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${metric.color} opacity-[0.03] blur-[60px] rounded-full -mr-16 -mt-16 group-hover:opacity-[0.08] transition-opacity`}></div>
            <div className="flex items-start justify-between relative z-10">
              <div className={`p-3 lg:p-4 bg-background border border-white/5 rounded-2xl text-${metric.color} shadow-inner`}>
                <span className="material-symbols-outlined text-[20px] lg:text-[24px]">{metric.icon}</span>
              </div>
              <span className={`text-${metric.color} text-[8px] lg:text-[10px] font-black uppercase tracking-widest bg-${metric.color}/10 px-3 py-1 rounded-full`}>
                {metric.trend}
              </span>
            </div>
            <div className="mt-6 lg:mt-8 relative z-10">
              <p className="text-on-surface-variant text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.3em] opacity-40">{metric.label}</p>
              <h3 className="text-2xl lg:text-3xl font-black text-on-surface mt-1 font-headline tracking-tighter">{metric.val}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Section: Trends and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2 bg-surface-container border border-white/5 rounded-[30px] lg:rounded-[40px] p-6 lg:p-10 relative overflow-hidden group">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 lg:mb-12 gap-6 relative z-10">
            <div>
              <h3 className="text-lg lg:text-xl font-black text-on-surface tracking-tight font-headline">SALES VELOCITY</h3>
              <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mt-1 opacity-50">Operational period: Last 30 Cycles</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-4 mr-2 lg:mr-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white/10 rounded-full"></span>
                  <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">Projection</span>
                </div>
              </div>
              <select 
                className="bg-background border border-white/10 rounded-xl px-4 py-2 text-[10px] font-black text-on-surface uppercase tracking-widest outline-none focus:border-primary transition-all cursor-pointer"
                onChange={(e) => {
                  const data = e.target.value === 'Current cycle' 
                    ? [40, 55, 45, 70, 85, 60, 95, 100] 
                    : [80, 90, 75, 60, 50, 85, 95, 70];
                  setVelocityData(data);
                }}
              >
                <option>Current cycle</option>
                <option>Quarterly log</option>
              </select>
            </div>
          </div>
          
          <div className="h-[200px] lg:h-[300px] flex items-end gap-2 lg:gap-3 relative z-10">
            {velocityData.map((h, i) => (
              <div key={i} className="flex-1 relative group/bar h-full flex items-end">
                <div 
                  className={`w-full rounded-lg lg:rounded-xl transition-all duration-700 ease-out cursor-pointer ${i === 7 ? 'bg-primary shadow-[0_0_20px_rgba(14,165,233,0.4)]' : 'bg-primary/20 hover:bg-primary/40'}`}
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface-container border border-white/10 text-[9px] font-black text-on-surface rounded opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                    {h}% LOAD
                  </div>
                </div>
                {i === 7 && (
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-2 lg:px-3 py-1 lg:py-1.5 bg-primary text-background text-[8px] lg:text-[10px] font-black rounded-lg shadow-xl animate-bounce whitespace-nowrap z-10">
                    TODAY
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-8 lg:mt-10 text-[8px] lg:text-[9px] font-bold text-on-surface-variant uppercase tracking-[0.3em] opacity-30 pt-8 border-t border-white/5 overflow-x-auto no-scrollbar whitespace-nowrap gap-8">
            <span>SYNC-P1</span>
            <span>SYNC-P2</span>
            <span>SYNC-P3</span>
            <span>SYNC-P4</span>
            <span>TERMINAL-ACTIVE</span>
          </div>
        </div>

        <div className="bg-surface-container border border-white/5 rounded-[30px] lg:rounded-[40px] p-6 lg:p-10 flex flex-col relative overflow-hidden group min-h-[400px]">
          <div className="flex items-center justify-between mb-8 lg:mb-10 relative z-10">
            <h3 className="text-lg lg:text-xl font-black text-on-surface tracking-tight font-headline">SIGNAL FEED</h3>
            <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline active:scale-95 transition-all">Archive</button>
          </div>
          
          <div className="space-y-6 lg:space-y-8 flex-1 overflow-y-auto pr-2 custom-scrollbar relative z-10">
            {[
              { label: 'Fleet Update', desc: 'E-Velo X-Frame Unit Synced', time: '2m', icon: 'shopping_bag', color: 'primary' },
              { label: 'Critical Alert', desc: 'Godown 1 Unit Low Stock', time: '14m', icon: 'priority_high', color: 'error' },
              { label: 'Access Grant', desc: 'New Terminal Operator v4', time: '1h', icon: 'person_add', color: 'primary' },
              { label: 'Sync Complete', desc: 'Inventory Archive Rebuilt', time: '3h', icon: 'ads_click', color: 'primary' },
              { label: 'Unit Dispatch', desc: 'Shipment Terminal Verified', time: '5h', icon: 'local_shipping', color: 'primary' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4 lg:gap-5 group/item">
                <div className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-${activity.color}/10 border border-${activity.color}/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                  <span className={`material-symbols-outlined text-[18px] lg:text-[20px] text-${activity.color}`}>{activity.icon}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] lg:text-[11px] font-black text-on-surface uppercase tracking-wide">{activity.label}</p>
                    <span className="text-[7px] lg:text-[8px] font-bold text-on-surface-variant uppercase tracking-widest opacity-40 whitespace-nowrap">• {activity.time}</span>
                  </div>
                  <p className="text-[11px] lg:text-xs text-on-surface-variant font-medium opacity-60 leading-tight">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Critical Inventory Tracking */}
      <div className="bg-surface-container border border-white/5 rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-2xl">
        <div className="px-6 lg:px-10 py-6 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg lg:text-xl font-black text-on-surface font-headline tracking-tight uppercase">CRITICAL TELEMETRY</h3>
            <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-[0.2em] opacity-50">Priority 1 Fleet Tracking Module</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="flex-1 bg-primary text-background px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:scale-105 active:scale-95 transition-all">Data Export</button>
            <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-on-surface px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all">Access Registry</button>
          </div>
        </div>
        
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px] lg:min-w-0">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="px-6 lg:px-10 py-4 lg:py-6 uppercase tracking-[0.2em] text-[9px] font-black text-on-surface-variant opacity-40">Unit Identity</th>
                <th className="px-6 lg:px-10 py-4 lg:py-6 uppercase tracking-[0.2em] text-[9px] font-black text-on-surface-variant opacity-40">Coordinates</th>
                <th className="px-6 lg:px-10 py-4 lg:py-6 uppercase tracking-[0.2em] text-[9px] font-black text-on-surface-variant opacity-40">Asset Value</th>
                <th className="hidden lg:table-cell px-10 py-6 uppercase tracking-[0.2em] text-[9px] font-black text-on-surface-variant opacity-40">Registry Key</th>
                <th className="px-6 lg:px-10 py-4 lg:py-6 uppercase tracking-[0.2em] text-[9px] font-black text-on-surface-variant opacity-40">Operational Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {Array.isArray(products) && products.slice(0, 5).map((row, i) => (
                <tr className="group hover:bg-white/[0.03] transition-colors" key={row.id || i}>
                  <td className="px-6 lg:px-10 py-4 lg:py-6">
                    <Link to={`/product/${row.id}`} className="flex items-center gap-4 lg:gap-5">
                      <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-background border border-white/10 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={row.img} alt={row.MODEL_NAME} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-black text-xs lg:text-sm text-on-surface tracking-tight truncate">{row.MODEL_NAME}</div>
                        <div className="text-[8px] lg:text-[9px] text-on-surface-variant font-bold uppercase tracking-[0.2em] opacity-40 mt-0.5">{row.CODE}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 lg:px-10 py-4 lg:py-6 text-[9px] lg:text-[10px] font-black text-primary uppercase tracking-[0.2em] whitespace-nowrap">{row.LOCATION}</td>
                  <td className="px-6 lg:px-10 py-4 lg:py-6 text-xs lg:text-sm font-black text-on-surface tracking-tighter">{row.price}</td>
                  <td className="hidden lg:table-cell px-10 py-6 text-[10px] font-mono font-bold text-on-surface-variant opacity-40">{row.CHASSIS_NO}</td>
                  <td className="px-6 lg:px-10 py-4 lg:py-6">
                    <span className="inline-block px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-lg text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap bg-primary/10 text-primary border border-primary/20">
                      Optimal
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
