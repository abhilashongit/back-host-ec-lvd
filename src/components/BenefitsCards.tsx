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
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="font-brand text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What you actually get
          </h3>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="reveal-on-scroll group relative bg-card border-2 border-border rounded-2xl p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-primary/30"
              style={{ "--stagger": benefit.delay } as React.CSSProperties}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <benefit.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h4 className="font-bold text-xl mb-3 text-foreground">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {benefit.subtitle}
              </p>

              {/* Micro Proof */}
              <div className="pt-4 border-t border-border">
                <span className="text-sm font-semibold text-primary">
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
