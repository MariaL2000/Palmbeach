export interface Material {
  name: string;
  desc: string;
  img: string;
}

export const MATERIALS: Material[] = [
  {
    name: "Pure Resin",
    desc: "100% solids epoxy for maximum impact resistance and clarity.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80",
  },
  {
    name: "Diamond Grinders",
    desc: "Precision tooling to ensure a perfect mechanical bond for every coating.",
    img: "https://images.unsplash.com/photo-1581092921461-eab62e92c859?q=80",
  },
];

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
    title: "Metallic Epoxy",
    desc: "Seamless, high-gloss finishes that mimic the look of natural stone and marble.",
    img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80",
  },
  {
    title: "Polished Concrete",
    desc: "Industrial-grade durability with a sophisticated, mirror-like reflection.",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80",
  },
  {
    title: "Flake Systems",
    desc: "Multi-layered decorative coatings perfect for high-traffic garages and patios.",
    img: "https://images.unsplash.com/photo-1523394664535-72CC5394200d?q=80",
  },
];

export const GALLERY_SCROLL = [
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80",
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80",
  "https://images.unsplash.com/photo-1615873968403-89e068629275?q=80",
];
