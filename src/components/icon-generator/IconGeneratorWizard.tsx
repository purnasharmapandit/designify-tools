
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconGeneratorFormData } from "@/pages/IconGenerator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ICON_STYLES } from "@/pages/IconGenerator";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/ui/color-picker";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";

interface IconGeneratorWizardProps {
  formData: IconGeneratorFormData;
  onChange: (data: Partial<IconGeneratorFormData>) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  styles: Array<{ id: string; name: string; description: string }>;
}

const STEPS = ["Describe", "Style", "Colors", "Count"];

const IconGeneratorWizard: React.FC<IconGeneratorWizardProps> = ({
  formData,
  onChange,
  onGenerate,
  isGenerating,
  styles
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    if (activeStep < STEPS.length - 1) {
      setActiveStep(prev => prev + 1);
    } else {
      onGenerate();
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  const isLastStep = activeStep === STEPS.length - 1;
  const isFirstStep = activeStep === 0;

  const canProceed = () => {
    if (activeStep === 0 && !formData.prompt.trim()) {
      return false;
    }
    return true;
  };

  return (
    <div className="space-y-6">
      {/* Step Indicators */}
      <div className="flex justify-between mb-6">
        {STEPS.map((step, index) => (
          <div 
            key={step} 
            className="flex flex-col items-center"
            onClick={() => setActiveStep(index)}
          >
            <div className={`
              relative flex items-center justify-center w-10 h-10 rounded-full 
              border-2 transition-all cursor-pointer
              ${index === activeStep 
                ? "border-primary bg-primary text-primary-foreground" 
                : index < activeStep 
                  ? "border-primary bg-primary/10 text-primary" 
                  : "border-input bg-background text-muted-foreground"}
            `}>
              {index < activeStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
              {index < STEPS.length - 1 && (
                <div className={`absolute top-1/2 left-full w-[calc(100%-2.5rem)] h-0.5 -translate-y-1/2 
                  ${index < activeStep ? "bg-primary" : "bg-border"}`} 
                />
              )}
            </div>
            <span className={`text-xs mt-2 font-medium ${index === activeStep ? "text-primary" : "text-muted-foreground"}`}>
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="min-h-[350px]">
        {/* Step 1: Describe your icon */}
        {activeStep === 0 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">Describe Your Icon</h2>
              <p className="text-muted-foreground mb-4">
                Provide a detailed description of the icon you want to generate
              </p>
              
              <Label htmlFor="prompt" className="text-base font-medium">
                Icon Description
              </Label>
              <Textarea
                id="prompt"
                placeholder="e.g., A modern shopping cart icon, minimalist house icon, cooking utensil icon set"
                className="mt-1.5 min-h-[150px] resize-none"
                value={formData.prompt}
                onChange={(e) => onChange({ prompt: e.target.value })}
              />
              <p className="text-xs text-muted-foreground mt-1.5">
                Be specific about style, colors, and details you want to include
              </p>
            </div>
          </motion.div>
        )}

        {/* Step 2: Choose style */}
        {activeStep === 1 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-2">Choose an Icon Style</h2>
            <p className="text-muted-foreground mb-4">
              Select a style that best represents your vision
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4 max-h-[350px] overflow-y-auto p-1">
              {styles.map((style) => (
                <Card 
                  key={style.id}
                  className={`cursor-pointer transition-all border ${
                    formData.style === style.id 
                      ? "ring-2 ring-primary border-primary" 
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => onChange({ style: style.id })}
                >
                  <CardContent className="p-3">
                    <div className="font-medium text-sm">{style.name}</div>
                    <div className="text-xs text-muted-foreground line-clamp-2">{style.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Choose colors */}
        {activeStep === 2 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">Choose Colors</h2>
            <p className="text-muted-foreground mb-4">
              Select primary and background colors for your icon
            </p>

            <div className="grid grid-cols-1 gap-6 pt-2">
              <ColorPicker
                id="primary-color"
                label="Primary Color"
                value={formData.color}
                onChange={(value) => onChange({ color: value })}
              />

              <ColorPicker
                id="background-color"
                label="Background Color"
                value={formData.backgroundColor}
                onChange={(value) => onChange({ backgroundColor: value })}
              />
            </div>
          </motion.div>
        )}

        {/* Step 4: Number of icons */}
        {activeStep === 3 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">Number of Icons</h2>
            <p className="text-muted-foreground mb-4">
              How many variations would you like to generate?
            </p>

            <div className="pt-2">
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="count" className="text-base font-medium">
                  Number of Icons
                </Label>
                <span className="text-sm font-medium">{formData.count}</span>
              </div>
              <Slider
                id="count"
                min={1}
                max={8}
                step={1}
                value={[formData.count]}
                onValueChange={(value) => onChange({ count: value[0] })}
                className="mt-1.5"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1</span>
                <span>8</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={isFirstStep}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!canProceed() || (isLastStep && isGenerating)}
          className={isLastStep ? "bg-primary" : ""}
        >
          {isLastStep ? (
            isGenerating ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              <>
                Generate Icons
              </>
            )
          ) : (
            <>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default IconGeneratorWizard;
