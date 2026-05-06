"use client";
import { SERVICES } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import { motion, Variants } from "framer-motion"; // Importamos Variants
import Link from "next/link";
import { lora, libreBaskerville } from "@/app/fonts/fonts";

// Tipamos explícitamente como Variants para evitar el error de asignación
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      // Usamos el casting "as any" o simplemente el tipado de Variants lo resolverá
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="bg-secondary/20 py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="ProWork"
          title="Services"
          subtitle="Precision flooring systems designed to withstand the Florida elements with unmatched style."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              variants={itemVariants}
              className="group bg-white border border-primary/10 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 relative"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="p-8 relative">
                <h3
                  className={`${libreBaskerville.className} text-2xl font-bold flex items-center gap-4`}
                  style={{ color: "var(--primary)" }}
                >
                  <span className="text-4xl opacity-10 font-serif italic">
                    0{i + 1}
                  </span>
                  {s.title}
                </h3>
                <p
                  className={`${lora.className} mt-4 text-sm text-gray-600 leading-relaxed`}
                >
                  {s.desc}
                </p>
                <Link
                  href={`/services/${s.slug}`}
                  className={`${lora.className} inline-block mt-8 px-6 py-2.5 rounded-full font-bold transition-all hover:bg-[var(--primary)] hover:text-white border border-[var(--buttons)]`}
                  style={{
                    backgroundColor: "var(--buttons)",
                    color: "var(--primary)",
                  }}
                >
                  Learn More
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--buttons)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
