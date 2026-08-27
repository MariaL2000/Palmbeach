import { SERVICES_DETAILS } from "@/data/site";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/ui/SectionHeader";
import ActionButton from "@/components/ui/ActionButton";
import Hero from "@/components/ui/Hero";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export async function generateStaticParams() {
  return Object.keys(SERVICES_DETAILS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DETAILS[slug as keyof typeof SERVICES_DETAILS];

  if (!service) return { title: "Service Not Found - Medra ProWorks" };

  return {
    title: `${service.title} | Medra ProWorks`,
    description: service.subtitle || service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DETAILS[slug as keyof typeof SERVICES_DETAILS];

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* HERO REUTILIZABLE */}
      <Hero
        img={service.img}
        title={service.title}
        subtitle={service.subtitle}
        backLink="/services"
        backText="Back to Services"
      />

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Medra Excellence"
                title="Transforming Your Vision into Reality"
              />
              <p
                className={`${lora.className} text-gray-700 text-lg leading-relaxed mb-10 first-letter:text-4xl first-letter:font-bold first-letter:mr-3 first-letter:float-left`}
              >
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-secondary/10 p-8 rounded-sm border-l-4 border-[var(--buttons)]">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[var(--buttons)] shrink-0"
                      size={22}
                    />
                    <span className="font-bold text-gray-800 text-xs uppercase tracking-widest leading-tight">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <ActionButton
                  href="/contact"
                  label="Request a Free Estimate"
                  variant="primary"
                />
                <ActionButton
                  href="tel:5612857825"
                  label="Talk to an Expert"
                  variant="secondary"
                />
              </div>
            </div>

            <div className="lg:col-span-5 sticky top-32">
              <div className="relative group">
                <div className="absolute -inset-4 border border-[var(--buttons)]/30 rounded-sm translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

                <div className="relative w-full h-[450px] shadow-2xl rounded-sm overflow-hidden grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="absolute bottom-6 left-6 bg-white p-6 shadow-xl max-w-[200px] z-10">
                  <p className="text-[var(--primary)] font-black text-3xl">
                    100%
                  </p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Precision Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[var(--primary)] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <p className="text-white text-[20vw] font-black leading-none select-none">
            MEDRA
          </p>
        </div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h2
            className={`${libreBaskerville.className} text-4xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto`}
          >
            Ready to experience architectural flooring precision?
          </h2>
          <p className="mb-10 text-white/70 text-lg max-w-xl mx-auto italic font-light">
            We handle the installation, you enjoy the results. Contact us today
            for a professional assessment.
          </p>
          <ActionButton
            href="/contact"
            label="Get Started Now"
            variant="secondary"
            className="!border-white !text-white hover:!bg-white hover:!text-[var(--primary)] !px-12"
          />
        </div>
      </section>
    </main>
  );
}
