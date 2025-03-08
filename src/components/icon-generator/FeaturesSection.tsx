
import React from "react";
import { motion } from "framer-motion";
import { 
  Wand2, 
  Layers, 
  Paintbrush, 
  Download, 
  Zap, 
  Settings
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  bgColor: string;
  iconColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay, 
  bgColor, 
  iconColor 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col p-6 rounded-lg shadow-sm hover:shadow-md transition-all ${bgColor}`}
    >
      <div className={`${iconColor} h-12 w-12 flex items-center justify-center rounded-full mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Wand2 className="h-6 w-6" />,
      title: "AI-Powered Design",
      description: "Our advanced AI algorithms generate professional-quality icons based on your descriptions",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "bg-brand-purple text-white"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Multiple Style Options",
      description: "Choose from 20 different icon styles, from flat and minimalist to 3D and isometric",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "bg-brand-blue text-white"
    },
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: "Custom Colors",
      description: "Select your preferred colors to match your brand identity or project needs",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      iconColor: "bg-brand-pink text-white"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Instant Downloads",
      description: "Download your icons immediately in high-resolution WEBP format",
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      iconColor: "bg-emerald-500 text-white"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Generation",
      description: "Get your icons in seconds, not minutes, thanks to our optimized AI generation pipeline",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      iconColor: "bg-brand-yellow text-white"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Flexible Controls",
      description: "Adjust icon count, style, and other parameters to get exactly what you need",
      bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100",
      iconColor: "bg-cyan-500 text-white"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create professional icons for your projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
              bgColor={feature.bgColor}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
