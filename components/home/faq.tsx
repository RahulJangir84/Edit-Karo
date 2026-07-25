"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQS = [
  {
    question: "What is your typical turnaround time?",
    answer: "For short-form videos (Reels/Shorts), we usually deliver within 24-48 hours. Long-form videos take 3-5 days depending on the complexity. We also offer priority delivery for urgent projects."
  },
  {
    question: "Do you offer unlimited revisions?",
    answer: "Yes! We want you to be 100% satisfied with the final product. We offer unlimited revisions as long as they align with the original project scope and brief."
  },
  {
    question: "What software do you use?",
    answer: "Our team consists of experts using industry-standard software like Adobe Premiere Pro, After Effects, DaVinci Resolve, and Final Cut Pro, ensuring the highest quality output."
  },
  {
    question: "How do I send you my raw footage?",
    answer: "We typically use secure cloud storage platforms like Google Drive, Dropbox, or Frame.io. Once you sign up, we'll set up a shared folder for seamless file transfers."
  },
  {
    question: "Can you help with content strategy?",
    answer: "Absolutely. We don't just edit; we analyze trends, retention graphs, and audience behavior to help you craft hooks and structures that maximize virality."
  }
];

export default function FAQ() {
  return (
    <section className="py-32 px-6 container mx-auto relative z-10" id="faq">
      <SectionHeading 
        title="Got Questions?" 
        highlightWord="Questions?"
        subtitle="Everything you need to know about working with us."
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto glass border border-white/10 rounded-3xl p-8 md:p-12"
      >
        <Accordion items={FAQS} />
      </motion.div>
    </section>
  );
}
