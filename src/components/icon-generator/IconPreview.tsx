
import React from "react";
import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  showPlaceholder
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg">Generated Icons</h3>
        {icons.length > 0 && (
          <span className="text-sm text-muted-foreground">
            {icons.length} icons generated
          </span>
        )}
      </div>

      {isLoading ? (
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <div className="inline-block w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-muted-foreground">Generating your icons...</p>
          </div>
        </div>
      ) : showPlaceholder ? (
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 max-w-sm">
            <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Your icons will appear here</h3>
            <p className="text-sm text-muted-foreground">
              Fill out the form and click "Generate Icons" to see your custom icons
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-grow overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {icons.map((icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="aspect-square bg-background rounded-md border overflow-hidden flex items-center justify-center p-4 transition-all group-hover:shadow-md">
                  <img 
                    src={icon.imageURL} 
                    alt={`Generated icon ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      onClick={() => onDownload(icon.imageURL)}
                      className="h-8"
                    >
                      <Download className="h-3.5 w-3.5 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IconPreview;
