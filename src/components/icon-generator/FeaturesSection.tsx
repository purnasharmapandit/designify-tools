
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

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-all"
    >
      <div className="bg-primary/10 h-12 w-12 flex items-center justify-center rounded-full text-primary mb-4">
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
      description: "Our advanced AI algorithms generate professional-quality icons based on your descriptions"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Multiple Style Options",
      description: "Choose from 20 different icon styles, from flat and minimalist to 3D and isometric"
    },
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: "Custom Colors",
      description: "Select your preferred colors to match your brand identity or project needs"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Instant Downloads",
      description: "Download your icons immediately in high-resolution WEBP format"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Generation",
      description: "Get your icons in seconds, not minutes, thanks to our optimized AI generation pipeline"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Flexible Controls",
      description: "Adjust icon count, style, and other parameters to get exactly what you need"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
