import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import UnitsSection from "@/components/UnitsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";
import ColorToggle from "@/components/ColorToggle";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", !isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <div className="max-w-[480px] mx-auto">
        <HeroSection />
        <DifferentialsSection />
        <ColorToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        <UnitsSection />
        <BeforeAfterSection />
        <CtaSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
