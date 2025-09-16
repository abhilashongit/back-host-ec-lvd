import { Button } from "@/components/ui/button";
import { HelpCircle, TrendingUp, Target, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
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
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] sm:leading-tight animate-elegant-fade-up">
            <span className="block text-white font-brand animate-soft-glow text-shadow-soft">
              Elevate from plan to performance
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-white/95 max-w-5xl mx-auto leading-relaxed animate-elegant-fade-up animate-delay-200 text-shadow-soft px-2">
            A strategy is only as strong as its execution. We specialize in developing future-proof success paths that align with your team and bridge the critical gap between your vision and tangible results.
          </p>
          
          <div className="flex justify-center animate-elegant-fade-up animate-delay-300 pt-4">
            <Button 
              size="lg" 
              className="bg-white/95 backdrop-blur-sm text-consulting-dark hover:bg-white hover:shadow-premium px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold transition-all duration-500 hover:scale-105 hover-glow shadow-lg min-h-[60px] rounded-xl"
              onClick={() => {
                const methodologySection = document.getElementById('methodology');
                methodologySection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <HelpCircle className="mr-3 h-6 w-6 sm:h-7 sm:w-7" />
              How do you do this?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
