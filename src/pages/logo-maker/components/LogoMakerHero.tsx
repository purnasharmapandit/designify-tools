
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { ChevronRight, Layout, Image, Share2, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const LogoMakerHero = () => {
  const features = [
    { icon: <Layout className="h-4 w-4" />, text: "Multiple Platforms" },
    { icon: <Image className="h-4 w-4" />, text: "100+ Templates" },
    { icon: <Share2 className="h-4 w-4" />, text: "Direct Sharing" },
    { icon: <Sparkles className="h-4 w-4" />, text: "AI-Powered" },
    { icon: <Target className="h-4 w-4" />, text: "Brand Consistency" }
  ];

  const imageElement = (
    <div className="relative">
      <div className="absolute -z-10 w-full h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl transform rotate-6"></div>
      
      <motion.div 
        className="absolute w-60 h-60 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
        animate={{ rotate: [8, 8] }}
        style={{ top: '5%', left: '10%', zIndex: 1 }}
      >
        <div className="h-3 bg-gray-100 w-full"></div>
        <div className="p-2">
          <div className="h-36 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">Instagram</span>
          </div>
          <div className="mt-2 h-3 w-3/4 bg-gray-200 rounded-full"></div>
          <div className="mt-2 h-3 w-1/2 bg-gray-200 rounded-full"></div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute w-72 h-40 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
        animate={{ rotate: [-4, -4] }}
        style={{ top: '35%', left: '30%', zIndex: 2 }}
      >
        <div className="h-3 bg-gray-100 w-full"></div>
        <div className="p-2">
          <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">Facebook</span>
          </div>
          <div className="flex justify-between mt-2">
            <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-1/4 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="relative w-64 h-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-10"
        animate={{ rotate: [2, 2] }}
        style={{ marginLeft: '25%' }}
      >
        <div className="h-3 bg-gray-100 w-full"></div>
        <div className="p-2">
          <div className="h-40 bg-gradient-to-br from-pink-400 to-red-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">Pinterest</span>
          </div>
          <div className="mt-2 flex items-center">
            <div className="h-6 w-6 rounded-full bg-gray-200"></div>
            <div className="ml-2 h-3 w-20 bg-gray-200 rounded-full"></div>
            <div className="ml-auto h-5 w-5 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const title = (
    <>
      Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Stunning</span> Graphics in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Seconds</span>
    </>
  );

  return (
    <HeroSection 
      tagline="All-in-One Design Suite"
      title={title}
      description="Create professional designs for all your needs in one place. Save time with templates, maintain brand consistency, and boost your creativity."
      features={features}
      imageElement={imageElement}
    />
  );
};

export default LogoMakerHero;
