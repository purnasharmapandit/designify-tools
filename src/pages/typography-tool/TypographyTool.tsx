
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BellPlus, Check, Type, Text, AlignLeft, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHeroSection from "@/components/shared/StandardHeroSection";

const TypographyTool = () => {
  const typographyImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col space-y-6">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Beautiful Typography
          </div>
          <div className="h-1 w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <div className="flex flex-col space-y-2 text-gray-700">
            <div className="text-lg">Lorem ipsum dolor sit amet</div>
            <div className="text-sm">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="font-bold text-sm text-gray-600 mb-1">Font Family</div>
              <div className="bg-white p-2 rounded border border-gray-200 text-sm">Inter</div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="font-bold text-sm text-gray-600 mb-1">Font Weight</div>
              <div className="bg-white p-2 rounded border border-gray-200 text-sm">600</div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="font-bold text-sm text-gray-600 mb-1">Line Height</div>
              <div className="bg-white p-2 rounded border border-gray-200 text-sm">1.5</div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="font-bold text-sm text-gray-600 mb-1">Letter Spacing</div>
              <div className="bg-white p-2 rounded border border-gray-200 text-sm">-0.02em</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Typography Tool | Advanced Text Formatting and Layout</title>
        <meta name="description" content="Perfect your text layouts with our advanced typography tool. Adjust fonts, spacing, line height, and more with precise controls and real-time preview." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="Typography Tool"
          title="Perfect"
          highlightedText="Typography & Text Layouts"
          description="Create stunning text designs with our advanced typography tool. Adjust fonts, spacing, line height, and more with precise controls and real-time preview."
          features={[
            { icon: <Type className="h-4 w-4" />, text: "Font Control" },
            { icon: <Text className="h-4 w-4" />, text: "Spacing Controls" },
            { icon: <AlignLeft className="h-4 w-4" />, text: "Text Layouts" },
            { icon: <Wand2 className="h-4 w-4" />, text: "AI Suggestions" }
          ]}
          image={typographyImage}
          bgColor="bg-indigo-900"
          textColor="text-white"
          actionButton={
            <Link to="/contact-us?subject=Typography%20Tool%20Waitlist">
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

export default TypographyTool;
