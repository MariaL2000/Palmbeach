"use client";

import { SERVICES_DETAILS } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Hero from "@/components/ui/Hero";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import ActionButton from "@/center/../components/ui/ActionButton"; // o tu ruta correcta de ActionButton
import { ShieldCheck, Wrench } from "lucide-react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 80, clipPath: "inset(10% 0% 10% 0%)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 1.2, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function ServicesPage() {
  const servicesArray = Object.values(SERVICES_DETAILS);

  return (
    <main className="min-h-screen bg-white text-gray-800 pb-24 overflow-hidden">
      {/* HERO IDÉNTICO AL DE [slug] */}
      <Hero
        img="/footer.jpg"
        title="Professional Flooring Services"
        subtitle="Specialized installation and refinement."
        backLink="/"
        backText="Back to Home"
      />

      <section
        id="services"
        className="bg-secondary/20 py-16 md:py-20 overflow-hidden border-y border-gray-100"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <SectionHeader
              eyebrow="Our Expertise"
              title="Explore Our Core Services"
              subtitle="Discover specialized techniques tailored to bring durability, resilience, and luxury design to your floors."
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

      <section className="container mx-auto px-6 mt-20 max-w-4xl bg-gray-50 p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-[var(--buttons)]/10 rounded-2xl text-[var(--buttons)] shrink-0">
            <Wrench size={36} />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h2
              className={`${libreBaskerville.className} text-xl font-bold text-[var(--primary)]`}
            >
              Custom Projects & Tailored Specifications
            </h2>
            <p
              className={`${lora.className} text-sm text-gray-600 leading-relaxed`}
            >
              Every architectural environment presents unique challenges. If
              your commercial or residential space requires custom coating
              formulations, specialized repairs, or consultation on exact
              material behaviors, our technical specialists in Florida are ready
              to assist you.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-wider">
            <ShieldCheck size={16} className="text-[var(--buttons)]" />{" "}
            Commercial & Residential Licensed Standards
          </div>
          <ActionButton
            href="/contact"
            label="Request Consultation"
            variant="primary"
            className="!px-6 !py-3 !text-xs"
          />
        </div>
      </section>
    </main>
  );
}
