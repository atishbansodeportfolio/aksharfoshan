import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroGrid from './components/HeroGrid';
import Features from './components/Features';
import BrandStrip from './components/BrandStrip';
import CategoryShowcase from './components/CategoryShowcase';
import OurProjects from './components/OurProjects';
import Stats from './components/Stats';
import Reviews from './components/Reviews';
import Services from './components/Services';
import ProjectsPage from './projects/ProjectsPage';
import ProjectDetailsPage from './projects/ProjectDetailsPage';
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
    <Router>
      <div className="min-h-screen bg-white text-brand-charcoal selection:bg-brand-plum selection:text-white relative flex flex-col justify-between">
        
        {/* Sticky Header Nav */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                {/* Featured Products Grid */}
                <div id="collections" className="pt-6 pb-4">
                  <HeroGrid />
                </div>

                {/* Brand Core Values */}
                <Features />

                {/* Product Categories Showcase */}
                <CategoryShowcase />

                {/* Brand Logos Strip */}
                <BrandStrip />

                {/* Selected Hotel Projects Showcase */}
                <OurProjects />

                {/* Brand Track Record Stats */}
                <Stats />

                {/* Customer Reviews Section */}
                <Reviews />

                {/* Project Services Grid */}
                <Services />
              </>
            } />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          </Routes>
        </main>

        <footer className="w-full bg-white border-t border-gray-100 py-6 text-center text-xs text-gray-400">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© 2026 Akshar (Foshan) Hotel Furniture Co., Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-brand-plum transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-brand-plum transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </footer>

        {/* Floating Back to Top Button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-11 h-11 rounded-full border border-brand-plum bg-white text-brand-plum hover:bg-brand-plum hover:text-white shadow-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 z-50 cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
