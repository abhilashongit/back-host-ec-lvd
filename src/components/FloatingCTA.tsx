import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px (past hero)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
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
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-6 text-base font-semibold rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-[pulse-subtle_2s_ease-in-out_infinite]"
        >
          Book 11 minutes
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingCTA;
