
import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon?: ReactNode;
  iconBg?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, iconBg = "bg-dale-red", children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 mb-12 md:mb-16 border-b border-slate-200 pb-8 text-center md:text-left">
          {icon && (
            <div className={`p-5 ${iconBg} rounded-2xl shadow-xl shadow-red-500/10 shrink-0 mx-auto md:mx-0`}>
              {icon}
            </div>
          )}
          <div className="flex flex-col items-center md:items-start w-full">
            <h2 className="text-3xl md:text-5xl font-black text-dale-dark uppercase tracking-tight leading-tight">{title}</h2>
            <div className="h-1.5 w-24 bg-dale-red mt-3"></div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
