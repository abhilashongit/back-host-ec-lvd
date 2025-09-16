import { Button } from "@/components/ui/button";
import { HelpCircle, TrendingUp, Target, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="font-sans text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight animate-elegant-fade-up">
            <span className="block text-white font-brand animate-soft-glow text-shadow-soft">
              Elevate from plan to performance
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-elegant-fade-up animate-delay-200 text-shadow-soft">
            A strategy is only as strong as its execution. We specialize in developing future-proof success paths that align with your team and bridge the critical gap between your vision and tangible results.
          </p>
          
          <div className="flex justify-center animate-elegant-fade-up animate-delay-300">
            <Button 
              size="lg" 
              className="bg-white/95 backdrop-blur-sm text-consulting-dark hover:bg-white hover:shadow-premium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-500 hover:scale-105 hover-glow shadow-lg"
              onClick={() => {
                const methodologySection = document.getElementById('methodology');
                methodologySection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <HelpCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              How do you do this?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
