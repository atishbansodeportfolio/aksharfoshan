import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  title: string;
  body: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: 'Elizabeth',
    location: 'FROM CANADA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    title: 'Perfect Quality And Customer Service!',
    body: 'Akshar Foshan truly exceeded my expectations in every way! I was looking for modern yet elegant custom furniture for our new resort suites, and we found the perfect pieces here. The fabric is premium, the craftsmanship is solid, and the quality control is excellent. Plus, the logistics support was smooth, and the assembly was effortless. We\'ve received so many compliments from our guests. Highly recommended!'
  },
  {
    id: 2,
    name: 'David T. Brown',
    location: 'FROM USA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    title: 'Elegant Designs and Cozy Living Spaces',
    body: 'I recently purchased casegoods and public area furniture from Akshar Foshan, and I couldn\'t be happier with my choice. The craftsmanship is impeccable, and the custom design adds a touch of luxury to our lobby space. The project coordination team was incredibly helpful in assisting me with design modifications, and the delivery was prompt. I will definitely be working with them on our next hotel development project!'
  },
  {
    id: 3,
    name: 'Jennifer',
    location: 'FROM CHICAGO',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    title: 'Timeless Furniture Built to Impress!',
    body: 'I\'m absolutely thrilled with the custom bedroom sets! The build quality and style are exceptional. It fits perfectly into our suite layout, the materials feel incredibly sturdy and premium, and the protective packaging was extremely secure during ocean transit. I\'ll definitely recommend Akshar Foshan to anyone seeking high-grade, durable commercial hospitality furniture.'
  },
  {
    id: 4,
    name: 'Alexander',
    location: 'FROM GERMANY',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    title: 'Outstanding Engineering and Customization',
    body: 'Akshar Foshan\'s engineering team turned our highly customized drawings into reality. Their attention to detail during the sample approval stage was exceptional. The quality control was rigorous, ensuring every piece met our strict standards. Excellent communication throughout the manufacturing cycle, and reliable global shipping support.'
  }
];

export default function Reviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450; // card width + gap
      const container = scrollContainerRef.current;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white py-20 sm:py-24 border-t border-b border-gray-100 select-none overflow-hidden relative">
      {/* Soft background shape */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-gold/[0.03] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Block */}
        <div className="flex justify-between items-end mb-12">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-brand-gold">
              5.00 FROM 1230+ REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-brand-charcoal font-sans">
              WHAT CUSTOMERS SAY
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-brand-charcoal hover:bg-brand-charcoal hover:text-white hover:border-brand-charcoal transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-brand-charcoal hover:bg-brand-charcoal hover:text-white hover:border-brand-charcoal transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth gap-6 snap-x snap-mandatory pb-6 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviewsData.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: review.id * 0.1 }}
              className="min-w-[290px] sm:min-w-[420px] max-w-[420px] bg-white border border-[#EBEBE9] rounded-[10px] p-6 sm:p-8 flex flex-col justify-between snap-start hover:shadow-md transition-shadow duration-300 relative"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-5 relative">
                <div className="flex items-center gap-3.5">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-100"
                  />
                  <div>
                    <h3 className="font-bold text-brand-charcoal text-sm sm:text-base leading-tight">
                      {review.name}
                    </h3>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal/40 block mt-0.5">
                      {review.location}
                    </span>
                  </div>
                </div>

                {/* SVG Quote Icon */}
                <svg
                  className="w-10 h-10 text-brand-plum/10 absolute right-0 top-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Separator */}
              <div className="border-t border-[#EBEBE9] mb-5 w-full" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-3.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Review Title */}
              <h4 className="font-bold text-brand-charcoal text-base sm:text-lg mb-3 tracking-tight">
                {review.title}
              </h4>

              {/* Review Body */}
              <p className="text-brand-charcoal/70 font-light text-xs sm:text-sm leading-relaxed flex-grow">
                {review.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
