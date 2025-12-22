import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingIconsBackground from "@/components/FloatingIconsBackground";
import citeelEcPress from "@/assets/citeel-ec-press.webp";
const NewsArticle = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-black relative overflow-hidden text-white">
      <FloatingIconsBackground />
      <Navigation />
      
      {/* Article Content */}
      <article className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
          {/* Hero Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-10 animate-article-image">
            <img src={citeelEcPress} alt="Citeel X EC partnership announcement" className="w-full h-full object-cover" />
          </div>

          {/* Article Header */}
          <header className="mb-10 animate-article-header">
            <h1 className="font-brand text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
  Namaste India — Citeel X Elevator Consulting
          </h1>

          <h4 className="font-brand text-lg sm:text-xl bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
  Pune / Amsterdam — December 22, 2025
          </h4>

          </header>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none animate-article-body text-white-200">


            <p className="font-caption text-lg leading-relaxed mb-8 text-muted-foreground">
              Citeel, a global provider of advanced cybersecurity and data solutions, has formally engaged Elevator Consulting as its strategic advisory partner to assess the feasibility and strategic approach for future operations in the Indian market. This initiative represents a structured, analytical first phase intended to evaluate market, regulatory frameworks, operational considerations, and potential entry pathways ahead of any formal presence in India.
            </p>

            <h3 className="font-caption font-bold text-consulting-dark text-xl mb-4">
              Strategic Context
            </h3>
            <p className="font-caption text-consulting-dark/85 text-lg leading-relaxed mb-8">
              India's digital economy is expanding at pace, driven by enterprise cloud adoption, data localisation mandates, and increasing demand for secure digital infrastructure. As global technology vendors seek to align with local regulatory, commercial, and compliance requirements, a detailed market evaluation is critical to informed decision-making. The engagement with Elevator Consulting will commence in January 2026 and is designed to produce a robust, data-driven recommendation on whether and how Citeel will establish its presence in India.
            </p>

            <h3 className="font-caption font-bold text-consulting-dark text-xl mb-4">
              What we're here to do
            </h3>
            <p className="font-caption text-consulting-dark/85 text-lg leading-relaxed mb-4">
              Under the terms of the engagement:
            </p>
            <ul className="font-caption text-consulting-dark/85 text-lg leading-relaxed mb-8 space-y-3 list-disc pl-6">
              <li>Elevator Consulting will conduct a comprehensive market scan, including segmentation and competitive analysis.</li>
              <li>Regulatory and compliance frameworks relevant to cybersecurity, cloud computing, and data protection in India will be mapped and interpreted.</li>
              <li>Operational models and partnership structures will be evaluated for commercial viability and scalability.</li>
              <li>A targeted set of entry scenarios with associated cost, risk, and resource implications will be developed.</li>
            </ul>
            <p className="font-caption text-consulting-dark/85 text-lg leading-relaxed mb-8">
              This phased evaluation reflects a cautious, strategic approach prioritising long-term alignment over immediate market entry. It will equip Citeel's leadership with actionable insights rooted in local context and sector expertise.
            </p>

            <h3 className="font-caption font-bold text-consulting-dark text-xl mb-4">
              Leadership Commentary
            </h3>
           <blockquote className="border-l-4 border-gray-500 pl-6 py-4 my-8 bg-white/5 rounded-r-xl">

              <p className="font-caption text-consulting-dark/90 text-lg leading-relaxed italic">
                "Citeel's solutions are cutting edge and offer a new dimension of data securitization that will play right into the emerging markets' needs in India. In today's data-centric life, security is a pivotal backbone."
              </p>
              <footer className="mt-4 font-caption text-consulting-medium text-base">
                — Abhilash Kar, Senior Consultant at Elevator Consulting
              </footer>
            </blockquote>
            <p className="font-caption text-consulting-dark/85 text-lg leading-relaxed mb-8">
              His assessment underscores the relevance of secure data management platforms in India's evolving digital infrastructure landscape, where enterprises and government actors alike are prioritising sovereign data controls and resilient architectures.
            </p>

            <h3 className="font-caption font-bold text-consulting-dark text-xl mb-4">
              Next Steps
            </h3>
            <p className="font-caption text-consulting-dark/85 text-lg leading-relaxed mb-8">
              From January 2026 onward, the joint effort will transition into detailed analysis, with interim findings expected to support strategic deliberations by both Citeel and its prospective partners in India. Final recommendations will consider the timing, structure, and scale of Citeel's possible market entry or collaboration models.
            </p>

            <h3 className="font-caption font-bold text-consulting-dark text-xl mb-4">
              About Elevator Consulting
            </h3>
            <p className="font-caption text-consulting-dark/85 text-lg leading-relaxed">
              Elevator Consulting is a management consulting firm specialised in market entry, digital transformation, and revenue growth strategies across emerging and frontier markets. The firm provides bespoke, evidence-based advisory services to global technology players seeking disciplined, scalable expansion frameworks.
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-12 animate-article-body">
            <button onClick={() => navigate('/news')} className="font-caption text-consulting-accent hover:text-consulting-dark transition-colors duration-300 flex items-center gap-2">
              ← Back to News
            </button>
          </div>
        </div>
      </article>

      <Footer />
    </div>;
};
export default NewsArticle;