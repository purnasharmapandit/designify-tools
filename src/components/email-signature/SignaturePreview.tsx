
import React, { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, Check, Laptop, Smartphone, Clipboard, Code, FileText, Info } from "lucide-react";
import { EmailSignatureData } from "@/types/email-signature";
import { getTemplate, getTemplateHtml } from "./templates";
import { downloadSignatureHtml, getEmailClientInstructions } from "@/utils/email-signature-utils";
import { toast } from "sonner";

interface SignaturePreviewProps {
  data: EmailSignatureData;
}

const SignaturePreview: React.FC<SignaturePreviewProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const emailClientInstructions = getEmailClientInstructions();
  const signatureRef = useRef<HTMLDivElement>(null);

  const handleCopyHtml = () => {
    const html = getTemplateHtml(data.template, data);
    navigator.clipboard.writeText(html);
    setCopied(true);
    toast.success("HTML code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

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
    const html = getTemplateHtml(data.template, data);
    downloadSignatureHtml(html, `${data.fullName.toLowerCase().replace(/\s+/g, '-')}-signature.html`);
    toast.success("Signature HTML downloaded successfully!");
  };

  return (
    <div className="flex flex-col space-y-8 overflow-hidden h-full">
      {/* Preview Section */}
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
          <h3 className="text-lg font-semibold text-indigo-800 mb-2 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-indigo-600" />
            Signature Preview
          </h3>
          <p className="text-sm text-indigo-600/70">Preview how your signature will appear in emails</p>
        </div>
        
        <div className="p-8 flex items-center justify-center bg-white bg-[url('/grid-pattern.svg')] bg-center">
          <div className={`transition-all mx-auto bg-white border rounded-md shadow-sm p-5 ${viewMode === "mobile" ? "max-w-[310px]" : "w-full max-w-[560px]"}`}>
            <div ref={signatureRef} className={`${viewMode === "mobile" ? "scale-[0.8] origin-top-left" : ""}`}>
              {getTemplate(data.template, data, true)}
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 flex flex-wrap gap-2">
          <Button onClick={handleCopySignature} size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white flex-1">
            <Clipboard className="h-4 w-4 mr-2" />
            Copy Signature
          </Button>
          <Button onClick={handleCopyHtml} variant="outline" size="sm" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 flex-1">
            <Copy className="h-4 w-4 mr-2" />
            Copy HTML
          </Button>
          <Button onClick={handleDownloadHtml} variant="outline" size="sm" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 flex-1">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* HTML Code Section */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-indigo-100">
        <div className="bg-gradient-to-r from-gray-800 to-indigo-900 p-4">
          <h3 className="text-lg font-semibold text-white mb-1 flex items-center">
            <Code className="h-5 w-5 mr-2 text-indigo-300" />
            HTML Code
          </h3>
          <p className="text-sm text-indigo-200">Copy and paste this code into your email client</p>
        </div>
        <div className="p-0 bg-gray-900">
          <div className="relative">
            <Textarea
              readOnly
              className="min-h-[180px] font-mono text-xs bg-gray-900 text-gray-100 p-4 resize-none border-0 rounded-none focus-visible:ring-0"
              value={getTemplateHtml(data.template, data)}
            />
            <Button 
              onClick={handleCopyHtml} 
              variant="ghost" 
              size="sm" 
              className="absolute top-2 right-2 h-8 text-white/80 hover:text-white hover:bg-white/10"
            >
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Instructions Section */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-indigo-100">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
          <h3 className="text-lg font-semibold text-white mb-1 flex items-center">
            <Info className="h-5 w-5 mr-2 text-indigo-200" />
            Setup Instructions
          </h3>
          <p className="text-sm text-indigo-200">How to add your signature to email clients</p>
        </div>
        
        <div className="divide-y divide-indigo-100">
          <div className="p-4 bg-gradient-to-r from-indigo-50/30 to-white">
            <h4 className="font-medium text-indigo-800 mb-2">Gmail Instructions</h4>
            <ol className="space-y-1 pl-5 list-decimal text-sm text-gray-700">
              {emailClientInstructions.gmail.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          
          <div className="p-4 bg-white">
            <h4 className="font-medium text-indigo-800 mb-2">Outlook Instructions</h4>
            <ol className="space-y-1 pl-5 list-decimal text-sm text-gray-700">
              {emailClientInstructions.outlook.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-indigo-50/30 to-white">
            <h4 className="font-medium text-indigo-800 mb-2">Apple Mail Instructions</h4>
            <ol className="space-y-1 pl-5 list-decimal text-sm text-gray-700">
              {emailClientInstructions.appleMail.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignaturePreview;
