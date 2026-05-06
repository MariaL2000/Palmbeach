"use client";
import { FAQS } from "@/data/site";
import SectionHeader from "../ui/SectionHeader";
import Accordion from "../ui/Accordion";
import ContactCard from "./ContactCard";
import { libreBaskerville } from "@/app/fonts/fonts";

export default function SupportSection() {
  return (
    <section id="faq" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* LADO IZQUIERDO: FAQ */}
          <div className="w-full lg:w-1/2">
            <SectionHeader
              eyebrow="Support"
              title="Common Questions"
              subtitle="Everything you need to know about our premium remodeling process."
              center={false}
            />
            <div className="mt-8">
              <Accordion
                items={FAQS.map((f) => ({
                  question: f.q,
                  answer: f.a,
                }))}
              />
            </div>
          </div>

          {/* LADO DERECHO: CONTACT CARD */}
          <div className="w-full lg:w-1/2 sticky top-24">
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
}
