"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Play,Bird ,ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = [
 { label: "Home", href: "/" },
 { label: "Portfolio", href: "/portfolio" },
 { label: "About", href: "/about" },
 { label: "Contact", href: "/contact" },
];

const SOCIALS = [
 { icon: Rocket, href: "https://instagram.com/editkaro.in", label: "Instagram" },
 { icon: Play, href: "https://youtube.com", label: "YouTube" },
 { icon: Bird, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
 return (
 <footer className="relative pt-24 pb-8 px-6 overflow-hidden border-t border-white/5" id="contact">
 <div className="container mx-auto mb-20">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center glass border border-white/10"
 >
 <div className="absolute inset-0 bg-gradient-to-br from-slate-medium/10 via-transparent to-slate-dark/10 pointer-events-none" />
 <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none uppercase mb-6 relative z-10">
 Ready to
 <br />
 <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
 Stop The Scroll?
 </span>
</h2>
 <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
 Let&apos;s build content that converts. Book a free discovery call and get a custom edit strategy.
 </p>
 <Link
 href="/contact"
 className="relative z-10 inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-semibold rounded-full hover:bg-slate-light transition-colors duration-300 group "
 >
 Book Discovery Call
 <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
 </Link>
 </motion.div>
 </div>

 <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
 <span className="font-heading font-bold text-white text-xl tracking-tighter">
 EDITKARO<span className="text-slate-light">.IN</span>
 </span>

 <nav className="flex gap-6 flex-wrap justify-center">
 {FOOTER_LINKS.map((l) => (
 <Link key={l.label} href={l.href} className="hover:text-white transition-colors ">
 {l.label}
 </Link>
 ))}
 </nav>

 <div className="flex gap-4">
 {SOCIALS.map(({ icon: Icon, href, label }) => (
 <a
 key={label}
 href={href}
 target="_blank"
 rel="noopener noreferrer"
 aria-label={label}
 className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-slate-light hover:border-slate-light/50 transition-all duration-300 "
 >
 <Icon className="w-4 h-4" />
 </a>
 ))}
 </div>
 </div>

 <p className="text-center text-gray-600 text-xs mt-8">
 © {new Date().getFullYear()} Editkaro.in. All rights reserved.
 </p>
 </footer>
 );
}
