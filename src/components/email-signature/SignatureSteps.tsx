
import React from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SignatureStepsProps {
  step: "select" | "customize" | "preview";
  selectedTemplateId: string;
  onBackToTemplates: () => void;
}

const SignatureSteps: React.FC<SignatureStepsProps> = ({
  step,
  selectedTemplateId,
  onBackToTemplates,
}) => {
  return (
    <div className="border-b">
      <TabsList className="w-full justify-start rounded-none bg-transparent border-b p-0">
        <TabsTrigger
          value="select"
          className={`rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 ${
            step === "select" ? "border-primary" : ""
          }`}
          onClick={onBackToTemplates}
        >
          1. Choose Template
        </TabsTrigger>
        <TabsTrigger
          value="customize"
          className={`rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 ${
            step === "customize" ? "border-primary" : ""
          }`}
          disabled={!selectedTemplateId}
        >
          2. Customize
        </TabsTrigger>
        <TabsTrigger
          value="preview"
          className={`rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 ${
            step === "preview" ? "border-primary" : ""
          }`}
          disabled={!selectedTemplateId}
        >
          3. Preview & Export
        </TabsTrigger>
      </TabsList>
    </div>
  );
};

export default SignatureSteps;
