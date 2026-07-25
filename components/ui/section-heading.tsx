"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  highlightWord?: string;
  highlightGradient?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  highlightWord,
  highlightGradient = "from-white via-neutral-300 to-neutral-500",
}: SectionHeadingProps) {
  // Simple logic: if highlightWord is provided, split the title by it.
  const parts = highlightWord ? title.split(highlightWord) : [title];

  return (
    <div className={cn(`flex flex-col mb-16 relative z-10`, `text-${align}`, className)}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-white leading-[1.1]"
      >
        {highlightWord && parts.length > 1 ? (
          <>
            {parts[0]}
            <span className={cn(`text-transparent bg-clip-text bg-gradient-to-r`, highlightGradient)}>
              {highlightWord}
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            "text-gray-400 text-lg md:text-xl font-light mt-6",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
