"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto divide-y divide-[var(--primary)]/30">
      {items.map((item, i) => (
        <div key={i} className="py-4">
          <button
            onClick={() => toggleItem(i)}
            className="flex w-full items-center justify-between text-left font-serif text-lg md:text-xl text-foreground hover:text-[var(--buttons)] transition-colors"
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                openIndex === i
                  ? "rotate-180 text-[var(--buttons)]"
                  : "text-[var(--primary)]"
              }`}
            />
          </button>
          <div
            className={`mt-3 text-sm md:text-base text-muted-foreground leading-relaxed transition-all duration-500 ${
              openIndex === i
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
