
import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  RefreshCw, 
  Download, 
  Copy, 
  Lock,
  Unlock,
  Settings,
  ChevronDown,
  ChevronUp,
  Info
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ColorPicker } from "@/components/ui/color-picker";
import { toast } from "sonner";
import { useGenerateColorPalette, PaletteType, ExportFormat } from "@/hooks/use-color-palette";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import UseCasesSection from "@/components/color-palette/UseCasesSection";
import FAQSection from "@/components/color-palette/FAQSection";

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

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  // Create wrapper functions to handle type conversion
  const handlePaletteTypeChange = (value: string) => {
    setPaletteType(value as PaletteType);
  };

  const handleExportFormatChange = (value: string) => {
    setExportFormat(value as ExportFormat);
  };

  // Handle keyboard shortcuts
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Only proceed if target is the document body (not an input or other interactive element)
    const target = event.target as HTMLElement;
    const isInput = target.tagName === 'INPUT' || 
                    target.tagName === 'TEXTAREA' || 
                    target.tagName === 'SELECT' ||
                    target.isContentEditable;
    
    // Space to generate new palette - only if not typing in an input
    if (event.code === 'Space' && !isInput && !isSettingsOpen) {
      event.preventDefault(); // Prevent scrolling
      generateNewPalette();
    }
    
    // 'S' to open/close settings
    if (event.code === 'KeyS' && !isInput) {
      setIsSettingsOpen(prev => !prev);
    }
    
    // '1-5' to lock/unlock colors
    const numKey = parseInt(event.key);
    if (!isInput && numKey >= 1 && numKey <= colors.length) {
      toggleLockColor(numKey - 1);
    }
  }, [colors.length, generateNewPalette, isSettingsOpen, toggleLockColor]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const getTextColor = (hexColor: string) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main palette display */}
      <main className="flex-grow flex flex-col md:flex-row">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex-1 flex flex-col justify-between min-h-[30vh] md:min-h-[calc(100vh-4rem)]"
            style={{ backgroundColor: color }}
          >
            <div className="p-4 flex justify-between items-start">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
                onClick={() => toggleLockColor(index)}
                style={{ color: getTextColor(color) }}
              >
                {lockStatus[index] ? (
                  <Lock className="h-4 w-4" />
                ) : (
                  <Unlock className="h-4 w-4" />
                )}
              </Button>

              <span className="text-xs font-mono px-2 py-1 rounded bg-white/10 backdrop-blur-sm"
                    style={{ color: getTextColor(color) }}>
                {index + 1}
              </span>
            </div>

            <div className="p-4 flex flex-col items-center gap-2">
              <h3 className="text-2xl font-bold font-mono tracking-wider"
                  style={{ color: getTextColor(color) }}>
                {color.toUpperCase()}
              </h3>
              
              <Button
                variant="ghost"
                size="sm"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20"
                onClick={() => {
                  navigator.clipboard.writeText(color);
                  toast.success(`Copied ${color.toUpperCase()}`);
                }}
                style={{ color: getTextColor(color) }}
              >
                <Copy className="h-3 w-3 mr-1" />
                <span>Copy</span>
              </Button>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Control bar */}
      <div className="bg-gray-900 text-white p-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={generateNewPalette} variant="ghost" className="text-white">
                <RefreshCw className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Generate new colors (Space)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={() => copyToClipboard()} variant="ghost" className="text-white">
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy colors to clipboard</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={() => handleExport()} variant="ghost" className="text-white">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download as file</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => setShowShortcuts(prev => !prev)}
          >
            <Info className="h-4 w-4 mr-2" />
            Shortcuts
          </Button>

          <Drawer open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" className="text-white">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-gray-900 text-white">
              <div className="max-w-lg mx-auto p-6 space-y-6">
                <h3 className="text-xl font-bold">Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Palette Type</label>
                    <Select value={paletteType} onValueChange={handlePaletteTypeChange}>
                      <SelectTrigger className="bg-gray-800 border-gray-700">
                        <SelectValue placeholder="Select palette type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
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
                    <div className="flex items-center">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setNumberOfColors(Math.max(3, numberOfColors - 1))}
                        className="bg-gray-800 border-gray-700"
                      >
                        -
                      </Button>
                      <span className="mx-3">{numberOfColors}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setNumberOfColors(Math.min(10, numberOfColors + 1))}
                        className="bg-gray-800 border-gray-700"
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Export Format</label>
                    <Select value={exportFormat} onValueChange={handleExportFormatChange}>
                      <SelectTrigger className="bg-gray-800 border-gray-700">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="hex">HEX</SelectItem>
                        <SelectItem value="rgb">RGB</SelectItem>
                        <SelectItem value="hsl">HSL</SelectItem>
                        <SelectItem value="css">CSS Variables</SelectItem>
                        <SelectItem value="tailwind">Tailwind Config</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* Shortcuts popup */}
      {showShortcuts && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowShortcuts(false)}>
          <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-white mb-4">Keyboard Shortcuts</h3>
            <div className="space-y-2 text-white">
              <div className="flex justify-between">
                <span>Generate new palette</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded">Space</kbd>
              </div>
              <div className="flex justify-between">
                <span>Toggle settings</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded">S</kbd>
              </div>
              <div className="flex justify-between">
                <span>Lock/unlock colors</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded">1-5</kbd>
              </div>
            </div>
            <Button className="w-full mt-4" onClick={() => setShowShortcuts(false)}>Close</Button>
          </div>
        </div>
      )}

      {/* Use Cases and FAQ Sections */}
      <div className="bg-white">
        <UseCasesSection />
        <FAQSection />
      </div>

      <Footer />
    </div>
  );
};

export default ColorPaletteGenerator;
