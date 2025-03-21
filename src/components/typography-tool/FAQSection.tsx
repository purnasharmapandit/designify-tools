
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is a typography system?",
      answer: "A typography system is a structured approach to using fonts, sizes, weights, and spacing in your designs. It creates consistent visual hierarchy and improves readability across all your digital products, from websites to apps and marketing materials."
    },
    {
      question: "Do I need design experience to use this tool?",
      answer: "Not at all! Our Typography Tool is designed for users of all skill levels. We provide pre-made templates and recommendations that make it easy to create professional typography systems without prior design knowledge."
    },
    {
      question: "What font libraries are supported?",
      answer: "Our tool integrates with Google Fonts, Adobe Fonts (Typekit), and other popular web font services. You can also upload custom fonts if you have the proper licensing to use them in your projects."
    },
    {
      question: "Can I export my typography system to use in my projects?",
      answer: "Yes! You can export your complete typography system as CSS variables, Tailwind CSS configuration, SCSS variables, or design tokens that can be imported into design tools like Figma or development frameworks."
    },
    {
      question: "How does responsive typography work?",
      answer: "Our tool helps you create typography that scales proportionally across different screen sizes. You can set minimum and maximum sizes for each text element, and our system will generate the appropriate fluid typography CSS using clamp() functions."
    },
    {
      question: "Can I save multiple typography systems?",
      answer: "Absolutely! You can create and save multiple typography systems for different projects or brand variations. Each system can be revisited and edited at any time."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our Typography Tool
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
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
      </div>
    </section>
  );
};

export default FAQSection;
