import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "strategy@elevatorconsulting.com",
      description: "Direct access to \n our strategy team"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 77091 17839",
      description: "Speak with our strategists directly, \n no support agents in the middle!"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      content: "Pune, MH",
      description: "Situated in the nest of growing startups"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "< 12 hours",
      description: "We're here for you, \n through thick and thin"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-consulting-dark mb-6">
            Start Your Transformation Journey
          </h2>
          <p className="text-xl text-consulting-light max-w-3xl mx-auto leading-relaxed">
            Ready to unlock your company's full potential? Connect with our strategy experts 
            to discuss how we can drive transformational results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-consulting-subtle animate-slide-in">
            <h3 className="font-serif text-2xl font-semibold text-consulting-dark mb-6">
              Schedule Your Strategy Session
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-consulting-dark mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="Your first name"
                    className="border-consulting-subtle focus:ring-consulting-dark focus:border-consulting-dark"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-consulting-dark mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Your last name"
                    className="border-consulting-subtle focus:ring-consulting-dark focus:border-consulting-dark"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-consulting-dark mb-2">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="your.email@company.com"
                  className="border-consulting-subtle focus:ring-consulting-dark focus:border-consulting-dark"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-consulting-dark mb-2">
                  Company Name
                </label>
                <Input 
                  placeholder="Your company name"
                  className="border-consulting-subtle focus:ring-consulting-dark focus:border-consulting-dark"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-consulting-dark mb-2">
                  Primary Business Challenge
                </label>
                <Textarea 
                  placeholder="Describe your key business challenge or transformation opportunity..."
                  className="min-h-[120px] border-consulting-subtle focus:ring-consulting-dark focus:border-consulting-dark"
                />
              </div>
              
              <Button className="w-full bg-consulting-dark hover:bg-consulting-medium text-white py-3 font-semibold transition-smooth">
                Schedule Strategy Session
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-consulting-dark mb-6">
                Get in Touch
              </h3>
              <p className="text-consulting-light mb-8 leading-relaxed">
                Our team of strategy experts is ready to discuss your business transformation 
                goals and explore how we can accelerate your path to success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="p-6 bg-gradient-card border-consulting-subtle hover:shadow-card transition-smooth"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-consulting-dark rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-consulting-dark mb-1">
                        {info.title}
                      </h4>
                      <div className="text-consulting-dark mb-1">
                        {info.content}
                      </div>
                      <div className="text-sm text-consulting-light">
                        {info.description}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional CTA */}
          
const DiscoveryCard = () => (
  <Card className="p-8 bg-gradient-hero text-center">
    <h4 className="font-serif text-xl font-semibold text-white mb-4">
      Prefer to Talk Directly?
    </h4>
    <p className="text-white/90 mb-6">
      Schedule a 30-minute discovery call with one of our senior consultants 
      to discuss your specific business challenges.
    </p>
    <a 
      href="https://www.calendly.com" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <Button 
        variant="outline"
        className="border-white text-white hover:bg-white/10 px-6 py-3 font-semibold"
      >
        Book Discovery Call
      </Button>
    </a>
  </Card>
);

export default DiscoveryCard;
