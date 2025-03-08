
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI icon generator work?",
    answer: "Our AI icon generator uses advanced machine learning algorithms that have been trained on millions of professional icons. When you enter your description and preferences, the AI interprets your request and generates custom icons that match your specifications. You can then customize the results by adjusting colors, style, and other attributes before downloading."
  },
  {
    question: "Are the generated icons free to use?",
    answer: "Yes! All icons created with our AI generator are free to use for both personal and commercial projects. There are no watermarks, attribution requirements, or hidden fees. You receive full usage rights to the icons you generate."
  },
  {
    question: "What file formats can I download my icons in?",
    answer: "You can download your icons in multiple formats including SVG (scalable vector graphics), PNG with transparent backgrounds (in various sizes), and ICO format for favicons. SVG is recommended for most uses as it's scalable to any size without losing quality."
  },
  {
    question: "Can I customize the colors and style of my icons?",
    answer: "Absolutely! Our tool offers extensive customization options. You can select from 20+ different icon styles (flat, gradient, outlined, 3D, isometric, etc.), choose custom colors for both the icon and background, and adjust other attributes to perfectly match your brand identity."
  },
  {
    question: "Do I need design skills to create professional icons?",
    answer: "Not at all! Our AI icon generator is designed to be user-friendly for everyone, regardless of design experience. Simply describe what you want, choose your preferences, and the AI handles the technical design work. The intuitive interface makes it easy to create professional-quality icons without any design skills."
  },
  {
    question: "How many icons can I generate?",
    answer: "You can generate up to 8 icon variations at once. This allows you to compare different interpretations of your request and choose the one that best fits your needs. There's no limit to how many batches you can create, so you can experiment until you find the perfect icon."
  },
  {
    question: "Is there a limit to how many icons I can download?",
    answer: "No, there are no download limits with our free icon generator. You can create and download as many icons as you need for your projects. For bulk generation needs or advanced features, check out our premium plans."
  },
  {
    question: "Can I use these icons for my business or commercial projects?",
    answer: "Yes, all icons generated with our tool can be used for commercial purposes including business websites, apps, marketing materials, products for sale, and client work. You receive full commercial usage rights with every download."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
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
