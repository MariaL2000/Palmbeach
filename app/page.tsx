import HeroCarousel from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import GalleryMarquee from "@/components/sections/GalleryMarquee";
import Materials from "@/components/sections/Materials";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/navbar/Navbar";
import WhyUs from "@/components/sections/Whyus";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/sections/Footer";
import Faq from "@/components/sections/Faq";

export default async function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroCarousel />
      <Services />
      <WhyUs />
      <GalleryMarquee />

      <Materials />
      <Reviews />
      <Faq />
      <Footer />
    </main>
  );
}
