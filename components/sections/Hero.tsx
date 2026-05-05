"use client";
import React, { useEffect, useState, useCallback } from "react";
import { ChevronRight, ChevronLeft, Phone, MapPin } from "lucide-react";

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
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A202C] font-sans antialiased">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[100svh] w-full overflow-hidden bg-gray-900 group">
        {/* Lógica de Transición de tu HomeSlider */}
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              index === current
                ? "opacity-100 scale-100 visible"
                : "opacity-0 scale-105 invisible"
            }`}
          >
            <img
              src={img}
              alt="Elite Luxury Surfaces"
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
            {/* Overlay para contraste de texto */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/70 via-transparent to-black/60" />
          </div>
        ))}

        {/* Contenido Central - pt-40 para espacio de Navbar ancha */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-40">
          <div className="space-y-6 max-w-4xl">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.15em] uppercase leading-tight drop-shadow-lg">
                Elite Luxury <br />
                <span className="font-serif italic text-[#C5A059]">Floors</span>
              </h1>

              <div className="flex flex-col items-center gap-2">
                <div className="h-px w-16 bg-[#C5A059] mb-2" />
                <div className="flex items-center justify-center gap-2 text-[#F5F5F0] tracking-[0.4em] uppercase text-[10px] sm:text-[12px]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  Palm Beach, Fl
                </div>
              </div>
            </div>

            <p className="text-white/80 text-sm sm:text-base font-light max-w-lg mx-auto tracking-widest drop-shadow-sm">
              Superior resinous surfaces and architectural concrete for South
              Florida's elite estates.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center pt-8">
              <button className="w-full sm:w-auto bg-[#C5A059] text-[#0A192F] px-10 py-4 rounded-sm font-bold transition-all hover:bg-[#D4AF37] tracking-widest text-[10px] uppercase">
                Get Free Quote
              </button>
              <button className="w-full sm:w-auto border border-white/30 text-white px-10 py-4 rounded-sm font-semibold hover:bg-white hover:text-[#0A192F] transition-all text-[10px] uppercase tracking-widest">
                Explore Work
              </button>
            </div>
          </div>
        </div>

        {/* Controles de Flecha (Inspirado en tu código) */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 hidden md:flex items-center justify-center bg-white/10 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#C5A059] hover:text-[#0A192F] z-20"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 hidden md:flex items-center justify-center bg-white/10 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#C5A059] hover:text-[#0A192F] z-20"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicadores de barra (Tu estilo de indicadores) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="py-4 focus:outline-none"
            >
              <div
                className={`h-[2px] transition-all duration-500 ${
                  i === current ? "w-12 bg-[#C5A059]" : "w-6 bg-white/30"
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* --- SECCIÓN DE SERVICIOS --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[#0A192F] text-3xl md:text-5xl font-light tracking-tight mb-4 uppercase">
              Our Craftsmanship
            </h2>
            <p className="text-slate-500 font-light italic">
              "Excellence is in the details."
            </p>
          </div>
          <div className="text-[#C5A059] font-bold tracking-[0.3em] text-[11px] uppercase mb-4">
            Established 2000
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Metallic Resin",
              img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80",
            },
            {
              title: "Architectural Concrete",
              img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
            },
            {
              title: "Luxury Garage Systems",
              img: "https://images.unsplash.com/photo-1523394664535-72CC5394200d?auto=format&fit=crop&q=80",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] overflow-hidden bg-slate-100 rounded-sm shadow-md"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] mb-1 font-bold">
                  Service
                </p>
                <h3 className="text-xl font-light tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0A192F] text-[#F5F5F0] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <p className="text-xl tracking-[0.2em] uppercase font-light">
              Elite Luxury{" "}
              <span className="text-[#C5A059] italic font-serif">Floors</span>
            </p>
            <p className="text-[10px] text-white/40 mt-2 tracking-[0.4em] uppercase">
              Palm Beach • Miami • Naples
            </p>
          </div>
          <a
            href="tel:5612857825"
            className="flex items-center gap-4 border border-[#C5A059]/30 px-8 py-4 rounded-full hover:bg-[#C5A059] hover:text-[#0A192F] transition-all duration-500"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span className="tracking-widest font-bold text-sm">
              (561) 285-7825
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
