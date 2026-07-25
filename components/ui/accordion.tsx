"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group cursor-none"
      >
        <span className={cn(
          "text-lg md:text-xl font-medium transition-colors duration-300",
          isOpen ? "text-accent-cyan" : "text-white group-hover:text-gray-300"
        )}>
          {question}
        </span>
        <div className={cn(
          "w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan rotate-180" : "text-gray-400 group-hover:border-white/30"
        )}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ items, className }: { items: { question: string, answer: string }[], className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
