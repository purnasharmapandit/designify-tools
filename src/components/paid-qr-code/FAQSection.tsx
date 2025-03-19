
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What analytics are included with premium QR codes?",
      answer: "Our premium QR codes include 1 year of scan analytics, providing data on scan counts, devices used, scan times, and geographical locations. All data can be exported to CSV for further analysis."
    },
    {
      question: "How does the location tracking work?",
      answer: "When a user scans your QR code, our system anonymously captures the general location data (city and country level) where the scan occurred. This is displayed on your analytics dashboard as a heat map and location breakdown."
    },
    {
      question: "Can I add team members to manage QR codes?",
      answer: "Yes, our add-on user feature allows you to add team members with different permission levels. Each team member can create, edit, and view analytics for QR codes based on their assigned permissions."
    },
    {
      question: "How do I export analytics data to CSV?",
      answer: "Simply go to your QR code analytics dashboard, select the date range you're interested in, and click the 'Export to CSV' button. The file will download automatically with all scan data for that period."
    },
    {
      question: "What happens after the 1-year analytics period?",
      answer: "After the initial 1-year period, you can renew your analytics subscription to continue tracking and storing scan data. If you choose not to renew, your QR codes will continue to function, but new scan data will not be recorded."
    },
    {
      question: "Can I create more QR codes later?",
      answer: "Absolutely! With our add-on codes feature, you can purchase additional QR codes whenever you need them. These will be added to your account immediately and include the same premium analytics features."
    },
    {
      question: "Are premium QR codes compatible with all devices?",
      answer: "Yes, our QR codes are compatible with virtually all modern smartphones and tablets that have a camera. They work across iOS, Android, and other mobile operating systems without requiring any special apps."
    },
    {
      question: "Can I customize the design of premium QR codes?",
      answer: "Yes, premium QR codes come with all the same customization options as standard QR codes, including custom colors, logos, and design elements. The difference is in the analytics capabilities, not the visual options."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our premium QR code analytics service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                <AccordionTrigger className="text-left font-medium text-lg px-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 text-gray-600">
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
