import { SERVICES } from "@/data/site";

interface Props {
  params: { slug: string };
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return <div className="container mx-auto py-24">Service not found.</div>;
  }

  return (
    <section className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-serif mb-6">{service.title}</h1>
      <img
        src={service.img}
        alt={service.title}
        className="w-full max-h-[500px] object-cover rounded-xl mb-8"
      />
      <p className="text-lg text-gray-700 leading-relaxed">{service.desc}</p>
    </section>
  );
}
