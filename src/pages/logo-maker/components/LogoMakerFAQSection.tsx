
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LogoMakerFAQSection = () => {
  const faqs = [
    {
      question: "How does the AI logo generator work?",
      answer: "Our AI logo generator uses advanced machine learning algorithms to create unique, professional logos based on your business information. Simply enter details about your business, select your preferences, and our AI will generate multiple logo options for you to choose from and customize."
    },
    {
      question: "Can I edit my logo after it's generated?",
      answer: "Absolutely! After generating your logos, you can select any design to customize further. Our editor lets you modify colors, fonts, layouts, and more. You can make unlimited edits until your logo is perfect."
    },
    {
      question: "What file formats will I receive?",
      answer: "You can download your finished logo in multiple formats including SVG (vector), PNG (with transparent background), JPG, and PDF. Vector formats like SVG allow you to scale your logo to any size without losing quality."
    },
    {
      question: "Do I own the rights to my logo?",
      answer: "Yes, you retain full ownership rights to any logo you create using our platform. Your logos are 100% yours to use for any commercial or personal purpose."
    },
    {
      question: "Is there a limit to how many logos I can generate?",
      answer: "Our free plan allows you to generate a limited number of logos per month. For unlimited logo generation and access to premium features, check out our affordable subscription plans."
    },
    {
      question: "Can I use my logo for commercial purposes?",
      answer: "Yes! All logos created on our platform can be used for any commercial purpose, including business branding, marketing materials, websites, and merchandise."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Common questions about our AI Logo Maker</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default LogoMakerFAQSection;
