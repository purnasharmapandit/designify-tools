
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Download } from "lucide-react";

interface ActionButtonsProps {
  handleBackToTemplates: () => void;
}

const ActionButtons = ({ handleBackToTemplates }: ActionButtonsProps) => {
  return (
    <div className="flex items-center mb-8">
      <Button 
        variant="ghost" 
        className="mr-4"
        onClick={handleBackToTemplates}
      >
        <ChevronLeft className="h-5 w-5 mr-2" />
        Back to Templates
      </Button>
      <h1 className="text-3xl font-bold">Business Card Editor</h1>
    </div>
  );
};

export default ActionButtons;
