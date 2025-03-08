
import React, { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { useGenerateColorPalette } from "@/hooks/use-color-palette";
import { Helmet } from "react-helmet";
import { Palette, RefreshCw, Check, Smartphone, Sparkles, Zap, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import our components
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

  // Function to copy individual color
  const handleCopyIndividualColor = (color: string) => {
    navigator.clipboard.writeText(color);
  };

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
            </p>
            <Button 
              onClick={generateNewPalette}
              className="mb-3"
              size="lg"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Generate New Palette
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main palette display - Stack vertically on mobile */}
      <main className="flex-grow">
        <div className="w-full flex flex-col md:flex-row">
          {colors.map((color, index) => (
            <div key={index} className="relative">
              <ColorSwatch
                color={color}
                index={index}
                isLocked={lockStatus[index]}
                onToggleLock={toggleLockColor}
              />
              {/* Individual copy button for mobile view */}
              <Button
                variant="secondary"
                size="sm"
                className="md:hidden absolute bottom-3 right-3 text-xs bg-white/20 backdrop-blur-sm hover:bg-white/30"
                style={{ 
                  color: getTextColor(color)
                }}
                onClick={() => handleCopyIndividualColor(color)}
              >
                Copy
              </Button>
            </div>
          ))}
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

      {/* Guide Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How to Use The Color Palette Generator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Generate Palettes</h3>
              </div>
              <p className="text-muted-foreground">
                Click the "Generate New Palette" button or press the <kbd className="px-2 py-1 bg-gray-100 border rounded text-xs">Space</kbd> key to create new color combinations instantly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Lock Colors</h3>
              </div>
              <p className="text-muted-foreground">
                Found a color you like? Click the lock icon or press <kbd className="px-2 py-1 bg-gray-100 border rounded text-xs">1-5</kbd> keys to lock colors so they won't change when generating new palettes.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                  <Copy className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Save Your Work</h3>
              </div>
              <p className="text-muted-foreground">
                Copy individual colors or export the entire palette in your preferred format (HEX, RGB, or CSS) to use in your projects.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Customize Palette Type</h3>
              </div>
              <p className="text-muted-foreground">
                Open settings with the gear icon or <kbd className="px-2 py-1 bg-gray-100 border rounded text-xs">S</kbd> key to choose from different palette types like analogous, monochromatic, or complementary.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Mobile Friendly</h3>
              </div>
              <p className="text-muted-foreground">
                Our tool works great on mobile devices. Swipe through colors and tap to copy individual shades for your design projects on the go.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Ready to Use</h3>
              </div>
              <p className="text-muted-foreground">
                All palette colors are carefully selected to work well together. Use them for websites, applications, branding, or any creative project.
              </p>
            </div>
          </div>
        </div>
      </section>

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

// Helper function to determine text color based on background
const getTextColor = (hexColor: string) => {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

export default ColorPaletteGenerator;
