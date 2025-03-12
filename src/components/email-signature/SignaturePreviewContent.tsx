
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Download, Laptop, Smartphone } from "lucide-react";
import { EmailSignatureData } from "@/types/email-signature";
import { getTemplate, getTemplateHtml } from "./templates";
import { downloadSignatureHtml, fetchImageAsBase64 } from "@/utils/email-signature-utils";
import { toast } from "sonner";

interface SignaturePreviewContentProps {
  data: EmailSignatureData;
}

const SignaturePreviewContent: React.FC<SignaturePreviewContentProps> = ({ data }) => {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [htmlContent, setHtmlContent] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const signatureRef = useRef<HTMLDivElement>(null);

  // Process the HTML with base64 images when data changes
  useEffect(() => {
    const processHtml = async () => {
      setIsProcessing(true);
      try {
        // Create a copy of the data object to modify
        const processedData = { ...data };
        
        // Convert image URLs to base64 if they exist
        if (data.profileImageUrl) {
          const profileImageBase64 = await fetchImageAsBase64(data.profileImageUrl);
          processedData.profileImageUrl = profileImageBase64 || data.profileImageUrl;
        }
        
        if (data.companyLogoUrl) {
          const companyLogoBase64 = await fetchImageAsBase64(data.companyLogoUrl);
          processedData.companyLogoUrl = companyLogoBase64 || data.companyLogoUrl;
        }
        
        // Generate HTML with the processed data
        const html = getTemplateHtml(processedData.template, processedData);
        setHtmlContent(html);
      } catch (error) {
        console.error('Error processing signature HTML:', error);
        toast.error("Error preparing signature. Please try again.");
      } finally {
        setIsProcessing(false);
      }
    };
    
    processHtml();
  }, [data]);

  const handleCopySignature = () => {
    if (signatureRef.current) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(signatureRef.current);
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        toast.success("Signature copied to clipboard!");
      }
    }
  };

  const handleDownloadHtml = () => {
    downloadSignatureHtml(htmlContent, `${data.fullName.toLowerCase().replace(/\s+/g, '-')}-signature.html`);
    toast.success("Signature HTML downloaded successfully!");
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden border border-indigo-100">
      <div className="absolute top-4 right-4 z-10">
        <div className="flex bg-indigo-50/80 backdrop-blur-sm rounded-full p-1 shadow-sm">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${viewMode === "desktop" ? "bg-white shadow-sm text-indigo-700" : "text-gray-500"}`}
            onClick={() => setViewMode("desktop")}
          >
            <Laptop className="h-3.5 w-3.5 mr-1.5" />
            Desktop
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${viewMode === "mobile" ? "bg-white shadow-sm text-indigo-700" : "text-gray-500"}`}
            onClick={() => setViewMode("mobile")}
          >
            <Smartphone className="h-3.5 w-3.5 mr-1.5" />
            Mobile
          </Button>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border-b border-indigo-100">
        <h3 className="text-lg font-semibold text-indigo-800 mb-2">Preview</h3>
        <p className="text-sm text-indigo-600/70">Preview how your signature will appear in emails</p>
      </div>
      
      <div className="p-8 flex items-center justify-center bg-white bg-[url('/grid-pattern.svg')] bg-center">
        <div className={`transition-all mx-auto bg-white border rounded-md shadow-sm p-5 ${viewMode === "mobile" ? "max-w-[310px]" : "w-full max-w-[560px]"}`}>
          <div ref={signatureRef} className={`${viewMode === "mobile" ? "scale-[0.8] origin-top-left" : ""}`}>
            {getTemplate(data.template, data, true)}
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 flex gap-2">
        <Button onClick={handleCopySignature} size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
          <Copy className="h-4 w-4 mr-2" />
          Copy Signature
        </Button>
        <Button onClick={handleDownloadHtml} variant="outline" size="sm" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
          <Download className="h-4 w-4 mr-2" />
          Download HTML
        </Button>
      </div>
    </div>
  );
};

export default SignaturePreviewContent;
