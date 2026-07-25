"use client";

import { Video, Share2, Scissors, MonitorPlay, Bird, Play, Tv, Palette, Sparkles, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCard } from "@/components/ui/animated-card";

const SERVICES = [
 { icon: Video, title: "Video Editing", desc: "High-retention editing that keeps your audience hooked from start to finish." },
 { icon: Share2, title: "Social Media Marketing", desc: "Data-driven strategies to grow your brand presence across all platforms." },
 { icon: Scissors, title: "Short Form Editing", desc: "Fast-paced, engaging edits optimized for TikTok, Shorts, and Reels." },
 { icon: MonitorPlay, title: "Long Form Editing", desc: "Documentary-style and deep-dive video edits for maximum watch time." },
 { icon: Bird, title: "YouTube Editing", desc: "Thumbnails, hooks, and pacing designed specifically for the YouTube algorithm." },
 { icon: Play, title: "Instagram Reels", desc: "Trendy, aesthetic, and shareable content tailored for Instagram." },
 { icon: Tv, title: "Commercial Ads", desc: "Cinematic, high-production value commercials that convert viewers into buyers." },
 { icon: Palette, title: "Color Grading", desc: "Professional color correction and grading to give your videos a premium look." },
 { icon: Sparkles, title: "Motion Graphics", desc: "Custom 2D/3D animations and visual effects that elevate your brand identity." },
 { icon: Target, title: "Content Strategy", desc: "We don't just edit; we strategize for maximum virality and audience engagement." },
];

export default function Services() {
 return (
 <section className="py-32 px-6 container mx-auto relative z-10" id="services">
 <SectionHeading 
 title="Our Services" 
 highlightWord="Services"
 tag="01 // SERVICES"
 subtitle="We offer end-to-end video post-production tailored for modern platforms."
 />

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
 {SERVICES.map((service, i) => (
 <AnimatedCard key={i} delay={i * 0.05}>
 <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 border border-white/10 group-hover:border-slate-dark/50 transition-colors duration-500">
 <service.icon className="w-8 h-8 text-gray-300 group-hover:text-slate-light transition-colors" />
 </div>
 <h3 className="text-2xl font-heading font-bold text-white mb-4">{service.title}</h3>
 <p className="text-gray-400 text-base leading-relaxed font-light">{service.desc}</p>
 </AnimatedCard>
 ))}
 </div>
 </section>
 );
}