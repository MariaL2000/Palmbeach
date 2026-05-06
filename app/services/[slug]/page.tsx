import { SERVICES_DETAILS } from "@/data/site";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/ui/SectionHeader";
import ActionButton from "@/components/ui/ActionButton";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import { CheckCircle2 } from "lucide-react";

// 1. Cambiamos la función a async
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>; // 2. Definimos params como una Promise
}) {
  // 3. Esperamos a que la promesa se resuelva
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const service = SERVICES_DETAILS[slug as keyof typeof SERVICES_DETAILS];

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`${libreBaskerville.className} text-4xl md:text-6xl text-white font-bold mb-4`}
          >
            {service.title}
          </h1>
          <p
            className={`${lora.className} text-[var(--buttons)] text-xl italic`}
          >
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Medra Excellence"
              title="Transforming Your Vision"
            />
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[var(--buttons)]" size={20} />
                  <span className="font-bold text-gray-800 text-sm uppercase tracking-wide">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <ActionButton
                href="/#contact"
                label="Get a Free Estimate"
                variant="primary"
              />
            </div>
          </div>

          <div className="relative">
            <img
              src={service.image}
              alt="Detail"
              className="relative z-10 shadow-2xl rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2
            className={`${libreBaskerville.className} text-3xl md:text-4xl font-bold mb-6`}
          >
            Ready to start your next project?
          </h2>
          <ActionButton
            href="tel:5612857825"
            label="Call Now"
            variant="secondary"
            className="!border-white !text-white hover:!bg-white hover:!text-[var(--primary)]"
          />
        </div>
      </section>
    </main>
  );
}
