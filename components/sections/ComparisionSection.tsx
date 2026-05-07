"use client";
import SectionHeader from "../ui/SectionHeader";
import BeforeAfter from "../ui/BeforeAfter";
import { motion } from "framer-motion";
import { lora } from "@/app/fonts/fonts";

export default function ComparisonSection() {
  const projects = [
    {
      before: "/portfoliof/before2.jpg",
      after: "/portfoliof/after2.jpg",
      title: "Warm Timber Fusion",
      steps: [
        "Advanced vapor barrier against coastal humidity.",
        "Hand-applied textures for organic wood warmth.",
        "Satin-finish topcoat with anti-slip safety.",
      ],
    },
    {
      before: "/portfoliof/before1.jpg",
      after: "/portfoliof/after1.jpg",
      title: "Metallic Marble Finish",
      steps: [
        "Industrial diamond grinding for maximum bonding.",
        "Artisan metallic layering for deep marble veining.",
        "High-gloss protective seal for mirror-like durability.",
      ],
    },
  ];

  return (
    <section
      className="py-12 md:py-20 w-full relative"
      style={{
        // Gradiente radial elegante que se funde a negro en los bordes
        background:
          "radial-gradient(circle at center, var(--primary) 0%, #050a14 100%)",
      }}
    >
      {/* Overlay para suavizar aún más los bordes superior e inferior */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <div className="w-full px-4 md:px-10 relative z-10">
        <div className="mb-4 md:mb-8 flex justify-center">
          <SectionHeader
            eyebrow="The Transformation"
            title="Impressive Results"
            subtitle="Architectural-grade floor restorations."
            center={true}
            titleColor="var(--buttons)"
          />
        </div>

        <div className="flex flex-col gap-16 max-w-[1500px] mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <div className="mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <BeforeAfter before={project.before} after={project.after} />
              </div>

              {/* Información Refinada */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5 pt-8">
                <h3
                  className={`${lora.className} md:col-span-5 text-[var(--buttons)] text-2xl md:text-3xl tracking-tight leading-none`}
                >
                  {project.title}
                </h3>

                <div className="md:col-span-7 flex flex-col gap-5">
                  {project.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      {/* Punto sutil con efecto de brillo al hacer hover */}
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--buttons)] shrink-0 shadow-[0_0_8px_rgba(185,146,74,0.4)]" />
                      <p className="text-white/70 text-sm md:text-base leading-relaxed font-light tracking-wide">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Estilos inyectados para corregir el SectionHeader específicamente en este componente */}
      <style jsx global>{`
        #materials-marquee .section-header-eyebrow::after,
        section:has(.section-header-eyebrow) .section-header-eyebrow::after {
          width: 30px !important; /* Ajusta el ancho de la rayita aquí */
          height: 1px !important;
        }
      `}</style>
    </section>
  );
}
