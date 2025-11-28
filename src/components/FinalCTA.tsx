import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-hero text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Conversational flow */}
        <div className="space-y-6 sm:space-y-8">
          {/* Opening line - soft, inviting */}
          <p className="text-base sm:text-lg text-white/70 font-medium tracking-wide">
            Ready to stop guessing?
          </p>
          
          {/* Main Headline - conversational, not salesy */}
          <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let's find out if we can help
            <span className="block mt-2 text-white/90">— in just eleven minutes.</span>
          </h2>

          {/* Honest, human subtext */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            No pitch deck. No pressure. Just an honest conversation about what's working, 
            what isn't, and whether we're the right fit.
          </p>

          {/* Trust signals - inline, subtle */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base text-white/60 pt-2">
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
                className="bg-white text-foreground hover:bg-white/95 px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg md:text-xl font-bold rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Book your eleven minutes
                <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
          </div>

          {/* Soft closing */}
          <p className="text-white/50 text-xs sm:text-sm pt-2">
            We keep our calendar limited. If you're serious, let's talk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
