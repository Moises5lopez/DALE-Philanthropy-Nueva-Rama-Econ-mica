
import React, { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onReadMore?: () => void;
}

const Card: React.FC<CardProps> = ({ icon, title, description, onReadMore }) => {
  return (
    <div className="bg-white p-8 md:p-10 rounded-none border border-slate-100 shadow-sm hover:shadow-2xl hover:border-dale-red/20 transition-all group relative overflow-hidden flex flex-col items-center md:items-start text-center md:text-left">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 group-hover:bg-red-100 transition-colors"></div>
      
      <div className="mb-6 transform group-hover:-translate-y-1 transition-transform duration-300 relative z-10 p-4 bg-red-50 inline-block rounded-none mx-auto md:mx-0">
        {icon}
      </div>
      
      <h3 className="text-2xl font-black text-dale-dark mb-4 uppercase tracking-tighter italic relative z-10">{title}</h3>
      <p className="text-slate-500 leading-relaxed relative z-10 text-lg font-medium">{description}</p>
      
      <button 
        onClick={onReadMore}
        className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-center md:justify-start text-dale-red font-black text-[10px] tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity hover:underline w-full md:w-auto"
      >
        Leer más <span className="ml-2">→</span>
      </button>
    </div>
  );
};

export default Card;
