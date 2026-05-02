// ===== SCS Corp — Centralized Content & Configuration =====

export const COMPANY = {
  name: "SCS Corp",
  legalName: "SCS Corp Services Group",
  tagline: "Affordable. Trusted. Nationwide.",
  phone: "1300 223 229",
  phoneFormatted: "+61 1300 223 229",
  phoneHref: "tel:+611300223229",
  email: "NOC@scscorp.biz",
  emailHref: "mailto:NOC@scscorp.biz",
  address: {
    street: "21 Alexandra Place",
    suburb: "Bentley",
    state: "WA",
    postcode: "6102",
    country: "Australia",
    full: "21 Alexandra Place, Bentley, WA 6102",
  },
  hours: "Sunday – Friday: 9am – 5pm",
  hoursShort: "Sun–Fri 9am–5pm",
  yearFounded: 2014,
  yearsExperience: 12,
  website: "https://scscorp.biz",
  abn: "", // To be confirmed
} as const;

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "YouTube", href: "#", icon: "youtube" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Cleaning", href: "/services/cleaning", description: "Residential and commercial cleaning services" },
      { label: "Building Maintenance", href: "/services/maintenance", description: "Proactive upkeep and reactive repairs" },
      { label: "Traffic Control", href: "/services/traffic-control", description: "Certified traffic management solutions" },
      { label: "Lawn Care", href: "/services/lawn-care", description: "Professional mowing and garden maintenance" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "cleaning",
    title: "Cleaning",
    shortTitle: "Cleaning Service",
    tagline: "Spotless spaces, every time.",
    shortDescription: "Deep cleaning, regular maintenance, and move-in/move-out cleans. Your home deserves a truly professional touch.",
    fullDescription: "From end-of-lease deep cleans to regular office maintenance, our trained cleaning teams deliver hospital-grade results using eco-friendly products. We service residential homes, strata complexes, commercial offices, and government buildings across all of Australia.",
    icon: "sparkles",
    href: "/services/cleaning",
    features: [
      "Deep cleaning and sanitisation",
      "Regular scheduled cleaning",
      "End-of-lease / move-in cleans",
      "Carpet and upholstery cleaning",
      "Window and facade cleaning",
      "Post-construction clean-up",
    ],
    industries: ["Residential", "Strata", "Commercial", "Government"],
    process: [
      { title: "Initial Assessment", description: "We inspect your property and understand your specific needs." },
      { title: "Custom Plan", description: "A detailed cleaning plan tailored to your space and schedule." },
      { title: "Professional Execution", description: "Our trained team delivers using eco-friendly products and equipment." },
      { title: "Quality Check", description: "Every job is inspected against our quality checklist before sign-off." },
    ],
    faqs: [
      { question: "What cleaning products do you use?", answer: "We use hospital-grade, eco-safe products that are tough on grime but gentle on surfaces, families, and pets. All products are biodegradable and low-VOC." },
      { question: "Do you provide cleaning supplies and equipment?", answer: "Yes, our teams arrive fully equipped with all necessary supplies, equipment, and products. You don't need to provide anything." },
      { question: "Can I book a one-off deep clean?", answer: "Absolutely. We offer both one-off deep cleans and regular scheduled services. Many clients start with a deep clean and then move to a regular schedule." },
      { question: "Are your cleaners insured and background-checked?", answer: "Yes. Every team member carries full public liability insurance and has passed a thorough background check before joining SCS Corp." },
      { question: "What areas do you service?", answer: "We operate in all states and territories across Australia, from major metro centres to regional communities." },
    ],
  },
  {
    slug: "maintenance",
    title: "Building Maintenance",
    shortTitle: "Maintenance",
    tagline: "Keep your property in peak condition.",
    shortDescription: "Proactive upkeep, reactive repairs, and full building care. Your property deserves truly professional maintenance.",
    fullDescription: "Our building maintenance division handles everything from routine upkeep to emergency repairs. We partner with strata managers, commercial landlords, and government bodies to keep properties safe, compliant, and well-presented year-round.",
    icon: "wrench",
    href: "/services/maintenance",
    features: [
      "Preventative maintenance programs",
      "Emergency repair response",
      "Common area upkeep",
      "Pressure washing and exterior cleaning",
      "Light electrical and plumbing",
      "Painting and minor renovations",
    ],
    industries: ["Strata", "Commercial", "Government", "Industrial"],
    process: [
      { title: "Property Audit", description: "Comprehensive assessment of your building's maintenance needs." },
      { title: "Maintenance Plan", description: "A scheduled program covering all preventative and routine tasks." },
      { title: "Ongoing Service", description: "Regular visits by our trained maintenance team with detailed reporting." },
      { title: "Emergency Response", description: "Rapid response for urgent repairs and after-hours emergencies." },
    ],
    faqs: [
      { question: "What types of buildings do you maintain?", answer: "We maintain residential strata complexes, commercial office buildings, retail centres, industrial facilities, and government properties." },
      { question: "Do you offer emergency maintenance?", answer: "Yes. We provide emergency response services for urgent repairs. Contact us directly and we'll dispatch a team as quickly as possible." },
      { question: "Can you handle both interior and exterior maintenance?", answer: "Absolutely. Our teams are equipped for everything from interior repairs and painting to exterior pressure washing, gutter cleaning, and facade maintenance." },
      { question: "How do you report on completed work?", answer: "We provide detailed reports after each visit, including photos, tasks completed, and any issues identified for future attention." },
      { question: "What is your response time for repairs?", answer: "For non-emergency repairs, we typically schedule within 48 hours. Emergency repairs are attended to as fast as possible, usually same-day." },
    ],
  },
  {
    slug: "traffic-control",
    title: "Traffic Control",
    shortTitle: "Traffic Control",
    tagline: "Certified. Compliant. Safe.",
    shortDescription: "Road closures, worksite safety, and traffic diversions done right. Your project deserves truly professional traffic control.",
    fullDescription: "Our certified traffic controllers and traffic management planners ensure your worksite is safe, compliant, and efficient. We hold all required TMC accreditations and work to current TMP standards across road construction, utilities, events, and civil projects nationwide.",
    icon: "traffic-cone",
    href: "/services/traffic-control",
    features: [
      "Traffic Management Plans (TMP)",
      "Certified traffic controllers",
      "Road closures and lane management",
      "Worksite safety implementation",
      "Event traffic management",
      "Pedestrian and vehicle control",
    ],
    industries: ["Construction", "Civil", "Government", "Events", "Utilities"],
    process: [
      { title: "Site Assessment", description: "We assess your worksite and understand traffic flow requirements." },
      { title: "TMP Development", description: "Certified traffic management plans developed to current standards." },
      { title: "Implementation", description: "Accredited controllers deploy signage, barriers, and traffic flow systems." },
      { title: "Monitoring & Compliance", description: "Ongoing monitoring to ensure safety and regulatory compliance." },
    ],
    certifications: [
      "Traffic Management Centre (TMC) Accredited",
      "Traffic Management Plan (TMP) Certified",
      "Work Health & Safety (WHS) Compliant",
      "Safe Work Australia Standards",
      "State-specific road authority approvals",
    ],
    faqs: [
      { question: "Are your traffic controllers certified?", answer: "Yes. All our traffic controllers hold current certifications and accreditations as required by each state and territory. We maintain strict compliance with all regulatory requirements." },
      { question: "Can you prepare Traffic Management Plans?", answer: "Absolutely. Our qualified traffic management planners prepare TMPs that comply with current Australian standards and are approved by relevant road authorities." },
      { question: "What types of projects do you support?", answer: "We support road construction, utility works, civil infrastructure, building construction, events, and any project requiring certified traffic management." },
      { question: "Do you operate in regional areas?", answer: "Yes. We operate across all states and territories, including regional and remote locations throughout Australia." },
      { question: "What safety standards do you follow?", answer: "We comply with WHS legislation, Safe Work Australia standards, and all state-specific traffic management regulations. Safety is our number one priority." },
      { question: "How quickly can you mobilise for a project?", answer: "We can typically mobilise within 24-48 hours for standard projects. For urgent requirements, we'll work with you to expedite deployment." },
    ],
  },
  {
    slug: "lawn-care",
    title: "Lawn Mowing & Garden Care",
    shortTitle: "Lawn Care",
    tagline: "Neat, tidy, and beautifully maintained.",
    shortDescription: "Neat edges, regular mowing, and tidy outdoor spaces. Your lawn deserves a truly professional touch.",
    fullDescription: "From regular residential mowing to large-scale commercial grounds maintenance, our lawn care teams keep your outdoor spaces looking their best. We handle mowing, edging, hedging, weeding, mulching, and seasonal garden clean-ups across Australia.",
    icon: "trees",
    href: "/services/lawn-care",
    features: [
      "Regular lawn mowing and edging",
      "Hedge trimming and shaping",
      "Garden bed maintenance",
      "Mulching and soil conditioning",
      "Seasonal clean-ups",
      "Commercial grounds maintenance",
    ],
    industries: ["Residential", "Strata", "Commercial", "Council", "Estates"],
    process: [
      { title: "Garden Assessment", description: "We inspect your outdoor spaces and discuss your preferences." },
      { title: "Service Plan", description: "A regular schedule tailored to your property's needs and budget." },
      { title: "Professional Care", description: "Our teams arrive with commercial-grade equipment for a flawless result." },
      { title: "Ongoing Maintenance", description: "Regular visits keep your grounds in top condition year-round." },
    ],
    faqs: [
      { question: "How often should I have my lawn mowed?", answer: "We recommend fortnightly mowing for most residential properties, but we can adjust the schedule based on your lawn type, season, and preferences." },
      { question: "Do you bring your own equipment?", answer: "Yes. Our teams use commercial-grade mowers, trimmers, blowers, and hedging equipment. We maintain all equipment to the highest standard." },
      { question: "Can you maintain large commercial properties?", answer: "Absolutely. We maintain commercial properties, strata complexes, council parks, and large residential estates across Australia." },
      { question: "Do you offer garden clean-ups?", answer: "Yes. We provide one-off seasonal clean-ups as well as ongoing garden maintenance including weeding, mulching, pruning, and garden bed care." },
      { question: "What happens if it rains on my scheduled day?", answer: "We'll reschedule to the next available day and notify you in advance. We always aim to stay within the same week as your regular schedule." },
    ],
  },
] as const;

