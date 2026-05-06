"use client";
import { libreBaskerville } from "@/app/fonts/fonts";
import ScrollReveal from "../ui/ScrollReveal";

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
    <div
      className={`${center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} mb-10`}
    >
      {eyebrow && (
        <ScrollReveal direction="up" delay={0.1}>
          <p
            className={`${libreBaskerville.className} text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary font-bold mb-4`}
          >
            {eyebrow}
          </p>
        </ScrollReveal>
      )}

      <ScrollReveal direction="up" delay={0.2}>
        <h2
          className={`${libreBaskerville.className} text-2xl sm:text-3xl md:text-4xl leading-tight`}
          style={{ color: "var(--primary)" }}
        >
          {title}
        </h2>
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal direction="up" delay={0.3}>
          <p
            className={`${libreBaskerville.className} mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}

      <ScrollReveal direction="up" delay={0.4}>
        <div
          className={`mt-6 h-1 w-20 bg-primary/20 ${center ? "mx-auto" : ""}`}
        />
      </ScrollReveal>
    </div>
  );
}
