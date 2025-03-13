
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BusinessCardData } from "../types";

interface CardPreviewProps {
  cardData: BusinessCardData;
  centerElement: any;
}

const CardPreview = ({ cardData, centerElement }: CardPreviewProps) => {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">Preview</h2>
          <p className="text-sm text-gray-500">This is how your business card will look</p>
        </div>
        
        <div className="flex justify-center">
          <div 
            className="business-card w-full max-w-md aspect-[1.8/1] rounded-lg shadow-lg p-6 flex flex-col justify-between relative overflow-hidden"
            style={{ 
              backgroundColor: cardData.secondaryColor,
              color: cardData.textColor,
            }}
          >
            {/* Primary color accent based on template */}
            {cardData.template === "minimal" && (
              <div className="absolute top-0 left-0 h-1 w-full" style={{ backgroundColor: cardData.primaryColor }}></div>
            )}
            {cardData.template === "corporate" && (
              <div className="absolute top-0 left-0 h-full w-1/4" style={{ backgroundColor: cardData.primaryColor, opacity: 0.1 }}></div>
            )}
            {cardData.template === "creative" && (
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full" style={{ backgroundColor: cardData.primaryColor, opacity: 0.2 }}></div>
            )}
            {cardData.template === "bold" && (
              <div className="absolute inset-0" style={{ 
                background: `linear-gradient(135deg, ${cardData.primaryColor}40 0%, transparent 50%)` 
              }}></div>
            )}
            {cardData.template === "elegant" && (
              <div className="absolute top-0 right-0 h-full w-1/3" style={{ 
                background: `linear-gradient(90deg, transparent 0%, ${cardData.primaryColor}20 100%)` 
              }}></div>
            )}
            {cardData.template === "modern" && (
              <div className="absolute bottom-0 left-0 h-2 w-full" style={{ 
                background: `linear-gradient(90deg, ${cardData.primaryColor} 0%, transparent 100%)` 
              }}></div>
            )}
            {cardData.template === "professional" && (
              <div className="absolute inset-0" style={{ 
                background: `linear-gradient(45deg, ${cardData.primaryColor}10 0%, ${cardData.primaryColor}30 100%)` 
              }}></div>
            )}
            {cardData.template === "vibrant" && (
              <>
                <div className="absolute -left-10 -bottom-20 h-40 w-40 rounded-full" style={{ backgroundColor: cardData.primaryColor, opacity: 0.2 }}></div>
                <div className="absolute -right-10 -top-20 h-40 w-40 rounded-full" style={{ backgroundColor: cardData.primaryColor, opacity: 0.2 }}></div>
              </>
            )}
            
            {/* Logo - Now displayed without any container */}
            {centerElement && centerElement.type === "logo" && centerElement.content && (
              <div className="absolute top-6 right-6 z-20">
                <img 
                  src={centerElement.content} 
                  alt="Logo" 
                  className="object-contain"
                  style={{ 
                    width: `${centerElement.size * 1.5}px`, 
                    height: `${centerElement.size * 1.5}px`,
                  }}
                />
              </div>
            )}
            
            {/* Text - Keep the circular design */}
            {centerElement && centerElement.type === "text" && centerElement.content && (
              <div className="absolute top-6 right-6 z-20">
                <div 
                  className="rounded-full flex items-center justify-center shadow-md"
                  style={{ 
                    width: `${centerElement.size * 1.5}px`, 
                    height: `${centerElement.size * 1.5}px`,
                    backgroundColor: cardData.primaryColor,
                    color: cardData.secondaryColor
                  }}
                >
                  <span className="font-bold text-lg">{centerElement.content}</span>
                </div>
              </div>
            )}
            
            <div className="z-10">
              <h3 className="text-xl font-bold">{cardData.name}</h3>
              <p className="text-sm opacity-75">{cardData.title}</p>
            </div>
            
            <div className="text-xs space-y-1 z-10">
              {cardData.email && <p>{cardData.email}</p>}
              {cardData.phone && <p>{cardData.phone}</p>}
              {cardData.website && <p>{cardData.website}</p>}
              {cardData.address && <p>{cardData.address}</p>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardPreview;
