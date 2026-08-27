"use client";

import { motion, Variants } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import ActionButton from "../ui/ActionButton";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import Image from "next/image";
import { puzzleImages } from "@/data/site";
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from "lucide-react";

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 150 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      delay: i * 0.15,
    },
  }),
};

export default function AboutUs() {
  return (
    <section id="about" className="py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Columna de Texto Completa y Enriquecida */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <SectionHeader title="About Our Craft" center={false} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className={`${lora.className} space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed`}
            >
              <p>
                Established years ago in the vibrant heart of South Florida,{" "}
                <strong className="text-[var(--primary)] font-bold">
                  Medra ProWorks
                </strong>{" "}
                was built on a relentless pursuit of perfection. Our journey
                began with a definitive mission: to completely redefine industry
                standards for architectural surfaces, commercial flooring, and
                custom resin finishes.
              </p>

              <div className="py-2">
                <h4
                  className={`${libreBaskerville.className} text-[var(--primary)] font-bold text-xl mb-2 flex items-center gap-2`}
                >
                  <Sparkles size={20} className="text-[var(--buttons)]" /> Our
                  Core Commitment
                </h4>
                <p className="italic border-l-4 border-[var(--buttons)] pl-4 text-gray-600 bg-gray-50 py-3 pr-3 rounded-r-xl">
                  &quot;To deliver uncompromising quality through advanced
                  precision engineering and artisanal dedication in every single
                  square foot we coat.&quot;
                </p>
              </div>

              <p>
                Our objective is both simple and ambitious: to provide Florida
                homeowners, contractors, and corporate facilities with
                high-performance flooring systems that effortlessly withstand
                heavy traffic, humidity, and time. From industrial-grade
                polyaspartics to luxury metallic epoxies and natural stone
                restoration, we treat your floors as an architectural canvas.
              </p>

              {/* Lista adicional de características clave */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3">
                  <ShieldCheck
                    className="text-[var(--buttons)] shrink-0 mt-1"
                    size={22}
                  />
                  <div>
                    <strong className="block text-sm text-[var(--primary)] font-bold">
                      Fully Certified
                    </strong>
                    <span className="text-xs text-gray-600">
                      Licensed and insured professionals across Florida.
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3">
                  <Award
                    className="text-[var(--buttons)] shrink-0 mt-1"
                    size={22}
                  />
                  <div>
                    <strong className="block text-sm text-[var(--primary)] font-bold">
                      Enduring Quality
                    </strong>
                    <span className="text-xs text-gray-600">
                      Top-tier raw materials built to outlast expectations.
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 pt-2">
                We manage your investment transparently from the initial on-site
                consultation to the final hand-polished protection layer,
                guaranteeing absolute satisfaction.
              </p>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-6">
              <ActionButton
                href="/contact"
                label="Get a Free Quote"
                variant="primary"
              />
              <ActionButton
                href="/gallery"
                label="View Portfolio"
                variant="secondary"
              />
            </div>
          </div>

          {/* Columna del Puzzle de Imágenes Reutilizado con Precarga */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[500px] md:h-[650px]">
              {puzzleImages.map((src, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className={`rounded-xl overflow-hidden shadow-2xl relative ${
                    index === 0
                      ? "col-span-8 row-span-7"
                      : index === 1
                        ? "col-span-4 row-span-5"
                        : index === 2
                          ? "col-span-5 row-span-5"
                          : "col-span-7 row-span-4"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Medra ProWorks Elite Flooring Project"
                    fill
                    priority={index === 0} // Precarga inteligente para la primera imagen principal del grid
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
