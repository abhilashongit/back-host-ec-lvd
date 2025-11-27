import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, ArrowRight, Heart } from "lucide-react";

const Pricing = () => {
  const features = [
    "Complete sales engine audit",
    "Process redesign & playbook creation",
    "Team training & enablement",
    "Positioning & messaging strategy",
    "Go-to-market optimization",
    "Ongoing strategic advisory",
    "Direct access to our team",
    "Quarterly business reviews",
  ];

  const retainerBenefits = [
    {
      title: "Always Available",
      description: "Direct line to our team whenever you need strategic guidance or tactical support."
    },
    {
      title: "Continuous Optimization",
      description: "Markets change. Competitors evolve. We keep your sales engine calibrated."
    },
    {
      title: "No Surprises",
      description: "Predictable investment. Clear deliverables. Full transparency."
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <p className="text-sm font-medium text-primary mb-2">INVESTMENT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Custom-Built for Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every business is different. Every engagement is tailored. Let's design something that actually works for you.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="reveal-on-scroll border-2 border-primary shadow-2xl overflow-hidden">
            <div className="bg-primary text-primary-foreground px-6 py-3 text-center">
              <span className="text-sm font-bold tracking-wide">TAILORED ENGAGEMENT</span>
            </div>
            
            <CardHeader className="text-center pb-8 pt-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Crown className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-3xl mb-4">Custom Scope & Pricing</CardTitle>
              <p className="text-muted-foreground text-lg">
                Scoped specifically to your challenges, goals, and timeline
              </p>
            </CardHeader>

            <CardContent className="pb-10">
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://calendly.com/theabhilashkar/the-best-fifteen-minutes-of-your-life"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full" size="lg">
                  Discuss Your Needs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Retainer Value Proposition */}
        <div className="max-w-5xl mx-auto reveal-on-scroll">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Why We Work on Retainer</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">We're Here for You, Always</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real transformation doesn't happen in a sprint. It happens when you have a partner 
              committed to your success — not just during the project, but every step after.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {retainerBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
