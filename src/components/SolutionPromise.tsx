import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SolutionPromise = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Turn sales into a repeatable engine — not a prayer.
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            We rebuild the system: processes, playbooks, positioning, and people — so your team brings repeatable, predictable revenue.
          </p>
        </div>

        {/* Flow Diagram - Mobile: Vertical, Desktop: Horizontal */}
        <div className="process-flow mb-8 sm:mb-12">
          {/* Mobile version - vertical stack */}
          <div className="sm:hidden flex flex-col items-center gap-4">
            {["Process", "People", "Positioning"].map((item, index) => (
              <div key={item} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg">
                  <span className="text-primary font-bold text-lg">{item}</span>
                </div>
                {index < 2 && (
                  <div className="w-1 h-8 bg-foreground my-2 relative">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-foreground"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop version - horizontal SVG */}
          <svg 
            className="hidden sm:block w-full max-w-3xl mx-auto h-40 sm:h-48 lg:h-56" 
            viewBox="0 0 800 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Three-step process flow"
          >
            {/* Node 1 - Process */}
            <g className="reveal-on-scroll">
              <circle 
                cx="150" 
                cy="100" 
                r="55" 
                fill="white"
                stroke="hsl(var(--primary))" 
                strokeWidth="4"
              />
              <text 
                x="150" 
                y="108" 
                textAnchor="middle" 
                fill="hsl(var(--primary))"
                fontSize="20"
                fontWeight="700"
              >
                Process
              </text>
            </g>

            {/* Connector 1 */}
            <path
              className="flow-path"
              d="M 210 100 L 340 100"
              stroke="hsl(var(--foreground))"
              strokeWidth="4"
              strokeLinecap="round"
              markerEnd="url(#arrowhead)"
            />

            {/* Node 2 - People */}
            <g className="reveal-on-scroll">
              <circle 
                cx="400" 
                cy="100" 
                r="55" 
                fill="white"
                stroke="hsl(var(--primary))" 
                strokeWidth="4"
              />
              <text 
                x="400" 
                y="108" 
                textAnchor="middle" 
                fill="hsl(var(--primary))"
                fontSize="20"
                fontWeight="700"
              >
                People
              </text>
            </g>

            {/* Connector 2 */}
            <path
              className="flow-path"
              d="M 460 100 L 590 100"
              stroke="hsl(var(--foreground))"
              strokeWidth="4"
              strokeLinecap="round"
              markerEnd="url(#arrowhead)"
            />

            {/* Node 3 - Positioning */}
            <g className="reveal-on-scroll">
              <circle 
                cx="650" 
                cy="100" 
                r="55" 
                fill="white"
                stroke="hsl(var(--primary))" 
                strokeWidth="4"
              />
              <text 
                x="650" 
                y="98" 
                textAnchor="middle" 
                fill="hsl(var(--primary))"
                fontSize="17"
                fontWeight="700"
              >
                Positioning
              </text>
            </g>

            {/* Arrow marker definition */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3, 0 6"
                  fill="hsl(var(--foreground))"
                />
              </marker>
            </defs>
          </svg>
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
