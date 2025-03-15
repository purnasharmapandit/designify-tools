
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const HowToCreateSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">How to Create the Perfect Logo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to design a professional logo that captures your brand's essence
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border relative z-10">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold mb-3 mt-3">Enter Your Business Details</h3>
              <p className="text-gray-600 mb-4">
                Start by providing your business name, industry, and preferred style to help our AI understand your brand.
              </p>
              <ul className="space-y-2">
                {["Choose your industry", "Select a design style", "Specify color preferences"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border relative z-10">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold mb-3 mt-3">Customize Your Design</h3>
              <p className="text-gray-600 mb-4">
                Fine-tune your logo with our intuitive editor to match your exact brand vision.
              </p>
              <ul className="space-y-2">
                {["Adjust colors and fonts", "Modify icon position and size", "Add or remove elements", "Test different layouts"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border relative z-10">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold mb-3 mt-3">Download & Use</h3>
              <p className="text-gray-600 mb-4">
                Export your finalized logo in multiple formats, ready for immediate use across all platforms.
              </p>
              <ul className="space-y-2">
                {["Get high-resolution PNG files", "Download vector SVG format", "Use on websites, social media, and print", "No watermarks or limitations"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToCreateSection;
