
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface TextTabContentProps {
  businessName: string;
  slogan: string;
  fontFamily: string;
  fontSize: number;
  onBusinessNameChange: (value: string) => void;
  onSloganChange: (value: string) => void;
  onFontFamilyChange: (value: string) => void;
  onFontSizeChange: (value: number) => void;
  fonts: Array<{ value: string; label: string; family: string }>;
}

const TextTabContent = ({
  businessName,
  slogan,
  fontFamily,
  fontSize,
  onBusinessNameChange,
  onSloganChange,
  onFontFamilyChange,
  onFontSizeChange,
  fonts,
}: TextTabContentProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="businessName">Business Name</Label>
        <Input 
          id="businessName"
          value={businessName}
          onChange={(e) => onBusinessNameChange(e.target.value)}
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="slogan">Slogan</Label>
        <Input 
          id="slogan"
          value={slogan}
          onChange={(e) => onSloganChange(e.target.value)}
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="font">Font Family</Label>
        <Select value={fontFamily} onValueChange={onFontFamilyChange}>
          <SelectTrigger id="font" className="mt-1">
            <SelectValue placeholder="Select font" />
          </SelectTrigger>
          <SelectContent>
            {fonts.map(font => (
              <SelectItem key={font.value} value={font.value}>
                <span style={{ fontFamily: font.family }}>{font.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label>Font Size: {fontSize}px</Label>
        <Slider
          value={[fontSize]}
          min={12}
          max={96}
          step={1}
          onValueChange={([value]) => onFontSizeChange(value)}
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default TextTabContent;
