"use client";
import React, { useState, useRef } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <div
      ref={containerRef}
      className="group relative w-full aspect-[16/8] md:aspect-[21/7] max-h-[450px] overflow-hidden rounded-sm select-none cursor-ew-resize border border-white/5 shadow-2xl bg-[#0a0a0a]"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      // Si el mouse se mueve y estamos arrastrando, actualizamos
      onMouseMove={(e) => {
        if (isDragging) handleMove(e.clientX);
      }}
      // Al soltar el clic o salir del área, dejamos de arrastrar
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      // Soporte para móviles
      onTouchStart={() => setIsDragging(true)}
      onTouchMove={(e) => {
        if (isDragging) handleMove(e.touches[0].clientX);
      }}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Imagen AFTER (Fondo) */}
      <img
        src={after}
        alt="After"
        // object-cover evita que la imagen se estire.
        // La recorta para llenar el espacio manteniendo la proporción.
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Imagen BEFORE (Capa superior) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={before}
          alt="Before"
          // IMPORTANTE: object-cover aquí también
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            // Eliminamos el ancho dinámico por JS y dejamos que el CSS lo maneje
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Divisor Visual */}
      <div
        className="absolute inset-y-0 z-10 w-[2px] bg-white/80 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* El círculo ahora es puramente visual y reacciona al estado de arrastre */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center gap-1 border border-black/10 transition-transform duration-200 ${
            isDragging ? "scale-110 bg-white" : "scale-100 bg-white/90"
          }`}
        >
          <div className="w-[1.5px] h-4 bg-[var(--primary)]/40 rounded-full" />
          <div className="w-[1.5px] h-4 bg-[var(--primary)]/40 rounded-full" />
        </div>
      </div>

      {/* Etiquetas Glassmorphism */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
        <span className="bg-black/30 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-sm border border-white/10">
          Before
        </span>
      </div>
      <div className="absolute bottom-6 right-6 z-20 pointer-events-none">
        <span className="bg-white/95 backdrop-blur-md text-[var(--primary)] text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-sm">
          After
        </span>
      </div>
    </div>
  );
};

export default BeforeAfter;
