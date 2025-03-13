
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ColorPicker } from "@/components/ui/color-picker";
import { Text, Palette, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import CenterElementSelector from "@/components/qr-code/CenterElementSelector";
import { BusinessCardData } from "../types";

interface EditorSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cardData: BusinessCardData;
  handleInputChange: (field: keyof BusinessCardData, value: string) => void;
  handleDownload: () => void;
  centerElement: any;
  setCenterElement: (element: any) => void;
}

const EditorSidebar = ({
  activeTab,
  setActiveTab,
  cardData,
  handleInputChange,
  handleDownload,
  centerElement,
  setCenterElement,
}: EditorSidebarProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="content">
              <Text className="h-4 w-4 mr-2" />
              Content
            </TabsTrigger>
            <TabsTrigger value="design">
              <Palette className="h-4 w-4 mr-2" />
              Design
            </TabsTrigger>
            <TabsTrigger value="layout">
              <Layout className="h-4 w-4 mr-2" />
              Layout
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                value={cardData.name} 
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="title">Job Title</Label>
              <Input 
                id="title" 
                value={cardData.title} 
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={cardData.email} 
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone" 
                value={cardData.phone} 
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="website">Website</Label>
              <Input 
                id="website" 
                value={cardData.website} 
                onChange={(e) => handleInputChange("website", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea 
                id="address" 
                value={cardData.address} 
                onChange={(e) => handleInputChange("address", e.target.value)}
                rows={2}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="design" className="space-y-4">
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
          </TabsContent>
          
          <TabsContent value="layout" className="space-y-4">
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
          </TabsContent>
        </Tabs>
        
        <div className="mt-6">
          <Button onClick={handleDownload} className="w-full">
            <Download className="mr-2 h-4 w-4" />
            Download Business Card
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EditorSidebar;
