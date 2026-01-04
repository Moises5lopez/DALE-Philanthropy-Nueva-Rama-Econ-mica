
import React, { useState } from 'react';
import { TrendingUp, CheckCircle, AlertTriangle, Lightbulb, Loader2, Search, Target, BarChart2, Shield } from 'lucide-react';
import { analyzeBusinessStrategy } from '../services/gemini';

const StrategyDebate: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    setError('');
    try {
      const data = await analyzeBusinessStrategy(input);
      setResult(data);
    } catch (err) {
      setError('Hubo un error al analizar la estrategia. Por favor, intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white border border-slate-100 shadow-2xl overflow-hidden mt-12">
      <div className="grid lg:grid-cols-5">
        <div className="lg:col-span-2 relative min-h-[300px] md:min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
            alt="Data Analysis" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dale-red/90 flex flex-col items-center justify-center p-8 md:p-12 text-center text-white backdrop-blur-sm">
            <BarChart2 size={64} strokeWidth={1} className="mb-6 drop-shadow-xl md:w-20 md:h-20" />
            <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none mb-4">
              Análisis de <br /> <span className="text-dale-dark">Viabilidad</span>
            </h3>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] opacity-80 border-t border-white/20 pt-4">Estrategia & Sostenibilidad</p>
          </div>
        </div>
        
        <div className="lg:col-span-3 p-8 md:p-10 bg-white flex flex-col justify-center text-center md:text-left">
          <div className="mb-8">
            <div className="flex items-center justify-center md:justify-start gap-2 text-dale-red font-black uppercase text-[10px] tracking-widest mb-4">
              <Shield size={14} /> Consultoría Académica
            </div>
            <h4 className="text-2xl md:text-3xl font-black text-dale-dark uppercase tracking-tighter mb-4 italic">¿Realmente vale la pena?</h4>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">Analiza la ejecución y el impacto de cualquier modelo de negocio. Obtén un veredicto senior sobre su sostenibilidad real.</p>
          </div>
          
          <form onSubmit={handleAnalyze} className="space-y-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ej: Abrir una tienda de productos 100% biodegradables en una zona rural sin acceso a internet..."
              className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-5 text-slate-700 focus:outline-none focus:border-dale-red transition-all font-medium text-lg placeholder:text-slate-300 min-h-[160px] resize-none text-center md:text-left"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-full bg-dale-dark hover:bg-black disabled:bg-slate-300 text-white font-black uppercase tracking-[0.2em] px-10 py-6 flex items-center justify-center gap-3 transition-all active:scale-95 shadow-2xl shadow-slate-900/30 text-xs"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
              {loading ? 'Consultando IA...' : 'Debatir Viabilidad Estratégica'}
            </button>
          </form>
        </div>
      </div>

      <div className="p-6 md:p-10 bg-slate-50">
        {error && (
          <div className="bg-red-50 border-l-4 border-dale-red text-dale-red p-6 mb-8 font-bold animate-in fade-in slide-in-from-top-4 text-center md:text-left">
            {error}
          </div>
        )}

        {result ? (
          <div className="space-y-12 animate-in fade-in zoom-in-95 duration-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 md:p-10 shadow-xl border-t-8 border-dale-dark text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                  <div className="p-2 bg-dale-red text-white"><CheckCircle size={18} /></div>
                  <h4 className="text-dale-dark font-black uppercase tracking-widest text-[10px]">Diagnóstico Crítico</h4>
                </div>
                <p className="text-slate-700 leading-relaxed font-bold italic text-xl">"{result.diagnostico}"</p>
              </div>
              <div className="bg-dale-red text-white p-8 md:p-10 shadow-xl border-t-8 border-white flex flex-col justify-center items-center text-center">
                <Target size={50} className="mb-4 text-white/40" />
                <h4 className="font-black uppercase tracking-widest text-[10px] mb-4 opacity-70">Veredicto Ejecutivo</h4>
                <p className="text-2xl md:text-3xl font-black leading-tight uppercase italic tracking-tighter">{result.veredictoViabilidad}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 pt-4">
              <div className="space-y-6 text-center md:text-left">
                <h4 className="text-dale-dark font-black uppercase tracking-widest text-xs flex items-center justify-center md:justify-start gap-3">
                  <AlertTriangle className="text-amber-500" size={20} /> Riesgos de Ejecución
                </h4>
                <div className="space-y-3">
                  {result.riesgos.map((r: string, i: number) => (
                    <div key={i} className="bg-white border-l-4 border-amber-500 p-6 text-slate-600 text-sm font-semibold shadow-sm italic hover:bg-amber-50 transition-colors">
                      {r}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6 text-center md:text-left">
                <h4 className="text-dale-dark font-black uppercase tracking-widest text-xs flex items-center justify-center md:justify-start gap-3">
                  <Lightbulb className="text-emerald-500" size={20} /> Estrategias de Mejora
                </h4>
                <div className="space-y-3">
                  {result.mejoras.map((m: string, i: number) => (
                    <div key={i} className="bg-emerald-50 border-l-4 border-emerald-500 p-6 text-emerald-800 text-sm font-bold shadow-sm hover:bg-emerald-100 transition-colors">
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : !loading && (
          <div className="py-20 text-center text-slate-300">
            <Target size={64} className="mx-auto mb-6 opacity-10" />
            <p className="font-bold uppercase tracking-[0.3em] text-xs italic px-4">Ingresa un modelo para análisis de viabilidad...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategyDebate;
