
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Send, BarChart3, Download } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      number: "01",
      title: "Create Your Premium QR Code",
      description: "Choose your content type, customize design, and enable analytics features."
    },
    {
      icon: <Send className="h-8 w-8 text-primary" />,
      number: "02",
      title: "Deploy Your QR Codes",
      description: "Place your QR codes on marketing materials, products, or digital assets."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      number: "03",
      title: "Track Performance in Real-Time",
      description: "Monitor scans, locations, and engagement directly from your dashboard."
    },
    {
      icon: <Download className="h-8 w-8 text-primary" />,
      number: "04",
      title: "Analyze & Optimize",
      description: "Export data, create reports, and refine your marketing strategy based on insights."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our premium QR code service is designed to be powerful yet simple to use. Here's how to get started:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {step.number}
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
