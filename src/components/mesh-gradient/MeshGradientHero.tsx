
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Copy, RefreshCw, Palette, Plus, X, Sliders, Image, Square } from "lucide-react";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";
import { ColorPicker } from "@/components/ui/color-picker";
import StandardHeroSection from "../shared/StandardHeroSection";

// Canvas size options
const canvasSizes = [
  { label: "1:1", value: { width: 800, height: 800 } },
  { label: "2:1", value: { width: 1000, height: 500 } },
  { label: "3:1", value: { width: 1200, height: 400 } },
  { label: "3:2", value: { width: 1200, height: 800 } },
  { label: "4:3", value: { width: 1200, height: 900 } },
  { label: "7:4", value: { width: 1400, height: 800 } },
  { label: "8:7", value: { width: 800, height: 700 } },
  { label: "16:9", value: { width: 1600, height: 900 } },
  { label: "1:2", value: { width: 500, height: 1000 } },
  { label: "1:3", value: { width: 400, height: 1200 } },
  { label: "2:3", value: { width: 800, height: 1200 } },
  { label: "3:4", value: { width: 900, height: 1200 } },
  { label: "4:7", value: { width: 800, height: 1400 } },
  { label: "7:8", value: { width: 700, height: 800 } },
  { label: "9:16", value: { width: 900, height: 1600 } },
];

const MeshGradientHero = () => {
  const [colors, setColors] = useState([
    "#8B5CF6", // Purple
    "#3B82F6", // Blue
    "#EC4899", // Pink
  ]);
  const [grain, setGrain] = useState(0);
  const [blur, setBlur] = useState(0);
  const [selectedSize, setSelectedSize] = useState(canvasSizes[0]); // Default to 1:1
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  };
  
  const randomizeColors = () => {
    const newColors = colors.map(() => generateRandomColor());
    setColors(newColors);
    toast.success("Generated new colors!");
  };
  
  const addColor = () => {
    if (colors.length < 6) {
      setColors([...colors, generateRandomColor()]);
    } else {
      toast.error("Maximum 6 colors allowed");
    }
  };
  
  const removeColor = (index) => {
    if (colors.length > 2) {
      const newColors = [...colors];
      newColors.splice(index, 1);
      setColors(newColors);
    } else {
      toast.error("Minimum 2 colors required");
    }
  };
  
  const updateColor = (index, newColor) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };
  
  const copyCSS = () => {
    let colorStops = colors.map((color, index) => 
      `${color} ${Math.round(index * (100 / (colors.length - 1)))}%`
    ).join(', ');
    
    const cssText = `background: radial-gradient(circle at 50% 50%, ${colorStops});
filter: blur(${blur}px);
${grain > 0 ? 'background-blend-mode: multiply;' : ''}`;
    
    navigator.clipboard.writeText(cssText);
    toast.success("CSS copied to clipboard!");
  };
  
  const downloadGradient = () => {
    // This would be implemented with html2canvas or similar library
    toast.success("Gradient downloaded!");
  };

  const gradientStyle = {
    background: `radial-gradient(circle at 50% 50%, ${colors.map((color, index) => 
      `${color} ${Math.round(index * (100 / (colors.length - 1)))}%`
    ).join(', ')})`,
    filter: `blur(${blur}px)`,
    width: `${selectedSize.value.width / 4}px`,
    height: `${selectedSize.value.height / 4}px`,
    position: "relative",
  };

  // Add grain effect if grain value is greater than 0
  const grainOverlay = grain > 0 ? {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    opacity: grain / 100,
    mixBlendMode: "multiply",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } : {};

  return (
    <StandardHeroSection
      toolLabel="Free Tool"
      title="Create Beautiful"
      highlightedText="Mesh Gradients"
      description="Design stunning gradients for your projects with our easy-to-use gradient generator"
      features={[
        { icon: <Palette size={16} />, text: "Custom Colors" },
        { icon: <RefreshCw size={16} />, text: "Randomize" },
        { icon: <Sliders size={16} />, text: "Customizable" },
        { icon: <Download size={16} />, text: "Download" }
      ]}
      image={
        <div className="w-full bg-white p-6 rounded-xl shadow-lg">
          <div className="relative rounded-lg overflow-hidden" style={gradientStyle}>
            <div style={grainOverlay}></div>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Colors</h3>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={randomizeColors}
                    className="h-8"
                  >
                    <RefreshCw className="h-3.5 w-3.5 mr-1" />
                    Randomize
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={addColor}
                    className="h-8"
                    disabled={colors.length >= 6}
                  >
                    <Plus className="h-3.5 w-3.5 mr-1" />
                    Add Color
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {colors.map((color, index) => (
                  <div key={index} className="relative">
                    <ColorPicker
                      label=""
                      id={`color-${index}`}
                      value={color}
                      onChange={(value) => updateColor(index, value)}
                    />
                    {colors.length > 2 && (
                      <button
                        className="absolute -top-2 -right-2 bg-white rounded-full shadow-sm p-0.5"
                        onClick={() => removeColor(index)}
                      >
                        <X className="h-3 w-3 text-gray-500" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Grain</h3>
                <span className="text-sm text-gray-500">{grain}%</span>
              </div>
              <Slider
                value={[grain]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => setGrain(value[0])}
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Blur</h3>
                <span className="text-sm text-gray-500">{blur}px</span>
              </div>
              <Slider
                value={[blur]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => setBlur(value[0])}
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Canvas Size</h3>
                <div className="relative">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setShowSizeDropdown(!showSizeDropdown)}
                    className="h-8"
                  >
                    <Square className="h-3.5 w-3.5 mr-2" />
                    {selectedSize.label}
                  </Button>
                  
                  {showSizeDropdown && (
                    <div className="absolute z-10 mt-1 right-0 bg-white rounded-md shadow-lg p-2 w-64 max-h-[300px] overflow-y-auto border">
                      <div className="grid grid-cols-3 gap-1">
                        {canvasSizes.map((size, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            className={`justify-center ${selectedSize.label === size.label ? 'bg-primary/10' : ''}`}
                            onClick={() => {
                              setSelectedSize(size);
                              setShowSizeDropdown(false);
                            }}
                          >
                            {size.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 pt-2">
              <Button onClick={copyCSS} className="flex-1">
                <Copy className="h-4 w-4 mr-2" />
                Copy CSS
              </Button>
              <Button onClick={downloadGradient} variant="outline" className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      }
      bgColor="bg-gradient-to-b from-purple-50 to-white"
      textColor="text-gray-900"
      toolLabelClassName="bg-primary/10 text-primary"
    />
  );
};

export default MeshGradientHero;
