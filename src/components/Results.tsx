import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Results = () => {
  const logos = [
    { name: "Company A", width: "120px" },
    { name: "Company B", width: "140px" },
    { name: "Company C", width: "110px" },
    { name: "Company D", width: "130px" },
    { name: "Company E", width: "125px" },
  ];

  const testimonials = [
    {
      quote: "Our revenue increased 340% in 6 months. The positioning was razor-sharp.",
      author: "Sarah Chen",
      role: "CEO, TechVenture",
      result: "340% revenue growth"
    },
    {
      quote: "Finally, a positioning that investors understood. We closed Series A in 3 weeks.",
      author: "Marcus Rodriguez",
      role: "Founder, DataFlow",
      result: "Series A in 3 weeks"
    },
    {
      quote: "Our sales cycle went from 6 months to 6 weeks. Same product, clearer story.",
      author: "Emily Watson",
      role: "VP Marketing, CloudScale",
      result: "10x faster sales"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Social Proof Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <p className="text-sm font-medium text-primary mb-2">TRUSTED BY FOUNDERS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Results Speak for Themselves
          </h2>
        </div>

        {/* Logo Cloud */}
        <div className="mb-20 reveal-on-scroll">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="h-12 flex items-center justify-center"
                style={{ width: logo.width }}
              >
                <div className="w-full h-full bg-foreground/10 rounded flex items-center justify-center text-xs font-medium text-muted-foreground">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="reveal-on-scroll border-2 hover:border-primary/50 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-6">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground mb-3">{testimonial.role}</p>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.result}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
