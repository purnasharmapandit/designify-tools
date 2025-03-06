
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import ToolCard from "./ToolCard";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 px-4 sm:pt-32 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-4"
          >
            <Sparkles className="h-8 w-8 text-brand-yellow absolute -left-10 -top-2 animate-float" />
            <Sparkles className="h-8 w-8 text-brand-blue absolute -right-10 top-2 animate-float" style={{ animationDelay: "1s" }} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-display max-w-3xl leading-tight mb-4"
          >
            The best place to get your design tools without any doubt
          </motion.h1>
          
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
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-base btn-shine-effect"
            >
              Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <ToolCard 
            name="Logo Maker" 
            color="bg-pink-100" 
            iconColor="text-brand-pink" 
          />
          <ToolCard 
            name="Profile Pic Generator" 
            color="bg-purple-100" 
            iconColor="text-brand-purple"
            className="md:mt-8" 
          />
          <ToolCard 
            name="Business Card Generator" 
            color="bg-blue-100" 
            iconColor="text-brand-blue" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
