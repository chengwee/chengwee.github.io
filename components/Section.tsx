import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, icon, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24 ${className}`}
    >
      <div className="mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-2">
          {icon && <span className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">{icon}</span>}
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl ml-1">
            {subtitle}
          </p>
        )}
      </div>
      <div className="animate-fade-in">
        {children}
      </div>
    </section>
  );
};