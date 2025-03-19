
import React from "react";
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Premium QR Code",
      description: "Choose your content type, customize design, and enable analytics features."
    },
    {
      number: "02",
      title: "Deploy Your QR Codes",
      description: "Place your QR codes on marketing materials, products, or digital assets."
    },
    {
      number: "03",
      title: "Track Performance in Real-Time",
      description: "Monitor scans, locations, and engagement directly from your dashboard."
    },
    {
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
        
        <div className="relative max-w-5xl mx-auto">
          {/* Progress line */}
          <div className="absolute top-24 left-0 w-full h-0.5 bg-gray-200 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 relative z-10">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
