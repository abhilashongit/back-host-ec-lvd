import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "How We're Different", href: "#differentiation" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Add blur backdrop when scrolled past 50px
      setShowNav(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      showNav 
        ? 'bg-white/90 backdrop-blur-xl border-b border-border/40 shadow-sm' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-gentle-slide-in min-w-0">
            <Link to="/">
              <h2 className="font-brand text-base sm:text-lg lg:text-2xl font-bold text-consulting-dark hover-glow cursor-pointer truncate">
                Elevator Consulting
              </h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 xl:space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-consulting-medium hover:text-consulting-dark px-2 xl:px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 hover-glow animate-gentle-slide-in whitespace-nowrap"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block animate-premium-scale animate-delay-300">
            <a 
              href="https://calendly.com/theabhilashkar/the-best-fifteen-minutes-of-your-life"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-consulting-dark hover:bg-consulting-medium text-white px-4 lg:px-6 py-2 text-sm lg:text-base font-semibold transition-all duration-500 relative overflow-hidden group hover:scale-105 hover:shadow-premium"
              >
                <span className="relative z-10">Book 11 minutes</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glitter"></div>
                </div>
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-consulting-dark p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-elegant-fade-up absolute left-0 right-0 top-full">
            <div className="px-3 pt-3 pb-5 space-y-2 bg-white/98 backdrop-blur-xl border-t border-consulting-subtle shadow-xl mx-2 sm:mx-4 rounded-b-2xl">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-consulting-medium hover:text-consulting-dark block px-3 py-2.5 text-sm sm:text-base font-medium transition-all duration-300 hover:bg-consulting-subtle/50 rounded-lg animate-gentle-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 animate-premium-scale animate-delay-300">
                <a 
                  href="https://calendly.com/theabhilashkar/the-best-fifteen-minutes-of-your-life"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="w-full bg-consulting-dark hover:bg-consulting-medium text-white font-semibold transition-all duration-500 relative overflow-hidden group py-2.5 hover:shadow-premium text-sm sm:text-base"
                  >
                    <span className="relative z-10">Book 11 minutes</span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glitter"></div>
                    </div>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;