export const STATS = [
  { value: 8, label: "States & Territories", suffix: "" },
  { value: 100, label: "Nationwide Coverage", suffix: "%" },
  { value: 500, label: "Jobs Completed", suffix: "+" },
  { value: 25, label: "Skilled Team Members", suffix: "+" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "The team did an incredible job on our office deep clean. On time, thorough, and left everything spotless. Our staff noticed the difference immediately. Will absolutely book again.",
    name: "Sarah Mitchell",
    role: "Office Manager",
    company: "Greenfield & Sons",
    rating: 5,
  },
  {
    quote: "Our building's common areas have never looked this good. SCS Corp is reliable, professional, and shows up every single fortnight without fail. Highly recommend them to any strata manager.",
    name: "David Chen",
    role: "Strata Committee Chair",
    company: "Pinnacle Strata Complex",
    rating: 5,
  },
  {
    quote: "Booked the lawn mowing service for my rental property and the tenant was over the moon. Quick, clean, very affordable, and the garden looks better than ever. Great service.",
    name: "Karen O'Brien",
    role: "Property Manager",
    company: "Harrington Real Estate",
    rating: 5,
  },
  {
    quote: "SCS Corp handled all traffic control for our road resurfacing project. Professional, certified, and not a single safety incident. They made the whole process seamless.",
    name: "James Nguyen",
    role: "Project Manager",
    company: "CityBuild Construction",
    rating: 5,
  },
  {
    quote: "We switched to SCS Corp for our strata cleaning last year and the difference has been night and day. Consistent quality, great communication, and genuinely nice people to work with.",
    name: "Melissa Harper",
    role: "Homeowner",
    company: "Bentley Heights Strata",
    rating: 5,
  },
  {
    quote: "Their maintenance team identified issues we didn't even know existed. The preventative approach has saved us thousands in potential repair costs. Couldn't be happier.",
    name: "Robert Tran",
    role: "Facilities Manager",
    company: "Pacific Commercial Group",
    rating: 5,
  },
] as const;

