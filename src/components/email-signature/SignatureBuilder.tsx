
import React from "react";
import { motion } from "framer-motion";
import SignatureForm from "@/components/email-signature/SignatureForm";
import SignaturePreview from "@/components/email-signature/SignaturePreview";
import { EmailSignatureData } from "@/types/email-signature";
import { Palette } from "lucide-react";

interface SignatureBuilderProps {
  data: EmailSignatureData;
  setData: React.Dispatch<React.SetStateAction<EmailSignatureData>>;
}

const SignatureBuilder: React.FC<SignatureBuilderProps> = ({ data, setData }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="sticky top-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5">
              <h2 className="text-xl font-semibold text-white mb-1 flex items-center">
                <Palette className="h-5 w-5 mr-2 text-indigo-200" /> 
                <span>Design Your Signature</span>
              </h2>
              <p className="text-sm text-indigo-200">Customize details to match your brand</p>
            </div>
            <SignatureForm data={data} setData={setData} />
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="sticky top-24">
          <SignaturePreview data={data} />
        </div>
      </motion.div>
    </div>
  );
};

export default SignatureBuilder;
