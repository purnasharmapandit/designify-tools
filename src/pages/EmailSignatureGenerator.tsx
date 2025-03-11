
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

const EmailSignatureGenerator = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const [step, setStep] = useState<"select" | "customize" | "preview">("select");
  const [signatureData, setSignatureData] = useState<SignatureData>(defaultSignatureData);
  const [displayData, setDisplayData] = useState<SignatureData>(defaultSignatureData);
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
  
  // Update display data based on user input and ensure all URLs are absolute
  useEffect(() => {
    // Create a deep copy of signature data to avoid reference issues
    const updatedData = JSON.parse(JSON.stringify(signatureData)) as SignatureData;
    
    // Ensure photoUrl is an absolute URL
    if (updatedData.photoUrl && !updatedData.photoUrl.startsWith('http')) {
      updatedData.photoUrl = new URL(updatedData.photoUrl, window.location.origin).href;
    }
    
    // Ensure companyLogoUrl is an absolute URL
    if (updatedData.companyLogoUrl && !updatedData.companyLogoUrl.startsWith('http')) {
      updatedData.companyLogoUrl = new URL(updatedData.companyLogoUrl, window.location.origin).href;
    }
    
    // Ensure all social media URLs are absolute
    Object.keys(updatedData.socialLinks).forEach(key => {
      const socialKey = key as keyof typeof updatedData.socialLinks;
      const url = updatedData.socialLinks[socialKey];
      if (url && !url.startsWith('http')) {
        updatedData.socialLinks[socialKey] = new URL(url, window.location.origin).href;
      }
    });
    
    // Ensure website URL is absolute
    if (updatedData.website && !updatedData.website.startsWith('http')) {
      // Only add https:// prefix if it's a domain without protocol
      if (!updatedData.website.includes('://')) {
        updatedData.website = `https://${updatedData.website}`;
      } else {
        updatedData.website = new URL(updatedData.website, window.location.origin).href;
      }
    }
    
    // Ensure meeting link is absolute
    if (updatedData.meetingLink && !updatedData.meetingLink.startsWith('http')) {
      // Only add https:// prefix if it's a domain without protocol
      if (!updatedData.meetingLink.includes('://')) {
        updatedData.meetingLink = `https://${updatedData.meetingLink}`;
      } else {
        updatedData.meetingLink = new URL(updatedData.meetingLink, window.location.origin).href;
      }
    }
    
    setDisplayData(updatedData);
  }, [signatureData]);
  
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
