import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-lg font-display">
            Z
          </div>
          <span className="text-slate-300 font-display font-bold text-lg">ZenSpace</span>
        </div>
        
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} ZenSpace Labs. Open Source MIT License.
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-full transition-all">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
