
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ImageEditorFAQs = () => {
  const faqs = [
    {
      question: "Is the image editor free to use?",
      answer: "Our image editor offers both free and premium plans. The free plan includes basic editing features, while the premium plans provide access to advanced tools like AI enhancements, bulk editing, and higher resolution exports."
    },
    {
      question: "Do I need to create an account to use the image editor?",
      answer: "You can try basic features without an account, but creating a free account allows you to save your projects, access your editing history, and use more advanced features."
    },
    {
      question: "What file formats are supported?",
      answer: "Our image editor supports all popular image formats including JPG, PNG, WebP, SVG, and PSD. You can also export your edited images in various formats depending on your needs."
    },
    {
      question: "Can I use the AI enhancement features on all images?",
      answer: "Yes, our AI enhancement tools work with all image types, though results may vary depending on the original image quality and content. Premium users get access to more advanced AI tools and higher processing limits."
    },
    {
      question: "Are there any limits on image resolution?",
      answer: "Free accounts can edit images up to 1080p resolution. Premium accounts can work with images up to 4K resolution, and our professional tier supports images up to 8K resolution."
    },
    {
      question: "How does the object removal tool work?",
      answer: "Our AI-powered object removal tool uses advanced algorithms to intelligently identify the selected object and remove it while filling the area naturally based on the surrounding content. For best results, we recommend using images with clear distinction between objects and backgrounds."
    }
  ];

  return (
    <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="px-6 py-4 text-left font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 text-gray-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ImageEditorFAQs;
