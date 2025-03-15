
import React from "react";
import { motion } from "framer-motion";

const LogoMakerFAQSection = () => {
  const faqs = [
    {
      question: "What file formats can I download my logo in?",
      answer: "You can download your logo in multiple formats including PNG (with transparent background), SVG (vector format for scalability), PDF, and JPEG. The SVG and PDF formats are ideal for printing as they can be resized without losing quality."
    },
    {
      question: "Are there any watermarks on the downloaded logos?",
      answer: "No, all logos created with our AI Logo Generator are 100% watermark-free. You'll receive clean files ready for immediate use across all your branding materials."
    },
    {
      question: "Can I modify my logo after it's been generated?",
      answer: "Absolutely! Our logo editor allows unlimited modifications after generation. You can change colors, fonts, layouts, add or remove elements, adjust sizing, and more until your logo is exactly how you want it."
    },
    {
      question: "Do I own full rights to the logo I create?",
      answer: "Yes, you receive full commercial rights to your custom logo. Once you download your logo, it's yours to use across all your business materials, websites, marketing, merchandise, and more."
    },
    {
      question: "How many logo variations can I generate?",
      answer: "Our AI generator creates multiple logo variations based on your inputs. You can generate up to 20 unique designs per project, giving you plenty of options to choose from."
    },
    {
      question: "Can I use my logo for commercial purposes?",
      answer: "Yes, all logos created with our tool include full commercial usage rights. You can use your logo for business cards, websites, social media, product packaging, advertising, and any other commercial applications."
    },
    {
      question: "What if I'm not satisfied with my logo designs?",
      answer: "You can continue regenerating new logo designs or make manual adjustments in our editor until you're completely satisfied. There's no limit to the number of revisions you can make."
    },
    {
      question: "Is there a refund policy if I'm not happy with the results?",
      answer: "Yes, we offer a satisfaction guarantee. If you're not completely satisfied with your logo designs after multiple attempts, contact our support team within 30 days of purchase for assistance or a refund."
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our AI Logo Generator
          </p>
        </motion.div>
        
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMakerFAQSection;
