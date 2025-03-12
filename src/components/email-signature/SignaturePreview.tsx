import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, Check, Code } from "lucide-react";
import { EmailSignatureData } from "@/types/email-signature";
import { getTemplate, getTemplateHtml } from "./templates";
import { downloadSignatureHtml, getEmailClientInstructions } from "@/utils/email-signature-utils";
import { toast } from "sonner";

interface SignaturePreviewProps {
  data: EmailSignatureData;
}

const SignaturePreview: React.FC<SignaturePreviewProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");
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
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle>Preview & Export</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">HTML Code</TabsTrigger>
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="p-4 border rounded-md mt-4">
            <div className="bg-white p-4">
              <div ref={signatureRef}>
                {getTemplate(data.template, data, true)}
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button onClick={handleCopySignature} className="w-full">
                <Copy className="h-4 w-4 mr-2" />
                Copy Signature
              </Button>
              <Button onClick={handleCopyHtml} variant="outline" className="w-full">
                <Code className="h-4 w-4 mr-2" />
                Copy HTML
              </Button>
              <Button onClick={handleDownloadHtml} variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download HTML
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <Textarea
              readOnly
              className="min-h-[300px] font-mono text-xs"
              value={getTemplateHtml(data.template, data)}
            />
            <Button onClick={handleCopyHtml} className="mt-4 w-full">
              {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
              {copied ? "Copied!" : "Copy HTML"}
            </Button>
          </TabsContent>

          <TabsContent value="instructions" className="mt-4">
            <Tabs defaultValue="gmail" className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="gmail">Gmail</TabsTrigger>
                <TabsTrigger value="outlook">Outlook</TabsTrigger>
                <TabsTrigger value="appleMail">Apple Mail</TabsTrigger>
              </TabsList>

              <TabsContent value="gmail" className="mt-4 space-y-2">
                {emailClientInstructions.gmail.map((step, index) => (
                  <p key={index} className="text-sm">
                    {step}
                  </p>
                ))}
              </TabsContent>

              <TabsContent value="outlook" className="mt-4 space-y-2">
                {emailClientInstructions.outlook.map((step, index) => (
                  <p key={index} className="text-sm">
                    {step}
                  </p>
                ))}
              </TabsContent>

              <TabsContent value="appleMail" className="mt-4 space-y-2">
                {emailClientInstructions.appleMail.map((step, index) => (
                  <p key={index} className="text-sm">
                    {step}
                  </p>
                ))}
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SignaturePreview;
