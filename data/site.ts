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
    q: "What is the typical timeline for a professional installation?",
    a: "Most residential projects in Palm Coast are executed within 1 to 3 business days. This timeline includes our meticulous diamond-grinding surface preparation, base coat application, and the final high-performance topcoat. Larger scale commercial projects may require a custom schedule tailored to minimize operational downtime.",
  },
  {
    q: "How do your flooring systems handle the Florida climate and slip resistance?",
    a: "Our systems are engineered specifically for the coastal Florida environment. We integrate premium anti-slip aggregates into all installations—especially for pool decks, lanais, and garages—ensuring a safe, high-traction surface that meets industrial safety standards without compromising the floor's aesthetic brilliance.",
  },
  {
    q: "What maintenance is required to preserve the floor's integrity?",
    a: "One of the primary benefits of our systems is their low-maintenance nature. Regular sweeping and occasional damp-mopping with a pH-neutral cleaner are sufficient to maintain the pristine finish. Unlike traditional concrete or tile, our non-porous surfaces never require waxing, buffing, or aggressive chemical treatments.",
  },
  {
    q: "What does the Medra ProWorks warranty specifically cover?",
    a: "We stand behind our craftsmanship with a comprehensive 10-year professional warranty. This covers the most critical concerns: peeling, bubbling, and delamination. Our commitment is to provide a permanent bonding solution that withstands the test of time and the unique humidity of the Flagler County area.",
  },
  {
    q: "What areas do you serve beyond Palm Coast?",
    a: "Medra ProWorks proudly services the entire Northeast Florida corridor. While we are based in Palm Coast, our elite installation teams cover Flagler Beach, Ormond Beach, St. Augustine, Daytona Beach, and the surrounding upscale communities across Flagler and St. Johns counties.",
  },
  {
    q: "Can I choose a custom aesthetic for my project?",
    a: "Absolutely. We specialize in bespoke flooring solutions. From artisan metallic pigments that mimic natural stone to custom-blended decorative flakes, we work closely with you to engineer a material palette that perfectly complements your property's architectural style and your personal vision.",
  },
];

export const SERVICES_DETAILS = {
  "floor-installation": {
    slug: "floor-installation",
    title: "Premium Floor Installation",
    subtitle: "LVP & Vinyl Specialist",
    desc: "Expert installation of LVP, Vinyl, and Laminate systems. We focus on precision alignment and subfloor preparation to ensure long-term durability and aesthetics.",
    description:
      "Our technical team specializes in the precise installation of modern flooring. We handle everything from moisture barrier setup to meticulous Luxury Vinyl Plank (LVP) and high-end laminate fitting. We ensure that every joint is seamless and every transition is perfect. Note: To guarantee your total satisfaction with the aesthetic results, all materials are selected and provided by the client, while we provide the master-class craftsmanship.",
    img: "/service1.jpg",
    benefits: [
      "Precision LVP & Vinyl Fitting",
      "Laminate Flooring Installation",
      "Subfloor Leveling & Prep",
      "Moisture Barrier Application",
    ],
  },
  "stone-stone-refinement": {
    slug: "stone-stone-refinement",
    title: "Stone & Tile Refinement",
    subtitle: "Stone Installation Experts",
    desc: "Professional installation and refinement of stone and tile surfaces with architectural precision and high-end finishing for luxury environments.",
    description:
      "We transform spaces through the meticulous installation of natural stone, marble, and porcelain tiles. Our process emphasizes structural integrity and aesthetic symmetry, using advanced leveling systems to eliminate lippage. Whether it's a bathroom renovation or a grand living area, we provide the architectural precision your home deserves. The client provides their choice of stone or tile, ensuring the final look matches their unique vision.",
    img: "/service2.jpg",
    benefits: [
      "Stone & Marble Installation",
      "Porcelain Tile Precision",
      "Grout & Detail Perfection",
      "Architectural Surface Refinement",
    ],
  },
  "professional-painting": {
    slug: "professional-painting",
    title: "Artistic Wall Solutions",
    subtitle: "Painting & Surface Coating",
    desc: "Creative painting services for commercial and residential spaces, from structural walls to full interior transformations with premium finishes.",
    description:
      "Beyond floors, we bring life to your structures through color and texture. Our professional painting division handles upscale residential interiors and commercial locales with high-performance coatings. We focus on rigorous surface preparation—patching, sanding, and priming—to ensure a flawless, long-lasting finish. We work with the client's preferred palette to redefine environments, providing the clean lines and uniform coverage that define professional excellence.",
    img: "/service3.png",
    benefits: [
      "Commercial & Residential Painting",
      "Advanced Surface Preparation",
      "Premium Interior Wall Finishes",
      "Creative Texture Consultations",
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
