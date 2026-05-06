"use client";
import { SERVICES } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import { lora, libreBaskerville } from "@/app/fonts/fonts";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group bg-white border border-primary/10 overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 relative"
            >
              {/* Imagen cuadrada */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Card descriptiva */}
              <div className="p-6 relative">
                <h3
                  className={`${libreBaskerville.className} text-2xl font-bold flex items-center gap-3`}
                  style={{ color: "var(--primary)" }}
                >
                  <span className="text-3xl font-extrabold">{i + 1}</span>
                  {s.title}
                </h3>
                <p
                  className={`${libreBaskerville.className} mt-4 text-sm text-gray-700 leading-relaxed`}
                >
                  {s.desc} Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Praesent commodo, justo nec facilisis tincidunt, sapien
                  arcu fermentum magna, vitae luctus libero erat nec dui.
                </p>
                <Link
                  href={`/services/${s.slug}`}
                  className={`${lora.className} inline-block mt-6 px-5 py-2 rounded-md font-bold transition-all hover:scale-105`}
                  style={{
                    backgroundColor: "var(--buttons)",
                    color: "var(--primary)",
                  }}
                >
                  Learn More
                </Link>
              </div>

              {/* Franja inferior hover */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
