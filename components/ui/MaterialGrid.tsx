"use client";
import { motion } from "framer-motion";
import { libreBaskerville, lora } from "@/app/fonts/fonts";
import { MATERIALS_GRID } from "@/data/materials";

export default function MaterialGrid() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-[var(--buttons)] uppercase tracking-[0.4em] text-[10px] font-black">
            The Medra Catalog
          </span>
          <h2
            className={`${libreBaskerville.className} text-4xl font-bold text-[var(--primary)] mt-4`}
          >
            Surface & Material Mastery
          </h2>
          <p
            className={`${lora.className} text-gray-600 mt-4 text-lg italic leading-relaxed`}
          >
            We specialize in the technical installation of diverse surfaces.
            Whether you are looking for industrial concrete or classic hardwood,
            our craftsmanship ensures a perfect finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MATERIALS_GRID.map((mat, i) => (
            <motion.div
              key={mat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-sm shadow-md bg-[var(--primary)]"
            >
              <img
                src={mat.img}
                alt={mat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              {/* Overlay gradiente para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-transparent to-black/20" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3
                  className={`${libreBaskerville.className} text-xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500`}
                >
                  {mat.title}
                </h3>
                <p
                  className={`${lora.className} text-white/0 group-hover:text-white/80 text-[13px] leading-snug italic transition-all duration-500 line-clamp-3 overflow-hidden`}
                >
                  {mat.desc}
                </p>
                <div className="w-0 group-hover:w-full h-[1px] bg-[var(--buttons)] mt-4 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
