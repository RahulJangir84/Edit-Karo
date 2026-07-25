"use client";

import { motion } from "framer-motion";
import { Video, Sparkles, MonitorPlay, Zap } from "lucide-react";

const SERVICES = [
  { icon: Video, title: "Video Editing", desc: "High-retention editing for YouTube, Reels, and Shorts." },
  { icon: Sparkles, title: "Motion Graphics", desc: "Custom 2D/3D animations that elevate your brand identity." },
  { icon: MonitorPlay, title: "Brand Commercials", desc: "Cinematic, high-production value ads for web and TV." },
  { icon: Zap, title: "Social Strategy", desc: "We don't just edit; we strategize for maximum virality." },
];

export default function Services() {
  return (
    <section className="py-32 px-6 container mx-auto relative z-10" id="services">
      <div className="text-center mb-20">
        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase text-white tracking-tighter">
          Our <span className="text-accent-purple">Arsenal</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative p-[1px] rounded-3xl overflow-hidden cursor-none"
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-accent-purple/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="relative h-full bg-black/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-10 z-10 transition-transform duration-500 group-hover:bg-white/[0.02]">
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 border border-white/10 group-hover:border-accent-purple/50 transition-colors duration-500">
                <service.icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}