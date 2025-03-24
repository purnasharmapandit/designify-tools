
import React from "react";
import { motion } from "framer-motion";
import { Palette, Download, Copy, Layers, Sparkles, Sliders } from "lucide-react";

const features = [
  {
    icon: <Palette className="h-6 w-6 text-purple-500" />,
    title: "Beautiful Gradients",
    description: "Create stunning mesh gradients that add depth and visual interest to your designs."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-blue-500" />,
    title: "One-Click Generation",
    description: "Generate unique gradient combinations with a single click without any design skills."
  },
  {
    icon: <Copy className="h-6 w-6 text-green-500" />,
    title: "Copy CSS Code",
    description: "Easily copy the CSS code for your gradient to use in your web projects."
  },
  {
    icon: <Download className="h-6 w-6 text-pink-500" />,
    title: "Download as Image",
    description: "Save your gradient as a high-quality PNG or JPG for use in any design software."
  },
  {
    icon: <Sliders className="h-6 w-6 text-amber-500" />,
    title: "Customizable",
    description: "Fine-tune your gradient colors and positions to get exactly the look you want."
  },
  {
    icon: <Layers className="h-6 w-6 text-indigo-500" />,
    title: "Multiple Formats",
    description: "Create gradients for various use cases including web backgrounds, UI elements, and more."
  }
];

const MeshGradientFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display mb-4"
          >
            Powerful Gradient Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to create beautiful mesh gradients for your projects
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
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

export default MeshGradientFeatures;
