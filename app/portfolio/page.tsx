import PortfolioGrid from "@/components/portfolio/grid";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Portfolio | EDITKARO.IN",
  description: "Explore our diverse range of high-converting, visually stunning video edits.",
};

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col pt-32">
      <PortfolioGrid />
      <Footer />
    </main>
  );
}
