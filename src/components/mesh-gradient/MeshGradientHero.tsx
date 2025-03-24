
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import StandardHeroSection from "../shared/StandardHeroSection";

const MeshGradientHero = () => {
  return (
    <StandardHeroSection
      toolLabel="Free Tool"
      title="Create Beautiful"
      highlightedText="Mesh Gradients"
      description="Design stunning gradients for your projects with our easy-to-use gradient generator"
      features={[
        { icon: <Palette size={16} />, text: "Custom Colors" },
        { icon: <Palette size={16} />, text: "Randomize" },
        { icon: <Palette size={16} />, text: "Customizable" },
        { icon: <Palette size={16} />, text: "Download" }
      ]}
      image={
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-lg">
            <div 
              className="absolute inset-0" 
              style={{
                background: `radial-gradient(at 70% 20%, #8B5CF6 0%, transparent 50%), 
                            radial-gradient(at 20% 60%, #3B82F6 0%, transparent 50%), 
                            radial-gradient(at 50% 80%, #EC4899 0%, transparent 60%)`
              }}
            ></div>
          </div>
        </div>
      }
      bgColor="bg-blue-800"
      textColor="text-white"
      toolLabelClassName="bg-white/30 text-white font-semibold"
    />
  );
};

export default MeshGradientHero;
