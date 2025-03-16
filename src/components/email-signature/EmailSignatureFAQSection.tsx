
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
    question: "What is an email signature?",
    answer: "An email signature is a block of text, images, and links that automatically appears at the end of your emails. It typically includes your name, job title, company, contact information, and sometimes social media links or a company logo."
  },
  {
    question: "Why should I use an email signature?",
    answer: "A professional email signature enhances your brand identity, adds credibility to your communications, provides important contact information, and can include call-to-action elements that drive traffic to your website or social profiles."
  },
  {
    question: "How do I add my signature to Gmail?",
    answer: "Open Gmail settings (gear icon > See all settings), scroll to the Signature section, create a new signature, paste your HTML signature code, and save changes. You can then assign this signature to be used for new emails and/or replies."
  },
  {
    question: "Will my email signature look the same in all email clients?",
    answer: "While most modern email clients support HTML signatures well, there can be slight variations in how they render. Our signatures are designed to maintain consistency across major email clients like Gmail, Outlook, and Apple Mail."
  },
  {
    question: "Can I include images in my email signature?",
    answer: "Yes, you can include both a profile picture and company logo in your signature. However, be aware that some email clients may block images by default, so it's good practice to ensure your signature remains effective even without images."
  },
  {
    question: "Is it possible to add social media icons to my signature?",
    answer: "Absolutely! Our email signature generator allows you to add social media links with icons for platforms like LinkedIn, Twitter, Facebook, Instagram, and more. This helps recipients connect with you across different channels."
  }
];

const EmailSignatureFAQSection = () => {
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
            <h2 className="text-3xl font-bold font-display mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about creating and using email signatures
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

export default EmailSignatureFAQSection;
