
import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles,
  Palette,
  Layout,
  PaintBucket,
  Download,
  Undo2,
  Layers,
  PenTool
} from "lucide-react";

const FeaturesGridSection = () => {
  const features = [
    {
      icon: <Sparkles className="h-10 w-10 text-purple-500" />,
      title: "AI-Powered Generation",
      description: "Our advanced AI creates unique, professional logos based on your brand description."
    },
    {
      icon: <Palette className="h-10 w-10 text-pink-500" />,
      title: "Custom Color Palettes",
      description: "Choose from trending color combinations or create your own to match your brand identity."
    },
    {
      icon: <Layout className="h-10 w-10 text-indigo-500" />,
      title: "Multiple Layouts",
      description: "Explore different logo arrangements including stacked, horizontal, and circular designs."
    },
    {
      icon: <PaintBucket className="h-10 w-10 text-blue-500" />,
      title: "Font Customization",
      description: "Access premium fonts and typographic settings to perfect your logo's text elements."
    },
    {
      icon: <Download className="h-10 w-10 text-emerald-500" />,
      title: "High-Quality Exports",
      description: "Download your logo in multiple formats including SVG, PNG, and PDF for any use case."
    },
    {
      icon: <Undo2 className="h-10 w-10 text-amber-500" />,
      title: "Unlimited Revisions",
      description: "Make as many changes as you need until your logo is exactly how you want it."
    },
    {
      icon: <Layers className="h-10 w-10 text-red-500" />,
      title: "Industry-Specific Designs",
      description: "Get logo suggestions tailored to your specific industry and audience."
    },
    {
      icon: <PenTool className="h-10 w-10 text-teal-500" />,
      title: "Icon Library",
      description: "Access thousands of professional icons and symbols to enhance your logo design."
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Logo Design Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create the perfect logo for your brand
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="mb-4 bg-gray-50 p-3 rounded-full inline-block">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection;
