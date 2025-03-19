
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BellPlus, Check, Presentation, Layout, ImagePlus, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHeroSection from "@/components/shared/StandardHeroSection";
import { PresentationMakerFAQSection } from "@/components/presentation-maker/FAQSection";

const PresentationMaker = () => {
  const presentationImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col space-y-4">
          <div className="aspect-[16/9] bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg flex items-center justify-center p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-800">Presentation Title</div>
              <div className="text-sm text-emerald-600 mt-2">Subtitle Goes Here</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[16/9] bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg flex items-center justify-center p-3">
              <div className="text-center">
                <div className="text-sm font-bold text-emerald-800">Slide 2</div>
              </div>
            </div>
            <div className="aspect-[16/9] bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg flex items-center justify-center p-3">
              <div className="text-center">
                <div className="text-sm font-bold text-emerald-800">Slide 3</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between px-2">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <Layout className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <ImagePlus className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Presentation Maker | Create Professional Slideshows</title>
        <meta name="description" content="Design professional presentations with ready-to-use templates, AI-powered content suggestions, and easy editing tools." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="Presentation Maker"
          title="Create Professional"
          highlightedText="Presentations"
          restOfTitle="in Minutes"
          description="Design stunning slideshows with our easy-to-use presentation maker. Choose from beautiful templates, add your content, and present with confidence."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "Beautiful Templates" },
            { icon: <Check className="h-4 w-4" />, text: "AI Content Suggestions" },
            { icon: <Check className="h-4 w-4" />, text: "Easy Editing" },
            { icon: <Check className="h-4 w-4" />, text: "Export to PDF/PPT" }
          ]}
          image={presentationImage}
          bgColor="bg-emerald-900"
          textColor="text-white"
          actionButton={
            <Link to="/contact-us?subject=Presentation%20Maker%20Waitlist">
              <Button 
                size="lg" 
                className="rounded-full px-8 font-medium"
              >
                Join Waitlist <BellPlus className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          }
        />
        
        {/* Add more sections as needed */}
      </main>
      
      <Footer />
    </div>
  );
};

export default PresentationMaker;
