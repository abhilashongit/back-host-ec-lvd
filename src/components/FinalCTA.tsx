import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-hero text-white overflow-hidden relative">
      {/* Gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 lg:h-48 bg-gradient-to-b from-background via-primary/30 to-transparent pointer-events-none"></div>
      
      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 lg:h-48 bg-gradient-to-b from-transparent via-primary/30 to-muted/50 pointer-events-none"></div>
      
      {/* Glassmorphism background effects with bokeh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bokeh-orb absolute top-1/4 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="bokeh-orb absolute bottom-1/4 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl" style={{ animationDelay: '4s' }}></div>
        <div className="bokeh-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-white/5 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="bokeh-orb absolute top-1/3 right-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-white/8 rounded-full blur-3xl" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glassmorphic card container */}
        <div className="glass-card-premium rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 backdrop-blur-xl bg-white/5 border border-white/20 shadow-2xl text-center">
          {/* Conversational flow */}
          <div className="space-y-5 sm:space-y-7">
            {/* Opening line - soft, inviting */}
            <p className="text-sm sm:text-base md:text-lg text-white/70 font-medium tracking-wide uppercase">
              Ready to stop guessing?
            </p>
            
            {/* Main Headline - matches brand font */}
            <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Change starts here
              <span className="block mt-2 text-white/90">— in just eleven minutes.</span>
            </h2>

            {/* Honest, human subtext */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              No pitch deck. No pressure. Just an honest conversation about what's working, 
              what isn't, and whether we're the right fit.
            </p>

            {/* Trust signals - inline, subtle */}
            <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm md:text-base text-white/60 pt-2">
              <span>Zero obligation</span>
              <span className="hidden sm:inline">•</span>
              <span>Real answers</span>
              <span className="hidden sm:inline">•</span>
              <span>Your time respected</span>
            </div>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6">
              <a 
                href="https://calendly.com/theabhilashkar/the-best-fifteen-minutes-of-your-life"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-white text-foreground hover:bg-white/95 px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg font-bold rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  Book your eleven minutes
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>

            {/* Soft closing */}
            <p className="text-white/50 text-xs sm:text-sm pt-2">
              We keep our calendar limited. If you're serious, let's talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
