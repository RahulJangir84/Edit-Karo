"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const STATS = [
  { value: 500, suffix: "+", label: "Videos Delivered" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
  { value: 120, suffix: "M+", label: "Total Views Generated" },
  { value: 5, suffix: "★", label: "Average Rating" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 80, damping: 20 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [isInView, value, motionVal]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v: number) => {
      if (ref.current) ref.current.textContent = Math.floor(v) + suffix;
    });
    return unsubscribe;
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-purple/5 pointer-events-none" />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block">
                <div className="font-heading text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 group-hover:from-accent-cyan group-hover:to-accent-blue transition-all duration-500">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="absolute -inset-4 bg-accent-blue/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-widest font-medium mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
