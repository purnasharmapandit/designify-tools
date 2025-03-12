
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scissors } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface ControlsSectionProps {
  onRemoveBackground: () => Promise<void>;
  isProcessing: boolean;
  refinementLevel: number;
  setRefinementLevel: (value: number) => void;
  fileFormat: string;
  setFileFormat: (format: string) => void;
  disabled: boolean;
}

const ControlsSection: React.FC<ControlsSectionProps> = ({
  onRemoveBackground,
  isProcessing,
  refinementLevel,
  setRefinementLevel,
  fileFormat,
  setFileFormat,
  disabled
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8"
    >
      <Card className="p-6 border border-purple-100 bg-white rounded-xl">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Label className="mb-2 block">Refinement Level</Label>
            <div className="flex items-center gap-4">
              <Slider
                value={[refinementLevel]}
                max={100}
                step={1}
                onValueChange={(values) => setRefinementLevel(values[0])}
                className="flex-grow"
                disabled={disabled || isProcessing}
              />
              <span className="text-sm font-medium w-8 text-right">{refinementLevel}%</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Higher values provide more precise edge detection
            </p>
          </div>
          
          <div>
            <Label className="mb-2 block">Output Format</Label>
            <Select 
              value={fileFormat} 
              onValueChange={setFileFormat}
              disabled={disabled || isProcessing}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="png">PNG</SelectItem>
                <SelectItem value="jpg">JPG</SelectItem>
                <SelectItem value="webp">WebP</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500 mt-1">
              PNG and WebP preserve transparency
            </p>
          </div>
          
          <div className="flex items-end">
            <Button
              onClick={onRemoveBackground}
              disabled={disabled || isProcessing}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              {isProcessing ? (
                <>
                  <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Scissors className="h-4 w-4 mr-2" />
                  Remove Background
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ControlsSection;
