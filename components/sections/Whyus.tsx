"use client";
import { useEffect, useRef, useState } from "react";
import { WHY } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import { libreBaskerville } from "@/app/fonts/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, HardHat, Sparkles } from "lucide-react";

const BACKGROUNDS = [
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1400&q=80",
];

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

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(0.99, scrolled / scrollHeight));

      // Dividimos el progreso en 3 tramos para las 3 imágenes
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
      // Aumentamos a 450vh para que el scroll se sienta más largo/lento por cada sección
      style={{ height: "450vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={active}
              src={BACKGROUNDS[active]}
              // Transición más rápida (0.3s) y directa para optimizar la respuesta visual
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="absolute inset-0 h-full w-full object-cover"
              alt="Elite Floors"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 h-full container mx-auto px-6 flex flex-col pt-40 md:pt-52">
          <div className="mb-10">
            <SectionHeader
              title="Why Us"
              center={false}
              titleColor="var(--primary)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            {WHY.slice(0, 3).map((w, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  borderColor:
                    i === active ? "var(--buttons)" : "rgba(255,255,255,0)",
                  y: i === active ? -10 : 0,
                  backgroundColor:
                    i === active
                      ? "rgba(0, 51, 102, 0.95)"
                      : "rgba(0, 51, 102, 0.75)",
                }}
                className="p-8 backdrop-blur-md border-l-4 transition-all duration-300"
              >
                <div className={libreBaskerville.className}>
                  {icons[i]}
                  <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-3">
                    {w.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
