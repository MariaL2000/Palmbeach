"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import ContactCard from "./ContactCard";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=100",
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=100",
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=100",
];

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
      <section className="relative h-[100svh] w-full overflow-hidden bg-gray-900 group">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{ willChange: "opacity" }}
          >
            <img
              src={img}
              alt="Elite Luxury Surfaces"
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/70 via-transparent to-black/60" />
          </div>
        ))}

        {/* Contenido Central */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-32">
          <Image
            src="/logo.png"
            alt="Medra ProWorks Logo"
            width={220}
            height={220}
            className="w-50 md:w-58 h-auto object-contain mx-auto drop-shadow-lg"
            priority
          />

          <h1 className="text-white text-xl md:text-4xl font-semibold tracking-[0.1em] uppercase leading-tight drop-shadow-lg mt-4">
            Medra <br />
            <span className="italic text-[var(--buttons)]">ProWorks</span>
          </h1>

          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="h-px w-12 bg-[var(--buttons)] mb-2" />
            <div className="flex items-center justify-center gap-2 text-white tracking-[0.3em] uppercase text-sm md:text-base">
              <MapPin className="w-4 h-4 text-[var(--buttons)]" />
              Palm Beach, Fl
            </div>
          </div>
        </div>

        {/* Flechas */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 hidden md:flex items-center justify-center bg-white/10 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--buttons)] hover:text-[var(--primary)] z-20"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 hidden md:flex items-center justify-center bg-white/10 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--buttons)] hover:text-[var(--primary)] z-20"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="py-2 focus:outline-none"
            >
              <div
                className={`h-[2px] transition-all duration-500 ease-in-out ${
                  i === current ? "w-12 bg-[var(--buttons)]" : "w-6 bg-white/30"
                }`}
              />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
