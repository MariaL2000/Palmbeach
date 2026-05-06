"use client";
import { useState, useEffect } from "react";
import { Lock, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import logo from "@/public/logo.png";
import { lora } from "@/app/fonts/fonts";
import { motion, AnimatePresence } from "framer-motion";
import ActionButton from "../ui/ActionButton"; // Asegúrate de que la ruta sea correcta

const links = [
  { href: "/#about", label: "About us" },
  { href: "/#services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

const whyUsSublinks = [
  { href: "/#why", label: "Why us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "Faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loraClass = lora.className;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${loraClass} ${
        isScrolled
          ? "bg-white shadow-md py-2 border-none"
          : "bg-white/10 backdrop-blur-md border-b border-white/20 py-4"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={logo.src}
            alt="Logo"
            className={`transition-all duration-300 ${isScrolled ? "h-14" : "h-16"}`}
          />
          <div className="flex flex-col border-l border-gray-400/30 pl-3">
            <span
              className="text-2xl md:text-3xl font-bold leading-none"
              style={{ color: "var(--primary)" }}
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

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
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

          <li className="relative group cursor-pointer py-4">
            <div
              className="relative flex items-center gap-1 text-[13px] uppercase tracking-[0.15em] font-bold transition-colors"
              style={{ color: isScrolled ? "var(--primary)" : "white" }}
            >
              Why Us{" "}
              <ChevronDown
                size={16}
                className="group-hover:rotate-180 transition-transform duration-300"
              />
              <span className="absolute -bottom-1 left-0 w-[calc(100%-20px)] h-[2px] bg-[var(--buttons)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
            <div
              className="absolute top-full left-0 w-56 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              style={{ borderTop: "4px solid var(--buttons)" }}
            >
              {whyUsSublinks.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="block px-6 py-4 text-[12px] uppercase tracking-widest text-gray-800 hover:bg-gray-50 border-b border-gray-100 last:border-0 font-bold transition-colors hover:text-[var(--buttons)]"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </li>
        </ul>

        {/* ACTIONS */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/admin/login"
            className="transition-colors hover:text-[var(--buttons)]"
            style={{ color: isScrolled ? "var(--primary)" : "white" }}
          >
            <Lock size={20} />
          </Link>

          {/* ActionButton Reutilizable */}
          <ActionButton
            href="tel:5612857825"
            label="Call Now"
            variant="primary"
            className="hover:text-[var(--primary)]" // Asegura que el texto cambie si el fondo es claro en hover
          />
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`lg:hidden p-2 transition-colors ${mobileOpen ? "text-white" : isScrolled ? "text-gray-900" : "text-white"}`}
          style={{ position: mobileOpen ? "relative" : "static", zIndex: 120 }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[110] flex flex-col bg-[var(--primary)] lg:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center px-8 py-8 border-b border-white/10">
              <span className="text-xl font-bold text-white tracking-widest uppercase">
                Navigation
              </span>
            </div>

            <ul className="flex flex-col px-8 pt-10 pb-20 gap-2">
              {[...links, ...whyUsSublinks].map((link) => (
                <li key={link.label} className="border-b border-white/5">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-5 text-2xl font-bold text-white uppercase tracking-tighter active:text-[var(--buttons)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto sticky bottom-0">
              <ActionButton
                href="tel:5612857825"
                label="Call Now"
                variant="primary"
                className="w-full !bg-[var(--buttons)] text-(--primary)! py-8 text-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
