
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Share2, HelpCircle } from "lucide-react";

interface DownloadPanelProps {
  onDownload: (format: 'svg' | 'png') => void;
  onShare: () => void;
}

const DownloadPanel = ({ onDownload, onShare }: DownloadPanelProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Download Logo</h3>
        <div className="space-y-2">
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => onDownload('svg')}
          >
            <Download className="mr-2 h-4 w-4" />
            SVG Vector
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => onDownload('png')}
          >
            <Download className="mr-2 h-4 w-4" />
            PNG High Res
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3">Share</h3>
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={onShare}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Copy Link
        </Button>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3">Need Help?</h3>
        <Button 
          variant="outline" 
          className="w-full justify-start"
        >
          <HelpCircle className="mr-2 h-4 w-4" />
          Logo Design Tips
        </Button>
      </div>
    </div>
  );
};

export default DownloadPanel;
