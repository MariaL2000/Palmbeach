"use client";
import { FAQS } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import Accordion from "../ui/Accordion"; // tu componente reutilizable

const Faq = () => (
  <section id="faq" className="bg-background py-24 md:py-32">
    <div className="container px-6 md:px-12 lg:px-20">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about our process, materials, and guarantees."
        center={false}
      />

      <div className="mt-12 max-w-3xl">
        <Accordion
          items={FAQS.map((f) => ({
            question: f.q,
            answer: f.a,
          }))}
        />
      </div>
    </div>
  </section>
);

export default Faq;
