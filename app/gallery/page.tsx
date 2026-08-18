import { getPaginatedProjects } from "@/actions/gallery-actions";
import SectionHeader from "@/components/ui/SectionHeader";
import GalleryCard from "@/components/ui/Gallerycard";
import Hero from "@/components/ui/Hero";
import { Pagination } from "@/components/pagination/Pagination";
import type { Metadata } from "next";

interface GalleryPageProps {
  searchParams: Promise<{ page?: string }>;
}

// 1. Generar metadatos dinámicos para SEO según la página actual
export async function generateMetadata({
  searchParams,
}: GalleryPageProps): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const page = resolvedParams?.page ?? "1";

  const title =
    page === "1"
      ? "Gallery & Portfolio | Luxury Flooring Projects"
      : `Gallery & Portfolio - Page ${page} | Medra ProWorks`;

  const description =
    "Explore our elite architectural floor transformations, luxury tile installations, and epoxy coatings across Palm Coast and Jacksonville, Florida.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.medraproworks.com/gallery${page === "1" ? "" : `?page=${page}`}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.medraproworks.com/gallery${page === "1" ? "" : `?page=${page}`}`,
    },
  };
}

export default async function FullGalleryPage({
  searchParams,
}: GalleryPageProps) {
  const resolvedParams = await searchParams;
  const pageString = resolvedParams?.page ?? "1";
  const currentPage = isNaN(Number(pageString)) ? 1 : Number(pageString);
  const ITEMS_PER_PAGE = 16;

  const { images, totalPages } = await getPaginatedProjects(
    currentPage,
    ITEMS_PER_PAGE,
  );

  const heroImageUrl =
    images.length > 0
      ? images[0].url
      : "https://images.unsplash.com/photo-1517646288021-229e39b4334c?q=80&w=2070&auto=format&fit=crop";

  return (
    <main className="pb-20 bg-white min-h-screen">
      <Hero
        img={heroImageUrl}
        title="Gallery & Portfolio"
        subtitle="Exploring the fine art of architectural floor transformations"
        backLink="/"
        backText="Back to Home"
      />

      <div className="container mx-auto px-6 py-24">
        <SectionHeader title="Our work" center />

        {images.length === 0 ? (
          <div className="flex justify-center mt-20">
            <p className="text-gray-400 uppercase tracking-widest text-xs">
              No projects available.
            </p>
          </div>
        ) : (
          <>
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

            <div className="mt-12">
              <Pagination totalPages={totalPages} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
