
import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, Check, Laptop, Smartphone, Clipboard } from "lucide-react";
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
    <div className="space-y-6">
      {/* Preview Section */}
      <Card className="w-full shadow-md border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-t-lg">
          <CardTitle className="flex items-center justify-between">
            <span className="text-lg font-semibold text-indigo-800">Signature Preview</span>
            <div className="flex space-x-2">
              <Button 
                variant={viewMode === "desktop" ? "default" : "outline"} 
                size="sm" 
                className="h-8 px-2"
                onClick={() => setViewMode("desktop")}
              >
                <Laptop className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Desktop</span>
              </Button>
              <Button 
                variant={viewMode === "mobile" ? "default" : "outline"} 
                size="sm" 
                className="h-8 px-2"
                onClick={() => setViewMode("mobile")}
              >
                <Smartphone className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Mobile</span>
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className={`bg-gray-50 border rounded-md overflow-hidden transition-all ${viewMode === "mobile" ? "max-w-[375px] mx-auto" : "w-full"}`}>
            <div className="p-4 bg-white">
              <div ref={signatureRef} className={`${viewMode === "mobile" ? "scale-[0.85] origin-top-left" : ""}`}>
                {getTemplate(data.template, data, true)}
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Button onClick={handleCopySignature} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Clipboard className="h-4 w-4 mr-2" />
                  Copy Signature
                </Button>
                <Button onClick={handleCopyHtml} variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy HTML
                </Button>
                <Button onClick={handleDownloadHtml} variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* HTML Code Section */}
      <Card className="w-full shadow-md border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-t-lg">
          <CardTitle className="text-lg font-semibold text-indigo-800">HTML Code</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="bg-gray-50 rounded-md p-2">
            <Textarea
              readOnly
              className="min-h-[200px] font-mono text-xs bg-gray-900 text-gray-100 p-4 resize-none"
              value={getTemplateHtml(data.template, data)}
            />
            <Button onClick={handleCopyHtml} className="mt-4 bg-indigo-600 hover:bg-indigo-700 w-full">
              {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
              {copied ? "Copied!" : "Copy HTML"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Instructions Section */}
      <Card className="w-full shadow-md border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-t-lg">
          <CardTitle className="text-lg font-semibold text-indigo-800">How to Add Your Signature</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-indigo-800 mb-3">Gmail Instructions:</h3>
              <ol className="space-y-2 pl-5 list-decimal text-sm text-gray-700">
                {emailClientInstructions.gmail.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-indigo-800 mb-3">Outlook Instructions:</h3>
              <ol className="space-y-2 pl-5 list-decimal text-sm text-gray-700">
                {emailClientInstructions.outlook.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-medium text-indigo-800 mb-3">Apple Mail Instructions:</h3>
              <ol className="space-y-2 pl-5 list-decimal text-sm text-gray-700">
                {emailClientInstructions.appleMail.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignaturePreview;
