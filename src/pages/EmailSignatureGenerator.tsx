
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignatureHeader from "@/components/email-signature/SignatureHeader";
import SignatureContent from "@/components/email-signature/SignatureContent";
import FeaturesSection from "@/components/email-signature/FeaturesSection";
import FAQSection from "@/components/email-signature/FAQSection";
import { SignatureData } from "@/types/email-signature";
import { defaultTemplates } from "@/components/email-signature/data/defaultTemplates";
import { defaultSignatureData } from "@/components/email-signature/data/defaultSignatureData";

// Example data for preview purposes
const previewData: SignatureData = {
  name: "Alex Johnson",
  jobTitle: "Product Marketing Lead",
  company: "TechVision Inc.",
  department: "Marketing",
  email: "alex.johnson@techvision.com",
  phone: "+1 (555) 123-4567",
  website: "techvision.com",
  address: "123 Innovation Drive, San Francisco, CA",
  photoUrl: "/lovable-uploads/profile-pic.png",
  companyLogoUrl: "/lovable-uploads/57d5ad99-eb1e-4280-a64f-e837c1d3b851.png",
  socialLinks: {
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    instagram: "https://instagram.com/alexjohnson",
    facebook: "https://facebook.com/alexjohnson"
  },
  meetingLink: "https://calendly.com/alexjohnson/meeting",
  credentials: "MBA",
  font: "Inter",
  colors: {
    primary: "#3b82f6",
    secondary: "#4f46e5",
    text: "#334155"
  }
};

const EmailSignatureGenerator = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const [step, setStep] = useState<"select" | "customize" | "preview">("select");
  const [signatureData, setSignatureData] = useState<SignatureData>(defaultSignatureData);
  const [displayData, setDisplayData] = useState<SignatureData>(previewData);
  const [userHasTyped, setUserHasTyped] = useState<boolean>(false);
  
  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplateId(templateId);
    setStep("customize");
  };
  
  const handleSignatureDataChange = (data: Partial<SignatureData>) => {
    setSignatureData(prev => ({ ...prev, ...data }));
    
    // Set userHasTyped to true on first edit
    if (!userHasTyped) {
      setUserHasTyped(true);
    }
  };
  
  // Update display data based on user input
  useEffect(() => {
    if (userHasTyped) {
      setDisplayData(signatureData);
    } else {
      setDisplayData(previewData);
    }
  }, [signatureData, userHasTyped]);
  
  // Reset userHasTyped when changing templates
  useEffect(() => {
    setUserHasTyped(false);
  }, [selectedTemplateId]);
  
  const handleProceedToPreview = () => {
    setStep("preview");
  };
  
  const handleBackToEdit = () => {
    setStep("customize");
  };
  
  const handleBackToTemplates = () => {
    setStep("select");
    setUserHasTyped(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/80">
      <Helmet>
        <title>Email Signature Generator | Create Professional Email Signatures</title>
        <meta name="description" content="Design custom email signatures for a professional look. Choose from templates or create your own with logos, social media links, and more." />
        <meta name="keywords" content="email signature, signature generator, professional email, email template" />
      </Helmet>

      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-4xl mx-auto">
            <SignatureHeader />
            
            <SignatureContent
              step={step}
              selectedTemplateId={selectedTemplateId}
              templates={defaultTemplates}
              signatureData={displayData}
              onTemplateSelect={handleTemplateSelect}
              onSignatureDataChange={handleSignatureDataChange}
              onProceedToPreview={handleProceedToPreview}
              onBackToEdit={handleBackToEdit}
              onBackToTemplates={handleBackToTemplates}
            />
          </div>
        </div>

        <FeaturesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default EmailSignatureGenerator;
