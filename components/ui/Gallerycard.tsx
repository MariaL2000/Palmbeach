"use client";
import { Play, Layers } from "lucide-react";
import { lora } from "@/app/fonts/fonts";

interface GalleryCardProps {
  url: string;
  title?: string | null;
  category?: string;
  index: number;
}

export default function GalleryCard({
  url,
  title,
  category,
  index,
}: GalleryCardProps) {
  return (
    <div className="relative group aspect-[4/3] overflow-hidden border border-gray-100 shadow-md bg-gray-50">
      <img
        src={url}
        alt={title || "Gallery Image"}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Iconos decorativos basados en el índice */}
      <div className="absolute top-4 right-4 text-white opacity-90 drop-shadow-lg">
        {index % 2 === 0 ? (
          <Layers size={20} />
        ) : (
          <Play size={20} fill="white" />
        )}
      </div>

      {/* Overlay informativo */}
      <div className="absolute inset-0 bg-[var(--primary)]/90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-[var(--buttons)] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
          {category || "Premium"}
        </p>
        <h4 className={`${lora.className} text-white text-xl text-center px-4`}>
          {title || "Elite Transformation"}
        </h4>
        <div className="mt-4 w-8 h-[2px] bg-[var(--buttons)]" />
      </div>
    </div>
  );
}
