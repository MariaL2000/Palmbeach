"use client";
import { MATERIALS } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import ActionButton from "../ui/ActionButton";
import { lora } from "@/app/fonts/fonts";

export default function MaterialsMarquee() {
  // Duplicamos los items para que el scroll infinito sea fluido
  const items = [...MATERIALS, ...MATERIALS];

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

      {/* Contenedor del Marquee */}
      <div className="relative flex overflow-x-hidden mb-12">
        <div className="flex animate-marquee whitespace-nowrap gap-6 py-4">
          {items.map((m, i) => (
            <div
              key={`${m.name}-${i}`}
              className="group relative h-[250px] md:h-[320px] w-[300px] md:w-[400px] shrink-0 overflow-hidden shadow-xl transition-all duration-500"
            >
              <img
                src={m.img}
                alt={m.name}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay con nombre del material */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[var(--buttons)] text-[10px] tracking-[0.3em] uppercase font-bold mb-1">
                  Grade A+
                </span>
                <h4
                  className={`${lora.className} text-white text-xl md:text-2xl`}
                >
                  {m.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón de acción centrado */}
      <div className="flex justify-center mt-4">
        <ActionButton
          href="/materials"
          label="Explore materials"
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
          animation: marquee 35s linear infinite;
        }
        /* Pausar al pasar el mouse para que el usuario pueda ver los materiales */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
