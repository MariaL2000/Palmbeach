export interface Material {
  name: string;
  desc: string;
  img: string;
}

export const COMPANY = {
  name: "Medra ProWorks",
  short: "Prestige Flooring",
  location: "Palm Coast, FL",
  phone: "(561) 285-7825",
  phoneHref: "tel:5612857825",
  email: "medraproworks@gmail.com",
};

export const SERVICES = [
  {
    title: "Metallic Art Epoxy",
    slug: "metallic-epoxy",
    desc: "The pinnacle of interior luxury. We create bespoke, seamless floors that mimic the movement of liquid marble, designed specifically for high-end Miami residences.",
    img: "/portfoliof/a1.jpg",
  },
  {
    title: "Commercial Quartz",
    slug: "commercial-quartz",
    desc: "Unbeatable durability meets aesthetic precision. A high-performance system engineered for heavy traffic, offering superior slip resistance and a sophisticated finish.",
    img: "/portfoliof/a2.jpg",
  },
  {
    title: "Industrial Polyaspartic",
    slug: "polyaspartic-systems",
    desc: "Rapid-cure technology for fast-paced environments. Our coatings offer 4x the strength of standard epoxy, with complete UV stability and 24-hour return-to-service.",
    img: "/portfoliof/a3.jpg",
  },
];

export const GALLERY_SCROLL = [
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80",
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=100",
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=100",
];

export const WHY = [
  {
    title: "Licensed & Insured",
    desc: "Certified Florida installers with full coverage.",
  },
  {
    title: "Premium Materials",
    desc: "We only use top-tier resins and aggregates.",
  },
  {
    title: "10-Year Warranty",
    desc: "Confidence backed by a decade of protection.",
  },
  {
    title: "Local Experts",
    desc: "Built for Palm Beach climate and lifestyle.",
  },
];

export const MATERIALS = [
  {
    name: "100% Solids Epoxy",
    img: "/1.jpg",
    desc: "Industrial-grade resin that bonds permanently to concrete for unmatched durability.",
  },
  {
    name: "Polyaspartic Topcoat",
    img: "/2.jpg",
    desc: "UV-stable, fast-cure topcoat that resists yellowing under Florida sun.",
  },
  {
    name: "Decorative Vinyl Flakes",
    img: "/3.jpg",
    desc: "Multi-tone chips that add texture, traction and a custom designer look.",
  },
  {
    name: "Quartz Aggregates",
    img: "/4.jpg",
    desc: "Natural quartz grains for premium slip resistance and warm color depth.",
  },
  {
    name: "Metallic Pigments",
    img: "/5.jpg",
    desc: "Reflective pearl pigments that create dramatic three-dimensional swirls.",
  },
];

export const REVIEWS = [
  {
    name: "Sarah M.",
    city: "Palm ",
    text: "Absolutely flawless metallic epoxy in our foyer. Reflective like glass.",
  },
  {
    name: "James R.",
    city: "West Palm Beach",
    text: "Garage looks better than my living room. Clean install, on time.",
  },
  {
    name: "Elena G.",
    city: "Jupiter",
    text: "Pool deck stays cool and looks gorgeous. Highly recommend Impact.",
  },
];

export const FAQS = [
  {
    q: "How long does an installation take?",
    a: "Most residential projects are completed in 1–3 days, depending on square footage and prep needed.",
  },
  {
    q: "Are your floors slip-resistant?",
    a: "Yes. We add anti-slip aggregates to all outdoor and wet-area installations for safety.",
  },
  {
    q: "How do I maintain my new floor?",
    a: "Just sweep and damp-mop with a pH-neutral cleaner. No waxing required.",
  },
  {
    q: "Do you offer warranties?",
    a: "We back every install with a 10-year warranty against peeling and delamination.",
  },
  {
    q: "Do you serve all of Palm Beach County?",
    a: "Yes — from Jupiter to Boca Raton, including West Palm Beach and the islands.",
  },
];

