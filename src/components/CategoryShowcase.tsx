import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, ChevronRight, Eye } from 'lucide-react';

interface CategoryImage {
  path: string;
  title: string;
}

interface Category {
  id: string;
  name: string;
  folder: string;
  images: CategoryImage[];
}

const LOOKBOOK_DATA: Record<string, string[]> = {
  "clubchairs": [
    "palma.jpeg",
    "julian.jpeg",
    "amelie.jpeg",
    "sinclair.jpeg",
    "bruce.jpeg"
  ],
  "cabinets": [
    "dawson-bar-cabinate.jpeg",
    "dawson-tv-dressor.jpeg",
    "dawson-bookcase.jpeg",
    "dawson-dressor.jpeg",
    "vancouver-glass-cabinet.jpeg"
  ],
  "dining-tables": [
    "canmore.jpeg",
    "everton.jpeg",
    "Freeform.jpeg",
    "Seattle.jpeg",
    "Berlin.jpeg"
  ],
  "chair-and-benches": [
    "paloma.jpeg",
    "Sabine (E) Bench.jpeg",
    "carprice-bulged.jpeg",
    "otis.jpeg",
    "paloma-with-arm.jpeg"
  ],
  "barstools": [
    "caprice-barstool.jpeg",
    "Cassius Barstool.jpeg",
    "Dex_barstool.jpeg",
    "evan.jpeg",
    "sabina-barstool.jpeg",
    "school-chair-with-arms.jpeg",
    "school-chair.jpeg",
    "steve.jpeg"
  ],
  "sofas": [
    "senaa-chaise-lounge.jpeg",
    "senna-pouf.jpeg",
    "Senna-sofa-240.jpeg",
    "Senna-Sofa-285.jpeg",
    "victor-elements.jpeg"
  ]
};

// Helper function to format filename into a nice readable title
const formatTitle = (filename: string): string => {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  const withSpaces = nameWithoutExt.replace(/[-_]/g, ' ');
  return withSpaces
    .split(' ')
    .map(word => word ? word.charAt(0).toUpperCase() + word.slice(1) : '')
    .join(' ');
};

