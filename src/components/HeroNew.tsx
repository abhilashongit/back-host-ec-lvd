import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const HeroNew = () => {
  useEffect(() => {
    // Add hero-ready class after DOMContentLoaded for animation trigger
    requestAnimationFrame(() => {
      document.documentElement.classList.add('hero-ready');
    });

    // CTA pulse animation (after 6s, stops on interaction)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const cta = document.querySelector('.cta-primary');
      if (cta) {
        const t = setTimeout(() => cta.classList.add('cta-pulse'), 6000);

        const stop = () => {
          clearTimeout(t);
          cta.classList.remove('cta-pulse');
          window.removeEventListener('mousemove', stop);
          window.removeEventListener('keydown', stop);
          window.removeEventListener('touchstart', stop);
        };

        ['mousemove', 'keydown', 'touchstart'].forEach(evt => 
          window.addEventListener(evt, stop, { once: true })
        );

        return () => {
          clearTimeout(t);
          ['mousemove', 'keydown', 'touchstart'].forEach(evt => 
            window.removeEventListener(evt, stop)
          );
        };
      }
    }
  }, []);

  const scrollToMethodology = () => {
    const section = document.getElementById('methodology');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero SVG Illustration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg 
          className="hero-svg w-full max-w-4xl h-auto" 
          viewBox="0 0 800 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Elevator shaft */}
          <rect 
            x="350" 
            y="100" 
            width="100" 
            height="400" 
            fill="hsl(var(--muted))" 
            opacity="0.3"
            rx="8"
          />
          
          {/* Panel 1 - Process */}
          <g className="hero-panel hero-panel--float" style={{ "--float-delay": "0s" } as React.CSSProperties}>
            <rect 
              x="150" 
              y="200" 
              width="140" 
              height="120" 
              fill="hsl(var(--primary))" 
              opacity="0.15"
              rx="12"
            />
            <text 
              x="220" 
              y="265" 
              textAnchor="middle" 
              fill="hsl(var(--primary))"
              fontSize="18"
              fontWeight="600"
            >
              Process
            </text>
          </g>

          {/* Panel 2 - Team */}
          <g className="hero-panel hero-panel--float" style={{ "--float-delay": "0.6s" } as React.CSSProperties}>
            <rect 
              x="330" 
              y="150" 
              width="140" 
              height="120" 
              fill="hsl(var(--secondary))" 
              opacity="0.15"
              rx="12"
            />
            <text 
              x="400" 
              y="215" 
              textAnchor="middle" 
              fill="hsl(var(--secondary-foreground))"
              fontSize="18"
              fontWeight="600"
            >
              Team
            </text>
          </g>

          {/* Panel 3 - Market */}
          <g className="hero-panel hero-panel--float" style={{ "--float-delay": "1.2s" } as React.CSSProperties}>
            <rect 
              x="510" 
              y="200" 
              width="140" 
              height="120" 
              fill="hsl(var(--accent))" 
              opacity="0.15"
              rx="12"
            />
            <text 
              x="580" 
              y="265" 
              textAnchor="middle" 
              fill="hsl(var(--accent-foreground))"
              fontSize="18"
              fontWeight="600"
            >
              Market
            </text>
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="space-y-8">
          {/* Hero Headline */}
          <h1 className="font-brand text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Stop relying on agents, referrals, and luck to make your next sale.
          </h1>
          
          {/* Hero Subhead */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-foreground/90 font-semibold max-w-4xl mx-auto leading-snug">
            Build a self-sustaining sales engine your team runs — without agencies.
          </p>
          
          {/* Supporting Line */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We retrain your people, rewire your sales process, and reposition your product so revenue stops depending on chance.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a 
              href="https://calendly.com/theabhilashkar/the-best-fifteen-minutes-of-your-life"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="cta-primary bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold min-h-[56px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book 11 minutes
              </Button>
            </a>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToMethodology}
              className="px-8 py-6 text-lg font-semibold min-h-[56px] rounded-xl border-2 hover:bg-accent/10 transition-all duration-300"
            >
              See the playbook
            </Button>
          </div>
        </div>
      </div>

      {/* Smooth blur merge to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-background/50 to-background backdrop-blur-sm"></div>
    </section>
  );
};

export default HeroNew;
