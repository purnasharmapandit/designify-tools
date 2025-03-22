
import React from "react";
import { motion } from "framer-motion";

interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

interface StandardHeroSectionProps {
  toolLabel: string;
  title: string;
  highlightedText: string;
  restOfTitle?: string;
  description: string;
  features: FeatureItem[];
  image: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  actionButton?: React.ReactNode;
  toolLabelClassName?: string; // Custom styling for the tool label
}

const StandardHeroSection: React.FC<StandardHeroSectionProps> = ({
  toolLabel,
  title,
  highlightedText,
  restOfTitle,
  description,
  features,
  image,
  bgColor = "bg-slate-900",
  textColor = "text-white",
  actionButton,
  toolLabelClassName = "bg-primary/10 text-primary font-medium" // Default styling
}) => {
  return (
    <section className={`${bgColor} py-16 lg:py-20 overflow-hidden`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={textColor}
          >
            <div className={`inline-block px-4 py-2 rounded-full ${toolLabelClassName} text-sm mb-5 font-semibold shadow-sm`}>
              {toolLabel}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white brightness-125">{title}</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink font-extrabold">
                {highlightedText}
              </span>{" "}
              {restOfTitle && <span className="text-white brightness-125">{restOfTitle}</span>}
            </h1>
            <p className="text-lg opacity-80 mb-8">{description}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                >
                  {feature.icon}
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Render action button if provided */}
            {actionButton && <div className="mt-6">{actionButton}</div>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {image}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StandardHeroSection;
