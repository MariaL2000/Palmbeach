import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import ContactCard from "@/components/sections/ContactCard";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--primary)] text-white py-16 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--buttons)] hover:underline mb-8 font-bold"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header Section */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1
            className={`${libreBaskerville.className} text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4`}
          >
            Contact Our Specialists
          </h1>
          <p className={`${lora.className} text-white/80 text-base italic`}>
            Get in touch with Medra ProWorks for luxury architectural flooring
            consultations, estimates, and custom surface projects across
            Florida.
          </p>
        </div>

        {/* Content Layout: Form + Info cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Contact Form (Your provided component) */}
          <div className="lg:col-span-7">
            <ContactCard />
          </div>

          {/* Right Side: Corporate Contact Details & Trust Indicators */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl space-y-6">
              <h3
                className={`${libreBaskerville.className} text-xl text-[var(--buttons)] font-bold`}
              >
                Direct Headquarters
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg text-[var(--buttons)] mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong className="block text-white uppercase tracking-wider text-xs">
                      Location
                    </strong>
                    <span className="text-white/80">
                      Palm Coast, Florida, USA. Serving surrounding areas.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg text-[var(--buttons)] mt-1">
                    <Phone size={18} />
                  </div>
                  <div>
                    <strong className="block text-white uppercase tracking-wider text-xs">
                      Direct Telephone
                    </strong>
                    <a
                      href="tel:+19043472708"
                      className="text-white/90 hover:text-[var(--buttons)] transition-colors font-semibold"
                    >
                      +1 (904) 347-2708
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg text-[var(--buttons)] mt-1">
                    <Mail size={18} />
                  </div>
                  <div>
                    <strong className="block text-white uppercase tracking-wider text-xs">
                      Electronic Mail
                    </strong>
                    <a
                      href="mailto:medraproworks@gmail.com"
                      className="text-white/90 hover:text-[var(--buttons)] transition-colors font-semibold"
                    >
                      medraproworks@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg text-[var(--buttons)] mt-1">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong className="block text-white uppercase tracking-wider text-xs">
                      Business Hours
                    </strong>
                    <span className="text-white/80">
                      Monday – Friday: 8:00 AM – 6:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center gap-4">
              <div className="p-3 bg-[var(--buttons)]/20 rounded-xl text-[var(--buttons)]">
                <ShieldCheck size={28} />
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                <strong className="text-white block font-bold mb-1 uppercase tracking-wider">
                  Licensed & Insured Professional Services
                </strong>
                All projects are backed by professional commercial standards and
                strict safety compliances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
