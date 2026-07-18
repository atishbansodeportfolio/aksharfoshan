import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
  robots?: string;
}

export default function SEO({
  title,
  description,
  keywords = 'hospitality furniture, hotel furniture manufacturer, FF&E supplier, custom casegoods, hotel seating, luxury millwork, Foshan furniture, Akshar Foshan',
  canonicalPath,
  ogType = 'website',
  ogImage = '/new-logo-1.png',
  robots = 'index, follow'
}: SEOProps) {
  const location = useLocation();
  const siteTitle = title ? `${title} | Akshar Foshan` : 'Akshar Foshan | Premium Hospitality Furniture & FF&E';
  
  const domain = 'https://www.aksharfoshan.com';
  const path = canonicalPath || location.pathname;
  const canonicalUrl = `${domain}${path}`;

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Akshar Foshan" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`} />
    </>
  );
}
