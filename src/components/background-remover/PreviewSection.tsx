
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, EyeOff, Eye } from "lucide-react";

interface PreviewSectionProps {
  originalImage: string | null;
  processedImage: string | null;
  onDownload: () => void;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ 
  originalImage, 
  processedImage, 
  onDownload 
}) => {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col h-full"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Preview</h2>
        {processedImage && (
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
        {!originalImage ? (
          <div className="text-center text-gray-500">
            <p>Upload an image to see the preview</p>
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
              {/* Display original or processed image based on toggle */}
              {processedImage ? (
                <img
                  src={showOriginal ? originalImage : processedImage}
                  alt={showOriginal ? "Original image" : "Processed image"}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={originalImage}
                  alt="Original image"
                  className="w-full h-full object-contain"
                />
              )}
              
              {/* Grid pattern background for transparency */}
              {processedImage && !showOriginal && (
                <div className="absolute inset-0 -z-10 bg-checkerboard"></div>
              )}
            </div>
            
            {processedImage && !showOriginal && (
              <div className="mt-4 flex justify-end">
                <Button
                  onClick={onDownload}
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
