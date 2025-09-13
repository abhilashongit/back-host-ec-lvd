import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
          <div className="text-center mb-12">
            <h3 className="font-brand text-2xl font-bold mb-4">
              Elevator Consulting
            </h3>
          <p className="text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Transforming ambitious B2B companies through strategic consulting excellence. 
            We partner with high-growth organizations to accelerate revenue, optimize operations, 
            and build sustainable competitive advantages.
          </p>
          
          {/* Action Buttons */}
          <div className="flex justify-center">
            <a 
              href="https://calendly.com/abhilash-kar-2024-sse/strategy-discovery" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button 
                className="bg-white text-consulting-dark hover:bg-white/90 px-6 py-3 font-semibold"
              >
                Schedule a Session
              </Button>
            </a>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/70 text-sm">
            © 2024 Elevator Consulting. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-smooth"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;