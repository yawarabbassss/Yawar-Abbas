import React from "react";
import { SITE_DATA } from "@/data/siteData";

export const JsonLd: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": SITE_DATA.personal.name,
    "jobTitle": SITE_DATA.personal.title,
    "email": SITE_DATA.personal.email,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Punjab",
      "addressCountry": "Pakistan"
    },
    "knowsAbout": [
      "Search Engine Optimization",
      "Technical SEO",
      "Generative Engine Optimization",
      "Content Strategy",
      "Conversion Rate Optimization",
      "Programmatic SEO"
    ],
    "sameAs": [
      SITE_DATA.urls.linkedin,
      SITE_DATA.urls.instagram,
      SITE_DATA.urls.facebook
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${SITE_DATA.personal.name} | ${SITE_DATA.personal.title}`,
    "url": "https://yawarabbas.com",
    "description": SITE_DATA.personal.heroHeadline,
    "author": {
      "@type": "Person",
      "name": SITE_DATA.personal.name
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};
