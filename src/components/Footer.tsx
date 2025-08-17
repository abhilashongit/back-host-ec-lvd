import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      "Revenue Acceleration",
      "Sales Optimization", 
      "Operational Excellence",
      "Culture Development",
      "Product Launch Strategy",
      "Brand & Marketing"
    ],
    company: [
      "About Us",
      "Our Methodology", 
      "Case Studies",
      "Leadership Team",
      "Careers",
      "Contact"
    ],
    resources: [
      "Strategy Insights",
      "Industry Reports",
      "Best Practices",
      "Webinars",
      "Assessment Tools",
      "ROI Calculator"
    ]
  };

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Elevator Consulting
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming ambitious B2B companies through strategic consulting excellence. 
              We partner with high-growth organizations to accelerate revenue, optimize operations, 
              and build sustainable competitive advantages.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/70" />
                <span className="text-white/90">strategy@elevatorconsulting.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/70" />
                <span className="text-white/90">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-smooth text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-smooth text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-smooth text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
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