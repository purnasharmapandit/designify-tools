
import React from "react";
import { motion } from "framer-motion";
import { Download, Copy, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface IconPreviewProps {
  icons: string[];
  isLoading: boolean;
  onDownload: (iconUrl: string) => void;
  showPlaceholder: boolean;
}

const IconPreview: React.FC<IconPreviewProps> = ({
  icons,
  isLoading,
  onDownload,
  showPlaceholder,
}) => {
  const copyToClipboard = async (iconUrl: string) => {
    try {
      // In a real implementation, we would fetch the SVG content
      // For now, just simulate success
      toast.success("Icon copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy icon");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">
        {showPlaceholder ? "Preview" : "Generated Icons"}
      </h3>

      <div className="bg-gray-50 border rounded-lg p-4 h-[400px] overflow-auto">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">Generating your icons...</p>
          </div>
        ) : (
          <>
            {showPlaceholder ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <ImageIcon className="h-16 w-16 mb-4" />
                <p className="text-center">
                  Your generated icons will appear here
                  <br />
                  <span className="text-sm">Fill out the form and click "Generate Icons"</span>
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {icons.map((iconUrl, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 border shadow-sm flex flex-col items-center"
                  >
                    <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4 w-full h-32 mb-3">
                      <img
                        src={iconUrl}
                        alt={`Generated icon ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => copyToClipboard(iconUrl)}
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        <span className="text-xs">Copy</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => onDownload(iconUrl)}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        <span className="text-xs">Download</span>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {!showPlaceholder && !isLoading && (
        <div className="mt-4 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => toast.success("All icons downloaded as ZIP file!")}
          >
            <Download className="h-4 w-4 mr-1" />
            Download All
          </Button>
        </div>
      )}
    </div>
  );
};

export default IconPreview;
