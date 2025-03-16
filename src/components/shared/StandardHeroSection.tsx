
import React from "react";
import { motion } from "framer-motion";
import { Check, LayoutGrid, Share2, Sparkles, Palette } from "lucide-react";

interface FeatureBadgeProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureBadge = ({ icon, text }: FeatureBadgeProps) => (
  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
    {icon}
    <span>{text}</span>
  </div>
);

interface StandardHeroSectionProps {
  toolLabel: string;
  title: string;
  highlightedText: string;
  restOfTitle?: string;
  description: string;
  features: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  image?: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const StandardHeroSection = ({
  toolLabel,
  title,
  highlightedText,
  restOfTitle = "",
  description,
  features,
  image,
  bgColor,
  textColor,
}: StandardHeroSectionProps) => {
  return (
    <div className={`${bgColor} ${textColor}`}>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSAwIDIwMCBDIDAgMTgwIDIwIDE4MCAyMCAxNjAgQyAyMCAxNDAgMCAxNDAgMCAxMjAgQyAwIDEwMCAyMCAxMDAgMjAgODAgQyAyMCA2MCAwIDYwIDAgNDAgQyAwIDIwIDIwIDIwIDIwIDAgTCAwIDAgWiIgZmlsbD0iI2ZmZmZmZjEwIi8+PC9zdmc+')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <section className="pt-28 pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl flex-1"
                >
                  <div className="inline-flex px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm mb-6">
                    {toolLabel}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    {title}{" "}
                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {highlightedText}
                    </span>{" "}
                    {restOfTitle}
                  </h1>
                  
                  <p className="text-lg mb-6 opacity-90">
                    {description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {features.map((feature, index) => (
                      <FeatureBadge 
                        key={index} 
                        icon={feature.icon} 
                        text={feature.text} 
                      />
                    ))}
                  </div>
                </motion.div>
                
                {image && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1"
                  >
                    {image}
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StandardHeroSection;
