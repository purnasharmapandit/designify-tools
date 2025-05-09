
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EmailSignatureData } from "@/types/email-signature";
import { getEmailClientInstructions } from "@/utils/email-signature-utils";
import SignatureBuilder from "@/components/email-signature/SignatureBuilder";
import EmailClientInstructions from "@/components/email-signature/EmailClientInstructions";
import SimpleStepsSection from "@/components/email-signature/SimpleStepsSection";
import BenefitsSection from "@/components/email-signature/BenefitsSection";
import StandardHeroSection from "@/components/shared/StandardHeroSection";
import { Check, Mail, Briefcase, Layout, Settings } from "lucide-react";
import EmailSignatureFAQSection from "@/components/email-signature/EmailSignatureFAQSection";

const EmailSignatureGenerator = () => {
  const [data, setData] = useState<EmailSignatureData>({
    fullName: "",
    jobTitle: "",
    company: "",
    phoneNumber: "",
    email: "",
    website: "",
    address: "",
    profileImageUrl: "",
    companyLogoUrl: "",
    socialLinks: [{ platform: "linkedin", url: "" }],
    template: "professional",
    primaryColor: "#4F46E5",
    secondaryColor: "#3E63DD",
    font: "Arial",
    showProfileImage: true,
    showCompanyLogo: true,
    showAddress: true,
  });

  const emailClientInstructions = getEmailClientInstructions();

  const emailSignatureImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 transform rotate-3 absolute -right-5 -top-5 z-10">
        <Mail className="w-12 h-12 text-indigo-500" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-xl font-bold text-indigo-600">JD</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">John Doe</h3>
            <p className="text-gray-500 text-sm">Product Designer</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600 mb-1">email@example.com</p>
          <p className="text-sm text-gray-600 mb-1">+1 (555) 123-4567</p>
          <p className="text-sm text-gray-600">www.company.com</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Email Signature Generator | Create Professional Email Signatures</title>
        <meta name="description" content="Create beautiful, professional email signatures that work with Gmail, Outlook, Apple Mail, and more. No design skills required. Free online email signature maker." />
        <meta name="keywords" content="email signature generator, email signature maker, professional email signature, email footer, html email signature, gmail signature, outlook signature, apple mail signature" />
        <meta property="og:title" content="Email Signature Generator | Create Professional Email Signatures" />
        <meta property="og:description" content="Create beautiful, professional email signatures that work with Gmail, Outlook, Apple Mail, and more. Choose from multiple templates and customize to your brand." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Signature Generator | Create Professional Email Signatures" />
        <meta name="twitter:description" content="Create beautiful, professional email signatures in seconds. Works with all major email clients." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <StandardHeroSection
          toolLabel="Email Signature Generator"
          title="Create"
          highlightedText="Professional Signatures"
          restOfTitle="in Seconds"
          description="Create beautiful, professional email signatures that work with Gmail, Outlook, Apple Mail and more. No design skills required."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "Works with Gmail" },
            { icon: <Check className="h-4 w-4" />, text: "Works with Outlook" },
            { icon: <Check className="h-4 w-4" />, text: "Works with Apple Mail" }
          ]}
          image={emailSignatureImage}
          bgColor="bg-blue-900"
          textColor="text-white"
          toolLabelClassName="bg-white/30 text-white font-semibold backdrop-blur-sm border border-white/20"
        />
        
        <div className="bg-white">
          <section className="px-4 py-12">
            <div className="container mx-auto">
              <SignatureBuilder data={data} setData={setData} />
            </div>
          </section>
        </div>

        <EmailClientInstructions emailClientInstructions={emailClientInstructions} />
        <SimpleStepsSection />
        <BenefitsSection />
        <EmailSignatureFAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default EmailSignatureGenerator;
