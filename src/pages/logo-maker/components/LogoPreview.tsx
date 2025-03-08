
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Undo2, Redo2, RotateCcw } from "lucide-react";

interface LogoPreviewProps {
  businessName: string;
  slogan: string;
  fontFamily: string;
  fontSize: number;
  primaryColor: string;
  secondaryColor: string;
  fonts: Array<{ value: string; label: string; family: string }>;
}

const LogoPreview = ({
  businessName,
  slogan,
  fontFamily,
  fontSize,
  primaryColor,
  secondaryColor,
  fonts,
}: LogoPreviewProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Undo2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Redo2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Redo</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Reset</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div>
          <Select defaultValue="light">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Background" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light Background</SelectItem>
              <SelectItem value="dark">Dark Background</SelectItem>
              <SelectItem value="transparent">Transparent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Logo Canvas */}
      <div className="aspect-video bg-gray-50 flex items-center justify-center p-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-primary rounded-full mb-4 flex items-center justify-center text-white text-3xl">
            {businessName.charAt(0)}
          </div>
          <div 
            className="text-4xl font-bold" 
            style={{ 
              fontFamily: fonts.find(f => f.value === fontFamily)?.family || "Inter, sans-serif",
              color: primaryColor,
              fontSize: `${fontSize}px`
            }}
          >
            {businessName}
          </div>
          {slogan && (
            <div 
              className="text-lg mt-2" 
              style={{ color: secondaryColor }}
            >
              {slogan}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
