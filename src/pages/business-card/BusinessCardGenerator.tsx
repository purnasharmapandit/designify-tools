
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import StepsSection from "./components/StepsSection";
import TemplatesSection from "./components/TemplatesSection";
import CustomizeSection from "./components/CustomizeSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

const BusinessCardGenerator = () => {
  const [primaryColor, setPrimaryColor] = useState("#4f46e5");
  const [activeTemplate, setActiveTemplate] = useState("minimal");
  const designSectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const templates = [
    { id: "minimal", name: "Minimal", color: "#f3f4f6" },
    { id: "corporate", name: "Corporate", color: "#e0f2fe" },
    { id: "creative", name: "Creative", color: "#fef3c7" },
    { id: "bold", name: "Bold", color: "#fee2e2" },
    { id: "elegant", name: "Elegant", color: "#e5deff" },
    { id: "modern", name: "Modern", color: "#d3e4fd" },
    { id: "professional", name: "Professional", color: "#fde1d3" },
    { id: "vibrant", name: "Vibrant", color: "#ffdee2" },
  ];

  const scrollToTemplates = () => {
    if (designSectionRef.current) {
      designSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTemplateSelection = (templateId: string) => {
    setActiveTemplate(templateId);
    navigate(`/business-card-editor?template=${templateId.toLowerCase()}`);
  };

  const handleStartCustomizing = () => {
    navigate(`/business-card-editor?template=${activeTemplate}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          scrollToTemplates={scrollToTemplates}
          activeTemplate={activeTemplate}
          setActiveTemplate={setActiveTemplate}
          templates={templates}
        />
        
        <StepsSection />
        
        <TemplatesSection 
          designSectionRef={designSectionRef}
          handleTemplateSelection={handleTemplateSelection}
        />
        
        <CustomizeSection 
          primaryColor={primaryColor}
          setPrimaryColor={setPrimaryColor}
          handleStartCustomizing={handleStartCustomizing}
        />
        
        <TestimonialsSection />
        
        <CTASection handleStartCustomizing={handleStartCustomizing} />
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessCardGenerator;
