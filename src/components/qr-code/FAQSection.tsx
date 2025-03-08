
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a QR code?",
    answer: "A QR (Quick Response) code is a type of barcode that contains information such as URLs, text, or contact information. When scanned with a smartphone camera or QR code reader, it quickly directs users to the encoded information."
  },
  {
    question: "How do I scan a QR code?",
    answer: "Most modern smartphones can scan QR codes directly through the camera app. Simply open your camera app, point it at the QR code, and tap on the notification that appears. Some devices may require a dedicated QR code scanner app."
  },
  {
    question: "What types of content can I encode in a QR code?",
    answer: "You can encode various types of content including URLs, plain text, contact information (vCard), phone numbers, SMS messages, email addresses, Wi-Fi credentials, and more."
  },
  {
    question: "What is error correction in QR codes?",
    answer: "Error correction allows QR codes to remain scannable even when part of the code is damaged or obscured. Higher error correction levels make the code more resilient but also more complex (larger). Our generator offers four levels: Low (7%), Medium (15%), Quartile (25%), and High (30%)."
  },
  {
    question: "What file format should I choose for my QR code?",
    answer: "PNG is best for most digital uses and when you need transparency. SVG is ideal for printing at any size without quality loss. JPG is suitable for simpler uses when file size matters, but doesn't support transparency."
  },
  {
    question: "Is there a limit to how much data a QR code can store?",
    answer: "Yes, QR codes have data capacity limits. The maximum is about 4,296 alphanumeric characters, but the practical limit is often lower for good scannability. For large amounts of data, consider linking to a website rather than encoding the data directly."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our QR code generator
            </p>
          </motion.div>
          
          <div className="bg-white rounded-xl shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b last:border-b-0">
                    <AccordionTrigger className="text-left font-medium px-4 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground px-4 pb-4 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
