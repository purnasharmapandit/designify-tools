
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What social media platforms are supported?",
      answer: "Our Social Media Kit supports all major platforms including Instagram (posts, stories, reels), Facebook, Twitter/X, LinkedIn, YouTube (thumbnails, banners), TikTok, Pinterest, and more. Each template is pre-sized to the optimal dimensions for each platform."
    },
    {
      question: "Can I use my own brand assets and colors?",
      answer: "Absolutely! You can upload your logo, brand fonts, and set your brand colors. Once uploaded, you can apply them across all your designs with a single click to maintain brand consistency."
    },
    {
      question: "Is there a limit to how many designs I can create?",
      answer: "With our standard plan, you can create up to 50 designs per month. Our premium plans offer unlimited design creation to support businesses with higher content needs."
    },
    {
      question: "Can I schedule posts directly from your tool?",
      answer: "Currently, our tool focuses on design creation. However, we do integrate with popular scheduling tools like Buffer, Hootsuite, and Later, allowing you to export your designs directly to these platforms."
    },
    {
      question: "Do you offer animated templates for Stories and Reels?",
      answer: "Yes! We offer both static and animated templates for Instagram Stories, Reels, TikTok, and other platforms that support animated content. These templates include customizable animation effects."
    },
    {
      question: "Can I collaborate with my team on designs?",
      answer: "Yes, our team collaboration features allow multiple users to work on the same social media kit. You can assign roles, leave comments, and track changes to streamline your content creation process."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our Social Media Kit
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
