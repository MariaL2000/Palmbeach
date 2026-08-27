import Link from "next/link";
import { FileText, ArrowLeft, ShieldCheck } from "lucide-react";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import Hero from "@/components/ui/Hero";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--primary)] text-white pb-24 relative overflow-hidden">
      <Hero
        img="/footer.jpg"
        title="Terms & Conditions"
        subtitle="Last Updated: August 2026"
        backLink="/"
        backText="Back to Home"
      />

      <div className="container mx-auto max-w-4xl relative z-10 px-6 mt-12">
        <div
          className={`${lora.className} space-y-8 text-sm sm:text-base text-white/85 leading-relaxed bg-black/40 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl`}
        >
          <section className="space-y-3">
            <h2
              className={`${libreBaskerville.className} text-xl text-[var(--buttons)] font-bold`}
            >
              1. Acceptance of Terms
            </h2>
            <p>
              Welcome to <strong className="text-white">Medra ProWorks</strong>.
              By accessing our website or hiring our flooring services across
              Florida, you agree to these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className={`${libreBaskerville.className} text-xl text-[var(--buttons)] font-bold`}
            >
              2. Intellectual Property Rights
            </h2>
            <p>
              All materials, branding, photography, and text content on this
              platform belong to Medra ProWorks. You may view pages for personal
              use, but you must not:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-white/80 text-sm">
              <li>Republish material without authorization.</li>
              <li>Sell, rent, or sub-license platform content.</li>
              <li>Reproduce or copy material for commercial objectives.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2
              className={`${libreBaskerville.className} text-xl text-[var(--buttons)] font-bold`}
            >
              3. Services and Estimates
            </h2>
            <p>
              Online estimations and square footage calculations are approximate
              indicators. Binding contracts and final pricing require an on-site
              technical evaluation.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className={`${libreBaskerville.className} text-xl text-[var(--buttons)] font-bold`}
            >
              4. Limitation of Liability
            </h2>
            <p>
              Our website is provided on an "as is" basis. Medra ProWorks
              excludes all liability for direct or indirect losses arising from
              the use of our digital services.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className={`${libreBaskerville.className} text-xl text-[var(--buttons)] font-bold`}
            >
              5. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the State of Florida,
              United States, and you submit to the exclusive jurisdiction of its
              courts.
            </p>
          </section>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[var(--buttons)]" />
              <span>Medra ProWorks Compliance Department</span>
            </div>
            <span>
              Inquiries:{" "}
              <span className="text-[var(--buttons)] font-semibold">
                medraproworks@gmail.com
              </span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
