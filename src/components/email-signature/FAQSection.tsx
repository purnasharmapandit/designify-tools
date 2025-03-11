
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I add my signature to Gmail?",
      answer: "In Gmail, go to Settings > See all settings > General > Signature. Create a new signature, then paste the HTML code by clicking the 'Insert signature' option in the compose window."
    },
    {
      question: "How do I add my signature to Outlook?",
      answer: "In Outlook, go to File > Options > Mail > Signatures. Create a new signature, then paste the HTML code or import the HTML file into the editing area."
    },
    {
      question: "Can I use my own custom fonts?",
      answer: "Email clients have limited font support. We provide a selection of widely supported fonts to ensure your signature appears correctly across different email clients."
    },
    {
      question: "How do I add a profile photo?",
      answer: "Enter the URL of your photo in the Profile Photo field. The image should be hosted online and accessible via a direct link. We recommend using a square image (100x100px) for best results."
    },
    {
      question: "Why isn't my signature showing up correctly in some email clients?",
      answer: "Different email clients have varying levels of HTML and CSS support. Our templates are designed to work across major email clients, but some formatting may vary slightly."
    },
    {
      question: "Can I save multiple signature designs?",
      answer: "Currently, you need to export each signature design as you create it. We recommend saving the HTML files with descriptive names for future reference."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
