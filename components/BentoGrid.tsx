import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Volume2, Eye, Zap, Lock, Activity, HandMetal } from 'lucide-react';
import { FeatureTileProps } from '../types';

const BentoTile: React.FC<FeatureTileProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  className = "", 
  children,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      className={`group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-slate-800/60 p-6 md:p-8 hover:border-cyan-500/30 transition-colors duration-500 ${className}`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-2xl bg-slate-950/50 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          {children}
        </div>
        
        <div className="mt-auto">
          <h3 className="text-xl md:text-2xl font-bold font-display text-slate-100 mb-2 group-hover:text-cyan-50 transition-colors">{title}</h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
    </motion.div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 min-h-[600px]">
        
        {/* Tile 1: Large - Privacy */}
        <BentoTile
          title="100% Privacy"
          description="Your data never leaves your machine. Powered by Edge AI, all MediaPipe processing happens on your local CPU/GPU. No cloud, no logs, no risks."
          icon={Shield}
          className="md:col-span-2 md:row-span-2 bg-gradient-to-b from-slate-900/80 to-slate-900/40"
          delay={0.1}
        >
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
            <Lock className="w-32 h-32 text-cyan-900" />
          </div>
          {/* Animated visual element representing local processing */}
          <div className="absolute bottom-1/2 translate-y-1/2 right-8 flex flex-col gap-2 pointer-events-none opacity-0 md:opacity-100 lg:opacity-100 group-hover:opacity-100 transition-opacity">
             <div className="flex gap-1 justify-end">
                {[1,2,3].map(i => (
                  <motion.div 
                    key={i}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-2 h-2 rounded-full bg-cyan-500" 
                  />
                ))}
             </div>
             <span className="text-xs font-mono text-cyan-700 text-right">LOCALHOST:8000</span>
          </div>
        </BentoTile>

        {/* Tile 2: Medium - Volume Pinch */}
        <BentoTile
          title="Volume Pinch"
          description="Control your system audio with a simple pinch gesture. Inspired by sci-fi interfaces, engineered for practicality."
          icon={Volume2}
          className="md:col-span-2 md:row-span-1"
          delay={0.2}
        >
          <div className="absolute top-4 right-4 text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-400">
            GESTURE_RECOGNITION
          </div>
        </BentoTile>

        {/* Tile 3: Medium - Fatigue Watch */}
        <BentoTile
          title="Fatigue Watch"
          description="Detects signs of exhaustion like yawning or nail-biting, prompting you to take a mindful break."
          icon={Eye}
          className="md:col-span-1 md:row-span-1"
          delay={0.3}
        />

        {/* Tile 4: Small - Zero Latency */}
        <BentoTile
          title="Zero Latency"
          description="Optimized Python backend <15ms response."
          icon={Zap}
          className="md:col-span-1 md:row-span-1 border-cyan-900/30"
          delay={0.4}
        >
           <Activity className="absolute bottom-4 right-4 w-12 h-12 text-slate-800 group-hover:text-cyan-900/50 transition-colors" />
        </BentoTile>

      </div>
    </section>
  );
};

export default BentoGrid;
