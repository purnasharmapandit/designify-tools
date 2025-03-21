
import React from "react";
import { motion } from "framer-motion";
import { 
  Layout, 
  Type, 
  LineChart, 
  Image, 
  Users,
  Sparkles,
  Layers,
  Download
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: "Professional Templates",
      description: "Choose from hundreds of professionally designed slide templates for any presentation purpose."
    },
    {
      icon: <Type className="h-10 w-10 text-primary" />,
      title: "Smart Layouts",
      description: "Auto-arrange content with intelligent layouts that maintain visual balance and hierarchy."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Data Visualization",
      description: "Create impactful charts and graphs that automatically update when your data changes."
    },
    {
      icon: <Image className="h-10 w-10 text-primary" />,
      title: "AI Image Enhancement",
      description: "Automatically enhance and resize images to fit perfectly within your slides."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Real-time Collaboration",
      description: "Work simultaneously with team members on the same presentation with live editing."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "AI Content Generation",
      description: "Generate slide content, talking points, and speaker notes with our AI assistant."
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Master Slides",
      description: "Create consistent branding across all slides with customizable master slides."
    },
    {
      icon: <Download className="h-10 w-10 text-primary" />,
      title: "Multiple Export Formats",
      description: "Export to PowerPoint, PDF, or present directly from our online platform."
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Presentation Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create stunning presentations that captivate your audience with our comprehensive toolset
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
