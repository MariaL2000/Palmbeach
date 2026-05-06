"use client";
import { libreBaskerville } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  titleColor?: string; // Prop para personalizar el color
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  titleColor = "var(--primary)", // Color por defecto
}: Props) {
  return (
    <div
      className={`${center ? "text-center max-w-4xl mx-auto" : "max-w-2xl"} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Se activa siempre al scrollear
          className={`${libreBaskerville.className} text-[10px] md:text-xs tracking-[0.4em] uppercase font-black mb-4`}
          style={{ color: "var(--buttons)" }}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className={`${libreBaskerville.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] font-bold`}
        style={{ color: titleColor }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="mt-6 text-base md:text-xl text-gray-600 leading-relaxed italic"
        >
          {subtitle}
        </motion.p>
      )}

      <div
        className={`mt-8 h-1 w-20 transition-all duration-700`}
        style={{
          backgroundColor: "var(--buttons)",
          margin: center ? "0 auto" : "0",
        }}
      />
    </div>
  );
}
