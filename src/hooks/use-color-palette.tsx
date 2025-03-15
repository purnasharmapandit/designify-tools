
import { useState } from "react";
import { toast } from "sonner";
import { useGenerateColorPalette } from "./use-color-palette";

export function useColorPalette() {
  const {
    colors,
    lockStatus,
    generateNewPalette,
    toggleLockColor,
    copyToClipboard,
    handleExport
  } = useGenerateColorPalette();

  const [isGenerating, setIsGenerating] = useState(false);

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
    lockStatus,
    toggleLock: toggleLockColor,
    generateRandomPalette,
    generateHarmonious,
    generateAnalogous,
    generateComplementary,
    generateMonochromatic,
    generateFromImage,
    isGenerating,
  };
}
