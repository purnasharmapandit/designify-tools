
import React from "react";
import { EmailSignatureData } from "@/types/email-signature";
import SignaturePreviewContent from "./SignaturePreviewContent";
import SetupInstructions from "./SetupInstructions";

interface SignaturePreviewProps {
  data: EmailSignatureData;
}

const SignaturePreview: React.FC<SignaturePreviewProps> = ({ data }) => {
  return (
    <div className="flex flex-col space-y-6">
      <SignaturePreviewContent data={data} />
      <SetupInstructions />
    </div>
  );
};

export default SignaturePreview;
