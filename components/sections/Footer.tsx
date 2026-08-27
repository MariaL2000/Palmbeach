"use client";

import {
  Mail,
  MapPin,
  ArrowRight,
  Lock,
  Phone,
  ShieldCheck,
} from "lucide-react";
import logo from "@/public/logo.png";
import footerBg from "@/public/footer.jpg";
import Link from "next/link";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import ActionButton from "@/components/ui/ActionButton";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--primary)] text-white border-t border-white/10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 pointer-events-none z-0 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${footerBg.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)]/60 z-0 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative container mx-auto py-20 px-6 lg:px-12 z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* BRANDING */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-4">
                <img
                  src={logo.src}
                  alt="Medra ProWorks"
                  className="h-16 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-lg"
                />
                <div className="flex flex-col border-l border-[var(--buttons)] pl-4">
                  <span
                    className={`${libreBaskerville.className} text-3xl font-bold tracking-tight text-white drop-shadow-sm`}
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
              className={`${lora.className} text-white/90 text-sm leading-relaxed max-w-sm italic drop-shadow-sm`}
            >
              Luxury floor transformations for Florida's most exclusive
              architectural spaces. Excellence in every square foot.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <h4
              className={`${libreBaskerville.className} text-base mb-6 text-[var(--buttons)] font-bold uppercase tracking-widest drop-shadow-sm`}
            >
              Navigation
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3">
              {[
                { href: "/#about", label: "About us" },
                { href: "/#services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/materials", label: "Materials" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all text-[11px] uppercase tracking-widest font-bold drop-shadow-sm"
                  >
                    <ArrowRight
                      size={12}
                      className="text-[var(--buttons)] transition-transform group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4 space-y-8"
          >
            <h4
              className={`${libreBaskerville.className} text-base mb-6 text-[var(--buttons)] font-bold uppercase tracking-widest drop-shadow-sm`}
            >
              Get in Touch
            </h4>
            <div className="grid grid-cols-1 gap-6">
              <ActionButton
                href="tel:+19043472708"
                label="CALL NOW +1 904-347-2708"
                variant="primary"
                icon={<Phone size={18} />}
                className="!text-[11px] !px-6 !py-4 shadow-2xl font-black tracking-widest w-full justify-between border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
              />
              <div className="flex items-start gap-4 bg-black/30 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg">
                <div className="p-2.5 bg-white/10 rounded-lg mt-0.5">
                  <MapPin size={16} className="text-[var(--buttons)]" />
                </div>
                <address
                  className={`${lora.className} not-italic text-sm text-white/90 leading-snug`}
                >
                  Palm Coast, FL <br />
                  <span className="text-xs text-[var(--buttons)] font-bold mt-1.5 block tracking-wide">
                    Serving all surrounding areas
                  </span>
                </address>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* COPYRIGHT & LEGAL LINKS */}
      <div className="relative bg-black/80 backdrop-blur-xl py-6 border-t border-white/10 z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] uppercase tracking-[0.2em] font-black text-white/60">
          <p className="text-center md:text-left">
            © {currentYear} Medra ProWorks. High-End Architectural Surfaces.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-4 sm:border-x border-white/15 sm:px-6">
              <span>Licensed & Insured</span>
              <Link
                href="/privacy"
                className="text-[var(--buttons)] hover:underline flex items-center gap-1 transition-colors"
              >
                <ShieldCheck size={14} /> Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[var(--buttons)] hover:underline transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/contact"
                className="text-[var(--buttons)] hover:underline transition-colors"
              >
                Contact
              </Link>
            </div>
            <Link
              href="/admin/login"
              className="hover:text-[var(--buttons)] transition-all opacity-70 hover:opacity-100 p-2 rounded-lg bg-white/5 border border-white/10"
              title="Admin Access"
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
