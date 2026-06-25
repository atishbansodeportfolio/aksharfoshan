import React from 'react';
import { motion } from 'framer-motion';


const col1 = [
  {
    url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    alt: 'Hanging lightbulb',
    height: 'h-[160px] sm:h-[220px]',
  },
  {
    url: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=600&q=80',
    alt: 'Console table',
    height: 'h-[280px] sm:h-[360px]',
  },
  {
    url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80',
    alt: 'White armchair',
    height: 'h-[240px] sm:h-[300px]',
  },
  {
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    alt: 'Cozy lounge chair',
    height: 'h-[260px] sm:h-[340px]',
  }
];

const col2 = [
  {
    url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    alt: 'Teacup detail',
    height: 'h-[260px] sm:h-[320px]',
  },
  {
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
    alt: 'Sofa with frames',
    height: 'h-[240px] sm:h-[320px]',
  },
  {
    url: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=600&q=80',
    alt: 'Two chairs in lobby',
    height: 'h-[280px] sm:h-[360px]',
  },
  {
    url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
    alt: 'Record player and shelf',
    height: 'h-[200px] sm:h-[260px]',
  }
];

const col3 = [
  {
    url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
    alt: 'Concrete planters',
    height: 'h-[160px] sm:h-[200px]',
  },
  {
    url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80',
    alt: 'Dining table and chairs',
    height: 'h-[300px] sm:h-[380px]',
  },
  {
    url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    alt: 'Resort suite bedroom',
    height: 'h-[280px] sm:h-[360px]',
  },
  {
    url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80',
    alt: 'Suite cabinet detail',
    height: 'h-[180px] sm:h-[240px]',
  }
];

const list1 = [...col1, ...col1];
const list2 = [...col2, ...col2];
const list3 = [...col3, ...col3];

const scrollColumns = [
  { list: list1, direction: 'down' },
  { list: list2, direction: 'up' },
  { list: list3, direction: 'down' }
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="bg-white py-16 sm:py-24 overflow-hidden relative select-none">
      
      {/* Custom Styles for Infinite Loop Scrolling & Pause Interaction */}
      <style>{`
        @keyframes insta-slide-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes insta-slide-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .insta-animate-up {
          animation: insta-slide-up 38s linear infinite;
        }
        .insta-animate-down {
          animation: insta-slide-down 38s linear infinite;
        }
        /* Pause all columns when hover over the grid */
        .insta-grid-container:hover .insta-animate-up,
        .insta-grid-container:hover .insta-animate-down {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Brand Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center items-start text-left max-w-lg lg:max-w-none"
          >
            {/* Instagram Profile Header */}
            <div className="flex items-center gap-4 mb-6">
              {/* Avatar circle */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-gray-100 shadow-sm bg-white flex items-center justify-center p-1.5">
                <img
                  src="/assets/images/logo.png"
                  alt="Akshar Foshan Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-charcoal text-sm sm:text-base tracking-tight">
                  @aksharfoshan
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal/40 block mt-0.5">
                  18K FOLLOWERS
                </span>
              </div>
            </div>

            {/* Follow Us Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-charcoal leading-none font-sans mb-6">
              FOLLOW US ON INSTAGRAM
            </h2>

            {/* Description Text */}
            <p className="text-sm text-brand-charcoal/60 font-light leading-relaxed mb-8">
              Stay inspired with our latest furniture trends, design ideas, and exclusive offers! Follow @aksharfoshan on Instagram for daily home inspiration and special deals.
            </p>

            {/* Follow Us CTA Button */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3.5 bg-white border border-[#EBEBE9] hover:border-brand-plum rounded-lg py-3 px-6 text-xxs font-bold tracking-[0.2em] text-brand-charcoal uppercase hover:bg-brand-plum hover:text-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <span>Follow Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Right Column - Scrolling Grid with bottom fade */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative h-[600px] sm:h-[700px] overflow-hidden"
          >
            {/* Scrolling columns container */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 h-full insta-grid-container">
              {scrollColumns.map((col, colIndex) => (
                <div
                  key={colIndex}
                  className={`flex flex-col ${
                    col.direction === 'up' ? 'insta-animate-up' : 'insta-animate-down'
                  }`}
                >
                  {col.list.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="pb-3 sm:pb-4"
                    >
                      <div
                        className={`relative ${image.height} rounded-[16px] sm:rounded-[24px] overflow-hidden group border border-gray-100 shadow-sm`}
                      >
                        {/* Image tag */}
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-brand-charcoal/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          {/* Subtle Instagram Icon Overlay */}
                          <div className="w-10 h-10 rounded-full bg-white/95 text-brand-charcoal flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 delay-75">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-5 h-5"
                            >
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom Gradient Fade-out matching page background */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
            
            {/* Optional Top Gradient Fade-out for visual symmetry (Optional, keeping it clean matching layout) */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
