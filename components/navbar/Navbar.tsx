"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";
import { lora } from "@/app/fonts/fonts";
import { motion, AnimatePresence } from "framer-motion";
import ActionButton from "../ui/ActionButton";

import logo from "@/public/logo.png";
import logo2 from "@/public/logo2.png";

const links = [
  { href: "/#about", label: "About us" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

const gallerySublinks = [
  { href: "/gallery", label: "Full Gallery" },
  { href: "/#beforeafter", label: "Before & After" },
  { href: "/materials", label: "Materials" },
];

const whyUsSublinks = [
  { href: "/#why", label: "Why us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "Faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Estados para desplegables en móvil
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const [mobileWhyUsOpen, setMobileWhyUsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar submenús al cerrar el móvil
  useEffect(() => {
    if (!mobileOpen) {
      setMobileGalleryOpen(false);
      setMobileWhyUsOpen(false);
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ease-in-out ${lora.className} ${
          isScrolled
            ? "bg-white shadow-lg py-2 border-none"
            : "bg-white/10 backdrop-blur-md border-b border-white/20 py-4"
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={isScrolled ? logo2.src : logo.src}
              alt="Medra ProWorks"
              className="object-contain transition-all duration-300"
              style={{ height: isScrolled ? "48px" : "64px" }}
            />
            <div className="flex flex-col border-l border-gray-400/30 pl-3">
              <span
                className="text-2xl md:text-3xl font-bold leading-none transition-colors"
                style={{ color: isScrolled ? "var(--primary)" : "white" }}
              >
                Medra
              </span>
              <span
                className="text-[11px] tracking-[0.4em] uppercase font-black mt-1"
                style={{ color: "var(--buttons)" }}
              >
                ProWorks
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {links.slice(0, 2).map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative text-[13px] uppercase tracking-[0.15em] font-bold transition-colors group/link"
                  style={{ color: isScrolled ? "var(--primary)" : "white" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--buttons)] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </li>
            ))}

            {/* Gallery Dropdown Desktop */}
            <li className="relative group cursor-pointer py-4">
              <div
                className="flex items-center gap-1 text-[13px] uppercase tracking-[0.15em] font-bold transition-colors"
                style={{ color: isScrolled ? "var(--primary)" : "white" }}
              >
                Gallery{" "}
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </div>
              <div className="absolute top-full left-0 w-52 bg-white shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 rounded-b-lg border-t-2 border-[var(--buttons)]">
                {gallerySublinks.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    className="block px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-[var(--primary)] hover:bg-gray-50 hover:text-[var(--buttons)] transition-colors"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </li>

            {/* Why Us Dropdown Desktop */}
            <li className="relative group cursor-pointer py-4">
              <div
                className="flex items-center gap-1 text-[13px] uppercase tracking-[0.15em] font-bold transition-colors"
                style={{ color: isScrolled ? "var(--primary)" : "white" }}
              >
                Why Us{" "}
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </div>
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 rounded-b-lg border-t-2 border-[var(--buttons)]">
                {whyUsSublinks.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    className="block px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-[var(--primary)] hover:bg-gray-50 hover:text-[var(--buttons)] transition-colors"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                href="/#contact"
                className="relative text-[13px] uppercase tracking-[0.15em] font-bold transition-colors group/link"
                style={{ color: isScrolled ? "var(--primary)" : "white" }}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--buttons)] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex items-center">
            <ActionButton
              href="tel:+19043472708"
              label="CALL NOW +1 904-347-2708"
              variant="primary"
              icon={<Phone size={20} />}
              className="!text-[12px] !px-10 !py-5 shadow-2xl font-black tracking-widest hover:scale-105 transition-transform"
            />
          </div>

          {!mobileOpen && (
            <button
              className={`lg:hidden p-2 ${isScrolled ? "text-gray-900" : "text-white"}`}
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={32} />
            </button>
          )}
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[150] bg-[var(--primary)] flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
              <img src={logo.src} alt="Logo" className="h-10 object-contain" />
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
              >
                <X size={35} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-10">
              <ul className="flex flex-col gap-2">
                {links.slice(0, 2).map((link) => (
                  <li key={link.label} className="border-b border-white/5">
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-5 text-2xl font-bold text-white uppercase tracking-tighter"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* Mobile Gallery Accordion */}
                <li className="border-b border-white/5">
                  <button
                    onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
                    className="w-full flex justify-between items-center py-5 text-2xl font-bold text-white uppercase tracking-tighter"
                  >
                    Gallery{" "}
                    <ChevronDown
                      className={`transition-transform duration-300 ${mobileGalleryOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileGalleryOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white/5 rounded-lg mb-4"
                      >
                        {gallerySublinks.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-6 py-4 text-sm font-bold text-[var(--buttons)] uppercase tracking-widest border-b border-white/5 last:border-none"
                          >
                            <ChevronRight size={14} /> {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Mobile Why Us Accordion */}
                <li className="border-b border-white/5">
                  <button
                    onClick={() => setMobileWhyUsOpen(!mobileWhyUsOpen)}
                    className="w-full flex justify-between items-center py-5 text-2xl font-bold text-white uppercase tracking-tighter"
                  >
                    Why Us{" "}
                    <ChevronDown
                      className={`transition-transform duration-300 ${mobileWhyUsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileWhyUsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white/5 rounded-lg mb-4"
                      >
                        {whyUsSublinks.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-6 py-4 text-sm font-bold text-[var(--buttons)] uppercase tracking-widest border-b border-white/5 last:border-none"
                          >
                            <ChevronRight size={14} /> {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li className="border-b border-white/5">
                  <Link
                    href="/#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block py-5 text-2xl font-bold text-white uppercase tracking-tighter"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <ActionButton
              href="tel:5612857825"
              label="CALL NOW"
              variant="primary"
              icon={<Phone size={22} />}
              className="w-full !py-8 text-xl rounded-none font-black"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
