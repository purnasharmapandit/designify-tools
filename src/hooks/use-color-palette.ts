
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { generatePalette } from "@/utils/palette-generators";
import { copyPaletteToClipboard, exportPaletteAsFile } from "@/utils/palette-export";
import { PaletteType, ExportFormat } from "@/types/color-palette";
import { getRandomColor } from "@/utils/color-utils";

export type { PaletteType, ExportFormat } from "@/types/color-palette";

export function useGenerateColorPalette() {
  const [colors, setColors] = useState<string[]>(['#9b87f5', '#87B9F5', '#F5DB87', '#F87FF2', '#F5876A']);
  const [baseColor, setBaseColor] = useState<string>('#9b87f5');
  const [paletteType, setPaletteType] = useState<PaletteType>("analogous");
  const [numberOfColors, setNumberOfColors] = useState<number>(5);
  const [lockStatus, setLockStatus] = useState<boolean[]>([false, false, false, false, false]);
  const [exportFormat, setExportFormat] = useState<ExportFormat>("hex");

  // Initialize the palette on first load, but don't regenerate automatically when settings change
  useEffect(() => {
    // Only run once on component mount
    generateNewPalette();
  }, []);

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

  return {
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
  };
}
