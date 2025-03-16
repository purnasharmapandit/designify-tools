
import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";

interface GenerateButtonProps {
  isGenerating: boolean;
  onClick?: () => void;
}

const GenerateButton = ({ isGenerating, onClick }: GenerateButtonProps) => {
  return (
    <Button 
      type="submit" 
      className="w-full" 
      size="lg"
      disabled={isGenerating}
      onClick={onClick}
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating Logos...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Logo Options
        </>
      )}
    </Button>
  );
};

export default GenerateButton;
