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
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 reveal-on-scroll">
          <p className="text-xs sm:text-sm font-medium text-primary mb-2">INVESTMENT</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Custom-Built for Your Business
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every business is different. Every engagement is tailored. Let's design something that actually works for you.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-16">
          <Card className="reveal-on-scroll border-2 border-primary shadow-2xl overflow-hidden">
            <div className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 text-center">
              <span className="text-xs sm:text-sm font-bold tracking-wide">TAILORED ENGAGEMENT</span>
            </div>
            
            <CardHeader className="text-center pb-6 sm:pb-8 pt-6 sm:pt-10 px-4 sm:px-6">
              <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Crown className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
              </div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">Custom Scope & Pricing</CardTitle>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Scoped specifically to your challenges, goals, and timeline
              </p>
            </CardHeader>

            <CardContent className="pb-6 sm:pb-10 px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://calendly.com/theabhilashkar/the-best-fifteen-minutes-of-your-life"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full text-sm sm:text-base" size="lg">
                  Discuss Your Needs
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Retainer Value Proposition */}
        <div className="max-w-5xl mx-auto reveal-on-scroll">
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Why We Work on Retainer</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">We're Here for You, Always</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Real transformation doesn't happen in a sprint. It happens when you have a partner 
              committed to your success — not just during the project, but every step after.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {retainerBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-bold text-base sm:text-lg mb-2 text-foreground">{benefit.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
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
