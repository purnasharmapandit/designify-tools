
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Type, Image, PaintBucket, Layout } from "lucide-react";
import TextTabContent from "./TextTabContent";
import IconTabContent from "./IconTabContent";
import ColorTabContent from "./ColorTabContent";
import LayoutTabContent from "./LayoutTabContent";

export interface EditorSidebarProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  businessName: string;
  slogan: string;
  fontFamily: string;
  fontSize: number;
  primaryColor: string;
  secondaryColor: string;
  selectedLayout: string;
  iconSet: string;
  onBusinessNameChange: (value: string) => void;
  onSloganChange: (value: string) => void;
  onFontFamilyChange: (value: string) => void;
  onFontSizeChange: (value: number) => void;
  onPrimaryColorChange: (value: string) => void;
  onSecondaryColorChange: (value: string) => void;
  onLayoutChange: (value: string) => void;
  onIconSetChange: (value: string) => void;
  fonts: Array<{ value: string; label: string; family: string }>;
  icons: Array<{ value: string; label: string }>;
  layouts: Array<{ value: string; label: string }>;
}

const EditorSidebar = ({
  activeTab,
  setActiveTab,
  businessName,
  slogan,
  fontFamily,
  fontSize,
  primaryColor,
  secondaryColor,
  selectedLayout,
  iconSet,
  onBusinessNameChange,
  onSloganChange,
  onFontFamilyChange,
  onFontSizeChange,
  onPrimaryColorChange,
  onSecondaryColorChange,
  onLayoutChange,
  onIconSetChange,
  fonts,
  icons,
  layouts,
}: EditorSidebarProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <Tabs defaultValue="text" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="text">
            <Type className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="icon">
            <Image className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="color">
            <PaintBucket className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="layout">
            <Layout className="h-4 w-4" />
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="text">
          <TextTabContent
            businessName={businessName}
            slogan={slogan}
            fontFamily={fontFamily}
            fontSize={fontSize}
            onBusinessNameChange={onBusinessNameChange}
            onSloganChange={onSloganChange}
            onFontFamilyChange={onFontFamilyChange}
            onFontSizeChange={onFontSizeChange}
            fonts={fonts}
          />
        </TabsContent>
        
        <TabsContent value="icon">
          <IconTabContent
            iconSet={iconSet}
            onIconSetChange={onIconSetChange}
            icons={icons}
          />
        </TabsContent>
        
        <TabsContent value="color">
          <ColorTabContent
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            onPrimaryColorChange={onPrimaryColorChange}
            onSecondaryColorChange={onSecondaryColorChange}
          />
        </TabsContent>
        
        <TabsContent value="layout">
          <LayoutTabContent
            selectedLayout={selectedLayout}
            onLayoutChange={onLayoutChange}
            layouts={layouts}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EditorSidebar;
