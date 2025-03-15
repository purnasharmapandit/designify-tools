
import React from "react";
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
import { Check, Wand2, Sparkles, SquarePen } from "lucide-react";
import StandardHeroSection from "@/components/shared/StandardHeroSection";

const IconGenerator = () => {
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
                <IconGeneratorForm />
                <IconPreview />
              </div>
            </div>
          </div>
        </section>

        <HowItWorksSection />
        <StylesGallery />
        <FeaturesSection />
        <UseCasesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default IconGenerator;
