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
  return <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-elegant-fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-consulting-dark mb-6 sm:mb-8 animate-soft-glow text-shadow-soft px-2 font-caption lg:text-6xl">
            Change starts here, and now.                               <b className="font-semibold text-3xl"> </b>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-2xl text-consulting-light max-w-4xl mx-auto leading-relaxed animate-elegant-fade-up animate-delay-200 px-4">
            The toughest part is to start, and the earlier you do - the better. Connect with our strategy experts 
            to discuss how we bring the 'elevate' to your campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => <Card key={info.title} className="p-6 sm:p-8 lg:p-10 bg-gradient-card border-consulting-subtle hover:shadow-premium transition-all duration-500 animate-premium-scale hover:scale-105" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-consulting-dark rounded-xl flex items-center justify-center flex-shrink-0 hover:bg-consulting-medium transition-all duration-500">
                  <info.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-consulting-dark mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl animate-elegant-fade-up animate-delay-100">
                    {info.title}
                  </h4>
                  <div className="text-consulting-dark mb-2 sm:mb-3 font-medium text-base sm:text-lg animate-elegant-fade-up animate-delay-200">
                    {info.content}
                  </div>
                  <div className="text-sm sm:text-base text-consulting-light animate-elegant-fade-up animate-delay-300">
                    {info.description}
                  </div>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Contact;