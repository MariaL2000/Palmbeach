"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import { HERO_IMAGES } from "@/data/site";

export default function EliteLuxuryFloors() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-[var(--primary)] text-white font-[var(--font-primary)] antialiased">
      {/* --- HERO SECTION --- */}
      {/* Usamos 100vh para asegurar que cubra toda la pantalla en móviles sin dejar fondo azul */}
      <section className="relative h-screen w-full overflow-hidden bg-gray-900 group">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt={`Luxury Floor Design ${index + 1}`}
              fill
              className="object-cover select-none"
              priority={index === 0} // Prioriza la carga de la primera imagen
              quality={90}
              sizes="100vw"
              draggable={false}
            />
            {/* Overlay mejorado para legibilidad */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/70 z-10" />
          </div>
        ))}

        {/* Contenido Central - Elevado en z-index para estar sobre las imágenes */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
          <Image
            src="/logo.png"
            alt="Medra ProWorks Logo"
            width={220}
            height={220}
            className="w-40 md:w-58 h-auto object-contain mx-auto drop-shadow-2xl"
            priority
          />

          <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-[0.1em] uppercase leading-tight drop-shadow-lg mt-6">
            Medra <br />
            <span className="italic text-[var(--buttons)]">ProWorks</span>
          </h1>

          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="h-px w-12 bg-[var(--buttons)] mb-2" />
            <div className="flex items-center justify-center gap-2 text-white tracking-[0.3em] uppercase text-xs md:text-base font-medium">
              <MapPin className="w-4 h-4 text-[var(--buttons)]" />
              Palm Beach, Fl
            </div>
          </div>
        </div>

        {/* Flechas de Navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 hidden md:flex items-center justify-center bg-black/20 backdrop-blur-sm text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--buttons)] hover:text-[var(--primary)] z-30"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 hidden md:flex items-center justify-center bg-black/20 backdrop-blur-sm text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--buttons)] hover:text-[var(--primary)] z-30"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicadores (Barras inferiores) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="py-4 focus:outline-none"
            >
              <div
                className={`h-[3px] transition-all duration-700 ease-in-out ${
                  i === current ? "w-16 bg-[var(--buttons)]" : "w-8 bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
