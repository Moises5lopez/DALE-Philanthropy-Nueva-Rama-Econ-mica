
import React from 'react';

const values = [
  { name: 'Pensamiento Crítico', color: 'border-dale-red' },
  { name: 'Responsabilidad', color: 'border-dale-red' },
  { name: 'Excelencia', color: 'border-dale-red' },
  { name: 'Transparencia', color: 'border-dale-red' },
  { name: 'Organización', color: 'border-dale-red' },
  { name: 'Determinación', color: 'border-dale-red' },
  { name: 'Integridad', color: 'border-dale-red' },
  { name: 'Coraje', color: 'border-dale-red' },
  { name: 'Empatía', color: 'border-dale-red' },
];

const ValuesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {values.map((val) => (
        <div key={val.name} className={`px-6 py-8 text-center bg-white border border-slate-100 shadow-sm border-b-4 ${val.color} hover:-translate-y-2 transition-transform duration-300 group`}>
          <span className="font-black text-[10px] sm:text-xs text-slate-400 group-hover:text-dale-red uppercase tracking-widest transition-colors">{val.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ValuesGrid;
