import React, { useState } from 'react';
import { Basics, Work } from '../types';
import { Mail, MapPin, Code, Terminal } from './Icons';

interface HeroProps {
  basics: Basics;
  latestWork?: Work;
}

export const Hero: React.FC<HeroProps> = ({ basics, latestWork }) => {
  const [imgError, setImgError] = useState(false);

  const getGithubUsername = () => {
    const gh = basics.profiles.find(p => p.network.toLowerCase().includes('github'));
    if (gh && gh.username) return gh.username;
    if (gh && gh.url) {
      const parts = gh.url.split('/');
      return parts[parts.length - 1];
    }
    return 'chengwee';
  };

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex justify-center relative pt-32 pb-32 md:pt-40">
      
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start z-10">
        
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1 text-center md:text-left flex flex-col gap-8 animate-slide-up">
          <div className="flex flex-col gap-6">
             {/* Status Badge - Dynamic based on latest work */}
             {latestWork ? (
                <a 
                   href={latestWork.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`self-center md:self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm transition-all ${latestWork.url ? 'hover:scale-105 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400' : 'cursor-default'}`}
                   onClick={(e) => !latestWork.url && e.preventDefault()}
                >
                    <span className="relative flex h-3 w-3 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span>Building at {latestWork.name || latestWork.company}</span>
                </a>
             ) : (
                <div className="self-center md:self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm">
                   <span className="relative flex h-3 w-3 shrink-0">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                   </span>
                   Open to Opportunities
                </div>
             )}

             <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 animate-gradient-x pb-2 whitespace-nowrap">
                  {basics.name}
                </span>
             </h1>
             
             <h2 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center md:justify-start gap-3 mt-2">
               <Terminal className="w-8 h-8 text-primary-500 shrink-0" />
               <span className="leading-tight">{basics.label}</span>
             </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {basics.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <a 
              href={`mailto:${basics.email}`}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
             <div className="flex items-center justify-center md:justify-start gap-6 text-slate-500 dark:text-slate-400 text-sm font-medium">
                {basics.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-500" />
                    {basics.location.city}, {basics.location.countryCode}
                  </div>
                )}
             </div>

             {/* Experimental Projects / Intrusive Thoughts */}
             <div className="mt-2 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 italic">
                   <span>Born from intrusive thoughts:</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm font-mono text-slate-600 dark:text-slate-400">
                    <a 
                      href="https://unrivaled-toffee-a8b1ff.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary-500 hover:underline decoration-dashed underline-offset-4 transition-all"
                      title="A JSON Resume Renderer"
                    >
                      resume_renderer
                    </a>
                    <span className="text-slate-300 dark:text-slate-700">/</span>
                    <a 
                      href="https://ornate-cajeta-e89926.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary-500 hover:underline decoration-dashed underline-offset-4 transition-all"
                      title="Precision Drafting Canvas"
                    >
                      drafting_canvas
                    </a>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Visual/Image */}
        <div className="order-1 lg:order-2 flex justify-center relative">
           <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-4 border border-slate-200 dark:border-slate-800 rounded-full opacity-50"></div>
              
              {/* Code Snippet Decoration */}
              <div className="absolute -right-8 top-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 hidden md:block animate-bounce">
                <Code className="w-6 h-6 text-accent-500 mb-2" />
                <div className="space-y-1">
                  <div className="h-2 w-24 bg-slate-200 dark:bg-slate-600 rounded"></div>
                  <div className="h-2 w-16 bg-slate-200 dark:bg-slate-600 rounded"></div>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/50 dark:border-slate-800/50 shadow-2xl z-10 bg-slate-100 dark:bg-slate-800">
                {!imgError ? (
                  <img 
                    src="profile.jpg" 
                    alt={basics.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallbackUrl = `https://github.com/${getGithubUsername()}.png`;
                      if (target.src === fallbackUrl) {
                        setImgError(true);
                      } else {
                        target.src = fallbackUrl;
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500 to-accent-600 text-white text-6xl font-black">
                    {basics.name.charAt(0)}
                  </div>
                )}
              </div>
           </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10">
        <a 
          href="#experience" 
          onClick={handleScrollDown}
          className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-primary-500 transition-colors block"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
}