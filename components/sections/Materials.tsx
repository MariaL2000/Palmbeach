"use client";
import { MATERIALS } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

export default function Materials() {
  return (
    <section id="materials" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          center={false}
          eyebrow="The Standard"
          title="Premium Materials"
          subtitle="We source only the finest resins and aggregates for a finish that looks like marble and lasts like stone."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {MATERIALS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner group">
                <img
                  src={m.img}
                  alt={m.name}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 border-[0.5px] border-black/5 rounded-2xl" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="h-px w-8 bg-primary/30" />
                  <span className="text-primary font-bold text-xs uppercase tracking-tighter">
                    Grade A+
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-foreground italic">
                  {m.name}
                </h3>
                <p className="mt-3 text-muted-foreground text-sm font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
