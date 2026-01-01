import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NewsArticleS7 = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden text-white">
      {/* Premium animated background */}
      <div className="news-premium-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="news-orb news-orb-1" />
        <div className="news-orb news-orb-2" />
        <div className="news-orb news-orb-3" />
        <div className="news-flash" />
        <div className="news-text-blur news-text-blur-1">S7</div>
        <div className="news-text-blur news-text-blur-2">GROWTH</div>
        <div className="news-text-blur news-text-blur-3">2025</div>
      </div>
      
      <Navigation darkMode />
      
      {/* Article Content */}
      <article className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Article Header */}
          <header className="mb-10 animate-article-header">
            <p className="text-xs text-zinc-500 mb-4 font-caption">01/01/2026</p>
            <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight news-gradient-text">
              Elevator Consulting LLP Announces Strong Year-on-Year Growth of Subsidiary Scenario 7 Media and Promotions
            </h1>
            <h4 className="font-caption text-lg sm:text-xl text-zinc-400">
              Mumbai, India | FY 2024–25
            </h4>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none animate-article-body">
            <p className="font-caption text-lg leading-relaxed mb-8 text-zinc-400">
              Elevator Consulting LLP, a consulting and investment firm with interests across retail, e-commerce, and brand partnerships in South Asia, today announced the annual performance of its wholly owned subsidiary, Scenario 7 Media and Promotions, marking a strong first full year of operations.
            </p>

            <p className="font-caption text-zinc-400 mb-8">
              Founded in September 2024, Scenario 7 Media and Promotions operates as an early-stage, focused retail venture centered on premium Formula 1–led merchandise and brand experiences. In its first year, the business demonstrated rapid commercial traction supported by disciplined execution and strong unit economics.
            </p>

            <h3 className="font-caption font-bold text-zinc-300 text-xl mb-4">
              Financial Performance
            </h3>
            <p className="font-caption text-zinc-400 mb-8">
              During FY 2024–25, Scenario 7 recorded year-on-year revenue growth exceeding 2,100%, reflecting accelerated market adoption and effective positioning within a niche but globally relevant category. The subsidiary has remained profitability-positive since inception, operating at an average margin of approximately 15%, highlighting robust pricing discipline and a structurally sound operating model.
            </p>

            <h3 className="font-caption font-bold text-zinc-300 text-xl mb-4">
              Operational Highlights
            </h3>
            <p className="font-caption text-zinc-400 mb-8">
              On the operational front, Scenario 7 served 300+ clients over the year and achieved a key strategic milestone with the onboarding of its first B2B and corporate partnerships. These partnerships include collaborations with fantasy gaming platforms as well as corporate gifting partners within high-growth HiTech and FinTech organizations. Over the course of the year, the company sold 5,000+ units across multiple product categories, reinforcing both demand consistency and scalability across varied price segments.
            </p>

            <h3 className="font-caption font-bold text-zinc-300 text-xl mb-4">
              Geographic Expansion
            </h3>
            <p className="font-caption text-zinc-400 mb-8">
              Geographic expansion beyond India was another defining feature of the year, with Scenario 7 extending its footprint into Sri Lanka, Bangladesh, and Nepal. To support this expansion while maintaining quality benchmarks, the subsidiary strengthened its backend operations by onboarding extended supply-chain partners across the UK, EU, and Japan, enabling tighter quality control and improved sourcing resilience.
            </p>

            <h3 className="font-caption font-bold text-zinc-300 text-xl mb-4">
              Strategic Restructuring
            </h3>
            <p className="font-caption text-zinc-400 mb-8">
              During the year, Elevator Consulting LLP also executed an internal financial restructuring aimed at strengthening margins further and creating a more defensible cost and supply structure as the business scales.
            </p>

            <h3 className="font-caption font-bold text-zinc-300 text-xl mb-4">
              Outlook
            </h3>
            <p className="font-caption text-zinc-400 mb-8">
              Looking ahead, Scenario 7 Media and Promotions will focus on profitable market share growth, targeting a premium, quality-conscious customer segment. In a market dominated by counterfeit and low-quality offerings, the subsidiary continues to differentiate itself through rigorous quality checks, verified sourcing, and a clear value proposition for customers willing to pay for authenticity and reliability.
            </p>

            <blockquote className="border-l-4 border-zinc-600 pl-6 py-4 my-8 bg-white/5 rounded-r-xl">
              <p className="font-caption text-zinc-300 italic">
                Elevator Consulting LLP views the performance of Scenario 7 as a strong validation of its approach to disciplined venture incubation—prioritizing early profitability, controlled expansion, and long-term brand equity over volume-led growth.
              </p>
            </blockquote>
          </div>

          {/* Back Button */}
          <div className="mt-12 animate-article-body">
            <button 
              onClick={() => navigate('/news')} 
              className="font-caption text-zinc-400 hover:text-zinc-200 transition-colors duration-300 flex items-center gap-2"
            >
              ← Back to News
            </button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticleS7;
