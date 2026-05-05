"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
}: Props) {
  const directions = {
    left: { x: -70, y: 0 },
    right: { x: 70, y: 0 },
    up: { x: 0, y: 40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
