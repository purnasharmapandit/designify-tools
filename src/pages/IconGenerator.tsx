
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IconGeneratorForm from "@/components/icon-generator/IconGeneratorForm";
import IconPreview from "@/components/icon-generator/IconPreview";
import HowItWorksSection from "@/components/icon-generator/HowItWorksSection";
import StylesGallery from "@/components/icon-generator/StylesGallery";
import FAQSection from "@/components/icon-generator/FAQSection";
import FeaturesSection from "@/components/icon-generator/FeaturesSection";
import UseCasesSection from "@/components/icon-generator/UseCasesSection";
import { Check, Wand2, Sparkles, SquarePen, Download } from "lucide-react";
import StandardHeroSection from "@/components/shared/StandardHeroSection";
import { toast } from "sonner";
import { GeneratedIcon } from "@/services/runware";

// Define the IconGeneratorFormData type
export interface IconGeneratorFormData {
  prompt: string;
  style: string;
  color: string;
  backgroundColor: string;
  count: number;
}

// Define the icon styles
export const ICON_STYLES = [
  { 
    id: "flat", 
    name: "Flat", 
    description: "Clean, modern icons with solid colors and minimal details" 
  },
  { 
    id: "gradient", 
    name: "Gradient", 
    description: "Smooth color transitions creating depth and dimension" 
  },
  { 
    id: "outlined", 
    name: "Outlined", 
    description: "Simple line-based icons with a clean, minimalist aesthetic" 
  },
  { 
    id: "3d", 
    name: "3D", 
    description: "Dimensional icons with shadows and perspective" 
  },
  { 
    id: "isometric", 
    name: "Isometric", 
    description: "Icons with a technical, three-dimensional perspective" 
  },
  { 
    id: "hand-drawn", 
    name: "Hand Drawn", 
    description: "Sketched, artistic icons with a personal touch" 
  },
  { 
    id: "pixel", 
    name: "Pixel", 
    description: "Retro-style icons inspired by early digital graphics" 
  },
  { 
    id: "minimalist", 
    name: "Minimalist", 
    description: "Ultra-simplified icons focusing on essential elements" 
  },
  { 
    id: "duotone", 
    name: "Duotone", 
    description: "Two-color icons with overlapping elements" 
  },
];

const IconGenerator = () => {
  // State for form data
  const [formData, setFormData] = useState<IconGeneratorFormData>({
    prompt: "",
    style: "flat",
    color: "#3b82f6",
    backgroundColor: "#ffffff",
    count: 4
  });

  // State for generated icons
  const [icons, setIcons] = useState<GeneratedIcon[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Handle form changes
  const handleFormChange = (data: Partial<IconGeneratorFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  // Handle icon generation
  const handleGenerateIcons = () => {
    if (!formData.prompt.trim()) {
      toast.error("Please provide a description for your icon");
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call for icon generation
    setTimeout(() => {
      // Mock generated icons - updated to match the GeneratedIcon interface
      const mockIcons: GeneratedIcon[] = Array(formData.count).fill(0).map((_, index) => ({
        id: `icon-${Date.now()}-${index}`,
        imageURL: `https://via.placeholder.com/200x200/${formData.color.substring(1)}/ffffff?text=Icon+${index + 1}`,
        positivePrompt: formData.prompt, // Changed from prompt to positivePrompt
        style: formData.style,
        seed: Math.floor(Math.random() * 1000000), // Added missing seed property
        NSFWContent: false // Added missing NSFWContent property
      }));
      
      setIcons(mockIcons);
      setIsGenerating(false);
      toast.success(`Generated ${formData.count} icons successfully!`);
    }, 2000);
  };

  // Handle icon download
  const handleDownloadIcon = (iconUrl: string) => {
    const link = document.createElement('a');
    link.href = iconUrl;
    link.download = `icon-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Icon downloaded!");
  };

  const iconGeneratorImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 absolute -right-5 -top-5 z-10">
        <Wand2 className="w-12 h-12 text-blue-600" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index}
            className="aspect-square rounded-lg flex items-center justify-center"
            style={{ 
              backgroundColor: ["#e0f2fe", "#f0f9ff", "#e0e7ff", "#f5f3ff", "#fce7f3", "#f0fdf4"][index % 6]
            }}
          >
            <SquarePen className="w-8 h-8" style={{ 
              color: ["#0284c7", "#0369a1", "#4f46e5", "#7c3aed", "#db2777", "#16a34a"][index % 6]
            }} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="AI Icon Generator"
          title="Create"
          highlightedText="Custom Icons"
          restOfTitle="in Seconds"
          description="Our AI-powered tool generates beautiful, unique icons that match your brand. Perfect for apps, websites, presentations, and more."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "AI-Powered" },
            { icon: <Check className="h-4 w-4" />, text: "Multiple Styles" },
            { icon: <Check className="h-4 w-4" />, text: "Commercial Use" }
          ]}
          image={iconGeneratorImage}
          bgColor="bg-blue-900"
          textColor="text-white"
        />

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <IconGeneratorForm 
                  formData={formData}
                  onChange={handleFormChange}
                  onGenerate={handleGenerateIcons}
                  isGenerating={isGenerating}
                  styles={ICON_STYLES}
                />
                <IconPreview 
                  icons={icons}
                  isLoading={isGenerating}
                  onDownload={handleDownloadIcon}
                  showPlaceholder={icons.length === 0}
                />
              </div>
            </div>
          </div>
        </section>

        <HowItWorksSection />
        <StylesGallery styles={ICON_STYLES} />
        <FeaturesSection />
        <UseCasesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default IconGenerator;
