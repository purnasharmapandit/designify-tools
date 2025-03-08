
import React from "react";
import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are color harmonies?",
    answer: "Color harmonies are combinations of colors that are visually pleasing based on their position on the color wheel. Common harmonies include analogous (colors next to each other on the wheel), complementary (colors opposite each other), triadic (three evenly spaced colors), and monochromatic (variations of the same color)."
  },
  {
    question: "How do I choose the right color palette for my project?",
    answer: "Consider the emotion you want to convey, your target audience, and industry standards. For example, blues often convey trust and professionalism, while reds can signal energy or urgency. Our tool allows you to experiment with different harmonies until you find the perfect combination."
  },
  {
    question: "What's the difference between RGB, HEX, and HSL color formats?",
    answer: "HEX codes (like #FF5733) are commonly used in web design. RGB values specify the amount of red, green, and blue in a color. HSL represents colors by hue, saturation, and lightness, which is often more intuitive for designers. Our tool allows you to export in multiple formats depending on your needs."
  },
  {
    question: "How many colors should I include in my palette?",
    answer: "A typical color palette includes 3-5 colors: a primary color, a secondary color, an accent color, and often a couple of neutral tones. Too many colors can make a design feel cluttered, while too few might limit expression. Our tool lets you adjust the number of colors to find the right balance."
  },
  {
    question: "How can I use the 'lock' feature effectively?",
    answer: "The lock feature allows you to keep colors you like while generating new options for others. This is useful when you have brand colors that must be included or when you find a perfect shade but need complementary colors. Simply click the lock icon on any color you want to keep, then generate new palettes."
  },
  {
    question: "Can I save my color palettes for later use?",
    answer: "Currently, you can export your palette in various formats like HEX, RGB, HSL, CSS variables, or Tailwind config. You can also copy the colors to your clipboard for immediate use in design tools. We're working on adding a save feature for registered users in a future update."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about color palettes and our generator
            </p>
          </motion.div>
          
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
