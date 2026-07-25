import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Stats from "@/components/home/stats";
import PortfolioGrid from "@/components/portfolio/grid";
import Testimonials from "@/components/home/testimonials";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Stats />
      <Services />
      <PortfolioGrid />
      <Testimonials />
      <Footer />
    </main>
  );
}