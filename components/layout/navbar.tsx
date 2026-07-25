"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to trigger glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled ? "py-4 glass border-b border-white/5" : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-[110] group cursor-none">
            <span className="font-heading text-2xl font-bold tracking-tighter text-white">
              EDITKARO<span className="text-accent-cyan">.IN</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group cursor-none"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 ease-out group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="w-[1px] h-6 bg-white/20 mx-2" />

            <Link href="/contact" className="relative px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] cursor-none">
              Get Started
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-[110] text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[105] bg-background/95 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            {/* Ambient background glows for drawer */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-accent-purple/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-blue/20 rounded-full blur-[100px] pointer-events-none" />

            <nav className="relative z-10 flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl md:text-5xl font-heading font-bold text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: NAV_LINKS.length * 0.1, ease: "easeOut" }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <Link 
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-4 text-center bg-accent-blue text-black font-semibold text-lg rounded-full"
                >
                  Get Started
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}