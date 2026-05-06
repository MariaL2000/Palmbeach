"use client";
import { MATERIALS } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";

const Materials = () => {
  return (
    <section id="materials" className="bg-background py-20 md:py-28">
      <div className="container px-6 md:px-12 lg:px-20">
        <SectionHeader
          eyebrow="The Craft"
          title="Premium materials, only."
          subtitle="Pro-grade ingredients chosen to survive humidity, salt and the Florida sun."
          center={false}
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATERIALS.map((m, i) => (
            <article
              key={m.name}
              className="group relative overflow-hidden bg-card border border-border/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img
                  src={m.img} // aquí ya es string, no uses .src
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Texto */}
              <div className="p-6">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--buttons)]/80">
                  0{i + 1}
                </p>
                <h3
                  className="mt-1 text-xl md:text-2xl font-serif"
                  style={{ color: "var(--primary)" }}
                >
                  {m.name}
                </h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
