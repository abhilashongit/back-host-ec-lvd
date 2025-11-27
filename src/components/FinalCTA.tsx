import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-hero text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* The Hook */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">Not 15. Not 30. Just eleven.</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="font-brand text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Eleven minutes.
          <br />
          <span className="text-white/90">That's all we need.</span>
        </h2>

        {/* Subtext */}
        <p className="text-xl sm:text-2xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
          In eleven minutes, we'll tell you exactly what's broken in your sales engine — 
          and whether we can fix it. No pitch. No pressure. Just clarity.
        </p>

        {/* Value Props */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 text-white/80">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span>Zero commitment</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span>Honest assessment</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span>Immediate clarity</span>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="https://calendly.com/theabhilashkar/the-best-fifteen-minutes-of-your-life"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            size="lg"
            className="bg-white text-consulting-dark hover:bg-white/95 px-10 py-7 text-xl font-bold rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            Book Your Eleven Minutes
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </a>

        {/* Urgency Note */}
        <p className="text-white/60 text-sm mt-6">
          Limited slots available each week. Serious inquiries only.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
