"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Play, ArrowUpRight } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  duration: string;
}

export function VideoCard({ project }: { project: Project }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => { setIsFocused(true); setOpacity(1); };
  const handleBlur = () => { setIsFocused(false); setOpacity(0); };
  const handleMouseEnter = () => { setOpacity(1); };
  const handleMouseLeave = () => { setOpacity(0); };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-full"
    >
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2000} className="h-full">
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="group relative rounded-3xl overflow-hidden aspect-[4/5] glass border border-white/10 cursor-none h-full"
        >
          {/* Spotlight Glow Effect */}
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-30"
            style={{
              opacity,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,229,255,.15), transparent 40%)`,
            }}
          />

          <div className="absolute inset-0 bg-zinc-900 z-0"></div> {/* Replace with next/image in future */}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 scale-50 group-hover:scale-100">
            <div className="w-24 h-24 rounded-full glass flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 text-white shadow-[0_0_40px_rgba(0,229,255,0.3)]">
              <Play className="w-8 h-8 ml-1 fill-current" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 p-8 z-20 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-accent-cyan text-xs font-bold tracking-wider uppercase mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-heading font-bold text-white mb-2">{project.title}</h3>
                <span className="text-sm text-gray-400 font-medium">{project.duration}</span>
              </div>
              <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
