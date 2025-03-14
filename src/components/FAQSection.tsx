
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do the AI design tools work?",
    answer: "Our AI tools use advanced machine learning algorithms to understand your requirements and automatically generate professional designs. You simply input your preferences, and the AI does the creative heavy lifting for you."
  },
  {
    question: "Do I need design experience to use these tools?",
    answer: "Not at all! Our tools are designed for everyone, regardless of design experience. The intuitive interface guides you through the process, and the AI handles the complex design work."
  },
  {
    question: "Can I customize the designs after they're generated?",
    answer: "Absolutely! While the AI provides professional starting designs, you retain full control to customize colors, layouts, fonts, and other elements to match your specific vision."
  },
  {
    question: "What formats can I export my designs in?",
    answer: "We support all major file formats including PNG, JPG, SVG, and PDF. For specific tools like the Logo Maker, you'll also get vector files that can be scaled to any size without losing quality."
  },
  {
    question: "Is there a limit to how many designs I can create?",
    answer: "This depends on your subscription plan. Free users can create a limited number of designs per month, while paid subscribers enjoy higher or unlimited creation limits."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 mx-auto">
            Find answers to common questions about our tools
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
                  <AccordionContent className="text-gray-600">
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
