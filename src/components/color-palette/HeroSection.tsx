
import React from "react";
import { Button } from "@/components/ui/button";
import { Palette, RefreshCw } from "lucide-react";

interface HeroSectionProps {
  onGenerateNewPalette: () => void;
}

const HeroSection = ({ onGenerateNewPalette }: HeroSectionProps) => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-primary/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex p-3 bg-primary/10 rounded-full text-primary mb-4">
            <Palette className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Color Palette Generator</h1>
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
