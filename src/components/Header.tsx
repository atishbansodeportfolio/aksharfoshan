import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Portfolio', href: '/projects' },
  { name: 'Services', href: '/#services' }
];

const FurnitureMenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 transition-all duration-300 animate-fadeIn"
  >
    {/* Three horizontal shelves representing a minimalist wall shelving unit/credenza */}
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
    {/* Small vertical shelf supports */}
    <line x1="8" y1="6" x2="8" y2="12" />
    <line x1="16" y1="12" x2="16" y2="18" />
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between relative">
        
        {/* Left: Mobile Menu Toggle / Hamburger (Left on mobile, hidden on desktop) */}
        <div className="lg:hidden flex-none z-10">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-brand-charcoal hover:text-brand-plum transition-colors cursor-pointer"
            aria-label="Open Menu"
          >
            <FurnitureMenuIcon />
          </button>
        </div>

        {/* Center on mobile / Left on desktop: Logo */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start z-10">
          <Link to="/" className="flex items-center cursor-pointer group">
            <img 
              src="/new-logo-1.png" 
              alt="Akshar Foshan Logo" 
              className="h-12 sm:h-14 lg:h-16 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Center: Navigation Links (hidden on mobile) */}
        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
          {NAV_ITEMS.map((item) => {
            if (item.href.startsWith('/')) {
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-[11px] font-extrabold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors"
                >
                  {item.name}
                </Link>
              );
            }
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-[11px] font-extrabold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors"
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right: GET QUOTE Button (always on the right) */}
        <div className="flex-none flex justify-end items-center gap-4 z-10">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-brand-charcoal hover:bg-brand-plum hover:text-white text-white font-extrabold text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Get Quote
          </a>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-charcoal/40 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Side Drawer Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-y-0 left-0 w-[300px] max-w-[80vw] bg-white z-50 shadow-2xl flex flex-col justify-between p-6 lg:hidden"
            >
              <div>
                {/* Header inside Drawer */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-8">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                    <img 
                      src="/new-logo-1.png" 
                      alt="Akshar Foshan Logo" 
                      className="h-10 object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-brand-charcoal hover:text-brand-plum transition-colors cursor-pointer"
                    aria-label="Close Menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links inside Drawer */}
                <nav className="flex flex-col gap-6">
                  {NAV_ITEMS.map((item, idx) => {
                    const isInternal = item.href.startsWith('/');

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {isInternal ? (
                          <Link
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-base font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors py-1.5"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-base font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors py-1.5"
                          >
                            {item.name}
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Footer inside Drawer */}
              <div className="border-t border-gray-100 pt-6 space-y-5">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-brand-charcoal hover:bg-brand-plum text-white font-extrabold text-xxs uppercase tracking-widest py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  Get Quote
                </a>
                <div className="text-[9px] text-gray-400 font-extrabold uppercase tracking-[0.2em] text-center">
                  Foshan • Seating • Casegoods
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
