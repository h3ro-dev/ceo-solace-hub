import { HeroSection } from "@/components/sections/HeroSection"
import { PainSection } from "@/components/sections/PainSection"
import { IsolationSection } from "@/components/sections/IsolationSection"
import { SolutionSection } from "@/components/sections/SolutionSection"
import { ConversionForm } from "@/components/sections/ConversionForm"
import { Footer } from "@/components/sections/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainSection />
      <IsolationSection />
      <SolutionSection />
      <ConversionForm />
      <Footer />
    </div>
  );
};

export default Index;
