
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IconGeneratorForm from "@/components/icon-generator/IconGeneratorForm";
import IconPreview from "@/components/icon-generator/IconPreview";
import HowItWorksSection from "@/components/icon-generator/HowItWorksSection";
import FAQSection from "@/components/icon-generator/FAQSection";
import FeaturesSection from "@/components/icon-generator/FeaturesSection";
import UseCasesSection from "@/components/icon-generator/UseCasesSection";
import { Check, Zap, Heart, Lightbulb, Trophy } from "lucide-react";
import StandardHeroSection from "@/components/shared/StandardHeroSection";
import { toast } from "sonner";
import { GeneratedIcon } from "@/services/runware";
import { useAuth } from "@/contexts/AuthContext";
import { checkGenerationEligibility } from "@/services/generationLimits";

export interface IconGeneratorFormData {
  prompt: string;
  style: string;
  color: string;
  backgroundColor: string;
  count: number;
}

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
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState<IconGeneratorFormData>({
    prompt: "",
    style: "flat",
    color: "#3b82f6",
    backgroundColor: "#ffffff",
    count: 4
  });

  const [icons, setIcons] = useState<GeneratedIcon[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFormChange = (data: Partial<IconGeneratorFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleGenerateIcons = async () => {
    if (!formData.prompt.trim()) {
      toast.error("Please provide a description for your icon");
      return;
    }
    
    if (!user) {
      navigate("/auth", { 
        state: { 
          returnTo: "/icon-generator",
          requiresSignUp: true 
        }
      });
      toast.info("Please create an account to generate icons");
      return;
    }
    
    const eligibility = await checkGenerationEligibility('icon');
    if (!eligibility.canGenerate) {
      if (eligibility.redirectToAuth) {
        navigate("/auth", { 
          state: { 
            returnTo: "/icon-generator",
            requiresSignUp: true 
          }
        });
        return;
      }
      
      if (eligibility.redirectToSubscription) {
        navigate("/pricing");
        return;
      }
      
      toast.error(eligibility.message);
      return;
    }

    setIsGenerating(true);
    
    setTimeout(() => {
      const mockIcons: GeneratedIcon[] = Array(formData.count).fill(0).map((_, index) => ({
        id: `icon-${Date.now()}-${index}`,
        imageURL: `https://via.placeholder.com/200x200/${formData.color.substring(1)}/ffffff?text=Icon+${index + 1}`,
        positivePrompt: formData.prompt,
        style: formData.style,
        seed: Math.floor(Math.random() * 1000000),
        NSFWContent: false
      }));
      
      setIcons(mockIcons);
      setIsGenerating(false);
      toast.success(`Generated ${formData.count} icons successfully!`);
    }, 2000);
  };

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
      <div className="relative flex items-center justify-center p-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-6 -right-6"
        >
          <Lightbulb size={40} className="text-amber-400 filter drop-shadow-md" />
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-8 -left-8"
        >
          <Trophy size={48} className="text-purple-400 filter drop-shadow-md" />
        </motion.div>
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-4 -right-12"
        >
          <Heart size={36} className="text-pink-400 filter drop-shadow-md" />
        </motion.div>
        
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="w-48 h-48 text-orange-500 filter drop-shadow-lg" />
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Icon Generator | Create Custom Icons in Seconds</title>
        <meta name="description" content="Generate professional, unique icons for your apps, websites, and projects with our AI-powered icon creator. Choose from multiple styles, customize colors, and download high-quality icons." />
        <meta name="keywords" content="icon generator, AI icon creator, custom icons, app icons, website icons, vector icons, icon design, icon maker" />
        <meta property="og:title" content="AI Icon Generator | Create Custom Icons in Seconds" />
        <meta property="og:description" content="Generate professional, unique icons for your apps, websites, and projects with our AI-powered icon creator. Multiple styles available." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Icon Generator | Create Custom Icons in Seconds" />
        <meta name="twitter:description" content="Generate professional, unique icons with AI. Perfect for apps, websites, presentations, and more." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow pt-16">
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
          toolLabelClassName="bg-blue-400/30 text-blue-100 font-semibold border border-blue-400/40"
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
        <FeaturesSection />
        <UseCasesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default IconGenerator;
