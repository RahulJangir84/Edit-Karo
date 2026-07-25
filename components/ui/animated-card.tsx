"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "group relative p-[1px] rounded-3xl overflow-hidden cursor-none",
        className
      )}
    >
      {/* Animated Gradient Border on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-accent-purple/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl z-0" />
      
      {/* Inner Card */}
      <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 z-10 transition-transform duration-500 group-hover:bg-white/[0.02] flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
