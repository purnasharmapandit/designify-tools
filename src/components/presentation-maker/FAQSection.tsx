
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PresentationMakerFAQs = () => {
  const faqs = [
    {
      question: "What makes your Presentation Maker different from other tools?",
      answer: "Our Presentation Maker combines professional templates with AI-powered content generation. Unlike other tools, we offer smart layout suggestions, automated data visualization, and real-time collaboration features in one integrated platform."
    },
    {
      question: "Do I need design experience to use this tool?",
      answer: "Not at all! Our templates and AI assistant make it easy for anyone to create professional presentations. You can start with a template and customize it to your needs, or let our AI help generate content based on your input."
    },
    {
      question: "Can I import slides from PowerPoint or Google Slides?",
      answer: "Yes, our platform supports importing slides from PowerPoint (.pptx) and Google Slides. You can also export your presentations to these formats for compatibility with other tools."
    },
    {
      question: "Is it possible to collaborate with my team on presentations?",
      answer: "Absolutely! Our platform includes real-time collaboration features that allow multiple team members to work on the same presentation simultaneously. You can also leave comments, track changes, and manage version history."
    },
    {
      question: "What types of charts and data visualizations are available?",
      answer: "We offer a wide range of data visualization options including bar charts, line graphs, pie charts, scatter plots, area charts, and more. Our smart chart builder can automatically suggest the best visualization for your data."
    },
    {
      question: "How does the AI content assistant work?",
      answer: "Our AI content assistant can help generate slide content, suggest improvements to your text, create outlines based on your topic, and even recommend relevant images. It learns from your preferences and improves over time."
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

export default PresentationMakerFAQs;
