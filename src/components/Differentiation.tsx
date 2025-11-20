import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Differentiation = () => {
  const comparisons = [
    {
      feature: "Timeline",
      others: "3-6 months of guesswork",
      us: "6 weeks with guaranteed outcomes"
    },
    {
      feature: "Approach",
      others: "Generic frameworks & workshops",
      us: "Custom research + real buyer insights"
    },
    {
      feature: "Deliverable",
      others: "80-page deck gathering dust",
      us: "Battle-tested messaging in market"
    },
    {
      feature: "Team",
      others: "Junior consultants learning on you",
      us: "Former founders who've been there"
    },
    {
      feature: "Risk",
      others: "Pay upfront, hope for results",
      us: "Money-back if we don't deliver"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <p className="text-sm font-medium text-primary mb-2">WHY US</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Your Typical Consultancy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're ex-founders who built this because we hated traditional positioning work
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="max-w-5xl mx-auto reveal-on-scroll border-2">
          <CardContent className="p-8">
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div></div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-2">
                  <X className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="font-bold text-muted-foreground">Traditional Agencies</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">The Positioning Engine</p>
              </div>
            </div>

            <Separator className="mb-6" />

            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <div key={index}>
                  <div className="grid grid-cols-3 gap-6 items-center">
                    <div className="font-medium text-foreground">{item.feature}</div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">{item.others}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground bg-primary/5 py-2 px-4 rounded-lg">
                        {item.us}
                      </p>
                    </div>
                  </div>
                  {index < comparisons.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottom Value Props */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          <Card className="reveal-on-scroll border-2 text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="font-medium text-foreground mb-2">Money-Back Guarantee</p>
              <p className="text-sm text-muted-foreground">If we don't deliver, you don't pay</p>
            </CardContent>
          </Card>
          <Card className="reveal-on-scroll border-2 text-center" style={{ transitionDelay: "100ms" }}>
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <p className="font-medium text-foreground mb-2">Weeks to Launch</p>
              <p className="text-sm text-muted-foreground">Not months of endless iterations</p>
            </CardContent>
          </Card>
          <Card className="reveal-on-scroll border-2 text-center" style={{ transitionDelay: "200ms" }}>
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">$0</div>
              <p className="font-medium text-foreground mb-2">Upfront Investment</p>
              <p className="text-sm text-muted-foreground">Only pay when you see results</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
