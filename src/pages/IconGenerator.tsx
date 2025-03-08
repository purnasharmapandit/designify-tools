
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Wand2, Download, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { generateIcons, GeneratedIcon } from "@/services/runware";
import IconGeneratorForm from "@/components/icon-generator/IconGeneratorForm";
import IconPreview from "@/components/icon-generator/IconPreview";
import { ICON_STYLES } from "@/components/icon-generator/IconStyles";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Panel - Controls */}
        <div className="lg:w-2/5 xl:w-1/3 p-6 lg:p-10 overflow-y-auto">
          <div className="mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            >
              AI Icon Generator
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 mt-2"
            >
              Create beautiful, custom icons in seconds
            </motion.p>
          </div>
          
          <IconGeneratorForm 
            formData={formData} 
            onChange={handleFormChange}
            onGenerate={handleGenerateIcons}
            isGenerating={isGenerating}
            styles={ICON_STYLES}
          />
        </div>
        
        {/* Right Panel - Preview */}
        <div className="flex-1 bg-gray-950 p-6 lg:p-10 overflow-y-auto border-l border-gray-800">
          <IconPreview 
            icons={generatedIcons} 
            isLoading={isGenerating}
            onDownload={handleDownloadIcon}
            showPlaceholder={generatedIcons.length === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default IconGenerator;
