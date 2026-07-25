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
 tag?: string;
}

export function SectionHeading({
 title,
 subtitle,
 align = "center",
 className,
 highlightWord,
 highlightGradient = "from-white via-slate-light to-slate-medium",
 tag,
}: SectionHeadingProps) {
 const parts = highlightWord ? title.split(highlightWord) : [title];

 return (
 <div className={cn(`flex flex-col mb-16 relative z-10`, `text-${align}`, className)}>
 {tag && (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className={cn(
 "inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-zinc-400 tracking-widest uppercase",
 align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
 )}
 >
 <span className="w-1.5 h-1.5 rounded-full bg-slate-light animate-pulse shadow-[0_0_10px_rgba(164,181,190,0.8)]" />
 {tag}
 </motion.div>
 )}
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
