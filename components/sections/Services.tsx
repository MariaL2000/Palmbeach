"use client";
import { SERVICES } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-secondary/20 py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Expertise"
          title="Signature Services"
          subtitle="Precision flooring systems designed to withstand the Florida elements with unmatched style."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative bg-white border border-primary/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 p-8 text-white">
                  <span className="text-[10px] tracking-widest uppercase opacity-70">
                    Service 0{i + 1}
                  </span>
                  <h3 className="text-3xl font-serif mt-2 flex items-center gap-2">
                    {s.title}
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </h3>
                  <p className="mt-4 text-sm text-white/80 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
