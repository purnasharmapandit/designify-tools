
import { hexToHSL, hslToHex, getRandomColor } from './color-utils';
import { PaletteType } from '@/types/color-palette';

/**
 * Generate a color palette based on the selected type, base color and number of colors
 */
export const generatePalette = (
  baseColor: string, 
  paletteType: PaletteType, 
  numberOfColors: number
): string[] => {
  // Extract HSL values from the base color
  const [h, s, l] = hexToHSL(baseColor);
  
  let newColors: string[] = [];
  
  switch (paletteType) {
    case "monochromatic":
      // Vary lightness for monochromatic scheme
      for (let i = 0; i < numberOfColors; i++) {
        const newL = Math.max(0, Math.min(100, l - 30 + (60 * i / (numberOfColors - 1))));
        newColors.push(hslToHex(h, s, newL));
      }
      break;
      
    case "analogous":
      // Analogous colors are next to each other on the color wheel
      for (let i = 0; i < numberOfColors; i++) {
        const newH = (h + (40 * i - 40 * (numberOfColors - 1) / 2)) % 360;
        newColors.push(hslToHex(newH < 0 ? newH + 360 : newH, s, l));
      }
      break;
      
    case "complementary":
      // Complementary colors are opposite on the color wheel
      newColors.push(baseColor);
      
      // Add colors between base color and complement
      for (let i = 1; i < numberOfColors - 1; i++) {
        const ratio = i / (numberOfColors - 1);
        const newH = (h + 180 * ratio) % 360;
        newColors.push(hslToHex(newH, s, l));
      }
      
      // Add the complement
      newColors.push(hslToHex((h + 180) % 360, s, l));
      break;
      
    case "triadic":
      // Triadic colors are evenly spaced on the color wheel
      for (let i = 0; i < numberOfColors; i++) {
        const newH = (h + (120 * i)) % 360;
        newColors.push(hslToHex(newH, s, l));
      }
      break;
      
    case "split-complementary":
      // Base color
      newColors.push(baseColor);
      
      // Colors in between
      for (let i = 1; i < numberOfColors - 2; i++) {
        const ratio = i / (numberOfColors - 2);
        const newH = (h + 180 * ratio) % 360;
        newColors.push(hslToHex(newH, s, l));
      }
      
      // Split complements (30 degrees from complement)
      newColors.push(hslToHex((h + 150) % 360, s, l));
      newColors.push(hslToHex((h + 210) % 360, s, l));
      break;
      
    case "tetradic":
      // Four colors evenly spaced
      for (let i = 0; i < numberOfColors; i++) {
        const newH = (h + (90 * i)) % 360;
        newColors.push(hslToHex(newH, s, l));
      }
      break;
      
    case "random":
      // Generate random colors
      for (let i = 0; i < numberOfColors; i++) {
        newColors.push(getRandomColor());
      }
      break;
      
    default:
      // Default to analogous if something goes wrong
      for (let i = 0; i < numberOfColors; i++) {
        const newH = (h + 30 * i) % 360;
        newColors.push(hslToHex(newH, s, l));
      }
  }
  
  return newColors;
};
