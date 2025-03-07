
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface QRCodePreviewProps {
  qrCodeUrl: string;
  isGenerating: boolean;
  error: string | null;
}

const QRCodePreview: React.FC<QRCodePreviewProps> = ({ qrCodeUrl, isGenerating, error }) => {
  return (
    <Card className="flex flex-col items-center justify-center p-6 bg-white shadow-md min-h-80">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        {isGenerating ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            <p className="text-sm text-gray-500">Generating QR code...</p>
          </div>
        ) : error ? (
          <div className="text-center p-4 text-red-500">
            <p>{error}</p>
          </div>
        ) : qrCodeUrl ? (
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <img 
              src={qrCodeUrl} 
              alt="Generated QR Code" 
              className="max-w-full"
            />
          </div>
        ) : (
          <div className="text-center p-4 text-gray-400">
            <p>Enter content to generate a QR code</p>
          </div>
        )}
      </motion.div>
    </Card>
  );
};

export default QRCodePreview;
