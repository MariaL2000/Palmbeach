"use client";
import { REVIEWS } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import { Star } from "lucide-react";

const Reviews = () => {
  // Duplicamos los items para el efecto infinito
  const items = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className=" py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <SectionHeader
          eyebrow="Reviews"
          title="What our clients say"
          subtitle="Real feedback from homeowners and businesses who trusted us with their floors."
          center={true}
        />
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee-reviews whitespace-nowrap gap-6 py-10">
          {items.map((r, i) => (
            <figure
              key={`${r.name}-${i}`}
              className="w-[300px] md:w-[400px] shrink-0 rounded-xl bg-white p-7 border border-[var(--primary)]/30 shadow-lg hover:shadow-xl transition-all duration-500 whitespace-normal"
            >
              <div className="flex gap-0.5 text-[var(--buttons)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <blockquote className="mt-4 text-foreground/85 italic font-serif text-lg leading-relaxed">
                "{r.text}"
              </blockquote>

              <figcaption className="mt-4 text-sm text-muted-foreground font-bold">
                — {r.name}, {r.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-reviews {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-reviews {
          display: flex;
          width: fit-content;
          animation: marquee-reviews 40s linear infinite;
        }
        .animate-marquee-reviews:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
