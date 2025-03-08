
import React from "react";
import { Wand2, Type, Palette, Grid, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ColorPicker } from "@/components/ui/color-picker";
import { motion } from "framer-motion";
import { IconGeneratorFormData } from "@/pages/IconGenerator";
import { Card, CardContent } from "@/components/ui/card";

interface IconGeneratorFormProps {
  formData: IconGeneratorFormData;
  onChange: (data: Partial<IconGeneratorFormData>) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  styles: Array<{ id: string; name: string; description: string }>;
}

const IconGeneratorForm: React.FC<IconGeneratorFormProps> = ({
  formData,
  onChange,
  onGenerate,
  isGenerating,
  styles
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card className="bg-gray-800/50 backdrop-blur border-gray-700 shadow-xl">
        <CardContent className="p-6 space-y-5">
          <div>
            <Label htmlFor="prompt" className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Type className="h-4 w-4" />
              Describe your icon
            </Label>
            <Textarea
              id="prompt"
              placeholder="e.g., A modern shopping cart icon, minimalist house icon"
              className="mt-2 min-h-[100px] bg-gray-900/80 border-gray-700 text-gray-200 placeholder:text-gray-500 focus-visible:ring-purple-500"
              value={formData.prompt}
              onChange={(e) => onChange({ prompt: e.target.value })}
            />
            <p className="text-xs text-gray-500 mt-1">
              Be specific about style, colors, and details
            </p>
          </div>

          <div>
            <Label htmlFor="style" className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Icon Style
            </Label>
            <Select
              value={formData.style}
              onValueChange={(value) => onChange({ style: value })}
            >
              <SelectTrigger id="style" className="mt-2 bg-gray-900/80 border-gray-700 text-gray-200 focus:ring-purple-500">
                <SelectValue placeholder="Select an icon style" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-gray-200">
                {styles.map((style) => (
                  <SelectItem key={style.id} value={style.id} className="focus:bg-gray-700">
                    <div className="flex flex-col">
                      <span>{style.name}</span>
                      <span className="text-xs text-gray-400">{style.description}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="primary-color" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Primary Color
              </Label>
              <ColorPicker
                id="primary-color"
                label="Primary Color"
                value={formData.color}
                onChange={(value) => onChange({ color: value })}
              />
            </div>

            <div>
              <Label htmlFor="background-color" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Grid className="h-4 w-4" />
                Background Color
              </Label>
              <ColorPicker
                id="background-color"
                label="Background Color"
                value={formData.backgroundColor}
                onChange={(value) => onChange({ backgroundColor: value })}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <Label htmlFor="count" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Hash className="h-4 w-4" />
                Number of Icons: {formData.count}
              </Label>
            </div>
            <Slider
              id="count"
              min={1}
              max={8}
              step={1}
              value={[formData.count]}
              onValueChange={(value) => onChange({ count: value[0] })}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>8</span>
            </div>
          </div>

          <Button
            onClick={onGenerate}
            disabled={isGenerating}
            className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            size="lg"
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Icons...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-5 w-5" />
                Generate Icons
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default IconGeneratorForm;
