
import React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import SignatureTemplates from "@/components/email-signature/SignatureTemplates";
import SignatureEditor from "@/components/email-signature/SignatureEditor";
import SignaturePreview from "@/components/email-signature/SignaturePreview";
import SignatureSteps from "./SignatureSteps";
import { SignatureData, SignatureTemplate } from "@/types/email-signature";

interface SignatureContentProps {
  step: "select" | "customize" | "preview";
  selectedTemplateId: string;
  templates: SignatureTemplate[];
  signatureData: SignatureData;
  onTemplateSelect: (templateId: string) => void;
  onSignatureDataChange: (data: Partial<SignatureData>) => void;
  onProceedToPreview: () => void;
  onBackToEdit: () => void;
  onBackToTemplates: () => void;
}

const SignatureContent: React.FC<SignatureContentProps> = ({
  step,
  selectedTemplateId,
  templates,
  signatureData,
  onTemplateSelect,
  onSignatureDataChange,
  onProceedToPreview,
  onBackToEdit,
  onBackToTemplates,
}) => {
  const selectedTemplate = templates.find(template => template.id === selectedTemplateId);

  return (
    <div className="bg-card rounded-xl border shadow-sm overflow-hidden mb-16">
      <Tabs value={step} className="w-full">
        <SignatureSteps
          step={step}
          selectedTemplateId={selectedTemplateId}
          onBackToTemplates={onBackToTemplates}
        />

        <TabsContent value="select" className="p-6">
          <SignatureTemplates templates={templates} onSelect={onTemplateSelect} />
        </TabsContent>

        <TabsContent value="customize" className="p-0">
          {selectedTemplate && (
            <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
              <div className="md:col-span-2 p-6">
                <SignatureEditor
                  data={signatureData}
                  onChange={onSignatureDataChange}
                  onProceed={onProceedToPreview}
                />
              </div>
              <div className="md:col-span-3 p-6 bg-muted/30">
                <SignaturePreview
                  templateId={selectedTemplateId}
                  data={signatureData}
                  isEditing={true}
                />
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="preview" className="p-6">
          {selectedTemplate && (
            <SignaturePreview
              templateId={selectedTemplateId}
              data={signatureData}
              isEditing={false}
              onBack={onBackToEdit}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SignatureContent;
