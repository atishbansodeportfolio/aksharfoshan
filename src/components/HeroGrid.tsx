import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function HeroGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 select-none">
      {/* 2 Equal Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch">
        
        {/* Left Column */}
        <div className="flex flex-col gap-4 sm:gap-6">
          
          {/* Top Large Card (Full width hero-1.jpeg background) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group relative h-[240px] sm:h-[380px] rounded-[24px] sm:rounded-[32px] overflow-hidden p-6 sm:p-10 flex flex-col justify-between border border-gray-100 bg-[#F5F5F5]"
          >
            {/* Full-width background image */}
            <img
              src="/assets/images/hero-1.jpeg"
              alt="Akshar Foshan Hotel Furniture"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-1000 ease-out"
            />

            {/* Top Text Content */}
            <div className="relative z-10 max-w-[180px] sm:max-w-[280px]">
              <span className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2 sm:mb-4">
                Hospitality FF&E Solutions
              </span>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-black text-brand-charcoal tracking-tight leading-[1.1] font-sans">
                Hotel furniture <br /> made simple
              </h2>
            </div>

            {/* Bottom Left: Read more / arrow button */}
            <div className="relative z-10 self-start">
              {/* Reference shows the button at the bottom-right of the left text column, let's keep it clean */}
            </div>

            {/* Absolute Arrow Link at Bottom Right */}
            <a
              href="#armchairs"
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-brand-charcoal hover:bg-brand-charcoal hover:text-white shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            >
              <ArrowUpRight className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-gray-500 hover:text-current" />
            </a>
          </motion.div>

          {/* Bottom Row of 2 Smaller Cards (Side-by-side on all screens) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            
            {/* Card 1: Shelf */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="group relative h-[160px] sm:h-[290px] bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between shadow-sm border border-gray-100/80"
            >
              {/* Full Bleed Image Layer */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="/assets/images/ref_shelf.png"
                  alt="Floating Wall Shelves"
                  className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-750 ease-out"
                />
              </div>
            </motion.div>

            {/* Card 2: Sideboard */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="group relative h-[160px] sm:h-[290px] bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between shadow-sm border border-gray-100/80"
            >
              {/* Full Bleed Image Layer */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="/assets/images/ref_sideboard.png"
                  alt="Suite Credenza Sideboards"
                  className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-750 ease-out"
                />
              </div>
            </motion.div>

          </div>

        </div>

        {/* Right Column: Tall Card (Sofa & Stool) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="h-[380px] sm:h-[500px] lg:h-auto rounded-[24px] sm:rounded-[32px] overflow-hidden relative shadow-sm border border-gray-100/80 group"
        >
          {/* Full Bleed Image */}
          <img
            src="/assets/images/ref_sofa_stool.png"
            alt="Sofa and Stool Decor"
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-1000 ease-out"
          />
        </motion.div>

      </div>
    </section>
  );
}