// Generate list of categories based on directory contents
const CATEGORIES: Category[] = [
  { id: 'clubchairs', name: 'Club Chairs', folder: 'clubchairs' },
  { id: 'barstools', name: 'Barstools', folder: 'barstools' },
  { id: 'cabinets', name: 'Cabinets', folder: 'cabinets' },
  { id: 'dining-tables', name: 'Dining Tables', folder: 'dining-tables' },
  { id: 'chair-and-benches', name: 'Chairs & Benches', folder: 'chair-and-benches' },
  { id: 'sofas', name: 'Sofas', folder: 'sofas' },
].map(cat => {
  const files = LOOKBOOK_DATA[cat.folder] || [];
  const sortedFiles = files;
  
  const images = sortedFiles.map((file) => {
    return {
      path: `/assets/lookbook/${cat.folder}/${file}`,
      title: formatTitle(file)
    };
  });

  return {
    ...cat,
    images
  };
});

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function CategoryShowcase() {
  const [activeCategoryId, setActiveCategoryId] = useState('clubchairs');
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    subcategoryName: string;
    images: string[];
    currentIndex: number;
  }>({
    isOpen: false,
    subcategoryName: '',
    images: [],
    currentIndex: 0,
  });

  const carouselRef = useRef<HTMLDivElement>(null);

  const activeCategory = CATEGORIES.find(c => c.id === activeCategoryId) || CATEGORIES[0];

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const openLightbox = (subcategoryName: string, images: string[], startIndex = 0) => {
    setLightboxData({
      isOpen: true,
      subcategoryName,
      images,
      currentIndex: startIndex,
    });
  };

  const closeLightbox = () => {
    setLightboxData(prev => ({ ...prev, isOpen: false }));
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxData(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxData(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24">
      
      {/* Header Area */}
      <div className="flex items-center justify-between mb-10 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-black text-brand-charcoal tracking-tight font-sans uppercase">
          Product Categories
        </h2>
        
        {/* Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll('left')}
            className="w-10 h-10 rounded-full border border-gray-100 bg-white hover:bg-brand-charcoal hover:text-white text-gray-500 shadow-sm flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-10 h-10 rounded-full border border-gray-100 bg-white hover:bg-brand-charcoal hover:text-white text-gray-500 shadow-sm flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left: Category Stack (Pills) */}
        <div className="w-full lg:w-64 shrink-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible no-scrollbar gap-2 lg:gap-0 lg:justify-between lg:h-[320px] pb-4 lg:pb-0">
          {CATEGORIES.map(category => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`flex items-center justify-between px-5 py-3.5 lg:py-2.5 rounded-full lg:rounded-xl font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 shrink-0 cursor-pointer text-left w-auto lg:w-full ${
                  isActive
                    ? 'bg-brand-plum text-white shadow-sm shadow-brand-plum/20'
                    : 'bg-[#F5F5F3] hover:bg-[#EBEBE9] text-[#2B2521]'
                }`}
              >
                <span className="truncate mr-4">{category.name}</span>
                <ChevronRight className={`w-4 h-4 shrink-0 hidden lg:block transition-transform duration-300 ${isActive ? 'translate-x-0.5' : 'text-gray-400'}`} />
              </button>
            );
          })}
        </div>

        {/* Right: Subcategories Carousel */}
        <div className="flex-grow w-full overflow-hidden relative">
          <motion.div
            ref={carouselRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategoryId}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 scroll-smooth"
          >
            {activeCategory.images.map((img, index) => (
              <motion.div
                key={img.path}
                variants={cardVariants}
                onClick={() => openLightbox(activeCategory.name, activeCategory.images.map(i => i.path), index)}
                className="group relative flex-none w-[270px] sm:w-[320px] snap-start bg-[#F5F5F3] rounded-[10px] overflow-hidden cursor-pointer aspect-square shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Full Background Image */}
                <img
                  src={img.path}
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-750 ease-out"
                />

                {/* Zoom overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#2B2521]/10 backdrop-blur-[1px] z-20">
                  <span className="bg-white/90 text-brand-charcoal font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full shadow-sm flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5" /> Zoom Style
                  </span>
                </div>

                {/* Image Name at the bottom center */}
                <div className="absolute bottom-6 inset-x-0 text-center z-10 px-12 pointer-events-none">
                  <h3 className="font-bold text-[#2B2521] text-[10px] sm:text-xs tracking-widest uppercase font-sans">
                    {img.title}
                  </h3>
                </div>

                {/* Arrow Button at the bottom-right in a small bubble */}
                <div className="absolute bottom-4 right-4 z-30">
                  <div className="w-8 h-8 rounded-full bg-white text-brand-charcoal group-hover:bg-brand-charcoal group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-black/5">
                    <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Lookbook Lightbox Modal */}
      <AnimatePresence>
        {lightboxData.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-[#2B2521]/95 backdrop-blur-md z-[100] flex flex-col items-center justify-between p-4 sm:p-8"
          >
            {/* Modal Header */}
            <div className="w-full max-w-6xl flex justify-between items-center z-10">
              <div>
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block mb-1">Lookbook Gallery</span>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{lightboxData.subcategoryName}</h3>
              </div>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Stage Image Area */}
            <div className="relative w-full flex-grow flex items-center justify-center my-6 px-4 sm:px-16 md:px-28">
              
              {/* Left Stage Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-6 md:left-12 z-10 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg border border-white/5"
                aria-label="Previous Image"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Main Photo Container */}
              <div className="max-w-4xl w-full flex items-center justify-center">
                <motion.img
                  key={lightboxData.currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  src={lightboxData.images[lightboxData.currentIndex]}
                  alt={`${lightboxData.subcategoryName} details`}
                  className="max-h-[50vh] sm:max-h-[65vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/5"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Right Stage Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-6 md:left-auto md:right-12 z-10 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg border border-white/5"
                aria-label="Next Image"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Navigation Track */}
            <div className="w-full max-w-4xl z-10" onClick={(e) => e.stopPropagation()}>
              
              {/* Page Indicator */}
              <div className="text-center text-xs text-white/50 font-medium mb-4">
                {lightboxData.currentIndex + 1} of {lightboxData.images.length}
              </div>

              {/* Thumbnails list */}
              <div className="flex gap-3 justify-center items-center overflow-x-auto no-scrollbar py-2 max-w-full">
                {lightboxData.images.map((img, index) => {
                  const isActive = index === lightboxData.currentIndex;
                  return (
                    <button
                      key={index}
                      onClick={() => setLightboxData(prev => ({ ...prev, currentIndex: index }))}
                      className={`relative flex-none w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer border-2 ${
                        isActive
                          ? 'border-purple-400 scale-105 shadow-md shadow-purple-400/20'
                          : 'border-white/10 hover:border-white/35 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  );
                })}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
