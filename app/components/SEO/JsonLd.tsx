import React from 'react';

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bengkel Sitepu",
    "image": "https://bengkelsitepu.com/og-image.png",
    "@id": "https://bengkelsitepu.com",
    "url": "https://bengkelsitepu.com",
    "telephone": "+6285262065007",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Parang I No.15, Kwala Bekala, Kec. Medan Johor",
      "addressLocality": "Medan",
      "postalCode": "20131",
      "addressRegion": "Sumatera Utara",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 3.5393758,
      "longitude": 98.6519077
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/bengkelsitepu",
      "https://www.instagram.com/bengkelsitepu",
      "https://twitter.com/bengkelsitepu"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
