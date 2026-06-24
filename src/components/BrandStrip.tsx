import React from 'react';

export default function BrandStrip() {
  const brands = [
    { name: 'Holiday Inn', logo: '/client-logos/holidayinn.jpg' },
    { name: 'Marriott', logo: '/client-logos/mariott.jpg' },
    { name: 'IHG', logo: '/client-logos/ihg.jpg' },
    { name: 'Hilton', logo: '/client-logos/hilton.jpg' },
    { name: 'Hyatt', logo: '/client-logos/hyatt.jpg' },
    { name: 'Best Western', logo: '/client-logos/best-western.jpg' },
    { name: 'Choice', logo: '/client-logos/choice.jpg' },
    { name: 'AmericInn', logo: '/client-logos/american.jpg' },
    { name: 'Bismarck Hotel', logo: '/client-logos/bismarck.jpg' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F5F5F5] border-t border-gray-100 overflow-hidden select-none">
      {/* Header Area */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-10 text-center">
        <span className="text-xxs font-bold uppercase tracking-[0.25em] text-gray-400">
          Brand Partners
        </span>
        <h2 className="text-lg sm:text-xl font-medium tracking-wide text-brand-charcoal/80 mt-2">
          Trusted by the World's Leading Hospitality Names
        </h2>
      </div>

      {/* Infinite scrolling cards marquee container (constrained width, not full-screen) */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="relative w-full overflow-hidden flex">
          {/* Left fade-out overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
          
          {/* Right fade-out overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />

          {/* Infinite scrolling block 1 */}
          <div className="animate-marquee flex items-center justify-around">
            {brands.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center p-4 md:p-6 bg-white border border-gray-100 rounded-[10px] aspect-[5/3] w-32 md:w-56 shadow-sm hover:shadow-md hover:border-brand-plum/40 transition-all duration-300 group mx-2 md:mx-4"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-[85%] max-w-[85%] object-contain opacity-100 md:opacity-60 grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {/* Infinite scrolling block 2 (identical duplicate) */}
          <div className="animate-marquee flex items-center justify-around" aria-hidden="true">
            {brands.map((brand, idx) => (
              <div
                key={`${brand.name}-dup-${idx}`}
                className="flex-shrink-0 flex items-center justify-center p-4 md:p-6 bg-white border border-gray-100 rounded-[10px] aspect-[5/3] w-32 md:w-56 shadow-sm hover:shadow-md hover:border-brand-plum/40 transition-all duration-300 group mx-2 md:mx-4"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-[85%] max-w-[85%] object-contain opacity-100 md:opacity-60 grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
