"use client";

import { Zap, RefreshCcw, Users, Lightbulb, IndianRupee, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCard } from "@/components/ui/animated-card";

const REASONS = [
  { icon: Zap, title: "Fast Delivery", desc: "We respect your deadlines. Get your high-quality edits delivered on time, every time." },
  { icon: RefreshCcw, title: "Unlimited Revisions", desc: "We're not happy until you are. We offer unlimited revisions to ensure perfection." },
  { icon: Users, title: "Professional Editors", desc: "Work with a team of seasoned editors who understand pacing, storytelling, and trends." },
  { icon: Lightbulb, title: "Creative Team", desc: "More than just editors, we are creative partners who bring fresh ideas to your content." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium agency quality without the premium agency price tag. High ROI guaranteed." },
  { icon: HeartHandshake, title: "Client Satisfaction", desc: "Our 99% client retention rate speaks for itself. We build long-term relationships." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-6 container mx-auto relative z-10" id="why-us">
      <SectionHeading 
        title="Why Choose Us" 
        highlightWord="Choose"
        subtitle="We don't just edit videos; we engineer content designed to convert and build communities."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REASONS.map((reason, i) => (
          <AnimatedCard key={i} delay={i * 0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">{reason.title}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">{reason.desc}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
