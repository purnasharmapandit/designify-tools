
import React, { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { useGenerateColorPalette } from "@/hooks/use-color-palette";
import { Helmet } from "react-helmet";

// Import our components
import HeroSection from "@/components/color-palette/HeroSection";
import PaletteDisplay from "@/components/color-palette/PaletteDisplay";
import PaletteControls from "@/components/color-palette/PaletteControls";
import PaletteSettings from "@/components/color-palette/PaletteSettings";
import ShortcutsModal from "@/components/color-palette/ShortcutsModal";
import GuideSection from "@/components/color-palette/GuideSection";
import DesignResourcesSection from "@/components/color-palette/DesignResourcesSection";

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
      <HeroSection onGenerateNewPalette={generateNewPalette} />
      
      {/* Main palette display */}
      <PaletteDisplay 
        colors={colors}
        lockStatus={lockStatus}
        toggleLockColor={toggleLockColor}
      />

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
      <GuideSection />

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
      <DesignResourcesSection />

      <Footer />
    </div>
  );
};

export default ColorPaletteGenerator;
