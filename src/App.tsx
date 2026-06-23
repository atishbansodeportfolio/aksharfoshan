import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroGrid from './components/HeroGrid';
import Features from './components/Features';
import CategoryShowcase from './components/CategoryShowcase';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-brand-charcoal selection:bg-amber-400 selection:text-brand-charcoal relative overflow-x-hidden flex flex-col justify-between">
      
      {/* Sticky Header Nav */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Featured Products Grid */}
        <div id="collections" className="pt-6 pb-4">
          <HeroGrid />
        </div>

        {/* Brand Core Values */}
        <Features />

        {/* Shop By Category Showcase */}
        <CategoryShowcase />
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Akshar (Foshan) Hotel Furniture Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-amber-500 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-amber-500 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-11 h-11 rounded-full border border-amber-400 bg-white text-amber-400 hover:bg-amber-400 hover:text-white shadow-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 z-50 cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4 stroke-[3]" />
        </button>
      )}
    </div>
  );
}

export default App;
