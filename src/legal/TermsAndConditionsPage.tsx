import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scale, FileCheck, AlertCircle, Building2, Truck, ShieldCheck, Mail, ArrowLeft, Leaf } from 'lucide-react';
import SEO from '../components/SEO';

export default function TermsAndConditionsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const lastUpdated = "October 18, 2026";

  return (
    <div className="bg-white min-h-screen text-brand-charcoal pt-28 pb-20">
      <SEO
        title="Terms & Conditions | Commercial Disclosures"
        description="Terms and Conditions and Commercial Disclosures for Akshar Foshan Hotel Furniture and sister entity Divine Design & Procurement LLC. Sourcing, tax terms, and brand disclosures."
        keywords="Akshar Foshan terms, hotel furniture manufacturing terms, FF&E commercial disclosures, hospitality procurement contract"
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
            <Scale size={13} />
            <span>Commercial Terms &amp; Disclosures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-charcoal">
            Terms &amp; Conditions
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-brand-charcoal/60">
            <span><strong>Effective Date:</strong> {lastUpdated}</span>
            <span>&bull;</span>
            <span><strong>Contracting Entities:</strong> Akshar (Foshan) Hotel Furniture &amp; Divine Design &amp; Procurement LLC</span>
            <span>&bull;</span>
            <span><strong>Domains:</strong> aksharfoshan.com | divineprocurement.com</span>
          </div>
        </motion.div>

        {/* Mandatory Tax Callout Box (as required by Compliance Review) */}
        <div className="bg-brand-plum/5 border border-brand-plum/20 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-brand-plum shrink-0 mt-0.5" size={18} />
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-plum mb-2">
                Mandatory Commercial Tax Disclosure
              </h2>
              <p className="text-sm font-medium text-brand-charcoal leading-relaxed">
                &ldquo;Applicable state sales and use taxes are the responsibility of the recipient or project site, except where the seller is legally required to collect and remit them.&rdquo;
              </p>
              <p className="text-xs text-brand-charcoal/70 mt-2 font-light">
                All factory proposals, estimates, and invoices issued by Akshar Foshan and Divine Design &amp; Procurement reflect manufacturing and contracted logistics scope unless expressly identified as tax-inclusive under statutory collection duties.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12 text-sm text-brand-charcoal/80 leading-relaxed font-light">

          {/* 1. Acceptance of Terms */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">01.</span>
              <span>Acceptance &amp; Operating Agreement</span>
            </h2>
            <p>
              By accessing <strong>aksharfoshan.com</strong>, submitting inquiries, or entering into a supply contract with Akshar (Foshan) Hotel Furniture Co., Ltd. or Divine Design &amp; Procurement LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these commercial Terms and Conditions.
            </p>
          </section>

          {/* 2. Hotel Brand & Project Scope Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">02.</span>
              <span>Selected Hotel Projects &amp; Trademark Disclaimer</span>
            </h2>
            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EBEBE9] space-y-3">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                <Building2 size={15} className="text-brand-plum" />
                <span>Hotel Project Work &amp; Brand Relationship Notice</span>
              </div>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                Akshar Foshan and Divine Design &amp; Procurement manufacture and supply custom FF&amp;E for independent hotel property owners, franchise developers, and hospitality management groups. References on this site to hotel brands (including Marriott&reg;, Hilton&reg;, IHG&reg;, Hyatt&reg;, Wyndham&reg;, and Choice Hotels&reg;) designate specific individual property projects for which custom casegoods, seating, or millwork were supplied.
              </p>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                All brand names, trademarks, and logos remain the exclusive property of their respective trademark holders. Mention of completed hotel projects does not constitute direct corporate brand endorsement, sponsorship, or corporate-level partnership unless supported by a formal corporate master agreement.
              </p>
            </div>
          </section>

          {/* 3. Material & Sustainability Disclosures */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">03.</span>
              <span>Environmental &amp; Sustainable Production Attributes</span>
            </h2>
            <p>
              In compliance with FTC Green Guides, our environmental and material claims are tied directly to contracted project specifications:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Certified Sustainable Lumber:</strong> Sourced lumber (including FSC-certified hardwoods and low-formaldehyde MDF/plywood meeting CARB Phase 2 / EPA TSCA Title VI) is provided when specified in project purchase orders.</li>
              <li><strong>Finishes &amp; Coatings:</strong> Water-based stains, low-VOC lacquers, and powder coatings are applied in accordance with contracted safety and environmental standards.</li>
              <li><strong>Environmental Programs:</strong> Specific sustainability initiatives or tree-planting contributions are documented on project-specific schedules where contracted.</li>
            </ul>
          </section>

          {/* 4. Pricing, Scope & Timelines */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">04.</span>
              <span>Direct Sourcing, Quotes &amp; Timelines</span>
            </h2>
            <p>
              Akshar Foshan provides direct manufacturer pricing with clearly defined project scope and bill of quantities. Delivery estimates, prototype build schedules, and production timelines are project-specific commitments based on factory capacity, ocean freight schedules, and client submittal turnaround.
            </p>
          </section>

          {/* 5. Fire Safety, CAL 133 & ADA Standards */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">05.</span>
              <span>Safety Certifications &amp; ADA Specifications</span>
            </h2>
            <p>
              Furniture is engineered to satisfy required commercial safety and hospitality brand standards:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Flammability Compliance:</strong> Where contracted, seating and foam components are engineered to CAL 133 or TB 117-2013 flammability criteria with accredited laboratory certification.</li>
              <li><strong>ADA Accessibility:</strong> Accessible guestroom casegoods, counters, and clearance dimensions are built strictly to approved architectural specifications.</li>
            </ul>
          </section>

          {/* 6. Warranty & Governing Law */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">06.</span>
              <span>Commercial Warranty &amp; Inquiries</span>
            </h2>
            <p>
              Akshar Foshan and Divine warrant that goods conform to approved shop drawings and are free from structural manufacturing defects for one (1) full year from substantial completion.
            </p>
            <p>
              For commercial contracting inquiries, tax certificates, or warranty questions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mt-4">
              <div className="bg-[#FAF8F5] border border-[#EBEBE9] rounded-xl p-5 space-y-1">
                <p className="font-bold text-brand-charcoal">Akshar (Foshan) Hotel Furniture Co., Ltd.</p>
                <p>Email: <a href="mailto:info@aksharfoshan.com" className="text-brand-plum underline">info@aksharfoshan.com</a></p>
                <p>Website: www.aksharfoshan.com</p>
              </div>
              <div className="bg-[#FAF8F5] border border-[#EBEBE9] rounded-xl p-5 space-y-1">
                <p className="font-bold text-brand-charcoal">Divine Design &amp; Procurement LLC</p>
                <p>Email: <a href="mailto:yogin@hotelprocurement.net" className="text-brand-plum underline">yogin@hotelprocurement.net</a></p>
                <p>Website: www.divineprocurement.com</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
