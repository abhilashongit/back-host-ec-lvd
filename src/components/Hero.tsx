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
        {/* Smooth blur merge to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/50 to-white backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] sm:leading-tight animate-gradient-fill">
            <span className="block text-white font-brand text-shadow-soft">
              Plumbing your business processes and fixing the revenue leaks for B2B companies.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-white/95 max-w-5xl mx-auto leading-relaxed animate-kinematic-beat text-shadow-soft px-2">
            Problems lie in how we do it more than what we do. By point-testing your business processes and operations, you can not only save but also earn more. And who doesn't like more money?
          </p>
          
          <div className="flex justify-center animate-pipe-fill pt-4">
            <Button 
              size="lg" 
              className="relative overflow-hidden bg-transparent border-2 border-white/95 text-white hover:shadow-premium px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold min-h-[60px] rounded-xl pipe-fill-button"
              onClick={() => {
                const methodologySection = document.getElementById('methodology');
                methodologySection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10 flex items-center pipe-fill-text">
                <HelpCircle className="mr-3 h-6 w-6 sm:h-7 sm:w-7" />
                How do you do this?
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
