import { useEffect, useState } from 'react';
import { fetchResumeData, ResumeType } from './services/resumeService';
import { ResumeData } from './types';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Background } from './components/Background';

function App() {
  const [allResumeData, setAllResumeData] = useState<{portfolio: ResumeData | null, full: ResumeData | null}>({
    portfolio: null,
    full: null
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [viewType, setViewType] = useState<ResumeType>('portfolio');

  useEffect(() => {
    const loadAllData = async () => {
      setLoading(true);
      try {
        // Fetch both versions in parallel
        const [portfolio, full] = await Promise.all([
          fetchResumeData('portfolio'),
          fetchResumeData('full')
        ]);
        setAllResumeData({ portfolio, full });
        setError(null);
      } catch (err) {
        setError('Failed to load portfolio data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  const toggleView = () => {
    const nextView = viewType === 'portfolio' ? 'full' : 'portfolio';
    setViewType(nextView);
    
    // Always scroll to experience section
    // Using a timeout to allow React to render the new content length/layout
    setTimeout(() => {
      const element = document.getElementById('experience');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 relative overflow-hidden">
        <Background />
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          <p className="text-slate-600 dark:text-slate-400 font-medium animate-pulse">
            Loading Profile...
          </p>
        </div>
      </div>
    );
  }

  const currentData = viewType === 'portfolio' ? allResumeData.portfolio : allResumeData.full;

  if (error || !currentData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 dark:bg-slate-900 text-red-600 dark:text-red-400">
        <Background />
        <p className="z-10 bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl">{error || 'No data found'}</p>
      </div>
    );
  }

  // Calculate available sections for Navigation
  const sections: string[] = [];
  if (currentData.work && currentData.work.length > 0) sections.push('experience');
  if (currentData.skills && currentData.skills.length > 0) sections.push('skills');
  if (currentData.projects && currentData.projects.length > 0) sections.push('projects');

  return (
    <div className="min-h-screen relative transition-colors duration-500">
      <Background />
      <Navigation 
        availableSections={sections} 
        profiles={currentData.basics.profiles} 
        viewType={viewType}
        onToggleView={toggleView}
      />
      
      <main className="pb-20">
        <Hero 
          basics={currentData.basics} 
        />
        
        {/* We use specific ordering based on standard portfolio flow */}
        {currentData.work && <Experience work={currentData.work} />}
        {currentData.skills && <Skills skills={currentData.skills} />}
        {currentData.projects && <Projects projects={currentData.projects} />}
      </main>

      <Footer basics={currentData.basics} />
    </div>
  );
}

export default App;