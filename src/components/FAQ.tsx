import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What exactly do you do?",
      answer: "We rebuild your sales engine from the ground up — processes, playbooks, positioning, and people. We don't just consult; we work hands-on with your team to create a self-sustaining revenue system that doesn't depend on luck, referrals, or agencies."
    },
    {
      question: "How is this different from hiring a sales consultant?",
      answer: "Most consultants give you a PDF and wish you luck. We stay embedded with your team, retrain your people, rewire your processes, and ensure the system actually works before we step back. Plus, we're on retainer — meaning we're always here when you need us."
    },
    {
      question: "What kind of companies do you work with?",
      answer: "Legacy B2B companies looking to modernize their sales approach without burning everything down. We specialize in helping established businesses transition to new-age processes while respecting what already works."
    },
    {
      question: "How long does a typical engagement last?",
      answer: "Every engagement is custom-scoped based on your specific challenges and goals. However, we operate on a retainer model because real transformation doesn't happen overnight — and we want to be there for every step of the journey."
    },
    {
      question: "Why a retainer model?",
      answer: "Because we're here for you, always. Sales engines need ongoing calibration. Markets shift. Teams evolve. A retainer ensures you're never stuck figuring things out alone — we're a call away whenever you need strategic guidance or hands-on support."
    },
    {
      question: "What results can I expect?",
      answer: "Our clients typically see 35-50% improvements in close rates, predictable pipeline growth, and sales teams that can operate independently. But more importantly, you'll have a system that generates revenue without relying on heroics or happy accidents."
    },
    {
      question: "How do I know if this is right for my company?",
      answer: "Book an eleven-minute call with us. That's all it takes. We'll quickly assess your current situation and tell you honestly whether we can help — no pitch, no pressure, just clarity."
    }
  ];

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Questions? We've Got Answers.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            Everything you need to know before we talk.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg sm:rounded-xl px-4 sm:px-6 data-[state=open]:shadow-lg transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold text-foreground hover:no-underline py-4 sm:py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-4 sm:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
