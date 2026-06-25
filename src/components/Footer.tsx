import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', brand: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  return (
    <footer id="contact" className="w-full bg-[#F5F5F5] border-t border-gray-100 pt-20 sm:pt-28 pb-10 relative overflow-hidden">
      {/* Decorative Warm Accent Glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-brand-gold/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-16 sm:mb-20">
          
          {/* Left Column: Brand Info & Form */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="max-w-2xl">
              {/* Header block */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xxs font-extrabold uppercase tracking-[0.3em] text-brand-plum">
                  GET A QUOTE
                </span>
                <span className="w-8 h-[1px] bg-brand-gold/60" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-charcoal leading-tight font-sans mb-8">
                Let's discuss your project.
              </h2>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal/50">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white border border-[#EBEBE9] focus:border-brand-plum rounded-xl px-4 py-3 text-sm text-brand-charcoal outline-none transition-colors"
                    />
                  </div>
                  
                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal/50">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full bg-white border border-[#EBEBE9] focus:border-brand-plum rounded-xl px-4 py-3 text-sm text-brand-charcoal outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Company/Hotel Brand */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="brand" className="text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal/50">
                    Company or Hotel Brand
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="e.g. Marriott, Hilton, Boutique Inn"
                    className="w-full bg-white border border-[#EBEBE9] focus:border-brand-plum rounded-xl px-4 py-3 text-sm text-brand-charcoal outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal/50">
                    Project Details / Message *
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your furniture requirements, room counts, timelines, or specifications..."
                    className="w-full bg-white border border-[#EBEBE9] focus:border-brand-plum rounded-xl px-4 py-3 text-sm text-brand-charcoal outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button & Success Alert */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-3.5 bg-brand-charcoal hover:bg-brand-plum text-white rounded-full py-3.5 px-8 text-xxs font-extrabold tracking-[0.25em] uppercase hover:shadow-md transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>

                  {submitSuccess && (
                    <span className="text-xs text-emerald-600 font-bold tracking-tight animate-fadeIn">
                      ✓ Inquiry submitted successfully! Our team will contact you shortly.
                    </span>
                  )}
                </div>
              </form>
            </div>

            {/* Contact details footer links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 sm:pt-16 border-t border-[#EBEBE9] mt-12 text-left">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-charcoal/40 block mb-1">
                  EMAIL INQUIRIES
                </span>
                <a href="mailto:info@aksharfoshan.com" className="text-xs sm:text-sm font-semibold text-brand-charcoal hover:text-brand-plum transition-colors">
                  info@aksharfoshan.com
                </a>
              </div>
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-charcoal/40 block mb-1">
                  TELEPHONE CONTACT
                </span>
                <a href="tel:+8675788888888" className="text-xs sm:text-sm font-semibold text-brand-charcoal hover:text-brand-plum transition-colors">
                  +86 757 8888 8888
                </a>
              </div>
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-charcoal/40 block mb-1">
                  GLOBAL HEADQUARTERS
                </span>
                <span className="text-xs sm:text-sm font-semibold text-brand-charcoal leading-tight block">
                  Foshan Furniture Hub, Guangdong, China
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Visual Asset */}
          <div className="lg:col-span-5 h-[350px] sm:h-[450px] lg:h-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-gray-200/50 shadow-md group"
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Hospitality Suite furniture layout by Akshar Foshan"
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-out"
                loading="lazy"
              />
              
              {/* Sleek Overlay styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/20 to-transparent flex flex-col justify-end p-8 sm:p-10">
                <span className="text-[8px] font-extrabold uppercase tracking-[0.25em] text-brand-gold mb-2 block">
                  AKSHAR FOSHAN HOSPITALITY FF&E
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight leading-snug">
                  Premium custom furniture tailored to precise global brand standards.
                </h3>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-[#EBEBE9] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[10px] text-gray-400 font-medium">
            © 2026 Akshar (Foshan) Hotel Furniture Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-gray-400">
            <span className="hover:text-brand-plum transition-colors cursor-pointer font-medium">Privacy Policy</span>
            <span className="hover:text-brand-plum transition-colors cursor-pointer font-medium">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
