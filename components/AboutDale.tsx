
import React from 'react';
import { Heart, Users, Award, ShieldCheck, Globe, Star, Zap, MessageCircle } from 'lucide-react';

const AboutDale: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-block px-4 py-1 bg-red-50 border-l-4 border-dale-red mx-auto md:mx-0">
            <h3 className="text-3xl font-black text-dale-dark uppercase tracking-tighter italic">DALE Nicaragua</h3>
          </div>
          <p className="text-slate-600 text-xl leading-relaxed font-bold italic">
            DALE Nicaragua es una organización estudiantil dedicada a la formación de jóvenes líderes a través del debate académico, la diplomacia y el pensamiento crítico.
          </p>
          <div className="text-slate-500 text-lg leading-relaxed space-y-4">
            <p>
              Su misión es crear espacios donde los estudiantes puedan desarrollar habilidades de oratoria, análisis y liderazgo, mientras reflexionan sobre problemáticas sociales, económicas y globales que impactan a sus comunidades y al país.
            </p>
            <p>
              A través de conferencias, prácticas formativas e iniciativas de impacto social, DALE busca democratizar el acceso a experiencias académicas de alto nivel, promoviendo valores como la integridad, la empatía, la excelencia, la disciplina y la responsabilidad.
            </p>
            <p className="font-bold text-dale-dark border-t border-slate-100 pt-4 mx-auto md:mx-0 max-w-md md:max-w-none">
              Más que un evento, DALE es una plataforma educativa que impulsa a los jóvenes a expresarse con criterio, a escuchar con respeto y a liderar con propósito.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-white p-8 border border-slate-100 shadow-xl shadow-slate-100 flex flex-col items-center md:items-start gap-4">
              <div className="p-3 bg-dale-red text-white shadow-lg shadow-red-200"><Star size={20} /></div>
              <h4 className="font-black uppercase text-sm tracking-widest text-dale-dark">Visión Educativa</h4>
              <p className="text-slate-500 text-sm">Plataforma que impulsa a los jóvenes a expresarse con criterio y liderar con propósito.</p>
            </div>
            <div className="bg-white p-8 border border-slate-100 shadow-xl shadow-slate-100 flex flex-col items-center md:items-start gap-4">
              <div className="p-3 bg-dale-dark text-white shadow-lg shadow-slate-400"><MessageCircle size={20} /></div>
              <h4 className="font-black uppercase text-sm tracking-widest text-dale-dark">Habilidades Clave</h4>
              <p className="text-slate-500 text-sm">Oratoria, diplomacia, pensamiento crítico y análisis estratégico de alto nivel.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
              alt="Estudiantes Debatiendo" 
              className="w-full h-72 object-cover rounded-none border-b-8 border-dale-red shadow-2xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
              alt="Liderazgo Estudiantil" 
              className="w-full h-48 object-cover rounded-none filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="space-y-4 pt-12">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
              alt="Colaboración Académica" 
              className="w-full h-48 object-cover rounded-none"
            />
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" 
              alt="Impacto Social" 
              className="w-full h-72 object-cover rounded-none border-t-8 border-dale-dark shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-dale-red p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] -mr-48 -mt-48"></div>
        <div className="relative z-10 space-y-8">
          <h4 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-center italic">Valores DALE</h4>
          <p className="text-center text-white/90 max-w-4xl mx-auto text-xl font-medium">
            Promovemos una cultura de integridad, empatía y excelencia para democratizar el acceso a experiencias académicas de alto nivel en todo el país.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center pt-8">
            {[
              { label: 'Integridad', value: '100%' },
              { label: 'Académica', value: 'Excelencia' },
              { label: 'Con Propósito', value: 'Liderazgo' },
              { label: 'Social', value: 'Empatía' }
            ].map((item, idx) => (
              <div key={idx} className="space-y-2 p-6 bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-3xl md:text-4xl font-black italic">{item.value}</p>
                <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDale;
