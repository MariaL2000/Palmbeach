import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import Hero from "@/components/ui/Hero";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--primary)] text-white pb-24 relative overflow-hidden">
      <Hero
        img="/footer.jpg"
        title="Privacy Policy"
        subtitle="Safeguarding your personal information."
        backLink="/"
        backText="Back to Home"
      />

      <div className="container mx-auto max-w-4xl relative z-10 px-6 mt-12">
        <div
          className={`${lora.className} space-y-6 text-sm sm:text-base text-white/85 leading-relaxed bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl`}
        >
          <p>
            At <strong className="text-white">Medra ProWorks</strong>, we
            respect your privacy and are committed to protecting the information
            you share with us.
          </p>

          <h2
            className={`${libreBaskerville.className} text-lg text-[var(--buttons)] font-bold pt-4`}
          >
            Information We Collect
          </h2>
          <p>
            When you submit a quote inquiry, we collect contact parameters
            including your name, email, phone number, and project details.
          </p>

          <h2
            className={`${libreBaskerville.className} text-lg text-[var(--buttons)] font-bold pt-4`}
          >
            How We Use Your Data
          </h2>
          <p>
            Your data is used exclusively to respond to inquiries, deliver
            estimates, and coordinate services. We never sell or distribute your
            information.
          </p>

          <h2
            className={`${libreBaskerville.className} text-lg text-[var(--buttons)] font-bold pt-4`}
          >
            Data Security
          </h2>
          <p>
            We deploy secure encryption measures to ensure your data remains
            confidential and protected against unauthorized access.
          </p>

          <div className="pt-6 border-t border-white/10 text-sm text-white/60">
            For privacy questions, contact us at{" "}
            <span className="text-[var(--buttons)] font-semibold">
              medraproworks@gmail.com
            </span>
            .
          </div>
        </div>
      </div>
    </main>
  );
}
