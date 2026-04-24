import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API_BASE_URL from '../config';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Syncing Core Details...</p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center space-y-6">
      <span className="material-symbols-outlined text-secondary text-6xl animate-pulse">warning</span>
      <p className="text-xl font-black text-on-surface tracking-tighter uppercase">{error}</p>
      <Link to="/inventory/overview" className="px-8 py-3 bg-white/5 border border-white/10 text-on-surface rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Back to Terminal</Link>
    </div>
  );

  if (!product) return null;

  return (
    <div className="bg-background text-on-background font-body antialiased selection:bg-primary selection:text-background min-h-screen overflow-x-hidden">
      <main className="pt-24 pb-32">
        
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center px-6 lg:px-20 overflow-hidden py-12 lg:py-0">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary opacity-[0.03] blur-[160px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
            <div className="space-y-8 lg:space-y-10 animate-in fade-in slide-in-from-left-8 duration-700 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-secondary rounded-full animate-ping"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Elite Specification</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="font-headline text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-on-surface">
                  {(product.MODEL_NAME || "PROTO-X").split(' ')[0]}<br/>
                  <span className="text-primary">{(product.MODEL_NAME || "").split(' ').slice(1).join(' ') || 'PROTO-X'}</span>
                </h1>
                <p className="max-w-md mx-auto lg:mx-0 text-base lg:text-lg text-on-surface-variant leading-relaxed font-medium opacity-70">
                  {product.description || "The absolute pinnacle of precision engineering. A carbon-fiber masterpiece designed to dominate the terminal and redefine velocity."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
                <button className="px-10 py-5 bg-primary text-background font-headline text-[11px] font-black uppercase tracking-[0.3em] rounded-xl shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:scale-105 transition-all active:scale-95 w-full sm:w-auto">
                  Initialize Order
                </button>
                <button className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-on-surface font-headline text-[11px] font-black uppercase tracking-[0.3em] rounded-xl transition-all active:scale-95 w-full sm:w-auto">
                  Book Evaluation
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 pt-12 border-t border-white/5">
                {[
                  { label: 'Mass Core', val: product.weight || '6.8', unit: 'KG' },
                  { label: 'Aero Drag', val: '-12.4', unit: 'WATT' },
                  { label: 'Sync Rate', val: 'Real', unit: 'TIME' }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest opacity-40">{stat.label}</p>
                    <p className="text-2xl font-black text-on-surface tracking-tighter">{stat.val}<span className="text-sm text-primary ml-1">{stat.unit}</span></p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group animate-in fade-in slide-in-from-right-12 duration-1000 order-1 lg:order-2 px-6 lg:px-0">
              <div className="absolute inset-0 bg-primary opacity-[0.05] blur-[80px] lg:blur-[120px] rounded-full group-hover:opacity-[0.1] transition-opacity duration-1000"></div>
              <img 
                alt={product.MODEL_NAME} 
                className="relative z-10 w-full drop-shadow-[0_40px_100px_rgba(14,165,233,0.15)] transition-transform duration-700 group-hover:scale-105" 
                src={product.img} 
              />
            </div>
          </div>
        </section>

        {/* Technical Specs Bento */}
        <section className="py-20 lg:py-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl lg:text-4xl font-black tracking-tighter text-on-surface uppercase">TECHNICAL CORE</h2>
                <p className="text-[10px] lg:text-sm font-medium text-on-surface-variant uppercase tracking-[0.2em] opacity-50">Precision engineered for absolute dominion.</p>
              </div>
              <div className="h-px flex-1 bg-white/5 hidden md:block mx-12 mb-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 h-auto md:h-[800px]">
              {/* Feature 1 */}
              <div className="md:col-span-8 bg-surface-container border border-white/5 rounded-[30px] lg:rounded-[40px] p-8 lg:p-12 relative overflow-hidden group min-h-[400px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-[0.02] blur-[80px] rounded-full -mr-32 -mt-32"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="space-y-4 lg:space-y-6">
                    <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.3em] rounded-full">Material Architecture</span>
                    <h3 className="font-headline text-3xl lg:text-5xl font-black text-on-surface tracking-tighter max-w-md uppercase leading-tight lg:leading-none">ULTRA-MODULUS <br/><span className="text-secondary">CARBON.</span></h3>
                    <p className="text-on-surface-variant text-base lg:text-lg font-medium opacity-60 leading-relaxed max-w-lg">
                      Proprietary high-modulus weave reduces core mass to an absolute minimum while maintaining extreme lateral stiffness for explosive power transfer.
                    </p>
                  </div>
                  <div className="flex items-end justify-between pt-8">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-40">TORSIONAL RIGIDITY</p>
                      <p className="text-3xl lg:text-4xl font-black text-on-surface tracking-tighter">140<span className="text-lg text-secondary ml-1">N/M</span></p>
                    </div>
                    <span className="material-symbols-outlined text-[60px] lg:text-[80px] text-white/5 group-hover:text-secondary/10 transition-colors duration-700">architecture</span>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="md:col-span-4 bg-surface-container border border-white/5 rounded-[30px] lg:rounded-[40px] p-8 lg:p-10 flex flex-col justify-between group hover:border-primary/20 transition-all duration-500 min-h-[300px]">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">settings_input_component</span>
                  </div>
                  <h4 className="font-headline font-black text-2xl lg:text-3xl text-on-surface uppercase tracking-tight leading-none">DIGITAL <br/>INTEGRATION.</h4>
                  <p className="text-on-surface-variant text-sm font-medium opacity-60 leading-relaxed">
                    {product.drivetrain || "Integrated electronic shifting with real-time telemetry sync to the operational hub."}
                  </p>
                </div>
                <div className="pt-8 border-t border-white/5">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-40 mb-2">INTERFACE</p>
                  <p className="text-xl font-black text-on-surface tracking-tighter uppercase">Wireless Protocol v4</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="md:col-span-4 bg-surface-container border border-white/5 rounded-[30px] lg:rounded-[40px] p-8 lg:p-10 flex flex-col justify-between group hover:border-secondary/20 transition-all duration-500 min-h-[300px]">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">air</span>
                  </div>
                  <h4 className="font-headline font-black text-2xl lg:text-3xl text-on-surface uppercase tracking-tight leading-none">AERO <br/>PROFILING.</h4>
                  <p className="text-on-surface-variant text-sm font-medium opacity-60 leading-relaxed">
                    Sculpted in the terminal wind tunnel for minimum drag coefficient and maximum stability in cross-atmospheric conditions.
                  </p>
                </div>
                <div className="pt-8 border-t border-white/5">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-40 mb-2">DRAG INDEX</p>
                  <p className="text-xl font-black text-on-surface tracking-tighter uppercase">0.24 CdA Nominal</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="md:col-span-8 bg-surface-container border border-white/5 rounded-[30px] lg:rounded-[40px] p-8 lg:p-10 relative overflow-hidden group flex flex-col lg:flex-row items-center gap-8 lg:gap-12 min-h-[400px]">
                <div className="w-full lg:w-1/3 relative h-48 lg:h-full flex items-center">
                  <div className="absolute inset-0 bg-primary opacity-[0.03] blur-[40px] rounded-full"></div>
                  <img alt="Geometry" className="relative z-10 h-full w-auto lg:w-full mx-auto lg:mx-0 grayscale invert opacity-40 transition-all duration-700 group-hover:opacity-60 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEYoK-LsZ7A5yaAlPZx_1_9B1DsyX7CCL3yDjE1uXeNBxzAjopb2tuiIr7p3RWLdgnOIn6qreiEn8VZe500noE9Ov2ym3FpRYJ1TwSP4xbKfgBKBjnigTjuBXYSQEQSfKTEZjY4y2N6mboLqzN4RxzZUrTgrssUhwhhpZpKuqFaNVvvho6GFVYv6_Dr5VmBr1WvqcfLeTKbHu2uRl678JgTolW2HHnXgVOcPOplrTbtwUKjzTIoLKCysrlACfIDsiIVBuj8wVVPFOB"/>
                </div>
                <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
                  <h4 className="font-headline text-3xl lg:text-4xl font-black text-on-surface uppercase tracking-tighter">OPERATIONAL GEOMETRY.</h4>
                  <p className="text-on-surface-variant text-base lg:text-lg font-medium opacity-60 leading-relaxed mx-auto lg:mx-0">
                    Aggressive race-tuned positioning balanced with precision ergonomics for sustained high-velocity output.
                  </p>
                  <div className="flex justify-center lg:justify-start gap-12 pt-4">
                    <div>
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">REACH</p>
                      <p className="text-2xl font-black text-on-surface">398<span className="text-sm ml-1 opacity-40">MM</span></p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">STACK</p>
                      <p className="text-2xl font-black text-on-surface">542<span className="text-sm ml-1 opacity-40">MM</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Narrative */}
        <section className="py-20 lg:py-32 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-primary opacity-[0.02] blur-[100px] rounded-[30px] lg:rounded-[40px] pointer-events-none"></div>
            <div className="aspect-square rounded-[30px] lg:rounded-[40px] overflow-hidden border border-white/5 relative z-10 shadow-2xl">
              <img alt="Engineering" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5CF9cOQ3wwSy6oiv1kvWhOen0wqPmciCBujwCod4RXovxfJpu7gDN1N1gsVN6tg5kwBSsxVhH9rO6BsC_MrTuVhP6jwKCqR_n32AuU0qDEw-0mGOPmfPoHZddhsaFZFj_qeo5GIXx7pLRlmUUz2yQoL0gJtcddRmS0odmg8JQpKxzVvQlkx-G-tgfMPVkRGtD_28F09-B5nnpi5462Ha5azTPKjqNCf61MpzGnhwnvWRebVxtmRrInTuv0wrG6M5EX5dhIgPx3BqU"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="font-headline text-4xl lg:text-6xl font-black text-on-surface uppercase tracking-tighter leading-tight lg:leading-none">
                CRAFTED FOR THE <br/><span className="text-primary">TERMINAL AGENT.</span>
              </h2>
              <p className="text-on-surface-variant text-base lg:text-lg font-medium opacity-70 leading-relaxed mx-auto lg:mx-0">
                At VELOCITY, we don't build equipment; we synthesize performance. The {product.MODEL_NAME} is the result of thousands of cycles of optimization and collaboration with the absolute edge.
              </p>
            </div>
            
            <div className="space-y-8">
              <p className="text-on-surface-variant text-sm font-medium opacity-60 leading-relaxed border-l-0 lg:border-l-2 border-primary/20 lg:pl-8">
                Every tube profile, every carbon layer, and every component interface has been scrutinized to ensure that when you initialize the system, zero output is lost. It is a symphony of rigid carbon and fluid operational motion.
              </p>
              
              <div className="flex justify-center lg:justify-start gap-12 lg:gap-16 pt-4">
                <div>
                  <p className="text-3xl lg:text-4xl font-black text-on-surface tracking-tighter">0.02</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mt-2">TOLERANCE (MM)</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-black text-on-surface tracking-tighter">PRO</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mt-2">TIER BUILD</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
