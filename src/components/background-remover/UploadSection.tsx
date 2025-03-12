
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface UploadSectionProps {
  onFileChange: (file: File) => void;
  imagePreview: string | null;
}

const UploadSection: React.FC<UploadSectionProps> = ({ onFileChange, imagePreview }) => {
  const [isUploading, setIsUploading] = useState(false);
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

    setIsUploading(true);
    
    try {
      onFileChange(selectedFile);
      toast({
        title: "Upload complete",
        description: "Your image is ready for background removal.",
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Failed to load the image. Please try another file.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setIsUploading(true);
        try {
          onFileChange(file);
          toast({
            title: "Upload complete",
            description: "Your image is ready for background removal.",
          });
        } catch (error) {
          toast({
            title: "Upload failed",
            description: "Failed to load the image. Please try another file.",
            variant: "destructive"
          });
        } finally {
          setIsUploading(false);
        }
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (JPEG, PNG, etc.)",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full"
    >
      <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
      <Card 
        className="flex-grow flex flex-col items-center justify-center p-8 border border-dashed border-purple-200 bg-purple-50/50 rounded-xl"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
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
              disabled={isUploading}
            >
              <Upload className="h-4 w-4 mr-2" />
              {isUploading ? "Uploading..." : "Choose Image"}
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
                  onFileChange(new File([], "")); // Reset file
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
