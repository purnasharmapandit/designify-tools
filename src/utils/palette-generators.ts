
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
      // Vary lightness for monochromatic scheme with some randomness
      for (let i = 0; i < numberOfColors; i++) {
        // Add some randomness to lightness and saturation
        const randomOffset = Math.random() * 10 - 5;
        const newL = Math.max(10, Math.min(90, l - 30 + (60 * i / (numberOfColors - 1)) + randomOffset));
        const newS = Math.max(10, Math.min(100, s + (Math.random() * 20 - 10)));
        newColors.push(hslToHex(h, newS, newL));
      }
      break;
      
    case "analogous":
      // Analogous colors are next to each other on the color wheel
      for (let i = 0; i < numberOfColors; i++) {
        // Add randomness to hue and saturation
        const randomHueOffset = Math.random() * 15 - 7.5;
        const randomSatOffset = Math.random() * 20 - 10;
        const newH = (h + (40 * i - 40 * (numberOfColors - 1) / 2) + randomHueOffset) % 360;
        const newS = Math.max(20, Math.min(100, s + randomSatOffset));
        const adjustedH = newH < 0 ? newH + 360 : newH;
        newColors.push(hslToHex(adjustedH, newS, l));
      }
      break;
      
    case "complementary":
      // Complementary colors are opposite on the color wheel
      // Add base color with slight variation
      const randomBaseOffset = Math.random() * 10 - 5;
      newColors.push(hslToHex((h + randomBaseOffset) % 360, s, l));
      
      // Add colors between base color and complement with randomness
      for (let i = 1; i < numberOfColors - 1; i++) {
        const ratio = i / (numberOfColors - 1);
        const randomOffset = Math.random() * 20 - 10;
        const newH = (h + 180 * ratio + randomOffset) % 360;
        const newS = Math.max(20, Math.min(100, s + (Math.random() * 20 - 10)));
        const newL = Math.max(20, Math.min(80, l + (Math.random() * 20 - 10)));
        newColors.push(hslToHex(newH, newS, newL));
      }
      
      // Add the complement with slight variation
      const randomCompOffset = Math.random() * 10 - 5;
      newColors.push(hslToHex((h + 180 + randomCompOffset) % 360, s, l));
      break;
      
    case "triadic":
      // Triadic colors are evenly spaced on the color wheel
      for (let i = 0; i < numberOfColors; i++) {
        // Add randomness to each color
        const randomHue = Math.random() * 15 - 7.5;
        const randomSat = Math.random() * 20 - 10;
        const randomLight = Math.random() * 15 - 7.5;
        
        const newH = (h + (120 * i) + randomHue) % 360;
        const newS = Math.max(20, Math.min(100, s + randomSat));
        const newL = Math.max(20, Math.min(80, l + randomLight));
        
        newColors.push(hslToHex(newH, newS, newL));
      }
      break;
      
    case "split-complementary":
      // Base color with variation
      const baseRandomOffset = Math.random() * 8 - 4;
      newColors.push(hslToHex((h + baseRandomOffset) % 360, s, l));
      
      // Colors in between with randomness
      for (let i = 1; i < numberOfColors - 2; i++) {
        const ratio = i / (numberOfColors - 2);
        const randomOffset = Math.random() * 25 - 12.5;
        const newH = (h + 180 * ratio + randomOffset) % 360;
        const newS = Math.max(20, Math.min(100, s + (Math.random() * 15 - 7.5)));
        const newL = Math.max(20, Math.min(80, l + (Math.random() * 15 - 7.5)));
        newColors.push(hslToHex(newH, newS, newL));
      }
      
      // Split complements with randomness
      const splitOffset1 = Math.random() * 15 - 7.5;
      const splitOffset2 = Math.random() * 15 - 7.5;
      newColors.push(hslToHex((h + 150 + splitOffset1) % 360, 
                              Math.max(20, Math.min(100, s + (Math.random() * 15 - 7.5))), 
                              Math.max(20, Math.min(80, l + (Math.random() * 15 - 7.5)))));
      newColors.push(hslToHex((h + 210 + splitOffset2) % 360, 
                              Math.max(20, Math.min(100, s + (Math.random() * 15 - 7.5))), 
                              Math.max(20, Math.min(80, l + (Math.random() * 15 - 7.5)))));
      break;
      
    case "tetradic":
      // Four colors evenly spaced with randomness
      for (let i = 0; i < numberOfColors; i++) {
        const randomOffset = Math.random() * 15 - 7.5;
        const satOffset = Math.random() * 20 - 10;
        const lightOffset = Math.random() * 15 - 7.5;
        
        const newH = (h + (90 * i) + randomOffset) % 360;
        const newS = Math.max(20, Math.min(100, s + satOffset));
        const newL = Math.max(20, Math.min(80, l + lightOffset));
        
        newColors.push(hslToHex(newH, newS, newL));
      }
      break;
      
    case "random":
      // Generate completely random colors
      for (let i = 0; i < numberOfColors; i++) {
        newColors.push(getRandomColor());
      }
      break;
      
    default:
      // Default to random if something goes wrong
      for (let i = 0; i < numberOfColors; i++) {
        newColors.push(getRandomColor());
      }
  }
  
  return newColors;
};
