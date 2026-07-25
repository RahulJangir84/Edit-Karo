import Hero from "@/components/home/hero";
import TrustedBy from "@/components/home/trusted-by";
import Stats from "@/components/home/stats";
import Services from "@/components/home/services";
import WhyChooseUs from "@/components/home/why-choose-us";
import PortfolioPreview from "@/components/home/portfolio-preview";
import Testimonials from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";
import EmailCollector from "@/components/home/email-collector";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <TrustedBy />
      <Stats />
      <Services />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
      <FAQ />
      <EmailCollector />
      <Footer />
    </main>
  );
}