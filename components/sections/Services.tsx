"use client";
import { SERVICES_DETAILS } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import ActionButton from "../ui/ActionButton";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 80, clipPath: "inset(10% 0% 10% 0%)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 1.2, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Services() {
  const servicesArray = Object.values(SERVICES_DETAILS);

  return (
    <section
      id="services"
      className="bg-secondary/20 py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <SectionHeader
            eyebrow="Professional "
            title="Services"
            subtitle="Specialized installation and refinement. Quality craftsmanship where the client's vision meets our precision."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {servicesArray.map((s, i) => (
            <motion.article
              key={s.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="flex flex-col items-center text-center group bg-white border border-primary/10 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 relative rounded-sm"
            >
              <span className="absolute top-4 right-6 text-6xl font-black opacity-[0.04] pointer-events-none select-none z-0">
                0{i + 1}
              </span>

              <div className="w-full aspect-square relative overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="p-8 flex flex-col items-center relative z-10 w-full">
                <h3
                  className={`${libreBaskerville.className} text-xl md:text-2xl font-bold flex flex-col items-center gap-2`}
                  style={{ color: "var(--primary)" }}
                >
                  {s.title}
                </h3>

                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--buttons)] font-bold mt-2">
                  • Client-Selected Materials
                </span>

                <p
                  className={`${lora.className} mt-4 text-sm text-gray-600 leading-relaxed min-h-[60px]`}
                >
                  {s.desc}
                </p>

                <div className="mt-8 flex flex-col gap-3 w-full items-center">
                  <ActionButton
                    href={`/services/${s.slug}`}
                    label="View Details"
                    variant="primary"
                    className="!px-8 !py-3 !text-[10px] w-full"
                  />
                  {/* Botón "See Materials" ahora presente en todas las cards */}
                  <ActionButton
                    href="/materials"
                    label="See Materials"
                    variant="secondary"
                    className="!px-8 !py-3 !text-[10px] w-full"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--buttons)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
