"use client";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { lora, libreBaskerville } from "@/app/fonts/fonts";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary)] text-white overflow-hidden">
      {/* Sección Principal */}
      <div className="container mx-auto py-20 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Columna 1: Branding */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block group">
              <img
                src={logo.src}
                alt="Medra ProWorks"
                className="h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-4 flex flex-col border-l-2 border-[var(--buttons)] pl-4">
                <span
                  className={`${libreBaskerville.className} text-3xl font-bold tracking-tight`}
                >
                  Medra
                </span>
                <span className="text-xs tracking-[0.4em] uppercase font-black text-[var(--buttons)]">
                  ProWorks
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs italic">
              "Excellence in every square foot. Luxury transformations for
              Florida's most exclusive properties."
            </p>
          </div>

          {/* Columna 2: Quick Links (Rutas exactas Navbar) */}
          <div>
            <h4
              className={`${libreBaskerville.className} text-lg mb-8 text-[var(--buttons)] font-bold`}
            >
              Explore
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/#about", label: "About us" },
                { href: "/#services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/#why", label: "Why us" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/70 hover:text-white transition-all text-sm uppercase tracking-widest font-bold"
                  >
                    <ArrowRight
                      size={14}
                      className="text-[var(--buttons)] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contact Info */}
          <div>
            <h4
              className={`${libreBaskerville.className} text-lg mb-8 text-[var(--buttons)] font-bold`}
            >
              Inquiries
            </h4>
            <ul className="space-y-6">
              <li>
                <a
                  href="tel:5612857825"
                  className="group flex flex-col gap-1 hover:text-[var(--buttons)] transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-tighter text-white/40 font-black">
                    Call Us Now
                  </span>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[var(--buttons)]" />
                    <span className="text-lg font-bold tracking-tight">
                      (561) 285-7825
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:medraproworks@gmail.com"
                  className="group flex flex-col gap-1 hover:text-[var(--buttons)] transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-tighter text-white/40 font-black">
                    Email Us
                  </span>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[var(--buttons)]" />
                    <span className="text-sm font-medium">
                      medraproworks@gmail.com
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Service Areas */}
          <div>
            <h4
              className={`${libreBaskerville.className} text-lg mb-8 text-[var(--buttons)] font-bold`}
            >
              Headquarters
            </h4>
            <div className="flex items-start gap-4 text-white/70">
              <MapPin
                size={20}
                className="text-[var(--buttons)] shrink-0 mt-1"
              />
              <address className="not-italic text-sm leading-loose">
                215 Royal Palm Way
                <br />
                Palm Beach, FL 33480
                <br />
                <span className="text-[var(--buttons)] font-bold mt-2 inline-block">
                  South Florida Region
                </span>
              </address>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4 text-white/50 text-xs">
              <Clock size={16} />
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior (Primary Rebajado) */}
      <div className="bg-black/20 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] font-black text-white/40">
          <p>© {currentYear} Medra ProWorks. High-End Flooring Solutions.</p>
          <div className="flex items-center gap-8">
            <span>Licensed & Insured</span>
            <span className="text-white/60">FL CGC #1530912</span>
          </div>
          <p className="hover:text-white transition-colors cursor-default">
            Crafted for Perfection
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
