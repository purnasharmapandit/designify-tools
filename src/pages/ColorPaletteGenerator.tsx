
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  RefreshCw, 
  Download, 
  Copy, 
  Eye, 
  Palette, 
  Image as ImageIcon,
  Sliders,
  ArrowRight,
  Lock,
  Unlock,
  Plus
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ColorPicker } from "@/components/ui/color-picker";
import { ColorPalette } from "@/components/ColorPalette";
import { toast } from "sonner";
import { useGenerateColorPalette } from "@/hooks/use-color-palette";

const ColorPaletteGenerator = () => {
  const { 
    colors, 
    paletteType,
    baseColor,
    numberOfColors,
    lockStatus,
    exportFormat,
    setPaletteType,
    setBaseColor,
    setNumberOfColors,
    generateNewPalette,
    toggleLockColor,
    handleExport,
    copyToClipboard,
    setExportFormat
  } = useGenerateColorPalette();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold font-display mb-4"
            >
              Color Palette Generator
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Create beautiful, harmonious color schemes for your designs
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6 mb-8"
          >
            <Tabs defaultValue="generate" className="w-full">
              <TabsList className="mb-6 w-full md:w-auto">
                <TabsTrigger value="generate">Generate</TabsTrigger>
                <TabsTrigger value="adjust">Adjust</TabsTrigger>
                <TabsTrigger value="export">Export</TabsTrigger>
              </TabsList>
              
              <TabsContent value="generate" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Palette Type</label>
                          <Select value={paletteType} onValueChange={setPaletteType}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select palette type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="analogous">Analogous</SelectItem>
                              <SelectItem value="monochromatic">Monochromatic</SelectItem>
                              <SelectItem value="triadic">Triadic</SelectItem>
                              <SelectItem value="complementary">Complementary</SelectItem>
                              <SelectItem value="split-complementary">Split Complementary</SelectItem>
                              <SelectItem value="tetradic">Tetradic</SelectItem>
                              <SelectItem value="random">Random</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <ColorPicker 
                          label="Base Color" 
                          value={baseColor} 
                          onChange={setBaseColor}
                          id="base-color"
                        />
                        
                        <div>
                          <label className="text-sm font-medium mb-1 block">Number of Colors</label>
                          <div className="flex items-center space-x-4">
                            <Slider 
                              value={[numberOfColors]} 
                              min={3} 
                              max={10} 
                              step={1} 
                              onValueChange={(values) => setNumberOfColors(values[0])}
                              className="flex-1"
                            />
                            <span className="font-mono bg-gray-100 px-2 py-1 rounded">{numberOfColors}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Palette className="h-5 w-5" /> Your Palette
                        </h3>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={generateNewPalette}
                          className="gap-2"
                        >
                          <RefreshCw className="h-4 w-4" /> Generate
                        </Button>
                      </div>
                      <ColorPalette 
                        colors={colors} 
                        lockStatus={lockStatus} 
                        onToggleLock={toggleLockColor}
                        onColorChange={(index, color) => {
                          /* To be implemented */
                        }}
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="adjust" className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-600">
                    Fine-tune your palette colors. Lock colors you want to keep by clicking the lock icon.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  {colors.map((color, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div 
                            className="w-12 h-12 rounded-md border" 
                            style={{ backgroundColor: color }}
                          ></div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <span className="font-mono text-sm">{color.toUpperCase()}</span>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => toggleLockColor(index)} 
                              >
                                {lockStatus[index] ? 
                                  <Lock className="h-4 w-4" /> : 
                                  <Unlock className="h-4 w-4" />
                                }
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <ColorPicker 
                          label={`Color ${index + 1}`} 
                          value={color} 
                          onChange={(newColor) => {
                            /* To be implemented */
                          }}
                          id={`color-${index}`}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="export" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <label className="text-sm font-medium mb-1 block">Export Format</label>
                      <Select value={exportFormat} onValueChange={setExportFormat}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hex">HEX</SelectItem>
                          <SelectItem value="rgb">RGB</SelectItem>
                          <SelectItem value="hsl">HSL</SelectItem>
                          <SelectItem value="css">CSS Variables</SelectItem>
                          <SelectItem value="tailwind">Tailwind Config</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                      <pre>
                        {exportFormat === 'hex' && colors.map(color => `${color.toUpperCase()}\n`).join('')}
                        {exportFormat === 'rgb' && colors.map(color => {
                          const r = parseInt(color.slice(1, 3), 16);
                          const g = parseInt(color.slice(3, 5), 16);
                          const b = parseInt(color.slice(5, 7), 16);
                          return `rgb(${r}, ${g}, ${b})\n`;
                        }).join('')}
                        {exportFormat === 'css' && `
:root {
${colors.map((color, i) => `  --color-${i + 1}: ${color};`).join('\n')}
}
                        `}
                        {exportFormat === 'tailwind' && `
module.exports = {
  theme: {
    extend: {
      colors: {
${colors.map((color, i) => `        color${i + 1}: '${color}',`).join('\n')}
      }
    }
  }
}
                        `}
                      </pre>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        variant="outline" 
                        onClick={() => copyToClipboard()}
                        className="gap-2"
                      >
                        <Copy className="h-4 w-4" /> Copy
                      </Button>
                      <Button 
                        onClick={() => handleExport()}
                        className="gap-2"
                      >
                        <Download className="h-4 w-4" /> Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          <div className="mt-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6 text-center"
            >
              How to Use the Color Palette Generator
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="bg-purple-100 text-purple-600 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                  <Palette className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Choose a Base Color</h3>
                <p className="text-gray-600">
                  Select a base color using the color picker or enter a hex code to start your palette.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                  <Sliders className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Generate & Adjust</h3>
                <p className="text-gray-600">
                  Pick a palette type and generate colors. Lock colors you like and regenerate until satisfied.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                  <Download className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Export Your Palette</h3>
                <p className="text-gray-600">
                  Once you're happy with your palette, export it in your preferred format or copy the code.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ColorPaletteGenerator;
