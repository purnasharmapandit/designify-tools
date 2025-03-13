
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BusinessCardData } from "./types";
import EditorSidebar from "./components/EditorSidebar";
import CardPreview from "./components/CardPreview";
import ActionButtons from "./components/ActionButtons";

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
          <ActionButtons handleBackToTemplates={handleBackToTemplates} />
          
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <EditorSidebar 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                cardData={cardData}
                handleInputChange={handleInputChange}
                handleDownload={handleDownload}
                centerElement={centerElement}
                setCenterElement={setCenterElement}
              />
            </div>
            
            {/* Preview */}
            <div className="lg:col-span-8">
              <CardPreview 
                cardData={cardData}
                centerElement={centerElement}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessCardEditor;
