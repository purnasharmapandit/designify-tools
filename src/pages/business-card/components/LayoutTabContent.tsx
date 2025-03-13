
import React from "react";
import { BusinessCardData } from "../types";

interface LayoutTabContentProps {
  cardData: BusinessCardData;
  handleInputChange: (field: keyof BusinessCardData, value: string) => void;
}

const LayoutTabContent = ({ cardData, handleInputChange }: LayoutTabContentProps) => {
  const templates = [
    { id: "minimal", name: "Minimal", color: "#f3f4f6" },
    { id: "corporate", name: "Corporate", color: "#e0f2fe" },
    { id: "creative", name: "Creative", color: "#fef3c7" },
    { id: "bold", name: "Bold", color: "#fee2e2" },
    { id: "elegant", name: "Elegant", color: "#e5deff" },
    { id: "modern", name: "Modern", color: "#d3e4fd" },
    { id: "professional", name: "Professional", color: "#fde1d3" },
    { id: "vibrant", name: "Vibrant", color: "#ffdee2" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {templates.map((template) => (
        <div 
          key={template.id}
          className={`border rounded-lg p-4 cursor-pointer hover:border-indigo-500 transition-all ${cardData.template === template.id ? 'border-indigo-500 bg-indigo-50' : ''}`}
          onClick={() => handleInputChange("template", template.id)}
        >
          <div 
            className="aspect-[1.8/1] rounded mb-2 flex items-center justify-center" 
            style={{ backgroundColor: template.color }}
          >
            <span className="text-xs capitalize">{template.name}</span>
          </div>
          <span className="text-sm capitalize">{template.name}</span>
        </div>
      ))}
    </div>
  );
};

export default LayoutTabContent;
