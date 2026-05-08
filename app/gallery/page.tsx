"use client";
import { useEffect, useState } from "react";
import { getAdminProjects } from "@/actions/gallery-actions";
import SectionHeader from "@/components/ui/SectionHeader";
import GalleryCard from "@/components/ui/Gallerycard";
import Hero from "@/components/ui/Hero";

export default function FullGalleryPage() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtenemos directamente lo que hay en la DB (Locales + Cloudinary)
    getAdminProjects().then((res) => {
      setImages(res || []);
      setLoading(false);
    });
  }, []);

  // Seleccionamos la imagen de fondo para el Hero
  // Usamos la primera imagen de la galería si existe, o una por defecto
  const heroImageUrl =
    images.length > 0
      ? images[0].url
      : "https://images.unsplash.com/photo-1517646288021-229e39b4334c?q=80&w=2070&auto=format&fit=crop";

  return (
    // ELIMINADO EL PT-32, ya que el Hero ocupa la parte superior
    <main className="pb-20 bg-white min-h-screen">
      {/* 
          HERO INTEGRADO RESPONSIVAMENTE
          Sin gradientes (usando el overlay sólido definido en el componente)
      */}
      <Hero
        img={heroImageUrl}
        title="Gallery & Portfolio"
        subtitle="Exploring the fine art of architectural floor transformations"
        backLink="/"
        backText="Back to Home"
      />

      <div className="container mx-auto px-6 py-24">
        <SectionHeader title="Our work" center />

        {loading ? (
          <div className="flex justify-center mt-20">
            <div className="animate-pulse text-gray-400 uppercase tracking-widest text-xs">
              Loading Gallery...
            </div>
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <GalleryCard
                key={img.id}
                url={img.url}
                title={img.title}
                category={img.category}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
