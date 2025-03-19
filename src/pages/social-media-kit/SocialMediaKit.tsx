
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BellPlus, Check } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHeroSection from "@/components/shared/StandardHeroSection";

const SocialMediaKit = () => {
  const socialKitImage = (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 absolute -z-10 w-full h-full rounded-xl blur-xl transform rotate-6"></div>
      <div className="bg-white rounded-xl shadow-lg p-6 relative">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 aspect-video bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
            <span className="text-purple-500 font-semibold">Facebook Cover</span>
          </div>
          <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-500 font-semibold text-xs">IG Post</span>
          </div>
          <div className="aspect-square bg-gradient-to-br from-pink-100 to-red-100 rounded-lg flex items-center justify-center">
            <span className="text-pink-500 font-semibold text-xs">Pinterest</span>
          </div>
          <div className="aspect-square bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-teal-500 font-semibold text-xs">Twitter</span>
          </div>
          <div className="col-span-3 aspect-[4/1] bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-indigo-500 font-semibold">LinkedIn Banner</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Social Media Kit Generator | Complete Graphics Package Creator</title>
        <meta name="description" content="Create a complete set of social media graphics in minutes. Generate coordinated images for all platforms with our easy-to-use social media kit tool." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="Social Media Kit"
          title="Create Complete"
          highlightedText="Social Media Graphics"
          restOfTitle="in One Click"
          description="Generate coordinated images for all your social platforms simultaneously. Save hours of design work with our all-in-one social media kit generator."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "All Platforms" },
            { icon: <Check className="h-4 w-4" />, text: "Coordinated Branding" },
            { icon: <Check className="h-4 w-4" />, text: "Batch Export" }
          ]}
          image={socialKitImage}
          bgColor="bg-purple-900"
          textColor="text-white"
          actionButton={
            <Link to="/contact-us?subject=Social%20Media%20Kit%20Waitlist">
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

export default SocialMediaKit;
