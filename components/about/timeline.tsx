"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const TIMELINE = [
  {
    year: "Step 1",
    title: "Discovery & Strategy",
    desc: "We analyze your brand, target audience, and goals to create a tailored content strategy that guarantees results.",
  },
  {
    year: "Step 2",
    title: "Asset Collection",
    desc: "Securely upload your raw footage, brand assets, and guidelines to our dedicated cloud portal.",
  },
  {
    year: "Step 3",
    title: "Creative Post-Production",
    desc: "Our editors work their magic—cutting, pacing, color grading, sound designing, and adding motion graphics.",
  },
  {
    year: "Step 4",
    title: "Review & Refine",
    desc: "We use Frame.io for seamless, frame-accurate feedback. You get unlimited revisions until it's perfect.",
  },
  {
    year: "Step 5",
    title: "Final Delivery",
    desc: "Receive the final optimized files, ready to be published and dominate the algorithms.",
  },
];

export default function Timeline() {
  return (
    <section className="py-32 px-6 container mx-auto relative z-10" id="process">
      <SectionHeading 
        title="Our Process" 
        highlightWord="Process"
        subtitle="A streamlined, battle-tested workflow designed for speed, quality, and zero headaches."
      />

      <div className="max-w-4xl mx-auto relative mt-16">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2" />

        {TIMELINE.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-start md:items-center justify-between mb-12 w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } flex-row`}
          >
            {/* Empty space for alternating layout */}
            <div className="hidden md:block w-5/12" />

            {/* Glowing Dot */}
            <div className="absolute left-[11px] md:left-1/2 w-3 h-3 bg-accent-cyan rounded-full md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_15px_rgba(0,255,194,0.8)] z-10" />

            {/* Content Box */}
            <div className="w-11/12 md:w-5/12 pl-8 md:pl-0 glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
              <span className="text-accent-blue font-bold tracking-widest text-sm uppercase mb-2 block">
                {item.year}
              </span>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
