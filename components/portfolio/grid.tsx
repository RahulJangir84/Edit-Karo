"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VideoCard, Project } from "@/components/ui/video-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  "All", 
  "Short Form", 
  "Long Form", 
  "Gaming Videos", 
  "Football Edits", 
  "eCommerce Ads", 
  "Documentary Style", 
  "Color Grading", 
  "Anime Videos", 
  "Ads"
];

// Placeholder data covering all categories
const PORTFOLIO_DATA: Project[] = [
  { id: 1, title: "Nike Air Max Drop", category: "Ads", image: "/placeholder.jpg", duration: "0:45" },
  { id: 2, title: "Valorant Montage", category: "Gaming Videos", image: "/placeholder.jpg", duration: "2:15" },
  { id: 3, title: "MrBeast Style Retell", category: "Long Form", image: "/placeholder.jpg", duration: "12:30" },
  { id: 4, title: "Tech Startup Promo", category: "Documentary Style", image: "/placeholder.jpg", duration: "3:45" },
  { id: 5, title: "Podcast Highlights", category: "Short Form", image: "/placeholder.jpg", duration: "0:59" },
  { id: 6, title: "Messi World Cup Edit", category: "Football Edits", image: "/placeholder.jpg", duration: "1:15" },
  { id: 7, title: "Summer Sale 2026", category: "eCommerce Ads", image: "/placeholder.jpg", duration: "0:30" },
  { id: 8, title: "Cinematic Travel Log", category: "Color Grading", image: "/placeholder.jpg", duration: "4:20" },
  { id: 9, title: "Jujutsu Kaisen AMV", category: "Anime Videos", image: "/placeholder.jpg", duration: "2:45" },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = activeCategory === "All" 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(p => p.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section className="py-20 px-6 container mx-auto relative z-10" id="portfolio">
      <SectionHeading 
        title="Our Masterpieces" 
        highlightWord="Masterpieces"
        subtitle="Explore our diverse range of high-converting, visually stunning video edits."
      />

      {/* Floating Animated Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(6); // Reset pagination on category change
            }}
            className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 cursor-none z-10 ${
              activeCategory === cat ? "text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            <span className="relative z-20">{cat}</span>
            {activeCategory === cat && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-white rounded-full z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {activeCategory !== cat && (
              <div className="absolute inset-0 rounded-full border border-white/10 glass z-0" />
            )}
          </button>
        ))}
      </div>

      {/* Grid with Spotlight Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <VideoCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-16 text-center">
          <Button onClick={handleLoadMore} variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>
      )}
      
      {!hasMore && filteredProjects.length > 0 && (
        <p className="text-center text-gray-500 mt-16 font-light">You've reached the end of the portfolio.</p>
      )}

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 mt-16 font-light">No projects found in this category yet.</p>
      )}
    </section>
  );
}