export const PROJECTS = [
  {
    title: "Greenfield & Sons Office Cleaning",
    category: "Commercial Cleaning",
    description: "Full office deep clean across three floors, including carpets, windows, and sanitisation of all workspaces. Completed in a single after-hours session.",
    slug: "greenfield-office-cleaning",
  },
  {
    title: "Mitchell Family Full House Cleaning",
    category: "Residential Cleaning",
    description: "Complete end-of-lease deep clean including carpet steam cleaning, oven degreasing, and bathroom sanitisation. Bond returned in full.",
    slug: "mitchell-house-cleaning",
  },
  {
    title: "Harrington Estate Grounds Maintenance",
    category: "Lawn Care",
    description: "Ongoing fortnightly lawn mowing, hedge trimming, weeding, and seasonal garden tidy-ups for a large residential estate.",
    slug: "harrington-grounds",
  },
  {
    title: "Pinnacle Industries Strata Cleaning",
    category: "Strata Maintenance",
    description: "Scheduled weekly building maintenance for an 80-unit strata complex — common areas, carparks, lifts, lobbies, and exterior pressure washing.",
    slug: "pinnacle-strata",
  },
] as const;

export const CLIENT_LOGOS = [
  { name: "JW Marriott", width: 120 },
  { name: "Marriott International", width: 140 },
  { name: "Memocorp Australia", width: 130 },
  { name: "City of Perth", width: 110 },
  { name: "Stockland", width: 120 },
  { name: "Lendlease", width: 130 },
  { name: "Scentre Group", width: 120 },
  { name: "Downer Group", width: 110 },
] as const;

