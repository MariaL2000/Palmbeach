import HeroCarousel from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Materials from "@/components/sections/Materials";
import AboutUs from "@/components/sections/About";
import SupportSection from "@/components/sections/Supportsection";
import WhyUs from "@/components/sections/Whyus";
import Reviews from "@/components/sections/Reviews";
import ComparisonSection from "@/components/sections/ComparisionSection";

export default async function HomePage() {
  return (
    <main className="relative">
      <HeroCarousel />
      <AboutUs />
      <Services />
      <Gallery />
      <ComparisonSection />
      <Materials />
      <SupportSection />
      <WhyUs />
      <Reviews />
    </main>
  );
}
