"use client";
import Link from "next/link";
import { lora } from "@/app/fonts/fonts";
import { ArrowRight } from "lucide-react";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

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

      {icon ? (
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
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
