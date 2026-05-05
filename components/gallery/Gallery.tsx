"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";

const CATEGORIES = ["All", "Epoxy", "Polished Concrete", "Hardwood", "Marble"];

export default function Gallery({ images }: { images: any[] }) {
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-primary mb-4 italic">
              Our Masterpieces
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    filter === cat
                      ? "bg-primary text-white"
                      : "border-primary/20 text-primary hover:border-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative aspect-square rounded-2xl overflow-hidden group shadow-xl"
              >
                <img
                  src={img.url}
                  alt="Flooring"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-serif italic text-2xl">
                    {img.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
