
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wand2, Palette, Download, ImageIcon, PanelTop, Star, Copy, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import IconGeneratorForm from "@/components/icon-generator/IconGeneratorForm";
import IconPreview from "@/components/icon-generator/IconPreview";
import FeaturesList from "@/components/icon-generator/FeaturesList";
import HowItWorksSection from "@/components/icon-generator/HowItWorksSection";
import StylesGallery from "@/components/icon-generator/StylesGallery";
import UseCasesSection from "@/components/icon-generator/UseCasesSection";
import FAQSection from "@/components/icon-generator/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";

// Icon styles available
export const ICON_STYLES = [
  { id: "flat", name: "Flat", description: "Simple, clean designs with solid colors" },
  { id: "gradient", name: "Gradient", description: "Smooth color transitions for a modern look" },
  { id: "outlined", name: "Outlined", description: "Defined edges with minimal fills" },
  { id: "3d", name: "3D", description: "Dimensional icons with depth and shadows" },
  { id: "isometric", name: "Isometric", description: "Icons with 3D perspective at specific angles" },
  { id: "hand-drawn", name: "Hand-drawn", description: "Natural, sketch-like appearance" },
  { id: "pixel", name: "Pixel", description: "Retro, 8-bit inspired designs" },
  { id: "minimalist", name: "Minimalist", description: "Ultra-simplified with essential elements only" },
  { id: "duotone", name: "Duotone", description: "Two-color designs with overlapping elements" },
  { id: "line", name: "Line", description: "Simple single-line illustrations" },
  { id: "glyph", name: "Glyph", description: "Solid silhouette style with negative space" },
  { id: "cartoon", name: "Cartoon", description: "Fun, animated style with personality" },
  { id: "material", name: "Material", description: "Following Google's material design principles" },
  { id: "neon", name: "Neon", description: "Glowing effect with vibrant colors" },
  { id: "vintage", name: "Vintage", description: "Retro appearance with aged textures" },
  { id: "watercolor", name: "Watercolor", description: "Soft, painted look with color blends" },
  { id: "glassmorphism", name: "Glassmorphism", description: "Frosted glass effect with transparency" },
  { id: "neumorphic", name: "Neumorphic", description: "Soft UI with subtle shadows and highlights" },
  { id: "clay", name: "Clay", description: "3D style resembling modeling clay" },
  { id: "emoji", name: "Emoji", description: "Expressive character style icons" },
];

// Default sample icons
const SAMPLE_ICONS = [
  "/lovable-uploads/sample-icon-1.svg",
  "/lovable-uploads/sample-icon-2.svg",
  "/lovable-uploads/sample-icon-3.svg",
  "/lovable-uploads/sample-icon-4.svg",
];

export interface IconGeneratorFormData {
  prompt: string;
  style: string;
  color: string;
  backgroundColor: string;
  count: number;
}

const IconGenerator = () => {
  const [generatedIcons, setGeneratedIcons] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const initialFormData: IconGeneratorFormData = {
    prompt: "",
    style: "flat",
    color: "#6366f1",
    backgroundColor: "#ffffff",
    count: 4
  };
  
  const [formData, setFormData] = useState<IconGeneratorFormData>(initialFormData);
  
  const handleFormChange = (newData: Partial<IconGeneratorFormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const handleGenerateIcons = () => {
    if (!formData.prompt) {
      toast.error("Please enter a description for your icon");
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate API call for now - would be replaced with actual API integration
    setTimeout(() => {
      // For demo purposes, use sample icons
      setGeneratedIcons(SAMPLE_ICONS);
      setIsGenerating(false);
      toast.success("Icons generated successfully!");
    }, 2000);
  };
  
  const handleDownloadIcon = (iconUrl: string) => {
    // In a real implementation, this would download the actual icon
    toast.success("Icon downloaded successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block p-3 bg-primary/10 rounded-full text-primary mb-4">
                  <Wand2 className="h-10 w-10" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
                  AI Icon Generator: Create Stunning Icons with AI Without Watermark
                </h1>
                <p className="text-xl text-gray-600 md:max-w-3xl mx-auto">
                  Design professional, customizable icons for any project in seconds — completely free and watermark-free.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <IconGeneratorForm 
                formData={formData} 
                onChange={handleFormChange}
                onGenerate={handleGenerateIcons}
                isGenerating={isGenerating}
                styles={ICON_STYLES}
              />
              <IconPreview 
                icons={generatedIcons.length > 0 ? generatedIcons : SAMPLE_ICONS} 
                isLoading={isGenerating}
                onDownload={handleDownloadIcon}
                showPlaceholder={generatedIcons.length === 0}
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorksSection />
        
        {/* Features Section */}
        <FeaturesList />
        
        {/* Use Cases Section */}
        <UseCasesSection />
        
        {/* Icon Styles Gallery */}
        <StylesGallery styles={ICON_STYLES} />
        
        {/* FAQs Section */}
        <FAQSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Custom Icons?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our free, AI-powered icon generator helps you create professional icons in seconds. No sign-up required.
            </p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="lg"
              className="font-semibold"
            >
              Generate Icons Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IconGenerator;
