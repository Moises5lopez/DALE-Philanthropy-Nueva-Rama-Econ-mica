
import React from 'react';
import { X, ChevronRight } from 'lucide-react';

interface SidebarProps {
  sections: { id: string; label: string; icon: React.ReactNode }[];
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection, isOpen, onClose }) => {
  return (
    <>
      {/* Overlay con desenfoque para mayor enfoque en el menú */}
      <div 
        className={`fixed inset-0 bg-dale-dark/80 backdrop-blur-md z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      <aside 
        className={`
          fixed lg:sticky top-0 left-0 z-50 h-screen w-[85vw] max-w-[320px] bg-white border-r border-slate-100 
          transition-transform duration-500 ease-out transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 flex flex-col shadow-2xl lg:shadow-none
        `}
        aria-label="Menú de navegación lateral"
      >
        <div className="p-8 flex flex-col h-full">
          {/* Cabecera del Menú */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex flex-col">
              <h2 className="text-3xl font-black text-dale-red leading-none italic uppercase">DALE</h2>
              <p className="text-[10px] tracking-[0.4em] text-slate-400 uppercase font-bold">Nicaragua</p>
            </div>
            <button 
              onClick={onClose} 
              className="lg:hidden p-3 hover:bg-red-50 text-slate-500 hover:text-dale-red rounded-full transition-all border border-transparent active:border-dale-red/20"
              aria-label="Cerrar menú"
            >
              <X size={28} />
            </button>
          </div>

          {/* Enlaces de Navegación con áreas de toque optimizadas */}
          <nav className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar -mx-4 px-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(section.id);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                  onClose();
                }}
                className={`
                  flex items-center justify-between px-6 py-5 rounded-none transition-all duration-300 font-bold uppercase tracking-widest text-[11px]
                  ${activeSection === section.id 
                    ? 'bg-dale-red text-white shadow-lg shadow-red-500/20 translate-x-2' 
                    : 'text-slate-500 hover:text-dale-dark hover:bg-slate-50 active:bg-slate-100'
                  }
                `}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                <div className="flex items-center gap-4">
                  <div className={`${activeSection === section.id ? 'text-white' : 'text-slate-300'}`}>
                    {React.cloneElement(section.icon as React.ReactElement, { size: 16 })}
                  </div>
                  <span>{section.label}</span>
                </div>
                {activeSection === section.id && <ChevronRight size={14} className="opacity-50" />}
              </a>
            ))}
          </nav>

          {/* Pie del Menú */}
          <div className="mt-auto pt-8 border-t border-slate-100">
            <div className="bg-dale-dark p-6 -mx-4 px-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-dale-red font-black mb-1 italic">DALE Nicaragua</p>
              <p className="font-bold text-white uppercase text-[10px] tracking-widest opacity-80">Excelencia Educativa 2025</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
