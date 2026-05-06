"use client";
import { REVIEWS } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import { Star } from "lucide-react";

const Reviews = () => (
  <section id="reviews" className="bg-[var(--buttons)]/10 py-24 md:py-32">
    <div className="container px-6 md:px-12 lg:px-20">
      <SectionHeader
        eyebrow="Reviews"
        title="What our clients say"
        subtitle="Real feedback from homeowners and businesses who trusted us with their floors."
        center={false}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((r) => (
          <figure
            key={r.name}
            className="rounded-xl bg-card p-7 border border-[var(--primary)]/30 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-500"
          >
            {/* Estrellas */}
            <div className="flex gap-0.5 text-[var(--buttons)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>

            {/* Texto del review */}
            <blockquote className="mt-4 text-foreground/85 italic font-serif text-lg leading-relaxed">
              "{r.text}"
            </blockquote>

            {/* Autor */}
            <figcaption className="mt-4 text-sm text-muted-foreground">
              — {r.name}, {r.city}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