export const SERVICES_DETAILS = {
  "metallic-epoxy": {
    title: "Metallic Art Epoxy",
    subtitle: "Liquid Marble Aesthetics",
    description:
      "Our Metallic Art Epoxy systems represent the pinnacle of decorative flooring. Designed for high-end Miami residences, this system uses metallic pigments to create a 3D effect that mimics natural stone, marble, or even deep-sea currents. It is completely seamless, antimicrobial, and finished with a high-performance topcoat for lasting brilliance.",
    image: "/portfoliof/a1.jpg",
    benefits: [
      "Bespoke Designs",
      "Seamless Finish",
      "Antimicrobial",
      "High Gloss Reflectivity",
    ],
  },
  "commercial-quartz": {
    title: "Commercial Quartz",
    subtitle: "Engineered for Performance",
    description:
      "Miami's high-traffic commercial spaces require floors that can withstand constant use without sacrificing style. Our Quartz system broadcasts multi-colored quartz aggregates into a high-strength resin, creating a slip-resistant, textured floor that is as tough as granite but much easier to maintain.",
    image: "/portfoliof/a2.jpg",
    benefits: [
      "Extreme Durability",
      "Slip Resistant",
      "Impact Tolerant",
      "Low Maintenance",
    ],
  },
  "polyaspartic-systems": {
    title: "Industrial Polyaspartic",
    subtitle: "24-Hour Return-to-Service",
    description:
      "When time is of the essence, our Industrial Polyaspartic coatings are the solution. Offering 4x the abrasion resistance of standard epoxy and complete UV stability (no yellowing in the Florida sun), this system is perfect for upscale garages and industrial facilities that need a fast, durable transformation.",
    image: "/portfoliof/a3.jpg",
    benefits: [
      "Rapid Cure Time",
      "UV Stable",
      "4x Stronger Than Epoxy",
      "Climate Resistant",
    ],
  },
};

export const HERO_IMAGES = [
  "/portfoliof/header1.jpg",
  "/portfoliof/header2.jpg",
  "/portfoliof/header3.jpg",
];

export const puzzleImages = [
  "/portfoliof/header1.jpg",
  "/portfoliof/a1.jpg",
  "/portfoliof/a3.jpg",
  "/portfoliof/a7.jpg",
];

export const DEFAULT_PROJECTS = [
  {
    id: "d1",
    url: "/portfoliof/a1.jpg",
    title: "Luxury Epoxy",
    category: "Interior",
  },
  {
    id: "d2",
    url: "/portfoliof/a2.jpg",
    title: "Polished Finish",
    category: "Commercial",
  },
  {
    id: "d3",
    url: "/portfoliof/a3.jpg",
    title: "Artistic Quartz",
    category: "Design",
  },
  {
    id: "d4",
    url: "/portfoliof/a5.jpg",
    title: "Modern Flake",
    category: "Garage",
  },
  {
    id: "d5",
    url: "/portfoliof/a6.jpg",
    title: "Industrial Strength",
    category: "Industrial",
  },
  {
    id: "d6",
    url: "/portfoliof/a7.jpg",
    title: "High Gloss",
    category: "Residential",
  },
  {
    id: "d7",
    url: "/portfoliof/a8.jpg",
    title: "High Gloss2",
    category: "Residential2",
  },
  {
    id: "d8",
    url: "/portfoliof/a9.jpg",
    title: "High Glosa3",
    category: "Residential3",
  },
  {
    id: "d9",
    url: "/portfoliof/a10.jpg",
    title: "High Gloss",
    category: "Residential4",
  },
  {
    id: "d10",
    url: "/portfoliof/a4.jpg",
    title: "High Gloss",
    category: "Residential5",
  },
];

export const BACKGROUNDS = [
  "/portfoliof/a1.jpg",
  "/portfoliof/a2.jpg",
  "/portfoliof/a3.jpg",
];
