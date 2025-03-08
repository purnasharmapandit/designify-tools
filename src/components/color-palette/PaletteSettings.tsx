
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ColorPicker } from "@/components/ui/color-picker";
import { DrawerContent } from "@/components/ui/drawer";
import { PaletteType, ExportFormat } from "@/types/color-palette";

interface PaletteSettingsProps {
  paletteType: PaletteType;
  baseColor: string;
  numberOfColors: number;
  exportFormat: ExportFormat;
  onPaletteTypeChange: (value: string) => void;
  onBaseColorChange: (value: string) => void;
  onNumberOfColorsChange: (value: number) => void;
  onExportFormatChange: (value: string) => void;
}

const PaletteSettings = ({
  paletteType,
  baseColor,
  numberOfColors,
  exportFormat,
  onPaletteTypeChange,
  onBaseColorChange,
  onNumberOfColorsChange,
  onExportFormatChange
}: PaletteSettingsProps) => {
  return (
    <DrawerContent className="bg-gray-900 text-white">
      <div className="max-w-lg mx-auto p-6 space-y-6">
        <h3 className="text-xl font-bold">Settings</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Palette Type</label>
            <Select value={paletteType} onValueChange={onPaletteTypeChange}>
              <SelectTrigger className="bg-gray-800 border-gray-700">
                <SelectValue placeholder="Select palette type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="analogous">Analogous</SelectItem>
                <SelectItem value="monochromatic">Monochromatic</SelectItem>
                <SelectItem value="triadic">Triadic</SelectItem>
                <SelectItem value="complementary">Complementary</SelectItem>
                <SelectItem value="split-complementary">Split Complementary</SelectItem>
                <SelectItem value="tetradic">Tetradic</SelectItem>
                <SelectItem value="random">Random</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ColorPicker 
            label="Base Color" 
            value={baseColor} 
            onChange={onBaseColorChange}
            id="base-color"
          />
          
          <div>
            <label className="text-sm font-medium mb-1 block">Number of Colors</label>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onNumberOfColorsChange(Math.max(3, numberOfColors - 1))}
                className="bg-gray-800 border-gray-700"
              >
                -
              </Button>
              <span className="mx-3">{numberOfColors}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onNumberOfColorsChange(Math.min(10, numberOfColors + 1))}
                className="bg-gray-800 border-gray-700"
              >
                +
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Export Format</label>
            <Select value={exportFormat} onValueChange={onExportFormatChange}>
              <SelectTrigger className="bg-gray-800 border-gray-700">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="hex">HEX</SelectItem>
                <SelectItem value="rgb">RGB</SelectItem>
                <SelectItem value="hsl">HSL</SelectItem>
                <SelectItem value="css">CSS Variables</SelectItem>
                <SelectItem value="tailwind">Tailwind Config</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </DrawerContent>
  );
};

export default PaletteSettings;
