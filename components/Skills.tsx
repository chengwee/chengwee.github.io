import React from 'react';
import { Skill } from '../types';
import { Section } from './Section';
import { Cpu, Code, Database, Layout, Server, Smartphone, Terminal, Wrench } from './Icons';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  // Helper to assign icons based on category name
  const getIconForCategory = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('language') || n.includes('polyglot')) return <Code className="w-5 h-5" />;
    if (n.includes('frontend') || n.includes('web') || n.includes('ui')) return <Layout className="w-5 h-5" />;
    if (n.includes('backend') || n.includes('api') || n.includes('server')) return <Server className="w-5 h-5" />;
    if (n.includes('database') || n.includes('storage') || n.includes('sql')) return <Database className="w-5 h-5" />;
    if (n.includes('mobile') || n.includes('app') || n.includes('ios') || n.includes('android')) return <Smartphone className="w-5 h-5" />;
    if (n.includes('tool') || n.includes('devops') || n.includes('cloud') || n.includes('infra')) return <Wrench className="w-5 h-5" />;
    if (n.includes('ai') || n.includes('data science') || n.includes('ml')) return <Cpu className="w-5 h-5" />;
    return <Terminal className="w-5 h-5" />;
  };

  return (
    <Section 
      id="skills" 
      title="Skills & Tech" 
      subtitle="The languages, frameworks, and tools that power my work."
      icon={<Cpu className="w-6 h-6" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="group relative h-full"
          >
            {/* Hover Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition duration-500"></div>
            
            <div className="relative h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-primary-600 dark:text-primary-400 shadow-inner">
                    {getIconForCategory(skill.name)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                      {skill.name}
                    </h3>
                    {skill.level && (
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {skill.level}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-full h-px bg-slate-100 dark:bg-slate-700/50 mb-4"></div>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-2">
                {skill.keywords.map((keyword, kIndex) => (
                  <span 
                    key={kIndex}
                    className="relative px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900/40 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden group/tag hover:border-primary-400 dark:hover:border-primary-500 transition-colors cursor-default"
                  >
                    {/* Hover Background Fill */}
                    <span className="absolute inset-0 bg-primary-50 dark:bg-primary-900/20 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200"></span>
                    <span className="relative z-10 group-hover/tag:text-primary-700 dark:group-hover/tag:text-primary-300 transition-colors">
                      {keyword}
                    </span>
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};