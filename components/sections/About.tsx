"use client";
import { motion, Variants } from "framer-motion"; // Importamos Variants
import SectionHeader from "../ui/SectionHeader";
import ActionButton from "../ui/ActionButton";
import { lora } from "@/app/fonts/fonts";

const puzzleImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
];

// Tipado explícito para evitar el error de TS
const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 150 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      delay: i * 0.15, // Usamos custom props para el stagger
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
                Our passion for home transformation isn't just about aesthetics;
                it's a commitment to structural artistry. For over two years,
                MariaL2000 has led a vision where Full-Stack precision meets
                interior design. We believe that a floor is the soul of a room,
                and a remodel is a rebirth of your personal sanctuary.
              </p>
              <p>
                From the initial concept in our 3D Blender workshops to the
                final hand-polished finish, our team treats every grain of wood
                and every tile as a piece of a larger puzzle. We don't just
                build houses; we craft the backdrop for your life's most
                precious moments with professional-grade engineering.
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
                  className={`rounded-2xl overflow-hidden shadow-2xl ${
                    index === 0
                      ? "col-span-8 row-span-7"
                      : index === 1
                        ? "col-span-4 row-span-5"
                        : index === 2
                          ? "col-span-5 row-span-5"
                          : "col-span-7 row-span-4"
                  }`}
                >
                  <img
                    src={src}
                    className="w-full h-full object-cover"
                    alt="Elite Remodeling"
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
