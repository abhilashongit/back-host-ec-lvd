import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18">
        {/* Main Footer Content */}
        <div className="text-center mb-6 sm:mb-10 lg:mb-12">
          <h3 className="font-brand text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Elevator Consulting
          </h3>
          <p className="text-white/80 mb-5 sm:mb-6 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Helping legacy B2B companies transition to new-age processes, while cleaning up and optimising revenue operations and operational processes.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <a 
              href="https://calendly.com/theabhilashkar/the-best-fifteen-minutes-of-your-life" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-foreground hover:bg-white/95 px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-500 hover:scale-105 hover:shadow-xl min-h-[44px] sm:min-h-[52px] rounded-xl">
                Book Your 11 Minutes
              </Button>
            </a>
            <a href="/careers">
              <Button variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-500 hover:scale-105 min-h-[44px] sm:min-h-[52px] rounded-xl">
                Join the team
              </Button>
            </a>
          </div>
        </div>

        <Separator className="bg-white/20 mb-5 sm:mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-white/70 text-xs sm:text-sm order-2 sm:order-1">
            © 2024 Elevator Consulting. All rights reserved.
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm order-1 sm:order-2">
            <a 
              href="#contact" 
              className="text-white/70 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;