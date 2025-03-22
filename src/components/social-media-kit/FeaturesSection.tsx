
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
      icon: <Images className="h-10 w-10 text-white" />,
      title: "Multi-Platform Templates",
      description: "Pre-sized templates for Instagram, Facebook, Twitter, LinkedIn, TikTok, and more.",
      bgColor: "bg-gradient-to-br from-purple-500 to-indigo-400"
    },
    {
      icon: <Palette className="h-10 w-10 text-white" />,
      title: "Brand Consistency",
      description: "Apply your brand colors, fonts, and assets across all designs with one click.",
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-400"
    },
    {
      icon: <Sparkles className="h-10 w-10 text-white" />,
      title: "AI Content Suggestions",
      description: "Get caption and hashtag recommendations based on your visual content.",
      bgColor: "bg-gradient-to-br from-amber-500 to-yellow-400"
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Batch Creation",
      description: "Create multiple designs for different platforms simultaneously to save time.",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-400"
    },
    {
      icon: <Layers className="h-10 w-10 text-white" />,
      title: "Template Library",
      description: "Access hundreds of professionally designed templates categorized by industry and purpose.",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      icon: <Download className="h-10 w-10 text-white" />,
      title: "Bulk Export",
      description: "Download all your designs at once in formats optimized for each platform.",
      bgColor: "bg-gradient-to-br from-violet-500 to-purple-400"
    },
    {
      icon: <PenTool className="h-10 w-10 text-white" />,
      title: "Custom Animations",
      description: "Add animated elements to make your social media content more engaging.",
      bgColor: "bg-gradient-to-br from-red-500 to-orange-400"
    },
    {
      icon: <CloudDownload className="h-10 w-10 text-white" />,
      title: "Campaign Organization",
      description: "Organize your social media assets by campaign, date, or platform for easy access.",
      bgColor: "bg-gradient-to-br from-sky-500 to-blue-400"
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
              <div className={`mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center ${feature.bgColor}`}>
                {feature.icon}
              </div>
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
