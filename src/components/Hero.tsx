import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Users } from "lucide-react";
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
            Elevate from
            <span className="block text-consulting-light font-brand">plan to performance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            A strategy is only as strong as its execution. We specialize in developing symbiotic roadmaps that align with your team and bridge the critical gap between your vision and tangible results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-consulting-dark hover:bg-white/90 px-8 py-4 text-lg font-semibold transition-smooth shadow-premium"
            >
              Know what we do.
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
         
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-12 w-12 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">40%+</div>
              <div className="text-white/80 font-caption">Average Revenue Increase</div>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-4">
                <Target className="h-12 w-12 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">90%</div>
              <div className="text-white/80 font-caption">Project Success Rate</div>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80 font-caption">Successful Acquisitions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
