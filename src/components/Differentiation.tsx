import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Differentiation = () => {
  const comparisons = [
    {
      feature: "Timeline",
      others: "3-6 months of guesswork",
      us: "Rapid, focused transformation"
    },
    {
      feature: "Approach",
      others: "Generic frameworks & workshops",
      us: "Custom strategy + real buyer insights"
    },
    {
      feature: "Deliverable",
      others: "80-page deck gathering dust",
      us: "Battle-tested systems in market"
    },
    {
      feature: "Team",
      others: "Junior consultants learning on you",
      us: "Former founders who've been there"
    },
    {
      feature: "Support",
      others: "Project ends, you're on your own",
      us: "Ongoing retainer — always here for you"
    }
  ];

  return (
    <section id="differentiation" className="py-14 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 reveal-on-scroll">
          <p className="text-xs sm:text-sm font-medium text-primary mb-2">WHY US</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Not Your Typical Consultancy
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're ex-founders who built this because we hated traditional consulting
          </p>
        </div>

        {/* Comparison - Mobile: Cards, Desktop: Table */}
        <div className="max-w-5xl mx-auto reveal-on-scroll">
          {/* Mobile version - stacked cards */}
          <div className="sm:hidden space-y-4">
            {comparisons.map((item, index) => (
              <Card key={index} className="border-2 overflow-hidden">
                <CardContent className="p-4">
                  <p className="font-bold text-primary text-sm mb-3">{item.feature}</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">Traditional</p>
                        <p className="text-sm text-muted-foreground">{item.others}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-primary mb-0.5">Elevator</p>
                        <p className="text-sm font-medium text-foreground">{item.us}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop version - table */}
          <Card className="hidden sm:block border-2">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div></div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted mb-2">
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                  </div>
                  <p className="font-bold text-sm sm:text-base text-muted-foreground">Traditional Agencies</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 mb-2">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <p className="font-bold text-sm sm:text-base text-foreground">Elevator Consulting</p>
                </div>
              </div>

              <Separator className="mb-4 sm:mb-6" />

              <div className="space-y-4 sm:space-y-6">
                {comparisons.map((item, index) => (
                  <div 
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="grid grid-cols-3 gap-4 sm:gap-6 items-center group hover:bg-muted/30 p-2 sm:p-4 rounded-lg transition-all duration-300">
                      <div className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.feature}
                      </div>
                      <div className="text-center transform group-hover:scale-95 transition-transform duration-300">
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.others}</p>
                      </div>
                      <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                        <p className="text-xs sm:text-sm font-medium text-foreground bg-primary/5 py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg group-hover:bg-primary/10 group-hover:shadow-md transition-all duration-300">
                          {item.us}
                        </p>
                      </div>
                    </div>
                    {index < comparisons.length - 1 && <Separator className="mt-4 sm:mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mt-8 sm:mt-12">
          <Card className="reveal-on-scroll border-2 text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
              <p className="font-medium text-sm sm:text-base text-foreground mb-1 sm:mb-2">Always Available</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Direct line to our team, anytime</p>
            </CardContent>
          </Card>
          <Card className="reveal-on-scroll border-2 text-center" style={{ transitionDelay: "100ms" }}>
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">100%</div>
              <p className="font-medium text-sm sm:text-base text-foreground mb-1 sm:mb-2">Custom Solutions</p>
              <p className="text-xs sm:text-sm text-muted-foreground">No cookie-cutter frameworks</p>
            </CardContent>
          </Card>
          <Card className="reveal-on-scroll border-2 text-center sm:col-span-2 md:col-span-1" style={{ transitionDelay: "200ms" }}>
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">∞</div>
              <p className="font-medium text-sm sm:text-base text-foreground mb-1 sm:mb-2">Ongoing Partnership</p>
              <p className="text-xs sm:text-sm text-muted-foreground">We're here for the long haul</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
