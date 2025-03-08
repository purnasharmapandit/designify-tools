
import React from "react";
import { motion } from "framer-motion";
import { Wand2, Palette, Download, Globe, Clock, PersonStanding, Layers } from "lucide-react";

const features = [
  {
    icon: <Wand2 className="h-6 w-6" />,
    title: "AI-Powered Generation",
    description: "Create professional-quality icons in seconds with our advanced AI technology."
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Fully Customizable",
    description: "Choose from 20+ styles and customize colors to match your brand perfectly."
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Multiple Formats",
    description: "Download your icons in SVG, PNG, and ICO formats for use anywhere."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "No Watermarks",
    description: "All icons are completely watermark-free and ready for commercial use."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Save Time",
    description: "Generate in seconds what would take hours to create manually."
  },
  {
    icon: <PersonStanding className="h-6 w-6" />,
    title: "No Design Skills Needed",
    description: "Create professional icons even if you're not a designer."
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Batch Generation",
    description: "Create multiple variations at once to find the perfect icon."
  }
];

const FeaturesList = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Features That Make Icon Creation Simple
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI icon generator includes everything you need to create professional icons without the hassle
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border flex flex-col items-start"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
