import React from 'react';
import { Basics } from '../types';
import { Mail } from './Icons';

export const Footer: React.FC<{ basics: Basics }> = ({ basics }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-8 text-center">
         
         <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Interested in working together?
            </h3>
            <a 
              href={`mailto:${basics.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-bold hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </a>
         </div>

         <div className="w-24 h-px bg-slate-200 dark:bg-slate-800"></div>

         <p className="text-sm text-slate-500 dark:text-slate-500">
            &copy; {currentYear} {basics.name}. All rights reserved.
         </p>
      </div>
    </footer>
  );
};