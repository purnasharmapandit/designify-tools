
import React from "react";
import { BusinessCardData } from "../types";

interface LayoutTabContentProps {
  cardData: BusinessCardData;
  handleInputChange: (field: keyof BusinessCardData, value: string) => void;
}

const LayoutTabContent = ({ cardData, handleInputChange }: LayoutTabContentProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {["minimal", "corporate", "creative", "bold"].map((template) => (
        <div 
          key={template}
          className={`border rounded-lg p-4 cursor-pointer hover:border-indigo-500 transition-all ${cardData.template === template ? 'border-indigo-500 bg-indigo-50' : ''}`}
          onClick={() => handleInputChange("template", template)}
        >
          <div className="aspect-[1.8/1] bg-white rounded mb-2 flex items-center justify-center">
            <span className="text-xs capitalize">{template}</span>
          </div>
          <span className="text-sm capitalize">{template}</span>
        </div>
      ))}
    </div>
  );
};

export default LayoutTabContent;
