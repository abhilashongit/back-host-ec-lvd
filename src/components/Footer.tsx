import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-elegant-fade-up">
            <h3 className="font-brand text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-soft-glow">
              Elevator Consulting
            </h3>
          <p className="text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg lg:text-xl px-4 animate-elegant-fade-up animate-delay-200">
            Helping legacy B2B companies transition to new-age processes, while cleaning up and optimising revenue operations and operational processes.


















          </p>
          
          {/* Action Buttons */}
          <div className="flex justify-center animate-elegant-fade-up animate-delay-300">
            <a href="https://calendly.com/theabhilashkar/discovering-what-works-elevator-consulting" target="_blank" rel="noopener noreferrer" style={{
            textDecoration: 'none'
          }}>
              <Button className="bg-white text-consulting-dark hover:bg-white/95 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-xl min-h-[50px] sm:min-h-[60px] rounded-xl">
                Schedule a Session
              </Button>
            </a>
          </div>
        </div>

        <Separator className="bg-white/20 mb-6 sm:mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="text-white/80 text-sm sm:text-base order-3 md:order-1">
            © 2024 Elevator Consulting. All rights reserved.
          </div>
          
          {/* Spacer for layout */}
          <div className="order-1 md:order-2"></div>
          
          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm sm:text-base order-2 md:order-3">
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105" onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              Contact Us
            </a>
            <a href="/careers" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">
              Careers
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;