import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIconsBackground from "@/components/FloatingIconsBackground";
import { Card, CardContent } from "@/components/ui/card";
import citeelEcPress from "@/assets/citeel-ec-press.webp";
const News = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/news/ec-citeel-partnership');
  };

  return (
    <div className="min-h-screen bg-consulting-light relative overflow-hidden">
      <FloatingIconsBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-brand text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-consulting-dark mb-6 sm:mb-8 animate-elegant-fade-up">
            NEWS & OFFICIAL RELEASES
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-consulting-medium max-w-3xl mx-auto leading-relaxed animate-elegant-fade-up animate-delay-200">
            Stay updated with the latest press releases and announcements from Elevator Consulting.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-10">
            {/* Press Release Card 1 */}
            <Card 
              onClick={handleCardClick}
              className="max-w-md overflow-hidden rounded-2xl border-0 shadow-premium bg-card transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] hover:shadow-premium-lg cursor-pointer active:scale-[0.98]"
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
                  <p className="text-xs text-consulting-medium mb-3 font-caption">22/12/2025</p>
                  <h2 className="font-brand text-xl md:text-2xl font-bold text-consulting-dark mb-1">
                    NAMASTE INDIA
                  </h2>
                  <p className="font-caption text-base md:text-lg text-consulting-medium">
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
