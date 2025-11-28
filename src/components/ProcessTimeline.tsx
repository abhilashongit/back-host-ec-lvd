import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ProcessTimeline = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Discovery & Audit",
      week: "Week 1",
      description: "Deep funnel auto-audit, GA4/Clarity read",
      deliverable: "Messaging map",
      bullets: [
        "Complete funnel analysis and conversion tracking",
        "Customer journey mapping and pain point identification",
        "Competitive positioning assessment",
        "Data infrastructure audit (GA4, CRM, analytics)"
      ]
    },
    {
      id: 2,
      title: "Rebuild & Train",
      week: "Weeks 2–4",
      description: "Process rebuild, live coaching, scripts & playbooks",
      deliverable: "Playbook + trained reps",
      bullets: [
        "Custom sales process design and documentation",
        "Live coaching sessions with sales team",
        "Battle-tested scripts and objection handling frameworks",
        "CRM workflow optimization and automation setup"
      ]
    },
    {
      id: 3,
      title: "Market Reposition & Handoff",
      week: "Weeks 5–6",
      description: "Repositioning, GTM entry plan, measurement pipeline",
      deliverable: "Market-ready plan + KPIs",
      bullets: [
        "Refined positioning and messaging architecture",
        "GTM strategy for India and North America markets",
        "Performance measurement dashboard and KPIs",
        "Handoff documentation and ongoing support plan"
      ]
    }
  ];

  const toggleStep = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <section id="methodology" className="py-14 sm:py-20 lg:py-32 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our 3-step engine: Audit → Rebuild → Handoff
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            We fix the revenue system, train your people, then hand it to you — fully operational.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="timeline-node bg-card border-2 border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30"
              data-step={step.id}
            >
              {/* Timeline Toggle */}
              <button
                className="timeline-toggle w-full text-left p-4 sm:p-6 flex items-start sm:items-center justify-between hover:bg-muted/30 transition-colors duration-200"
                aria-expanded={expandedStep === step.id}
                onClick={() => toggleStep(step.id)}
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-6 flex-1 min-w-0">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg sm:text-xl">
                    {step.id}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1 sm:mb-2">
                      <h3 className="font-bold text-base sm:text-xl text-foreground">
                        {step.title}
                      </h3>
                      <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full w-fit">
                        {step.week}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 sm:line-clamp-none">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Chevron */}
                <ChevronDown 
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-2 mt-1 sm:mt-0 ${
                    expandedStep === step.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Timeline Body */}
              <div 
                className={`timeline-body transition-all duration-300 ease-out overflow-hidden ${
                  expandedStep === step.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
                hidden={expandedStep !== step.id}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                  <div className="pl-0 sm:pl-[4.5rem]">
                    {/* Bullets */}
                    <ul className="space-y-2 sm:space-y-3 mb-4">
                      {step.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <span className="text-primary mt-1 sm:mt-1.5">•</span>
                          <span className="text-sm sm:text-base text-muted-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Deliverable */}
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
                      <span className="text-xs sm:text-sm font-semibold text-foreground">
                        Deliverable:{" "}
                      </span>
                      <span className="text-xs sm:text-sm text-primary font-semibold">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
