import { getPaginatedProjects } from "@/actions/gallery-actions";
import SectionHeader from "@/components/ui/SectionHeader";
import GalleryCard from "@/components/ui/Gallerycard";
import Hero from "@/components/ui/Hero";
import { Pagination } from "@/components/pagination/Pagination";

interface GalleryPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function FullGalleryPage({
  searchParams,
}: GalleryPageProps) {
  // En Next.js 15, searchParams es una promesa
  const resolvedParams = await searchParams;
  const pageString = resolvedParams?.page ?? "1";
  const currentPage = isNaN(Number(pageString)) ? 1 : Number(pageString);
  const ITEMS_PER_PAGE = 16;

  // Obtenemos los proyectos y el total de páginas desde la base de datos
  const { images, totalPages } = await getPaginatedProjects(
    currentPage,
    ITEMS_PER_PAGE,
  );

  // Seleccionamos la imagen de fondo para el Hero
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

            {/* Componente de Paginación importado */}
            <div className="mt-12">
              <Pagination totalPages={totalPages} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
