import AboutHero from "@/components/about/about-hero";
import Timeline from "@/components/about/timeline";
import Team from "@/components/about/team";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "About Us | EDITKARO.IN",
  description: "Learn about our mission, vision, and the team behind the edits.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-32">
      <AboutHero />
      <Timeline />
      <Team />
      <Footer />
    </main>
  );
}
