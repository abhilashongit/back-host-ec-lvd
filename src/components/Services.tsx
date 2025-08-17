import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Zap, Users, Rocket, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Revenue Acceleration",
      description: "Strategic frameworks to unlock sustainable growth through market expansion, pricing optimization, and revenue stream diversification.",
      metrics: "35% average revenue increase"
    },
    {
      icon: Target,
      title: "Sales Performance Optimization",
      description: "Data-driven methodologies to enhance sales effectiveness, streamline processes, and build high-converting sales organizations.",
      metrics: "50% improvement in close rates"
    },
    {
      icon: Zap,
      title: "Operational Excellence",
      description: "Comprehensive operational transformation initiatives that eliminate inefficiencies and drive sustainable competitive advantage.",
      metrics: "40% cost reduction achieved"
    },
    {
      icon: Users,
      title: "High-Performance Culture",
      description: "Cultural transformation programs that align teams, enhance productivity, and build resilient organizational capabilities.",
      metrics: "85% employee engagement lift"
    },
    {
      icon: Rocket,
      title: "Product Launch Strategy",
      description: "End-to-end product launch frameworks ensuring market success through rigorous validation and execution methodologies.",
      metrics: "90% successful market entry"
    },
    {
      icon: Palette,
      title: "Brand & Marketing Strategy",
      description: "Comprehensive brand positioning and marketing strategies that drive market differentiation and customer acquisition.",
      metrics: "3x brand awareness increase"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-consulting-dark mb-6">
            Strategic Solutions That Drive Results
          </h2>
          <p className="text-xl text-consulting-light max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of consulting services transforms business challenges into 
            sustainable competitive advantages through proven methodologies and expert execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-8 bg-gradient-card border-consulting-subtle hover:shadow-card transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-consulting-dark rounded-lg flex items-center justify-center mb-4 group-hover:bg-consulting-medium transition-smooth">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-consulting-dark mb-4">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-consulting-light mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="border-t border-consulting-subtle pt-4">
                <div className="text-sm font-semibold text-consulting-medium">
                  Typical Impact: {service.metrics}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="font-serif text-2xl font-semibold text-consulting-dark mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-consulting-light mb-8 max-w-2xl mx-auto">
            Discover how our strategic consulting services can accelerate your company's growth 
            and operational excellence.
          </p>
          <button className="bg-consulting-dark hover:bg-consulting-medium text-white px-8 py-4 rounded-lg font-semibold transition-smooth shadow-card">
            Schedule Your Strategy Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;