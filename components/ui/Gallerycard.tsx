"use client";
import { lora } from "@/app/fonts/fonts";

interface GalleryCardProps {
  url: string;
  title?: string | null;
  category?: string;
  index: number;
}

export default function GalleryCard({ url, title, index }: GalleryCardProps) {
  return (
    <div className="relative group aspect-[4/3] overflow-hidden border border-gray-200 shadow-sm bg-gray-100 rounded-sm">
      {/* Imagen con efecto Zoom exclusivo */}
      <img
        src={url}
        alt={title || `Gallery image ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        loading="lazy"
      />

      {/* Sutil gradiente inferior para dar profundidad (opcional, pero mejora la visualización) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
}
