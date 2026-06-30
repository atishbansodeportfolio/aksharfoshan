import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, Factory, Globe2, ShieldCheck, HeartHandshake, Mail } from 'lucide-react';

const LinkedinIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-4 h-4"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const JOURNEY_STEPS = [
  {
    title: '2011 — Foundation in Foshan',
    subtitle: 'Woodworking Roots',
    desc: 'Akshar Foshan was established as a high-end bespoke carpentry workshop in the heart of Foshan furniture hub, catering to regional luxury hotels.',
    image: '/journey-roots.png'
  },
  {
    title: '2016 — Facility Scale-Up',
    subtitle: 'Industrial Automation',
    desc: 'Upgraded to a state-of-the-art facility equipped with precision CNC routing and climate-controlled drying chambers to scale output for national hotel brands.',
    image: '/assets/images/hero_casegoods.png'
  },
  {
    title: '2020 — Global FF&E Exports',
    subtitle: 'International Standards',
    desc: 'Secured international BIFMA compliance certification and expanded logistical support to deliver containerized seating and millwork directly to major global hotel brands.',
    image: '/assets/images/hero_credenza.png'
  },
  {
    title: 'Today — Worldwide Footprint',
    subtitle: 'Bespoke Installations',
    desc: 'Serving 500+ premium properties worldwide with an eco-friendly manufacturing pipeline and a dedicated lifecycle engineering team.',
    image: '/journey-flagship.png'
  }
];

