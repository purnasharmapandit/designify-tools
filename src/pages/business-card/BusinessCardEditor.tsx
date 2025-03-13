
import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { toast } from "sonner";
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
  const cardPreviewRef = useRef<HTMLDivElement>(null);
  
  const handleBackToTemplates = () => {
    navigate("/business-card-generator");
  };
  
  const handleInputChange = (field: keyof BusinessCardData, value: string) => {
    setCardData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleDownload = async () => {
    if (!cardPreviewRef.current) {
      toast.error("Could not generate business card. Please try again.");
      return;
    }

    try {
      toast.info("Preparing your business card...");
      
      // Find the card element inside the preview container
      const cardElement = cardPreviewRef.current.querySelector(".business-card");
      
      if (!cardElement) {
        toast.error("Could not find the business card element");
        return;
      }
      
      // Use html2canvas to convert the card to an image
      const canvas = await html2canvas(cardElement as HTMLElement, {
        scale: 3, // Higher scale for better quality
        backgroundColor: null,
        logging: false,
      });
      
      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL("image/png");
      
      // Create a download link
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `business-card-${cardData.name.toLowerCase().replace(/\s+/g, "-")}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("Business card downloaded successfully!");
    } catch (error) {
      console.error("Error downloading business card:", error);
      toast.error("Failed to download business card. Please try again.");
    }
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
            <div className="lg:col-span-8" ref={cardPreviewRef}>
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
