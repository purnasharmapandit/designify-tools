
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, EyeOff, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PreviewSection = () => {
  const [showOriginal, setShowOriginal] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your image is being downloaded.",
    });
    // Logic to download the processed image would go here
  };

  // This is a placeholder since we don't have real processing yet
  const placeholderResult = isProcessed ? "/placeholder-transparent.png" : null;
  const placeholderOriginal = "/placeholder.svg";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col h-full"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Preview</h2>
        {isProcessed && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowOriginal(!showOriginal)}
          >
            {showOriginal ? (
              <>
                <Eye className="h-4 w-4 mr-2" />
                Show Result
              </>
            ) : (
              <>
                <EyeOff className="h-4 w-4 mr-2" />
                Show Original
              </>
            )}
          </Button>
        )}
      </div>
      <Card className="flex-grow border border-dashed border-purple-200 bg-white rounded-xl flex items-center justify-center p-8 relative">
        {!isProcessed ? (
          <div className="text-center text-gray-500">
            <p>Upload an image to see the preview</p>
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-[url('/placeholder.svg')] bg-contain bg-center bg-no-repeat rounded-lg overflow-hidden">
              {/* Display original or processed image based on toggle */}
              <img
                src={showOriginal ? placeholderOriginal : placeholderResult}
                alt={showOriginal ? "Original image" : "Processed image"}
                className="w-full h-full object-contain"
              />
              
              {/* Grid pattern background for transparency */}
              {!showOriginal && (
                <div className="absolute inset-0 -z-10 bg-checkerboard opacity-30"></div>
              )}
            </div>
            
            {!showOriginal && (
              <div className="mt-4 flex justify-end">
                <Button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            )}
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default PreviewSection;
