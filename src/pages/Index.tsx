import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroNew from "@/components/HeroNew";
import ProblemDiagnosis from "@/components/ProblemDiagnosis";
import SolutionPromise from "@/components/SolutionPromise";
import BenefitsCards from "@/components/BenefitsCards";
import ProcessTimeline from "@/components/ProcessTimeline";
import Differentiation from "@/components/Differentiation";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { initAllAnimations } from "@/utils/animations";

const Index = () => {
  useEffect(() => {
    // Initialize all scroll-based animations
    initAllAnimations();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingCTA />
      <HeroNew />
      <ProblemDiagnosis />
      <SolutionPromise />
      <BenefitsCards />
      <ProcessTimeline />
      <Differentiation />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
