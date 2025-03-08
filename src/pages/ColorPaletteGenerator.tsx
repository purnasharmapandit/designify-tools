
import React, { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { useGenerateColorPalette } from "@/hooks/use-color-palette";
import { Helmet } from "react-helmet";
import { Palette, RefreshCw, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import our new components
import ColorSwatch from "@/components/color-palette/ColorSwatch";
import PaletteControls from "@/components/color-palette/PaletteControls";
import PaletteSettings from "@/components/color-palette/PaletteSettings";
import ShortcutsModal from "@/components/color-palette/ShortcutsModal";
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
    setPaletteType(value as any);
  };

  const handleExportFormatChange = (value: string) => {
    setExportFormat(value as any);
  };

  // Handle keyboard shortcuts
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Only proceed if target is the document body (not an input or other interactive element)
    const target = event.target as HTMLElement;
    const isInput = target.tagName === 'INPUT' || 
                    target.tagName === 'TEXTAREA' || 
                    target.tagName === 'SELECT' ||
                    target.tagName === 'BUTTON' ||
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

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Color Palette Generator | Create Beautiful Color Schemes</title>
        <meta name="description" content="Generate stunning color palettes for your design projects with our free color palette generator. Create harmonious color schemes with various modes including analogous, complementary, and more." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex p-3 bg-primary/10 rounded-full text-primary mb-4">
              <Palette className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Color Palette Generator</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Create beautiful color combinations for your projects with our intuitive color palette tool.
              Press spacebar to generate new palettes or use numbers (1-5) to lock colors you like.
            </p>
            <Button 
              onClick={generateNewPalette}
              className="mb-3"
              size="lg"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Generate New Palette
            </Button>
            <p className="text-sm text-muted-foreground">
              Tip: Press the <kbd className="px-2 py-1 bg-background border rounded text-xs">Space</kbd> key to generate a new palette
            </p>
          </div>
        </div>
      </section>
      
      {/* Main palette display - Stack vertically on mobile, horizontally on larger screens */}
      <main className="flex-grow flex flex-col md:flex-row">
        <div className="w-full h-[35vh] md:h-[60vh] flex flex-col md:flex-row">
          {colors.map((color, index) => (
            <ColorSwatch
              key={index}
              color={color}
              index={index}
              isLocked={lockStatus[index]}
              onToggleLock={toggleLockColor}
            />
          ))}
        </div>
        
        {/* Single mobile copy button that copies all colors */}
        <div className="md:hidden flex justify-center p-2 bg-gray-900">
          <Button
            variant="ghost"
            size="sm"
            className="text-white"
            onClick={copyToClipboard}
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy All Colors
          </Button>
        </div>
      </main>

      {/* Control bar */}
      <PaletteControls
        onGenerate={generateNewPalette}
        onCopy={copyToClipboard}
        onExport={handleExport}
        onShowShortcuts={() => setShowShortcuts(true)}
        onToggleSettings={() => setIsSettingsOpen(true)}
        exportFormat={exportFormat}
      />

      {/* Settings drawer */}
      <Drawer open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DrawerTrigger className="hidden" />
        <PaletteSettings
          paletteType={paletteType}
          baseColor={baseColor}
          numberOfColors={numberOfColors}
          exportFormat={exportFormat}
          onPaletteTypeChange={handlePaletteTypeChange}
          onBaseColorChange={setBaseColor}
          onNumberOfColorsChange={setNumberOfColors}
          onExportFormatChange={handleExportFormatChange}
        />
      </Drawer>

      {/* Shortcuts modal */}
      <ShortcutsModal
        isOpen={showShortcuts}
        onClose={() => setShowShortcuts(false)}
      />

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
