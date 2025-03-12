
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the background remover work?",
      answer: "Our background remover uses advanced AI algorithms to detect and separate the foreground subject from the background. It analyzes edges, colors, and shapes to create a precise mask, then removes the background while preserving details like hair and transparent elements."
    },
    {
      question: "What kinds of images work best?",
      answer: "Images with good contrast between the subject and background work best. Photos with clear subjects, good lighting, and simple backgrounds yield the best results. However, our AI can handle complex images too, including those with multiple subjects."
    },
    {
      question: "What file formats are supported?",
      answer: "Our tool supports JPEG, PNG, and WebP files for upload. You can download your processed images in PNG format with transparency, JPEG with a white background, or WebP for optimal quality and file size."
    },
    {
      question: "Are there any image size limitations?",
      answer: "The free version supports images up to 5MB and resolutions up to 1500x1500 pixels. Premium users can process larger images up to 25MB and resolutions up to 4000x4000 pixels."
    },
    {
      question: "How long does processing take?",
      answer: "Most images are processed within seconds. Processing time depends on the image size, complexity, and current server load. Larger or more complex images may take up to a minute to process."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, your privacy is important to us. Your images are temporarily stored on our secure servers only for processing and are automatically deleted afterward. We don't sell or share your images with third parties."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our background removal tool
          </p>
        </motion.div>
        
        <Accordion type="single" collapsible className="bg-white rounded-lg">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-purple-100">
              <AccordionTrigger className="py-5 text-left font-medium hover:text-purple-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
