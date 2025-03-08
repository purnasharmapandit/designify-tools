
import React from "react";
import { motion } from "framer-motion";
import { Download, Copy, ImageIcon, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { GeneratedIcon } from "@/services/runware";

interface IconPreviewProps {
  icons: GeneratedIcon[];
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
      // Fetch the image data
      const response = await fetch(iconUrl);
      const blob = await response.blob();
      
      // Create a ClipboardItem
      const item = new ClipboardItem({ [blob.type]: blob });
      
      // Write to clipboard
      await navigator.clipboard.write([item]);
      toast.success("Icon copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy icon:", error);
      toast.error("Failed to copy icon. Try downloading instead.");
    }
  };

  const getColumnClass = () => {
    // Responsive grid layout based on number of icons
    const count = icons.length;
    if (count <= 2) return "grid-cols-1 sm:grid-cols-2";
    if (count <= 4) return "grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2";
    return "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">
        {showPlaceholder ? "Preview" : "Generated Icons"}
      </h3>

      <div className="bg-gray-50 border rounded-lg p-4 h-[500px] overflow-auto">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">Generating your icons...</p>
            <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
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
              <div className={`grid ${getColumnClass()} gap-4`}>
                {icons.map((icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 border shadow-sm flex flex-col items-center"
                  >
                    <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4 w-full h-32 mb-3 relative group">
                      <img
                        src={icon.imageURL}
                        alt={`Generated icon ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-lg">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="scale-90 hover:scale-100 transition-transform"
                          onClick={() => window.open(icon.imageURL, '_blank')}
                        >
                          <Expand className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => copyToClipboard(icon.imageURL)}
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        <span className="text-xs">Copy</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => onDownload(icon.imageURL)}
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

      {!showPlaceholder && !isLoading && icons.length > 0 && (
        <div className="mt-4 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              // Download all icons as a batch
              icons.forEach((icon, index) => {
                setTimeout(() => {
                  onDownload(icon.imageURL);
                }, index * 300); // Stagger downloads to avoid browser limitations
              });
              toast.success("Downloading all icons...");
            }}
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
