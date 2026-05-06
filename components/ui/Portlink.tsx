"use client";
import Link from "next/link";
import { lora } from "@/app/fonts/fonts"; // asegúrate de importar tu fuente

interface PortfolioLinkProps {
  className?: string;
}

const PortfolioLink: React.FC<PortfolioLinkProps> = ({ className }) => {
  return (
    <Link
      href="/gallery"
      className={`
        ${lora.className}
        inline-block px-6 py-3 mt-10
        text-sm md:text-base font-semibold uppercase tracking-[0.2em]
        rounded-md transition-all duration-300
        bg-[var(--buttons)] text-white
        hover:bg-[var(--primary)] hover:text-[var(--buttons)]
        shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)]
        ${className ?? ""}
      `}
    >
      View Portfolio
    </Link>
  );
};

export default PortfolioLink;
