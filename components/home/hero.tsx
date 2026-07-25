"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Magnetic from "@/components/ui/magnetic";
import { useRouter } from "next/navigation";

export default function Hero() {
 const containerRef = useRef(null);
 const router = useRouter();
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start start", "end start"],
 });

 const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
 const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

 return (
 <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
 <div className="absolute inset-0 z-0 flex justify-center items-center opacity-40">
 <div className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-zinc-500 to-transparent left-[20%]" />
 <div className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-zinc-500 to-transparent right-[20%]" />
 <div className="absolute top-[30%] w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />

 <div className="absolute top-[10%] left-[30%] w-[30vw] h-[30vw] bg-zinc-400/20 rounded-full blur-[120px] mix-blend-screen" />
 <div className="absolute bottom-[20%] right-[30%] w-[40vw] h-[40vw] bg-zinc-300/10 rounded-full blur-[150px] mix-blend-screen" />
 </div>

 <motion.div
 style={{ y, opacity }}
 className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12"
 >
 <motion.div
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
 className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-zinc-300 text-xs font-mono tracking-[0.2em] uppercase shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-slate-light animate-pulse shadow-[0_0_10px_rgba(164,181,190,0.8)]" />
 SYSTEM // V1.0.0
 </motion.div>

 <h2 className="font-heading text-[9vw] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 uppercase text-white flex flex-col items-center">

 <motion.span
 initial={{ opacity: 0, y: 100 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{
 duration: 1,
 delay: 0.1,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="block overflow-hidden text-center"
 >
 Creative Video Editing
 </motion.span>

 <motion.span
 initial={{ opacity: 0, y: 100 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{
 duration: 1,
 delay: 0.25,
 ease: [0.16, 1, 0.3, 1],
 }}
 className="block pb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-light to-slate-medium text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2"
 >
 That Makes Your Brand Stand Out
 </motion.span>

 </h2>

 <motion.p
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 1, delay: 0.5 }}
 className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 font-light"
 >
 We craft scroll-stopping edits, cinematic commercials, and viral social content for brands that demand to stand out.
 </motion.p>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.6 }}
 className="flex flex-col sm:flex-row gap-6 items-center"
 >
 <Magnetic strength={60}>
 <button onClick={() => router.push("/portfolio")} className="group relative px-10 py-5 bg-white text-black font-semibold rounded-full overflow-hidden flex items-center gap-3 ">
 <span className="relative z-10">View Portfolio</span>
 <div className="relative z-10 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
 <ArrowUpRight className="w-4 h-4" />
 </div>
 <div className="absolute inset-0 bg-slate-light translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-full" />
 </button>
 </Magnetic>

 <Magnetic strength={40}>
 <button className="group px-8 py-5 glass text-white font-semibold rounded-full border border-white/10 transition-all hover:bg-white/10 flex items-center gap-3 backdrop-blur-xl">
 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-slate-dark group-hover:scale-110 transition-all duration-300">
 <Play className="w-4 h-4 fill-current" />
 </div>
 Contact Us
 </button>
 </Magnetic>
 </motion.div>
 </motion.div>
 </section>
 );
}