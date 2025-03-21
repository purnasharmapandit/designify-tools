
import React from "react";
import { motion } from "framer-motion";
import { Upload, Palette, Layers, Download } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Upload Your Brand Assets",
      description: "Start by uploading your logo, brand colors, fonts, and any key visuals that represent your brand."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Choose Your Platforms",
      description: "Select which social media platforms you want to create content for, from Instagram to LinkedIn."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Customize Templates",
      description: "Personalize pre-sized templates or create your own designs with our user-friendly editor."
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Export & Share",
      description: "Download your finished designs in the perfect format for each platform, ready to post."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Our Social Media Kit Works</h2>
          <p className="text-lg text-gray-600">
            Create professional social media content in just a few simple steps
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
