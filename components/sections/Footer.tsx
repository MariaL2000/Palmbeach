"use client";
import { useState } from "react";
import {
  Mail,
  MapPin,
  ArrowRight,
  Lock,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import logo from "@/public/logo.png";
import footerBg from "@/public/footer.jpg";
import Link from "next/link";
import { lora, libreBaskerville } from "@/app/fonts/fonts";
import ActionButton from "@/components/ui/ActionButton";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="relative bg-[var(--primary)] text-white border-t border-white/10 overflow-hidden">
      {/* Background Image: Crisp, prominent visibility with a balanced 0.35 opacity and subtle zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 pointer-events-none z-0 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${footerBg.src})` }}
      />
      {/* Refined gradient overlay: Deep cinematic contrast at the bottom, soft gradient fading upwards */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)]/60 z-0 pointer-events-none" />

      {/* Main Content with Framer Motion Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative container mx-auto py-20 px-6 lg:px-12 z-10"
      >
        {/* Optimized Layout: 3 main columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* 1. BRANDING & TEXT (5 Columns) */}
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

            {/* Social Media Links with Motion Animation */}
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  name: "Instagram",
                  href: "https://instagram.com/medraproworks",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  name: "Facebook",
                  href: "https://facebook.com/medraproworks",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.376 14.5 5 15.5 5H18V0h-3.808C10.5 0 9 1.583 9 4.615V8z" />
                    </svg>
                  ),
                },
                {
                  name: "WhatsApp",
                  href: "https://wa.me/19043472708",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/10 hover:bg-[var(--buttons)] hover:text-[var(--primary)] text-white rounded-xl transition-all border border-white/10 shadow-lg flex items-center justify-center"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 2. QUICK LINKS (3 Columns) */}
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
                { href: "/#contact", label: "Contact" },
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

          {/* 3. CONTACT & HQ (4 Columns) */}
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
              {/* Custom ActionButton with phone number and animated icon */}
              <ActionButton
                href="tel:+19043472708"
                label="CALL NOW +1 904-347-2708"
                variant="primary"
                icon={<Phone size={18} />}
                className="!text-[11px] !px-6 !py-4 shadow-2xl font-black tracking-widest w-full justify-between border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
              />

              <a
                href="mailto:medraproworks@gmail.com"
                className="flex items-center gap-4 group bg-black/30 backdrop-blur-md hover:bg-black/50 p-3.5 rounded-xl transition-all border border-white/10 shadow-lg"
              >
                <div className="p-2.5 bg-white/10 rounded-lg group-hover:bg-[var(--buttons)] group-hover:text-[var(--primary)] transition-all">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/50 block font-bold">
                    Direct Mail
                  </span>
                  <span
                    className={`${lora.className} text-sm italic text-white group-hover:text-[var(--buttons)] transition-colors`}
                  >
                    medraproworks@gmail.com
                  </span>
                </div>
              </a>

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

      {/* COPYRIGHT & REFINED SUB-BAR */}
      <div className="relative bg-black/80 backdrop-blur-xl py-6 border-t border-white/10 z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] uppercase tracking-[0.2em] font-black text-white/60">
          <p className="text-center md:text-left">
            © {currentYear} Medra ProWorks. High-End Architectural Surfaces.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-6 sm:border-x border-white/15 sm:px-6">
              <span>Licensed & Insured</span>
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="text-[var(--buttons)] hover:underline tracking-[0.15em] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ShieldCheck size={14} />
                Privacy Policy
              </button>
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

      {/* FULLY RESPONSIVE MODERN PRIVACY POLICY MODAL */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-xl max-h-[90vh] bg-[var(--primary)] border border-white/15 text-white rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-10"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3.5 mb-5 border-b border-white/10 pb-4 pr-12">
                <div className="p-2.5 bg-[var(--buttons)]/20 rounded-xl text-[var(--buttons)]">
                  <ShieldCheck size={24} />
                </div>
                <h3
                  className={`${libreBaskerville.className} text-xl sm:text-2xl font-bold tracking-tight text-white`}
                >
                  Privacy Policy
                </h3>
              </div>

              {/* Modal Body Content (Fully Scrollable on Mobile) */}
              <div
                className={`${lora.className} space-y-4 text-xs sm:text-sm text-white/85 leading-relaxed overflow-y-auto pr-2 custom-scrollbar flex-1 my-2`}
              >
                <p>
                  At <strong className="text-white">Medra ProWorks</strong>, we
                  respect your privacy and are deeply committed to safeguarding
                  the personal information you share with us through our web
                  platform and consultation requests.
                </p>
                <p>
                  <strong className="text-white">
                    Information We Collect:
                  </strong>{" "}
                  When you submit a quote inquiry or reach out to our team, we
                  collect necessary contact parameters including your full name,
                  direct email address, telephone number, and architectural
                  project specifications.
                </p>
                <p>
                  <strong className="text-white">How We Use Your Data:</strong>{" "}
                  Your data is utilized exclusively to respond to your
                  inquiries, deliver accurate surface estimates, and coordinate
                  high-end professional flooring services. We never sell, trade,
                  or distribute your private information to third parties.
                </p>
                <p>
                  <strong className="text-white">Data Security:</strong> We
                  deploy advanced encryption and industry-standard security
                  measures to ensure your data remains completely confidential
                  and protected against unauthorized access.
                </p>
                <p className="text-[11px] text-white/50 pt-3 border-t border-white/10">
                  For any privacy-related questions, feel free to contact us
                  directly via email at{" "}
                  <span className="text-[var(--buttons)] font-semibold">
                    medraproworks@gmail.com
                  </span>
                  .
                </p>
              </div>

              {/* Modal Footer Action */}
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="w-full sm:w-auto bg-[var(--buttons)] text-[var(--primary)] hover:opacity-90 font-black text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl transition-all shadow-xl cursor-pointer"
                >
                  Accept & Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
