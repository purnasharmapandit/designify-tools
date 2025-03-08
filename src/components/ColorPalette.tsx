
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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {colors.map((color, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="relative aspect-square rounded-md overflow-hidden shadow-sm"
          style={{ backgroundColor: color }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-3"
               style={{ color: getTextColor(color) }}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                Color {index + 1}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={() => onToggleLock(index)}
              >
                {lockStatus[index] ? (
                  <Lock className="h-4 w-4" style={{ color: getTextColor(color) }} />
                ) : (
                  <Unlock className="h-4 w-4" style={{ color: getTextColor(color) }} />
                )}
              </Button>
            </div>
            
            <div className="text-center">
              <span className="font-mono font-bold tracking-wider text-sm">{color.toUpperCase()}</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="self-end bg-white/20 backdrop-blur-sm hover:bg-white/30"
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
