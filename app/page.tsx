import HeroCarousel from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import GalleryMarquee from "@/components/sections/GalleryMarquee";
import Materials from "@/components/sections/Materials";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/navbar/Navbar";

export default async function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroCarousel />
      <Services />
      <GalleryMarquee />
      <Materials />
      {/* Tu Footer aquí */}
    </main>
  );
}
