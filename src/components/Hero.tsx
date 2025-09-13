import { Button } from "@/components/ui/button";
import { Lightbulb, TrendingUp, Target, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="block text-consulting-light font-brand">Elevate from plan to performance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            A strategy is only as strong as its execution. We specialize in developing future-proof success paths that align with your team and bridge the critical gap between your vision and tangible results.
          </p>
          
          <div className="flex justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-consulting-dark hover:bg-white/90 px-8 py-4 text-lg font-semibold transition-smooth shadow-premium"
              onClick={() => {
                const methodologySection = document.getElementById('methodology');
                methodologySection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Lightbulb className="mr-2 h-5 w-5" />
              Schedule Strategic Consultation
            </Button>
          </div>
          
          {/* What sets us apart */}
          <div className="mt-20">
            <h2 className="font-brand text-4xl md:text-5xl font-bold text-white text-center">
              What sets us apart?
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
