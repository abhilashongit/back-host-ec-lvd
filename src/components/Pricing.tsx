import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Rocket, Crown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Pricing = () => {
  const plans = [
    {
      name: "Positioning Sprint",
      icon: Zap,
      price: "$25K",
      duration: "4 weeks",
      description: "Perfect for pre-seed/seed startups needing clear positioning fast",
      features: [
        "15 customer interviews",
        "ICP definition & segmentation",
        "Core positioning statement",
        "Value prop framework",
        "Messaging hierarchy",
        "Competitive positioning map",
        "Sales pitch deck",
        "2 revision rounds"
      ],
      highlight: false,
      cta: "Get Started"
    },
    {
      name: "Full Engine",
      icon: Rocket,
      price: "$45K",
      duration: "6 weeks",
      description: "Complete positioning transformation for Series A/B companies",
      features: [
        "Everything in Sprint, plus:",
        "30 customer interviews",
        "Buyer journey mapping",
        "Category creation framework",
        "Complete messaging playbook",
        "Sales enablement kit",
        "Marketing campaign briefs",
        "Website copy & structure",
        "Launch strategy & support",
        "3 revision rounds"
      ],
      highlight: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      duration: "8-12 weeks",
      description: "For growth-stage companies needing market dominance",
      features: [
        "Everything in Full Engine, plus:",
        "50+ stakeholder interviews",
        "Multi-product positioning",
        "Go-to-market strategy",
        "Sales training program",
        "Content strategy roadmap",
        "Partner positioning kit",
        "International expansion",
        "6 months advisory support",
        "Unlimited revisions"
      ],
      highlight: false,
      cta: "Contact Sales"
    }
  ];

  const guarantees = [
    {
      title: "Money-Back Guarantee",
      description: "If we don't deliver positioning that moves the needle, you don't pay. Period."
    },
    {
      title: "No Retainer Lock-In",
      description: "Fixed-price engagement. No ongoing fees unless you want extended support."
    },
    {
      title: "IP Ownership",
      description: "You own 100% of the positioning, messaging, and all deliverables. No strings."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <p className="text-sm font-medium text-primary mb-2">PRICING</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing, Zero Surprises
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fixed-price engagements designed for startups. Pay for results, not hourly rates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index}
                className={`reveal-on-scroll relative overflow-hidden ${
                  plan.highlight 
                    ? 'border-primary border-2 shadow-2xl scale-105' 
                    : 'border-2'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-foreground">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.duration}</div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className={`text-sm ${feature.includes('Everything') ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    size="lg"
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Guarantees */}
        <div className="max-w-5xl mx-auto reveal-on-scroll">
          <h3 className="text-2xl font-bold text-center mb-8">Our Guarantees</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="border-2 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-bold mb-2 text-foreground">{guarantee.title}</h4>
                  <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-16 max-w-3xl mx-auto" />

        {/* FAQ Teaser */}
        <div className="text-center reveal-on-scroll">
          <h3 className="text-2xl font-bold mb-4">Questions about pricing?</h3>
          <p className="text-muted-foreground mb-6">
            We're happy to discuss which package fits your stage and goals
          </p>
          <Button size="lg">Schedule a Call</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
