import React, { useState, useEffect } from 'react';
import { Briefcase, Cpu, Terminal, Github, Linkedin, FileText } from './Icons';
import { ThemeToggle } from './ThemeToggle';
import { Profile } from '../types';

interface NavigationProps {
  availableSections?: string[];
  profiles?: Profile[];
  viewType?: 'portfolio' | 'full';
  onToggleView?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  availableSections = ['experience', 'skills', 'projects'], 
  profiles = [],
  viewType,
  onToggleView
}) => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const allNavItems = [
    { id: 'experience', label: 'Work', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Cpu className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Terminal className="w-4 h-4" /> },
  ];

  const navItems = allNavItems.filter(item => availableSections.includes(item.id));
  const githubProfile = profiles?.find(p => p.network.toLowerCase().includes('github'));
  const linkedinProfile = profiles?.find(p => p.network.toLowerCase().includes('linkedin'));

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }
      
      const scrollPosition = window.scrollY + 300; 
      
      let current = '';
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, isScrolled]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  if (navItems.length === 0) return null;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className={`pointer-events-auto transition-[min-width,padding,background-color,border-radius,box-shadow,border-color] duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        flex items-center justify-between w-fit will-change-[min-width]
        ${isScrolled 
          ? 'min-w-0 rounded-full shadow-2xl shadow-slate-900/10 dark:shadow-black/40 bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl border border-white/20 dark:border-white/10 px-3 py-2 gap-2' 
          : 'min-w-[calc(100%)] md:min-w-[min(100%,72rem)] rounded-2xl bg-transparent border-transparent px-2 py-2 md:p-3'
        }
      `}>
        {/* Logo Area - Hidden on mobile */}
        <div className={`hidden sm:flex items-center gap-3 overflow-hidden whitespace-nowrap transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isScrolled ? 'ml-2' : 'ml-4'}
        `}>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
          >
            <span className={`font-black tracking-tighter text-slate-800 dark:text-white group-hover:opacity-80 transition-all duration-[1500ms] ${isScrolled ? 'text-lg' : 'text-xl'}`}>
              Cheng Wee<span className="text-primary-500">.</span>
            </span>
          </button>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center gap-1 mx-1 md:mx-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300
                  ${activeSection === item.id 
                    ? 'bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white shadow-sm scale-105' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-white/5'
                  }`}
              >
                <span className="md:hidden">{item.icon}</span>
                <span className="hidden md:block">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Actions - Always Visible */}
        <div className="flex items-center gap-2 mr-1">
          {onToggleView && (
            <button
              onClick={onToggleView}
              className="relative inline-flex h-9 overflow-hidden rounded-full p-[2px] focus:outline-none mr-2 group shadow-lg shadow-primary-500/20"
              title={viewType === 'portfolio' ? "View Full Resume" : "View Portfolio Summary"}
            >
              {/* Spinning Conic Gradient (Race Track) - Blue/Purple Gradient */}
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#3b82f6_40%,#8b5cf6_60%,#00000000_100%)]" />
              
              {/* Inner Content Container (Solid White Fill) */}
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white text-slate-900 px-4 py-1 text-xs font-bold backdrop-blur-3xl gap-2 transition-all group-hover:bg-slate-50">
                 <FileText className="w-3.5 h-3.5" />
                 <span className="hidden sm:inline">{viewType === 'portfolio' ? 'Full CV' : 'Summary'}</span>
                 <span className="sm:hidden">CV</span>
              </span>
            </button>
          )}

          <ThemeToggle />
          
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>
          
          <div className="hidden sm:flex items-center gap-2">
            {linkedinProfile && (
               <a href={linkedinProfile.url} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-[#0077b5] dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-all">
                  <Linkedin className="w-5 h-5" />
               </a>
            )}
            <a 
              href={githubProfile?.url || "https://github.com/chengwee"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-all"
            >
                <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};