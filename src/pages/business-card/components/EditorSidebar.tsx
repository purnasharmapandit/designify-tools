
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Text, Palette, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { BusinessCardData } from "../types";
import ContentTabContent from "./ContentTabContent";
import DesignTabContent from "./DesignTabContent";
import LayoutTabContent from "./LayoutTabContent";

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
          
          <TabsContent value="content">
            <ContentTabContent
              cardData={cardData}
              handleInputChange={handleInputChange}
            />
          </TabsContent>
          
          <TabsContent value="design">
            <DesignTabContent
              cardData={cardData}
              handleInputChange={handleInputChange}
              centerElement={centerElement}
              setCenterElement={setCenterElement}
            />
          </TabsContent>
          
          <TabsContent value="layout">
            <LayoutTabContent
              cardData={cardData}
              handleInputChange={handleInputChange}
            />
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
