"use client";

import { motion } from "framer-motion";

const COMPANIES = [
 "TechFlow", "UrbanDrop", "NexusGen", "Aura", "NovaMedia", "Elevate", "Velocity", "TechFlow", "UrbanDrop", "NexusGen"
];

export default function TrustedBy() {
 return (
 <section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden relative">
 <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
 <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
 
 <div className="flex w-fit animate-infinite-scroll">
 <div className="flex items-center gap-16 md:gap-32 px-8">
 {COMPANIES.map((company, i) => (
 <div key={i} className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
 <span className="font-heading text-xl md:text-2xl font-bold tracking-widest text-white whitespace-nowrap">
 {company}
 </span>
 </div>
 ))}
 </div>
 <div className="flex items-center gap-16 md:gap-32 px-8">
 {COMPANIES.map((company, i) => (
 <div key={`dup-${i}`} className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
 <span className="font-heading text-xl md:text-2xl font-bold tracking-widest text-white whitespace-nowrap">
 {company}
 </span>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
