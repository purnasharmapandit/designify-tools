
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ColorTabContentProps {
  primaryColor: string;
  secondaryColor: string;
  onPrimaryColorChange: (value: string) => void;
  onSecondaryColorChange: (value: string) => void;
}

const ColorTabContent = ({
  primaryColor,
  secondaryColor,
  onPrimaryColorChange,
  onSecondaryColorChange,
}: ColorTabContentProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="primaryColor">Primary Color</Label>
        <div className="flex gap-2 mt-1">
          <div className="w-10 h-10 rounded" style={{ backgroundColor: primaryColor }}></div>
          <Input 
            id="primaryColor"
            type="color"
            value={primaryColor}
            onChange={(e) => onPrimaryColorChange(e.target.value)}
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="secondaryColor">Secondary Color</Label>
        <div className="flex gap-2 mt-1">
          <div className="w-10 h-10 rounded" style={{ backgroundColor: secondaryColor }}></div>
          <Input 
            id="secondaryColor"
            type="color"
            value={secondaryColor}
            onChange={(e) => onSecondaryColorChange(e.target.value)}
          />
        </div>
      </div>
      
      <div className="pt-2">
        <Label className="mb-2 block">Color Presets</Label>
        <div className="grid grid-cols-4 gap-2">
          {["#4F46E5", "#10B981", "#EF4444", "#F59E0B", "#EC4899", "#8B5CF6", "#14B8A6", "#6B7280"].map((color, i) => (
            <button 
              key={i}
              className="aspect-square rounded hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              onClick={() => onPrimaryColorChange(color)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorTabContent;
