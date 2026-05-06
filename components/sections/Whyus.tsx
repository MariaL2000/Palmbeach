"use client";
import { useEffect, useRef, useState } from "react";
import { WHY } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";

const WhyUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const progress = Math.min(1, Math.max(0, -rect.top / total));
        const idx = Math.min(WHY.length - 1, Math.floor(progress * WHY.length));
        setActive(idx);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="why"
      ref={containerRef}
      className="relative isolate"
      style={{ height: `${WHY.length * 100}vh` }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* Fondo dinámico con Unsplash */}
        <img
          src={
            [
              "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=100",
              "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=100",
              "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=100",
              "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=100",
              "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=100",
            ][active]
          }
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--buttons)]/60 to-black/80" />

        {/* Contenido sticky */}
        <div className="relative z-10 h-full container flex flex-col justify-center text-left px-6 md:px-12 lg:px-20 text-white">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Built on trust & craftsmanship"
            subtitle="Discover the values that set us apart, combining expertise, dedication, and design excellence."
            center={false}
          />

          {/* Textos animados */}
          <div className="mt-8 md:mt-12 relative h-40 md:h-48 max-w-2xl">
            {WHY.map((w, i) => {
              const isActive = i === active;
              const offset = (i - active) * 30;
              return (
                <article
                  key={w.title}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: `translateY(${isActive ? 0 : offset}px)`,
                  }}
                >
                  <h3
                    className="text-lg sm:text-xl md:text-2xl font-serif"
                    style={{ color: "var(--buttons)" }}
                  >
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 max-w-xl">
                    {w.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
