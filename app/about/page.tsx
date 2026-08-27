import Hero from "@/components/ui/Hero";
import AboutUs from "@/components/sections/About";
import { lora, libreBaskerville } from "@/app/fonts/fonts";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 pb-24 overflow-hidden">
      {/* Hero consistente con el resto de la web */}
      <Hero
        img="/footer.jpg"
        title="About Us"
        subtitle="Uncompromising precision and architectural excellence across Florida."
      />

      {/* Componente principal de About con el puzzle y la historia enriquecida */}
      <AboutUs />

      {/* Sección Adicional de Contenido Extra para SEO / Google Adsense */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2
              className={`${libreBaskerville.className} text-2xl sm:text-3xl text-[var(--primary)] font-bold mb-4`}
            >
              Why Florida Property Owners Choose Medra ProWorks
            </h2>
            <p
              className={`${lora.className} text-gray-600 max-w-2xl mx-auto text-base`}
            >
              Delivering high-performance surface protection, seamless
              aesthetics, and long-lasting commercial and residential flooring
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
              <h3
                className={`${libreBaskerville.className} text-[var(--primary)] font-bold text-lg`}
              >
                Advanced Polyaspartic & Epoxy Systems
              </h3>
              <p
                className={`${lora.className} text-sm text-gray-600 leading-relaxed`}
              >
                We deploy cutting-edge polymer chemistries designed to withstand
                heavy thermal shock, chemical spills, UV exposure, and intense
                foot traffic in commercial and residential spaces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
              <h3
                className={`${libreBaskerville.className} text-[var(--primary)] font-bold text-lg`}
              >
                Bespoke Artisanal Finishes
              </h3>
              <p
                className={`${lora.className} text-sm text-gray-600 leading-relaxed`}
              >
                Every floor is treated as a unique project. From custom metallic
                swirls to natural stone restoration, our artisans bring creative
                luxury directly to your foundation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
              <h3
                className={`${libreBaskerville.className} text-[var(--primary)] font-bold text-lg`}
              >
                Local Expertise Across Florida
              </h3>
              <p
                className={`${lora.className} text-sm text-gray-600 leading-relaxed`}
              >
                Deeply rooted in South Florida, we understand local climatic
                challenges such as high moisture levels, ensuring moisture
                barrier integration in every installation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
