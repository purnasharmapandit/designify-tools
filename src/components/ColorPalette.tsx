
import React from "react";
import { motion } from "framer-motion";
import { Copy, Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ColorPaletteProps {
  colors: string[];
  lockStatus: boolean[];
  onToggleLock: (index: number) => void;
  onColorChange?: (index: number, color: string) => void;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors,
  lockStatus,
  onToggleLock,
  onColorChange,
}) => {
  const copyColorToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied ${color.toUpperCase()} to clipboard`);
  };

  const getTextColor = (hexColor: string) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate luminance - using relative luminance formula
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return black for bright colors, white for dark colors
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      {colors.map((color, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex-1 flex flex-col justify-between p-4 h-36 md:h-full"
          style={{ backgroundColor: color }}
        >
          <div className="flex justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
              onClick={() => onToggleLock(index)}
            >
              {lockStatus[index] ? (
                <Lock className="h-4 w-4" style={{ color: getTextColor(color) }} />
              ) : (
                <Unlock className="h-4 w-4" style={{ color: getTextColor(color) }} />
              )}
            </Button>
            
            <span 
              className="text-xs font-mono px-2 py-1 rounded bg-white/10 backdrop-blur-sm"
              style={{ color: getTextColor(color) }}
            >
              {index + 1}
            </span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <h3 
              className="text-2xl font-bold font-mono tracking-wider"
              style={{ color: getTextColor(color) }}
            >
              {color.toUpperCase()}
            </h3>
            
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20"
              onClick={() => copyColorToClipboard(color)}
            >
              <Copy className="h-3 w-3 mr-1" style={{ color: getTextColor(color) }} />
              <span style={{ color: getTextColor(color) }}>Copy</span>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
