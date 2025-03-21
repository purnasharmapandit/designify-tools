
import React from "react";
import { motion } from "framer-motion";
import { Type, Sliders, PenTool, DownloadCloud } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Type className="h-8 w-8" />,
      title: "Choose Your Base Font",
      description: "Select a primary font that matches your brand's personality from our extensive collection of web fonts."
    },
    {
      icon: <Sliders className="h-8 w-8" />,
      title: "Customize Your System",
      description: "Set your font sizes, line heights, and spacing to create a cohesive typographic scale."
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Preview & Refine",
      description: "See your typography in action with live previews and make adjustments until it's perfect."
    },
    {
      icon: <DownloadCloud className="h-8 w-8" />,
      title: "Export & Implement",
      description: "Download your typography system as CSS, design tokens, or configuration files ready to use."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Our Typography Tool Works</h2>
          <p className="text-lg text-gray-600">
            Create professional typography systems in just a few simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
