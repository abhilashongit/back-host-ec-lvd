import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SolutionPromise = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Turn sales into a repeatable engine — not a prayer.
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            We rebuild the system: processes, playbooks, positioning, and people — so your team brings repeatable, predictable revenue.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="process-flow mb-12">
          <svg 
            className="w-full max-w-3xl mx-auto h-48 sm:h-56" 
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
                r="60" 
                fill="hsl(var(--primary))" 
                opacity="0.15"
              />
              <circle 
                cx="150" 
                cy="100" 
                r="60" 
                stroke="hsl(var(--primary))" 
                strokeWidth="3"
                fill="none"
              />
              <text 
                x="150" 
                y="105" 
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
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#arrowhead)"
            />

            {/* Node 2 - People */}
            <g className="reveal-on-scroll">
              <circle 
                cx="400" 
                cy="100" 
                r="60" 
                fill="hsl(var(--secondary))" 
                opacity="0.15"
              />
              <circle 
                cx="400" 
                cy="100" 
                r="60" 
                stroke="hsl(var(--secondary))" 
                strokeWidth="3"
                fill="none"
              />
              <text 
                x="400" 
                y="105" 
                textAnchor="middle" 
                fill="hsl(var(--secondary-foreground))"
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
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#arrowhead)"
            />

            {/* Node 3 - Positioning */}
            <g className="reveal-on-scroll">
              <circle 
                cx="650" 
                cy="100" 
                r="60" 
                fill="hsl(var(--accent))" 
                opacity="0.15"
              />
              <circle 
                cx="650" 
                cy="100" 
                r="60" 
                stroke="hsl(var(--accent))" 
                strokeWidth="3"
                fill="none"
              />
              <text 
                x="650" 
                y="95" 
                textAnchor="middle" 
                fill="hsl(var(--accent-foreground))"
                fontSize="18"
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
                  fill="hsl(var(--primary))"
                />
              </marker>
            </defs>
          </svg>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="https://calendly.com/theabhilashkar/discovering-what-works-elevator-consulting"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Book a call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionPromise;
