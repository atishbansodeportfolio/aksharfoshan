import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Code2, Cpu, ArrowRight, CheckCircle2, ChevronRight, Globe, ShieldCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-plum selection:text-white relative overflow-hidden flex flex-col justify-between">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-gold/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-brand-plum/5 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10 border-b border-brand-gold/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-plum to-brand-gold flex items-center justify-center shadow-lg shadow-brand-plum/20">
            <Layers className="text-brand-cream w-5.5 h-5.5" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-brand-charcoal to-brand-plum bg-clip-text text-transparent">
            aksharfoshan
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-gold/15 text-brand-plum border border-brand-gold/30">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Stack Ready
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col justify-center relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-plum/10 text-brand-plum border border-brand-plum/20 mb-6 hover:bg-brand-plum/15 transition-all duration-300 cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-spin-slow" />
                <span>Next-Gen Procurement Ecosystem</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-charcoal leading-[1.1]">
                Welcome to <br />
                <span className="bg-gradient-to-r from-brand-plum via-brand-gold to-brand-plum bg-clip-text text-transparent bg-300% animate-gradient">
                  Akshar Foshan
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-brand-charcoal/80 max-w-xl leading-relaxed"
            >
              Your modern, high-performance platform for sourcing, global logistics, and luxury hospitality procurement. Designed to match the elegance of hotelprocurement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <a
                href="#stack"
                className="group px-6 py-3 rounded-xl bg-brand-plum text-brand-cream font-medium shadow-xl shadow-brand-plum/20 hover:shadow-brand-plum/35 flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
              >
                Inspect Stack
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="px-6 py-3 rounded-xl bg-white/60 backdrop-blur-md text-brand-charcoal font-medium border border-brand-gold/30 flex items-center gap-2 hover:bg-white/80 transition-colors duration-300 cursor-default">
                <span>Waiting for Pages...</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stack Card showcase */}
          <div className="md:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="w-full bg-white/70 backdrop-blur-lg rounded-2xl border border-brand-gold/30 shadow-2xl p-6 relative overflow-hidden"
            >
              {/* Card Accent Grid line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-plum via-brand-gold to-brand-plum" />
              
              <h3 className="text-lg font-bold text-brand-charcoal mb-5 flex items-center gap-2">
                <Cpu className="text-brand-plum w-5 h-5" />
                Active Tech Stack
              </h3>

              <div className="space-y-4">
                {/* Tech item: React 19 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-brand-cream/50 border border-brand-gold/15 hover:bg-brand-cream/80 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 font-semibold text-sm">
                      R
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-brand-charcoal">React 19</h4>
                      <p className="text-xxs text-brand-charcoal/60">UI Framework</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Installed
                  </span>
                </div>

                {/* Tech item: Vite 8 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-brand-cream/50 border border-brand-gold/15 hover:bg-brand-cream/80 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 font-semibold text-sm">
                      V
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-brand-charcoal">Vite 8</h4>
                      <p className="text-xxs text-brand-charcoal/60">Frontend Tooling</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Installed
                  </span>
                </div>

                {/* Tech item: Tailwind v4 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-brand-cream/50 border border-brand-gold/15 hover:bg-brand-cream/80 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 font-semibold text-sm">
                      T
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-brand-charcoal">Tailwind CSS v4</h4>
                      <p className="text-xxs text-brand-charcoal/60">Utility CSS engine</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Installed
                  </span>
                </div>

                {/* Tech item: Typescript */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-brand-cream/50 border border-brand-gold/15 hover:bg-brand-cream/80 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 font-semibold text-xs">
                      TSX
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-brand-charcoal">TypeScript</h4>
                      <p className="text-xxs text-brand-charcoal/60">Type Safety</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Installed
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-brand-gold/20 bg-white/40 backdrop-blur-md py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-brand-charcoal/60">
          <p>© 2026 Akshar Foshan. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-brand-gold" /> Premium Build</span>
            <span className="flex items-center gap-1"><Globe className="w-4 h-4 text-brand-plum" /> Global Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
