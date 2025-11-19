import Navigation from "@/components/Navigation";
import HeroNew from "@/components/HeroNew";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroNew />
      <Services />
      <Methodology />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
