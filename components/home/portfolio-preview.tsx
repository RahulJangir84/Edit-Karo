"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { VideoCard, Project } from "@/components/ui/video-card";
import { ArrowRight } from "lucide-react";

const FEATURED_PROJECTS: Project[] = [
  { id: 1, title: "Nike Air Max Drop", category: "Ads", image: "/placeholder.jpg", duration: "0:45" },
  { id: 2, title: "Valorant Montage", category: "Gaming Videos", image: "/placeholder.jpg", duration: "2:15" },
  { id: 3, title: "MrBeast Style Retell", category: "Long Form Videos", image: "/placeholder.jpg", duration: "12:30" },
  { id: 4, title: "Tech Startup Promo", category: "Documentary Style", image: "/placeholder.jpg", duration: "3:45" },
];

export default function PortfolioPreview() {
  return (
    <section className="py-32 px-6 container mx-auto relative z-10" id="portfolio">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <SectionHeading 
          title="Featured Works" 
          highlightWord="Works"
          align="left"
          className="mb-0"
        />
        <Link href="/portfolio" className="mb-4">
          <Button variant="outline" className="gap-2">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {FEATURED_PROJECTS.map((project) => (
          <VideoCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
