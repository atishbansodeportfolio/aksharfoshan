import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Leaf, Recycle, Lightbulb } from 'lucide-react';

// Custom pencil-off / effortless-assembly icon matching the visual reference:
// A pencil pointing down-left, crossed out by a diagonal slash.
const EffortlessAssemblyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 sm:w-6 sm:h-6 text-brand-charcoal"
  >
    {/* Pencil shape */}
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
    {/* Slash */}
    <line x1="3" y1="3" x2="21" y2="21" strokeWidth="2.5" />
  </svg>
);

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-brand-charcoal" strokeWidth={1.75} />,
    title: 'Eco-friendly Materials',
    description: 'We craft our furniture using responsibly sourced, environmentally friendly materials.',
  },
  {
    icon: <EffortlessAssemblyIcon />,
    title: 'Effortless Assembly',
    description: 'Thoughtfully designed for quick setup, requiring minimal effort and no extra tools.',
  },
  {
    icon: <Recycle className="w-5 h-5 sm:w-6 sm:h-6 text-brand-charcoal" strokeWidth={1.75} />,
    title: 'Giving Back To Nature',
    description: 'Every purchase contributes to reforestation efforts, helping restore green spaces.',
  },
  {
    icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-brand-charcoal" strokeWidth={1.75} />,
    title: 'Sustainable Production',
    description: 'Dedicated to reducing waste and promoting eco-conscious manufacturing practices.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 select-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-16"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group flex flex-col items-start text-left"
          >
            {/* Icon Container */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F5F5F3] flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 group-hover:bg-[#EBEBE9] transition-all duration-300 ease-out">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-[#2B2521] text-base mb-3 tracking-tight font-sans transition-colors duration-300">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 font-light text-sm leading-relaxed max-w-[280px] sm:max-w-none">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
