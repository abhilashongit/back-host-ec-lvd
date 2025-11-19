import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroNew from "@/components/HeroNew";
import ProblemDiagnosis from "@/components/ProblemDiagnosis";
import SolutionPromise from "@/components/SolutionPromise";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { initAllAnimations } from "@/utils/animations";

const Index = () => {
  useEffect(() => {
    // Initialize all scroll-based animations
    initAllAnimations();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroNew />
      <ProblemDiagnosis />
      <SolutionPromise />
      <Services />
      <Methodology />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
