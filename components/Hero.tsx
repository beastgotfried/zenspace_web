import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">v1.0.4 Release</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-[1.1]"
        >
          <span className="gradient-text">Code in Flow.</span>
          <br />
          <span className="cyber-gradient-text">Rest in Privacy.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          The offline-first <strong>Algorithm Assistant</strong> that guards your mental state while you work.
          Stress detection, posture analysis, and gesture control—all running locally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          {/* Download button */}
          <a
            href="https://github.com/teliamogh7578/ZenSpace"
            download
            className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            <Download className="w-5 h-5" />
            <span>Download for Windows</span>
            <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
          </a>

          {/* Source code button */}
          <a
            href="https://github.com/teliamogh7578/ZenSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-xl transition-all flex items-center gap-2"
          >
            <Code className="w-5 h-5" />
            <span>View Source</span>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="pt-12 flex items-center justify-center gap-8 text-slate-600"
        >
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span className="text-sm font-mono">ON-DEVICE PROCESSING</span>
          </div>
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono">PYTHON + MEDIAPIPE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;