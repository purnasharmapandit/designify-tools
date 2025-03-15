
import React from "react";
import { Button } from "@/components/ui/button";
import { Palette, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onGenerateNewPalette: () => void;
}

const HeroSection = ({ onGenerateNewPalette }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-white to-background pt-28 pb-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-100/50 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-blue-100/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-8 pt-8"
        >
          <div className="inline-flex p-3 bg-primary/10 rounded-full text-primary mb-4">
            <Palette className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-primary to-blue-600 bg-clip-text text-transparent">
            Color Palette Generator
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Create beautiful color combinations for your projects with our intuitive color palette tool.
          </p>
          <Button 
            onClick={onGenerateNewPalette}
            className="mb-3"
            size="lg"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Generate New Palette
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
