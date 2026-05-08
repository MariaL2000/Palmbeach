"use client";
import { HOME_MATERIALS } from "@/data/materials";
import SectionHeader from "../ui/SectionHeader";
import ActionButton from "../ui/ActionButton";
import { lora } from "@/app/fonts/fonts";

export default function MaterialsMarquee() {
  // Duplicamos items para el efecto infinito
  const items = [...HOME_MATERIALS, ...HOME_MATERIALS];

  return (
    <section
      id="materials-marquee"
      className="py-16 md:py-24 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-12">
        <SectionHeader
          eyebrow="The Craft"
          title="Premium Materials Only"
          subtitle="Pro-grade ingredients chosen to survive humidity, salt, and the intense Florida sun."
          center
        />
      </div>

      {/* CARRUSEL ANIMADO */}
      <div className="relative flex overflow-x-hidden mb-8">
        <div className="flex animate-marquee whitespace-nowrap gap-6 py-4">
          {items.map((m, i) => (
            <div
              key={`${m.name}-${i}`}
              className="group relative h-[250px] md:h-[320px] w-[300px] md:w-[400px] shrink-0 overflow-hidden shadow-xl transition-all duration-500 rounded-sm"
            >
              <img
                src={m.img}
                alt={m.name}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h4
                  className={`${lora.className} text-xl md:text-2xl tracking-tight transition-all duration-500`}
                  style={{
                    color: "white",
                    textShadow:
                      "0px 2px 10px rgba(0, 0, 0, 0.8), 0px 4px 20px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {m.name}
                </h4>
                <div className="w-0 group-hover:w-10 h-[2px] bg-[var(--buttons)] mt-2 transition-all duration-500 opacity-80"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LISTA DE NOMBRES CON PUNTOS */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 max-w-5xl mx-auto">
          {HOME_MATERIALS.map((m, i) => (
            <div key={m.name} className="flex items-center gap-4">
              <span
                className={`${lora.className} text-gray-500 text-sm md:text-base font-medium tracking-wide uppercase`}
              >
                {m.name}
              </span>
              {i !== HOME_MATERIALS.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--buttons)] opacity-60"></span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <ActionButton
          href="/materials"
          label="Explore all materials"
          variant="primary"
        />
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
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
