"use client";
import Link from "next/link";
import { lora } from "@/app/fonts/fonts";
import { ArrowRight } from "lucide-react";
import React, { ReactNode } from "react";

interface ActionButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  href,
  label,
  variant = "primary",
  className,
  icon,
}) => {
  const isPrimary = variant === "primary";

  return (
    <Link
      href={href}
      className={`
        ${lora.className}
        group inline-flex items-center justify-center gap-3 px-10 py-5
        text-[13px] font-black uppercase tracking-[0.2em]
        transition-all duration-300 shadow-lg active:scale-95
        ${
          isPrimary
            ? "bg-[var(--primary)] text-white hover:bg-[var(--buttons)]"
            : "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-gray-50"
        }
        ${className ?? ""}
      `}
    >
      <span>{label}</span>

      {/* 
          LÓGICA DINÁMICA: 
          Si existe 'icon', lo muestra. 
          Si no, muestra la flecha de siempre.
      */}
      {icon ? (
        <div className="transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      ) : (
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-2"
        />
      )}
    </Link>
  );
};

export default ActionButton;
