import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ArrowLeft, ArrowRight, MapPin, Award, Sliders, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData, getProjectImages } from '../data/projectsData';

export default function OurProjects() {
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    projectName: string;
    images: string[];
    currentIndex: number;
  }>({
    isOpen: false,
    projectName: '',
    images: [],
    currentIndex: 0,
  });

  // Home page only displays the first 4 projects as sticky cards
  const featuredProjects = projectsData.slice(0, 4);

  const openLightbox = (projectName: string, folderName: string, count: number, startIndex = 0) => {
    const images = getProjectImages(folderName, count);
    setLightboxData({
      isOpen: true,
      projectName,
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
    <section id="portfolio" className="relative py-20 sm:py-28 bg-white overflow-visible border-b border-gray-100/50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 sm:mb-20">
          <div className="flex flex-col gap-4 max-w-[800px]">
            <div className="flex items-center gap-3">
              <span className="text-xxs font-extrabold uppercase tracking-[0.3em] text-brand-plum">
                OUR PORTFOLIO
              </span>
              <span className="w-8 h-[1px] bg-brand-gold/60" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-charcoal leading-tight font-sans">
              Realized spaces, built to last.
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/60 font-light leading-relaxed max-w-[620px]">
              Explore recently completed hotel installations across the United States. We manufacture casegoods and custom upholstered furniture matching strict brand guidelines and architectural specifications.
            </p>
          </div>
          
          {/* View All Projects Header Button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-plum hover:text-brand-gold border-b-2 border-brand-plum hover:border-brand-gold pb-1.5 transition-all duration-300 lg:mb-2"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>View All Projects</span>
          </Link>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative flex flex-col gap-8 sm:gap-12 lg:gap-16">
          {featuredProjects.map((project, idx) => {
            return (
              <div
                key={project.id}
                style={{ top: `calc(96px + ${idx * 40}px)` }}
                className={`w-full rounded-[10px] border border-black/5 grid grid-cols-1 lg:grid-cols-12 shadow-[0_12px_40px_rgba(0,0,0,0.03)] lg:shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 group relative ${project.bgClass} ${project.textClass} ${project.zClass} lg:sticky lg:h-[480px] min-h-[460px]`}
              >
                {/* Accent top line on card hover */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-plum scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 z-20" />

                {/* Left: Text & Info Column */}
                <div className="col-span-1 lg:col-span-6 p-8 sm:p-10 lg:p-14 flex flex-col justify-between items-start order-2 lg:order-1 h-full">
                  <div className="w-full flex flex-col items-start gap-4 sm:gap-6">
                    
                    {/* Badges Row */}
                    <div className="flex flex-wrap gap-2">
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${project.badgeBg} ${project.badgeText}`}>
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${project.badgeBg} ${project.badgeText}`}>
                        <Award className="w-3 h-3" />
                        <span>{project.brand}</span>
                      </div>
                    </div>

                    {/* Project Name */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans">
                      {project.name}
                    </h3>

                    {/* Scope of Work */}
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-brand-charcoal/50">
                      <Sliders className="w-3.5 h-3.5 text-brand-charcoal/40" />
                      <span>{project.scope}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm font-light leading-relaxed opacity-80 max-w-[480px]">
                      {project.description}
                    </p>
                  </div>

                  {/* Buttons Row (Gallery Lightbox & Single Page Link) */}
                  <div className="flex flex-wrap gap-3 mt-8 sm:mt-10">
                    <button
                      onClick={() => openLightbox(project.name, project.folderName, project.imageCount)}
                      className={`inline-flex items-center justify-center font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer select-none ${project.buttonClass}`}
                    >
                      Explore Gallery
                    </button>
                    <Link
                      to={`/projects/${project.id}`}
                      className={`inline-flex items-center justify-center font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest px-6 py-3 rounded-full shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${project.linkButtonClass}`}
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>

                {/* Right: Image Cover Column */}
                <div 
                  onClick={() => openLightbox(project.name, project.folderName, project.imageCount)}
                  className="col-span-1 lg:col-span-6 h-[250px] sm:h-[300px] lg:h-full overflow-hidden relative order-1 lg:order-2 cursor-pointer"
                >
                  <img
                    src={project.mainImage}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover icon bubble */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-brand-charcoal flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <Eye className="w-5 h-5 text-brand-plum" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Projects Bottom Bar */}
        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 bg-brand-charcoal hover:bg-brand-plum text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Explore All Projects</span>
          </Link>
        </div>

      </div>

      {/* Project Lightbox Modal */}
      <AnimatePresence>
        {lightboxData.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-[#2B2521]/96 backdrop-blur-md z-[100] flex flex-col items-center justify-between p-4 sm:p-8 select-none"
          >
            {/* Modal Header */}
            <div className="w-full max-w-6xl flex justify-between items-center z-10" onClick={(e) => e.stopPropagation()}>
              <div>
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block mb-1">
                  Installation Gallery
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {lightboxData.projectName}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Stage Image Area (with buttons pushed FAR) */}
            <div className="relative w-full flex-grow flex items-center justify-center my-6 px-4 sm:px-16 md:px-28">
              {/* Left Arrow (Pushed to far edges) */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-6 md:left-12 z-10 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg border border-white/5"
                aria-label="Previous Image"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Display Image Container */}
              <div className="max-w-4xl w-full flex items-center justify-center">
                <motion.img
                  key={lightboxData.currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  src={lightboxData.images[lightboxData.currentIndex]}
                  alt={`${lightboxData.projectName} view ${lightboxData.currentIndex + 1}`}
                  className="max-h-[55vh] sm:max-h-[68vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/5"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Right Arrow (Pushed to far edges) */}
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-6 md:right-12 z-10 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg border border-white/5"
                aria-label="Next Image"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Nav Track */}
            <div className="w-full max-w-4xl z-10" onClick={(e) => e.stopPropagation()}>
              {/* Index Indicator */}
              <div className="text-center text-xs text-white/50 font-medium mb-4">
                {lightboxData.currentIndex + 1} of {lightboxData.images.length}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 sm:gap-3 justify-start sm:justify-center items-center overflow-x-auto no-scrollbar py-2 max-w-full">
                {lightboxData.images.map((img, index) => {
                  const isActive = index === lightboxData.currentIndex;
                  return (
                    <button
                      key={index}
                      onClick={() => setLightboxData(prev => ({ ...prev, currentIndex: index }))}
                      className={`relative flex-none w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer border-2 ${
                        isActive
                          ? 'border-brand-gold scale-105 shadow-md shadow-brand-gold/20'
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
