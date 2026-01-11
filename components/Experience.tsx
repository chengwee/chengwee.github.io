import React from 'react';
import { Work } from '../types';
import { Section } from './Section';
import { Briefcase, Calendar, ExternalLink } from './Icons';

interface ExperienceProps {
  work: Work[];
}

export const Experience: React.FC<ExperienceProps> = ({ work }) => {
  if (!work || work.length === 0) return null;

  return (
    <Section 
      id="experience" 
      title="Work Experience" 
      subtitle="My professional journey and career highlights."
      icon={<Briefcase className="w-6 h-6" />}
    >
      <div className="relative pl-0 md:pl-0">
        
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-48 top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>

        <div className="space-y-12">
          {work.map((job, index) => (
            <div key={index} className="relative">
              
              {/* Increased gap from md:gap-8 to md:gap-16 to create space between dot and card */}
              <div className="flex flex-col md:flex-row md:gap-16">
                
                {/* Date Column (Desktop) */}
                <div className="hidden md:flex flex-col items-end w-40 shrink-0 pt-1 text-right">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {job.startDate}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                    {job.endDate || 'Present'}
                  </span>
                </div>

                {/* Mobile Date (Weaving in between) */}
                <div className="md:hidden pl-10 mb-2">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300">
                      <Calendar className="w-3 h-3" />
                      <span>{job.startDate} — {job.endDate || 'Present'}</span>
                   </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-48 w-3 h-3 -translate-x-1.5 mt-2.5 rounded-full border-2 border-primary-500 bg-white dark:bg-slate-900 z-10 shadow-[0_0_0_4px_rgba(255,255,255,0.5)] dark:shadow-[0_0_0_4px_rgba(15,23,42,0.5)]"></div>

                {/* Content Card */}
                <div className="pl-10 md:pl-0 flex-1">
                  <div className="group relative bg-white/70 dark:bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-sm hover:shadow-xl transition-all duration-300">
                     
                     <div className="flex flex-col gap-1 mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">
                          {job.position}
                        </h3>
                        
                        {job.url ? (
                          <a 
                            href={job.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 self-start group/link"
                          >
                             <span className="text-lg font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                               {job.name || job.company}
                             </span>
                             <ExternalLink className="w-4 h-4 text-primary-500 dark:text-primary-400 opacity-80 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                          </a>
                        ) : (
                          <div className="text-lg font-semibold text-slate-600 dark:text-slate-400">
                            {job.name || job.company}
                          </div>
                        )}
                     </div>

                     <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5 text-[15px]">
                       {job.summary}
                     </p>

                     {/* Highlights */}
                     {job.highlights && job.highlights.length > 0 && (
                        <ul className="space-y-3">
                          {job.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0"></span>
                              <span className="leading-snug">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                     )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};