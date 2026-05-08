"use client";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  img: string;
  title: string;
  subtitle?: string;
  backLink?: string;
  backText?: string;
}

export default function Hero({
  img,
  title,
  subtitle,
  backLink,
  backText,
}: HeroProps) {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden w-full">
      {/* Imagen de fondo */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Sólido (Sin gradientes) para máxima legibilidad */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {backLink && (
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-white/80 hover:text-[var(--buttons)] mb-8 transition-colors uppercase text-[10px] tracking-[0.3em] font-bold"
          >
            <ArrowLeft size={14} /> {backText || "Back"}
          </Link>
        )}

        <h1
          className={`${libreBaskerville.className} text-4xl md:text-7xl text-white font-bold mb-6 tracking-tight`}
        >
          {title}
        </h1>

        <div className="w-24 h-1 bg-[var(--buttons)] mx-auto mb-6" />

        {subtitle && (
          <p
            className={`${lora.className} text-[var(--buttons)] text-xl md:text-2xl italic max-w-2xl mx-auto`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
