
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
          className="h-8 w-8 rounded-md border"
          style={{ backgroundColor: value }}
        />
        <Input
          id={id}
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 p-1 w-16"
        />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 flex-1"
          placeholder="#RRGGBB"
        />
      </div>
    </div>
  );
};

export { ColorPicker };
