
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Text, Palette, Layout } from "lucide-react";
import { BusinessCardData } from "../types";
import ContentTabContent from "./ContentTabContent";
import DesignTabContent from "./DesignTabContent";
import LayoutTabContent from "./LayoutTabContent";

interface EditorSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cardData: BusinessCardData;
  handleInputChange: (field: keyof BusinessCardData, value: string) => void;
  centerElement: any;
  setCenterElement: (element: any) => void;
}

const EditorSidebar = ({
  activeTab,
  setActiveTab,
  cardData,
  handleInputChange,
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
              Details
            </TabsTrigger>
            <TabsTrigger value="design">
              <Palette className="h-4 w-4 mr-2" />
              Design
            </TabsTrigger>
            <TabsTrigger value="layout">
              <Layout className="h-4 w-4 mr-2" />
              Template
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
      </CardContent>
    </Card>
  );
};

export default EditorSidebar;
