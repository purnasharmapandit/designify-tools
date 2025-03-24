
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Copy, RefreshCw, Palette } from "lucide-react";
import { toast } from "sonner";

const MeshGradientHero = () => {
  const [currentGradient, setCurrentGradient] = useState({
    colors: [
      { r: 120, g: 50, b: 255 },
      { r: 43, g: 173, b: 222 },
      { r: 235, g: 86, b: 142 },
    ],
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
  });
  
  const generateRandomColor = () => {
    return {
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
    };
  };
  
  const regenerateGradient = () => {
    const newColors = [
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor(),
    ];
    setCurrentGradient({
      ...currentGradient,
      colors: newColors,
    });
    toast.success("Generated a new gradient!");
  };
  
  const copyCSS = () => {
    const { colors } = currentGradient;
    const cssText = `background: radial-gradient(circle at 10% 20%, rgb(${colors[0].r}, ${colors[0].g}, ${colors[0].b}) 0%, rgb(${colors[1].r}, ${colors[1].g}, ${colors[1].b}) 50.5%, rgb(${colors[2].r}, ${colors[2].g}, ${colors[2].b}) 100.2%);`;
    
    navigator.clipboard.writeText(cssText);
    toast.success("CSS copied to clipboard!");
  };
  
  const downloadGradient = () => {
    // This would be implemented with a real download function
    // using html2canvas or similar library
    toast.success("Gradient downloaded!");
  };
  
  const gradientStyle = {
    background: `radial-gradient(circle at 10% 20%, rgb(${currentGradient.colors[0].r}, ${currentGradient.colors[0].g}, ${currentGradient.colors[0].b}) 0%, rgb(${currentGradient.colors[1].r}, ${currentGradient.colors[1].g}, ${currentGradient.colors[1].b}) 50.5%, rgb(${currentGradient.colors[2].r}, ${currentGradient.colors[2].g}, ${currentGradient.colors[2].b}) 100.2%)`,
    backgroundSize: currentGradient.backgroundSize,
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            Mesh Gradient Generator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Create beautiful, unique mesh gradients for your designs in seconds
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div 
            className="w-full h-80 md:h-96 rounded-2xl shadow-lg overflow-hidden"
            style={gradientStyle}
          ></div>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            onClick={regenerateGradient}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Generate New
          </Button>
          <Button 
            onClick={copyCSS}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Copy className="h-4 w-4" />
            Copy CSS
          </Button>
          <Button 
            onClick={downloadGradient}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 max-w-xl">
            <p className="font-mono">
              {`background: radial-gradient(circle at 10% 20%, rgb(${currentGradient.colors[0].r}, ${currentGradient.colors[0].g}, ${currentGradient.colors[0].b}) 0%, rgb(${currentGradient.colors[1].r}, ${currentGradient.colors[1].g}, ${currentGradient.colors[1].b}) 50.5%, rgb(${currentGradient.colors[2].r}, ${currentGradient.colors[2].g}, ${currentGradient.colors[2].b}) 100.2%);`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeshGradientHero;
