
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
  const [activeSection, setActiveSection] = useState<"preview" | "code" | "instructions">("preview");

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
    <div className="p-4 space-y-6 max-h-[80vh] overflow-y-auto no-scrollbar">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex space-x-1 p-1 bg-indigo-50 rounded-lg">
          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-1.5 rounded-md ${activeSection === "preview" ? "bg-white shadow-sm text-indigo-700" : "text-gray-500 hover:text-indigo-600"}`}
            onClick={() => setActiveSection("preview")}
          >
            <FileText className="h-4 w-4" />
            <span className="text-xs sm:text-sm">Preview</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-1.5 rounded-md ${activeSection === "code" ? "bg-white shadow-sm text-indigo-700" : "text-gray-500 hover:text-indigo-600"}`}
            onClick={() => setActiveSection("code")}
          >
            <Code className="h-4 w-4" />
            <span className="text-xs sm:text-sm">HTML</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-1.5 rounded-md ${activeSection === "instructions" ? "bg-white shadow-sm text-indigo-700" : "text-gray-500 hover:text-indigo-600"}`}
            onClick={() => setActiveSection("instructions")}
          >
            <Info className="h-4 w-4" />
            <span className="text-xs sm:text-sm">Help</span>
          </Button>
        </div>
      </div>

      {/* Preview Section */}
      {activeSection === "preview" && (
        <div className="space-y-4">
          <div className="flex items-center justify-end mb-2">
            <div className="flex p-1 bg-gray-100 rounded-lg">
              <Button 
                variant={viewMode === "desktop" ? "default" : "ghost"} 
                size="sm" 
                className={`h-8 px-2 ${viewMode === "desktop" ? "bg-indigo-600" : "hover:bg-gray-200"}`}
                onClick={() => setViewMode("desktop")}
              >
                <Laptop className="h-4 w-4 mr-1" />
                <span className="text-xs">Desktop</span>
              </Button>
              <Button 
                variant={viewMode === "mobile" ? "default" : "ghost"} 
                size="sm" 
                className={`h-8 px-2 ${viewMode === "mobile" ? "bg-indigo-600" : "hover:bg-gray-200"}`}
                onClick={() => setViewMode("mobile")}
              >
                <Smartphone className="h-4 w-4 mr-1" />
                <span className="text-xs">Mobile</span>
              </Button>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="p-6 bg-gray-50 border-b">
              <div className={`mx-auto transition-all bg-white p-4 border rounded-md ${viewMode === "mobile" ? "max-w-[320px]" : "w-full"}`}>
                <div ref={signatureRef} className={`${viewMode === "mobile" ? "scale-[0.85] origin-top-left" : ""}`}>
                  {getTemplate(data.template, data, true)}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Button onClick={handleCopySignature} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
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
        </div>
      )}

      {/* HTML Code Section */}
      {activeSection === "code" && (
        <div className="space-y-4">
          <Card className="overflow-hidden border-0 shadow-md">
            <div className="bg-gray-800 p-3 flex items-center justify-between">
              <h3 className="text-sm font-medium text-white">Signature HTML Code</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 text-white/80 hover:text-white hover:bg-white/10"
                onClick={handleCopyHtml}
              >
                {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
              </Button>
            </div>
            <Textarea
              readOnly
              className="min-h-[300px] font-mono text-xs bg-gray-900 text-gray-100 p-4 resize-none border-0 rounded-none focus-visible:ring-0"
              value={getTemplateHtml(data.template, data)}
            />
          </Card>
          
          <Button onClick={handleDownloadHtml} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
            <Download className="h-4 w-4 mr-2" />
            Download HTML File
          </Button>
        </div>
      )}

      {/* Instructions Section */}
      {activeSection === "instructions" && (
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3">
              <h3 className="text-sm font-medium text-white">Gmail Instructions</h3>
            </div>
            <div className="p-4">
              <ol className="space-y-2 pl-5 list-decimal text-sm text-gray-700">
                {emailClientInstructions.gmail.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3">
              <h3 className="text-sm font-medium text-white">Outlook Instructions</h3>
            </div>
            <div className="p-4">
              <ol className="space-y-2 pl-5 list-decimal text-sm text-gray-700">
                {emailClientInstructions.outlook.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3">
              <h3 className="text-sm font-medium text-white">Apple Mail Instructions</h3>
            </div>
            <div className="p-4">
              <ol className="space-y-2 pl-5 list-decimal text-sm text-gray-700">
                {emailClientInstructions.appleMail.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignaturePreview;
