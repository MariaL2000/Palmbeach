"use client";
import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} mb-16`}
    >
      {eyebrow && (
        <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary font-bold mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-6xl font-serif text-foreground leading-tight italic">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 bg-primary/20 ${center ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
