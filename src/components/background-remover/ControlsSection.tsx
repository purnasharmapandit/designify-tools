
import React, { useState } from "react";
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
import { useToast } from "@/components/ui/use-toast";

const ControlsSection = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [refinementLevel, setRefinementLevel] = useState(50);
  const [fileFormat, setFileFormat] = useState("png");
  const { toast } = useToast();

  const handleRemoveBackground = () => {
    setIsProcessing(true);
    toast({
      title: "Processing",
      description: "Removing background from your image...",
    });
    
    // Simulate background removal process
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Success!",
        description: "Background has been removed successfully.",
      });
      // This would normally trigger the preview update
    }, 2000);
  };

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
                defaultValue={[refinementLevel]}
                max={100}
                step={1}
                onValueChange={(values) => setRefinementLevel(values[0])}
                className="flex-grow"
              />
              <span className="text-sm font-medium w-8 text-right">{refinementLevel}%</span>
            </div>
          </div>
          
          <div>
            <Label className="mb-2 block">Output Format</Label>
            <Select defaultValue={fileFormat} onValueChange={setFileFormat}>
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="png">PNG</SelectItem>
                <SelectItem value="jpg">JPG</SelectItem>
                <SelectItem value="webp">WebP</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-end">
            <Button
              onClick={handleRemoveBackground}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              <Scissors className="h-4 w-4 mr-2" />
              {isProcessing ? "Processing..." : "Remove Background"}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ControlsSection;
