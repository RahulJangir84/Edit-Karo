"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
 return (
 <div className="w-full flex justify-center py-12 opacity-50 relative z-0">
 <motion.div
 initial={{ opacity: 0, scaleX: 0 }}
 whileInView={{ opacity: 1, scaleX: 1 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 1.2, ease: "easeInOut" }}
 className="w-[80%] max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-zinc-400 to-transparent"
 />
 </div>
 );
}
