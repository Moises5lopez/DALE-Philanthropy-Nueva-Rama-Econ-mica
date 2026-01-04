
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Rocket, 
  Globe, 
  ChevronRight,
  Menu,
  Info,
  X
} from 'lucide-react';
import Hero from './components/Hero';
import Section from './components/Section';
import Card from './components/Card';
import SharkTankDemo from './components/SharkTankDemo';
import StrategyDebate from './components/StrategyDebate';
import Sidebar from './components/Sidebar';
import ValuesGrid from './components/ValuesGrid';
import AboutDale from './components/AboutDale';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [modalContent, setModalContent] = useState<{title: string, body: string} | null>(null);

  const sections = [
    { id: 'inicio', label: 'Inicio', icon: <Rocket className="w-5 h-5" /> },
    { id: 'sobre-dale', label: 'Sobre DALE', icon: <Info className="w-5 h-5" /> },
    { id: 'descripcion', label: 'Descripción', icon: <Globe className="w-5 h-5" /> },
    { id: 'objetivos', label: 'Objetivos', icon: <Target className="w-5 h-5" /> },
    { id: 'modalidades', label: 'Modalidades', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'demo', label: 'Laboratorio de Casos', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'viabilidad', label: 'Debate de Viabilidad', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'temas', label: 'Temas Clave', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'valores', label: 'Valores', icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPos && element.offsetTop + element.offsetHeight > scrollPos) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openInfo = (title: string, body: string) => {
    setModalContent({ title, body });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="flex min-h-screen bg-white overflow-x-hidden">
      <Sidebar 
        sections={sections} 
        activeSection={activeSection} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <main className="flex-1 transition-all duration-300">
        {/* Mobile Header optimizado */}
        <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 p-4 flex justify-between items-center shadow-lg h-16">
          <div className="flex flex-col">
            <h1 className="text-2xl font-black text-dale-red leading-none italic uppercase tracking-tighter">DALE</h1>
            <p className="text-[9px] tracking-[0.4em] text-slate-500 uppercase font-black">Nicaragua</p>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="p-3 bg-red-50 text-dale-red rounded-xl hover:bg-dale-red hover:text-white transition-all active:scale-95 flex items-center gap-2 border border-dale-red/10"
            aria-label="Abrir menú de navegación"
          >
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">Menú</span>
            <Menu className="w-6 h-6" />
          </button>
        </header>

        <Hero />

        {/* Modal para información detallada */}
        {modalContent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dale-dark/90 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="bg-white max-w-2xl w-full p-8 md:p-12 relative shadow-2xl overflow-y-auto max-h-[90vh] border-t-8 border-dale-red">
              <button onClick={closeModal} className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-dale-red transition-colors p-2" aria-label="Cerrar detalle">
                <X size={32} />
              </button>
              <div className="mb-6 h-1 w-20 bg-dale-red"></div>
              <h2 className="text-3xl font-black text-dale-dark uppercase tracking-tighter italic mb-6 leading-tight">{modalContent.title}</h2>
              <div className="text-slate-600 leading-relaxed space-y-4 text-lg font-medium">
                {modalContent.body.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
              <button 
                onClick={closeModal} 
                className="mt-10 w-full md:w-auto px-8 py-4 bg-dale-dark text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-dale-red transition-all shadow-xl active:scale-95"
              >
                Cerrar Detalle
              </button>
            </div>
          </div>
        )}

        <Section id="sobre-dale" title="¿Qué es DALE Nicaragua?" icon={<Info className="text-white" />} iconBg="bg-dale-red" className="section-alt">
          <AboutDale />
        </Section>

        <Section id="descripcion" title="Descripción del Proyecto" icon={<Globe className="text-white" />} iconBg="bg-dale-red">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p className="border-l-4 border-dale-red pl-6 py-2 bg-red-50 rounded-r-lg italic font-medium text-dale-red">
                "Una iniciativa académica para comprender la economía nacional desde el aula de debate."
              </p>
              <p>
                Este proyecto busca acercar a los delegados a situaciones reales: costo de vida, inflación, importaciones, aranceles y seguridad en rutas comerciales que afectan a las familias nicaragüenses.
              </p>
              <p>
                A través del debate académico riguroso, los estudiantes aprenderán a evaluar la viabilidad de negocios y proponer soluciones éticas para el desarrollo sostenible.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openInfo("Proyecto de Debate Económico", "Esta iniciativa surge para democratizar el conocimiento financiero en la juventud.\n\nDividiremos la rama en dos ejes fundamentales:\n\n1. Debate de Políticas Macroeconómicas: Donde analizamos cómo decisiones globales impactan en el precio local de los productos.\n\n2. Shark Tank de Impacto Social: Una incubadora de ideas donde el éxito no se mide solo en dinero, sino en el bienestar de la comunidad.\n\nQueremos que cada delegado sea un líder con conciencia económica.")}
                  className="px-8 py-4 bg-dale-dark text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-dale-red transition-all shadow-xl shadow-slate-900/10 active:scale-95 text-center"
                >
                  Conocer más del proyecto
                </button>
                <button 
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-dale-dark text-dale-dark font-black uppercase tracking-[0.2em] text-[10px] hover:bg-dale-dark hover:text-white transition-all active:scale-95 text-center"
                >
                  Ver Simulador
                </button>
              </div>
            </div>
            <div className="relative rounded-none overflow-hidden shadow-2xl group border-b-8 border-dale-red hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop" 
                alt="Economic Analysis" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-black text-xl uppercase tracking-tighter italic">Liderazgo & Economía</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="objetivos" title="Objetivos Académicos" icon={<Target className="text-white" />} iconBg="bg-dale-red" className="section-alt">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card 
              icon={<TrendingUp className="text-dale-red" />} 
              title="Educación Práctica" 
              description="Simplificación de conceptos económicos complejos para hacerlos accesibles y aplicables en el aula." 
              onReadMore={() => openInfo("Educación Práctica", "DALE busca que la economía deje de ser un tema 'solo para adultos'.\n\n- Simulaciones de Mercado: Los estudiantes experimentan la ley de oferta y demanda.\n- Gestión de Presupuestos: Aprenden a priorizar gastos en contextos de recursos limitados.\n- Conceptos Clave: PIB, Inflación y Liquidez explicados con ejemplos de la vida diaria.")}
            />
            <Card 
              icon={<BarChart3 className="text-dale-red" />} 
              title="Pensamiento Crítico" 
              description="Análisis estratégico de problemas locales del mercado y la comunidad inmediata en Nicaragua." 
              onReadMore={() => openInfo("Pensamiento Crítico", "El debate económico requiere un análisis 360.\n\n- Análisis de Causa-Efecto: ¿Por qué sube el precio del queso cuando hay sequía?\n- Evaluación de Aranceles: ¿Es mejor proteger la industria local o abrirse al mercado global?\n- Seguridad Logística: El impacto de la infraestructura en el costo de los alimentos.")}
            />
            <Card 
              icon={<Lightbulb className="text-dale-red" />} 
              title="Fomento Creativo" 
              description="Evaluación de ideas de negocio bajo criterios de rentabilidad, ética e impacto social tangible." 
              onReadMore={() => openInfo("Fomento Creativo", "Inspiramos a los jóvenes a ser creadores, no solo consumidores.\n\n- Prototipado Rápido: De la idea al plan en una sesión de debate.\n- Sostenibilidad Ambiental: Negocios que regeneran, no solo extraen.\n- Ética Empresarial: El debate sobre qué es un precio 'justo' en el mercado.")}
            />
            <Card 
              icon={<Users className="text-dale-red" />} 
              title="Habilidades de Vida" 
              description="Preparación para el mundo profesional real mediante la argumentación fundamentada y oratoria." 
              onReadMore={() => openInfo("Habilidades para la Vida", "Formamos líderes integrales para el siglo XXI.\n\n- Negociación Avanzada: Resolución de conflictos de interés económico.\n- Alfabetización Financiera: Entender cómo funciona el dinero y el crédito.\n- Oratoria Persuasiva: Cómo vender una visión y movilizar recursos para el bien común.")}
            />
          </div>
        </Section>

        <Section id="modalidades" title="Modelos de Debate" icon={<BarChart3 className="text-white" />} iconBg="bg-dale-red">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-10 border border-slate-100 shadow-sm hover:border-dale-red transition-all group flex flex-col">
              <div className="h-1.5 w-12 bg-dale-red mb-6 transition-all group-hover:w-full"></div>
              <h3 className="text-xl font-black text-dale-dark mb-4 uppercase italic">1. Problemas Reales</h3>
              <p className="text-slate-500 mb-8 text-sm font-medium">Debates sobre inflación, rutas comerciales y aranceles que afectan al país hoy.</p>
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-auto text-dale-red font-black uppercase text-[10px] tracking-widest hover:translate-x-2 transition-transform inline-flex items-center gap-2 p-2 -ml-2"
              >
                Ver Ejemplos <ChevronRight size={14} />
              </button>
            </div>
            <div className="bg-white p-10 border border-slate-100 shadow-sm hover:border-dale-red transition-all group flex flex-col">
              <div className="h-1.5 w-12 bg-dale-red mb-6 transition-all group-hover:w-full"></div>
              <h3 className="text-xl font-black text-dale-dark mb-4 uppercase italic">2. Shark Tank Académico</h3>
              <p className="text-slate-500 mb-8 text-sm font-medium">Presentación de ideas de negocio ante un panel crítico que evalúa viabilidad y ética social.</p>
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-auto text-dale-red font-black uppercase text-[10px] tracking-widest hover:translate-x-2 transition-transform inline-flex items-center gap-2 p-2 -ml-2"
              >
                Probar Simulador <ChevronRight size={14} />
              </button>
            </div>
            <div className="bg-white p-10 border border-slate-100 shadow-sm hover:border-dale-red transition-all group flex flex-col">
              <div className="h-1.5 w-12 bg-dale-red mb-6 transition-all group-hover:w-full"></div>
              <h3 className="text-xl font-black text-dale-dark mb-4 uppercase italic">3. Análisis de Viabilidad</h3>
              <p className="text-slate-500 mb-8 text-sm font-medium">Análisis profundo de ejecución: ¿Realmente vale la pena este negocio? Estrategias de mejora radical.</p>
              <button 
                onClick={() => document.getElementById('viabilidad')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-auto text-dale-red font-black uppercase text-[10px] tracking-widest hover:translate-x-2 transition-transform inline-flex items-center gap-2 p-2 -ml-2"
              >
                Ver Análisis <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </Section>

        <Section id="demo" title="Módulo 1: Generador de Casos" icon={<Lightbulb className="text-white" />} iconBg="bg-amber-500" className="section-alt">
          <SharkTankDemo />
        </Section>

        <Section id="viabilidad" title="Módulo 2: Análisis Estratégico" icon={<TrendingUp className="text-white" />} iconBg="bg-dale-dark">
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
            Discute si una estrategia de negocio realmente es sostenible. Nuestra IA actúa como consultor senior para generar puntos de debate sobre viabilidad operativa.
          </p>
          <StrategyDebate />
        </Section>

        <Section id="temas" title="Currículo de Temas" icon={<BookOpen className="text-white" />} iconBg="bg-dale-red" className="section-alt">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Pequeños negocios locales",
              "Importar vs. Producir local",
              "Fijación de precios justos",
              "Sostenibilidad económica",
              "Responsabilidad social corporativa",
              "Emprendimiento juvenil",
              "Economía de escala",
              "Seguridad logística",
              "Marketing con propósito"
            ].map((tema, i) => (
              <div 
                key={i} 
                className="p-6 bg-white border border-slate-100 hover:border-dale-red transition-all flex items-center gap-4 group cursor-pointer shadow-sm active:bg-red-50"
                onClick={() => openInfo(tema, `Profundizaremos en el impacto de ${tema.toLowerCase()} en el contexto de Nicaragua. \n\nCada tema incluye un boletín informativo, datos estadísticos simplificados y preguntas disparadoras para el debate en comités.`)}
              >
                <div className="w-1.5 h-1.5 bg-dale-red shrink-0 group-hover:h-8 transition-all"></div>
                <span className="font-bold text-slate-700 uppercase text-[10px] tracking-widest leading-tight">{tema}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="valores" title="Valores Organizacionales" icon={<ShieldCheck className="text-white" />} iconBg="bg-dale-red">
          <ValuesGrid />
        </Section>

        <footer className="py-20 px-6 bg-dale-dark text-center text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex flex-col items-center mb-10">
              <h1 className="text-5xl font-extrabold text-dale-red leading-none italic uppercase">DALE</h1>
              <p className="text-[10px] tracking-[0.6em] text-slate-400 uppercase font-bold mt-2">Nicaragua</p>
            </div>
            <div className="w-24 h-1 bg-dale-red mx-auto mb-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-slate-400 mb-12">
              <div>
                <h5 className="text-white font-black uppercase mb-6 tracking-widest text-[10px] border-b border-white/10 pb-2">Navegación</h5>
                <ul className="space-y-4">
                  <li><button className="hover:text-dale-red transition-colors font-bold uppercase text-[10px] tracking-widest w-full" onClick={() => { document.getElementById('inicio')?.scrollIntoView({behavior: 'smooth'}) }}>Inicio</button></li>
                  <li><button className="hover:text-dale-red transition-colors font-bold uppercase text-[10px] tracking-widest w-full" onClick={() => { document.getElementById('sobre-dale')?.scrollIntoView({behavior: 'smooth'}) }}>Sobre DALE</button></li>
                  <li><button className="hover:text-dale-red transition-colors font-bold uppercase text-[10px] tracking-widest w-full" onClick={() => { document.getElementById('demo')?.scrollIntoView({behavior: 'smooth'}) }}>Laboratorio</button></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-black uppercase mb-6 tracking-widest text-[10px] border-b border-white/10 pb-2">Recursos</h5>
                <ul className="space-y-4">
                  <li><button onClick={() => openInfo("Boletines Económicos", "Acceso exclusivo para delegados inscritos. \n\nNuestros boletines contienen casos de estudio sobre la canasta básica, exportación de café y el impacto de remesas en el PIB regional.")} className="hover:text-dale-red transition-colors font-bold uppercase text-[10px] tracking-widest w-full">Boletines</button></li>
                  <li><button onClick={() => openInfo("Guías de Debate", "Estructura formal para el Shark Tank Académico. \n\n- Tiempos de presentación (Pitch).\n- Rondas de interrogación (Q&A).\n- Criterios de evaluación (Impacto, Viabilidad, Ética).")} className="hover:text-dale-red transition-colors font-bold uppercase text-[10px] tracking-widest w-full">Guías</button></li>
                  <li><button onClick={() => openInfo("Estatutos", "Reglas de conducta y excelencia académica. \n\nDALE Nicaragua se rige por altos estándares de integridad y respeto mutuo.")} className="hover:text-dale-red transition-colors font-bold uppercase text-[10px] tracking-widest w-full">Estatutos</button></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-black uppercase mb-6 tracking-widest text-[10px] border-b border-white/10 pb-2 text-center md:text-left">Contacto</h5>
                <p className="font-bold uppercase text-[10px] tracking-widest mb-2 text-center md:text-left">Managua, Nicaragua</p>
                <p className="font-medium text-slate-300 text-center md:text-left">contacto@dalenicaragua.com</p>
              </div>
            </div>
            <p className="text-slate-500 text-[9px] uppercase tracking-[0.4em] font-black">© 2025 DALE Nicaragua - Educación con Propósito</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
