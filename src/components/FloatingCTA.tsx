import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling 600px (past hero) but hide when footer is visible
      const pastHero = window.scrollY > 600;
      const beforeFooter = footerTop > windowHeight;
      
      setIsVisible(pastHero && beforeFooter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://calendly.com/theabhilashkar/the-best-fifteen-minutes-of-your-life"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="floating-cta-premium group relative">
          {/* Gloss animated border */}
          <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-primary via-white/80 to-primary bg-[length:200%_100%] animate-gloss-border opacity-80"></div>
          
          {/* Button content */}
          <div className="relative flex items-center gap-2 bg-background/80 backdrop-blur-xl px-5 py-3.5 sm:px-6 sm:py-4 rounded-full shadow-2xl border border-white/20 transition-all duration-300 group-hover:bg-background/90 group-hover:scale-105">
            <span className="text-sm sm:text-base font-semibold text-foreground">
              Book 11 minutes
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default FloatingCTA;
