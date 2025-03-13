
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BusinessCardData } from "../types";
import { Phone, Mail, MapPin } from "lucide-react";

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
            
            {/* New eco template - Similar to the uploaded image */}
            {cardData.template === "eco" && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br" style={{ 
                  background: `linear-gradient(to bottom right, ${cardData.primaryColor} 0%, ${cardData.primaryColor}90 100%)` 
                }}></div>
                <div className="absolute top-0 right-0 bottom-0 left-1/3 rounded-l-full bg-white"></div>
                <div className="absolute right-6 bottom-6 h-28 w-28 rounded-full border-4" style={{ 
                  borderColor: cardData.primaryColor,
                  backgroundColor: cardData.primaryColor,
                  opacity: 0.8
                }}></div>
              </>
            )}
            
            {/* New gradient template */}
            {cardData.template === "gradient" && (
              <div className="absolute inset-0" style={{ 
                background: `linear-gradient(135deg, ${cardData.primaryColor} 0%, ${cardData.secondaryColor} 100%)`,
                opacity: 0.9
              }}></div>
            )}
            
            {/* New vintage template */}
            {cardData.template === "vintage" && (
              <>
                <div className="absolute inset-0 border-8 border-opacity-20" style={{ borderColor: cardData.primaryColor }}></div>
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-opacity-40" style={{ borderColor: cardData.primaryColor }}></div>
              </>
            )}
            
            {/* New geometric template */}
            {cardData.template === "geometric" && (
              <>
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full" style={{ backgroundColor: cardData.primaryColor, opacity: 0.1 }}></div>
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-md transform rotate-45" style={{ backgroundColor: cardData.primaryColor, opacity: 0.1 }}></div>
                <div className="absolute top-1/4 left-1/3 h-16 w-16 rounded-full" style={{ backgroundColor: cardData.primaryColor, opacity: 0.1 }}></div>
              </>
            )}
            
            {/* Logo */}
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
            
            {/* Text circle */}
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
            
            {/* Contact info with icons for eco template */}
            {cardData.template === "eco" ? (
              <>
                <div className="z-10 ml-4 mt-4">
                  <h3 className="text-xl font-bold" style={{ color: cardData.primaryColor }}>{cardData.name}</h3>
                  <p className="text-sm opacity-75">{cardData.title}</p>
                </div>
                
                <div className="text-xs space-y-2 z-10 ml-4 mb-4">
                  {cardData.phone && (
                    <div className="flex items-center">
                      <div className="mr-2 p-1 rounded-full" style={{ backgroundColor: cardData.primaryColor }}>
                        <Phone className="h-3 w-3 text-white" />
                      </div>
                      <p>{cardData.phone}</p>
                    </div>
                  )}
                  {cardData.email && (
                    <div className="flex items-center">
                      <div className="mr-2 p-1 rounded-full" style={{ backgroundColor: cardData.primaryColor }}>
                        <Mail className="h-3 w-3 text-white" />
                      </div>
                      <p>{cardData.email}</p>
                    </div>
                  )}
                  {cardData.website && (
                    <div className="flex items-center">
                      <div className="mr-2 p-1 rounded-full" style={{ backgroundColor: cardData.primaryColor }}>
                        <div className="h-3 w-3 flex items-center justify-center text-white text-xs font-bold">@</div>
                      </div>
                      <p>{cardData.website}</p>
                    </div>
                  )}
                  {cardData.address && (
                    <div className="flex items-center">
                      <div className="mr-2 p-1 rounded-full" style={{ backgroundColor: cardData.primaryColor }}>
                        <MapPin className="h-3 w-3 text-white" />
                      </div>
                      <p>{cardData.address}</p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardPreview;
