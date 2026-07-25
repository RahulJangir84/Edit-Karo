"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Target, Eye, ShieldCheck } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="py-20 px-6 container mx-auto relative z-10" id="about-hero">
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <SectionHeading 
        title="We Are Editkaro" 
        highlightWord="Editkaro"
        subtitle="We blend creativity, strategy, and cinematic production to craft stories that don't just look good—they perform."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
        <AnimatedCard delay={0.1} className="h-full">
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 border border-white/10 group-hover:border-accent-cyan/50 transition-colors duration-500">
            <Target className="w-8 h-8 text-accent-cyan" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-400 leading-relaxed font-light">
            To empower brands and creators with high-retention, conversion-focused video content that dominates algorithms and builds loyal communities.
          </p>
        </AnimatedCard>

        <AnimatedCard delay={0.2} className="h-full">
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 border border-white/10 group-hover:border-accent-purple/50 transition-colors duration-500">
            <Eye className="w-8 h-8 text-accent-purple" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Vision</h3>
          <p className="text-gray-400 leading-relaxed font-light">
            To be the global benchmark for creative post-production, setting the standard for how stories are told in the fast-paced digital era.
          </p>
        </AnimatedCard>

        <AnimatedCard delay={0.3} className="h-full">
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 border border-white/10 group-hover:border-accent-blue/50 transition-colors duration-500">
            <ShieldCheck className="w-8 h-8 text-accent-blue" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-4">Core Values</h3>
          <p className="text-gray-400 leading-relaxed font-light">
            Speed without compromising quality. Absolute transparency. Obsessive attention to detail. And a relentless drive for client success.
          </p>
        </AnimatedCard>
      </div>
    </section>
  );
}
