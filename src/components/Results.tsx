import { Card } from "@/components/ui/card";
import { Quote, ArrowUpRight, Building2, TrendingUp } from "lucide-react";

const Results = () => {
  const testimonials = [
    {
      company: "TechScale Solutions",
      industry: "B2B SaaS",
      result: "185% revenue growth in 18 months",
      quote: "Elevator Consulting transformed our go-to-market strategy. Their data-driven approach helped us identify untapped market segments and optimize our sales funnel, resulting in unprecedented growth.",
      executive: "Sarah Chen",
      title: "CEO & Founder"
    },
    {
      company: "Manufacturing Plus",
      industry: "Industrial Manufacturing",
      result: "45% operational cost reduction",
      quote: "The operational excellence program delivered beyond expectations. We streamlined processes, eliminated inefficiencies, and built a culture of continuous improvement that drives sustainable results.",
      executive: "Michael Rodriguez",
      title: "Chief Operating Officer"
    },
    {
      company: "FinanceForward",
      industry: "Financial Services",
      result: "300% improvement in close rates",
      quote: "Their sales optimization methodology completely transformed our approach to client acquisition. We now have a predictable, scalable sales engine that consistently delivers results.",
      executive: "David Park",
      title: "VP of Sales"
    }
  ];

  const metrics = [
    {
      value: "$2.5B+",
      label: "Client Revenue Generated",
      icon: TrendingUp
    },
    {
      value: "150+",
      label: "Companies Transformed",
      icon: Building2
    },
    {
      value: "95%",
      label: "Project Success Rate",
      icon: ArrowUpRight
    }
  ];

  return (
    <section id="results" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-consulting-dark mb-6">
            Transformative Business Results
          </h2>
          <p className="text-xl text-consulting-light max-w-3xl mx-auto leading-relaxed">
            Our clients achieve measurable, sustainable outcomes through strategic partnership 
            and execution excellence. Here's how we've driven transformational success.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <Card 
              key={metric.label}
              className="p-8 text-center bg-white border-consulting-subtle hover:shadow-card transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-consulting-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                <metric.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-consulting-dark mb-2 font-serif">
                {metric.value}
              </div>
              <div className="text-consulting-light font-medium">
                {metric.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.company}
              className="p-8 bg-white border-consulting-subtle hover:shadow-card transition-smooth animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Quote Section */}
                <div className="flex-1">
                  <Quote className="h-8 w-8 text-consulting-medium mb-4" />
                  <blockquote className="text-lg text-consulting-dark leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-consulting-dark">{testimonial.executive}</div>
                      <div className="text-consulting-light">{testimonial.title}</div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-consulting-dark">{testimonial.company}</div>
                      <div className="text-consulting-light">{testimonial.industry}</div>
                    </div>
                  </div>
                </div>

                {/* Result Highlight */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="bg-gradient-hero rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-white mb-2 font-serif">
                      {testimonial.result}
                    </div>
                    <div className="text-white/80 text-sm font-medium">
                      Achieved Result
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="font-serif text-2xl font-semibold text-consulting-dark mb-4">
            Join Our Success Stories
          </h3>
          <p className="text-consulting-light mb-8 max-w-2xl mx-auto">
            Ready to achieve similar transformational results for your business? 
            Let's discuss how our proven methodologies can drive your success.
          </p>
          <button className="bg-consulting-dark hover:bg-consulting-medium text-white px-8 py-4 rounded-lg font-semibold transition-smooth shadow-card">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;