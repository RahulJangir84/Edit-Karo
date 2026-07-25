"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    role: "Founder, UrbanDrop Streetwear",
    text: "Editkaro literally 3x'd our Reels engagement in the first month. The edits are cinematic, fast, and perfectly on-brand. Our ROAS went from 1.8 to 4.2x.",
    avatar: "AM",
    color: "from-accent-blue to-accent-cyan",
  },
  {
    name: "Priya Sharma",
    role: "Content Creator — 2.1M Subscribers",
    text: "I've worked with editors all over the world. Editkaro is in a different league. They understand pacing, storytelling, and retention hooks better than anyone.",
    avatar: "PS",
    color: "from-accent-purple to-accent-blue",
  },
  {
    name: "Ravi Kapoor",
    role: "Marketing Head, TechFlow SaaS",
    text: "Our product explainer videos went from 40% drop-off to 85% watch-through after Editkaro handled post-production. Absolutely elite quality.",
    avatar: "RK",
    color: "from-accent-cyan to-accent-purple",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="testimonials">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeading 
          title="What Clients Say" 
          highlightWord="Say"
          className="mb-16"
        />

        <div className="relative glass border border-white/10 rounded-3xl p-10 md:p-16 overflow-hidden">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-white/5" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-10">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-3">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-black font-bold text-lg`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold font-heading">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8 items-center">
          <button onClick={prev} className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-accent-cyan/50 hover:text-accent-cyan transition-all duration-300 cursor-none">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all duration-300 cursor-none ${i === current ? "bg-accent-cyan w-6" : "bg-white/20"}`} />
            ))}
          </div>
          <button onClick={next} className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-accent-cyan/50 hover:text-accent-cyan transition-all duration-300 cursor-none">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
