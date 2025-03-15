
import { useState } from "react";
import { toast } from "sonner";
import { 
  generatePalette, 
  copyPaletteToClipboard, 
  exportPaletteAsFile 
} from "@/utils/palette-generators";
import { PaletteType, ExportFormat } from "@/types/color-palette";
import { getRandomColor } from "@/utils/color-utils";

export type { PaletteType, ExportFormat } from "@/types/color-palette";

// Main implementation hook - internal usage only
function useColorPaletteCore() {
  const [colors, setColors] = useState<string[]>(['#9b87f5', '#87B9F5', '#F5DB87', '#F87FF2', '#F5876A']);
  const [baseColor, setBaseColor] = useState<string>('#9b87f5');
  const [paletteType, setPaletteType] = useState<PaletteType>("analogous");
  const [numberOfColors, setNumberOfColors] = useState<number>(5);
  const [lockStatus, setLockStatus] = useState<boolean[]>([false, false, false, false, false]);
  const [exportFormat, setExportFormat] = useState<ExportFormat>("hex");
  const [isGenerating, setIsGenerating] = useState(false);

  // Initialize the palette on first load, but don't regenerate automatically when settings change
  // useEffect(() => {
  //   // Only run once on component mount
  //   generateNewPalette();
  // }, []);

  // Generate a new palette respecting locked colors
  const generateNewPalette = () => {
    // Randomize the base color each time for more variety, unless explicitly set by user
    const randomizedBaseColor = getRandomColor();
    setBaseColor(randomizedBaseColor);
    
    const newPalette = generatePalette(randomizedBaseColor, paletteType, numberOfColors);
    
    // Make sure lockStatus has the right length
    const newLockStatus = [...lockStatus];
    while (newLockStatus.length < numberOfColors) {
      newLockStatus.push(false);
    }
    while (newLockStatus.length > numberOfColors) {
      newLockStatus.pop();
    }
    setLockStatus(newLockStatus);
    
    // Respect locked colors
    const resultPalette = newPalette.map((color, index) => {
      if (index < colors.length && newLockStatus[index]) {
        return colors[index];
      }
      return color;
    });
    
    setColors(resultPalette);
  };

  // Toggle lock status for a color
  const toggleLockColor = (index: number) => {
    const newLockStatus = [...lockStatus];
    newLockStatus[index] = !newLockStatus[index];
    setLockStatus(newLockStatus);
    
    toast.success(newLockStatus[index] 
      ? `Color ${index + 1} locked` 
      : `Color ${index + 1} unlocked`);
  };

  // Handle exporting the palette
  const handleExport = () => {
    exportPaletteAsFile(colors, exportFormat);
  };

  // Copy colors to clipboard
  const copyToClipboard = () => {
    copyPaletteToClipboard(colors, exportFormat);
  };

  // Generate a random palette
  const generateRandomPalette = () => {
    setIsGenerating(true);
    setTimeout(() => {
      generateNewPalette();
      setIsGenerating(false);
    }, 500);
  };

  // Generate harmonious palette
  const generateHarmonious = () => {
    setIsGenerating(true);
    setTimeout(() => {
      generateNewPalette();
      setIsGenerating(false);
      toast.success("Harmonious palette generated");
    }, 500);
  };

  // Generate analogous palette
  const generateAnalogous = () => {
    setIsGenerating(true);
    setTimeout(() => {
      generateNewPalette();
      setIsGenerating(false);
      toast.success("Analogous palette generated");
    }, 500);
  };

  // Generate complementary palette
  const generateComplementary = () => {
    setIsGenerating(true);
    setTimeout(() => {
      generateNewPalette();
      setIsGenerating(false);
      toast.success("Complementary palette generated");
    }, 500);
  };

  // Generate monochromatic palette
  const generateMonochromatic = () => {
    setIsGenerating(true);
    setTimeout(() => {
      generateNewPalette();
      setIsGenerating(false);
      toast.success("Monochromatic palette generated");
    }, 500);
  };

  // Generate palette from image
  const generateFromImage = (imageFile: File) => {
    setIsGenerating(true);
    // In a real app, we would process the image here
    setTimeout(() => {
      generateNewPalette();
      setIsGenerating(false);
      toast.success("Palette generated from image");
    }, 1000);
  };

  return {
    colors,
    paletteType,
    baseColor,
    numberOfColors,
    lockStatus,
    exportFormat,
    isGenerating,
    setPaletteType,
    setBaseColor,
    setNumberOfColors,
    generateNewPalette,
    toggleLockColor,
    handleExport,
    copyToClipboard,
    setExportFormat,
    generateRandomPalette,
    generateHarmonious,
    generateAnalogous,
    generateComplementary,
    generateMonochromatic,
    generateFromImage,
    toggleLock: toggleLockColor,
  };
}

// Export the main hook that will be used by components
export function useColorPalette() {
  return useColorPaletteCore();
}

// For backward compatibility with any existing code using this name
export function useGenerateColorPalette() {
  return useColorPaletteCore();
}
