import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SolutionPromise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger gloss after waterfall completes (1.5s)
          setTimeout(() => setAnimationComplete(true), 1500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = ["Process", "People", "Positioning"];

  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Turn sales into a{" "}
            <span className="repeatable-word-container">
              <span className="repeatable-ghost repeatable-ghost-4">repeatable</span>
              <span className="repeatable-ghost repeatable-ghost-3">repeatable</span>
              <span className="repeatable-ghost repeatable-ghost-2">repeatable</span>
              <span className="repeatable-ghost repeatable-ghost-1">repeatable</span>
              <span className="repeatable-main">repeatable</span>
            </span>
            {" "}engine — not a prayer.
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            We rebuild the system: processes, playbooks, positioning, and people — so your team brings repeatable, predictable revenue.
          </p>
        </div>

        {/* Flow Diagram */}
        <div ref={sectionRef} className="process-flow mb-8 sm:mb-12">
          {/* Mobile version - vertical stack */}
          <div className="sm:hidden flex flex-col items-center gap-3">
            {items.map((item, index) => (
              <div key={item} className="flex flex-col items-center">
                <div 
                  className={`flow-pill ${isVisible ? 'flow-pill-visible' : ''} ${animationComplete ? 'flow-pill-gloss' : ''}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <span className="text-foreground font-semibold text-base">{item}</span>
                </div>
                {index < 2 && (
                  <div 
                    className={`flow-chevron-vertical ${isVisible ? 'flow-chevron-visible' : ''}`}
                    style={{ animationDelay: `${index * 0.3 + 0.2}s` }}
                  >
                    <ChevronRight className="w-6 h-6 text-foreground/70 rotate-90 flow-chevron-animate" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop version - horizontal */}
          <div className="hidden sm:flex items-center justify-center gap-0">
            {items.map((item, index) => (
              <div key={item} className="flex items-center">
                <div 
                  className={`flow-pill ${isVisible ? 'flow-pill-visible' : ''} ${animationComplete ? 'flow-pill-gloss' : ''}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <span className="text-foreground font-semibold text-lg lg:text-xl">{item}</span>
                </div>
                {index < 2 && (
                  <div 
                    className={`flow-chevron ${isVisible ? 'flow-chevron-visible' : ''}`}
                    style={{ animationDelay: `${index * 0.3 + 0.2}s` }}
                  >
                    <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10 text-foreground/70 flow-chevron-animate" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="https://calendly.com/theabhilashkar/the-best-fifteen-minutes-of-your-life"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Book 11 minutes
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionPromise;
