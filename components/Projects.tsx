import React from 'react';
import { Project } from '../types';
import { Section } from './Section';
import { Terminal, ExternalLink } from './Icons';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <Section 
      id="projects" 
      title="Featured Projects" 
      subtitle="A selection of my recent work and side projects."
      icon={<Terminal className="w-6 h-6" />}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col h-full bg-white/70 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Gradient Border Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5 rounded-2xl -z-10"></div>
            
            <div className="flex-1 p-8 bg-white/50 dark:bg-slate-800/50 rounded-[15px] h-full flex flex-col z-10">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl text-slate-700 dark:text-slate-200 shadow-inner">
                    <Terminal className="w-6 h-6" />
                 </div>
                 {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                    </a>
                 )}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.name}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {project.keywords && (
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-700/50">
                  {project.keywords.slice(0, 5).map((keyword, kIdx) => (
                    <span key={kIdx} className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wide">
                      #{keyword}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};