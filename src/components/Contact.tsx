import { Card } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [{
    icon: Mail,
    title: "Reach out to us",
    content: "business@elevatorconsulting.in",
    description: "We'll get back to you superfast"
  }, {
    icon: MapPin,
    title: "Address",
    content: "2nd Floor - Tower 5, World Trade Centre, Pune - 411014",
    description: "Our headquarters"
  }];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 lg:h-48 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none"></div>
      
      {/* Glassmorphic background effects with bokeh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bokeh-orb absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="bokeh-orb absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/6 rounded-full blur-3xl" style={{ animationDelay: '3s' }}></div>
        <div className="bokeh-orb absolute top-1/2 left-1/2 w-32 h-32 sm:w-56 sm:h-56 bg-accent/8 rounded-full blur-3xl" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-18 reveal-on-scroll">
          <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Change starts here, and now.
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            The toughest part is to start, and the earlier you do - the better. Connect with our strategy experts 
            to discuss how we bring the 'elevate' to your campaign.
          </p>
        </div>

        {/* Glassmorphic container */}
        <div className="glass-card-contact rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 backdrop-blur-xl bg-background/60 border border-border/50 shadow-xl max-w-5xl mx-auto reveal-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title} 
                className="p-5 sm:p-6 lg:p-8 bg-background/80 border-border/30 hover:shadow-lg transition-all duration-500 hover:scale-[1.02] reveal-on-scroll" 
                style={{ "--stagger": `${index * 120}ms` } as React.CSSProperties}
              >
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-all duration-500">
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-base sm:text-lg lg:text-xl">
                      {info.title}
                    </h4>
                    <div className="text-foreground/90 mb-1 sm:mb-2 font-medium text-sm sm:text-base lg:text-lg break-words">
                      {info.content}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                      {info.description}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
