"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Camera, MoveRight, Bird } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Alex Sterling",
    role: "Founder & Creative Director",
    image: "/placeholder.jpg",
    bio: "Over 8 years of experience editing for top-tier YouTubers and leading global brands.",
  },
  {
    name: "Samantha Reed",
    role: "Lead Post-Producer",
    image: "/placeholder.jpg",
    bio: "Master of workflow optimization. Ensures every project is delivered on time, flawlessly.",
  },
  {
    name: "Marcus Chen",
    role: "Senior Motion Designer",
    image: "/placeholder.jpg",
    bio: "Brings ideas to life with stunning 3D/2D animations that capture attention instantly.",
  },
  {
    name: "Elena Rostova",
    role: "Content Strategist",
    image: "/placeholder.jpg",
    bio: "Data-driven thinker who analyzes algorithms to guarantee our edits hit max retention.",
  },
];

export default function Team() {
  return (
    <section className="py-32 px-6 container mx-auto relative z-10" id="team">
      <SectionHeading 
        title="Meet The Team" 
        highlightWord="Team"
        subtitle="The creative minds working relentlessly behind the scenes."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
        {TEAM_MEMBERS.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative cursor-none"
          >
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden mb-6 border border-white/10">
              <div className="absolute inset-0 bg-zinc-900 z-0"></div>               
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-cyan hover:text-black text-white flex items-center justify-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Bird className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-cyan hover:text-black text-white flex items-center justify-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                  <MoveRight className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-cyan hover:text-black text-white flex items-center justify-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150">
                  <Camera className="w-4 h-4" />
                </a>
              </div>
            </div>

                        <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-1">{member.name}</h3>
              <p className="text-accent-cyan text-sm font-medium uppercase tracking-wider mb-3">{member.role}</p>
              <p className="text-gray-400 font-light text-sm leading-relaxed">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
