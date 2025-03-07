
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { QRCodeCenterElement } from "@/hooks/use-qrcode";
import { Upload, Type } from "lucide-react";

interface CenterElementSelectorProps {
  centerElement: QRCodeCenterElement | null;
  onChange: (centerElement: QRCodeCenterElement | null) => void;
}

const CenterElementSelector: React.FC<CenterElementSelectorProps> = ({ centerElement, onChange }) => {
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const handleTypeChange = (type: "logo" | "text" | "none") => {
    if (type === "none") {
      onChange(null);
      return;
    }

    onChange({
      type,
      content: type === "logo" ? (centerElement?.type === "logo" ? centerElement.content : "") : 
                (centerElement?.type === "text" ? centerElement.content : ""),
      size: centerElement?.size || 30
    });
  };

  const handleTextChange = (text: string) => {
    if (!centerElement || centerElement.type !== "text") return;
    onChange({
      ...centerElement,
      content: text
    });
  };

  const handleSizeChange = (size: number) => {
    if (!centerElement) return;
    onChange({
      ...centerElement,
      size
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLogoFile(file);
    
    const reader = new FileReader();
    reader.onload = () => {
      if (!centerElement || centerElement.type !== "logo") return;
      onChange({
        ...centerElement,
        content: reader.result as string
      });
    };
    reader.readAsDataURL(file);
  };

  const getActiveTab = () => {
    if (!centerElement) return "none";
    return centerElement.type;
  };

  return (
    <div className="space-y-4">
      <Label>Center Element</Label>
      
      <Tabs value={getActiveTab()} onValueChange={(v) => handleTypeChange(v as "logo" | "text" | "none")}>
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="none">None</TabsTrigger>
          <TabsTrigger value="logo">Logo</TabsTrigger>
          <TabsTrigger value="text">Text</TabsTrigger>
        </TabsList>
        
        <TabsContent value="logo" className="space-y-4 mt-4">
          <div className="flex items-center gap-4">
            <div className="flex-grow">
              <Input
                id="logo-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById("logo-upload")?.click()}
                className="w-full"
              >
                <Upload className="mr-2 h-4 w-4" />
                {logoFile ? logoFile.name : "Upload Logo"}
              </Button>
            </div>
            
            {centerElement?.type === "logo" && centerElement.content && (
              <div className="w-12 h-12 border rounded flex items-center justify-center overflow-hidden">
                <img 
                  src={centerElement.content} 
                  alt="Logo preview" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="logo-size">Logo Size (%)</Label>
              <span>{centerElement?.size || 30}%</span>
            </div>
            <Slider
              id="logo-size"
              min={10}
              max={50}
              step={1}
              value={[centerElement?.size || 30]}
              onValueChange={(values) => handleSizeChange(values[0])}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="text" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="center-text">Text</Label>
            <Input
              id="center-text"
              value={centerElement?.type === "text" ? centerElement.content : ""}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Enter text for center"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="text-size">Text Size (%)</Label>
              <span>{centerElement?.size || 30}%</span>
            </div>
            <Slider
              id="text-size"
              min={10}
              max={50}
              step={1}
              value={[centerElement?.size || 30]}
              onValueChange={(values) => handleSizeChange(values[0])}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CenterElementSelector;
