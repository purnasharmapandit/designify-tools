
import React from "react";
import { Button } from "@/components/ui/button";
import { Lock, Unlock, Copy } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface ColorSwatchProps {
  color: string;
  index: number;
  isLocked: boolean;
  onToggleLock: (index: number) => void;
}

const ColorSwatch = ({ color, index, isLocked, onToggleLock }: ColorSwatchProps) => {
  const getTextColor = (hexColor: string) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  };
  
  const textColor = getTextColor(color);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied ${color.toUpperCase()}`);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="w-full h-full flex flex-col justify-between"
      style={{ backgroundColor: color }}
    >
      <div className="p-2 md:p-4 flex justify-between items-start">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 md:h-9 md:w-9 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
          onClick={() => onToggleLock(index)}
          style={{ color: textColor }}
        >
          {isLocked ? (
            <Lock className="h-3 w-3 md:h-5 md:w-5" />
          ) : (
            <Unlock className="h-3 w-3 md:h-5 md:w-5" />
          )}
        </Button>

        <span className="text-xs md:text-sm font-mono px-1 py-0.5 md:px-2 md:py-1 rounded bg-white/10 backdrop-blur-sm"
              style={{ color: textColor }}>
          {index + 1}
        </span>
      </div>

      <div className="p-2 md:p-4 flex flex-col items-center mt-auto">
        <h3 className="text-sm md:text-2xl font-bold font-mono tracking-wider truncate w-full text-center"
            style={{ color: textColor }}>
          {color.toUpperCase()}
        </h3>
        
        {/* Only show copy button on desktop */}
        <Button
          variant="ghost"
          size="sm"
          className="hidden md:flex text-xs md:text-sm bg-white/10 backdrop-blur-sm hover:bg-white/20 py-1 px-2 h-auto min-h-0 md:min-h-9 mt-2"
          onClick={copyToClipboard}
          style={{ color: textColor }}
        >
          <Copy className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
          <span>Copy</span>
        </Button>
      </div>
    </motion.div>
  );
};

export default ColorSwatch;
