
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/icon-generator/HeroSection";
import IconGeneratorWizard from "@/components/icon-generator/IconGeneratorWizard";
import HowItWorksSection from "@/components/icon-generator/HowItWorksSection";
import FeaturesList from "@/components/icon-generator/FeaturesList";
import StylesGallery from "@/components/icon-generator/StylesGallery";
import UseCasesSection from "@/components/icon-generator/UseCasesSection";
import FAQSection from "@/components/icon-generator/FAQSection";
import { generateIcons, GenerateIconParams, GeneratedIcon } from "@/services/runware";

// Define and export the IconGeneratorFormData interface
export interface IconGeneratorFormData {
  prompt: string;
  style: string;
  color: string;
  backgroundColor: string;
  count: number;
}

// Define and export the ICON_STYLES constant
export const ICON_STYLES = [
  { id: "flat", name: "Flat", description: "Modern flat icons with clean simple shapes and solid colors" },
  { id: "gradient", name: "Gradient", description: "Vibrant icons with smooth color transitions and gradients" },
  { id: "outlined", name: "Outlined", description: "Elegant line-based icons with minimal fill and clean outlines" },
  { id: "3d", name: "3D", description: "Three-dimensional icons with depth, shadows and realistic appearance" },
  { id: "isometric", name: "Isometric", description: "Icons with 3D perspective drawn at specific angles" },
  { id: "hand-drawn", name: "Hand-drawn", description: "Sketchy icons with a natural, organic, hand-crafted feel" },
  { id: "pixel", name: "Pixel Art", description: "Retro style icons using pixel-by-pixel precision" },
  { id: "minimalist", name: "Minimalist", description: "Ultra-simplified icons focusing on essential elements only" },
  { id: "duotone", name: "Duotone", description: "Two-color design with overlapping elements and transparency" },
  { id: "line", name: "Line", description: "Simple mono-line illustrations with consistent stroke width" },
  { id: "glyph", name: "Glyph", description: "Solid silhouette icons with attention to negative space" },
  { id: "cartoon", name: "Cartoon", description: "Fun, animated-style icons with personality" },
  { id: "material", name: "Material", description: "Icons following Google's Material Design principles" },
  { id: "neon", name: "Neon", description: "Glowing vibrant icons with a neon light effect" },
  { id: "vintage", name: "Vintage", description: "Retro-style icons with texture and classic design elements" },
  { id: "watercolor", name: "Watercolor", description: "Artistic icons with soft watercolor effects and blends" },
  { id: "glassmorphism", name: "Glassmorphism", description: "Modern frosted glass effect with transparency" },
  { id: "neumorphic", name: "Neumorphic", description: "Soft UI style with subtle shadows and highlights" },
  { id: "clay", name: "Clay", description: "3D clay-like icons with soft rounded edges" },
  { id: "emoji", name: "Emoji", description: "Fun, expressive emoji-style icons" }
];

const IconGenerator = () => {
  const [formData, setFormData] = useState<IconGeneratorFormData>({
    prompt: "",
    style: "flat",
    color: "#3b82f6",
    backgroundColor: "#ffffff",
    count: 4
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIcons, setGeneratedIcons] = useState<GeneratedIcon[]>([]);

  const handleFormChange = (data: Partial<IconGeneratorFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleGenerateIcons = async () => {
    if (!formData.prompt.trim()) {
      toast.error("Please provide a description for your icon");
      return;
    }

    setIsGenerating(true);

    try {
      const params: GenerateIconParams = {
        prompt: formData.prompt,
        style: formData.style,
        color: formData.color,
        backgroundColor: formData.backgroundColor,
        count: formData.count
      };

      const icons = await generateIcons(params);
      setGeneratedIcons(icons);
      toast.success(`Successfully generated ${icons.length} icons!`);
    } catch (error) {
      console.error("Error generating icons:", error);
      toast.error("Failed to generate icons. Please try again later.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Icon Generator | Create Custom Icons in Seconds</title>
        <meta name="description" content="Generate beautiful, custom icons with our AI icon maker. Choose from multiple styles and customize colors for your project needs." />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <IconGeneratorWizard 
          formData={formData}
          onChange={handleFormChange}
          onGenerate={handleGenerateIcons}
          isGenerating={isGenerating}
          styles={ICON_STYLES}
        />
        <HowItWorksSection />
        <FeaturesList />
        <StylesGallery styles={ICON_STYLES} />
        <UseCasesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default IconGenerator;
