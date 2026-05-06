"use client";
import { GALLERY_SCROLL } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import PortfolioLink from "../ui/Portlink";

export default function GalleryMarquee() {
  const items = [...GALLERY_SCROLL, ...GALLERY_SCROLL, ...GALLERY_SCROLL];

  return (
    <section className="py-12 md:py-16 bg-[var(--buttons)]/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Unrivaled Craftsmanship"
          subtitle="Explore our finest flooring and remodeling projects, crafted with precision and elegance."
          center
        />
      </div>

      <div className="relative flex overflow-x-hidden mt-8">
        <div className="flex animate-marquee whitespace-nowrap gap-6 py-4">
          {items.map((src, i) => (
            <div
              key={i}
              className="h-[220px] md:h-[280px] w-[320px] md:w-[420px] shrink-0 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-500"
            >
              <img
                src={src}
                alt="Work in progress"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Botón debajo del carousel */}
      <div className="container mx-auto px-6 flex justify-center">
        <PortfolioLink />
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
