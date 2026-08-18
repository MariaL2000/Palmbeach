"use client";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import { CheckCircle2, Star } from "lucide-react";
import ContactCard from "@/components/sections/ContactCard";
import Hero from "@/components/ui/Hero";
import { HOME_MATERIALS, MATERIALS_GRID } from "@/data/materials";

function GalleryCard({
  url,
  title,
  index,
}: {
  url: string;
  title?: string | null;
  index: number;
}) {
  return (
    <div className="relative group aspect-[16/10] md:aspect-video overflow-hidden border border-gray-200 shadow-md bg-gray-100 rounded-sm w-full transition-shadow duration-500 hover:shadow-xl">
      <img
        src={url}
        alt={title || `Gallery image ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40 md:bg-black/20 md:group-hover:bg-black/50 transition-colors duration-500" />
      <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 z-10">
        <p
          className={`${lora.className} text-white text-base md:text-2xl font-bold italic md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle, center = true }: any) {
  return (
    <div
      className={`max-w-3xl ${center ? "text-center mx-auto" : "text-left"}`}
    >
      <span className="text-[var(--buttons)] uppercase tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-xs font-black mb-3 md:mb-4 block">
        {eyebrow}
      </span>
      <h2
        className={`${libreBaskerville.className} text-3xl md:text-5xl text-[var(--primary)] font-bold mb-5 md:mb-6 leading-tight`}
      >
        {title}
      </h2>
      <div
        className={`w-20 md:w-24 h-1 bg-[var(--buttons)] mb-6 md:mb-8 ${center ? "mx-auto" : ""}`}
      />
      <p
        className={`${lora.className} text-gray-600 text-base md:text-lg leading-relaxed`}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default function MaterialsClient() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden w-full">
      <Hero
        img={MATERIALS_GRID[2]?.img}
        title="Explore materials"
        subtitle="Architectural precision in every fiber and finish, choose your favorite and call us!"
        backLink="/"
        backText="Back to Home"
      />

      {/* SECTION 1: GALLERY */}
      <section className="py-24 bg-white w-full">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="The Portfolio"
            title="Installation Gallery"
            subtitle="Explore the raw textures and finished brilliance of our most requested flooring types."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-16 w-full">
            {HOME_MATERIALS.map((material, index) => (
              <div key={material.name} className="w-full">
                <GalleryCard
                  url={material.img}
                  title={material.name}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL GRID */}
      <section className="py-24 md:py-32 bg-gray-50/80 border-y border-gray-100 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="Technical Proficiency"
            title="Flooring Solutions"
            subtitle="Architectural grade standards for luxury residential and commercial projects."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16 md:mt-20 w-full">
            {MATERIALS_GRID.map((material, i) => (
              <div key={material.title} className="h-full w-full">
                <div className="flex flex-col h-full shadow-lg rounded-sm overflow-hidden border border-gray-200 bg-white group hover:shadow-2xl transition-shadow duration-500 w-full">
                  <div className="relative aspect-[16/10] overflow-hidden w-full">
                    <img
                      src={material.img}
                      alt={material.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  <div className="bg-[var(--primary)] p-6 md:p-8 flex flex-col grow relative w-full">
                    <span className="absolute top-4 right-6 text-white/5 text-6xl font-black select-none pointer-events-none">
                      0{i + 1}
                    </span>
                    <h3
                      className={`${libreBaskerville.className} text-white text-xl md:text-2xl mb-4`}
                    >
                      {material.title}
                    </h3>
                    <p
                      className={`${lora.className} text-white/70 text-sm leading-relaxed mb-6 italic grow`}
                    >
                      {material.desc}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-2.5 pt-5 border-t border-white/10 mt-auto">
                      <div className="flex items-center gap-2.5 text-[var(--buttons)]">
                        <CheckCircle2 size={15} />
                        <span className="text-[10px] uppercase tracking-widest font-black text-white/95">
                          Master Install
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 md:py-32 overflow-hidden w-full relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="w-full">
              <h2
                className={`${libreBaskerville.className} text-3xl md:text-6xl text-[var(--primary)] mb-6 font-bold`}
              >
                Ready to elevate your space?
              </h2>
              <div className="space-y-4">
                {[
                  "On-site technical assessment",
                  "Material selection guide",
                  "Master-class warranty",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 p-5 bg-gray-50 border-l-4 border-[var(--buttons)] hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <Star
                      size={18}
                      className="text-[var(--buttons)] transition-transform duration-300 group-hover:scale-110"
                      fill="currentColor"
                    />
                    <span className="text-[11px] font-black text-[var(--primary)] uppercase tracking-widest">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 w-full">
              <ContactCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
