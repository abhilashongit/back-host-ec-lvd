import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import citeelEcPress from "@/assets/citeel-ec-press.webp";
import s7Press from "@/assets/s7-press.jpg";

const News = () => {
  const navigate = useNavigate();

  const handleCiteelClick = () => {
    navigate('/news/ec-citeel-partnership');
  };

  const handleS7Click = () => {
    navigate('/news/s7-annual-growth-2025');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Premium animated background */}
      <div className="news-premium-bg">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        
        {/* Animated orbs */}
        <div className="news-orb news-orb-1" />
        <div className="news-orb news-orb-2" />
        <div className="news-orb news-orb-3" />
        
        {/* Subtle flash effect */}
        <div className="news-flash" />
        
        {/* Floating text blur elements */}
        <div className="news-text-blur news-text-blur-1">NEWS</div>
        <div className="news-text-blur news-text-blur-2">PRESS</div>
        <div className="news-text-blur news-text-blur-3">2025</div>
      </div>
      
      <Navigation darkMode />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-brand text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 animate-elegant-fade-up news-gradient-text">
            NEWS & OFFICIAL RELEASES
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-elegant-fade-up animate-delay-200 text-zinc-400">
            Stay updated with the latest press releases and announcements from Elevator Consulting.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Press Release Card - S7 Growth */}
            <div className="news-card-golden-border max-w-md">
              <Card 
                onClick={handleS7Click}
                className="overflow-hidden rounded-2xl border-0 shadow-2xl bg-zinc-900/80 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.15)] cursor-pointer active:scale-[0.98]"
              >
                <CardContent className="p-5">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                    <img 
                      src={s7Press} 
                      alt="S7 Scenario 7 Media and Promotions" 
                      className="w-full h-full object-cover object-left-top"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="text-xs text-zinc-500 mb-3 font-caption">01/01/2026</p>
                    <h2 className="font-brand text-xl md:text-2xl font-bold text-zinc-100 mb-1">
                      LOOKING BACK ON 2025
                    </h2>
                    <p className="font-caption text-base md:text-lg text-zinc-400">
                      A transformative year for S7, an EC venture
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Press Release Card - Citeel */}
            <Card 
              onClick={handleCiteelClick}
              className="max-w-md overflow-hidden rounded-2xl border border-zinc-800/50 shadow-2xl bg-zinc-900/80 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.08)] hover:border-zinc-700/50 cursor-pointer active:scale-[0.98]"
            >
              <CardContent className="p-5">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <img 
                    src={citeelEcPress} 
                    alt="Citeel X EC partnership announcement" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-5">
                  <p className="text-xs text-zinc-500 mb-3 font-caption">22/12/2025</p>
                  <h2 className="font-brand text-xl md:text-2xl font-bold text-zinc-100 mb-1">
                    NAMASTE INDIA
                  </h2>
                  <p className="font-caption text-base md:text-lg text-zinc-400">
                    Citeel X EC
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
