
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ColorPalette } from "@/components/ColorPalette";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useColorPalette } from "@/hooks/use-color-palette.tsx"; // Explicitly add .tsx extension
import { Check, Palette, RefreshCw, Download, Save, Copy } from "lucide-react";
import StandardHeroSection from "@/components/shared/StandardHeroSection";

const ColorPaletteGenerator = () => {
  const {
    colors,
    lockStatus,
    toggleLock,
    generateRandomPalette,
    generateHarmonious,
    generateAnalogous,
    generateComplementary,
    generateMonochromatic,
    generateFromImage,
    isGenerating,
  } = useColorPalette();
  
  const handleExportPalette = () => {
    // Create a canvas element
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");
    
    if (ctx) {
      // Draw each color as a rectangle
      const width = canvas.width / colors.length;
      colors.forEach((color, index) => {
        ctx.fillStyle = color;
        ctx.fillRect(index * width, 0, width, canvas.height);
        
        // Add color hex value
        ctx.fillStyle = "#fff";
        ctx.font = "16px Arial";
        ctx.fillText(color, index * width + 10, canvas.height - 20);
      });
      
      // Convert canvas to image data URL
      const dataUrl = canvas.toDataURL("image/png");
      
      // Create a temporary link element and trigger download
      const link = document.createElement("a");
      link.download = "my-color-palette.png";
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("Palette exported successfully!");
    }
  };

  const handleCopyPaletteToClipboard = () => {
    const colorString = colors.join(", ");
    navigator.clipboard.writeText(colorString);
    toast.success("Palette copied to clipboard!");
  };

  const paletteImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 absolute -right-5 -top-5 z-10">
        <Palette className="w-12 h-12 text-purple-500" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4">
        <div className="flex flex-row h-40 rounded-lg overflow-hidden">
          {colors.map((color, index) => (
            <div key={index} className="flex-1" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="Color Palette Generator"
          title="Create"
          highlightedText="Beautiful Palettes"
          restOfTitle="in Seconds"
          description="Generate harmonious color combinations for your designs with our intuitive palette generator. Perfect for websites, branding, and digital art."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "Multiple Color Schemes" },
            { icon: <Check className="h-4 w-4" />, text: "Export Options" },
            { icon: <Check className="h-4 w-4" />, text: "Image Extraction" }
          ]}
          image={paletteImage}
          bgColor="bg-purple-900"
          textColor="text-white"
        />

        <div className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-md h-64 md:h-72">
                <ColorPalette 
                  colors={colors} 
                  lockStatus={lockStatus} 
                  onToggleLock={toggleLock} 
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Button 
                  className="flex-1 sm:flex-none"
                  onClick={generateRandomPalette}
                  disabled={isGenerating}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Random Palette
                </Button>
                
                <Button 
                  className="flex-1 sm:flex-none"
                  variant="outline"
                  onClick={generateHarmonious}
                  disabled={isGenerating}
                >
                  Harmonious
                </Button>
                
                <Button 
                  className="flex-1 sm:flex-none"
                  variant="outline"
                  onClick={generateComplementary}
                  disabled={isGenerating}
                >
                  Complementary
                </Button>
                
                <Button 
                  className="flex-1 sm:flex-none"
                  variant="outline"
                  onClick={generateAnalogous}
                  disabled={isGenerating}
                >
                  Analogous
                </Button>
                
                <Button 
                  className="flex-1 sm:flex-none"
                  variant="outline"
                  onClick={generateMonochromatic}
                  disabled={isGenerating}
                >
                  Monochromatic
                </Button>
                
                <Button 
                  className="flex-1 sm:flex-none"
                  variant="outline"
                  onClick={handleExportPalette}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                
                <Button 
                  className="flex-1 sm:flex-none"
                  variant="outline"
                  onClick={handleCopyPaletteToClipboard}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional sections would go here */}
      </main>
      <Footer />
    </div>
  );
};

export default ColorPaletteGenerator;
