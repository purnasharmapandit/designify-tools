
import { PenTool, Image, Layers, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
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
          <FeatureCard 
            icon={PenTool}
            title="Logo Designer"
            description="Create professional logos for your brand with our intuitive designer"
            iconColor="bg-brand-purple"
            delay={0}
          />
          <FeatureCard 
            icon={Image}
            title="Profile Pictures"
            description="Generate stunning profile pictures optimized for social media"
            iconColor="bg-brand-pink"
            delay={1}
          />
          <FeatureCard 
            icon={Layers}
            title="Business Cards"
            description="Design beautiful business cards that leave a lasting impression"
            iconColor="bg-brand-blue"
            delay={2}
          />
          <FeatureCard 
            icon={Zap}
            title="Fast Export"
            description="Export your designs in multiple formats with one click"
            iconColor="bg-brand-yellow"
            delay={3}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
