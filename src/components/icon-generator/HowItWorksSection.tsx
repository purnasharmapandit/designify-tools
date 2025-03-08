
import React from "react";
import { motion } from "framer-motion";
import { Type, PaintBucket, Download } from "lucide-react";

const steps = [
  {
    icon: <Type className="h-8 w-8" />,
    title: "Describe Your Icon",
    description: "Enter a detailed description of the icon you want to create. Be specific about style, purpose, and elements you want to include."
  },
  {
    icon: <PaintBucket className="h-8 w-8" />,
    title: "Customize Your Icon",
    description: "Choose from 20+ icon styles, select colors, and adjust settings to match your brand identity perfectly."
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: "Download & Use",
    description: "Download your icons in multiple formats (SVG, PNG, ICO) and use them in any project without attribution or watermarks."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Create Custom Icons in 3 Simple Steps</h2>
          <p className="text-lg text-gray-600">
            Our AI-powered tool makes it easy to generate professional icons in seconds.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  {step.icon}
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold absolute -top-2 -right-2">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
