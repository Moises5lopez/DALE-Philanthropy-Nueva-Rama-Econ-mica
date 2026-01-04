
import React, { useState } from 'react';
import { Rocket, Send, Loader2, Info, MessageSquare, AlertCircle, Gavel, Camera, TrendingUp } from 'lucide-react';
import { generateSharkTankCase } from '../services/gemini';

const SharkTankDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    setError('');
    try {
      const data = await generateSharkTankCase(input);
      setResult(data);
    } catch (err) {
      setError('Hubo un error al generar el caso. Por favor, intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-none overflow-hidden border border-slate-100 shadow-2xl">
      <div className="grid lg:grid-cols-2">
        <div className="p-8 md:p-10 flex flex-col justify-center bg-slate-50 text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 text-dale-red bg-red-50 px-4 py-1 self-center md:self-start font-black uppercase text-xs tracking-widest">
            <Camera size={14} /> Laboratorio Interactivo
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-dale-dark mb-4 uppercase tracking-tighter italic">
            Shark Tank <span className="text-dale-red">Académico</span>
          </h3>
          <p className="text-slate-500 mb-8 leading-relaxed font-medium">
            Transforma cualquier idea de negocio estudiantil en un boletín de caso profesional listo para el debate. Los delegados aprenderán a defender su visión económica bajo presión de inversionistas éticos.
          </p>
          
          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe tu idea de negocio escolar aquí..."
                className="w-full bg-white border-2 border-slate-200 px-6 py-4 text-slate-700 focus:outline-none focus:border-dale-red transition-all font-medium text-lg placeholder:text-slate-300 text-center md:text-left"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-full bg-dale-red hover:bg-red-700 disabled:bg-slate-300 text-white font-black uppercase tracking-widest px-10 py-5 flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-red-500/20 shrink-0"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              {loading ? 'Simulando Caso...' : 'Iniciar Simulador'}
            </button>
          </form>
        </div>
        <div className="relative h-full min-h-[300px] md:min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
            alt="Pitch Presentation" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dale-dark/50 backdrop-blur-[1px] flex items-center justify-center">
            <Gavel className="text-white/90 drop-shadow-2xl w-24 md:w-32 lg:w-40 h-auto" strokeWidth={1} />
          </div>
        </div>
      </div>

      <div className="p-6 md:p-10 border-t border-slate-100">
        {error && (
          <div className="bg-red-50 border-l-4 border-dale-red text-dale-red p-6 mb-8 flex items-center justify-center md:justify-start gap-4 animate-in fade-in zoom-in text-center md:text-left">
            <AlertCircle className="shrink-0" /> <span className="font-bold">{error}</span>
          </div>
        )}

        {result ? (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-white p-6 md:p-10 relative border-l-8 border-dale-red shadow-xl text-center md:text-left">
              <h4 className="text-dale-red font-black uppercase tracking-widest text-sm mb-4 flex items-center justify-center md:justify-start gap-2">
                <Info size={18} /> Diagnóstico del Proyecto
              </h4>
              <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic">"{result.resumen}"</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              <div className="space-y-6 text-center md:text-left">
                <h4 className="text-dale-dark font-black uppercase tracking-widest text-sm flex items-center justify-center md:justify-start gap-3">
                  <span className="w-8 h-8 bg-dale-red text-white rounded-full flex items-center justify-center text-xs">01</span>
                  Puntos de Tensión (Debate)
                </h4>
                <div className="space-y-3">
                  {result.puntosCriticos.map((p: string, i: number) => (
                    <div key={i} className="bg-slate-50 border-l-2 border-dale-red p-5 transition-colors shadow-sm text-slate-600 font-medium italic">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6 text-center md:text-left">
                <h4 className="text-dale-dark font-black uppercase tracking-widest text-sm flex items-center justify-center md:justify-start gap-3">
                  <span className="w-8 h-8 bg-dale-dark text-white rounded-full flex items-center justify-center text-xs">02</span>
                  Interrogatorio de Tiburones
                </h4>
                <div className="space-y-3">
                  {result.preguntasTiburon.map((q: string, i: number) => (
                    <div key={i} className="bg-dale-dark text-white p-5 font-bold tracking-tight shadow-lg transform hover:-rotate-1 transition-transform">
                      {q}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="flex-1 w-full">
                <h4 className="text-dale-dark font-black uppercase tracking-widest text-sm mb-4 italic flex items-center justify-center md:justify-start gap-2">
                  <TrendingUp size={18} className="text-emerald-500" /> Métrica de Impacto Social
                </h4>
                <div className="bg-emerald-50 text-emerald-800 p-8 rounded-none border border-emerald-100 font-bold text-lg">
                  {result.impactoSocial}
                </div>
              </div>
              <div className="w-full md:w-64">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=400&auto=format&fit=crop" 
                  className="w-full h-48 object-cover shadow-2xl border-b-4 border-emerald-500" 
                  alt="Social Impact"
                />
              </div>
            </div>
          </div>
        ) : !loading && (
          <div className="py-20 md:py-24 text-center text-slate-300">
             <MessageSquare size={80} className="mx-auto mb-6 opacity-10" />
             <p className="font-black uppercase tracking-[0.3em] text-sm italic px-4">Esperando idea para simular caso...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SharkTankDemo;
