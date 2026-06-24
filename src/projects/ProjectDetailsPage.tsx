import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Eye, MapPin, Award, Sliders, Info, Image as ImageIcon } from 'lucide-react';
import { projectsData, getProjectImages } from '../data/projectsData';

export default function ProjectDetailsPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === projectId);

  // Redirect to archive page if project is not found
  useEffect(() => {
    if (!project) {
      navigate('/projects');
    } else {
      window.scrollTo(0, 0);
    }
  }, [project, navigate]);

  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  if (!project) return null;

  const allImages = getProjectImages(project.folderName, project.imageCount);

  const openLightbox = (index: number) => {
    setLightboxData({
      isOpen: true,
      images: allImages,
      currentIndex: index,
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
    <div className="bg-[#FAF8F5] min-h-screen py-16 sm:py-24 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex gap-4 mb-10 select-none">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-plum transition-colors duration-300"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects Archive</span>
          </Link>
        </div>

        {/* Project Header Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-brand-charcoal leading-tight font-sans">
              {project.name}
            </h1>
            <p className="text-base sm:text-lg text-brand-charcoal/70 font-light leading-relaxed max-w-[800px] mt-2">
              {project.description}
            </p>
          </div>

          {/* Project Specifications Card (Right Panel) */}
          <div className="lg:col-span-4 bg-white border border-[#EBEBE9] rounded-[10px] p-8 shadow-sm w-full">
            <h3 className="text-xs font-extrabold text-brand-plum uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <Info className="w-4 h-4 text-brand-gold" />
              <span>Project Specifications</span>
            </h3>

            <div className="flex flex-col gap-4">
              {/* Location Detail */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-xs text-gray-400 font-medium">Location</span>
                <span className="text-xs font-bold text-brand-charcoal flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-plum" />
                  {project.location}
                </span>
              </div>

              {/* Brand Standard Detail */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-xs text-gray-400 font-medium">Brand Guidelines</span>
                <span className="text-xs font-bold text-brand-charcoal flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-brand-gold" />
                  {project.brand}
                </span>
              </div>

              {/* Scope Detail */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-xs text-gray-400 font-medium">Scope of Work</span>
                <span className="text-xs font-bold text-brand-charcoal flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-brand-plum" />
                  {project.scope}
                </span>
              </div>

              {/* Gallery Size Detail */}
              <div className="flex justify-between items-center py-2">
                <span className="text-xs text-gray-400 font-medium">Gallery Photos</span>
                <span className="text-xs font-bold text-brand-charcoal flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-brand-gold" />
                  {project.imageCount} High-Res Images
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Image Grid (Section Label) */}
        <div className="flex items-center gap-3 mb-10 select-none">
          <span className="text-xxs font-extrabold uppercase tracking-[0.3em] text-brand-plum">
            PROJECT GALLERY
          </span>
          <span className="w-8 h-[1px] bg-brand-gold/60" />
        </div>

        {/* High-Resolution Project Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {allImages.map((imgUrl, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className="group aspect-[4/3] bg-white rounded-[10px] overflow-hidden border border-[#EBEBE9] shadow-sm hover:shadow-md cursor-pointer relative"
            >
              <img 
                src={imgUrl} 
                alt={`${project.name} view ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Zoom overlay on image hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-11 h-11 rounded-full bg-white/95 text-brand-charcoal flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <Eye className="w-4.5 h-4.5 text-brand-plum" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="text-center mt-12">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-plum text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Projects Archive</span>
          </Link>
        </div>

      </div>

      {/* Dynamic Lightbox Gallery Modal */}
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
                  {project.name}
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

            {/* Stage Area (with navigation buttons pushed FAR to screen edges) */}
            <div className="relative w-full flex-grow flex items-center justify-center my-6 px-4 sm:px-16 md:px-28">
              {/* Left Arrow (Pushed far left) */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-6 md:left-12 z-10 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg border border-white/5"
                aria-label="Previous Image"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Central Photo */}
              <div className="max-w-4xl w-full flex items-center justify-center">
                <motion.img
                  key={lightboxData.currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  src={lightboxData.images[lightboxData.currentIndex]}
                  alt={`${project.name} installation view ${lightboxData.currentIndex + 1}`}
                  className="max-h-[55vh] sm:max-h-[68vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/5"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Right Arrow (Pushed far right) */}
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-6 md:left-auto md:right-12 z-10 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg border border-white/5"
                aria-label="Next Image"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Navigation Thumbnail List */}
            <div className="w-full max-w-4xl z-10" onClick={(e) => e.stopPropagation()}>
              {/* Current photo page */}
              <div className="text-center text-xs text-white/50 font-medium mb-4">
                {lightboxData.currentIndex + 1} of {lightboxData.images.length}
              </div>

              {/* Thumbnail Track */}
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
    </div>
  );
}
