"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
 children: React.ReactNode;
 className?: string;
 delay?: number;
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
 const cardRef = useRef<HTMLDivElement>(null);
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
 if (cardRef.current) {
 const rect = cardRef.current.getBoundingClientRect();
 setMousePosition({
 x: e.clientX - rect.left,
 y: e.clientY - rect.top,
 });
 }
 };

 return (
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.6, delay }}
 ref={cardRef}
 onMouseMove={handleMouseMove}
 className={cn(
 "group relative rounded-3xl overflow-hidden glass transition-colors duration-500 hover:bg-white/[0.04]",
 className
 )}
 >
 <div
 className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
 style={{
 background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(125,145,154,0.15), transparent 40%)`
 }}
 />

 <div className="relative z-10 h-full p-8 md:p-10 flex flex-col">
 {children}
 </div>
 </motion.div>
 );
}
