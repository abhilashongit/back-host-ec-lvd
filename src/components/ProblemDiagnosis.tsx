import { AlertCircle, TrendingDown, HelpCircle } from "lucide-react";

const ProblemDiagnosis = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Conversion blind spots",
      description: "Deals stall for reasons nobody logs.",
      delay: "0ms"
    },
    {
      icon: HelpCircle,
      title: "Invisible positioning",
      description: "Your product looks like everyone else's.",
      delay: "120ms"
    },
    {
      icon: TrendingDown,
      title: "Fragile GTM",
      description: "Market entries become guesswork, not strategy.",
      delay: "240ms"
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why growth stalls even when the team works hard
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            Flat conversions, invisible brand signals, risky market entries, and commission-first agents—these aren't luck problems. They're system problems.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="reveal-on-scroll group relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              style={{ "--stagger": problem.delay } as React.CSSProperties}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-xl mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemDiagnosis;
