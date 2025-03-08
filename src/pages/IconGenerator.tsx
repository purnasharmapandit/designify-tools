import React, { useState, useEffect } from "react";
import { Wand2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Helmet } from "react-helmet";
import IconGeneratorWizard from "@/components/icon-generator/IconGeneratorWizard";
import IconPreview from "@/components/icon-generator/IconPreview";
import FeaturesSection from "@/components/icon-generator/FeaturesSection";
import FAQSection from "@/components/icon-generator/FAQSection";
import { generateIcons, GeneratedIcon } from "@/services/runware";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { checkGenerationEligibility, recordGeneration } from "@/services/generationLimits";
import { Button } from "@/components/ui/button";

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

export interface IconGeneratorFormData {
  prompt: string;
  style: string;
  color: string;
  backgroundColor: string;
  count: number;
}

const IconGenerator = () => {
  const [generatedIcons, setGeneratedIcons] = useState<GeneratedIcon[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  
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

  const handleNavigateToAuth = () => {
    navigate("/auth", { state: { returnTo: "/icon-generator" } });
  };

  const handleNavigateToSubscription = () => {
    navigate("/pricing");
    toast.info("Subscribe to unlock unlimited icon generation");
  };

  const handleGenerateIcons = async () => {
    if (!formData.prompt) {
      toast.error("Please enter a description for your icon");
      return;
    }
    
    // Check eligibility only when user clicks generate
    const eligibility = await checkGenerationEligibility('icon');
    
    if (!eligibility.canGenerate) {
      if (eligibility.redirectToAuth) {
        handleNavigateToAuth();
        toast.info("Please sign up or sign in to generate icons");
        return;
      } else if (eligibility.redirectToSubscription) {
        handleNavigateToSubscription();
        toast.info(eligibility.message);
        return;
      }
    }
    
    setIsGenerating(true);
    
    try {
      const icons = await generateIcons(formData);
      setGeneratedIcons(icons);
      toast.success(`${icons.length} icons generated successfully!`);
      
      // Record this generation
      await recordGeneration('icon');
      
    } catch (error) {
      console.error("Error generating icons:", error);
      toast.error("Failed to generate icons. Please try again later.");
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleDownloadIcon = (iconUrl: string) => {
    const link = document.createElement('a');
    link.href = iconUrl;
    link.target = '_blank';
    link.download = `icon-${Date.now()}.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Icon downloaded successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/80">
      <Helmet>
        <title>AI Icon Generator | Custom Icon Design Tool</title>
        <meta name="description" content="Create professional custom icons for your projects using AI. Choose from 20+ styles including flat, 3D, isometric, and more. No design skills required." />
        <meta name="keywords" content="icon generator, AI icon maker, custom icons, icon design tool" />
      </Helmet>

      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-4xl mx-auto">
            {/* Header Section - Adding pt-16 for extra padding at the top */}
            <div className="text-center mb-10 pt-16">
              <div className="inline-block p-3 bg-primary/10 rounded-full text-primary mb-4">
                <Wand2 className="h-8 w-8" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                AI Icon Generator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Create custom icons for your projects in seconds
              </p>
            </div>

            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
                {/* Wizard Form */}
                <div className="md:col-span-2 p-6">
                  <IconGeneratorWizard 
                    formData={formData}
                    onChange={handleFormChange}
                    onGenerate={handleGenerateIcons}
                    isGenerating={isGenerating}
                    styles={ICON_STYLES}
                  />
                </div>
                
                {/* Preview */}
                <div className="md:col-span-3 p-6 bg-muted/30">
                  <IconPreview 
                    icons={generatedIcons}
                    isLoading={isGenerating}
                    onDownload={handleDownloadIcon}
                    showPlaceholder={generatedIcons.length === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <FeaturesSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default IconGenerator;
