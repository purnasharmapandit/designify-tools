
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Copy, ImageIcon, Expand, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { GeneratedIcon } from "@/services/runware";
import { Card } from "@/components/ui/card";

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
    if (count <= 1) return "grid-cols-1";
    if (count <= 2) return "grid-cols-1 sm:grid-cols-2";
    if (count <= 4) return "grid-cols-2";
    return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          {showPlaceholder ? "Your Icons" : "Generated Icons"}
        </h2>
        
        {!showPlaceholder && !isLoading && icons.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            className="text-xs border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300"
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
            <Download className="h-3.5 w-3.5 mr-1" />
            Download All
          </Button>
        )}
      </div>

      <Card className="flex-1 bg-gray-800/30 backdrop-blur border-gray-700 rounded-xl overflow-hidden">
        <div className="p-4 h-full overflow-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative">
                <div className="h-16 w-16 rounded-full border-t-2 border-l-2 border-purple-500 animate-spin"></div>
                <div className="absolute inset-0 h-16 w-16 rounded-full border-b-2 border-r-2 border-pink-500 animate-spin animation-delay-500"></div>
              </div>
              <p className="mt-6 text-gray-400 text-center">Crafting your icons<br />This may take a moment</p>
            </div>
          ) : (
            <>
              {showPlaceholder ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="bg-gray-800/50 p-8 rounded-full mb-6">
                    <ImageIcon className="h-12 w-12 text-gray-600" />
                  </div>
                  <h3 className="font-medium text-gray-400 text-center">Your generated icons will appear here</h3>
                  <p className="text-gray-500 text-sm mt-2 text-center max-w-sm">
                    Describe what you want, choose a style, and click "Generate Icons"
                  </p>
                </div>
              ) : (
                <AnimatePresence>
                  <div className={`grid ${getColumnClass()} gap-4`}>
                    {icons.map((icon, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-gray-900/80 rounded-lg overflow-hidden backdrop-blur border border-gray-800 group"
                      >
                        <div className="relative aspect-square bg-gray-950 flex items-center justify-center p-4">
                          <img
                            src={icon.imageURL}
                            alt={`Generated icon ${index + 1}`}
                            className="max-h-full max-w-full object-contain"
                          />
                          {/* Overlay with actions */}
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity duration-200">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full bg-white/10 hover:bg-white/20 text-white"
                              onClick={() => copyToClipboard(icon.imageURL)}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full bg-white/10 hover:bg-white/20 text-white"
                              onClick={() => onDownload(icon.imageURL)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full bg-white/10 hover:bg-white/20 text-white"
                              onClick={() => window.open(icon.imageURL, '_blank')}
                            >
                              <Expand className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatePresence>
              )}
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default IconPreview;
