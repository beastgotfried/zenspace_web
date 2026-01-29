import React from 'react';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden">
      
      {/* Global Navbar / Header could go here, but Hero serves as main entry */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-[#020617]/50 border-b border-white/5">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-cyan-500 rounded-full blur-[2px] opacity-80" />
            <span className="font-display font-bold text-xl tracking-tight">ZenSpace</span>
        </div>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors">
            v1.0.4
        </a>
      </nav>

      <Hero />
      
      <div className="relative">
        {/* Section divider glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <BentoGrid />
      </div>

      <Footer />
    </main>
  );
};

export default App;
