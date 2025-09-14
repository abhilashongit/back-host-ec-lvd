import { Card } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Talk to our founder",
      content: "abhilash@elevatorconsulting.in",
      description: "Direct line to our founder"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Prestige Panorama, Pune - 411036",
      description: "Our headquarters"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-caption text-4xl md:text-5xl font-bold text-consulting-dark mb-6">
            Begin the change <b>today</b>
          </h2>
          <p className="text-xl text-consulting-light max-w-3xl mx-auto leading-relaxed">
            The toughest part is to start, and the earlier you do - the better. <br />  Connect with our strategy experts 
            to discuss how we bring the 'elevate' to your campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card 
              key={info.title}
              className="p-8 bg-gradient-card border-consulting-subtle hover:shadow-card transition-smooth animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-consulting-dark rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-consulting-dark mb-1 text-lg">
                    {info.title}
                  </h4>
                  <div className="text-consulting-dark mb-1 font-medium">
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
      </div>
    </section>
  );
};

export default Contact;
