
import React from "react";
import { motion } from "framer-motion";
import { 
  Images, 
  Palette, 
  Sparkles, 
  Clock, 
  Layers,
  Download,
  PenTool,
  CloudDownload
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Images className="h-10 w-10 text-primary" />,
      title: "Multi-Platform Templates",
      description: "Pre-sized templates for Instagram, Facebook, Twitter, LinkedIn, TikTok, and more."
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Brand Consistency",
      description: "Apply your brand colors, fonts, and assets across all designs with one click."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "AI Content Suggestions",
      description: "Get caption and hashtag recommendations based on your visual content."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Batch Creation",
      description: "Create multiple designs for different platforms simultaneously to save time."
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Template Library",
      description: "Access hundreds of professionally designed templates categorized by industry and purpose."
    },
    {
      icon: <Download className="h-10 w-10 text-primary" />,
      title: "Bulk Export",
      description: "Download all your designs at once in formats optimized for each platform."
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Custom Animations",
      description: "Add animated elements to make your social media content more engaging."
    },
    {
      icon: <CloudDownload className="h-10 w-10 text-primary" />,
      title: "Campaign Organization",
      description: "Organize your social media assets by campaign, date, or platform for easy access."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Social Media Kit Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create professional and consistent social media content
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
