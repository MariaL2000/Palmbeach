"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import logo from "@/public/logo.png";
import { lora } from "@/app/fonts/fonts";
import { motion, AnimatePresence } from "framer-motion";
import ActionButton from "../ui/ActionButton";

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  const loraClass = lora.className;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${loraClass} ${
          isScrolled
            ? "bg-white shadow-md py-2 border-none"
            : "bg-white/10 backdrop-blur-md border-b border-white/20 py-4"
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
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

            {/* DROPDOWN WHY US RESTAURADO */}
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
          </ul>

          <div className="hidden lg:flex items-center gap-6">
            {/* El candado de login ha sido removido de aquí */}
            <ActionButton
              href="tel:5612857825"
              label="Call Now"
              variant="primary"
              icon={<Phone size={16} />}
            />
          </div>

          {!mobileOpen && (
            <button
              className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={32} />
            </button>
          )}
        </nav>
      </header>

      {/* MENÚ MÓVIL FULLSCREEN */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[150] bg-[var(--primary)] flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
              <span className="text-xl font-bold text-white tracking-widest uppercase">
                Navigation
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
              >
                <X size={35} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-10">
              <ul className="flex flex-col gap-4">
                {[...links, ...whyUsSublinks].map((link) => (
                  <li key={link.label} className="border-b border-white/5">
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-2xl font-bold text-white uppercase tracking-tighter"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <ActionButton
                href="tel:5612857825"
                label="Call Now"
                variant="primary"
                icon={<Phone size={22} />}
                className="w-full !bg-[var(--buttons)] !text-[var(--primary)] py-8 text-xl rounded-none font-black"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
