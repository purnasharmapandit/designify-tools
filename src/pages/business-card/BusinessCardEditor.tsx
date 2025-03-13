
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ColorPicker } from "@/components/ui/color-picker";
import { Download, ChevronLeft, Palette, Text, Layout, Image } from "lucide-react";
import CenterElementSelector from "@/components/qr-code/CenterElementSelector";

interface BusinessCardData {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  logoUrl: string | null;
  template: string;
}

const BusinessCardEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const templateFromUrl = queryParams.get("template") || "minimal";
  
  const [activeTab, setActiveTab] = useState("content");
  const [cardData, setCardData] = useState<BusinessCardData>({
    name: "Your Name",
    title: "Job Title",
    email: "email@example.com",
    phone: "+1 (555) 123-4567",
    website: "www.yourwebsite.com",
    address: "123 Business St, City, State",
    primaryColor: "#4f46e5",
    secondaryColor: "#ffffff",
    textColor: "#000000",
    logoUrl: null,
    template: templateFromUrl,
  });
  
  const [centerElement, setCenterElement] = useState<any>(null);
  
  const handleBackToTemplates = () => {
    navigate("/business-card-generator");
  };
  
  const handleInputChange = (field: keyof BusinessCardData, value: string) => {
    setCardData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleDownload = () => {
    // In a real app, this would generate and download the business card
    alert("This would download your business card in a real application!");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              className="mr-4"
              onClick={handleBackToTemplates}
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to Templates
            </Button>
            <h1 className="text-3xl font-bold">Business Card Editor</h1>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
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
            </div>
            
            {/* Preview */}
            <div className="lg:col-span-8">
              <Card className="bg-white shadow-md">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold">Preview</h2>
                    <p className="text-sm text-gray-500">This is how your business card will look</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <div 
                      className="w-full max-w-md aspect-[1.8/1] rounded-lg shadow-lg p-6 flex flex-col justify-between relative overflow-hidden"
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
                      
                      {/* Logo or Text Center Element */}
                      {centerElement && centerElement.type === "logo" && centerElement.content && (
                        <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
                          <div 
                            className="rounded-full overflow-hidden flex items-center justify-center"
                            style={{ 
                              width: `${centerElement.size}px`, 
                              height: `${centerElement.size}px`,
                            }}
                          >
                            <img 
                              src={centerElement.content} 
                              alt="Logo" 
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>
                      )}
                      
                      {centerElement && centerElement.type === "text" && centerElement.content && (
                        <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
                          <div 
                            className="rounded-full bg-gray-100 flex items-center justify-center"
                            style={{ 
                              width: `${centerElement.size}px`, 
                              height: `${centerElement.size}px`,
                              backgroundColor: cardData.primaryColor,
                              color: cardData.secondaryColor
                            }}
                          >
                            <span className="font-bold">{centerElement.content}</span>
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
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessCardEditor;
