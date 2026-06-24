import React from 'react';
import { motion, Variants } from 'framer-motion';

const DesignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <rect x="7" y="7" width="10" height="10" rx="1" />
    <path d="M9 9h6M9 13h6" />
  </svg>
);

const SourcingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const QualityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const LogisticsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <rect x="1" y="3" width="15" height="13" rx="2" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const ApprovalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="7" y1="8" x2="17" y2="8" />
    <line x1="7" y1="12" x2="17" y2="12" />
    <line x1="7" y1="16" x2="13" y2="16" />
  </svg>
);

const WarrantyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <path d="m9 10 2 2 4-4" />
  </svg>
);

const services = [
  {
    icon: <DesignIcon />,
    title: 'Design & Budget Consulting',
    description: 'Align project vision, specifications, room requirements, and budget direction before sourcing begins.'
  },
  {
    icon: <SourcingIcon />,
    title: 'Sourcing & Procurement',
    description: 'Complete FF&E product sourcing across casegoods, upholstery, fixtures, mirrors, outdoor furniture, and accessories.'
  },
  {
    icon: <QualityIcon />,
    title: 'Quality Control',
    description: 'Factory inspection support for material, finish, production consistency, packaging, and shipment readiness.'
  },
  {
    icon: <LogisticsIcon />,
    title: 'FOB / DDP Logistics',
    description: 'Flexible shipment support for international hospitality projects, including door-to-door coordination where applicable.'
  },
  {
    icon: <ApprovalIcon />,
    title: 'Approval Support',
    description: 'Support with specification alignment, sample coordination, and project documentation for smoother review workflows.'
  },
  {
    icon: <WarrantyIcon />,
    title: 'Warranty Coordination',
    description: 'Post-delivery support to help clients manage queries, follow-ups, and service coordination after shipment.'
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5]/30 py-20 sm:py-28 border-t border-gray-100/50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-plum">
              SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-charcoal leading-tight max-w-[650px] font-sans">
              Project support from<br className="hidden sm:inline" /> concept to completion.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed max-w-[320px] lg:mb-2">
            A clean service grid for buyers who need fast clarity on what Akshar Foshan can handle.
          </p>
        </div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white border border-[#EBEBE9] rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 flex flex-col items-start text-left hover:shadow-[0_16px_36px_rgba(92,42,77,0.04)] hover:border-brand-plum/20 hover:-translate-y-1 transition-all duration-500 group cursor-pointer"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] sm:rounded-[20px] bg-brand-plum text-white flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-[#2B2521] text-lg sm:text-xl mb-3 tracking-tight font-sans">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
