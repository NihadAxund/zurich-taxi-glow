import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How far in advance should I book my airport transfer?',
      answer: 'We recommend booking at least 2 hours in advance, though we can often accommodate last-minute requests. For peak travel times and holidays, booking 24-48 hours ahead ensures availability.'
    },
    {
      question: 'Do you track flight delays and adjust pickup times?',
      answer: 'Yes, we monitor all flights in real-time and automatically adjust pickup times for delays. You don\'t need to contact us - we\'ll be there when you land, regardless of delays.'
    },
    {
      question: 'What happens if my flight is cancelled or significantly delayed?',
      answer: 'If your flight is cancelled, you can reschedule your transfer free of charge up to 24 hours before the new departure. For delays over 2 hours, we automatically adjust or offer a full refund.'
    },
    {
      question: 'Are your prices fixed or do they change based on demand?',
      answer: 'Our base prices are fixed and transparent. However, during peak periods (holidays, major events), surge pricing may apply. You\'ll always see the final price before confirming your booking.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, bank transfers, and cash payments. Corporate accounts can be invoiced monthly. Payment is secure and processed through encrypted channels.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our airport transfer service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="surface-card overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+41441234567" 
              className="inline-flex items-center justify-center btn-primary"
            >
              Call +41 44 123 4567
            </a>
            <a 
              href="mailto:info@zurixtaxi.ch" 
              className="inline-flex items-center justify-center btn-secondary"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;