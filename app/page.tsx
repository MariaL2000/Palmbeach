import HeroCarousel from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Materials from "@/components/sections/Materials";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/navbar/Navbar";
import WhyUs from "@/components/sections/Whyus";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/sections/Footer";
import AboutUs from "@/components/sections/About";
import SupportSection from "@/components/sections/Supportsection";

export default async function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroCarousel />
      <AboutUs />
      <Services />
      <Gallery />
      <Materials />
      <SupportSection />
      <WhyUs />
      <Reviews />
      <Footer />
    </main>
  );
}
