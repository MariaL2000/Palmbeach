"use client";
import { GALLERY_SCROLL } from "@/data/site";

export default function GalleryMarquee() {
  const items = [...GALLERY_SCROLL, ...GALLERY_SCROLL, ...GALLERY_SCROLL];

  return (
    <section className="py-20 bg-primary/5 border-y border-primary/10 overflow-hidden">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-serif text-3xl italic text-primary">
          Unrivaled Craftsmanship
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-6 py-4">
          {items.map((src, i) => (
            <div
              key={i}
              className="h-[300px] w-[450px] shrink-0 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500"
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
