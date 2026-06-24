import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const COLLECTIONS = [
  { name: 'Marriott Standards', href: '#marriott' },
  { name: 'Hilton Standards', href: '#hilton' },
  { name: 'IHG Standards', href: '#ihg' },
  { name: 'Choice Standards', href: '#choice' },
  { name: 'Wyndham Standards', href: '#wyndham' }
];

const PRODUCTS = [
  { name: 'Casegoods & Suites', href: '#casegoods' },
  { name: 'Upholstery & Seating', href: '#seating' },
  { name: 'Lighting & Decor', href: '#lighting' },
  { name: 'Vanities & Bathrooms', href: '#vanity' }
];

const PAGES = [
  { name: 'Design Consulting', href: '#design' },
  { name: 'Sourcing & Quality Control', href: '#sourcing' },
  { name: 'Logistics & FOB/DDP', href: '#logistics' },
  { name: 'Warranty & Support', href: '#support' }
];

const BLOG = [
  { name: 'FF&E Sourcing Guides', href: '#blog1' },
  { name: 'Case Studies', href: '#blog2' }
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

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
          <Link to="/" className="flex items-center gap-1.5 sm:gap-3 cursor-pointer group whitespace-nowrap">
            <img 
              src="/assets/images/logo.png" 
              alt="Akshar Foshan Logo" 
              className="h-8 sm:h-9 lg:h-11 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-black tracking-tight text-brand-charcoal font-sans leading-none transition-colors duration-300 group-hover:text-brand-plum">
                Akshar Foshan
              </span>
              <span className="text-[6.5px] sm:text-[8px] lg:text-[9px] text-gray-400 font-bold uppercase tracking-[0.18em] mt-1 leading-none">
                HOSPITALITY FF&E
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links (hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-[11px] font-extrabold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors">
            Home
          </Link>

          {/* Collections Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('collections')}
              onMouseEnter={() => setActiveDropdown('collections')}
              className="flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors py-2 cursor-pointer"
            >
              Collections <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {activeDropdown === 'collections' && (
              <div 
                className="absolute top-full left-0 w-52 bg-white border border-gray-100 rounded-xl shadow-xl py-2 mt-1 animate-fadeIn"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {COLLECTIONS.map((c) => (
                  <a
                    key={c.name}
                    href={c.href}
                    className="block px-4 py-2 text-xs font-semibold text-brand-charcoal hover:bg-gray-50 hover:text-brand-plum transition-all"
                  >
                    {c.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('products')}
              onMouseEnter={() => setActiveDropdown('products')}
              className="flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors py-2 cursor-pointer"
            >
              Products <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {activeDropdown === 'products' && (
              <div 
                className="absolute top-full left-0 w-52 bg-white border border-gray-100 rounded-xl shadow-xl py-2 mt-1 animate-fadeIn"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {PRODUCTS.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    className="block px-4 py-2 text-xs font-semibold text-brand-charcoal hover:bg-gray-50 hover:text-brand-plum transition-all"
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('pages')}
              onMouseEnter={() => setActiveDropdown('pages')}
              className="flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors py-2 cursor-pointer"
            >
              Pages <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {activeDropdown === 'pages' && (
              <div 
                className="absolute top-full left-0 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 mt-1 animate-fadeIn"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {PAGES.map((pg) => (
                  <a
                    key={pg.name}
                    href={pg.href}
                    className="block px-4 py-2 text-xs font-semibold text-brand-charcoal hover:bg-gray-50 hover:text-brand-plum transition-all"
                  >
                    {pg.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('blog')}
              onMouseEnter={() => setActiveDropdown('blog')}
              className="flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors py-2 cursor-pointer"
            >
              Blog <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {activeDropdown === 'blog' && (
              <div 
                className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 mt-1 animate-fadeIn"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {BLOG.map((b) => (
                  <a
                    key={b.name}
                    href={b.href}
                    className="block px-4 py-2 text-xs font-semibold text-brand-charcoal hover:bg-gray-50 hover:text-brand-plum transition-all"
                  >
                    {b.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right: GET QUOTE Button (always on the right) */}
        <div className="flex-none flex justify-end items-center gap-4 z-10">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-brand-charcoal hover:bg-brand-plum hover:text-white text-white font-extrabold text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Get Quote
          </a>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-3 shadow-lg animate-slideDown">
          <Link to="/" className="block py-2 text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-plum transition-colors">
            Home
          </Link>
          
          <div className="space-y-1">
            <span className="block py-1 text-[10px] uppercase tracking-wider text-brand-plum font-extrabold">Collections</span>
            {COLLECTIONS.map((c) => (
              <a key={c.name} href={c.href} className="block py-1.5 pl-4 text-xs font-semibold text-brand-charcoal hover:text-brand-plum">
                {c.name}
              </a>
            ))}
          </div>

          <div className="space-y-1">
            <span className="block py-1 text-[10px] uppercase tracking-wider text-brand-plum font-extrabold">Products</span>
            {PRODUCTS.map((p) => (
              <a key={p.name} href={p.href} className="block py-1.5 pl-4 text-xs font-semibold text-brand-charcoal hover:text-brand-plum">
                {p.name}
              </a>
            ))}
          </div>

          <div className="space-y-1">
            <span className="block py-1 text-[10px] uppercase tracking-wider text-brand-plum font-extrabold">Pages</span>
            {PAGES.map((pg) => (
              <a key={pg.name} href={pg.href} className="block py-1.5 pl-4 text-xs font-semibold text-brand-charcoal hover:text-brand-plum">
                {pg.name}
              </a>
            ))}
          </div>

          <div className="space-y-1">
            <span className="block py-1 text-[10px] uppercase tracking-wider text-brand-plum font-extrabold">Blog</span>
            {BLOG.map((b) => (
              <a key={b.name} href={b.href} className="block py-1.5 pl-4 text-xs font-semibold text-brand-charcoal hover:text-brand-plum">
                {b.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
