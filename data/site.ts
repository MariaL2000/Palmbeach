export interface Material {
  name: string;
  desc: string;
  img: string;
}

export const COMPANY = {
  name: "Prestige Flooring of North America",
  short: "Prestige Flooring",
  location: "Palm Beach, FL",
  phone: "(561) 285-7825",
  phoneHref: "tel:5612857825",
  email: "info@prestigeflooringfl.com",
};
export const SERVICES = [
  {
    title: "Tile Supply & Installation",
    slug: "tile-installation",
    img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=100",
    desc: "Premium tile supply and professional installation for residential and commercial spaces.",
  },
  {
    title: "Wood & Wood-Like Flooring",
    slug: "wood-flooring",
    img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=100",
    desc: "Curated selection of solid hardwood, engineered wood, and wood-like flooring.",
  },
  {
    title: "Kitchen & Bathroom Remodeling",
    slug: "remodeling",
    img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=100",
    desc: "Elegant and personalized kitchen and bathroom transformations.",
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
    city: "Palm Beach",
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
  "tile-installation": {
    title: "Precision Tile Installation",
    subtitle: "Durability meets artistic design for your surfaces.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
    description:
      "Our tile installation service focuses on perfection. Whether it's porcelain, ceramic, or natural stone, we ensure every piece is perfectly leveled and aligned to create a seamless, high-end finish.",
    benefits: [
      "Waterproof solutions for bathrooms",
      "High-traffic durability",
      "Easy maintenance",
      "Custom mosaic patterns",
    ],
  },
  "wood-flooring": {
    title: "Premium Wood Flooring",
    subtitle: "Timeless elegance and natural warmth for your home.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2070",
    description:
      "From engineered hardwood to luxury vinyl plank (LVP), we provide flooring that enhances the value of your property. We specialize in subfloor preparation to guarantee a squeak-free, long-lasting result.",
    benefits: [
      "Enhanced property value",
      "Eco-friendly material options",
      "Professional sanding & finishing",
      "Moisture-resistant LVP",
    ],
  },
  remodeling: {
    title: "Full-Scale Remodeling",
    subtitle: "Transforming spaces from floor to ceiling.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070",
    description:
      "Ready for a complete change? Our remodeling services cover everything from kitchen updates to full living room transformations, integrating new flooring with modern architectural elements.",
    benefits: [
      "Complete structural updates",
      "Integrated lighting & flooring",
      "Modern aesthetic design",
      "Turnkey project management",
    ],
  },
};
