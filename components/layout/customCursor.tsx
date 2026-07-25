"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
 const cursorX = useMotionValue(-100);
 const cursorY = useMotionValue(-100);
 
 const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
 const cursorXSpring = useSpring(cursorX, springConfig);
 const cursorYSpring = useSpring(cursorY, springConfig);
 
 const [isHovering, setIsHovering] = useState(false);

 useEffect(() => {
 const updateMousePosition = (e: MouseEvent) => {
 cursorX.set(e.clientX - 16);
 cursorY.set(e.clientY - 16);
 };

 const handleMouseOver = (e: MouseEvent) => {
 if ((e.target as HTMLElement).tagName?.toLowerCase() === 'a' || 
 (e.target as HTMLElement).tagName?.toLowerCase() === 'button') {
 setIsHovering(true);
 } else {
 setIsHovering(false);
 }
 };

 window.addEventListener("mousemove", updateMousePosition);
 window.addEventListener("mouseover", handleMouseOver);

 return () => {
 window.removeEventListener("mousemove", updateMousePosition);
 window.removeEventListener("mouseover", handleMouseOver);
 };
 }, [cursorX, cursorY]);

 return (
 <motion.div
 className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
 style={{
 x: cursorXSpring,
 y: cursorYSpring,
 }}
 animate={{
 scale: isHovering ? 1.5 : 1,
 backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 0)",
 }}
 transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
 >
 <motion.div 
 animate={{ scale: isHovering ? 0 : 1 }}
 className="w-1 h-1 bg-white rounded-full" 
 />
 </motion.div>
 );
}