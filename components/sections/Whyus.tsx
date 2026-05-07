"use client";
import { useEffect, useRef, useState } from "react";
import { BACKGROUNDS, WHY } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import { libreBaskerville } from "@/app/fonts/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, HardHat, Sparkles } from "lucide-react";

const icons = [
  <ShieldCheck size={28} key="i1" className="mb-3 text-[var(--buttons)]" />,
  <HardHat size={28} key="i2" className="mb-3 text-[var(--buttons)]" />,
  <Sparkles size={28} key="i3" className="mb-3 text-[var(--buttons)]" />,
];

const WhyUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollHeight = el.offsetHeight - window.innerHeight;

      // Calculamos el progreso basado en el scroll
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(0.99, scrolled / scrollHeight));

      const newIdx = Math.floor(progress * 3);
      setActive((prev) => (prev !== newIdx ? newIdx : prev));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="why"
      ref={containerRef}
      className="relative isolate"
      style={{ height: "400vh" }} // Ajustado para un scroll más natural
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* Fondo con AnimatePresence */}
        <div className="absolute inset-0 bg-black -z-10">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={active}
              src={BACKGROUNDS[active]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 h-full w-full object-cover"
              alt="Elite Floors Background"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
          <div className="mb-10 mt-10 md:mt-0">
            <SectionHeader
              title="Why Us"
              center={false}
              titleColor="var(--primary)"
            />
          </div>

          {/* Grid Responsivo Optimizado */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl w-full">
            {WHY.slice(0, 3).map((w, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  borderColor:
                    i === active ? "var(--buttons)" : "rgba(255,255,255,0.1)",
                  y: i === active ? -10 : 0,
                  opacity: 1,
                  backgroundColor:
                    i === active
                      ? "rgba(10, 25, 47, 0.95)"
                      : "rgba(10, 25, 47, 0.7)",
                }}
                className={`p-6 md:p-8 backdrop-blur-md border-l-4 border-t md:border-t-0 transition-all duration-300 rounded-r-xl md:rounded-none ${
                  // En móviles, si no es la activa, la hacemos más pequeña para que quepan todas
                  i !== active ? "hidden md:block" : "block"
                }`}
              >
                <div className={libreBaskerville.className}>
                  {icons[i]}
                  <h3 className="text-white text-base md:text-lg font-bold uppercase tracking-widest mb-3">
                    {w.title}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                    {i === 0 &&
                      "Premium materials and rigorous standards for a lasting investment."}
                    {i === 1 &&
                      "Precise 3D modeling and engineering to execute your vision flawlessly."}
                    {i === 2 &&
                      "Luxury finishes that transform ordinary spaces into extraordinary homes."}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Indicador visual para móviles (opcional) */}
            <div className="flex gap-2 mt-4 md:hidden justify-center">
              {[0, 1, 2].map((dot) => (
                <div
                  key={dot}
                  className={`h-1 transition-all duration-300 ${dot === active ? "w-8 bg-[var(--buttons)]" : "w-2 bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
