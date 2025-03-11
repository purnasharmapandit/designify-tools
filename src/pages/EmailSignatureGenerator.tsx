
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Wand2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignatureTemplates from "@/components/email-signature/SignatureTemplates";
import SignatureEditor from "@/components/email-signature/SignatureEditor";
import SignaturePreview from "@/components/email-signature/SignaturePreview";
import { SignatureTemplate, SignatureData } from "@/types/email-signature";
import FeaturesSection from "@/components/email-signature/FeaturesSection";
import FAQSection from "@/components/email-signature/FAQSection";

const defaultTemplates: SignatureTemplate[] = [
  { 
    id: "minimal", 
    name: "Minimal",
    description: "Clean, simple design with essential information",
    previewImage: "/signatures/minimal.png",
    featured: false,
    new: false
  },
  { 
    id: "professional", 
    name: "Professional",
    description: "Complete business signature with contact details",
    previewImage: "/signatures/professional.png",
    featured: true,
    new: false
  },
  { 
    id: "modern", 
    name: "Modern",
    description: "Contemporary design with bold color accents",
    previewImage: "/signatures/modern.png",
    featured: false,
    new: false
  },
  { 
    id: "creative", 
    name: "Creative",
    description: "Standout design for creative professionals",
    previewImage: "/signatures/creative.png",
    featured: false,
    new: false
  },
  { 
    id: "corporate", 
    name: "Corporate",
    description: "Professional signature with branded header",
    previewImage: "/signatures/corporate.png",
    featured: false,
    new: true
  },
  { 
    id: "minimalist", 
    name: "Minimalist",
    description: "Ultra-clean design with refined typography",
    previewImage: "/signatures/minimalist.png",
    featured: false,
    new: true
  },
];

const defaultSignatureData: SignatureData = {
  name: "",
  jobTitle: "",
  company: "",
  department: "",
  email: "",
  phone: "",
  website: "",
  address: "",
  photoUrl: "",
  companyLogoUrl: "",
  socialLinks: {
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  meetingLink: "",
  credentials: "",
  font: "Inter",
  colors: {
    primary: "#6366f1",
    secondary: "#e2e8f0",
    text: "#334155"
  }
};

const EmailSignatureGenerator = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const [step, setStep] = useState<"select" | "customize" | "preview">("select");
  const [signatureData, setSignatureData] = useState<SignatureData>(defaultSignatureData);
  
  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplateId(templateId);
    setStep("customize");
  };
  
  const handleSignatureDataChange = (data: Partial<SignatureData>) => {
    setSignatureData(prev => ({ ...prev, ...data }));
  };
  
  const handleProceedToPreview = () => {
    setStep("preview");
  };
  
  const handleBackToEdit = () => {
    setStep("customize");
  };
  
  const handleBackToTemplates = () => {
    setStep("select");
  };
  
  const selectedTemplate = defaultTemplates.find(template => template.id === selectedTemplateId);

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
            {/* Header Section */}
            <div className="text-center mb-10 pt-16">
              <div className="inline-block p-3 bg-primary/10 rounded-full text-primary mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Email Signature Generator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Create professional email signatures in minutes
              </p>
            </div>

            {/* Main Card */}
            <div className="bg-card rounded-xl border shadow-sm overflow-hidden mb-16">
              <Tabs value={step} className="w-full">
                <div className="border-b">
                  <TabsList className="w-full justify-start rounded-none bg-transparent border-b p-0">
                    <TabsTrigger 
                      value="select" 
                      className={`rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 ${step === "select" ? "border-primary" : ""}`}
                      onClick={handleBackToTemplates}
                    >
                      1. Choose Template
                    </TabsTrigger>
                    <TabsTrigger 
                      value="customize" 
                      className={`rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 ${step === "customize" ? "border-primary" : ""}`}
                      disabled={!selectedTemplateId}
                    >
                      2. Customize
                    </TabsTrigger>
                    <TabsTrigger 
                      value="preview" 
                      className={`rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 ${step === "preview" ? "border-primary" : ""}`}
                      disabled={!selectedTemplateId}
                    >
                      3. Preview & Export
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="select" className="p-6">
                  <SignatureTemplates 
                    templates={defaultTemplates} 
                    onSelect={handleTemplateSelect} 
                  />
                </TabsContent>

                <TabsContent value="customize" className="p-0">
                  {selectedTemplate && (
                    <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
                      <div className="md:col-span-2 p-6">
                        <SignatureEditor 
                          data={signatureData} 
                          onChange={handleSignatureDataChange}
                          onProceed={handleProceedToPreview}
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
                      onBack={handleBackToEdit}
                    />
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <FeaturesSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default EmailSignatureGenerator;
