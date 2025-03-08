
import { hexToHSL } from './color-utils';
import { ExportFormat } from '@/types/color-palette';
import { toast } from 'sonner';

/**
 * Format colors based on the selected export format
 */
export const formatColorsForExport = (colors: string[], exportFormat: ExportFormat): string => {
  let formattedText = '';
  
  switch (exportFormat) {
    case 'hex':
      formattedText = colors.map(color => `${color.toUpperCase()}`).join('\n');
      break;
    case 'rgb':
      formattedText = colors.map(color => {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
      }).join('\n');
      break;
    case 'hsl':
      formattedText = colors.map(color => {
        const [h, s, l] = hexToHSL(color);
        return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
      }).join('\n');
      break;
    case 'css':
      formattedText = `:root {\n${colors.map((color, i) => `  --color-${i + 1}: ${color};`).join('\n')}\n}`;
      break;
    case 'tailwind':
      formattedText = `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n${colors.map((color, i) => `        color${i + 1}: '${color}',`).join('\n')}\n      }\n    }\n  }\n}`;
      break;
  }
  
  return formattedText;
};

/**
 * Copy colors to clipboard based on the export format
 */
export const copyPaletteToClipboard = (colors: string[], exportFormat: ExportFormat): void => {
  const textToCopy = formatColorsForExport(colors, exportFormat);
  
  navigator.clipboard.writeText(textToCopy);
  toast.success('Copied to clipboard');
};

/**
 * Export palette as a file
 */
export const exportPaletteAsFile = (colors: string[], exportFormat: ExportFormat): void => {
  let filename = `color-palette-${Date.now()}`;
  let content = formatColorsForExport(colors, exportFormat);
  let type = 'text/plain';
  
  switch (exportFormat) {
    case 'hex':
    case 'rgb':
    case 'hsl':
      filename += '.txt';
      break;
    case 'css':
      filename += '.css';
      type = 'text/css';
      break;
    case 'tailwind':
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
