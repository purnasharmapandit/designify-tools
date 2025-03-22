
import React from "react";
import { motion } from "framer-motion";
import { 
  Type, 
  Palette, 
  Scale, 
  Shuffle, 
  LampDesk,
  Download,
  Link2,
  ArrowDownToLine
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Type className="h-10 w-10 text-white" />,
      title: "Font Pairing Suggestions",
      description: "Discover perfect font combinations with AI-powered suggestions based on your design goals.",
      bgColor: "bg-gradient-to-br from-purple-500 to-indigo-400"
    },
    {
      icon: <Palette className="h-10 w-10 text-white" />,
      title: "Visual Hierarchy Testing",
      description: "Preview how your type choices will perform in real-world applications with interactive mockups.",
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-400"
    },
    {
      icon: <Scale className="h-10 w-10 text-white" />,
      title: "Responsive Type Scaling",
      description: "Create type systems that scale beautifully across all devices with automatic calculations.",
      bgColor: "bg-gradient-to-br from-amber-500 to-yellow-400"
    },
    {
      icon: <Shuffle className="h-10 w-10 text-white" />,
      title: "Alternative Style Explorer",
      description: "Compare different typography approaches side-by-side to find the perfect match for your brand.",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-400"
    },
    {
      icon: <LampDesk className="h-10 w-10 text-white" />,
      title: "Readability Analysis",
      description: "Get instant feedback on legibility and readability scores for your typography choices.",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      icon: <Download className="h-10 w-10 text-white" />,
      title: "Export Typography System",
      description: "Download your complete typography system as CSS, Tailwind config, or design tokens.",
      bgColor: "bg-gradient-to-br from-violet-500 to-purple-400"
    },
    {
      icon: <Link2 className="h-10 w-10 text-white" />,
      title: "Web Font Integration",
      description: "Easily connect to Google Fonts, Adobe Fonts and other services for live previews.",
      bgColor: "bg-gradient-to-br from-red-500 to-orange-400"
    },
    {
      icon: <ArrowDownToLine className="h-10 w-10 text-white" />,
      title: "CSS & Code Generation",
      description: "Get ready-to-use CSS code for your typography designs to implement in your projects.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Typography Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create beautiful, consistent typographic systems with our comprehensive toolset
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
