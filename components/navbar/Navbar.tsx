"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Lock, Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import logo from "@/public/logo.png";
import { lora } from "@/app/fonts/fonts";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#why", label: "About" },
  { href: "/#reviews", label: "Reviews" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] pointer-events-none">
      <nav
        className={`container mx-auto px-6 transition-all duration-700 ease-in-out pointer-events-auto relative ${
          isScrolled ? "mt-5 py-2 rounded-4xl" : "mt-0 py-10"
        }`}
        style={{
          transform: "translateZ(0)", // Fuerza renderizado GPU para evitar bordes negros
          backfaceVisibility: "hidden",
        }}
      >
        {/* FONDO INDEPENDIENTE: Esto evita los bordes raros al scrollear */}
        <div
          className={`absolute inset-0 rounded-4xl transition-opacity duration-700 -z-10 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundColor: "rgba(35, 30, 20, 0.9)", // Bronce muy oscuro
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(197, 160, 89, 0.2)",
          }}
        />

        <div className="flex items-center justify-between relative z-10">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={logo.src}
              alt="Logo"
              className={`transition-all duration-500 ${
                isScrolled ? "h-15" : "h-16"
              }`}
            />
            <div className="flex flex-col border-l border-[var(--secondary)]/40 pl-2">
              <span
                className={`${lora.className} italic text-xl font-bold leading-none`}
                style={{ color: "var(--primary)" }}
              >
                Medra
              </span>
              <span
                className="font-sans text-[10px] tracking-[0.4em] uppercase font-bold mt-1"
                style={{ color: "var(--buttons)" }}
              >
                ProWorks
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={`${lora.className} text-[11px] uppercase tracking-[0.3em] font-semibold text-white/90 transition-all`}
                >
                  {link.label}
                </Link>
                {/* Rayita animada */}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--buttons)" }}
                />
              </li>
            ))}
          </ul>

          {/* ACCIÓN */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/admin/login"
              className="text-[#C5A059]/50 hover:text-[#C5A059]"
            >
              <Lock size={16} />
            </Link>
            <a
              href="tel:5612857825"
              className={`${lora.className} flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all hover:scale-110 shadow-xl group`}
              style={{ backgroundColor: "var(--buttons)", color: "#0A192F" }}
            >
              <Phone size={20} fill="currentColor" />
              <span className="text-[14px] tracking-widest uppercase">
                Free Quote
              </span>
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-[#C5A059]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0A] z-[110] flex flex-col p-10 pointer-events-auto"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end text-[#C5A059]"
            >
              <X size={40} />
            </button>
            <ul className="flex-1 flex flex-col justify-center gap-8">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl font-serif italic text-white hover:text-[#C5A059]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
