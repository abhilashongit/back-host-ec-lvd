import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const Careers = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "Careers | Elevator Consulting";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-consulting-light via-white to-consulting-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-brand text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-consulting-dark mb-6 sm:mb-8 animate-elegant-fade-up">
            CAREERS
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-consulting-medium max-w-3xl mx-auto leading-relaxed animate-elegant-fade-up animate-delay-200">
            Join the team at Elevator Consulting and grow in every aspect of your career.
          </p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger className="w-full group">
              <div className="bg-white/80 backdrop-blur-xl border border-consulting-subtle/30 rounded-2xl p-6 sm:p-8 shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-center justify-between">
                  <h3 className="font-brand text-xl sm:text-2xl md:text-3xl font-semibold text-consulting-dark text-left">
                    Social Media & Content Intern (EC Subsidiary Organization)
                  </h3>
                  <ChevronDown
                    className={`h-6 w-6 sm:h-8 sm:w-8 text-consulting-medium transition-transform duration-500 flex-shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-6 animate-accordion-down">
              <div className="bg-white/80 backdrop-blur-xl border border-consulting-subtle/30 rounded-2xl p-6 sm:p-8 md:p-10 shadow-premium space-y-8">
                {/* Role Section */}
                <div className="space-y-4">
                  <h4 className="font-brand text-xl sm:text-2xl font-semibold text-consulting-dark">
                    ROLE
                  </h4>
                  <div className="h-px bg-gradient-to-r from-consulting-subtle via-consulting-medium/20 to-consulting-subtle"></div>
                  <div className="text-consulting-medium space-y-3 text-base sm:text-lg leading-relaxed">
                    <p>
                      Social Media & Content Intern for an F1 merchandise brand owned and operated under Elevator Consulting.
                    </p>
                    <p>
                      Elevator Consulting owns several brands post-acquisition and manages standalone verticals for multiple clients—this F1 merchandise arm is one of them.
                    </p>
                    <p>
                      Title may say "intern," but the role carries significant responsibility, creative freedom, and direct impact.
                    </p>
                    <p>
                      Internship starts December, with full flexibility for college schedules; passion is the key.
                    </p>
                  </div>
                </div>

                {/* What's Expected Section */}
                <div className="space-y-4">
                  <h4 className="font-brand text-xl sm:text-2xl font-semibold text-consulting-dark">
                    WHAT'S EXPECTED
                  </h4>
                  <div className="h-px bg-gradient-to-r from-consulting-subtle via-consulting-medium/20 to-consulting-subtle"></div>
                  <div className="text-consulting-medium space-y-3 text-base sm:text-lg leading-relaxed">
                    <p>
                      Manage social presence for a brand retailing official F1 merchandise, premium replicas, and rare retro items from the 70s–90s
                    </p>
                    <p>Promote hard-to-find collector-grade items</p>
                    <p>Drive awareness, impressions, interactions, and conversions</p>
                    <div className="pl-4 sm:pl-6 space-y-2">
                      <p className="font-semibold">KPIs:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Impressions</li>
                        <li>Closures</li>
                        <li>Total Value from Closures</li>
                      </ul>
                    </div>
                    <p>Be creative, consistent, and proactive</p>
                    <p>Help build something that's actively scaling and capable of becoming large</p>
                  </div>
                </div>

                {/* What You'll Need to Do Section */}
                <div className="space-y-4">
                  <h4 className="font-brand text-xl sm:text-2xl font-semibold text-consulting-dark">
                    WHAT YOU'LL NEED TO DO
                  </h4>
                  <div className="h-px bg-gradient-to-r from-consulting-subtle via-consulting-medium/20 to-consulting-subtle"></div>
                  <div className="text-consulting-medium space-y-3 text-base sm:text-lg leading-relaxed">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use any and all social channels of the brand</li>
                      <li>Create engaging content (reels, stories, retro themes, product showcases, trend-led content)</li>
                      <li>Build interactions and community engagement</li>
                      <li>Respond, converse, grow reach, and boost sales</li>
                      <li>Take full creative ownership</li>
                    </ul>
                    <div className="bg-consulting-subtle/30 border border-consulting-medium/20 rounded-xl p-4 sm:p-6 mt-4">
                      <p className="font-semibold text-consulting-dark mb-2">Application Requirements:</p>
                      <p className="mb-2">No resumes</p>
                      <p className="mb-2">Applicants must submit a short video cover-letter</p>
                      <p className="mb-2">Upload as Unlisted on YouTube or Vimeo</p>
                      <p>Email the link to: <span className="font-semibold">careers@elevatorconsulting.in</span></p>
                    </div>
                  </div>
                </div>

                {/* What You'll Get Section */}
                <div className="space-y-4">
                  <h4 className="font-brand text-xl sm:text-2xl font-semibold text-consulting-dark">
                    WHAT YOU'LL GET
                  </h4>
                  <div className="h-px bg-gradient-to-r from-consulting-subtle via-consulting-medium/20 to-consulting-subtle"></div>
                  <div className="text-consulting-medium space-y-3 text-base sm:text-lg leading-relaxed">
                    <p className="font-semibold">Month 1:</p>
                    <p className="pl-4 sm:pl-6">No monetary compensation; instead receive free merchandise</p>
                    
                    <p className="font-semibold mt-4">Month 2 onward:</p>
                    <ul className="list-disc pl-10 space-y-2">
                      <li>Pay: ₹2–3k (flexible), with potential for significantly higher pay if performance is strong</li>
                      <li>Commission per sale available</li>
                      <li>A real opportunity for long-term onboarding with better pay cycles if you deliver strong results</li>
                      <li>Certificate of completion</li>
                      <li>A chance to grow with a brand and team aiming for large-scale expansion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <a
            href="mailto:careers@elevatorconsulting.in"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-black text-white px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-semibold rounded-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500 shine-button-glossy shadow-premium hover:shadow-premium-lg"
            >
              <span className="relative z-10">Apply Now</span>
            </Button>
          </a>
          
          <p className="text-consulting-medium text-base sm:text-lg">
            In case the button doesn't work:<br />
            <a
              href="mailto:careers@elevatorconsulting.in"
              className="font-semibold text-consulting-dark hover:text-consulting-medium transition-colors duration-300 hover-glow"
            >
              careers@elevatorconsulting.in
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
