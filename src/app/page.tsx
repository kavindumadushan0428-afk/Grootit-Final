import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#091326]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
