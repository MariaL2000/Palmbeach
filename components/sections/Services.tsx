"use client";
import { SERVICES } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import ActionButton from "../ui/ActionButton"; // Restauramos tu botón original

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="bg-secondary/20 py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <SectionHeader
            eyebrow="ProWork"
            title="Services"
            subtitle="Precision flooring systems designed to withstand the Florida elements with unmatched style."
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8"
        >
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center group bg-white border border-primary/10 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 relative"
            >
              {/* Contenedor de Imagen */}
              <div className="w-full aspect-square relative overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Contenido de texto centrado responsivamente */}
              <div className="p-8 flex flex-col items-center relative z-10">
                <h3
                  className={`${libreBaskerville.className} text-2xl font-bold flex flex-col items-center gap-2`}
                  style={{ color: "var(--primary)" }}
                >
                  <span className="text-4xl opacity-10 font-serif italic leading-none">
                    0{i + 1}
                  </span>
                  {s.title}
                </h3>

                <p
                  className={`${lora.className} mt-4 text-sm text-gray-600 leading-relaxed max-w-[280px] md:max-w-none`}
                >
                  {s.desc}
                </p>

                <div className="mt-8">
                  <ActionButton
                    href={`/services/${s.slug}`}
                    label="Learn More"
                    variant="primary"
                    className="!px-8 !py-3 !text-[11px] !font-black !uppercase !tracking-widest"
                  />
                </div>
              </div>

              {/* Borde inferior decorativo */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--buttons)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
