import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectsPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 sm:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-plum mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Page Title */}
        <div className="flex flex-col gap-4 mb-16 max-w-[800px]">
          <div className="flex items-center gap-3">
            <span className="text-xxs font-extrabold uppercase tracking-[0.3em] text-brand-plum">
              OUR COMPLETE PORTFOLIO
            </span>
            <span className="w-8 h-[1px] bg-brand-gold/60" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-brand-charcoal leading-tight font-sans">
            Hotel Installations
          </h1>
          <p className="text-sm sm:text-base text-brand-charcoal/60 font-light leading-relaxed">
            Browse our complete project archive across major hotel brands. Each installation represents a successful delivery of bespoke casegoods, vanities, and upholstered seating, engineered for high-occupancy hospitality durability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="bg-white border border-[#EBEBE9] rounded-[10px] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-[0_16px_36px_rgba(92,42,77,0.03)] hover:border-brand-plum/20 transition-all duration-300 group"
            >
              {/* Image Preview Container */}
              <Link 
                to={`/projects/${project.id}`}
                className="h-[240px] w-full overflow-hidden block relative"
              >
                <img 
                  src={project.mainImage} 
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Text Area */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  {/* Badges Row */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-brand-charcoal/70 bg-brand-cream border border-[#EBEBE9] px-2.5 py-1 rounded-full">
                      <MapPin className="w-2.5 h-2.5 text-brand-plum" />
                      {project.location.split(',')[0]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-brand-charcoal/70 bg-brand-cream border border-[#EBEBE9] px-2.5 py-1 rounded-full">
                      <Award className="w-2.5 h-2.5 text-brand-gold" />
                      {project.brand.split(' ')[0]}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-brand-charcoal font-sans group-hover:text-brand-plum transition-colors duration-300 mb-2">
                    <Link to={`/projects/${project.id}`}>
                      {project.name}
                    </Link>
                  </h3>

                  {/* Scope */}
                  <div className="text-[11px] font-semibold text-brand-charcoal/50 uppercase tracking-wider mb-3">
                    {project.scope}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* View Details Link */}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-plum hover:text-brand-gold transition-colors duration-300 self-start"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
