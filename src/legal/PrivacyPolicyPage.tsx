import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Globe2, FileText, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const lastUpdated = "October 18, 2026";

  return (
    <div className="bg-white min-h-screen text-brand-charcoal pt-28 pb-20">
      <SEO
        title="Privacy Policy"
        description="Official Privacy Policy for Akshar Foshan Hotel Furniture and sister entity Divine Design & Procurement LLC. Learn how we handle project inquiries and protect personal data."
        keywords="Akshar Foshan privacy policy, hotel furniture manufacturer privacy, Divine Procurement data protection, FF&E privacy disclosures"
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-plum hover:text-brand-charcoal transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-[#EBEBE9] pb-10 mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-plum/10 text-brand-plum rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield size={13} />
            <span>Regulatory &amp; Data Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-charcoal">
            Privacy Policy
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-brand-charcoal/60">
            <span><strong>Effective Date:</strong> {lastUpdated}</span>
            <span>&bull;</span>
            <span><strong>Operating Entities:</strong> Akshar (Foshan) Hotel Furniture &amp; Divine Design &amp; Procurement LLC</span>
            <span>&bull;</span>
            <span><strong>Domains:</strong> aksharfoshan.com | divineprocurement.com</span>
          </div>
        </motion.div>

        {/* Summary Card */}
        <div className="bg-[#FAF8F5] border border-[#EBEBE9] rounded-2xl p-6 sm:p-8 mb-12 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-plum mb-3 flex items-center space-x-2">
            <CheckCircle2 size={16} />
            <span>Privacy &amp; Transparency Statement</span>
          </h2>
          <p className="text-sm text-brand-charcoal/80 leading-relaxed font-light">
            Akshar (Foshan) Hotel Furniture and affiliated entity Divine Design &amp; Procurement LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) are committed to maintaining transparent, secure, and compliant data practices. We collect only the information necessary to provide hospitality FF&amp;E manufacturing proposals, shop drawing reviews, and procurement consultations. We never sell, rent, or trade your personal or business data.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-12 text-sm text-brand-charcoal/80 leading-relaxed font-light">

          {/* 1. Entity and Scope */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">01.</span>
              <span>Corporate Entities &amp; Operations</span>
            </h2>
            <p>
              This Privacy Policy applies to websites and inquiry portals operating under <strong>www.aksharfoshan.com</strong> and associated project domains including <strong>divineprocurement.com</strong> and <strong>hotelprocurement.net</strong>.
            </p>
            <p>
              Our integrated global supply chain operates through unified commercial and manufacturing entities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Akshar (Foshan) Hotel Furniture Co., Ltd. &amp; Akshar (Zhangzhou) Trading Co., Ltd.</strong> (China): Engineering, factory production, prototyping, and export freight forwarding.</li>
              <li><strong>Divine Design &amp; Procurement LLC</strong> (United States): North American client relations, franchise brand submittals, and project contract management under founder Yogin Patel.</li>
              <li><strong>Akshar Impex Trading Company</strong> (Abu Dhabi, UAE): Middle East regional operations and coordination.</li>
            </ul>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">02.</span>
              <span>Information Collected via Inquiry Portals</span>
            </h2>
            <p>
              When requesting quotes, lookbooks, or factory tours, we collect information submitted voluntarily:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Details:</strong> Your full name, business email address, telephone number, and company name.</li>
              <li><strong>Project Specifications:</strong> Hotel property name, brand affiliation, project location, room key counts, target opening dates, and architectural FF&amp;E drawings.</li>
              <li><strong>Technical Data:</strong> Browser type, IP address, and standard log data collected to ensure platform security and optimize user experience.</li>
            </ul>
          </section>

          {/* 3. Purpose of Processing */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">03.</span>
              <span>Purposes of Data Processing</span>
            </h2>
            <p>Your information is processed strictly for legitimate hospitality business purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EBEBE9]">
                <h3 className="font-semibold text-brand-charcoal mb-1">Proposal &amp; BOQ Formulation</h3>
                <p className="text-xs text-brand-charcoal/70">Evaluating bills of quantities, architectural drawings, and creating custom manufacturing quotes.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EBEBE9]">
                <h3 className="font-semibold text-brand-charcoal mb-1">Production &amp; QA Coordination</h3>
                <p className="text-xs text-brand-charcoal/70">Executing approved shop drawings, prototype reviews, factory quality audits, and packaging.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EBEBE9]">
                <h3 className="font-semibold text-brand-charcoal mb-1">International Logistics</h3>
                <p className="text-xs text-brand-charcoal/70">Arranging container loading, export manifests, ocean shipping, and customs documentation.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EBEBE9]">
                <h3 className="font-semibold text-brand-charcoal mb-1">Inquiry Response</h3>
                <p className="text-xs text-brand-charcoal/70">Direct communication with your design or development team regarding timelines and finish approvals.</p>
              </div>
            </div>
          </section>

          {/* 4. International Data Transfers */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">04.</span>
              <span>Cross-Border Sourcing &amp; Data Transfers</span>
            </h2>
            <p>
              Because our operations link North American hospitality clients with our manufacturing facilities in Guangdong and Fujian, project specifications and contact records may be accessed securely by authorized engineers, project managers, and logistics coordinators across the United States, China, and the United Arab Emirates.
            </p>
            <p>
              All cross-border communications are protected using modern TLS encryption and restricted to authorized operational staff under strict non-disclosure obligations.
            </p>
          </section>

          {/* 5. Consumer Rights & Texas TDPSA Disclosures */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">05.</span>
              <span>Consumer Privacy Rights &amp; State Protections</span>
            </h2>
            <p>
              In alignment with the <strong>Texas Data Privacy and Security Act (TDPSA)</strong>, FTC advertising rules, and applicable international privacy frameworks, visitors and clients have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request confirmation and access to personal records held in connection with inquiries.</li>
              <li>Request corrections to contact or project details.</li>
              <li>Request deletion of inquiry data, subject to commercial contract and tax record retention requirements.</li>
            </ul>
            <p>
              To exercise any of these rights, contact our compliance team directly at{' '}
              <a href="mailto:info@aksharfoshan.com" className="text-brand-plum font-semibold underline">
                info@aksharfoshan.com
              </a>{' '}
              or{' '}
              <a href="mailto:yogin@hotelprocurement.net" className="text-brand-plum font-semibold underline">
                yogin@hotelprocurement.net
              </a>.
            </p>
          </section>

          {/* 6. Contact Information */}
          <section className="space-y-4 border-t border-[#EBEBE9] pt-8">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <Mail size={18} className="text-brand-plum" />
              <span>Compliance &amp; Legal Inquiries</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#FAF8F5] border border-[#EBEBE9] rounded-xl p-5 space-y-1">
                <p className="font-bold text-brand-charcoal">Akshar (Foshan) Hotel Furniture Co., Ltd.</p>
                <p>Foshan Furniture Hub, Guangdong Province, China</p>
                <p>Email: <a href="mailto:info@aksharfoshan.com" className="text-brand-plum underline">info@aksharfoshan.com</a></p>
                <p>Tel: +86 757 8888 8888 / +86 198 904 42279</p>
              </div>
              <div className="bg-[#FAF8F5] border border-[#EBEBE9] rounded-xl p-5 space-y-1">
                <p className="font-bold text-brand-charcoal">Divine Design &amp; Procurement LLC</p>
                <p>Attn: Yogin Patel / Procurement Director</p>
                <p>Email: <a href="mailto:yogin@hotelprocurement.net" className="text-brand-plum underline">yogin@hotelprocurement.net</a></p>
                <p>Web: www.divineprocurement.com</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
