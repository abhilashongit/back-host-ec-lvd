import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      company: "TechVenture",
      industry: "B2B SaaS",
      challenge: "Generic positioning in crowded market",
      result: "340% revenue growth in 6 months",
      metrics: [
        { label: "Revenue Growth", value: "340%", icon: TrendingUp },
        { label: "ICP Match", value: "92%", icon: Target },
        { label: "Win Rate", value: "68%", icon: Users }
      ],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      company: "DataFlow",
      industry: "Enterprise Analytics",
      challenge: "Couldn't explain value to investors",
      result: "Series A closed in 3 weeks",
      metrics: [
        { label: "Funding Speed", value: "3 weeks", icon: TrendingUp },
        { label: "Investor Interest", value: "12x", icon: Users },
        { label: "Valuation", value: "$45M", icon: Target }
      ],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      company: "CloudScale",
      industry: "Infrastructure",
      challenge: "6-month sales cycles killing growth",
      result: "Sales cycle reduced to 6 weeks",
      metrics: [
        { label: "Cycle Time", value: "-90%", icon: TrendingUp },
        { label: "Deal Size", value: "+156%", icon: Target },
        { label: "Close Rate", value: "73%", icon: Users }
      ],
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <p className="text-sm font-medium text-primary mb-2">CASE STUDIES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Companies, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped B2B founders transform their positioning and accelerate growth
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {cases.map((study, index) => (
            <Card
              key={index}
              className="reveal-on-scroll border-2 hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${study.color}`} />
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{study.company}</CardTitle>
                    <p className="text-sm text-muted-foreground">{study.industry}</p>
                  </div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Challenge</p>
                  <p className="text-sm">{study.challenge}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Result</p>
                  <p className="font-bold text-lg text-foreground">{study.result}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  {study.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                        </div>
                        <span className="font-bold text-foreground">{metric.value}</span>
                      </div>
                    );
                  })}
                </div>

                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read Full Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal-on-scroll">
          <Button size="lg" variant="outline">
            View All Case Studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
