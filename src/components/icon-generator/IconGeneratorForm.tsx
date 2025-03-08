import React from "react";
import { ImageIcon, Palette, Layout, Hash, Wand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ColorPicker } from "@/components/ui/color-picker";
import { IconGeneratorFormData } from "@/pages/IconGenerator";

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
    <div className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
      <div>
        <Label htmlFor="prompt" className="text-base font-medium">
          Describe your icon
        </Label>
        <Textarea
          id="prompt"
          placeholder="e.g., A modern shopping cart icon, minimalist house icon, cooking utensil icon set"
          className="mt-1.5 min-h-[100px]"
          value={formData.prompt}
          onChange={(e) => onChange({ prompt: e.target.value })}
        />
        <p className="text-xs text-muted-foreground mt-1.5">
          Be specific about style, colors, and details you want to include
        </p>
      </div>

      <div>
        <Label htmlFor="style" className="text-base font-medium">
          Icon Style
        </Label>
        <Select
          value={formData.style}
          onValueChange={(value) => onChange({ style: value })}
        >
          <SelectTrigger id="style" className="mt-1.5">
            <SelectValue placeholder="Select an icon style" />
          </SelectTrigger>
          <SelectContent>
            {styles.map((style) => (
              <SelectItem key={style.id} value={style.id}>
                <div className="flex flex-col">
                  <span>{style.name}</span>
                  <span className="text-xs text-muted-foreground">{style.description}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="primary-color" className="text-base font-medium">
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
          <Label htmlFor="background-color" className="text-base font-medium">
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
          <Label htmlFor="count" className="text-base font-medium">
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
          className="mt-1.5"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>1</span>
          <span>8</span>
        </div>
      </div>

      <Button
        onClick={onGenerate}
        disabled={isGenerating}
        className="w-full mt-4"
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
            <Wand className="mr-2 h-5 w-5" />
            Generate Icons
          </>
        )}
      </Button>
    </div>
  );
};

export default IconGeneratorForm;
