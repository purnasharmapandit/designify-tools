import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import UploadSection from "@/components/background-remover/UploadSection";
import PreviewSection from "@/components/background-remover/PreviewSection";
import ControlsSection from "@/components/background-remover/ControlsSection";
import FAQSection from "@/components/background-remover/FAQSection";
import UseCasesSection from "@/components/background-remover/UseCasesSection";
import { removeBackground, loadImage } from "@/utils/background-remover";
import StandardHeroSection from "@/components/shared/StandardHeroSection";
import { Check, Scissors, Image, Download } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { checkGenerationEligibility } from "@/services/generationLimits";

const BackgroundRemover = () => {
  const [file, setFile] = useState<File | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [refinementLevel, setRefinementLevel] = useState(50);
  const [fileFormat, setFileFormat] = useState("png");
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleFileChange = async (selectedFile: File) => {
    try {
      setFile(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setOriginalImage(imageUrl);
      setProcessedImage(null);
    } catch (error) {
      console.error("Error handling file:", error);
      toast({
        title: "Error",
        description: "Failed to load the image. Please try another file.",
        variant: "destructive"
      });
    }
  };

  const resetImage = () => {
    setFile(null);
    setOriginalImage(null);
    setProcessedImage(null);
  };

  const handleRemoveBackground = async () => {
    if (!file || !originalImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image first.",
        variant: "destructive"
      });
      return;
    }

    if (!user) {
      navigate("/auth", { 
        state: { 
          returnTo: "/background-remover",
          requiresSignUp: true 
        }
      });
      toast({
        title: "Authentication required",
        description: "Please create an account to remove backgrounds.",
      });
      return;
    }
    
    const eligibility = await checkGenerationEligibility('background_remover');
    if (!eligibility.canGenerate) {
      if (eligibility.redirectToAuth) {
        navigate("/auth", { 
          state: { 
            returnTo: "/background-remover",
            requiresSignUp: true 
          }
        });
        return;
      }
      
      if (eligibility.redirectToSubscription) {
        navigate("/pricing");
        return;
      }
      
      toast({
        title: "Generation limit",
        description: eligibility.message,
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    toast({
      title: "Processing",
      description: "Removing background from your image. This may take a moment...",
    });

    try {
      const image = await loadImage(file);
      const resultBlob = await removeBackground(image, refinementLevel, fileFormat);
      const resultUrl = URL.createObjectURL(resultBlob);
      setProcessedImage(resultUrl);
      
      toast({
        title: "Success!",
        description: "Background has been removed successfully.",
      });
    } catch (error) {
      console.error("Error removing background:", error);
      toast({
        title: "Processing failed",
        description: "Failed to remove background. Please try again or use a different image.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `background-removed.${fileFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started",
      description: "Your image is being downloaded.",
    });
  };

  const backgroundRemoverImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 absolute -right-5 -top-5 z-10">
        <Scissors className="w-12 h-12 text-purple-600" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-purple-100 rounded-xl flex items-center justify-center">
            <Image className="w-12 h-12 text-purple-600" />
          </div>
          <div className="flex-1">
            <svg width="100%" height="4" className="mb-2">
              <line x1="0" y1="2" x2="100%" y2="2" stroke="#ddd" strokeWidth="4" strokeDasharray="6 3" />
            </svg>
            <svg width="100%" height="4" className="mb-2">
              <line x1="0" y1="2" x2="100%" y2="2" stroke="#ddd" strokeWidth="4" strokeDasharray="6 3" />
            </svg>
            <svg width="100%" height="4">
              <line x1="0" y1="2" x2="100%" y2="2" stroke="#ddd" strokeWidth="4" strokeDasharray="6 3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Background Remover | Remove Image Backgrounds for Free</title>
        <meta name="description" content="Remove backgrounds from images with our AI-powered tool. Perfect for product photos, portraits, and design work. Get pixel-perfect results in seconds." />
        <meta name="keywords" content="background remover, remove background, transparent background, photo editor, AI background remover, free background remover" />
        <meta property="og:title" content="AI Background Remover | Remove Image Backgrounds for Free" />
        <meta property="og:description" content="Remove backgrounds from images with our AI-powered tool. Perfect for product photos, portraits, and design work. Get pixel-perfect results in seconds." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Background Remover | Remove Image Backgrounds for Free" />
        <meta name="twitter:description" content="Remove backgrounds from images with our AI-powered tool. Get transparent backgrounds in seconds." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="Background Remover"
          title="Remove"
          highlightedText="Image Backgrounds"
          restOfTitle="in Seconds"
          description="Our AI-powered tool removes backgrounds from images with pixel-perfect precision. Perfect for product photography, portraits, and design work."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "AI-Powered" },
            { icon: <Check className="h-4 w-4" />, text: "High Resolution" },
            { icon: <Check className="h-4 w-4" />, text: "Multiple Formats" }
          ]}
          image={backgroundRemoverImage}
          bgColor="bg-blue-900"
          textColor="text-white"
          toolLabelClassName="bg-blue-600/40 text-blue-50 font-semibold border border-blue-500/70 px-5 shadow-sm"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <UploadSection 
              onFileChange={handleFileChange} 
              imagePreview={originalImage}
              onResetImage={resetImage}
            />
            <PreviewSection 
              originalImage={originalImage}
              processedImage={processedImage}
              onDownload={handleDownload}
            />
          </div>
          
          <ControlsSection 
            onRemoveBackground={handleRemoveBackground}
            isProcessing={isProcessing}
            refinementLevel={refinementLevel}
            setRefinementLevel={setRefinementLevel}
            fileFormat={fileFormat}
            setFileFormat={setFileFormat}
            disabled={!originalImage}
          />
        </div>
        
        <UseCasesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default BackgroundRemover;
