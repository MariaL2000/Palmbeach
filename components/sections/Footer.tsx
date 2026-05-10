"use client";
import { Phone, Mail, MapPin, ArrowRight, Lock } from "lucide-react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { lora, libreBaskerville } from "@/app/fonts/fonts";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary)] text-white border-t border-white/5">
      <div className="container mx-auto py-12 px-6 lg:px-12">
        {/* Layout optimizado: 3 columnas principales en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* 1. BRANDING & TEXTO (5 Columnas) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-4">
                <img
                  src={logo.src}
                  alt="Medra ProWorks"
                  className="h-16 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex flex-col border-l border-[var(--buttons)] pl-4">
                  <span
                    className={`${libreBaskerville.className} text-3xl font-bold tracking-tight`}
                  >
                    Medra
                  </span>
                  <span className="text-[10px] tracking-[0.4em] uppercase font-black text-[var(--buttons)]">
                    ProWorks
                  </span>
                </div>
              </div>
            </Link>
            <p
              className={`${lora.className} text-white/50 text-sm leading-relaxed max-w-sm italic`}
            >
              Luxury floor transformations for Florida's most exclusive
              architectural spaces. Excellence in every square foot.
            </p>
          </div>

          {/* 2. ENLACES RÁPIDOS (3 Columnas) - Compacto */}
          <div className="md:col-span-3">
            <h4
              className={`${libreBaskerville.className} text-base mb-6 text-[var(--buttons)] font-bold uppercase tracking-widest`}
            >
              Navigation
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3">
              {[
                { href: "/#about", label: "About us" },
                { href: "/#services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/materials", label: "Materials" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-white/60 hover:text-white transition-all text-[11px] uppercase tracking-widest font-bold"
                >
                  <ArrowRight
                    size={12}
                    className="text-[var(--buttons)] transition-transform group-hover:translate-x-1"
                  />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. CONTACTO & HQ (4 Columnas) - Compacto e Iconográfico */}
          <div className="md:col-span-4 space-y-8">
            <h4
              className={`${libreBaskerville.className} text-base mb-6 text-[var(--buttons)] font-bold uppercase tracking-widest`}
            >
              Get in Touch
            </h4>
            <div className="grid grid-cols-1 gap-6">
              <a
                href="tel:5612857825"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-white/5 rounded-sm group-hover:bg-[var(--buttons)] group-hover:text-[var(--primary)] transition-all">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/30 block">
                    Technical Line
                  </span>
                  <span className="text-sm font-bold">(561) 285-7825</span>
                </div>
              </a>

              <a
                href="mailto:medraproworks@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-white/5 rounded-sm group-hover:bg-[var(--buttons)] group-hover:text-[var(--primary)] transition-all">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/30 block">
                    Direct Mail
                  </span>
                  <span
                    className={`${lora.className} text-sm italic text-white/70 group-hover:text-white transition-colors`}
                  >
                    medraproworks@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-sm">
                  <MapPin size={16} className="text-[var(--buttons)]" />
                </div>
                <address
                  className={`${lora.className} not-italic text-sm text-white/60 leading-snug`}
                >
                  215 Royal Palm Way, <br />
                  Palm Coast, FL 33480
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BARRA DE COPYRIGHT - Mucho más delgada */}
      <div className="bg-black/40 py-6 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] uppercase tracking-[0.2em] font-black text-white/30">
          <p>
            © {currentYear} Medra ProWorks. High-End Architectural Surfaces.
          </p>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-6 border-x border-white/10 px-6">
              <span>Licensed & Insured</span>
              <span className="text-white/60">FL CGC #1530912</span>
            </div>

            <Link
              href="/admin/login"
              className="hover:text-[var(--buttons)] transition-all opacity-50 hover:opacity-100"
            >
              <Lock size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
