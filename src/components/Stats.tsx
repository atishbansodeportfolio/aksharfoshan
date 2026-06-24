import React, { useEffect, useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

interface StatItem {
  number: string;
  title: string;
  description: string;
}

const stats: StatItem[] = [
  {
    number: '5,000+',
    title: 'Rooms Completed',
    description: 'Guestrooms, suites, and public spaces furnished to precise brand standards.'
  },
  {
    number: '15+',
    title: 'Years of Expertise',
    description: 'Providing technical engineering, manufacturing, and QA support since 2011.'
  },
  {
    number: '30+',
    title: 'Countries Delivered',
    description: 'Reliable global logistics delivering hotel furniture across the world from factory to site.'
  },
  {
    number: '150+',
    title: 'Hotels Furnished',
    description: 'A proven track record of successful installations for leading hospitality brands.'
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Animated Number Counter Component using IntersectionObserver and requestAnimationFrame
function AnimatedCounter({ value, duration = 1800 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract raw digits (e.g. "5,000+" -> 5000)
  const target = parseInt(value.replace(/,/g, ''), 10);
  // Extract symbols (e.g. "+")
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Quadratic ease-out formula
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.floor(easeProgress * target);
            
            setCount(currentCount);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#F5F5F5] py-14 sm:py-18 border-t border-b border-gray-100/50 select-none">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 text-center"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Big Number (Animated Counter) */}
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-plum tracking-tight font-sans mb-2">
                <AnimatedCounter value={stat.number} />
              </div>

              {/* Stat Title */}
              <span className="text-[10px] font-extrabold tracking-[0.25em] text-brand-gold uppercase mb-2">
                {stat.title}
              </span>

              {/* Description */}
              <p className="text-brand-charcoal/60 font-light text-xs sm:text-sm leading-relaxed max-w-[280px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
