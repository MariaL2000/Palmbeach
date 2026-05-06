"use client";
import { useEffect, useState } from "react";
import { getActiveProjects } from "@/actions/gallery-actions";
import SectionHeader from "@/components/ui/SectionHeader";
import GalleryCard from "@/components/ui/Gallerycard";

export default function FullGalleryPage() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    getActiveProjects().then((res) => {
      setImages(res.data || []);
    });
  }, []);

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Portfolio" title="Full Gallery" center />

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
      </div>
    </main>
  );
}
