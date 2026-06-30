import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between relative">
        
        {/* Left: Mobile Menu Toggle / Hamburger (Left on mobile, hidden on desktop) */}
        <div className="lg:hidden flex-none z-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-charcoal hover:text-brand-plum transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <FurnitureMenuIcon />}
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
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-6 px-6 space-y-4 shadow-lg animate-slideDown">
          {NAV_ITEMS.map((item) => {
            if (item.href.startsWith('/')) {
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors"
                >
                  {item.name}
                </Link>
              );
            }
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
