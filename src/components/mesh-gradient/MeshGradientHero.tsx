
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import StandardHeroSection from "../shared/StandardHeroSection";
import { useIsMobile } from "@/hooks/use-mobile";

const MeshGradientHero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="pt-8 md:pt-12">
      <StandardHeroSection
        toolLabel="Free Tool"
        title="Create Beautiful"
        highlightedText="Mesh Gradients"
        description="Design stunning gradients for your projects with our easy-to-use gradient generator"
        features={[
          { icon: <Palette size={isMobile ? 14 : 16} />, text: "Custom Colors" },
          { icon: <Palette size={isMobile ? 14 : 16} />, text: "Randomize" },
          { icon: <Palette size={isMobile ? 14 : 16} />, text: "Adjustable Positions" },
          { icon: <Palette size={isMobile ? 14 : 16} />, text: "Download" }
        ]}
        image={
          <div className="w-full flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md h-60 md:h-80 overflow-hidden shadow-lg">
              <div className="absolute inset-0 z-0">
                <div 
                  className="absolute inset-0" 
                  style={{
                    background: `radial-gradient(circle at 30% 40%, #8B5CF6 0%, transparent 60%), 
                               radial-gradient(circle at 80% 30%, #3B82F6 0%, transparent 55%), 
                               radial-gradient(circle at 60% 70%, #EC4899 0%, transparent 65%)`
                  }}
                ></div>
              </div>
              <Palette className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/80 z-10" size={isMobile ? 60 : 80} />
            </div>
          </div>
        }
        bgColor="bg-blue-800"
        textColor="text-white"
        toolLabelClassName="bg-white/40 text-white font-semibold"
      />
    </div>
  );
};

export default MeshGradientHero;
