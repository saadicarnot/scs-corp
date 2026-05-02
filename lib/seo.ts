// ===== JSON-LD Structured Data Generators for Topical Authority SEO =====
// Reference: https://schema.org
// Validates via: https://search.google.com/test/rich-results

import { COMPANY, SERVICES, TESTIMONIALS, SOCIAL_LINKS } from "./constants";

const BASE_URL = "https://scscorp.biz";

// ── Organization + LocalBusiness (site-wide, in root layout) ──────────────

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/brand/logo.svg`,
      width: 320,
      height: 80,
    },
    image: `${BASE_URL}/brand/logo.svg`,
    description:
      "Australia's trusted provider of cleaning, building maintenance, traffic control, and lawn care services for residential, strata, commercial, and council properties. Nationwide coverage across all states and territories.",
    telephone: COMPANY.phoneFormatted,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.suburb,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.postcode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -31.9814,
      longitude: 115.9198,
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    foundingDate: String(COMPANY.yearFounded),
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 25,
    },
    priceRange: "$$",
    sameAs: SOCIAL_LINKS.filter((s) => s.href !== "#").map((s) => s.href),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phoneFormatted,
        contactType: "customer service",
        areaServed: "AU",
        availableLanguage: "English",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SCS Corp Services",
      itemListElement: SERVICES.map((service, i) => ({
        "@type": "OfferCatalog",
        name: service.title,
        position: i + 1,
        url: `${BASE_URL}${service.href}`,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "200",
      reviewCount: String(TESTIMONIALS.length),
    },
  };
}

// ── WebSite + SearchAction ────────────────────────────────────────────────

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: COMPANY.name,
    url: BASE_URL,
    description:
      "SCS Corp — Australia's trusted provider of cleaning, building maintenance, traffic control, and lawn care services.",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    inLanguage: "en-AU",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ── BreadcrumbList (per-page) ─────────────────────────────────────────────

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

// ── Service schema (per service detail page) ──────────────────────────────

export function generateServiceSchema(service: (typeof SERVICES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}${service.href}#service`,
    name: service.title,
    description: service.fullDescription,
    url: `${BASE_URL}${service.href}`,
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: service.title,
    category: "Property Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Services`,
      itemListElement: service.features.map((feature, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    },
    // Industries served as audience
    audience: service.industries.map((industry) => ({
      "@type": "Audience",
      audienceType: industry,
    })),
    // Certifications for traffic control
    ...("certifications" in service
      ? {
          hasCredential: (service as typeof SERVICES[2]).certifications.map(
            (cert) => ({
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Professional Certification",
              name: cert,
            })
          ),
        }
      : {}),
  };
}

// ── FAQPage schema (per service detail + contact page) ────────────────────

export function generateFAQSchema(
  faqs: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ── Review schema (aggregated testimonials) ───────────────────────────────

export function generateReviewSchema() {
  return TESTIMONIALS.map((testimonial) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: testimonial.name,
    },
    reviewBody: testimonial.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(testimonial.rating),
      bestRating: "5",
    },
    itemReviewed: {
      "@id": `${BASE_URL}/#organization`,
    },
    publisher: {
      "@type": "Organization",
      name: testimonial.company,
    },
  }));
}

// ── WebPage schema (per page, for topical authority signals) ──────────────

export function generateWebPageSchema(options: {
  title: string;
  description: string;
  url: string;
  type?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": options.type || "WebPage",
    "@id": `${BASE_URL}${options.url}#webpage`,
    name: options.title,
    description: options.description,
    url: `${BASE_URL}${options.url}`,
    isPartOf: {
      "@id": `${BASE_URL}/#website`,
    },
    about: {
      "@id": `${BASE_URL}/#organization`,
    },
    datePublished: options.datePublished || "2024-01-01",
    dateModified: options.dateModified || new Date().toISOString().split("T")[0],
    inLanguage: "en-AU",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
  };
}

// ── Service Area pages (for geo topical authority) ────────────────────────

