
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange, id }) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex items-center gap-2">
        <div
          className="h-8 w-8 rounded-md border border-gray-700 shadow-inner overflow-hidden"
          style={{ backgroundColor: value }}
        >
          <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(45deg, #333 25%, transparent 25%), linear-gradient(-45deg, #333 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #333 75%), linear-gradient(-45deg, transparent 75%, #333 75%)', backgroundSize: '8px 8px', backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px', opacity: 0.1 }} />
        </div>
        <Input
          id={id}
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 p-0 w-8 bg-transparent border-0"
        />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-9 flex-1 bg-gray-900/80 border-gray-700 text-gray-200 placeholder:text-gray-500"
          placeholder="#RRGGBB"
        />
      </div>
    </div>
  );
};

export { ColorPicker };
