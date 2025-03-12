
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const UploadSection = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    setFile(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));
    // Here we would normally start the background removal process
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "Upload complete",
        description: "Your image is ready for background removal.",
      });
    }, 1500);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full"
    >
      <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
      <Card className="flex-grow flex flex-col items-center justify-center p-8 border border-dashed border-purple-200 bg-purple-50/50 rounded-xl">
        {!imagePreview ? (
          <div className="text-center">
            <div className="mx-auto bg-white p-4 rounded-full mb-4 shadow-sm">
              <ImageIcon className="h-12 w-12 text-purple-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Drag & drop your image here</h3>
            <p className="text-gray-500 text-sm mb-6">
              or browse from your computer (JPG, PNG, WebP)
            </p>
            <Button 
              onClick={handleUploadClick} 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              <Upload className="h-4 w-4 mr-2" />
              Choose Image
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col">
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg mb-4 bg-white shadow-sm">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  setFile(null);
                  setImagePreview(null);
                }}
              >
                Remove
              </Button>
              <Button
                onClick={handleUploadClick}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                <Upload className="h-4 w-4 mr-2" />
                Change Image
              </Button>
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default UploadSection;