export const VALUES = [
  {
    title: "Reliability",
    description: "We show up when we say we will, every single time. Our clients count on consistency and we deliver it without exception.",
    icon: "shield-check",
  },
  {
    title: "Eco-Responsible Practices",
    description: "From biodegradable cleaning products to low-emission equipment, we're committed to reducing our environmental footprint.",
    icon: "leaf",
  },
  {
    title: "Quality Without Compromise",
    description: "Every job is completed against detailed checklists and quality standards. We don't cut corners — ever.",
    icon: "award",
  },
  {
    title: "Honest, Transparent Pricing",
    description: "No hidden fees, no surprise charges. You'll know exactly what you're paying for before we start.",
    icon: "badge-check",
  },
  {
    title: "Safety First",
    description: "Full insurance, background checks, WHS compliance, and ongoing training. Your safety is our top priority.",
    icon: "hard-hat",
  },
  {
    title: "Client-First Communication",
    description: "Responsive, clear, and proactive. We keep you informed at every stage and welcome your feedback.",
    icon: "message-circle",
  },
] as const;

export const SERVICE_PACKAGES = [
  {
    tier: "Residential",
    description: "Perfect for homeowners and tenants who want reliable, professional property care.",
    features: [
      "Regular or one-off cleaning",
      "Lawn mowing and garden maintenance",
      "End-of-lease deep cleans",
      "Flexible scheduling",
      "Eco-friendly products",
      "Fully insured team members",
    ],
    cta: "Get a Custom Quote",
    popular: false,
  },
  {
    tier: "Strata",
    description: "Comprehensive care for strata complexes, body corporates, and multi-unit properties.",
    features: [
      "Common area cleaning and maintenance",
      "Grounds and garden upkeep",
      "Pressure washing and exterior care",
      "Scheduled preventative maintenance",
      "Emergency repair response",
      "Detailed reporting for committees",
    ],
    cta: "Get a Custom Quote",
    popular: true,
  },
  {
    tier: "Commercial",
    description: "Enterprise-grade solutions for offices, retail spaces, construction sites, and government.",
    features: [
      "Office and facility cleaning",
      "Building maintenance programs",
      "Certified traffic control",
      "Large-scale grounds maintenance",
      "Custom service bundles",
      "Dedicated account management",
    ],
    cta: "Get a Custom Quote",
    popular: false,
  },
] as const;

export const HERO_CONTENT = {
  eyebrow: "Affordable. Trusted. Nationwide.",
  title: "Cleaning, Maintenance, Traffic Control, and Lawn Care.",
  titleAccent: "One Trusted Team.",
  subtitle: "We are Australia's trusted provider of end-to-end property and site services. Whether you need a spotless space, proactive building care, certified traffic control, or professional lawn maintenance — our fully trained teams deliver anywhere across Australia.",
  primaryCta: "Book a Service",
  secondaryCta: `Call ${COMPANY.phoneFormatted}`,
} as const;

export const ABOUT_CONTENT = {
  heroEyebrow: "About Us",
  heroTitle: "Trusted Property Care, Built on Experience",
  heroSubtitle: "For over 12 years, SCS Corp has been delivering reliable, professional property services to Australian homes, businesses, and communities.",
  story: {
    title: "Our Story",
    paragraphs: [
      "SCS Corp started with a single mop bucket, one van, and a commitment to doing the job properly. What began as a small residential cleaning service in Western Australia has grown into a national property services company covering cleaning, building maintenance, traffic control, and lawn care.",
      "Today, we operate across all eight states and territories, servicing residential homes, strata complexes, commercial offices, construction sites, and government facilities. Our team of 25+ trained professionals shares one thing in common: a genuine pride in delivering results that exceed expectations.",
      "We believe that property care should be reliable, affordable, and hassle-free. That's why every SCS Corp team member is fully insured, background-checked, and equipped with the best eco-friendly products and commercial-grade equipment available.",
    ],
  },
  statsStrip: [
    { value: 500, suffix: "+", label: "Jobs Completed" },
    { value: 25, suffix: "+", label: "Skilled Team Members" },
    { value: 4.9, suffix: "", label: "Avg Client Rating", decimals: 1 },
    { value: 12, suffix: "+", label: "Years Experience" },
  ],
} as const;
