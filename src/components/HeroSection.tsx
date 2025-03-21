
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Zap, Star, PenTool, Wand2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-16 px-4 sm:pt-44 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="relative w-full max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold font-display leading-tight mb-4"
            >
              <Sparkles className="absolute hidden md:block h-12 w-12 text-brand-yellow md:-left-16 top-0 animate-float" />
              <Star className="absolute hidden md:block h-12 w-12 text-brand-blue md:-right-16 top-0 animate-float" style={{ animationDelay: "0.5s" }} />
              <PenTool className="absolute hidden md:block h-14 w-14 text-purple-400 md:-right-4 bottom-0 animate-float" style={{ animationDelay: "1.2s" }} />
              <Lightbulb className="absolute hidden md:block h-14 w-14 text-green-400 md:-left-4 bottom-0 animate-float" style={{ animationDelay: "0.8s" }} />
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">Unleash Your Creativity</span> With Our 
              <span className="relative inline-block ml-2">
                <span className="relative z-10">Game-Changing</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300/50 -z-10 transform -rotate-1"></span>
              </span> Design Tools
            </motion.h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mb-8"
          >
            Create stunning designs with our easy-to-use tools. Perfect for professionals and beginners alike.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* Note: "Join Waitlist" button has been removed as requested */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
