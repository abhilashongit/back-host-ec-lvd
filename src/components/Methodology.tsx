import { Card } from "@/components/ui/card";
import { Search, Lightbulb, Cog, BarChart } from "lucide-react";

const Methodology = () => {
  const phases = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Analysis",
      description: "Using data insights to assess the current state of your business and identify potential optimisation points for performance enhnancement",
      deliverables: ["Current State Analysis", "Performance Benchmarking", "Opportunity Mapping"]
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy Development",
      description: " We work with you to imagine the goal ahead, and implement actionable goals to realize it",
      deliverables: ["Strategic Framework", "Implementation Roadmap", "Success Metrics"]
    },
    {
      number: "03",
      icon: Cog,
      title: "Implementation Excellence",
      description: "Hands-on execution support ensuring seamless transformation whilST building internally for long-term success",
      deliverables: ["Change Management", "Process Optimization", "Team Enablement"]
    },
    {
      number: "04",
      icon: BarChart,
      title: "Performance Optimization",
      description: "Continuous monitoring and refinement to maximize impact and ensure sustained business transformation outcomes.",
      deliverables: ["Performance Tracking", "Continuous Improvement", "Knowledge Transfer"]
    }
  ];

  return (
    <section id="methodology" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-elegant-fade-up">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-consulting-dark mb-6 sm:mb-8 animate-soft-glow text-shadow-soft px-2">
            The First Step Is Clarity.
          </h2>
          <p className="text-xl sm:text-2xl lg:text-2xl text-consulting-light max-w-4xl mx-auto leading-relaxed animate-elegant-fade-up animate-delay-200 px-4">
            A systematic approach to business transformation that combines analytical rigor
            with practical execution expertise, ensuring sustainable results.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="space-y-6 sm:space-y-8">
          {phases.map((phase, index) => {
            // FIX: Assign the component to a capitalized variable
            const IconComponent = phase.icon; 

            return (
              <Card
                key={phase.number}
                className="p-6 sm:p-8 bg-gradient-card border-consulting-subtle hover:shadow-premium transition-all duration-500 animate-premium-scale hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
                  {/* Phase Number & Icon */}
                  <div className="flex-shrink-0 flex items-center gap-4 sm:gap-6 animate-gentle-slide-in">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-consulting-subtle font-sans animate-soft-glow">
                      {phase.number}
                    </div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-consulting-dark rounded-xl flex items-center justify-center hover:bg-consulting-medium transition-all duration-500 hover:shadow-lg">
                      {/* FIX: Use the capitalized variable here */}
                      <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-semibold text-consulting-dark mb-4 sm:mb-6 hover-glow animate-elegant-fade-up animate-delay-100 leading-tight">
                      {phase.title}
                    </h3>
                    <p className="text-lg sm:text-xl lg:text-lg text-consulting-light mb-6 sm:mb-8 leading-relaxed animate-elegant-fade-up animate-delay-200">
                      {phase.description}
                    </p>

                    {/* Deliverables */}
                    <div className="animate-elegant-fade-up animate-delay-300">
                      <h4 className="font-semibold text-consulting-medium mb-3 sm:mb-4 text-base sm:text-lg">Key Deliverables:</h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <span
                            key={deliverable}
                            className="px-4 sm:px-5 py-2 sm:py-3 bg-consulting-subtle text-consulting-dark text-sm sm:text-base font-medium rounded-lg hover:bg-consulting-medium hover:text-white transition-all duration-300 animate-premium-scale"
                            style={{ animationDelay: `${(index * 0.2) + (deliverableIndex * 0.1)}s` }}
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24 animate-elegant-fade-up animate-delay-500">
          <div className="bg-gradient-hero rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center hover:shadow-2xl transition-all duration-500">
            <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-6 sm:mb-8 animate-soft-glow leading-tight">
              Experience Our Methodology in Action
            </h3>
            <p className="text-white/95 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl leading-relaxed animate-elegant-fade-up animate-delay-100 px-4">
              Schedule a complimentary strategy session to see how our proven approach
              can transform your business challenges into competitive advantages.
            </p>
            <a
              href="https://calendly.com/abhilash-kar-2024-sse/strategy-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white hover:bg-black px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl font-semibold transition-all duration-900 shadow-premium inline-block hover:scale-105 hover:shadow-xl animate-premium-scale animate-delay-300 text-lg sm:text-xl min-h-[60px] flex items-center justify-center relative overflow-hidden shine-button"
            >
              <span className="relative z-10">Book Strategy Session</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
