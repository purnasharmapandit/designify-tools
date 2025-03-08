
import { useState, useEffect } from "react";
import { toast } from "sonner";

export type PaletteType = "analogous" | "monochromatic" | "triadic" | "complementary" | "split-complementary" | "tetradic" | "random";
export type ExportFormat = "hex" | "rgb" | "hsl" | "css" | "tailwind";

export function useGenerateColorPalette() {
  const [colors, setColors] = useState<string[]>(['#9b87f5', '#87B9F5', '#F5DB87', '#F87FF2', '#F5876A']);
  const [baseColor, setBaseColor] = useState<string>('#9b87f5');
  const [paletteType, setPaletteType] = useState<PaletteType>("analogous");
  const [numberOfColors, setNumberOfColors] = useState<number>(5);
  const [lockStatus, setLockStatus] = useState<boolean[]>([false, false, false, false, false]);
  const [exportFormat, setExportFormat] = useState<ExportFormat>("hex");

  useEffect(() => {
    generateNewPalette();
  }, [baseColor, paletteType, numberOfColors]);

  // Convert hex to HSL
  const hexToHSL = (hex: string): [number, number, number] => {
    // Remove the # if present
    hex = hex.replace(/^#/, '');
    
    // Parse the hex values
    let r = parseInt(hex.slice(0, 2), 16) / 255;
    let g = parseInt(hex.slice(2, 4), 16) / 255;
    let b = parseInt(hex.slice(4, 6), 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    let l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      
      h = h / 6;
    }
    
    return [h * 360, s * 100, l * 100];
  };

  // Convert HSL to hex
  const hslToHex = (h: number, s: number, l: number): string => {
    h /= 360;
    s /= 100;
    l /= 100;
    
    let r, g, b;
    
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    
    const toHex = (x: number) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // Generate a random hex color
  const getRandomColor = (): string => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  };

  // Generate palette based on the selected type
  const generatePalette = (): string[] => {
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

  // Generate a new palette respecting locked colors
  const generateNewPalette = () => {
    const newPalette = generatePalette();
    
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

  // Copy colors to clipboard based on the export format
  const copyToClipboard = () => {
    let textToCopy = '';
    
    switch (exportFormat) {
      case 'hex':
        textToCopy = colors.map(color => `${color.toUpperCase()}`).join('\n');
        break;
      case 'rgb':
        textToCopy = colors.map(color => {
          const r = parseInt(color.slice(1, 3), 16);
          const g = parseInt(color.slice(3, 5), 16);
          const b = parseInt(color.slice(5, 7), 16);
          return `rgb(${r}, ${g}, ${b})`;
        }).join('\n');
        break;
      case 'hsl':
        textToCopy = colors.map(color => {
          const [h, s, l] = hexToHSL(color);
          return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
        }).join('\n');
        break;
      case 'css':
        textToCopy = `:root {\n${colors.map((color, i) => `  --color-${i + 1}: ${color};`).join('\n')}\n}`;
        break;
      case 'tailwind':
        textToCopy = `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n${colors.map((color, i) => `        color${i + 1}: '${color}',`).join('\n')}\n      }\n    }\n  }\n}`;
        break;
    }
    
    navigator.clipboard.writeText(textToCopy);
    toast.success('Copied to clipboard');
  };

  // Export palette as a file
  const handleExport = () => {
    let filename = `color-palette-${Date.now()}`;
    let content = '';
    let type = 'text/plain';
    
    switch (exportFormat) {
      case 'hex':
      case 'rgb':
      case 'hsl':
        content = colors.map(color => {
          if (exportFormat === 'hex') return color.toUpperCase();
          if (exportFormat === 'rgb') {
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgb(${r}, ${g}, ${b})`;
          }
          if (exportFormat === 'hsl') {
            const [h, s, l] = hexToHSL(color);
            return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
          }
          return color;
        }).join('\n');
        filename += '.txt';
        break;
      case 'css':
        content = `:root {\n${colors.map((color, i) => `  --color-${i + 1}: ${color};`).join('\n')}\n}`;
        filename += '.css';
        type = 'text/css';
        break;
      case 'tailwind':
        content = `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n${colors.map((color, i) => `        color${i + 1}: '${color}',`).join('\n')}\n      }\n    }\n  }\n}`;
        filename += '.js';
        type = 'text/javascript';
        break;
    }
    
    // Create a blob and download it
    const blob = new Blob([content], { type });
    const link = document.createElement('a');
    link.download = filename;
    link.href = window.URL.createObjectURL(blob);
    link.click();
    
    toast.success(`Palette downloaded as ${filename}`);
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
