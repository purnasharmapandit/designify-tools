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
      case "tech":
        return <TechTemplate data={data} />;
      default:
        return <MinimalTemplate data={data} />;
    }
  };
  
  const cleanHtml = (html: string): string => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    const processNodes = (node: Node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        
        const reactAttrs = [
          'data-reactroot', 'data-reactid', 'data-react-checksum', 
          'data-react-beautiful-dnd', 'data-rbd', 'data-react-sortable-tree',
          'data-react', 'class', 'className', 'tabIndex', 'for'
        ];
        
        reactAttrs.forEach(attr => {
          if (element.hasAttribute(attr)) {
            element.removeAttribute(attr);
          }
        });
        
        Array.from(element.attributes).forEach(attr => {
          if (attr.name.startsWith('aria-') || attr.name.startsWith('data-')) {
            element.removeAttribute(attr.name);
          }
        });
        
        if (element.hasAttribute('style') && element.getAttribute('style') === '') {
          element.removeAttribute('style');
        }
        
        if (element.tagName === 'IMG' && element.hasAttribute('src')) {
          const src = element.getAttribute('src');
          if (src && src.startsWith('/')) {
            element.setAttribute('src', `${window.location.origin}${src}`);
          }
        }
        
        if (element.tagName === 'A' && element.hasAttribute('target')) {
          element.setAttribute('rel', 'noopener');
          if (element.hasAttribute('target') && element.getAttribute('target') === '_blank') {
          } else {
            element.removeAttribute('target');
          }
        }
        
        if (element.hasAttribute('role')) {
          element.removeAttribute('role');
        }
        
        Array.from(element.childNodes).forEach(processNodes);
      }
    };
    
    processNodes(tempDiv);
    
    let cleanedHtml = tempDiv.innerHTML;
    
    cleanedHtml = cleanedHtml
      .replace(/<!-- -->/g, '')
      .replace(/ loading="[^"]*"/g, '')
      .replace(/ rel="noopener noreferrer"/g, ' rel="noopener"');
    
    return cleanedHtml;
  };
  
  const handleCopyHtml = () => {
    const signatureElement = document.getElementById("signature-template");
    
    if (signatureElement) {
      const html = signatureElement.innerHTML;
      const cleanedHtml = cleanHtml(html);
      
      navigator.clipboard.writeText(cleanedHtml)
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
      const html = signatureElement.innerHTML;
      const cleanedHtml = cleanHtml(html);
      
      const fullHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Email Signature</title>
</head>
<body>
  ${cleanedHtml}
</body>
</html>`;
      
      const blob = new Blob([fullHtml], { type: "text/html" });
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
              <p className="mt-3 text-xs text-muted-foreground">
                Note: Some email clients may have limitations on HTML formatting or image display. 
                For best results with Outlook, consider saving images to your device and reattaching them.
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default SignaturePreview;
