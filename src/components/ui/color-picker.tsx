
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
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">{label}</Label>
      <div className="flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-md border shadow-sm overflow-hidden"
          style={{ backgroundColor: value }}
        >
          <Input
            id={id}
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-14 w-14 transform -translate-x-2 -translate-y-2 opacity-0"
          />
        </div>
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 flex-1 font-mono text-sm"
          placeholder="#RRGGBB"
        />
      </div>
    </div>
  );
};

export { ColorPicker };
