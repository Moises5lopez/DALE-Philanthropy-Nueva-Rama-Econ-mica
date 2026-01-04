
import React from 'react';
import { Rocket, ChevronDown, Award, Info } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16">
      {/* Imagen de fondo con superposición */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop" 
          alt="Liderazgo y Debate" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dale-dark/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 space-y-8 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-dale-red/20 border border-dale-red/40 text-dale-red font-bold text-[10px] md:text-sm tracking-widest uppercase animate-pulse">
          <Award size={18} /> Nueva Iniciativa Académica
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
          DEBATE <br />
          <span className="text-dale-red">ECONÓMICO</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4">
          <div className="h-[2px] w-12 bg-dale-red hidden md:block"></div>
          <p className="text-lg md:text-2xl text-slate-300 font-light tracking-wide max-w-2xl px-4">
            Emprendimiento Social y Análisis de Mercado para Líderes del Futuro.
          </p>
          <div className="h-[2px] w-12 bg-dale-red hidden md:block"></div>
        </div>

        <div className="pt-8 md:pt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto sm:max-w-none">
          <button 
            onClick={() => document.getElementById('descripcion')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 md:px-10 py-5 bg-dale-red hover:bg-red-700 text-white rounded-none font-black uppercase tracking-widest transition-all shadow-xl shadow-red-900/40 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 text-xs md:text-sm"
          >
            <Rocket size={18} className="hidden xs:block" /> Explorar Proyecto
          </button>
          <button 
            onClick={() => document.getElementById('sobre-dale')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 md:px-10 py-5 border-2 border-white/20 hover:border-white text-white rounded-none font-black uppercase tracking-widest transition-all bg-white/5 backdrop-blur-sm flex items-center justify-center gap-2 text-xs md:text-sm active:scale-95"
          >
            <Info size={18} className="hidden xs:block" /> ¿Qué es DALE?
          </button>
        </div>
      </div>

      <button 
        className="absolute bottom-10 animate-bounce cursor-pointer z-10 p-2" 
        onClick={() => document.getElementById('sobre-dale')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={48} className="text-white/30 hover:text-dale-red transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
