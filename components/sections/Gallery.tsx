"use client";
import { useEffect, useState } from "react";
import { getAdminProjects } from "@/actions/gallery-actions";
import SectionHeader from "../ui/SectionHeader";
import ActionButton from "../ui/ActionButton";
import GalleryCard from "../ui/Gallerycard";

export default function GallerySection() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // La acción ahora devuelve directamente el array de la DB
    getAdminProjects().then((res) => {
      // Tomamos solo las primeras 6 para la Home
      setImages(res?.slice(0, 6) || []);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Portfolio" title="Gallery" center />

        {loading ? (
          <div className="flex justify-center mt-20">
            <div className="animate-pulse text-gray-300 text-xs uppercase tracking-widest font-bold">
              Loading Portfolio...
            </div>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.length > 0 ? (
              images.map((img, i) => (
                <GalleryCard
                  key={img.id}
                  url={img.url}
                  title={img.title}
                  category={img.category}
                  index={i}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-400 italic">
                No images found in the gallery.
              </p>
            )}
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <ActionButton
            href="/gallery"
            label="View Full Gallery"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