export const SERVICE_AREAS = [
  {
    state: "New South Wales",
    stateShort: "NSW",
    slug: "nsw",
    cities: ["Sydney", "Newcastle", "Wollongong", "Central Coast", "Canberra Region"],
    description:
      "SCS Corp delivers professional cleaning, building maintenance, traffic control, and lawn care services across New South Wales — from Sydney CBD to the Central Coast, Newcastle, Wollongong, and surrounding regions.",
  },
  {
    state: "Victoria",
    stateShort: "VIC",
    slug: "vic",
    cities: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Mornington Peninsula"],
    description:
      "Our Victorian operations cover Melbourne metro, Geelong, Ballarat, Bendigo, and the Mornington Peninsula. Full property services for residential, strata, and commercial clients.",
  },
  {
    state: "Queensland",
    stateShort: "QLD",
    slug: "qld",
    cities: ["Brisbane", "Gold Coast", "Sunshine Coast", "Cairns", "Townsville"],
    description:
      "From Brisbane to the Gold Coast, Sunshine Coast, Cairns, and Townsville — SCS Corp provides reliable property and site services across Queensland.",
  },
  {
    state: "Western Australia",
    stateShort: "WA",
    slug: "wa",
    cities: ["Perth", "Fremantle", "Joondalup", "Rockingham", "Bunbury"],
    description:
      "Based in Perth, SCS Corp provides complete property services across the greater Perth metro area, Fremantle, Joondalup, Rockingham, and regional WA.",
  },
  {
    state: "South Australia",
    stateShort: "SA",
    slug: "sa",
    cities: ["Adelaide", "Mount Barker", "Victor Harbor", "Port Augusta"],
    description:
      "SCS Corp services Adelaide and surrounding South Australian communities with professional cleaning, maintenance, traffic control, and lawn care.",
  },
  {
    state: "Tasmania",
    stateShort: "TAS",
    slug: "tas",
    cities: ["Hobart", "Launceston", "Devonport"],
    description:
      "Our Tasmanian operations cover Hobart, Launceston, and Devonport — delivering consistent property care across the island state.",
  },
  {
    state: "Northern Territory",
    stateShort: "NT",
    slug: "nt",
    cities: ["Darwin", "Alice Springs"],
    description:
      "From Darwin to Alice Springs, SCS Corp serves the Northern Territory with reliable and professional property services.",
  },
  {
    state: "Australian Capital Territory",
    stateShort: "ACT",
    slug: "act",
    cities: ["Canberra", "Queanbeyan"],
    description:
      "SCS Corp delivers cleaning, maintenance, traffic control, and lawn care across the ACT, including Canberra and surrounding areas.",
  },
] as const;

// ── Industry-Specific Content (for topical depth) ────────────────────────

export const INDUSTRIES = [
  {
    slug: "residential",
    title: "Residential Property Services",
    description:
      "Professional cleaning, lawn mowing, and maintenance for homeowners, landlords, and tenants. Regular or one-off services tailored to your home.",
    services: ["cleaning", "lawn-care", "maintenance"],
    content:
      "Whether you're a homeowner wanting a pristine living space, a landlord preparing a property for new tenants, or a tenant needing an end-of-lease clean — SCS Corp delivers reliable residential services across Australia. Our residential packages include regular cleaning, deep cleans, lawn mowing, garden maintenance, and general home upkeep.",
  },
  {
    slug: "strata",
    title: "Strata & Body Corporate Services",
    description:
      "Comprehensive property care for strata complexes, apartments, and body corporate properties. Common areas, grounds, and building maintenance.",
    services: ["cleaning", "maintenance", "lawn-care"],
    content:
      "Strata managers and body corporate committees trust SCS Corp to maintain their properties to the highest standard. We handle common area cleaning, grounds maintenance, pressure washing, painting, and preventative building maintenance — all with detailed reporting for committee meetings.",
  },
  {
    slug: "commercial",
    title: "Commercial & Office Services",
    description:
      "Office cleaning, facility maintenance, and grounds care for commercial properties, retail centres, and corporate offices across Australia.",
    services: ["cleaning", "maintenance", "lawn-care"],
    content:
      "A clean, well-maintained commercial space makes a strong impression. SCS Corp provides scheduled office cleaning, facility maintenance, and commercial grounds care for offices, retail centres, warehouses, and mixed-use developments. Our teams work around your business hours to minimise disruption.",
  },
  {
    slug: "construction",
    title: "Construction & Civil Services",
    description:
      "Certified traffic control, worksite safety, and post-construction cleaning for builders, developers, and civil contractors across Australia.",
    services: ["traffic-control", "cleaning"],
    content:
      "SCS Corp supports Australia's construction and civil sector with certified traffic management, post-construction clean-ups, and worksite services. Our accredited traffic controllers and TMP planners ensure your projects run safely and compliantly.",
  },
  {
    slug: "government",
    title: "Government & Council Services",
    description:
      "Property maintenance, grounds care, traffic management, and cleaning for local councils, state government, and public facilities.",
    services: ["cleaning", "maintenance", "traffic-control", "lawn-care"],
    content:
      "Local councils and government agencies across Australia rely on SCS Corp for consistent, compliant property services. We provide scheduled maintenance, grounds care, traffic control for roadworks, and facility cleaning — all delivered with accountability and detailed reporting.",
  },
] as const;
