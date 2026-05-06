"use client";
import { useEffect, useState } from "react";
import { getActiveProjects } from "@/actions/gallery-actions";
import SectionHeader from "../ui/SectionHeader";
import ActionButton from "../ui/ActionButton";
import GalleryCard from "../ui/Gallerycard";

export default function GallerySection() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    getActiveProjects().then((res) => {
      // Tomamos solo las primeras 6 para la Home
      setImages(res.data ? res.data.slice(0, 6) : []);
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Portfolio" title="Gallery" center />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
