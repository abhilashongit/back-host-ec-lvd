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
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-elegant-fade-up">
          <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-consulting-dark mb-6 sm:mb-8 animate-soft-glow text-shadow-soft px-2">
            Strategic Solutions That Drive Results
          </h2>
          <p className="text-xl sm:text-2xl lg:text-2xl text-consulting-light max-w-4xl mx-auto leading-relaxed animate-elegant-fade-up animate-delay-200 px-4">
            Our comprehensive suite of consulting services transforms business challenges into 
            sustainable competitive advantages through proven methodologies and expert execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-6 sm:p-8 lg:p-10 bg-gradient-card border-consulting-subtle hover:shadow-premium transition-all duration-500 group animate-premium-scale hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-consulting-dark rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-consulting-medium transition-all duration-500 group-hover:shadow-lg animate-gentle-slide-in">
                  <service.icon className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="font-brand text-xl sm:text-2xl lg:text-3xl font-semibold text-consulting-dark mb-4 hover-glow animate-elegant-fade-up animate-delay-100 leading-tight">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-consulting-light mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg animate-elegant-fade-up animate-delay-200">
                {service.description}
              </p>
              
              <div className="border-t border-consulting-subtle pt-4 sm:pt-6 animate-elegant-fade-up animate-delay-300">
                <div className="text-sm sm:text-base font-semibold text-consulting-medium font-caption">
                  Typical Impact: {service.metrics}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;