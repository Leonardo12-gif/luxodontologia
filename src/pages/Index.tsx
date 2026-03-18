import HeroSection from "@/components/HeroSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import UnitsSection from "@/components/UnitsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-[480px] mx-auto">
      <HeroSection />
      <DifferentialsSection />
      <UnitsSection />
      <BeforeAfterSection />
      <CtaSection />
      <FooterSection />
    </div>
  </div>
);

export default Index;
