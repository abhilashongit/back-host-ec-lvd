import { TrendingUp, Users, Globe } from "lucide-react";

const BenefitsCards = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Predictable sales, lower churn",
      subtitle: "Know which deals will close and why.",
      proof: "+47% conversion in 90 days",
      delay: "0ms"
    },
    {
      icon: Users,
      title: "Profit per salesperson goes up",
      subtitle: "Higher conversion, not higher payroll.",
      proof: "2.3x revenue per rep",
      delay: "120ms"
    },
    {
      icon: Globe,
      title: "Market entries that land",
      subtitle: "India and North America GTM playbooks that perform.",
      proof: "3 markets, 6 months",
      delay: "240ms"
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h3 className="font-brand text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            What you actually get
          </h3>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 reveal-stagger">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="reveal-on-scroll group relative bg-card border-2 border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-primary/30"
              style={{ "--stagger": benefit.delay } as React.CSSProperties}
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>

              {/* Content */}
              <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 text-foreground">
                {benefit.title}
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                {benefit.subtitle}
              </p>

              {/* Micro Proof */}
              <div className="pt-3 sm:pt-4 border-t border-border">
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  {benefit.proof}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCards;
