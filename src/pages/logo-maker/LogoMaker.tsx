
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, PenTool, Palette, Layout } from "lucide-react";
import StandardHeroSection from "@/components/shared/StandardHeroSection";

const LogoMaker = () => {
  const logoMakerImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 absolute -right-5 -top-5 z-10">
        <PenTool className="w-12 h-12 text-pink-500" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            LOGO
          </div>
        </div>
        <div className="mt-4 border-t pt-4">
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-pink-500"></div>
              <div className="w-6 h-6 rounded-full bg-purple-500"></div>
              <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-3 rounded-full bg-gray-300"></div>
              <div className="w-12 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="AI Logo Generator"
          title="Create"
          highlightedText="Professional Logos"
          restOfTitle="in Seconds"
          description="Generate unique, customizable logos for your business or project with our AI-powered logo maker. No design skills required."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "AI-Generated" },
            { icon: <Check className="h-4 w-4" />, text: "Fully Customizable" },
            { icon: <Check className="h-4 w-4" />, text: "Commercial Use" }
          ]}
          image={logoMakerImage}
          bgColor="bg-pink-900"
          textColor="text-white"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Our AI logo generator makes creating a professional logo easier than ever.
              Follow these simple steps to get your perfect logo.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Describe Your Brand</h3>
                <p className="text-gray-600">
                  Tell us about your business and the style of logo you're looking for.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Generate Options</h3>
                <p className="text-gray-600">
                  Our AI will create multiple logo options based on your description.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Customize & Download</h3>
                <p className="text-gray-600">
                  Fine-tune your favorite logo and download in multiple formats.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Ready to Create Your Logo?</h2>
            <Button size="lg" className="rounded-full px-8">
              Start Designing Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LogoMaker;
