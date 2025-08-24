eimport { Card } from "@/components/ui/card";
import { Search, Lightbulb, Cog, BarChart } from "lucide-react";

const Methodology = () => {
  const phases = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Analysis",
      description: "Comprehensive business assessment leveraging data analytics and stakeholder insights to identify transformation opportunities.",
      deliverables: ["Current State Analysis", "Performance Benchmarking", "Opportunity Mapping"]
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy Development",
      description: "Collaborative strategy formulation that aligns with business objectives and creates actionable roadmaps for sustainable growth.",
      deliverables: ["Strategic Framework", "Implementation Roadmap", "Success Metrics"]
    },
    {
      number: "03",
      icon: Cog,
      title: "Implementation Excellence",
      description: "Hands-on execution support ensuring seamless transformation while building internal capabilities for long-term success.",
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
    <section id="methodology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-consulting-dark mb-6">
            Our Proven Methodology
          </h2>
          <p className="text-xl text-consulting-light max-w-3xl mx-auto leading-relaxed">
            A systematic approach to business transformation that combines analytical rigor 
            with practical execution expertise, ensuring sustainable results.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <Card 
              key={phase.number}
              className="p-8 bg-gradient-card border-consulting-subtle hover:shadow-card transition-smooth animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Phase Number & Icon */}
                <div className="flex-shrink-0 flex items-center gap-6">
                  <div className="text-6xl font-bold text-consulting-subtle font-sans">
                    {phase.number}
                  </div>
                  <div className="w-16 h-16 bg-consulting-dark rounded-lg flex items-center justify-center">
                    <phase.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-sans text-2xl md:text-3xl font-semibold text-consulting-dark mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-lg text-consulting-light mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold text-consulting-medium mb-3">Key Deliverables:</h4>
                    <div className="flex flex-wrap gap-3">
                      {phase.deliverables.map((deliverable) => (
                        <span 
                          key={deliverable}
                          className="px-4 py-2 bg-consulting-subtle text-consulting-dark text-sm font-medium rounded-lg"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

    {/* Bottom CTA */}
<div className="text-center mt-16 animate-fade-in">
  <div className="bg-gradient-hero rounded-2xl p-12 text-center">
    <h3 className="font-sans text-3xl font-semibold text-white mb-4">
      Experience Our Methodology in Action
    </h3>
    <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
      Schedule a complimentary strategy session to see how our proven approach 
      can transform your business challenges into competitive advantages.
    </p>
    <a href="https://calendly.com/abhilash-kar-2024-sse/strategy-discovery" target="_blank" rel="noopener noreferrer">
      <button className="bg-white text-consulting-dark hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-smooth shadow-premium">
        Book Strategy Session
      </button>
    </a>
  </div>
</div>

export default Methodology;
