
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CreateLogo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/help-center" className="inline-flex items-center text-primary mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Help Center
          </Link>
          
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold font-display mb-6">How to Create Your First Logo</h1>
            <p className="text-gray-500 mb-8">Published on June 15, 2023 · 8 min read</p>
            
            <img 
              src="/lovable-uploads/logo-maker.png" 
              alt="Logo Maker Interface" 
              className="w-full h-auto rounded-xl mb-8"
            />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
            <p>
              Creating your first professional logo is easy with our AI-powered Logo Maker. 
              Follow this step-by-step guide to design a stunning logo in minutes, no design skills required.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Describe Your Brand</h2>
            <p>
              Start by entering a description of your brand. Include details like your industry, 
              target audience, and the feeling you want your logo to evoke. Our AI uses this information 
              to generate logo concepts that match your brand identity.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Choose a Style</h2>
            <p>
              Select your preferred logo style from options like minimalist, vintage, modern, or playful. 
              This helps our AI narrow down the design options to match your aesthetic preferences.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Select Colors</h2>
            <p>
              Choose a color palette that represents your brand. You can either select from our pre-designed 
              color schemes or create a custom palette. Remember that colors convey emotion, so choose wisely 
              based on your brand personality.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Review and Customize</h2>
            <p>
              Once the AI generates logo options, browse through them and select your favorite. You can then 
              customize various elements like fonts, colors, icon size, and positioning until you're completely 
              satisfied with the result.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Step 5: Download Your Logo</h2>
            <p>
              When you're happy with your design, download your logo in multiple formats for different use cases. 
              Depending on your subscription plan, you'll have access to various file formats and resolutions.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-4">Pro Tips</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep your logo simple for better recognition and versatility</li>
                <li>Ensure your logo works well in both color and black-and-white</li>
                <li>Test your logo at different sizes to ensure legibility</li>
                <li>Consider how your logo will look on different backgrounds</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button size="lg" className="rounded-full">
              Try Our Logo Maker Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateLogo;
