"use client";
import { motion, Variants } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import ActionButton from "../ui/ActionButton";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import Image from "next/image"; // Importamos Image para optimizar las locales
import { puzzleImages } from "@/data/site";

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
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <SectionHeader title="About us" center={false} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className={`${lora.className} space-y-6 text-gray-700 text-lg leading-relaxed`}
            >
              <p>
                Established two years ago in the heart of South Florida, our
                journey began with a clear mission: to redefine the standards of
                architectural surfaces. We have dedicated every project to
                mastering the balance between industrial-grade durability and
                high-end aesthetic design.
              </p>

              <div className="py-4">
                <h4
                  className={`${libreBaskerville.className} text-[var(--primary)] font-bold text-xl mb-2`}
                >
                  Our Commitment
                </h4>
                <p className="italic border-l-4 border-[var(--buttons)] pl-4 text-gray-600">
                  &quot;To deliver uncompromising quality through precision
                  engineering and artisanal dedication in every square foot we
                  coat.&quot;
                </p>
              </div>

              <p>
                Our objective is simple yet ambitious: to provide Florida
                homeowners and businesses with flooring systems that outlast the
                elements. From advanced polyaspartics to bespoke metallic art,
                we treat your space as our own canvas, ensuring a seamless
                experience from the first consultation to the final
                hand-polished finish.
              </p>
            </motion.div>

            <div className="mt-12 flex flex-wrap gap-6">
              <ActionButton
                href="tel:5612857825"
                label="Get a Quote"
                variant="primary"
              />
              <ActionButton
                href="/gallery"
                label="View Portfolio"
                variant="secondary"
              />
            </div>
          </div>

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
                    alt="Elite Flooring Project"
                    fill
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
