import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIconsBackground from "@/components/FloatingIconsBackground";

const News = () => {
  return (
    <div className="min-h-screen bg-consulting-light relative overflow-hidden">
      <FloatingIconsBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-brand text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-consulting-dark mb-6 sm:mb-8 animate-elegant-fade-up">
            NEWS & OFFICIAL RELEASES
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-consulting-medium max-w-3xl mx-auto leading-relaxed animate-elegant-fade-up animate-delay-200">
            Stay updated with the latest press releases and announcements from Elevator Consulting.
          </p>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-consulting-medium text-lg">
            Press releases coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
