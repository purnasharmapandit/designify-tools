
import { PenTool, Image, Layers, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const features = [
  {
    icon: PenTool,
    title: "Logo Designer",
    description: "Create professional logos for your brand with our intuitive designer. Choose from thousands of templates, customize colors, fonts, and icons to match your brand personality.",
    iconColor: "text-white",
    bgGradient: "bg-gradient-to-br from-purple-500 to-indigo-500 text-purple-800",
    bgColor: "bg-purple-50",
    delay: 0
  },
  {
    icon: Image,
    title: "Profile Pictures",
    description: "Generate stunning profile pictures optimized for social media. Our AI helps you create professional headshots, avatars, and profile images that stand out on any platform.",
    iconColor: "text-white",
    bgGradient: "bg-gradient-to-br from-pink-500 to-rose-500 text-pink-800",
    bgColor: "bg-pink-50",
    delay: 1
  },
  {
    icon: Layers,
    title: "Business Cards",
    description: "Design beautiful business cards that leave a lasting impression. Choose from premium templates, add your branding, and customize every detail to reflect your professional identity.",
    iconColor: "text-white",
    bgGradient: "bg-gradient-to-br from-blue-500 to-cyan-500 text-blue-800",
    bgColor: "bg-blue-50",
    delay: 2
  },
  {
    icon: Zap,
    title: "Fast Export",
    description: "Export your designs in multiple formats with one click. Download in PNG, JPG, SVG, and PDF formats optimized for print, web, or social media with automatic sizing.",
    iconColor: "text-white",
    bgGradient: "bg-gradient-to-br from-amber-500 to-yellow-500 text-amber-800",
    bgColor: "bg-amber-50",
    delay: 3
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Explore our features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful design tools that help you create stunning visuals in minutes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
              bgGradient={feature.bgGradient}
              delay={feature.delay}
              className={feature.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
