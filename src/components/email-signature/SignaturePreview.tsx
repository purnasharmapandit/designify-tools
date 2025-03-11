
import React, { useState } from "react";
import { SignatureData } from "@/types/email-signature";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Download, ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import MinimalTemplate from "./templates/MinimalTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import CorporateTemplate from "./templates/CorporateTemplate";
import MinimalistTemplate from "./templates/MinimalistTemplate";
import ElegantTemplate from "./templates/ElegantTemplate";
import CompactTemplate from "./templates/CompactTemplate";
import BoldTemplate from "./templates/BoldTemplate";
import TechTemplate from "./templates/TechTemplate";

interface SignaturePreviewProps {
  templateId: string;
  data: SignatureData;
  isEditing?: boolean;
  onBack?: () => void;
}

const SignaturePreview: React.FC<SignaturePreviewProps> = ({ 
  templateId, 
  data, 
  isEditing = false,
  onBack
}) => {
  const [copied, setCopied] = useState(false);
  
  const renderTemplate = () => {
    switch (templateId) {
      case "minimal":
        return <MinimalTemplate data={data} />;
      case "professional":
        return <ProfessionalTemplate data={data} />;
      case "modern":
        return <ModernTemplate data={data} />;
      case "creative":
        return <CreativeTemplate data={data} />;
      case "corporate":
        return <CorporateTemplate data={data} />;
      case "minimalist":
        return <MinimalistTemplate data={data} />;
      case "elegant":
        return <ElegantTemplate data={data} />;
      case "compact":
        return <CompactTemplate data={data} />;
      case "bold":
        return <BoldTemplate data={data} />;
      case "tech":
        return <TechTemplate data={data} />;
      default:
        return <MinimalTemplate data={data} />;
    }
  };
  
  const handleCopyHtml = () => {
    const signatureElement = document.getElementById("signature-template");
    
    if (signatureElement) {
      const html = signatureElement.outerHTML;
      navigator.clipboard.writeText(html)
        .then(() => {
          setCopied(true);
          toast.success("HTML copied to clipboard!");
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error("Could not copy text: ", err);
          toast.error("Failed to copy HTML. Please try again.");
        });
    }
  };
  
  const handleDownloadHtml = () => {
    const signatureElement = document.getElementById("signature-template");
    
    if (signatureElement) {
      const html = signatureElement.outerHTML;
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      
      link.href = url;
      link.download = "email-signature.html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success("Signature downloaded as HTML!");
    }
  };

  return (
    <div className="space-y-4">
      {!isEditing && onBack && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onBack}
          className="mb-4"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Editor
        </Button>
      )}
      
      <Card className="p-6 bg-white">
        <h3 className="text-lg font-semibold mb-4">
          {isEditing ? "Live Preview" : "Your Email Signature"}
        </h3>
        
        <div 
          className="border p-6 rounded-md bg-white mb-6"
          style={{ minHeight: "150px" }}
        >
          <div id="signature-template">
            {renderTemplate()}
          </div>
        </div>
        
        {!isEditing && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="flex-1" 
                onClick={handleCopyHtml}
                disabled={copied}
              >
                <Copy className="mr-2 h-4 w-4" />
                {copied ? "Copied!" : "Copy HTML"}
              </Button>
              <Button 
                className="flex-1" 
                variant="outline" 
                onClick={handleDownloadHtml}
              >
                <Download className="mr-2 h-4 w-4" />
                Download HTML
              </Button>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-md text-sm">
              <h4 className="font-medium mb-2">How to use your signature:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Copy the HTML or download the file</li>
                <li>Open your email client settings</li>
                <li>Find the signature settings section</li>
                <li>Paste the HTML or import the downloaded file</li>
                <li>Save your settings</li>
              </ol>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default SignaturePreview;
