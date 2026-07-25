"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Magnetic from "@/components/ui/magnetic";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-accent-blue/30 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[20%] w-[50vw] h-[50vw] bg-accent-purple/30 rounded-full blur-[150px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] bg-accent-cyan/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full glass border border-white/10 text-white text-sm tracking-widest uppercase font-medium backdrop-blur-xl"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          Editkaro.in Agency
        </motion.div>

        <h2 className="font-heading text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8 uppercase text-white flex flex-col items-center">

  <motion.span
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1,
      delay: 0.1,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="block overflow-hidden"
  >
    Stories That
  </motion.span>

  <motion.span
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1,
      delay: 0.25,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="block pb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500"
  >
    Stop The Scroll.
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
            <button className="group relative px-10 py-5 bg-white text-black font-semibold rounded-full overflow-hidden flex items-center gap-3 cursor-none">
              <span className="relative z-10">View Our Work</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="absolute inset-0 bg-accent-cyan translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-full" />
            </button>
          </Magnetic>
          
          <Magnetic strength={40}>
            <button className="group px-8 py-5 glass text-white font-semibold rounded-full border border-white/10 transition-all hover:bg-white/10 flex items-center gap-3 cursor-none backdrop-blur-xl">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-purple group-hover:scale-110 transition-all duration-300">
                <Play className="w-4 h-4 fill-current" />
              </div>
              Watch Showreel
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}