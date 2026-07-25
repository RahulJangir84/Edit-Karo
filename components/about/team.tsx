"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Camera, MoveRight, Bird } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  video?: string;
};

const TEAM_MEMBERS: TeamMember[] = [
 {
 name: "Alex Sterling",
 role: "Founder & Creative Director",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
 bio: "Over 8 years of experience editing for top-tier YouTubers and leading global brands.",
 },
 {
 name: "Samantha Reed",
 role: "Lead Post-Producer",
 image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
 bio: "Master of workflow optimization. Ensures every project is delivered on time, flawlessly.",
 },
 {
 name: "Marcus Chen",
 role: "Senior Motion Designer",
 image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
 bio: "Brings ideas to life with stunning 3D/2D animations that capture attention instantly.",
 },
 {
 name: "Elena Rostova",
 role: "Content Strategist",
 image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
 bio: "Data-driven thinker who analyzes algorithms to guarantee our edits hit max retention.",
 },
];

export default function Team() {
 return (
 <section className="py-32 px-6 container mx-auto relative z-10" id="team">
 <SectionHeading 
 title="Meet The Team" 
 highlightWord="Team"
 tag="06 // TEAM"
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
 className="group relative "
 >
 <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden mb-6 border border-white/10 bg-zinc-900">
 <div className="absolute inset-0 z-0">
 {member.video ? (
 <video src={member.video} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
 ) : (
 <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
 )}
 </div> 
 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
 <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-slate-light hover:text-black text-white flex items-center justify-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
 <Bird className="w-4 h-4" />
 </a>
 <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-slate-light hover:text-black text-white flex items-center justify-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
 <MoveRight className="w-4 h-4" />
 </a>
 <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-slate-light hover:text-black text-white flex items-center justify-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150">
 <Camera className="w-4 h-4" />
 </a>
 </div>
 </div>

 <div className="text-center">
 <h3 className="text-2xl font-heading font-bold text-white mb-1">{member.name}</h3>
 <p className="text-slate-light text-sm font-medium uppercase tracking-wider mb-3">{member.role}</p>
 <p className="text-gray-400 font-light text-sm leading-relaxed">{member.bio}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </section>
 );
}
