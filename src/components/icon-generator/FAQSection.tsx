
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How does the AI icon generator work?",
      answer: "Our AI icon generator uses advanced machine learning algorithms to transform your text descriptions into custom icons. The AI has been trained on millions of professional icon designs, understanding design principles, styles, and visual aesthetics. Just describe what you want, select a style and colors, and our AI will generate multiple icon options for you to choose from."
    },
    {
      question: "What styles of icons can I create?",
      answer: "You can create icons in 20 different styles, including flat, gradient, outlined, 3D, isometric, hand-drawn, pixel art, minimalist, duotone, line art, glyph, cartoon, material design, neon, vintage, watercolor, glassmorphism, neumorphic, clay, and emoji styles. Each style gives your icons a unique look and feel."
    },
    {
      question: "How many icons can I generate at once?",
      answer: "You can generate between 1 and 8 icons at once based on the same description. This allows you to explore different variations of your concept and choose the one that best fits your needs."
    },
    {
      question: "What format are the icons delivered in?",
      answer: "Icons are generated and delivered in WEBP format, which provides high quality with small file sizes. This format is widely supported by modern browsers and applications."
    },
    {
      question: "Can I use these icons commercially?",
      answer: "Yes, all icons you generate are royalty-free and can be used for both personal and commercial projects. You retain all rights to the icons you create with our tool."
    },
    {
      question: "How detailed should my icon description be?",
      answer: "The more specific your description, the better results you'll get. Include details about what the icon should represent, any specific elements you want to include, and the style or mood you're looking for. For example, instead of just 'house icon', try 'modern minimalist house icon with a chimney and pitched roof'."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our AI icon generator
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
