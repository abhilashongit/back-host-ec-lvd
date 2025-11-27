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
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-gentle-slide-in">
            <Link to="/">
              <h2 className="font-brand text-lg sm:text-xl lg:text-2xl font-bold text-consulting-dark hover-glow cursor-pointer">
                Elevator Consulting
              </h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-consulting-medium hover:text-consulting-dark px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 hover-glow animate-gentle-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block animate-premium-scale animate-delay-300">
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
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-consulting-dark"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-elegant-fade-up">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-xl border-t border-consulting-subtle shadow-xl rounded-b-2xl mx-4">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-consulting-medium hover:text-consulting-dark block px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-consulting-subtle/50 rounded-lg animate-gentle-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 animate-premium-scale animate-delay-300">
                <a 
                  href="https://calendly.com/theabhilashkar/the-best-fifteen-minutes-of-your-life"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="w-full bg-consulting-dark hover:bg-consulting-medium text-white font-semibold transition-all duration-500 relative overflow-hidden group py-3 hover:shadow-premium"
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