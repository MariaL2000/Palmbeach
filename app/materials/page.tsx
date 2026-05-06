"use client";
import { MATERIALS } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import { Paintbrush, CheckCircle2, Star } from "lucide-react";
import ContactCard from "@/components/sections/ContactCard";

export default function MaterialsPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      {/* HEADER */}
      <section className="container mx-auto px-6 mb-20">
        <SectionHeader
          eyebrow="Our Inventory"
          title="Premium Materials & Professional Coating"
          subtitle="We don't just build; we protect. Discover the pro-grade materials and specialized painting services that define our excellence."
          center={false}
        />
      </section>

      {/* GRID DE MATERIALES */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 gap-16">
          {MATERIALS.map((material, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={material.name}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 shadow-2xl border border-gray-100`}
            >
              <div className="lg:w-3/5 h-[300px] md:h-[450px] overflow-hidden">
                <img
                  src={material.img}
                  alt={material.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-2/5 bg-[var(--primary)] p-8 md:p-12 flex flex-col justify-center relative">
                <span className="absolute top-4 right-8 text-white/10 text-7xl font-black">
                  0{i + 1}
                </span>
                <h3
                  className={`${libreBaskerville.className} text-white text-3xl mb-6`}
                >
                  {material.name}
                </h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  {material.desc}
                </p>
                <ul className="space-y-3">
                  {["Florida Sun Resistance", "Eco-Friendly Pro Grade"].map(
                    (feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-3 text-sm text-[var(--buttons)] font-bold uppercase tracking-widest"
                      >
                        <CheckCircle2 size={16} /> {feat}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECCIÓN FINAL CON CONTACT CARD DIRECTA */}
      <section className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 text-[var(--buttons)] mb-4">
                <Paintbrush size={28} />
                <span className="uppercase tracking-[0.3em] font-bold text-sm">
                  Professional Coatings
                </span>
              </div>
              <h2
                className={`${lora.className} text-4xl md:text-5xl text-[var(--primary)] mb-6`}
              >
                Ready to transform your property?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our specialists are ready to guide you through our catalog of
                luxury finishes and protective painting services. Get a detailed
                quote for your project today.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Detailed on-site material assessment",
                  "UV-protection and moisture-lock guarantees",
                  "Qualified professional labor only",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 p-4 bg-white shadow-sm border-l-4 border-[var(--buttons)]"
                  >
                    <Star
                      size={18}
                      className="text-[var(--buttons)]"
                      fill="currentColor"
                    />
                    <span className="text-sm font-bold text-[var(--primary)] uppercase tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AQUÍ EN LUGAR DEL BOTÓN, LA TARJETA DIRECTA */}
            <div className="relative lg:-mt-20 z-10">
              <ContactCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