export default function AboutUsPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative h-[85vh] min-h-[550px] w-full overflow-hidden bg-brand-charcoal flex flex-col justify-between">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/about-us-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Top Spacer */}
        <div className="h-20 w-full z-10" />

        {/* Center Outlined Text */}
        <div className="flex-grow flex items-center justify-center z-10 relative px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-[0.15em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] text-center select-none font-sans"
          >
            AKSHAR FOSHAN
          </motion.h2>
        </div>

        {/* Bottom Section with Separator Line */}
        <div className="w-full z-10 pb-12 sm:pb-16 relative">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            {/* Thin Horizontal Line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[1px] bg-white/20 mb-8 sm:mb-12 origin-left"
            />

            {/* Bottom Row */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
            >
              
              {/* Bottom Left Text */}
              <motion.div variants={fadeInUp} className="text-white space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/70 block">
                  TIMELESS ARTISTRY IN EVERY PIECE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase leading-none font-sans">
                  Crafting the Future of <br /> Hospitality Spaces
                </h3>
              </motion.div>

              {/* Bottom Right Button */}
              <motion.div variants={fadeInUp}>
                <a 
                  href="/#/projects"
                  className="inline-flex items-center justify-center bg-white hover:bg-brand-plum hover:text-white text-brand-charcoal font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest px-6 py-3.5 sm:px-8 sm:py-4 rounded-none shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Explore Portfolio ↗</span>
                </a>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </div>

      {/* Main Narrative & Stats Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-7 space-y-6 text-brand-charcoal">
            <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight">
              Where Artisanal Precision Meets Industrial Scale
            </h2>
            <p className="text-brand-charcoal/70 font-light leading-relaxed text-sm sm:text-base">
              Founded in the globally renowned furniture capital of Foshan, Akshar Foshan has spent over a decade establishing itself as a premier partner for luxury hospitality brand casegoods, upholstered seating, and customized millwork. 
            </p>
            <p className="text-brand-charcoal/70 font-light leading-relaxed text-sm sm:text-base">
              We specialize in bridging the gap between sophisticated architectural designs and the practical realities of high-durability hospitality environments. From drafting complex CAD shop drawings to sourcing certified sustainable lumber, our engineering teams ensure that every piece looks stunning while being engineered to withstand high-occupancy commercial use.
            </p>
            <p className="text-brand-charcoal/70 font-light leading-relaxed text-sm sm:text-base">
              By controlling the entire process from structural design to oceanic shipping preparation, we offer a seamless, worry-free manufacturing pipeline that global brands trust for their most critical flagship installations.
            </p>
          </div>

          {/* Right Column: Key Stats in Grid */}
          <div className="lg:col-span-5 bg-white border border-[#EBEBE9] rounded-[20px] p-8 sm:p-10 shadow-sm hover:shadow-[0_16px_36px_rgba(92,42,77,0.02)] transition-shadow duration-500">
            <h3 className="text-xxs font-extrabold uppercase tracking-[0.25em] text-brand-plum mb-8">
              OUR PERFORMANCE TRACK RECORD
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal font-sans mb-1">15+</div>
                <div className="text-xxs font-bold uppercase tracking-wider text-brand-charcoal/50">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal font-sans mb-1">500+</div>
                <div className="text-xxs font-bold uppercase tracking-wider text-brand-charcoal/50">Hotels Furnished</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal font-sans mb-1">40+</div>
                <div className="text-xxs font-bold uppercase tracking-wider text-brand-charcoal/50">Global Brands</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal font-sans mb-1">25K+</div>
                <div className="text-xxs font-bold uppercase tracking-wider text-brand-charcoal/50">Rooms Delivered</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24">
        <div className="bg-white border border-[#EBEBE9] rounded-[24px] p-8 sm:p-12 md:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Vertical timeline step layout */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xxs font-extrabold uppercase tracking-[0.3em] text-brand-plum">
                  OUR JOURNEY
                </span>
                <span className="w-8 h-[1px] bg-brand-gold/60" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-brand-charcoal font-sans leading-tight uppercase">
                A Legacy of Craft & Scale
              </h2>

              <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
                From a small woodworking workshop in Foshan to a global hospitality FF&E supplier. Here is our story.
              </p>

              {/* Vertical steps layout */}
              <div className="relative pl-2 sm:pl-4 space-y-8 mt-10">
                {/* Vertical line running behind the circles - PERFECTLY CENTERED */}
                <div className="absolute left-[22px] sm:left-[38px] transform -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gray-200" />
                
                {/* Dynamic gold indicator line matching activeStep - PERFECTLY CENTERED */}
                <div 
                  className="absolute left-[22px] sm:left-[38px] transform -translate-x-1/2 top-4 w-[2px] bg-brand-gold transition-all duration-500 ease-in-out"
                  style={{
                    height: `${(activeStep / (JOURNEY_STEPS.length - 1)) * 82}%`,
                  }}
                />

                {JOURNEY_STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div 
                      key={idx} 
                      className="relative flex gap-6 cursor-pointer group"
                      onClick={() => setActiveStep(idx)}
                    >
                      {/* Circle Number */}
                      <div 
                        className={`w-7 h-7 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm z-10 shrink-0 transition-all duration-300 ${
                          isActive 
                            ? 'bg-brand-gold text-white shadow-md scale-105' 
                            : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                        }`}
                      >
                        {idx + 1}
                      </div>

                      {/* Content */}
                      <div className="flex-grow pt-1 sm:pt-2">
                        <h4 className={`font-bold text-sm sm:text-base transition-colors duration-300 ${
                          isActive ? 'text-brand-charcoal' : 'text-gray-400 group-hover:text-brand-charcoal/70'
                        }`}>
                          {step.title}
                        </h4>
                        
                        {isActive && (
                          <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mt-2 animate-fadeIn max-w-md">
                            {step.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Sliding Image Carousel with Peek */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden w-full h-[320px] sm:h-[450px] rounded-[20px]">
                {/* Horizontal slider container */}
                <div 
                  className="flex transition-transform duration-500 ease-in-out gap-4 h-full"
                  style={{
                    transform: `translateX(-${activeStep * 82}%)` // slides by 82% so the next one peeks in by 18%
                  }}
                >
                  {JOURNEY_STEPS.map((step, idx) => (
                    <div 
                      key={idx}
                      className="w-[80%] flex-shrink-0 h-full rounded-[20px] overflow-hidden relative shadow-sm border border-[#EBEBE9]"
                    >
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase">{step.subtitle}</span>
                        <h4 className="text-white font-extrabold text-base sm:text-lg mt-1 tracking-tight">{step.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-28">
        <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xxs font-extrabold uppercase tracking-[0.3em] text-brand-plum">
              OUR FOUNDATION
            </span>
            <span className="w-8 h-[1px] bg-brand-gold/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-brand-charcoal font-sans">
            How We Operate
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/60 font-light leading-relaxed">
            Four guiding principles dictate how we design, produce, and inspect every piece of furniture before it leaves our Foshan facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Factory className="w-6 h-6 text-brand-plum" />,
              title: 'Advanced Factory Floor',
              desc: 'Equipped with precise CNC wood fabrication machines alongside traditional carpentry workbenches.'
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-brand-plum" />,
              title: 'Moisture Control',
              desc: 'Wood moisture levels are strictly adjusted to the climate of the hotel installation site (e.g., arid vs coastal).'
            },
            {
              icon: <Globe2 className="w-6 h-6 text-brand-plum" />,
              title: 'Global Delivery Logistics',
              desc: 'Heavy-duty plywood crating and custom foam protective molds built specifically for oceanic container shipments.'
            },
            {
              icon: <HeartHandshake className="w-6 h-6 text-brand-plum" />,
              title: 'Full Lifecycle Partnership',
              desc: 'From initial design review, shop drawings approval, physical pre-production sample mock-ups, to shipping.'
            }
          ].map((val, index) => (
            <div 
              key={index}
              className="bg-white border border-[#EBEBE9] p-8 rounded-[16px] shadow-sm hover:shadow-[0_16px_36px_rgba(92,42,77,0.03)] hover:border-brand-plum/20 transition-all duration-300 flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-full bg-[#F5F5F3] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#EBEBE9] transition-all duration-300">
                {val.icon}
              </div>
              <h3 className="font-bold text-brand-charcoal text-base mb-3 tracking-tight font-sans">
                {val.title}
              </h3>
              <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership / Founder Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24 border-t border-[#EBEBE9] flex flex-col items-center">
        <div className="text-center max-w-[800px] mx-auto mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xxs font-extrabold uppercase tracking-[0.3em] text-brand-plum">
              OUR LEADERSHIP
            </span>
            <span className="w-8 h-[1px] bg-brand-gold/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-brand-charcoal font-sans uppercase">
            Meet Our Founder
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
            Hover or tap the card below to reveal direct contact details and background.
          </p>
        </div>

        {/* Interactive Sliding Card - Horizontal on Desktop, Static Card on Mobile */}
        <div className="relative w-full max-w-[360px] sm:max-w-[400px] rounded-[10px] overflow-hidden shadow-lg border border-[#EBEBE9] bg-white group flex flex-col lg:flex-row lg:w-[380px] lg:hover:w-[800px] lg:max-w-none lg:aspect-auto lg:h-[480px] transition-all duration-500 ease-out cursor-default lg:cursor-pointer">
          
          {/* Left Portion: Founder Image */}
          <div className="w-full h-[320px] sm:h-[380px] lg:w-[380px] lg:h-full lg:flex-shrink-0 relative overflow-hidden">
            <img 
              src="/founder.jpeg" 
              alt="Yogin Patel, Founder & CEO" 
              className="w-full h-full object-cover transform lg:group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Default Title Overlay (Sits at the bottom, fades out on hover - Desktop Only) */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/50 to-transparent p-8 flex flex-col justify-end text-white h-1/2 lg:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none hidden lg:flex">
              <span className="text-[10px] font-extrabold tracking-[0.25em] text-brand-gold uppercase mb-1">OUR FOUNDER</span>
              <h3 className="text-xl sm:text-2xl font-black font-sans leading-none">Yogin Patel</h3>
              <p className="text-xs text-white/70 font-medium mt-1">Founder & CEO</p>
            </div>
          </div>

          {/* Right Portion: Details Panel (Static on Mobile, Horizontal Drawer on Desktops) */}
          <div className="w-full bg-white p-8 border-t border-[#EBEBE9] flex flex-col justify-between lg:relative lg:inset-auto lg:transform-none lg:translate-y-0 lg:w-0 lg:group-hover:w-[420px] lg:border-t-0 lg:border-l lg:border-transparent lg:group-hover:border-[#EBEBE9] lg:transition-all lg:duration-500 lg:ease-out overflow-hidden flex-shrink-0 lg:bg-white lg:p-0">
            
            {/* Fixed width content container for desktop, full width for mobile */}
            <div className="w-full h-full flex flex-col justify-between select-none lg:w-[420px] lg:p-8 lg:flex-shrink-0">
              
              {/* Top portion of details */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xxs font-extrabold uppercase tracking-[0.2em] text-brand-plum">OUR FOUNDER</span>
                    <h3 className="text-2xl font-black font-sans text-brand-charcoal mt-1">Yogin Patel</h3>
                    <p className="text-xs font-bold text-brand-gold uppercase tracking-wider mt-0.5">Founder & CEO</p>
                  </div>
                  <div className="text-xxs font-extrabold uppercase tracking-widest text-brand-plum/40 bg-brand-cream border border-[#EBEBE9] px-2.5 py-1 rounded-full">
                    Profile
                  </div>
                </div>

                <div className="w-12 h-[2px] bg-brand-gold/60" />

                <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed">
                  Leading Divine with over 15 years of hospitality FF&E sourcing expertise. Yogin oversees global client partnerships and end-to-end procurement execution.
                </p>
              </div>

              {/* Bottom contact links */}
              <div className="space-y-3 pt-6 border-t border-gray-100 mt-6 lg:mt-0">
                
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F5F5F3] flex items-center justify-center text-brand-charcoal flex-shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[8px] font-extrabold uppercase tracking-widest text-brand-charcoal/40 block">Email Address</span>
                    <a 
                      href="mailto:yogin@hotelprocurement.net" 
                      className="text-xs font-bold text-brand-charcoal hover:text-brand-plum transition-colors truncate block"
                    >
                      yogin@hotelprocurement.net
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F5F5F3] flex items-center justify-center text-brand-charcoal flex-shrink-0">
                    <LinkedinIcon />
                  </div>
                  <div>
                    <span className="text-[8px] font-extrabold uppercase tracking-widest text-brand-charcoal/40 block">Professional Network</span>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-charcoal hover:text-brand-plum transition-colors inline-flex items-center gap-1"
                    >
                      <span>LinkedIn Profile</span>
                      <span className="text-[10px] font-normal">↗</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="w-full relative overflow-hidden bg-brand-charcoal text-white py-24 sm:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/ready-bg.jpeg" 
            alt="Ready to Collaborate Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/50 to-brand-charcoal/90" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <div className="max-w-[700px] mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans tracking-tight leading-tight">
              Ready to collaborate on your next hotel project?
            </h2>
            <p className="text-white/70 font-light leading-relaxed text-xs sm:text-sm max-w-[550px] mx-auto">
              Get in touch with our team to submit your architectural drawings, requesting a quote or booking an online walkthrough of our production facilities in Foshan.
            </p>
            <div className="pt-4">
              <a 
                href="/#contact"
                className="inline-flex items-center justify-center bg-white text-brand-charcoal hover:bg-brand-plum hover:text-white font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest px-6 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                Submit Project Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
