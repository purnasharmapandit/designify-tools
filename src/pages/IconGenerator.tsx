import React, { useState } from "react";
import { Wand2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import IconGeneratorForm from "@/components/icon-generator/IconGeneratorForm";
import IconPreview from "@/components/icon-generator/IconPreview";
import { generateIcons, GeneratedIcon } from "@/services/runware";

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

  const handleGenerateIcons = async () => {
    if (!formData.prompt) {
      toast.error("Please enter a description for your icon");
      return;
    }
    
    setIsGenerating(true);
    
    try {
      const icons = await generateIcons(formData);
      setGeneratedIcons(icons);
      toast.success(`${icons.length} icons generated successfully!`);
    } catch (error) {
      console.error("Error generating icons:", error);
      toast.error("Failed to generate icons. Please try again later.");
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleDownloadIcon = (iconUrl: string) => {
    // Create a temporary anchor element
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
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
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
          
          {/* Three Steps Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-center mb-6">Create Custom Icons in 3 Simple Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  number: "01",
                  title: "Describe Your Icon",
                  description: "Enter a detailed description of the icon you want to create"
                },
                {
                  number: "02",
                  title: "Customize Style",
                  description: "Choose the style, colors, and other customization options"
                },
                {
                  number: "03",
                  title: "Generate & Download",
                  description: "Generate your icons and download the ones you like"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="relative bg-card rounded-xl p-6 border transition-all hover:shadow-md flex flex-col"
                >
                  <div className="text-4xl font-bold text-primary/20 absolute right-4 top-4">{step.number}</div>
                  <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
              {/* Form */}
              <div className="md:col-span-2 p-6">
                <IconGeneratorForm 
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
      </main>
      <Footer />
    </div>
  );
};

export default IconGenerator;
