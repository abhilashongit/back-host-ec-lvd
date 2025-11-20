import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

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
      color: "from-blue-500/20 to-purple-500/20",
      fullStory: {
        before: {
          title: "The Challenge",
          points: [
            "Positioned as 'just another project management tool'",
            "Losing deals to competitors with weaker products",
            "Average deal size: $12K ARR",
            "6-month sales cycles with 34% close rate"
          ]
        },
        process: {
          title: "Our Approach",
          points: [
            "Interviewed 47 buyers and 23 lost deals",
            "Discovered unique workflow automation angle",
            "Repositioned as 'operations intelligence platform'",
            "Created category-defining messaging framework"
          ]
        },
        after: {
          title: "The Results",
          points: [
            "340% revenue growth in 6 months",
            "Average deal size increased to $47K ARR",
            "Sales cycle reduced to 8 weeks",
            "Close rate jumped to 68%",
            "Featured in Gartner Magic Quadrant"
          ]
        }
      }
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
      color: "from-green-500/20 to-emerald-500/20",
      fullStory: {
        before: {
          title: "The Challenge",
          points: [
            "18 months without funding despite strong tech",
            "Pitched 67 VCs, received 2 term sheets",
            "Positioned as 'better analytics dashboard'",
            "Couldn't articulate differentiation clearly"
          ]
        },
        process: {
          title: "Our Approach",
          points: [
            "Reframed from tool to 'decision acceleration platform'",
            "Built narrative around C-suite buyer journey",
            "Created investor pitch deck with clear category",
            "Coached founders on value articulation"
          ]
        },
        after: {
          title: "The Results",
          points: [
            "Series A closed in 3 weeks (vs 18 months)",
            "12 competing term sheets from tier-1 VCs",
            "$45M valuation (3x previous attempts)",
            "Forbes 'Enterprise Startup to Watch'",
            "Pipeline doubled within 60 days"
          ]
        }
      }
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
      color: "from-orange-500/20 to-red-500/20",
      fullStory: {
        before: {
          title: "The Challenge",
          points: [
            "Average 6-month sales cycle with enterprise",
            "Technical buyers couldn't sell internally",
            "Positioned on features, not business impact",
            "Lost to incumbents despite better tech"
          ]
        },
        process: {
          title: "Our Approach",
          points: [
            "Interviewed economic buyers at 30 accounts",
            "Reframed value in CFO/CTO language",
            "Built ROI calculator and business case template",
            "Created champion enablement playbook"
          ]
        },
        after: {
          title: "The Results",
          points: [
            "Sales cycle cut from 6 months to 6 weeks",
            "Deal size increased 156% ($340K average)",
            "Close rate jumped from 31% to 73%",
            "Displaced market leader in 8 deals",
            "Named Leader in Forrester Wave"
          ]
        }
      }
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

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-3xl mb-2">{study.company}</DialogTitle>
                      <p className="text-muted-foreground">{study.industry}</p>
                    </DialogHeader>
                    
                    <div className="mt-6 space-y-8">
                      {/* Before */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                            <X className="w-4 h-4 text-destructive" />
                          </div>
                          {study.fullStory.before.title}
                        </h3>
                        <ul className="space-y-2 ml-10">
                          {study.fullStory.before.points.map((point, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start gap-2">
                              <span className="text-destructive mt-1">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      {/* Process */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </div>
                          {study.fullStory.process.title}
                        </h3>
                        <ul className="space-y-2 ml-10">
                          {study.fullStory.process.points.map((point, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      {/* After */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          </div>
                          {study.fullStory.after.title}
                        </h3>
                        <ul className="space-y-2 ml-10">
                          {study.fullStory.after.points.map((point, idx) => (
                            <li key={idx} className="text-foreground flex items-start gap-2 font-medium">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Metrics Highlight */}
                      <div className="bg-muted/50 p-6 rounded-lg">
                        <h4 className="font-bold mb-4">Key Metrics</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {study.metrics.map((metric, idx) => {
                            const Icon = metric.icon;
                            return (
                              <div key={idx} className="text-center">
                                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                <div className="text-2xl font-bold text-foreground mb-1">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {metric.label}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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
