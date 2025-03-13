
import React from "react";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/ui/color-picker";
import CenterElementSelector from "@/components/qr-code/CenterElementSelector";
import { BusinessCardData } from "../types";

interface DesignTabContentProps {
  cardData: BusinessCardData;
  handleInputChange: (field: keyof BusinessCardData, value: string) => void;
  centerElement: any;
  setCenterElement: (element: any) => void;
}

const DesignTabContent = ({ 
  cardData, 
  handleInputChange, 
  centerElement, 
  setCenterElement 
}: DesignTabContentProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Primary Color</Label>
        <ColorPicker 
          label="Primary Color" 
          value={cardData.primaryColor} 
          onChange={(color) => handleInputChange("primaryColor", color)} 
          id="primary-color" 
        />
      </div>
      
      <div>
        <Label>Secondary Color</Label>
        <ColorPicker 
          label="Secondary Color" 
          value={cardData.secondaryColor} 
          onChange={(color) => handleInputChange("secondaryColor", color)} 
          id="secondary-color" 
        />
      </div>
      
      <div>
        <Label>Text Color</Label>
        <ColorPicker 
          label="Text Color" 
          value={cardData.textColor} 
          onChange={(color) => handleInputChange("textColor", color)} 
          id="text-color" 
        />
      </div>
      
      <div>
        <CenterElementSelector
          centerElement={centerElement}
          onChange={setCenterElement}
        />
      </div>
    </div>
  );
};

export default DesignTabContent;
