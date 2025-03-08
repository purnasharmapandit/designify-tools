
import React from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface IconTabContentProps {
  iconSet: string;
  onIconSetChange: (value: string) => void;
  icons: Array<{ value: string; label: string }>;
}

const IconTabContent = ({
  iconSet,
  onIconSetChange,
  icons,
}: IconTabContentProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="iconSet">Icon Style</Label>
        <Select value={iconSet} onValueChange={onIconSetChange}>
          <SelectTrigger id="iconSet" className="mt-1">
            <SelectValue placeholder="Select icon style" />
          </SelectTrigger>
          <SelectContent>
            {icons.map(icon => (
              <SelectItem key={icon.value} value={icon.value}>
                {icon.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="pt-4">
        <Label className="mb-2 block">Available Icons</Label>
        <div className="grid grid-cols-4 gap-2">
          {Array(8).fill(0).map((_, i) => (
            <button 
              key={i}
              className="aspect-square bg-gray-100 rounded p-2 hover:bg-gray-200 flex items-center justify-center"
            >
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconTabContent;
