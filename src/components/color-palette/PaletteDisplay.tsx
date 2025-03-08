
import React from "react";
import { Button } from "@/components/ui/button";
import ColorSwatch from "@/components/color-palette/ColorSwatch";

interface PaletteDisplayProps {
  colors: string[];
  lockStatus: boolean[];
  toggleLockColor: (index: number) => void;
}

const PaletteDisplay = ({ colors, lockStatus, toggleLockColor }: PaletteDisplayProps) => {
  // Helper function to determine text color based on background
  const getTextColor = (hexColor: string) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  };

  // Function to copy individual color
  const handleCopyIndividualColor = (color: string) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <main className="flex-grow">
      <div className="w-full flex flex-col md:flex-row h-[60vh]">
        {colors.map((color, index) => (
          <div key={index} className="relative flex-1 h-full min-h-[100px] flex">
            <ColorSwatch
              color={color}
              index={index}
              isLocked={lockStatus[index]}
              onToggleLock={toggleLockColor}
            />
            {/* Individual copy button for mobile view */}
            <Button
              variant="secondary"
              size="sm"
              className="md:hidden absolute bottom-3 right-3 text-xs bg-white/20 backdrop-blur-sm hover:bg-white/30"
              style={{ 
                color: getTextColor(color)
              }}
              onClick={() => handleCopyIndividualColor(color)}
            >
              Copy
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PaletteDisplay;
