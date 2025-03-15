
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ToolsFAQSection = () => {
  const faqs = [
    {
      question: "How do I get started with these design tools?",
      answer: "Simply sign up for an account, choose your subscription plan, and you'll have immediate access to all tools based on your plan level. Each tool has an intuitive interface with guided tutorials to help you get started."
    },
    {
      question: "Can I use these tools for commercial projects?",
      answer: "Yes! All designs created with our tools can be used for both personal and commercial projects, with no additional licensing fees required."
    },
    {
      question: "What file formats do your tools support?",
      answer: "Our tools support a wide range of formats including PNG, JPG, SVG, PDF, and more. Specific export options vary by tool and plan level."
    },
    {
      question: "Do I need design experience to use these tools?",
      answer: "Not at all! Our AI-powered tools are designed for users of all skill levels. You can create professional designs with no prior design experience."
    },
    {
      question: "Can I collaborate with team members?",
      answer: "Yes, collaboration features are available on all plans. The number of team members you can invite depends on your subscription level."
    },
    {
      question: "Are there any tutorials available?",
      answer: "Yes, we offer comprehensive tutorials for all our tools in our Help Center. You can also find video tutorials on our YouTube channel."
    }
  ];

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold font-display mb-8 text-center">Frequently Asked Questions</h2>
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
    </div>
  );
};

export default ToolsFAQSection;
