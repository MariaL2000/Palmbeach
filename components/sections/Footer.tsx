"use client";
import { COMPANY } from "@/data/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/public/logo.png";

const Footer = () => (
  <footer className="bg-[var(--primary)] text-white">
    <div className="container py-16 grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-12 lg:px-20">
      {/* Logo + descripción */}
      <div>
        <div className="flex items-center gap-2">
          <img
            src={logo.src}
            alt={COMPANY.short}
            className="h-9 w-9 object-contain"
            width={36}
            height={36}
          />
          <h3
            className="font-serif text-2xl"
            style={{ color: "var(--buttons)" }}
          >
            {COMPANY.short}
          </h3>
        </div>
        <p className="mt-3 text-white/80 text-sm leading-relaxed max-w-xs">
          Luxury floor coatings and installation, crafted for the Palm Beach
          lifestyle since 2014.
        </p>
      </div>

      {/* Explore */}
      <div>
        <h4
          className="font-serif text-lg mb-4"
          style={{ color: "var(--buttons)" }}
        >
          Explore
        </h4>
        <ul className="space-y-2 text-sm text-white/80">
          <li>
            <a
              href="/#services"
              className="hover:text-[var(--buttons)] transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/#gallery"
              className="hover:text-[var(--buttons)] transition"
            >
              Gallery
            </a>
          </li>
          <li>
            <a href="/#why" className="hover:text-[var(--buttons)] transition">
              Why Choose Us
            </a>
          </li>
          <li>
            <a
              href="/#materials"
              className="hover:text-[var(--buttons)] transition"
            >
              Materials
            </a>
          </li>
          <li>
            <a
              href="/#reviews"
              className="hover:text-[var(--buttons)] transition"
            >
              Reviews
            </a>
          </li>
          <li>
            <a href="/#faq" className="hover:text-[var(--buttons)] transition">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4
          className="font-serif text-lg mb-4"
          style={{ color: "var(--buttons)" }}
        >
          Contact
        </h4>
        <ul className="space-y-3 text-sm text-white/85">
          <li>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 hover:text-[var(--buttons)] transition"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {COMPANY.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2 hover:text-[var(--buttons)] transition"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {COMPANY.email}
            </a>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              Mon – Sat · 8:00 AM – 6:00 PM
              <br />
              Sunday · By appointment
            </span>
          </li>
        </ul>
      </div>

      {/* Visit */}
      <div>
        <h4
          className="font-serif text-lg mb-4"
          style={{ color: "var(--buttons)" }}
        >
          Visit
        </h4>
        <address className="not-italic text-sm text-white/85 flex items-start gap-2">
          <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
          <span>
            215 Royal Palm Way
            <br />
            Palm Beach, FL 33480
            <br />
            United States
          </span>
        </address>
        <p className="mt-4 text-xs text-white/60">
          Serving Palm Beach County: Jupiter, West Palm Beach, Boca Raton & the
          islands.
        </p>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/20">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70 px-6 md:px-12 lg:px-20">
        <p>
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
        <p>Licensed & Insured · Florida CGC #1530912</p>
      </div>
    </div>
  </footer>
);

export default Footer;
