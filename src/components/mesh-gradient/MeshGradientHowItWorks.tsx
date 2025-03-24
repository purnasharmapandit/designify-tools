
import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Copy, Download, ArrowRight, Palette, Sliders } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Colors",
    description: "Select up to 6 colors for your gradient, or click 'Randomize' to generate a unique color palette.",
    icon: <Palette className="h-5 w-5" />
  },
  {
    number: "02",
    title: "Customize Effects",
    description: "Adjust the grain and blur levels to achieve your desired look and feel.",
    icon: <Sliders className="h-5 w-5" />
  },
  {
    number: "03",
    title: "Select Canvas Size",
    description: "Choose from 15 different aspect ratios to fit your specific project needs.",
    icon: <ArrowRight className="h-5 w-5" />
  },
  {
    number: "04",
    title: "Copy or Download",
    description: "Copy the CSS code for your web projects or download as an image for your designs.",
    icon: <Download className="h-5 w-5" />
  }
];

const MeshGradientHowItWorks = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Create beautiful mesh gradients in just a few simple steps
          </motion.p>
        </div>
        
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                  {step.icon}
                </div>
                <p className="text-sm font-medium text-primary mb-1">
                  {step.number}
                </p>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-5 h-0.5 transform -translate-x-2.5 bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeshGradientHowItWorks;
